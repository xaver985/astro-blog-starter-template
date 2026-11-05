---
title: "What I've learned from working with an AI agent"
description: "Notes from letting an AI coding agent maintain this site and help draft its posts: what it does well, where it needs me, and how I hand it work."
pubDate: "Nov 5 2026"
---

<!-- TODO: When did you start using AI agents, and which ones besides Claude Code? -->

Most of the recent changes to this site were made by an AI agent. It redesigned the layout, upgraded the site to Astro 7, cleaned up a pile of dependency updates, and helped me write the last two posts. I usually start a task from my phone, the agent works in a cloud sandbox, and the result comes back as a pull request that I read and merge.

After a few weeks of working this way, I have a clearer idea of what to hand over, what to keep, and how to ask.

## It is best at work that can be checked

The Astro 7 upgrade is a good example. On paper it was a list of version bumps: Astro 5 to 7, the Cloudflare adapter from 12 to 14, and several smaller packages. In practice, one adapter version rendered every page as the text `[object Object]`. The agent found that a later patch release fixed it, adjusted the Wrangler and Astro configs to match the new adapter, and then compared light and dark screenshots of every page against the old build before calling the job done.

None of this was hard, but it was tedious, and I would probably have put it off for months. What made it go well was that the result could be checked: the site either builds and looks the same, or it doesn't. When a task has a clear test like that, I let the agent run with it.

The dependency updates were similar. Dependabot had opened several pull requests, and after some were merged, one of them conflicted with the new lockfile. The agent regenerated the update on top of the current code instead of trying to patch the conflict by hand, and explained what else had changed as a side effect.

## It doesn't know my life

Writing is different. The agent can structure a post, keep the tone consistent and catch awkward sentences, but it doesn't know how I learned English or why I bought a particular domain. If I leave a gap, it will fill it with something plausible, and plausible is not the same as true.

So for posts, I now ask for a draft with the gaps marked. The first version of [How I studied English](/blog/english/) had `TODO` comments wherever a personal detail was missing, and I filled them in over several rounds. For [the post about my other domains](/blog/other-domains/), I had it look up the actual registration prices instead of guessing them. The finished posts read like mine because the facts in them are mine.

<!-- TODO: Any example of the agent getting a fact wrong, or writing something that didn't sound like you? -->

## How I hand it work

A few habits have made the results more predictable.

**One task, one pull request.** Each request gets its own branch and pull request. On a phone, a focused diff is something I can actually review. A large mixed one I would end up merging without reading.

**Say what should stay the same.** "Upgrade Astro" leaves a lot open. "Upgrade Astro, and the pages should look exactly as they do now" tells the agent what done means and gives it something to test against.

**Read the diff, not just the summary.** The summary tells me what the agent meant to do. The diff tells me what it did. They usually match, but checking is how I would notice when they don't.

**Correct it in the same thread.** When something is off, I reply with the specific problem rather than starting over. The agent keeps the context, and the fix usually lands as a small follow-up commit.

<!-- TODO: Any habits of your own to add, e.g. writing instructions in Chinese, or how you review on mobile? -->

## Where I still do the work

I still decide what the site should be and what goes on it. I write the facts, choose what to publish, and merge every change myself. The agent saves me the hours between deciding and having it done.

<!-- TODO: Closing thought: has this changed how you work outside this site? -->
