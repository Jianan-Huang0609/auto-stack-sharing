# Deck V6 项目上下文 · 2026-05-14

## 项目路径
/Users/jianan/.openclaw/workspace/repos/auto-stack-sharing/

## 线上地址
https://auto-stack-sharing.vercel.app/sharing-video-20260515/deck-v6/index.html?v=62dddb3

## 最新 Commit
62dddb3 - redesign P07-P11 practical n8n narrative
分支：master，自动部署到 Vercel Production

## 总页数
37 页（已删除 2 页：原 P03 能力边界、原 P03 定位分层）

## 完整页序
  01: 我如何搭了一个个人 AI 工作系统
      不是工具清单。45min 展开真实跑起来的 n8n + Skills + Agent OS 三层架构。
  02: 先定位：你现在站在哪一层？
      两个举手问题快速定位基础，再用词云收集大家对 AI 的感受和期待。
  03: 今天要回答三个问题
      这三个问题，就是接下来 45 分钟的地图。先锁定问题，再看结果，再拆方法。
  04: 先看一个真实跑起来的例子
      三个真实场景案例，对应三层结构。先看产物，再拆方法：n8n 跑流程、Skills 管交付、Agent OS 组织协作。
  05: Muscle 1 / n8n
      流程真的能跑起来：任务状态进入系统，AI 或代码判断，人收到提醒，状态更新，Dashboard 可观察。
  06: n8n 是自动化总机
      它不一定负责所有思考，但负责在正确时间把正确信息送到正确系统。
  07: 为什么是 n8n？
      n8n 是可视拖拉拽+编排的自动化工具；不是代码框架，是连接器。先看它适合做什么，再看我怎么用它。
  08: 实操案例：AI × RAG × n8n
      不需要写代码。用户提问 → n8n Webhook 触发 → 检索知识库 → AI 总结回答 → 定时/条件推送 → 回写记录。一个真实跑起来的 RAG 闭环。
  09: 为什么还在用 n8n？
      Agent 框架管思考和协作，n8n 管触发和连接。两者不是替代关系，而是分工：n8n 做稳定的"神经系统"，Agent 做"大脑"。
  10: 我的 n8n 实践 + 踩过的坑
      9 条 workflow 不是 demo，是真实在跑的。大部分 Cron 定时触发，少数 Webhook 事件驱动。每个都对应一个具体问题。
  11: n8n 之后：Skills + Agent OS
      n8n 不是万能的。当任务开始重复、需要记忆和审美判断，就需要 Skills 和 Agent OS 来承接。三层各管各的，不是替代关系。
  12: Muscle 2 / Copilot + Skill
      不是 AI 写几行代码，而是把复杂想法推进成结构清楚、审美在线、可展示、可交付的完整资产。
  13: PPT / HTML / Video / Script / Commit / Skill.md
      高审美和高结构，是更真实的壁垒。这六样东西都是用 Copilot + Skill 推进出来的。
  14: 高审美和高结构，是更真实的壁垒
      写几行代码不是最难的。难的是把复杂想法推进成内容骨架、视觉系统、交付标准和可复用方法。
  15: Skill Pipeline：从项目状态到最终产物
      每个 Skill 是独立的可执行方法包，但可以串联成完整产物流水线。
  16: Muscle 3 / Agent OS
      一个人背后，有一个小团队。每个 Agent 有角色边界、任务账本、记忆和心跳节奏。
  17: SAM 居中，专业 Agent 环绕
      不是拟人化装饰，而是角色边界 + 执行循环 + 升级规则。
  18: 不是拟人化，而是机制
      SOUL / USER / AGENTS / HEARTBEAT / memory / agent_tasks / PROJECT_STATE — 七个文件让角色、记忆、任务、状态各就各位。
  19: 系统要让人看得见，才值得信任
      Dashboard 让任务状态可观察；MAE 让多 Agent 可编排；飞书多 bot 让信息进入真实协作场。
  20: 这些不是三个工具，而是三层系统
      n8n 放大流程，Skills 复用能力，Agent OS 组织协作。Human judgment 贯穿三层。
  21: n8n：流程层
      Workflow automation 本质：触发、读取状态、判断、执行、反馈。
  22: n8n 怎么开始？
      最小闭环比宏大自动化更重要。先让一个任务可流转、可观察、可确认，再扩展。
  23: Skills：能力层
      Skill 不是 prompt 收藏夹，而是可重复执行的做事方法。
  24: Skill 怎么写才有用？
      好的 Skill 必须有 anatomy：场景、输入 contract、执行步骤、输出格式、验收标准、常见反例。
  25: Agent OS：协作层
      Agent OS 不是多开聊天窗口，而是目标、工具、记忆、执行循环、反馈和可视化的组合。
  26: Agent 怎么搭才不会乱？
      先定义角色边界和升级规则，再建任务账本，再配可视化。不要一上来就建五个 Agent。
  27: 我是顺序学的
      n8n，Skills，Agent OS。从最直观的 workflow 起步，发现需要复用能力，任务复杂后搭 Agent OS。
  28: 但我推荐你反过来搭
      Agent OS，Skills，n8n。先从角色、任务和状态开始，再沉淀能力，最后把高频流程接进自动化。
  29: Agent 让学习变简单，但人脑不可省略
      AI 可以帮你搜索、整合、输出、分析。但当你不知道一个信息时，它对你来说就像不存在。
  30: 代码变便宜，产品判断变贵
      AI 时代真正重要的能力：问题拆解、方向选择、结构化表达、审美品味、把产物交付到真实业务场景。
  31: 三个从项目长出来的思考
      不是读后感，而是实际搭建和使用系统之后形成的判断。
  32: 这次分享本身，就是一条资产生产线
      不是写一篇稿，而是把分享做成可追踪、可迭代、可复用的资产生产系统。
  33: CER / PTR proof：个人系统也能落到公司复杂项目
      CER 注册分析 + PTR 生成架构，只做 proof，不抢主线。
  34: 用户需求之后，我会这样推进架构开发包
      先内部轻量对齐（拆法能不能覆盖需求？优先级对不对？有无致命缺口？），再和外部专家做 work review，回来内部确认锁版。
  35: 别人怎么开始：先做最小闭环
      不要一上来追求全自动。先让一个任务可流转、可观察、可确认，再扩展。
  36: 可以带走的资源包
      Skill 清单、Agent 设置、外部文档、推荐路径。让有兴趣的同事有明确入口。
  37: 不是用 AI 工具，而是设计一套让 AI 正确工作的系统。
      Q&A：可以问工具、工作流、Agent 架构、Skill 怎么写、CER proof、或者怎么从最小闭环开始。

## 今日改动汇总

### P01 封面
- 无改动

### P02 开场定位
- 改成两个举手问题 + 词云互动
- 右边深色词云面板 + QR 占位框（等你回家给 Mentimeter/Slido 链接）
- 删掉了原二维码/问卷信息块
- 需要你提供词云链接后填入

### 删掉的页
- 原 P03 "你站在哪里决定带走什么"（已删）
- 原 P03 "今天不讲工具清单先看能力边界"（已删）

### P03（现）三个问题
- 加大加厚，每张卡带大号编号 01 02 03
- 底部标注"对应哪个章节"

### P04（现）三个场景案例
- 从单一 n8n demo 改成三栏三个场景：
  - N8N：真实 workflow 截图 + 8 条说明
  - SKILLS：Dashboard + 13 Skills 体系
  - AGENT OS：飞书协作截图 + 5 Agent + 7 文件机制

### P05 Muscle 1 / n8n
- 无改动（待检查）

### P06 n8n 自动化总机
- 改成左 workflow 列表 + 右真实截图

### P07-P11 重设计
- P07：为什么是 n8n？（优势 + 场景 + 截图）
- P08：实操案例 AI×RAG×n8n（4 步流程 + 对话模拟）
- P09：为什么还在用 n8n？（Webhook/Vibe/集成 三卡）
- P10：我的 n8n 实践 + 踩坑（9 条 workflow 表 + 3 坑）
- P11：n8n 之后 Skills+Agent OS（边界 → 过渡）

### P21 截图证明页
- 三张卡片 → 可切换截图舞台
- Dashboard/MAE/Feishu 三个 tab 切换
- Feishu bot 换成 Discord 截图
- MAE 换成真实架构文件（OpenClaw-Tips multi-agent handnote）
- 右侧改成 1→2→3 进度链
- 去掉右上淡水印

### 全局
- 隐藏底部导航条、section chips、小圆点、左右箭头
- 底部 padding 减少
- 模型已切到 Codex GPT-5.5 OAuth

## 关键资产
| 用途 | 路径 |
|------|------|
| Feishu bot 截图 | deck-v6/assets/feishu-bots.png |
| MAE 架构图 | deck-v6/assets/mae-framework.png |
| Dashboard 截图 | deck-v6/assets/dashboard-home.png |
| n8n workflow 截图 | deck-v6/assets/n8n-real-workflows-20260514.png |
| RAG workflow 截图 | deck-v6/assets/n8n-rag-chatbox-workflow.png |

## P7-P11 详细设计稿（已确认，待下次执行）

### P7: 为什么是 n8n？（左右 1:1）
左：5 条 bullet 优势 + 适用场景色块
右：n8n 真实 workflow 总览截图

### P8: AI × RAG × n8n（左流程 + 右模拟）
左：4 步流程（提问→Webhook→检索→推送）
右：深色面板模拟对话输出 + 时序

### P9: 为什么还在用 n8n？（三列卡片）
Webhook稳定触发 / AI Vibe快速跑通 / 系统集成零成本

### P10: 我的 n8n 实践 + 踩坑（左表 + 右坑）
左：9 条 workflow 表格（名称/触发器/状态）
右：3 个踩坑（命名/失败路径/追求全自动）

### P11: n8n 之后 Skills+Agent OS（左右 1:1）
左：n8n 边界（4 条不适合）
右：下一步（Skills/Agent OS 箭头引导）

## 待办
- [ ] P02 词云 QR 链接（你回家生成 Mentimeter/Slido 链接后填入）
- [ ] P04 demo 视频制作
- [ ] P12 起后续页面审核
- [ ] 你有提到截图说 P06 左边 workflow 右边截图——已执行，需验证
