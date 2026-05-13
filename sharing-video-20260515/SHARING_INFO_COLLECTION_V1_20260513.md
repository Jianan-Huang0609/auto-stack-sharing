# Sharing 信息收集与决策锁定 V1

目的：避免反复问已经回答过的问题，保证后续演讲稿、HTML、视频按同一套状态执行。  
项目类型：B2B Content / Influence + Asset Production  
当前阶段：先收敛完整 MD 演讲稿，再设计演讲版 HTML；开场视频只做肌肉 trailer。

---

## 1. 已锁定的核心定位

### 主题

我如何搭了一个个人 AI 工作系统。

不是工具清单，不是公司项目汇报，不是纯技术教程。

### 主线

先讲个人 AI 工作系统，再轻带 CER/PTR 作为公司项目 proof。

### 核心叙事

1. Hook：先展现肌肉，AI 能带我做什么。
2. 三层落地方案：n8n / Skills / Agent OS。
3. 顺序学习与逆序搭建。
4. AI 时代思考拆解。
5. 资源 takeaway。

---

## 2. 已回答 / 已推断的问题，不再重复问

### Q1. 听众是谁？

已知：混合听众。

包括：
- 跨部门业务同事
- 软件 / 技术专家
- 自动化专家
- 对 AI 工作方式感兴趣的业务同事

讲法要求：
- 不能太技术黑话。
- 但也不能太浅，要让专家看到系统思考和真实落地。
- 每个专业概念要配费曼解释和真实 proof。

---

### Q2. 分享预计多长？

已知：主体演讲约 15–20 分钟。

当前 V4 稿件结构按 15–17.5 分钟设计。  
如果最终只有 15 分钟，需要压缩 CER/PTR 和资源清单展示时间。  
如果有 20 分钟，可以展开三层落地方案的坑和 tips。

---

### Q3. 开场视频要不要放？放多久？

已知：视频不是正式内容主线，而是开场前 1–2 分钟肌肉展示。

当前决策：
- 可以放，但只做 trailer，不承担讲课任务。
- 最佳时长：75–90 秒。
- 上限：120 秒。
- 内容：n8n → Copilot+Skill → Agent 搭建 → 反转 → 钩子。

正式演讲再解释方法。

---

### Q4. n8n 展示哪些 workflow？

已知可展示素材：

优先展示：
- `01-overdue-reminder.json`：逾期任务提醒
- `02-eod-feishu.json`：EOD 飞书汇总
- `03-dashboard-sync.json`：Dashboard 同步
- `06-sharing-tracker.json`：分享项目跟踪

辅助展示：
- `05-cs25-monitor.json`
- `cs25_state.json`

展示重点：
不是讲每个 workflow 细节，而是证明：任务状态可以触发、判断、通知、更新。

---

### Q5. Copilot + Skill 展示哪些产物？

已知：优先展示 AutoStackSharing 本项目，因为它最 meta，也最贴合分享主题。

可展示产物：
- `SPEECH_SCRIPT_V4_20260513.md`
- `PRESENTATION_RUN_OF_SHOW_V1_20260513.md`
- `HTML_DESIGN_OPTIMIZATION_V1_20260513.md`
- `VIDEO_OPENING_MUSCLE_CONCEPT_V1_20260513.md`
- `OPENING_VIDEO_MATERIAL_MAP_V1_20260513.md`
- `index.html`
- `sharing-video-20260515/deck-v4/index.html`
- `sharing-video-20260515/scenes/v8/PLAY.html`
- Remotion n8n prototype output
- GitHub commits：`ccabea4` / `dce9ba2` / `123312c` / `e5d7dc1` / `18ffa50`

展示逻辑：
“一个想法 → 剧本 → 页面 → 视频素材 → commit → 可分享资产”。

不要表达成“AI 替我写代码”。
要表达成：
“我用 AI + Skill 把想法推进成可交付资产。”

---

### Q6. Agent 框架能不能展示真实名字和文件结构？

已知：可以展示 SAM / Andrew / Rex / Lulu / Alex 作为个人 AI OS 的角色框架。

但注意：
- 可以展示角色和机制。
- 文件结构可以展示，但敏感内容要打码 / 只截标题。
- 不展示隐私记忆原文、私人对话细节、敏感工作信息。

可展示机制：
- SOUL.md：角色和边界
- AGENTS.md：工作协议
- HEARTBEAT.md：主动巡检
- memory：长期记忆
- agent_tasks：任务账本
- PROJECT_STATE：长项目状态

展示重点：
不是“拟人化很酷”，而是“长任务不会丢，上下文可持续”。

---

## 3. 视频开场已锁定

### 定位

开场前播放的肌肉 trailer，不是解释片。

### 顺序

1. n8n 自动化
2. Copilot + Skill 产物交付
3. Agent 搭建 / 多 Agent 协作
4. 反转：不是工具秀，是个人 AI 工作系统
5. 钩子：后面拆怎么搭、踩坑、从哪里开始

### 不讲

- 不展开三层方法论细节
- 不讲顺序学习 / 逆序搭建
- 不讲 CER/PTR 深结构
- 不讲资源清单

这些留给正式演讲。

---

## 4. 演讲稿当前需要补强的内容

### 4.1 专业概念需要补强

需要给每一层补：专业概念 + 费曼解释。

#### n8n / workflow automation

需要解释：
- workflow automation 是什么
- trigger / action / state / integration 的概念
- n8n 与 Zapier 类工具的差别可以轻带
- 为什么 AI + workflow 比单次 AI 对话更重要

费曼解释方向：
“n8n 就像一个自动化总机。它不负责思考所有事情，但它负责在正确时间，把正确信息送到正确系统。”

#### Skills / capability layer

需要解释：
- Skill 不是 prompt 收藏夹
- Skill 是可复用的任务执行方法
- 类似 SOP / playbook / reusable capability
- 可以串联多个 Skill 成 pipeline
- 可以通过反馈自进化，但要 human confirm

费曼解释方向：
“如果 prompt 是一句临时指令，Skill 就是一套可重复执行的做事方法。”

#### Agent OS / Multi-agent execution

需要解释：
- Agent 不只是聊天机器人
- Agent = 目标 + 工具 + 记忆 + 执行循环 + 反馈
- Multi-agent 不是开很多窗口，而是角色分工和协调机制
- MAE + Dashboard 让多 Agent 执行可管理
- 多 AI API / model routing 是成本与能力优化，不是堆模型

费曼解释方向：
“单个 AI 像一个聪明实习生；Agent OS 是让多个实习生有角色、有任务、有记录、有主管。”

---

### 4.2 真实思考过程需要补强

需要讲具体，不要只讲概念。

#### 例子 A：项目反思 → 知识资产 / 书

逻辑：
项目结束后不是只写一篇复盘，而是：
跨 session 汇总 → 抽取决策和反复修正点 → 找到模式 → 串成方法论 → 形成书 / 培训 / Skill。

需要强调：
这是从“经验”到“可学习资产”的转化。

#### 例子 B：做软件 → 训练产品人

逻辑：
AI 降低代码成本后，做软件更适合用来训练产品判断。

要讲：
问题定义、用户判断、流程设计、验证结果、复用产品化。

#### 例子 C：内容生产 → 资产生产系统

逻辑：
这次分享本身不是一篇稿，而是：
定位 → 状态收集 → 演讲稿 → HTML → 视频素材 → GitHub → Dashboard → 复盘。

---

## 5. HTML 设计已锁定 / 待修正

### 现状

之前 HTML 被重建成偏冷色科技感版本。Jianan 反馈：原来暖色调版本和当前版本对象可能没对齐，颜色不应一直变。

### 决策

后续需要锁定一套设计系统，不再随意变。

建议方向：
- 回到暖白底 + 橙色主强调 + 蓝色作为科技/系统辅助色。
- 更像“个人分享 / 课程 / 可信经验”，不是 SaaS 发布会。
- 页面服务演讲，不抢演讲。

### 处理方式

先不继续重写 HTML。  
先完成完整 MD 演讲稿 V5。  
MD 稳定后，再按固定设计系统重做/修正 HTML。

---

## 6. 真正待确认的问题

以下才是后续如果需要，值得问 Jianan 的问题：

1. 听众中“技术专家”和“业务同事”的比例大概是多少？只影响术语深度，不影响主线。
2. 哪些界面/截图不能公开展示，需要打码？
3. 开场视频最终是必须放，还是视完成度决定？
4. 暖色调是否明确回归旧版视觉：米白 + 橙色为主，蓝色为辅？

不要再问：
- 听众是不是混合
- 分享是不是 15–20 分钟
- 视频是不是 1–2 分钟肌肉 trailer
- n8n / Copilot+Skill / Agent 的主顺序
- Agent 名字能不能出现

---

## 7. 下一步执行顺序

1. 用本文件作为 Project State 的补充信息源。
2. Web search 补专业概念：workflow automation、AI agents、multi-agent systems、AI coding workflow、Feynman explanation。
3. 写完整 MD 演讲稿 V5。
4. 用户确认 V5 主线和细节。
5. 再回头修演讲版 HTML 设计与内容。
6. 最后决定开场视频是否继续做成 Remotion/录屏版本。
