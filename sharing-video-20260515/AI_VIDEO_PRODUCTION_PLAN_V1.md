# 周五内部分享视频 — AI Video Production Plan V1

基于 `ai-video-production-pack` 路由。

## PLO / Video Routing

- PLO 类型：B2B Content / Internal Sharing
- 视频 lane：Internal Sharing / Explainer
- 辅助 lane：Hook / Reversal（只用于开头 12 秒）、Product/System Ad（用于 Dashboard / Agent OS 质感段）、Image-to-Video（用于截图/图示动起来）
- 风格锁定：浅色科技感、可信、内部分享友好、少量高级动效，不走暗黑赛博。
- 生成策略：
  - 精确 UI / 文字：HTML / 截图 / 后期字幕，不交给视频模型生成。
  - 氛围 / 隐喻 / 转场：即梦/Seedance/可灵图生视频。
  - 每个 scene 只表达一个信息任务。

## Global Visual Language Lock

- Aspect: 16:9
- Palette: warm white `#F8FAFC`, soft blue `#DCEBFF`, cyan `#B7F3FF`, slate `#1E293B`, accent purple `#8B5CF6`
- Motion grammar: slow push-in, card flow, node pulse, timeline snap, soft parallax
- Typography: exact text overlay in post; video model should not create readable long text
- Texture: glassmorphism cards, subtle grid, soft shadows, light particles only as restrained accents
- Negative: no dark cyberpunk, no chaotic neon, no fake UI text, no warped screenshots, no dramatic human faces, no cluttered labels

## 12s Opening Hook / Reversal

目标：把“Chatbot → AI Operating System”的反转在 12 秒内讲清楚。

| Time | Job | Visual | Prompt note |
|---|---|---|---|
| 0–3s | Stop scroll | 一个孤立聊天窗口漂浮在空白工作台，周围是散落的会议、代码、任务卡 | lonely chat window, scattered work fragments, clean light-tech |
| 3–6s | Reveal stakes | 碎片越来越多，形成失控的信息风暴，但保持浅色专业 | documents, dashboards, WeChat-like task cards orbiting, controlled tension |
| 6–9s | Turn | 中央出现 AI OS hub，碎片被吸入并分类成 Skill / Agent / Workflow 三条轨道 | central orchestration hub, cards snap into lanes |
| 9–12s | Payoff | 三条轨道汇聚成 “AI Operating System” 标题，画面稳定 | elegant reveal, exact title overlay in post |

Seedance / 即梦提示词草案：

```text
16:9 clean light-tech internal presentation style. A lonely chat window floats above a white digital workspace while scattered meeting notes, code cards, dashboard tiles and task messages drift around it. Over 12 seconds, the fragments become organized by a central glowing AI operating system hub, snapping into three elegant lanes: skills, agents, workflows. Camera slowly pushes in with subtle parallax, soft blue-white gradient, glassmorphism cards, controlled motion, premium business explainer aesthetic. Do not generate readable UI text, no dark cyberpunk, no chaotic neon, no warped cards. Exact titles will be overlaid in post.
```

## Scene-by-Scene Production Plan

| Scene | Info job | Visual metaphor | Production mode | Prompt / direction | Assets |
|---|---|---|---|---|---|
| 01 Hook / AI OS | 从 chatbot 反转到 operating system | chat window → AI OS hub → Skill/Agent/Workflow lanes | AI video or HTML hero animation | Use 12s hook prompt above; overlay exact title in post | none / current HTML preview |
| 02 Problem / Work Fragmentation | 问题不是回答，而是上下文和任务碎片化 | meeting/doc/code/dashboard/WeChat cards scattered then pulled into timeline | HTML motion + optional image-to-video | animate cards with timeline snap; keep text as overlay | mock cards; later real screenshot |
| 03 PLO Routing | PLO 先判断项目类型 | one input beam splits into B2B Enterprise, B2B Content, ToC, Personal | motion graphic / image-to-video | preserve diagram; subtle node pulse and branching lines | PLO routing diagram |
| 04 Vertical vs Horizontal | 项目任务和产品能力包不是一回事 | vertical timeline on left; horizontal capability stack on right; mapping bridge | HTML diagram + parallax | exact labels in HTML; generate soft depth background only | dual-layer diagram |
| 05 Multi-Agent OS | SAM 协调四个 agent | central SAM node with Andrew/Rex/Lulu/Alex orbit; memory/task/heartbeat rings | AI metaphor video + overlay labels | slow orbit, calm node pulses, no sci-fi chaos | agent workspace screenshots |
| 06 n8n Automation Layer | 输出进入真实管理闭环 | n8n workflow → Airtable → Dashboard → Reminder pipeline | product/system ad lane | premium software pipeline, cards flow left-to-right, hero dashboard reveal | n8n + dashboard screenshots |
| 07 Hermes Evolution Loop | skill 不无限堆，而是 observe→patch→confirm | circular evolution loop, dry-run patch card, human confirm gate | motion graphic | clean loop animation; use exact stage labels in post | skill monitoring template |
| 08 Meta Reveal | 这个视频由它解释的系统生产 | file tree → storyboard → HTML scene → render pipeline | product/system ad + screen capture | cinematic desktop reveal, files assemble into final timeline | project folder screenshots |

## Image-to-Video Prompts for Existing First Frames

### PLO Routing Diagram

```text
Use @Image1 as the first frame and preserve its exact composition, layout, colors and diagram structure. Animate only subtle glowing branch lines from the central PLO entry into four paths, with a slow camera push-in and gentle parallax depth. Keep all text stable and readable, do not invent new text, no warping, no melting, no extra icons. 5 seconds, 16:9, clean light-tech internal presentation style.
```

### Dashboard / n8n Pipeline

```text
Use @Image1 as the UI/dashboard reference and preserve the layout. Animate task cards flowing from a workflow node into a dashboard panel, with soft cyan connector lines and subtle status pulses. Camera performs a slow left-to-right tracking move. Keep UI text stable; do not generate fake readable text. Premium software product explainer, white-blue palette, controlled motion, 7 seconds, 16:9.
```

### Multi-Agent OS Node Map

```text
A clean light-tech node graph showing a central coordinator hub connected to four specialist agent nodes. Memory, task ledger and heartbeat rings pulse gently around the system. Slow orbital camera movement, glassmorphism cards, soft blue and purple accents, elegant internal sharing visual, no dark cyberpunk, no chaotic particles, no fake text. 7 seconds, 16:9.
```

## Cover Concepts

主标题候选：
1. AI 主脑
2. 工作系统
3. Agent 团队

副标题候选：
1. 从聊天到操作系统
2. Skill × Agent × Workflow
3. 一个真实内部分享案例

封面方向：
- 中央 AI OS hub + 三条能力轨道
- 画面标题巨大清晰，副标题小而克制
- 背景用浅色科技网格和柔和粒子

封面 prompt：

```text
16:9 high-click but professional internal sharing cover. Main visual: a central glowing AI operating system hub organizing three clean lanes labeled by overlay later: Skill, Agent, Workflow. White and soft blue light-tech background, glassmorphism cards, subtle grid, premium startup presentation aesthetic. Large empty title area at top-left for Chinese title overlay. No fake readable text, no dark cyberpunk, no human face, no clutter. Strong visual hierarchy, mobile-readable thumbnail composition.
```

## Practical Next Steps

1. 用 HTML / motion graphic 先完成 8 个 scene 的确定版，保证文字和 UI 不变形。
2. 对 Scene 01 / 05 / 06 / 08 生成 AI video 氛围片段，作为转场或背景层。
3. 对 Scene 03 / 04 / 07 用图生视频做轻微动效，不让模型改文字。
4. 封面先出 4 张方向图，再选一张扩展 16:9。
5. 最终后期统一字幕、标题、音效和截图证据。
