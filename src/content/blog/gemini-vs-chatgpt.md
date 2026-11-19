---
title: "Claude 账号被封之后：Gemini 和 ChatGPT 怎么选"
description: "Claude 账号被封后，把日常对话、中文写作和博客维护切回 Gemini 与 ChatGPT 的对比记录。"
pubDate: "Nov 20 2026"
lang: "zh-CN"
---

半个月前写 [What I've learned from working with an AI agent](/blog/ai-agents/) 时，我在结尾选了 Claude Pro 作为最值得留下的订阅。没过多久，我的 Claude 账号就被封了。

<!-- TODO: 补充 Claude 账号被封的大致时间、触发原因或有没有尝试申诉，以及当时正在跑的工作流（比如博客维护、邮件/RSS 摘要）受到的影响 -->

少了一个主力选项后，日常剩下的就是 Gemini 和 ChatGPT。这段时间把原本交给 Claude 的活重新拆给它们，两家的差别比想象中清楚。

## 中文写作

中文语感是我最直观的分水岭。

上一篇里我就提过，ChatGPT 写中文的机器味很重，偶尔会给出不合语境的建议，也爱把一件普通的小事拔高成宏大结论，套上专门去 AI 味的 skill 改善也很有限。之前觉得 Opus 5.5 的中文已经顺畅很多，换到 Gemini 之后，发现它的简体中文表达还要更自然一些，读起来更像人写的普通话，不太需要反复删改腔调。

<!-- TODO: 可以补一个具体例子，比如最近写某段文字、邮件或摘要时，Gemini 和 ChatGPT 给出的不同表现 -->

## 额度与订阅性价比

在 ChatGPT Plus 上，额度消耗一直是痛点。给 GPT 6 Astra 安排一点中等强度的活，用量掉得很快，用起来总得省着点。

<!-- TODO: 补充你目前用的 Gemini 订阅方案（免费/Pro/AI Plus 等）、日常重度使用时的额度体感，以及和 ChatGPT Plus 价格/限额的对比 -->

## Agent、定时任务与生态集成

Claude 没了之后，最麻烦的是原本的自动化流程怎么接。

在 Gemini App 里，我现在用云端定时任务（Tasks）处理一部分固定周期的事情，另外通过自定义 MCP 连接器把一些外部服务接了进来。比如这篇文章本身，就是我在手机或网页端直接让 Gemini 调用 GitHub MCP 在仓库里拉分支、建草稿并提 PR 的，全程没有在本地配 Git。

不过这种方式和之前用云端 Claude Code 还是有明显区别。Claude Code 背后有完整的云端沙盒，能跑 `npm run build`、修依赖冲突，改完还能截图对比页面效果；通过 GitHub MCP 走的是纯 API 读写，适合写文章、改配置或者小范围改文件，碰到 Astro 升级这种需要跑构建验证的活，还是得靠本地工具（比如 Antigravity）或者带运行环境的 Agent。

<!-- TODO: 补充 ChatGPT 这边在 Agent / Codex / 定时任务 / MCP 或手机端（如 Operit、SSH 管 NixOS）里的最新使用体验，以及两者在工具调用稳定性上的对比 -->

## 各自更擅长的场景

<!-- TODO: 结合你最近的实际使用，列出哪些活你现在固定交给 Gemini，哪些活依然会打开 ChatGPT（例如特定模型 GPT 6.1 Sol / GPT 6 Astra 的优势、搜索、代码、长上下文等） -->

## 现在的打算

<!-- TODO: 收尾：接下来打算长期保留哪一个订阅（或双持），以及如果以后需要重度云端改代码准备怎么替代 Claude Code -->
