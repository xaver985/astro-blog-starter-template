---
title: "我手里的其他域名"
description: "从 lewis.net.im 到 sv.je：除了 lewisw.net，我还买过哪些域名，以及当时是怎么选的。"
pubDate: "Oct 29 2026"
lang: "zh-CN"
---

之前在 [Why I chose lewisw.net](/blog/domain/) 里写过主域名的来历。除了拿来放博客的 lewisw.net，我手里还陆续攒了九个域名，几乎全都只做邮箱用途。其中实际在收信的几个都配了 MTA-STS，配置过程记在 [Hardening my domains' email with MTA-STS](/blog/mta-sts/) 里。

先把这九个域名按购买顺序列在这里：

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

## 早期买的几个

2025 年 6 月，我买了第一个域名 lewis.net.im，属于马恩岛 .im 下的二级域名。刚上手时觉得还行，用久了越看越嫌长，慢慢就闲置了。

之后开始买 ccTLD，先在 Dynadot 花了 13 美元左右买下斯洛文尼亚的 lewis.si，又接连买了 lewisw.de 和 lewisw.me。后两个和主域名一样用了 lewisw 前缀，注册日期只差三天。现在回头看买得有些多余，平时基本用不上。

## 折腾最久的 lewis.ax

在开始买短域名之前，我还买过一个 lewis.ax。.ax 是芬兰自治地区奥兰群岛的后缀。

买之前我在 [tld-list](https://tld-list.com/) 上比过价，当时最便宜的是 ISTanCo。现在 ISTanCo 首年 31.90 美元，续费 32.50 美元；最低价已经换成了 NordName，31.20 美元。

这个后缀注册起来不太省心。.ax 注册局没有提供 EPP 接口，注册商只能去注册局网页上手动提交，没法即时生效，我等了将近一天才确认注册成功。

配 DNSSEC 同样绕了个弯。我先让 AI 查了 .ax 顶级域有没有签名，确认支持之后，翻遍 ISTanCo 后台也没找到相关选项。发工单去问，对方回复说要人工设置。lewis.ax 的 DNS 托管在 Amazon Route 53，我就把 Route 53 里的配置发了过去。对方第一次还填错了，我又发工单提醒，改好之后解析才恢复正常。现在 .ax 下已经能查到 lewis.ax 的 DS 记录，验证也能通过。

## 三字母短域名

全名后缀买完之后，我转去挑两到三个字母的 ccTLD，先买了 lew.to，后来又补了 lew.lu 和 lew.bz。每次下单前，照例先去 tld-list 查哪家注册商最便宜。

.to 的价格落差很怪。Spaceship 最便宜，注册和续费都是一年 20.70 美元；第二便宜的 Namecheap 常规价要 39.98 美元，用优惠码也要 31.98 美元。

lew.lu 买在 Hostinger。Hostinger 的 DNSSEC 设置和 Cloudflare 不兼容，两家用的签名算法不一样，我也就没继续折腾，这个域名到现在都没开 DNSSEC。

lew.bz 是在 Sav.com 买的，现在注册和续费都是 16.63 美元。买的时候觉得还行，到手后越看 lew 后面接 bz 越不太顺眼，现在就放着等它过期。

## 挑中 sv.je

收完这三个短域名，我原本看上了 lew.is，可惜早就被占了。干脆再往前一步，直接找两字母域名。

最开始想要 lw 配一个 ccTLD，查了一圈绝大多数都没了，只剩下一个 lw.fo。拿不准 .fo 的注册政策，就没有下手，继续翻其他后缀。后来发现泽西岛的 .je 没有注册限制，而且空着不少两字母组合。

候选落到 sv、sj 和 sz 三个之间，挑的时候全凭眼缘和字形搭配。sz 看着有点锐利，sj.je 连着两个 j，视觉重心偏下，最后定了 sv.je，2026 年 8 月完成注册。

它是我手里最贵的域名。在 Spaceship 注册和续费都是 51.60 美元；tld-list 上首年最便宜的是 Atom，只要 13.50 美元，不过续费要 54.10 美元。

## 现在

从 lewis.net.im 到 sv.je，不算主域名 lewisw.net，前后一共买了九个域名。现在真正留在手边用的就两个：lewisw.net 放这个博客，sv.je 收发主邮箱。
