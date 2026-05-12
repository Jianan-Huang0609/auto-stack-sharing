# 演讲分享剧本 V4 — 我的个人 AI 工作系统

建议时长：15–20 分钟  
核心定位：先讲“我怎么搭了一个个人 AI 工作系统”，再用 CER/PTR 作为公司项目落地案例轻带。  
目标：更抓人、更干货、观众能带走一套可复制路径。

---

## 总标题

我如何搭了一个个人 AI 工作系统

副标题：从 n8n 自动化，到 Skill 复用，再到多 Agent 协作。

---

## 0. 开场 Hook：不讲工具清单，先看结果（0:00–2:00）

### 讲法

我今天不想讲一个 AI 工具清单。

我先给大家看一个结果：过去几周，我用 AI 搭了一个个人工作系统。

它可以帮我做几件事：

第一，自动化。
有任务状态变化，它可以读取 Airtable，判断下一步，推送提醒，再同步到 Dashboard。

第二，写代码和做产品。
我可以用 Copilot / Codex 加一组 Skills，把一个想法变成 spec、plan、代码、测试和发布。

第三，做内容资产。
这次分享本身，从主题定位、演讲稿、视频剧本、HTML 页面，到 Remotion 动画原型，都是这个系统帮我一起做的。

第四，多 Agent 协作。
它不是一个聊天窗口，而是一组有角色、有记忆、有任务账本、有 heartbeat 的 Agent。

所以今天真正的问题不是：AI 能不能回答一个问题。

而是：
如果 AI 开始帮我推进项目、写软件、做内容、复盘沉淀，它到底会变成一种什么工作方式？

### 屏幕金句

我不想展示更多工具。  
我想展示一套能持续工作的个人 AI 系统。

---

## 1. 我的个人系统：先看三块肌肉（2:00–5:00）

### 1.1 n8n：让工作流自己跑起来

第一块肌肉是 n8n。

它解决的问题很简单：AI 生成了内容和判断之后，怎么进入真实工作流？

比如一个最小闭环：
消息或定时器触发 → 读取 Airtable → AI / Code 判断 → 飞书或微信提醒 → Dashboard 更新。

这个闭环看起来简单，但它把 AI 从“回答问题”推进到了“参与流程”。

我的踩坑：
credential 和权限最容易卡；workflow 一多很容易乱；不要一开始追求全自动。

我的建议：
先做半自动。关键节点让人确认。workflow JSON 可以让 AI 直接写，再导入 n8n 调整。

### 1.2 Copilot + Skills：从写一段代码，到交付一个系统

第二块肌肉是 Copilot / Codex 加 Skills。

如果只是让 AI 写代码，很容易变成“它写一段，我改一段”。
真正有价值的是把开发流程结构化：

Spec → Plan → Build → Test → Review → Ship。

Skill 的作用，就是把“我怎么做一类事”沉淀成可复用能力。

比如这次分享不是一次 prompt 写完，而是串了多个能力：
PLO 判断任务类型，frontend-slides 做页面，ai-video-production 做视频，writing-book 沉淀长文，airtable-dashboard 同步进度，interaction-self-reflection 做复盘。

我的踩坑：
Skill 太多会变成垃圾堆；不绑定真实产物就会变成说明书；不要让它自动乱改自己。

我的建议：
一类事情做三次以上，再 Skill 化。Skill 可以自进化，但必须先记录、再 dry-run、最后 human confirm。

### 1.3 Agent OS：从一个 AI，到一个小团队

第三块肌肉是 Agent OS。

我现在不是只有一个万能助手，而是几个有分工的 Agent：

SAM：主脑，全局协调和升级处理。  
Andrew：学习、研究、技术评估。  
Rex：工作项目和工程推进。  
Lulu：内容、写作、设计、视频。  
Alex：个人节奏和生活支持。

这里关键不是名字，而是机制：
Memory、Task Ledger、Heartbeat、Escalation、Agent-to-Agent 通信。

它解决的是长任务的问题：跨 session 不丢上下文，不靠我每次重新解释。

我的踩坑：
Agent 太多会增加协调成本；没有任务账本，多 Agent 会变成多窗口混乱；heartbeat 如果只检查不推进，就没价值。

我的建议：
先从一个主 Agent + 一个专业 Agent 开始。一定要有任务账本、memory、升级规则和可视化 Dashboard。

---

## 2. 三层落地方案：怎么从工具变成系统（5:00–8:30）

刚才是肌肉展示，现在把它拆成一个可复制的系统。

### 第一层：n8n / Airtable / Dashboard — 流程层

它是什么：流程自动化和状态流转层。  
解决什么：提醒、同步、触发、状态展示。  
我的例子：任务逾期提醒、EOD 汇总、分享项目跟踪。  
你怎么开始：先做一个最小闭环：触发 → 表格 → 判断 → 通知 → 状态更新。  
特别 tips：可以让 AI 写 n8n workflow JSON，不必全部手拖。

### 第二层：Skills — 能力层

它是什么：可复用能力模块。  
解决什么：不用每次重新写 prompt，让一类任务有稳定流程。  
我的例子：PLO、AI 视频生产、前端 slides、写书、Airtable Dashboard。  
你怎么开始：把你做过三次以上的任务写成 Skill：适用场景、输入、步骤、输出标准、踩坑。  
特别 tips：Skill 可以串联成体系，也可以自进化，但必须 human confirm。

### 第三层：Agent OS / MAE — 协作层

它是什么：多 Agent 协作和长期任务管理层。  
解决什么：角色分工、上下文连续、任务追踪、升级处理。  
我的例子：SAM 协调 Andrew / Rex / Lulu / Alex 处理研究、工作、内容和个人任务。  
你怎么开始：一个主脑 + 一个专业 Agent + 任务账本 + memory + heartbeat。  
特别 tips：Agent 一定要可视化，否则人很难信任它真的在工作。

### 这一页的总结

n8n 让流程跑起来。  
Skill 让能力复用起来。  
Agent 让任务持续推进。  
Dashboard 让系统被看见。  
Human 负责判断和方向。

---

## 3. 我的学习路径：顺序学，逆序搭（8:30–10:00）

我自己的路径其实是顺序学的：

先学 n8n，因为它最直观，能马上看到自动化效果。
然后学 Skill，因为我发现单次 workflow 不够，方法需要复用。
最后搭 Agent OS，因为任务复杂后，需要角色、记忆和长期协作。

所以我的真实路径是：
n8n → Skill → Agent OS。

但如果让我建议别人，我会反过来：
Agent OS → Skill → n8n。

为什么？

因为先有 Agent OS，你才知道任务和角色怎么分。  
再有 Skill，你才知道哪些能力值得沉淀。  
最后上 n8n，你才知道该自动化什么。

否则很容易陷入一个坑：
为了自动化而自动化，搭了很多 workflow，但没有解决真正重要的问题。

---

## 4. AI 时代的思考拆解：真正变化的是“问题到方案”的路径（10:00–13:30）

我觉得 AI 时代真正重要的能力，不是会不会问 prompt，而是能不能把问题拆成系统。

### 例子 1：项目反思，可以变成知识资产

以前做项目反思，可能就是写一篇复盘。

现在可以让 Agent 跨 session 总结：
这次项目有哪些关键决策？  
哪些地方反复修改？  
哪些 skill 用到了？  
哪些问题下次还会出现？

然后把多个项目复盘串起来：
按主题归类，按案例展开，按方法论提炼。

再进一步，它可以变成一本书、一套培训材料，或者一个新的 Skill。

这不是 AI 瞎写书，而是从真实项目里沉淀知识资产。

### 例子 2：更积极地做软件，训练自己成为产品人

第二个变化是，我会更积极地做软件。

以前做一个小工具，成本很高。  
现在 AI 降低了代码成本，但反而让产品判断更重要。

因为当代码越来越便宜，真正稀缺的是：
你能不能定义问题？  
能不能判断用户是谁？  
能不能设计流程？  
能不能验证结果？  
能不能把 demo 变成可复用产品？

所以我现在把做软件当成训练产品能力的方法。

不是为了证明“AI 能写代码”，而是训练自己从问题到产品方案、再到验证闭环的能力。

### 例子 3：内容生产，不再只是写稿

这次分享本身就是例子。

一开始不是写稿，而是先判断：
观众是谁？  
他们听完要相信什么？  
我有哪些真实 proof？  
哪些内容适合演讲？  
哪些内容适合视频？  
哪些内容最后要沉淀成资源包？

然后才拆成演讲剧本、视频剧本、素材清单、Remotion 动效、GitHub 状态、Dashboard 跟踪。

所以内容生产不再只是写作，而是一套资产生产系统。

---

## 5. 公司项目轻带：CER/PTR 是这套方法的一个落地案例（13:30–15:00）

前面讲的是我的个人系统。那它能不能用于公司项目？

可以，但我会把它作为一个落地案例，而不是今天的主线。

比如 CER/PTR 项目。

它不是简单让 AI 写文档，而是一个复杂工作流：
输入材料、业务流程、用户需求、LLM/Agent 功能、规则校验、Evals、人审、交付、Transfer 和 ROI。

这时 PLO 就能帮我把它拆成两层：

一层是项目推进：未来两周谁做什么，SE 用户需求怎么确认，PTR 开发架构怎么推进，CER Transfer 怎么落地。

另一层是能力包：Input/Data、Workflow、Architecture、AI Function、Evals、Review、Transfer/Reuse。

这个案例说明一件事：
个人 AI 工作系统不是玩具。它可以把复杂公司项目拆成可管理、可验证、可复用的结构。

但公司项目要注意边界：
敏感数据、权限、合规、人审和责任归属，都必须明确。

---

## 6. 最后 Takeaway：观众可以带走什么（15:00–17:30）

最后我给大家几个可以直接带走的资源和路径。

### Takeaway 1：一个最小闭环

不要一上来搭完整系统。

先做一个最小闭环：
任务进入 → AI 判断 → 人确认 → 状态更新 → 复盘沉淀。

### Takeaway 2：一套三层框架

Agent OS：谁来做，如何持续推进。  
Skills：这类事应该怎么做。  
n8n：状态怎么流转，怎么提醒，怎么可视化。

### Takeaway 3：我的 Skill 清单

- product-lifecycle-orchestrator：产品生命周期编排 / PLO
- ai-video-production-pack：AI 视频生产
- frontend-slides：HTML / 前端演示页
- airtable-dashboard：Airtable + Dashboard 同步
- feishu-agent-workflow：飞书工作流
- feishu-write-shared：飞书写作沉淀
- mae-autopilot：多 Agent 执行 / MAE
- model-router：多模型路由
- writing-book：长文 / 书稿沉淀
- interaction-self-reflection：交互复盘与自优化
- product-sense-review：产品感 review
- grill-me：高压质询 / 方案拷打
- cron-execution-agent / cron-judgment-agent：定时执行与判断

### Takeaway 4：我的 Agent 框架设置

- SAM：主脑 / 全局协调 / 升级处理
- Andrew：学习 / 研究 / 技术评估
- Rex：工作项目 / 工程推进
- Lulu：内容 / 写作 / 设计 / 视频
- Alex：个人节奏 / 生活支持

底层文件机制：
SOUL.md、USER.md、AGENTS.md、HEARTBEAT.md、memory、agent_tasks、PROJECT_STATE。

### Takeaway 5：一句话

AI 的边界，不只取决于模型有多强。  
更取决于你有没有把它组织成系统。

用 Agent 承载角色，  
用 Skill 沉淀能力，  
用 n8n 串联流程，  
用 Dashboard 建立信任，  
用 Human Judgment 守住方向。

这就是我现在正在搭的个人 AI 工作系统。
