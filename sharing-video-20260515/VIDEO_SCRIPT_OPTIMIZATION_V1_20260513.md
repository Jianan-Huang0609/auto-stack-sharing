# 视频脚本优化 V1 — 从演讲稿抽取 2 分钟高转化短片

目标：视频不是复述整场演讲，而是做“开场钩子 + 肌肉展示 + 三层框架 + takeaway”。  
建议时长：100–130 秒。  
用途：演讲开场片、朋友圈/内部传播短片、HTML deck 的动态素材。

---

## 1. 视频和演讲的关系

演讲：负责讲清楚方法、踩坑、路径。  
视频：负责让观众快速相信“这套东西是真的、有画面、有冲击”。

所以视频不要塞太多细节。  
视频应该回答三个问题：

1. AI 现在能帮我做什么？
2. 这背后的系统结构是什么？
3. 观众能带走什么？

---

## 2. 推荐视频结构

### Act 1 — 肌肉展示：先相信（0:00–0:38）

#### Scene 01 — Cold Open（0:00–0:07）

画面：
聊天窗口快速出现：“帮我做一个分享。”
随后镜头拉远，变成完整系统面板。

字幕：
如果 AI 不只是聊天窗口？

旁白：
我先不讲工具，先看 AI 现在能带我做什么。

---

#### Scene 02 — n8n 自动化（0:07–0:18）

画面：
已完成 pipeline：Trigger → Airtable → Code → Feishu → Dashboard。
节点点亮，数据包移动。

字幕：
自动化：任务进入 → 判断 → 通知 → 状态更新

旁白：
它可以把任务状态接进真实工作流。

---

#### Scene 03 — Copilot + Skills（0:18–0:29）

画面：
代码文件、Skill 卡片、测试通过状态快速切换。
Spec → Plan → Build → Test → Review → Ship。

字幕：
软件/内容：从想法到可交付产物

旁白：
它也可以把写代码和做内容，变成一套可复用流程。

---

#### Scene 04 — Agent OS（0:29–0:38）

画面：
SAM 中心，Andrew/Rex/Lulu/Alex 环绕；memory、task ledger、heartbeat 点亮。

字幕：
多 Agent：角色、记忆、任务、升级

旁白：
它还可以像一个小团队一样，持续推进任务。

---

### Act 2 — 系统拆解：再理解（0:38–1:20）

#### Scene 05 — 三层合体（0:38–0:55）

画面：
三层架构堆叠：
Agent OS / Skills / n8n + Dashboard。
Human Judgment 作为 guardrail 出现。

字幕：
Agent 组织协作  
Skill 复用能力  
n8n 放大流程

旁白：
这不是工具堆叠，而是三层系统。

---

#### Scene 06 — n8n 最小闭环（0:55–1:03）

画面：
五步最小闭环横向展开。
触发 → 表格 → 判断 → 通知 → 更新。

字幕：
先做最小闭环，不要一上来全自动。

旁白：
第一步，只需要做一个最小闭环。

---

#### Scene 07 — Skill 三次原则（1:03–1:11）

画面：
一个重复任务出现 3 次后，转化成 SKILL.md。

字幕：
重复三次以上，再 Skill 化。

旁白：
反复出现的工作，才值得沉淀成 Skill。

---

#### Scene 08 — Agent 最小配置（1:11–1:20）

画面：
一个主脑 + 一个专业 Agent + memory + task ledger + dashboard。

字幕：
先一个主脑 + 一个专业 Agent。

旁白：
Agent 也不要一开始搭很多，先让任务可持续、可看见。

---

### Act 3 — 认知升级：最后带走（1:20–2:05）

#### Scene 09 — 学习路径（1:20–1:32）

画面：
两条路径对比：
我的路径：n8n → Skill → Agent OS  
推荐路径：Agent OS → Skill → n8n

字幕：
我是顺序学，但建议逆序搭。

旁白：
我自己从 n8n 学起，但现在更建议先想清楚角色和任务。

---

#### Scene 10 — 问题拆解能力（1:32–1:47）

画面：
三个案例卡片：
项目反思 → 知识资产  
做软件 → 产品判断  
内容生产 → 资源包

字幕：
代码变便宜，产品判断变贵。

旁白：
AI 时代更重要的，不是 prompt，而是把问题拆成系统的能力。

---

#### Scene 11 — CER/PTR 轻 proof（1:47–1:57）

画面：
CER/PTR 双层图快速出现。
项目推进层 + 能力包层。

字幕：
公司复杂项目，也可以拆成可管理结构。

旁白：
这套个人系统，也可以迁移到公司复杂项目里。

---

#### Scene 12 — Takeaway（1:57–2:10）

画面：
四个资源卡：
n8n 最小闭环 / Skill 模板 / Agent 设置 / 三层路径。

字幕：
带走一套搭建路径，不只是工具列表。

旁白：
用 Agent 承载角色，用 Skill 沉淀能力，用 n8n 串联流程，用人类判断守住方向。

---

## 3. 视频优化要点

### 必须更抓人的地方

1. 前 5 秒一定要有反差：聊天窗口 → 系统面板。
2. 前 30 秒必须展示真实肌肉，不讲概念。
3. 每 8–12 秒切换一个视觉焦点。
4. 每个抽象词都要配一个画面：Skill = SKILL.md，Agent = 节点图，n8n = pipeline。
5. 视频不要讲太多 CER，CER 只作为 proof 快速出现。

### 必须更干货的地方

视频里至少放 4 个可复制 tips：

- n8n：先做最小闭环。
- n8n：workflow 可以让 AI 写 JSON。
- Skill：重复三次以上再沉淀。
- Agent：先一个主脑 + 一个专业 Agent。
- Dashboard：是信任层，不是装饰。

---

## 4. 画面资产清单

### 已有

- Remotion n8n pipeline prototype
- V4 speech script
- Run-of-show
- AutoStackSharing HTML deck
- Skill 清单
- Agent 文件结构

### 需要补

- 真实 n8n workflow 截图
- Copilot/Codex 工作流截图
- SKILL.md 文件截图
- Agent memory / task ledger / heartbeat 截图
- Dashboard 截图
- CER/PTR 双层图截图

---

## 5. Remotion 制作建议

建议新增一个完整 composition：
`SharingSystemTrailerV1`

参数：
- 1920x1080
- 30fps
- 130s max
- 每个 scene 做成独立 React component

组件建议：
- ChatToSystemIntro
- N8nPipelineScene
- SkillPipelineScene
- AgentNetworkScene
- ThreeLayerStackScene
- LearningPathScene
- ThinkingCardsScene
- TakeawayScene

原则：
先做纯图形版，再替换真实截图。

---

## 6. 成功标准

一个好的视频应该让观众在 2 分钟内相信：

1. 这不是概念，已经有真实产物。
2. 这不是工具堆叠，而是一套系统。
3. 这不是只能 Jianan 用，别人也能从最小闭环开始复制。
4. 这场分享值得继续听。
