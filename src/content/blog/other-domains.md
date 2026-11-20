---
title: "我手里的其他域名"
description: "从 lewis.net.im 到 sv.je：除了 lewisw.net，我还买过哪些域名，以及当时是怎么选的。"
pubDate: "Oct 29 2026"
lang: "zh-CN"
---

[Why I chose lewisw.net](/blog/domain/) 讲了我为什么选 lewisw.net 作为主域名。除了用来放博客的 lewisw.net，我手里剩下的几乎都只做邮箱用途，其中用于收信的几个都配了 MTA-STS，具体过程写在 [Hardening my domains' email with MTA-STS](/blog/mta-sts/) 里。这篇按购买的先后顺序，记一下这些域名是怎么来的。

| 域名 | 后缀所属 | 注册商 |
| --- | --- | --- |
| lewis.net.im | 马恩岛 | Spaceship |
| lewis.si | 斯洛文尼亚 | Dynadot |
| lewisw.de | 德国 | Spaceship |
| lewisw.me | 黑山 | Spaceship |
| lewis.ax | 奥兰群岛 | ISTanCo |
| lew.to | 汤加 | Spaceship |
| lew.lu | 卢森堡 | Hostinger |
| lew.bz | 伯利兹 | Sav.com |
| sv.je | 泽西岛 | Spaceship |

## lewis.net.im

我买的第一个域名是 lewis.net.im，2025 年 6 月注册，属于马恩岛后缀 .im 下的二级域名。刚上手时觉得还行，用久了越看越嫌长，后来就慢慢闲置了。

## lewis.si

之后我在 Dynadot 买了 lewis.si，花了 13 美元左右，.si 是斯洛文尼亚的后缀。

## lewisw.de 和 lewisw.me

接下来是 lewisw.de 和 lewisw.me。这两个和主域名用的一样是 lewisw 前缀，几乎是同期买的，注册日期只差三天。现在回头看买得有些多余，平时基本用不上。

## lewis.ax

在开始买短域名之前，我还买了 lewis.ax。.ax 是芬兰自治地区奥兰群岛的后缀。

买之前我在 [tld-list](https://tld-list.com/) 上比价，当时最便宜的是 ISTanCo。现在 ISTanCo 首年 31.90 美元，续费 32.50 美元；最便宜的已经换成了 NordName，31.20 美元。

.ax 的注册局没有提供 EPP 接口，注册商得去注册局网页上手动提交，所以没法即时生效。我等了将近一天，才确认注册成功。

配 DNSSEC 也费了些周折。我先让 AI 查了 .ax 这个顶级域有没有签名，确认它支持之后，发现 ISTanCo 后台根本没有相关选项。发工单去问，对方回复说需要人工设置。lewis.ax 的 DNS 托管在 Amazon Route 53，我就把 Route 53 里的配置发了过去。对方第一次还配错了，我又发工单提醒，改好后解析才恢复正常。现在 .ax 下已经能查到 lewis.ax 的 DS 记录，验证也能正常通过。

## 两三个字母的短域名

后来我想要两到三个字母的 ccTLD，先买了 lew.to，之后又买了 lew.lu 和 lew.bz。

每次买之前，我都会先在 tld-list 上查哪家注册商最便宜。.to 的价格有点奇怪，最便宜的是 Spaceship，注册和续费都是一年 20.70 美元；第二便宜的 Namecheap 常规价要 39.98 美元，用优惠码也要 31.98 美元。

lew.lu 是在 Hostinger 买的。Hostinger 的 DNSSEC 设置和 Cloudflare 不兼容，两家用的签名算法不一样，我后来也就没再折腾，这个域名到现在都没开 DNSSEC。

lew.bz 是在 Sav.com 买的，现在注册和续费都是 16.63 美元。买的时候觉得还行，到手以后才发现 lew 后面接 bz 不太好看，现在就放着等它过期。

## sv.je

买完这三个短域名，我先看上了 lew.is，可惜早就被占了。干脆再进一步，打算挑一个两字母的域名。最初想要 lw 配一个 ccTLD，可绝大多数都已经没了，只剩下 lw.fo。拿不准 .fo 的注册政策，又搜了一圈，发现泽西岛的 .je 没有注册限制，而且还剩不少两字母空着。

候选有 sv、sj 和 sz 三个，全凭眼缘和字形搭配来挑。sz 看着有点锐利，sj.je 里连着两个 j，视觉重心偏下，最后定了 sv.je，2026 年 8 月注册。它是我手里最贵的域名，在 Spaceship 注册和续费都是 51.60 美元；tld-list 上首年最便宜的是 Atom，只要 13.50 美元，但续费要 54.10 美元。

## 现在

从 lewis.net.im 到 sv.je，不算 lewisw.net，我前后一共买了九个域名。现在主要在用的是两个：lewisw.net 放这个博客，sv.je 收发主邮箱。
