# V6 定稿后的素材清单与 HTML 改版步骤

状态：V6 演讲稿暂定稿。  
下一阶段：基于原始 `0506/index.html` / commit `4f24015:index.html` 的米白 + 橙 + 青视觉系统，重做演讲版 HTML 内容。  
注意：不要基于当前冷色 V4 deck 继续改视觉。

---

## 1. 下一步执行顺序

### Step 1 — 锁定 HTML 源文件

使用源文件：
- `0506/index.html`
- 历史等价版本：`git show 4f24015:index.html`

保留：
- 米白背景：`#faf9f5`
- 橙色 accent：`#d97706`
- 青色 / teal skill：`#0d9488`
- mono 标签
- 高密度卡片
- 底部导航

不保留：
- 当前冷色蓝紫 V4 deck 视觉。

---

### Step 2 — 按 V6 重排页面结构

建议 22–26 页，适配 45min 干货 + 15min Q&A。

页面组：

1. Cover / 主题
2. 开场互动问卷
3. 今天回答的三个问题
4. 开场视频 / 肌肉 trailer 入口（可选）
5. 先看肌肉总览：n8n → Copilot+Skill → Agent
6. n8n 肌肉：workflow + pipeline
7. n8n → RAG / Chatbox / MCP 演进桥
8. Copilot+Skill 肌肉：PPT / HTML / 高审美产物
9. Skill matrix / 复杂表达资产
10. Agent 肌肉：SAM / Andrew / Rex / Lulu / Alex
11. Dashboard / MAE / 飞书多 bot proof
12. 三层架构总览
13. Layer 1 n8n：概念 / 费曼解释 / 设置 / 坑 / tips
14. Layer 2 Skills：概念 / 费曼解释 / 设置 / 坑 / tips
15. Layer 3 Agent OS：概念 / 费曼解释 / 设置 / 坑 / tips
16. 顺序学习 vs 逆序搭建
17. Agent 让学习链路变简单
18. Human judgment tradeoff：不知道的信息等于不存在
19. AI 时代思考拆解：代码变便宜，产品判断变贵
20. 项目反思 → 知识资产 / 书
21. 做软件 → 产品人训练
22. 内容生产 → 资产生产系统
23. CER/PTR 轻 proof
24. 资源 takeaway：Skill 清单
25. 资源 takeaway：Agent 框架设置 / 最小闭环
26. Closing + Q&A

---

## 2. 素材清单总览

分成 7 组：

1. 开场互动 / 问卷素材
2. n8n / 自动化素材
3. RAG / Chatbox / MCP / 外部概念素材
4. Copilot + Skill / PPT / HTML 审美素材
5. Agent OS / MAE / Dashboard / 飞书多 bot 素材
6. AI 时代思考拆解素材
7. CER/PTR 公司项目 proof 素材

---

## 3. 开场互动素材

### 需要做的页面

一个“现场举手 / 问卷”页面。

问题：

1. 你是不是每天都在用 AI？
2. 你有没有玩过 n8n / Dify 自动化拖拉拽？
3. 你有没有听过 / 玩过 MCP？
4. 你有没有自己沉淀过个人 Skill / SOP / Prompt 包？

### 需要素材

- 可以先做 HTML mock 问卷卡片。
- 如果要真实互动：后续可用飞书问卷 / Mentimeter / 微信投票。

### 页面视觉

四张问卷卡片，右侧显示“举手的人带走进阶实践；没举手的人下次真实试一次”。

---

## 4. n8n / 自动化素材

### 已有文件素材

路径：`/Users/jianan/.openclaw/workspace/n8n-workflows/`

优先展示：
- `01-overdue-reminder.json`：逾期任务提醒
- `02-eod-feishu.json`：EOD 飞书汇总
- `03-dashboard-sync.json`：Dashboard 同步
- `06-sharing-tracker.json`：分享项目跟踪

辅助：
- `05-cs25-monitor.json`
- `cs25_state.json`

### 已有视频/动效素材

- `sharing-video-20260515/remotion/out/n8n-pipeline-frame.png`
- `sharing-video-20260515/remotion/out/n8n-pipeline-prototype.mp4`
- `sharing-video-20260515/scenes/v8/PLAY.html`

### 需要补的真实截图

- n8n UI workflow overview 截图
- workflow 节点细节截图
- Airtable Tasks 表截图
- Dashboard 同步结果截图
- Feishu push / EOD 消息截图（如可公开）

### HTML 展示方式

一页展示 workflow 文件名 + 节点流。  
一页展示真实 n8n 截图 / Dashboard 截图。  
一页讲 RAG / Chatbox / MCP 演进桥。

---

## 5. RAG / Chatbox / MCP / 外部概念素材

### 外部概念链接

- MCP intro: https://modelcontextprotocol.io/introduction
- Dify docs: https://docs.dify.ai/
- n8n Advanced AI docs: https://docs.n8n.io/advanced-ai/
- n8n workflows docs: https://docs.n8n.io/workflows/
- IBM AI Agents: https://www.ibm.com/think/topics/ai-agents
- Martin Fowler / Xu Hao AI programming case: https://martinfowler.com/articles/2023-chatgpt-xu-hao.html

### 需要截图

- MCP “USB-C for AI applications” 图或文字片段
- Dify Studio / agentic workflow 页面截图
- n8n advanced AI / workflow docs 截图

### HTML 展示方式

做一页演进线：
Chatbox → RAG / 上下文工程 → Tool Use → MCP → Agent OS

旁边用费曼解释：
- Chatbox：聪明但坐在房间里的人
- RAG：给他资料柜
- Tool Use：给他手脚
- MCP：统一插口
- Agent OS：工作流程 + 记忆 + 任务表 + 团队机制

---

## 6. Copilot + Skill / PPT / HTML 审美素材

### 核心展示逻辑

这段不是展示“AI 会写代码”。

要展示：
AI + Skill 可以把复杂审美、内容结构和产品表达推进成可交付资产。

### 已有项目素材

当前 AutoStackSharing：
- `SPEECH_SCRIPT_V6_20260513.md`
- `PRESENTATION_RUN_OF_SHOW_V1_20260513.md`
- `HTML_DESIGN_OPTIMIZATION_V1_20260513.md`
- `VIDEO_OPENING_MUSCLE_CONCEPT_V1_20260513.md`
- `OPENING_VIDEO_MATERIAL_MAP_V1_20260513.md`
- `index.html`
- `0506/index.html`
- `sharing-video-20260515/deck-v4/index.html`
- `sharing-video-20260515/scenes/v8/PLAY.html`

GitHub commits 可展示：
- `4f24015`：Deploy latest slide-based deck (0506 version)
- `6545b92`：Draft full V5 sharing speech script
- `9c3196d`：Add V6 refinements
- `13e43ed`：Split visual preferences

### 需要补的素材

PPT：
- CER / sharing PPT 截图
- 路径参考：`/Users/jianan/Documents/SSME/CER-Presentation/SSME_QT_CER_0509.pptx`

HTML / 产品页：
- AutoStackSharing 主课件截图
- 之前仓库中的其他高审美 HTML 页面 / 产品页 / 课件页
- AIPM / Love-Spinner / CER_Tech-Frame 等如果可用

Skill proof：
- `product-lifecycle-orchestrator` SKILL.md 截图
- `frontend-slides` SKILL.md 截图
- `ai-video-production-pack` SKILL.md 截图
- `beautiful-html-templates` reference 截图

### HTML 展示方式

一页做“复杂表达资产墙”：PPT、HTML、视频 base、脚本文件、commit。  
一页做 Skill pipeline：PLO → frontend-slides → ai-video-production → writing-book → dashboard → reflection。  
一页做 “高密度内容骨架 + 高审美视觉皮肤”。

---

## 7. Agent OS / MAE / Dashboard / 飞书多 bot 素材

### Agent 框架素材

路径：`/Users/jianan/.openclaw/workspace/agents/`

可展示：
- `sam/SOUL.md`
- `sam/AGENTS.md`
- `sam/HEARTBEAT.md`
- `sam/USER.md`
- `andrew/SOUL.md`
- `rex/SOUL.md`
- `lulu/SOUL.md`
- `alex/SOUL.md`
- `memory/2026-05-13.md`（只截标题，不露隐私）
- `agent_tasks.md`

### 需要补的截图

- Agent 文件树截图
- SAM / Andrew / Rex / Lulu / Alex 角色图
- agent_tasks 状态截图
- memory 标题截图
- PROJECT_STATE 截图
- Dashboard 页面截图
- MAE 架构图 / MAE autopilot skill 截图
- 飞书多 bot 群聊界面截图（如可公开）

### HTML 展示方式

一页 Agent network。  
一页“文件机制”：SOUL / HEARTBEAT / memory / agent_tasks / PROJECT_STATE。  
一页 Dashboard / MAE / Feishu proof。

---

## 8. AI 时代思考拆解素材

### 核心观点

1. Agent 框架让学习链路变简单。
2. 搜索、整合、输出、分析可以自动化。
3. 但人脑判断不可省略。
4. 不知道的信息，对你来说就像不存在。
5. AI 时代核心能力是问题拆解、产品判断、方向选择、品味。

### 需要素材

- 一个跨 session 项目复盘示例（可脱敏）
- 一个“项目 → 复盘 → 方法论 → Skill / 书”的流程图
- 一个软件产品从 idea 到 prototype 的截图或流程
- 本次 sharing 从定位到稿件/HTML/视频/状态管理的 timeline

### HTML 展示方式

- “信息链路自动化”流程图
- “人脑不可省略”反差页
- “代码变便宜，产品判断变贵”大字页

---

## 9. CER/PTR 公司项目 proof 素材

### 轻带原则

CER/PTR 只作为 proof，不抢主线。

### 可展示素材

- CER 注册分析 PPT 截图
- `state/artifacts/cer-ptr-dual-layer-view.html`
- `state/diagrams/cer-ptr-dual-layer-view.svg`
- `state/CER_PTR_2W_PLAN_2026-05-11.md`
- `state/CER_PM_TABLE_REFINED_2026-05-11.md`

### 要讲的核心句

代码结构按能力包，交付节奏按 E2E 闭环。

### HTML 展示方式

一页双层图：
左：业务/项目推进 timeline  
右：能力包 stack

---

## 10. 资源 Takeaway 素材

### Skill 清单

产品 / 项目：
- product-lifecycle-orchestrator
- product-sense-review
- grill-me

内容 / 视频：
- ai-video-production-pack
- frontend-slides
- writing-book

自动化 / 系统：
- airtable-dashboard
- feishu-agent-workflow
- feishu-write-shared
- cron-execution-agent
- cron-judgment-agent

Agent / 模型：
- mae-autopilot
- model-router
- interaction-self-reflection

### Agent 设置

- SAM：主脑
- Andrew：学习 / 研究
- Rex：工作 / 工程
- Lulu：内容 / 设计 / 视频
- Alex：个人节奏

### 最小闭环

任务进入 → AI 判断 → 人确认 → 状态更新 → 复盘沉淀

### HTML 展示方式

拍照页：
- 三层框架
- Skill 清单
- Agent 设置
- 最小闭环
- 推荐路径：Agent OS → Skills → n8n

---

## 11. 现在最需要 Jianan 提供 / 截图的素材

优先级 P0：

1. n8n workflow UI 截图
2. Dashboard 页面截图
3. CER / sharing PPT 截图
4. 之前高审美 HTML 页面截图 / 链接
5. Agent 文件树截图 / agent_tasks 截图
6. 飞书多 bot 群聊截图（如果可公开）

优先级 P1：

7. Dify / MCP / n8n docs 截图
8. GitHub commit / diff 页面截图
9. Remotion pipeline 截图
10. AIPM / product HTML 页面截图

---

## 12. SAM 下一步要做

1. 基于 `0506/index.html` 建 `deck-v6/index.html`，保留原视觉系统。
2. 先做页面骨架，不急着塞所有截图。
3. 每个素材位用明确 placeholder 标记：`[待截图：n8n workflow]`。
4. 等 Jianan 补素材后替换 placeholder。
5. 不再改视觉基调。
