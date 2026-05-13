# 开场肌肉视频素材地图 V1

定位：正式分享前 1–2 分钟播放。  
顺序：n8n → Copilot + Skill → Agent 搭建 → 反转 → 钩子。  
目标：用更多真实素材证明“这不是概念”，但不展开讲方法。

---

## 0. 总节奏

| 段落 | 时间 | 目标 | 观众感受 |
|---|---:|---|---|
| Cold Open | 0:00–0:08 | 一句话启动系统 | “不是普通 ChatGPT 回答？” |
| n8n 肌肉 | 0:08–0:28 | 展示自动化闭环 | “它真的在跑流程” |
| Copilot + Skill 肌肉 | 0:28–0:55 | 展示从想法到产物 | “它能做软件/内容资产” |
| Agent 肌肉 | 0:55–1:18 | 展示多 Agent OS | “背后像一个小团队” |
| 反转 | 1:18–1:30 | 工具秀 → 系统 | “原来核心不是工具数量” |
| 钩子 | 1:30–1:40 | 引出演讲 | “后面要听怎么搭” |

---

## 1. n8n 自动化肌肉：流程真的能跑

### 要传达的感觉

不是“我会拖节点”，而是：
任务状态可以自动流转，AI/Code 可以判断下一步，人收到提醒，Dashboard 更新。

### 可用素材

#### A. n8n workflow JSON / 文件

路径：
- `/Users/jianan/.openclaw/workspace/n8n-workflows/01-overdue-reminder.json`
- `/Users/jianan/.openclaw/workspace/n8n-workflows/02-eod-feishu.json`
- `/Users/jianan/.openclaw/workspace/n8n-workflows/03-dashboard-sync.json`
- `/Users/jianan/.openclaw/workspace/n8n-workflows/05-cs25-monitor.json`
- `/Users/jianan/.openclaw/workspace/n8n-workflows/06-sharing-tracker.json`

怎么用：
- 做快速闪现的文件名 / JSON 代码雨。
- 抽取节点名做动画卡片。
- 展示“不是 mock，workflow 已经有文件”。

建议画面：
左侧 JSON 片段滚动，右侧节点流：Trigger → Airtable → Code → Feishu → Dashboard。

---

#### B. Remotion n8n pipeline prototype

路径：
- `sharing-video-20260515/remotion/out/n8n-pipeline-frame.png`
- `sharing-video-20260515/remotion/out/n8n-pipeline-prototype.mp4`

怎么用：
- 作为 n8n 肌肉段主视觉。
- 直接嵌入或重新录屏。

建议字幕：
任务进入 → 判断 → 通知 → 状态更新

---

#### C. Dashboard / Airtable

状态：
- Dashboard 地址：`http://127.0.0.1:8080/`
- 当前 Basic Auth blocked，需要截图权限。

怎么用：
- 如果拿到截图，放在 n8n 段结尾：Dashboard 状态更新。
- 如果拿不到，用当前 HTML 重绘 Dashboard mock，但标注为“status board”。

---

### n8n 段推荐画面顺序

1. JSON 文件名快速闪现。
2. pipeline 节点点亮。
3. data packet 流动。
4. Feishu Push / Dashboard Update 卡片出现。
5. Loop Complete。

### n8n 段一句话

“AI 不是只给答案，它可以进入任务流。”

---

## 2. Copilot + Skill 肌肉：从想法到产物

### 要传达的感觉

不是“AI 替我写几行代码”，而是：
一个想法可以通过 Copilot/Codex + Skills 变成页面、视频、文档、代码、commit。

### 可用素材

#### A. 当前分享 HTML deck + PPT/HTML 审美 proof

路径：
- `index.html`
- `sharing-video-20260515/deck-v4/index.html`
- CER / sharing PPT 截图（待补）
- 之前仓库中的其他高审美 HTML 页面 / 产品页 / 课件页（待选）

线上：
- `https://auto-stack-sharing.vercel.app`

怎么用：
- 展示“演讲页面已经生成”。
- 展示 PPT / HTML 本身的审美和内容密度，证明 Copilot+Skill 不是只会写代码，而是能承接高要求表达。
- 快速切几页：封面、n8n、Skill、Agent、Takeaway。

建议字幕：
复杂审美 + 高密度内容 → 可交付表达资产

---

#### B. 视频 HTML base

路径：
- `sharing-video-20260515/scenes/v8/PLAY.html`
- `sharing-video-20260515/scenes/v8/scene-*.html`

线上：
- `https://auto-stack-sharing.vercel.app/sharing-video-20260515/scenes/v8/PLAY.html`

怎么用：
- 展示“视频素材 base 也被生成”。
- 作为 meta proof：这个开场视频本身也是系统产物。

---

#### C. 剧本 / 规划文件

路径：
- `sharing-video-20260515/SPEECH_SCRIPT_V4_20260513.md`
- `sharing-video-20260515/VIDEO_SCRIPT_V4_20260513.md`
- `sharing-video-20260515/VIDEO_OPENING_MUSCLE_CONCEPT_V1_20260513.md`
- `sharing-video-20260515/PRESENTATION_RUN_OF_SHOW_V1_20260513.md`
- `sharing-video-20260515/HTML_DESIGN_OPTIMIZATION_V1_20260513.md`

怎么用：
- 文件名快速闪现。
- 从 Markdown → HTML → Video Base 的流转动画。

建议字幕：
内容不是一篇稿，而是一组资产。

---

#### D. GitHub commit / repo diff

近期 commit：
- `ccabea4` Rebuild HTML deck for V4 sharing story
- `dce9ba2` Add V8 video HTML base for personal AI system story
- `123312c` Define opening muscle video concept

怎么用：
- 快速展示 commit hash、文件变更数量、GitHub repo。
- 证明“有版本、有产物、有交付”。

建议画面：
terminal/git log → changed files → Vercel page。

---

#### E. Skill 清单 / SKILL.md

路径：
`/Users/jianan/.openclaw/workspace/agents/andrew/skills/`

可用 Skill：
- product-lifecycle-orchestrator
- ai-video-production-pack
- frontend-slides
- airtable-dashboard
- feishu-agent-workflow
- feishu-write-shared
- mae-autopilot
- model-router
- writing-book
- interaction-self-reflection
- product-sense-review
- grill-me
- cron-execution-agent / cron-judgment-agent

怎么用：
- Skill 卡片矩阵。
- PLO → frontend-slides → video → dashboard → reflection 串联动画。

建议字幕：
重复经验，沉淀成可复用能力。

---

### Copilot + Skill 段推荐画面顺序

1. “帮我准备分享”输入。
2. Markdown 剧本文件生成。
3. HTML deck 页面出现。
4. video scenes / Remotion 文件出现。
5. GitHub commit 推送。
6. Skill matrix 浮现。

### Copilot + Skill 段一句话

“AI 不只是写一段代码，它能把复杂审美、内容结构和产品表达推进成可交付资产。”

---

## 3. Agent 搭建肌肉：一个人背后有一个小团队

### 要传达的感觉

不是“我开了很多聊天窗口”，而是：
有主脑、有专业 Agent、有记忆、有任务账本、有 heartbeat、有升级机制。

### 可用素材

#### A. Agent 框架文件

路径：
- `/Users/jianan/.openclaw/workspace/agents/sam/SOUL.md`
- `/Users/jianan/.openclaw/workspace/agents/sam/AGENTS.md`
- `/Users/jianan/.openclaw/workspace/agents/sam/HEARTBEAT.md`
- `/Users/jianan/.openclaw/workspace/agents/sam/USER.md`
- `/Users/jianan/.openclaw/workspace/agents/andrew/SOUL.md`
- `/Users/jianan/.openclaw/workspace/agents/rex/SOUL.md`
- `/Users/jianan/.openclaw/workspace/agents/lulu/SOUL.md`
- `/Users/jianan/.openclaw/workspace/agents/alex/SOUL.md`

怎么用：
- 文件树展开。
- SOUL / HEARTBEAT / memory / task ledger 四个机制卡片点亮。

---

#### B. memory / task ledger

路径：
- `/Users/jianan/.openclaw/workspace/agents/sam/memory/2026-05-13.md`
- `/Users/jianan/.openclaw/workspace/agents/agent_tasks.md`

怎么用：
- 展示“长任务跨 session 记住了”。
- 可模糊敏感内容，只显示标题、commit、状态。

建议字幕：
长任务不会丢，上下文能接住。

---

#### C. Multi-agent 角色图

已有结构：
- SAM：主脑 / 全局协调
- Andrew：学习 / 研究 / 技术评估
- Rex：工作项目 / 工程推进
- Lulu：内容 / 写作 / 设计 / 视频
- Alex：个人节奏 / 生活支持

怎么用：
- Agent 网络图。
- 心跳 pulse 动效。
- 任务从 SAM 分发到 Lulu / Andrew / Rex。

---

#### D. MAE / Dashboard 概念

路径/相关：
- `mae-autopilot` Skill
- `airtable-dashboard` Skill
- Dashboard `http://127.0.0.1:8080/`（截图待拿）

怎么用：
- Agent OS 画面右侧接 Dashboard。
- 表示“多 Agent 执行需要可视化”。

---

### Agent 段推荐画面顺序

1. 单个聊天窗口变成 SAM。
2. Andrew/Rex/Lulu/Alex 节点出现。
3. Memory / Task Ledger / Heartbeat / Escalation 点亮。
4. 任务卡从用户输入进入 SAM，再分发。
5. Dashboard 状态面板出现。

### Agent 段一句话

“当 AI 有角色、记忆和任务账本，它就不只是聊天窗口。”

---

## 4. 反转段素材

### 反转文案

第一屏：
这不是“用了很多 AI 工具”。

第二屏：
这是一个个人 AI 工作系统。

第三屏：
Automation / Skills / Agents / Dashboard / Human Judgment

### 画面

把前面所有素材：n8n、HTML、GitHub、Skill、Agent、Dashboard
收束成一个 AI OS 控制台。

---

## 5. 钩子段素材

### 钩子文案

接下来我会拆三件事：

1. 这套系统怎么搭
2. 哪些坑我踩过
3. 你可以从哪里开始

最后一句：
先看肌肉，后拆方法。

### 画面

切到正式分享封面：
`我的个人 AI 工作系统`

或者展示分享 HTML deck 第一页。

---

## 6. 最值得优先放进视频的素材 Top 12

1. Remotion n8n pipeline mp4 / frame
2. n8n workflow JSON 文件名和节点
3. V4 HTML deck 线上页面
4. V8 video base 页面
5. Speech script / video concept / run-of-show 文件
6. GitHub commit hash / changed files
7. Skill 文件夹矩阵
8. PLO / frontend-slides / ai-video-production / mae-autopilot 等 Skill 卡片
9. SAM / Andrew / Rex / Lulu / Alex 角色图
10. SOUL / HEARTBEAT / memory / agent_tasks 文件机制
11. Dashboard / Airtable 截图（待拿）
12. CER/PTR 双层图（只在反转或后续演讲中轻带，开场视频不必重点讲）

---

## 7. 当前缺口

必须补的真实截图：

- n8n UI 截图
- Dashboard / Airtable 截图
- Copilot/Codex 工作区截图
- GitHub diff 页面截图
- Agent 文件树截图

如果来不及：
用 HTML 重绘 mock，但优先混入真实文件名、commit、路径，保留可信度。
