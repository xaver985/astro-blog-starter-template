---
title: "停用 Claude 之后：Gemini 和 ChatGPT 的取舍"
description: "触发 Anthropic Portal KYC 停用 Claude 后，在 Google AI Pro 和 ChatGPT Plus 之间做取舍的记录。"
pubDate: "Nov 20 2026"
lang: "zh-CN"
---

半个月前写 [What I've learned from working with an AI agent](/blog/ai-agents/) 时，我在结尾选了 Claude Pro 作为最值得留下的订阅。没过多久，Claude 就用不了了。

严格来说账号没被封，只是弹出了 Anthropic Portal 的 KYC 验证。我手头没有护照，短时间内也没空去办。问过闲鱼上做代过 KYC 的人，对方回复 Portal 的 KYC 通过率很低，索性就先停用了。

少了 Claude 之后，日常剩下的主力是 Gemini 和 ChatGPT。这阵子把原本交给 Claude 的事情重新分给它们，两者的差别很快拉开。

## 中文写作

中文语感是两家最明显的分水岭。

上一篇里我就提过，ChatGPT 写中文的机器味很重，偶尔会给出不合语境的建议，也爱把一件普通的小事拔高成宏大结论。为了压住这股味道，我专门在 GPT 里配了去 AI 味和去防御性写作的 skill 来约束风格，收效依然一般，成稿里偶尔还是会冒出「不是……而是……」这类典型句式。

换到 Gemini 之后省心很多。它的简体中文表达很自然，读起来舒服，不用每段都盯着改腔调。

## 额度与日常任务

我现在订阅的是 Google AI Pro，主力用 Neon 和 Hydrogen 两个模型。之前在 ChatGPT Plus 上，用 GPT 6 Astra 跑中等强度的任务，额度掉得很快；Google AI Pro 的用量宽松得多，日常跑下来很够用。

我现在的 AI 使用重心偏文字工作，最常跑的是三个定时任务：RSS 文章总结、邮件内容总结和游戏平台愿望单打折提醒。这三个任务切到 Gemini 之后都完成得很好，每天收到的内容直接就能看。

维护博客这件事也能顺手接上。通过 Gemini App 里的自定义 GitHub MCP 连接器，我不用在本地配 Git，直接在对话里就能拉分支、写草稿并提 PR，这篇文章本身就是这么建出来的。它底层走的是纯 GitHub API，不像云端 Claude Code 那样自带虚拟机，没法跑构建，也没法截图对比页面效果。不过我平时本来就不太用得上写代码功能，用来改文章和做轻量调整已经够用。

## 现在的打算

ChatGPT Plus 前天已经到期，我应该不会续费了。代码能力对我来说用处不大，中文写作和日常定时任务 Gemini 又都能接住，接下来就先留着 Google AI Pro 单持。
