---
title: "What I've learned from working with an AI agent"
description: "From GPT-3.5 as a chatbot to agents that manage my phone, my NixOS machine and this site: what they do well, where they need me, and which subscription I would keep."
pubDate: "Nov 5 2026"
---

Most of the recent changes to this site were made by an AI agent. It redesigned the layout, upgraded the site to Astro 7, cleaned up a pile of dependency updates, and helped me write the last two posts. I usually start a task from my phone, the agent works in a cloud sandbox, and the result comes back as a pull request that I read and merge.

Working this way has given me a clearer idea of what to hand over, what to keep, and how to ask. But it took me a while to think of AI as more than something to chat with.

## From chatbot to agent

The first model I used was GPT-3.5, and for a long time my impression was simple: AI was a chat tool. I asked it questions and it answered.

That changed recently, when I installed Operit on my phone. It runs as a local agent on the device. Once I granted it permissions, it could sort my files and suggest what to clean up, based on how much time I spend in each app, how much storage each one takes, and what I told it about my preferences. Around the same time, I gave an AI access to a remote machine over SSH and let it edit my NixOS configuration. It did that well too. I did all of this with GPT 6.1 Sol.

Last month I subscribed to X Premium, which comes with the Grok bot. I now have it summarize my email every day and sort through the articles in my RSS feeds. I also pay for ChatGPT Plus, and a few days ago I added Claude Pro.

## It is best at work that can be checked

The Astro 7 upgrade is a good example. On paper it was a list of version bumps: Astro 5 to 7, the Cloudflare adapter from 12 to 14, and several smaller packages. In practice, one adapter version rendered every page as the text `[object Object]`. The agent found that a later patch release fixed it, adjusted the Wrangler and Astro configs to match the new adapter, and then compared light and dark screenshots of every page against the old build before calling the job done.

None of this was hard, but it was tedious, and I would probably have put it off for months. What made it go well was that the result could be checked: the site either builds and looks the same, or it doesn't. When a task has a clear test like that, I let the agent run with it.

The dependency updates were similar. Dependabot had opened several pull requests, and after some were merged, one of them conflicted with the new lockfile. The agent regenerated the update on top of the current code instead of trying to patch the conflict by hand, and explained what else had changed as a side effect.

## It doesn't know my life

Writing is different. The agent can structure a post, keep the tone consistent and catch awkward sentences, but it doesn't know how I learned English or why I bought a particular domain. If I leave a gap, it will fill it with something plausible, and plausible is not the same as true.

So for posts, I now ask for a draft with the gaps marked. The first version of [How I studied English](/blog/english/) had `TODO` comments wherever a personal detail was missing, and I filled them in over several rounds. For [the post about my other domains](/blog/other-domains/), I had it look up the actual registration prices instead of guessing them. The finished posts read like mine because the facts in them are mine.

## How I hand it work

A few habits have made the results more predictable.

**Do it all on the phone.** I don't sit down at a computer for any of this. I describe the task on my phone, and I review and merge the result there too.

**One task, one pull request.** Each request gets its own branch and pull request. On a phone, a focused diff is something I can actually review. A large mixed one I would end up merging without reading.

**Say what should stay the same.** "Upgrade Astro" leaves a lot open. "Upgrade Astro, and the pages should look exactly as they do now" tells the agent what done means and gives it something to test against.

**Read the diff, not just the summary.** The summary tells me what the agent meant to do. The diff tells me what it did. They usually match, but checking is how I would notice when they don't.

**Correct it in the same thread.** When something is off, I reply with the specific problem rather than starting over. The agent keeps the context, and the fix usually lands as a small follow-up commit.

## Which subscription I'd keep

Of the three I pay for, Claude Pro is the best value for me. The usage limits are generous, the model is strong, and its summaries of my email and RSS articles pick out what I care about. It is also good at understanding what I actually mean.

Compared with ChatGPT Plus, the biggest gap is usage. When I give GPT 6 Astra some work at medium effort, my usage drops fast. A similar job with Opus 5.5 at high effort used about 1% of my weekly limit.

The other difference is writing in Chinese. GPT's Chinese sounds heavily machine-written. It sometimes makes suggestions that don't fit the situation, or turns a plain point into a grand conclusion about something larger. A skill meant to remove that AI tone helped very little. With Opus, this almost never happens. Its Chinese reads fluently by default, and the same skill only makes it better.

## Where I still do the work

I still decide what the site should be and what goes on it. I write the facts, choose what to publish, and merge every change myself. The agent saves me the hours between deciding and having it done.

Overall, these tools have made me more productive. I no longer have to work out which CSS will make the site look good, open my phone's settings to see which app is taking up the most space, or spend time reading the nixpkgs documentation.
