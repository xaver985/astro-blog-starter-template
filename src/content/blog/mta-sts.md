---
title: "Hardening my domains' email with MTA-STS (for free, on GitHub Pages)"
description: "What MTA-STS is, why STARTTLS alone isn't enough, and how I host the policy for several domains on GitHub Pages"
pubDate: "Oct 13 2026"
---

I receive email on more than one domain, and for a long time I assumed that mail sent to me was encrypted in transit. Mostly, it is. But "mostly" turned out to be doing a lot of work in that sentence, so I set up **MTA-STS** on all of them. This post explains what it is, why it matters, and how I host it for free on GitHub Pages.

## The problem: STARTTLS is optional

When one mail server delivers a message to another, it usually upgrades the connection to TLS with `STARTTLS`. The catch is that this upgrade is *opportunistic*: if the receiving server doesn't seem to offer TLS, the sender shrugs and delivers in plain text.

That means an attacker sitting in the middle can strip the `STARTTLS` offer from the conversation (a downgrade attack), or spoof DNS so mail goes to a server they control. The sender has no way to know that your server *should* have supported TLS.

## What MTA-STS does

MTA-STS ([RFC 8461](https://datatracker.ietf.org/doc/html/rfc8461)) lets a domain publish a simple promise:

> Mail for this domain must be delivered over TLS with a valid certificate, and only to these MX hosts.

Sending servers that support MTA-STS (Gmail, Outlook, and other large providers do) fetch that policy, cache it, and refuse to deliver if the connection can't meet it.

There is an alternative called DANE, but it requires DNSSEC on your domain. MTA-STS only needs DNS and an HTTPS website, which makes it much easier to deploy.

## The three pieces

1. A DNS `TXT` record at `_mta-sts.example.com` announcing that a policy exists.
2. An HTTPS site at `mta-sts.example.com` with a valid certificate.
3. A policy file served at `https://mta-sts.example.com/.well-known/mta-sts.txt`.

The second and third parts are just static hosting, which is where GitHub Pages comes in.

## Hosting the policy on GitHub Pages

I used [jpawlowski's MTA-STS template](https://github.com/jpawlowski/mta-sts.template). The steps are:

1. Create a new repository from the template (use **Use this template**, not a fork or clone).
2. Edit `.well-known/mta-sts.txt`.
3. Put your hostname in the `CNAME` file, for example `mta-sts.lew.to`.
4. Add a `CNAME` DNS record pointing `mta-sts.example.com` to `<username>.github.io`, then enable GitHub Pages with HTTPS.

One detail worth knowing: GitHub Pages runs Jekyll, which ignores directories starting with a dot. The template's `_config.yml` fixes that with a single line:

```yaml
include: [".well-known"]
```

Without it, the policy file would simply return a 404.

Here is my actual policy. My mail is hosted by Fastmail, so the MX entries point at their servers:

```text
version: STSv1
mode: enforce
mx: eu1-smtp.messagingengine.com
mx: eu2-smtp.messagingengine.com
max_age: 1209600
```

Finally, add the TXT record that switches it on:

```text
_mta-sts.example.com.  TXT  "v=STSv1; id=20260101000000"
```

The `id` can be any string. What matters is that you **change it every time you change the policy**, because that's how senders know to fetch a new copy.

## Choosing the settings

- **`mode`**: `testing` means senders report problems but still deliver; `enforce` means they refuse to deliver if TLS fails; `none` withdraws the policy. Starting in `testing` for a little while is the safe approach, then switching to `enforce`.
- **`max_age`**: how long (in seconds) senders cache the policy. `1209600` is two weeks. Longer is more secure, but it also means a mistake lingers longer.
- **Changing providers**: if you ever change MX hosts, update the policy (and its `id`) to include the new hosts *before* you change the MX records, then remove the old ones later. Otherwise senders with a cached policy will refuse to deliver.

## Managing several domains

I have one repository per domain: `lew.to`, `lew.bz`, `lew.lu`, `lewis.ax`, and so on. Each one is a copy of the same template with a different `CNAME`. It's a little repetitive, but it keeps every domain independent, and the policy files almost never change.

## Getting reports with TLS-RPT

MTA-STS pairs well with TLS reporting (RFC 8460). One more TXT record asks senders to email you a daily summary of successful and failed TLS connections:

```text
_smtp._tls.example.com.  TXT  "v=TLSRPTv1; rua=mailto:tls-reports@example.com"
```

This is how you find out if something is broken before mail starts bouncing.

## Checking that it works

A quick check from the command line:

```bash
curl https://mta-sts.example.com/.well-known/mta-sts.txt
dig +short TXT _mta-sts.example.com
```

If the first command returns your policy without certificate errors and the second shows your TXT record, you're done. Online checkers such as [Hardenize](https://www.hardenize.com/) or [MXToolbox](https://mxtoolbox.com/) will also validate the whole setup.

## Wrapping up

The whole thing costs nothing, takes a few minutes per domain, and closes a real gap in how email is delivered. If you own a domain that receives mail, it's one of the cheapest security improvements you can make.
