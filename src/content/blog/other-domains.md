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
| lew.to | 汤加 | Spaceship |
| lew.lu | 卢森堡 | Hostinger |
| lew.bz | 伯利兹 | <!-- TODO: 注册商 --> |
| sv.je | 泽西岛 | Spaceship |

<!-- TODO: MTA-STS 那篇还提到了 lewis.ax，这次没有说到它。它还在吗？要不要写进来？ -->

## lewis.net.im

我买的第一个域名是 lewis.net.im，2025 年 6 月注册。它是马恩岛后缀 .im 下的二级域名。刚开始用着觉得还可以，但用久了越来越觉得太长，后来就渐渐不用了。

## lewis.si

之后我在 Dynadot 买了 lewis.si，花了 13 美元左右。.si 是斯洛文尼亚的后缀。

## lewisw.de 和 lewisw.me

接下来是 lewisw.de 和 lewisw.me。它们和主域名用的是同一个名字 lewisw，几乎是同一时间买的，注册日期只差三天。现在回头看，这两个买得有些多余，平时也不怎么用。

## 两三个字母的短域名

后来我想要两到三个字母的国家和地区顶级域名（ccTLD），先买了 lew.to，之后又买了 lew.lu 和 lew.bz。

每次买之前，我都会先在 [tld-list](https://tld-list.com/) 上查哪家注册商最便宜。.to 的价格有点奇怪，最便宜的是 Spaceship，注册和续费都是一年 20.70 美元，其他注册商要贵出一截。买的时候我查到第二便宜的要 50 美元左右。

<!-- TODO: 现在（2026 年 10 月）比价网站 domainoffer.net 上第二便宜的是 Namecheap，常规价 39.98 美元，用优惠码 31.98 美元。要不要在这里补一句现在的价格？ -->

lew.lu 是在 Hostinger 买的。Hostinger 的 DNSSEC 设置和 Cloudflare 不兼容，两家用的签名算法不一样。

<!-- TODO: lew.bz 在哪里买的？DNSSEC 的问题最后是怎么处理的？ -->

## sv.je

买了三个短域名以后，我还想要更短的，比如两个字母的。搜了一圈，我发现 .je 下还有不少没被注册的两字母域名。.je 是泽西岛的后缀。我在 sv、sj、sz 几个里面挑了 sv.je，2026 年 8 月注册。它也是我手里最贵的域名。买的时候同样是 Spaceship 的价格最低，57 美元左右。

<!-- TODO: 现在 Spaceship 的 .je 注册和续费是 51.60 美元；domainoffer.net 上首年最便宜的是 Atom（13.50 美元，续费 54.10 美元），续费最便宜的是 NicNames（优惠价 50 美元）。57 美元是你当时付的价格吗？ -->

<!-- TODO: 为什么最后选了 sv？可以写一句，也可以不写。 -->

<!-- TODO: 结尾可以写一两句现在的想法，比如以后哪些会续费、哪些会放弃，也可以不写。 -->
