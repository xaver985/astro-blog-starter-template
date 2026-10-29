---
title: "我手里的其他域名"
description: "从 lewis.net.im 到 sv.je：除了 lewisw.net，我还买过的几个域名，以及买它们时的考虑。"
pubDate: "Oct 29 2026"
lang: "zh-CN"
---

<!--
  草稿说明：
  - 带 TODO 的注释是需要你补充或确认的地方，发布前删掉所有注释。
-->

[Why I chose lewisw.net](/blog/domain/) 讲了我为什么选 lewisw.net 作为主域名。除了放这个博客的 lewisw.net，我手里其他的域名几乎都只用来做域名邮箱，收信的几个域名都配置了 MTA-STS，过程写在 [Hardening my domains' email with MTA-STS](/blog/mta-sts/) 里。这篇按购买的先后顺序，记录一下这些域名是怎么来的。

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

我买的第一个域名是 lewis.net.im，2025 年 6 月注册。它是马恩岛后缀 .im 下的二级域名。刚开始用着觉得还可以，但用久了越来越觉得太长，后来就渐渐不用了。

## lewis.si

之后我在 Dynadot 买了 lewis.si，花了 13 美元左右。.si 是斯洛文尼亚的后缀。

## lewisw.de 和 lewisw.me

接下来是 lewisw.de 和 lewisw.me。它们和主域名用的是同一个名字 lewisw，几乎是同一时间买的，注册日期只差三天。现在回头看，这两个买得有些多余，平时也不怎么用。

## lewis.ax

在开始买短域名之前，我还买了 lewis.ax。.ax 是奥兰群岛的后缀，奥兰群岛是芬兰的一个自治地区。

买之前我在 [tld-list](https://tld-list.com/) 上比价，当时最便宜的是 ISTanCo。现在 ISTanCo 首年 31.90 美元，续费 32.50 美元；比价网站上最便宜的已经换成了 NordName，31.20 美元。

.ax 的注册局没有提供 EPP 接口，注册商要在注册局的网页上手动提交，所以注册不是即时完成的。我等了将近一天，才确认域名注册成功。

DNSSEC 也费了些周折。我先让 AI 帮我查了 .ax 这个顶级域有没有签名，确认 .ax 支持 DNSSEC，但 ISTanCo 的后台没有 DNSSEC 选项。我发工单去问，对方回复说需要人工设置。lewis.ax 的 DNS 托管在 Amazon Route 53，我就把 Route 53 里的 DNSSEC 配置发了过去。第一次对方配错了，我再发工单提醒，改好以后解析才恢复正常。现在 .ax 下已经有 lewis.ax 的 DS 记录，DNSSEC 验证可以通过。

## 两三个字母的短域名

后来我想要两到三个字母的国家和地区顶级域名（ccTLD），先买了 lew.to，之后又买了 lew.lu 和 lew.bz。

每次买之前，我都会先在 tld-list 上查哪家注册商最便宜。.to 的价格有点奇怪，最便宜的是 Spaceship，注册和续费都是一年 20.70 美元；第二便宜的 Namecheap 常规价要 39.98 美元，用优惠码也要 31.98 美元。

lew.lu 是在 Hostinger 买的。Hostinger 的 DNSSEC 设置和 Cloudflare 不兼容，两家用的签名算法不一样。

<!-- TODO: lew.lu 的 DNSSEC 问题最后是怎么处理的？ -->

lew.bz 是在 Sav.com 买的，现在注册和续费都是 16.63 美元。买的时候觉得还行，到手以后才发现 lew 后面接 bz 不太好看，现在就放着等它过期。

## sv.je

买完这三个短域名，我先看上了 lew.is，但它早就被注册了。我索性再进一步，打算买一个两字母的域名。我最初想要 lw 加一个 ccTLD，可绝大多数都已经被注册，只剩下 lw.fo。我拿不准 .fo 的注册政策，就又搜了一圈，发现 .je 没有注册限制，而且还有不少两字母域名没被注册。.je 是泽西岛的后缀。

候选的有 sv、sj、sz 几个，我是凭视觉上的搭配和美感挑的。sz 看着有点锐利，sj.je 里有两个 j，重心有点靠下，最后选了 sv.je，2026 年 8 月注册。它是我手里最贵的域名，在 Spaceship 注册和续费都是 51.60 美元。比价网站上首年最便宜的是 Atom，13.50 美元，但它续费要 54.10 美元。

现在我的主邮箱也迁到了 sv.je 上。

<!-- TODO: 结尾可以写一两句现在的想法，比如以后哪些会续费、哪些会放弃，也可以不写。 -->
