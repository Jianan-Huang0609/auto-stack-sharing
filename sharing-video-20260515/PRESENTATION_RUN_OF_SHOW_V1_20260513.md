# Sharing Run of Show V1 — 个人 AI 工作系统

目标：把 V4 演讲剧本压成真正可讲的页面结构。  
建议页数：16–18 页。  
建议时长：15–20 分钟。  
主线：先展示肌肉 → 再拆系统 → 再讲学习路径和思考方式 → 最后给资源。

---

## 00. 开场封面

标题：我如何搭了一个个人 AI 工作系统

副标题：从 n8n 自动化，到 Skill 复用，再到多 Agent 协作

讲法：
今天不是工具清单，而是我过去几周搭出来的一套个人 AI 工作系统。

视觉：
三层结构淡入：Agent OS / Skills / n8n + Dashboard。

---

## 01. Hook：先看结果

页标题：AI 现在已经能带我做什么？

页面内容：
- 跑自动化：任务状态 → 判断 → 提醒 → Dashboard
- 写软件：spec → plan → build → test → review
- 做内容：脚本 → 分镜 → HTML → Remotion 视频
- 多 Agent 协作：角色、记忆、任务账本、heartbeat

讲法：
我先不讲概念，先看结果。这里每一项不是未来设想，而是我已经在用的能力。

视觉：
四宫格成果卡片。

---

## 02. 核心问题

页标题：这到底只是炫技，还是一种新工作方式？

页面内容：
单次问答 → 持续工作系统

讲法：
真正的问题不是 AI 能不能回答，而是它能不能持续推进、复盘和沉淀。

视觉：
左边 Chatbot 对话框，右边系统面板。

---

## 03. 肌肉一：n8n 自动化闭环

页标题：n8n：把 AI 接进真实工作流

页面内容：
Trigger → Airtable → Code Decision → Feishu Push → Dashboard

讲法：
自动化最小闭环不是“全自动替我做决定”，而是状态进入系统，AI 或代码判断，人收到提醒，状态被更新。

视觉：
使用已完成 Remotion n8n pipeline 截图或短视频。

---

## 04. n8n 干货页

页标题：n8n 怎么开始？

页面内容：
最小闭环：触发 → 表格 → 判断 → 通知 → 状态更新

踩坑：
- credential 最容易卡
- workflow 多了会乱
- 不要一开始追求全自动

Tips：
- 可以让 AI 直接写 workflow JSON
- Code 节点可以承担复杂判断
- 每个 workflow 要有失败路径

讲法：
如果大家要复制，不要先做大系统，先做一个最小闭环。

---

## 05. 肌肉二：Copilot + Skills

页标题：从写一段代码，到交付一个系统

页面内容：
Spec → Plan → Build → Test → Review → Ship

讲法：
AI 写代码不是重点。重点是它能不能进入一套交付流程。

视觉：
代码仓库 + pipeline。

---

## 06. Skills 干货页

页标题：Skill：把重复经验变成能力

页面内容：
一个 Skill 至少包含：
- 适用场景
- 输入
- 步骤
- 输出标准
- 踩坑

Tips：
- 做三次以上再 Skill 化
- Skill 可以串联成体系
- Skill 可以自进化，但必须 human confirm

讲法：
Skill 不是 prompt 收藏夹，而是工作方法的封装。

---

## 07. 我的 Skill 清单

页标题：我的 Skill 系统

页面内容：
- PLO：产品生命周期编排
- ai-video-production-pack：视频生产
- frontend-slides：页面/演示
- airtable-dashboard：任务可视化
- feishu-agent-workflow：飞书工作流
- mae-autopilot：多 Agent 执行
- model-router：多模型路由
- writing-book：长文沉淀
- reflection / product review / grill-me

讲法：
这些不是一次性工具，而是可以组合的能力模块。

视觉：
Skill 卡片矩阵。

---

## 08. 肌肉三：Agent OS

页标题：从一个 AI，到一个小团队

页面内容：
SAM / Andrew / Rex / Lulu / Alex

讲法：
Agent 的关键不是名字，而是它背后的机制：记忆、任务、heartbeat、升级。

视觉：
SAM 居中，四个 Agent 环绕。

---

## 09. Agent OS 干货页

页标题：Agent 怎么搭才不会变乱？

页面内容：
必备机制：
- Memory
- Task Ledger
- Heartbeat
- Escalation
- Dashboard

Tips：
- 先一个主脑 + 一个专业 Agent
- Agent 必须有边界
- Dashboard 是信任层，不是装饰

讲法：
没有任务账本和可视化，多 Agent 很快会变成多窗口混乱。

---

## 10. 三层合体

页标题：三层合起来，才是 AI 工作系统

页面内容：
Agent 组织协作
Skill 复用能力
n8n 放大流程
Dashboard 建立信任
Human 保持判断

讲法：
单独看每层都只是工具，合起来才变成系统。

视觉：
三层堆叠架构。

---

## 11. 我的真实学习路径

页标题：我是顺序学的

页面内容：
n8n → Skill → Agent OS

讲法：
我最开始从 n8n 学起，因为它最直观；后来发现需要复用能力，于是有了 Skill；最后任务复杂起来，才搭 Agent OS。

视觉：
左向右路径。

---

## 12. 推荐搭建路径

页标题：但我建议你逆序搭

页面内容：
Agent OS → Skill → n8n

讲法：
先知道任务和角色，再知道哪些能力值得沉淀，最后才知道应该自动化什么。

视觉：
两条路径对比。

---

## 13. AI 时代的变化：问题拆解能力

页标题：代码变便宜，产品判断变贵

页面内容：
真正重要的是：
- 定义问题
- 判断用户
- 设计流程
- 验证结果
- 沉淀资产

讲法：
AI 降低执行成本后，反而让产品判断和问题拆解变得更重要。

---

## 14. 真实思考过程一：项目反思变成知识资产

页标题：从复盘文档，到一本书的材料

页面内容：
项目 → 跨 session 总结 → 模式归纳 → 方法论 → 书 / Skill / 培训材料

讲法：
AI 可以把多个 session、多个项目的经验串起来，不只是写复盘，而是沉淀知识资产。

---

## 15. 真实思考过程二：做软件训练产品人

页标题：更积极地做软件，是为了训练产品判断

页面内容：
Idea → User → Flow → Prototype → Test → Product Learning

讲法：
当代码成本下降，做软件就变成训练产品能力的高频方式。

---

## 16. 公司项目轻带：CER/PTR

页标题：这套方法也能落到公司项目

页面内容：
CER/PTR：
- 项目推进层：用户需求、架构、Transfer、ROI
- 能力包层：Input/Data、Workflow、AI Function、Evals、Review

讲法：
今天主线是个人系统，CER 只是证明这套方法也能处理复杂公司项目。但公司项目必须注意权限、合规和人审。

视觉：
双层图。

---

## 17. Takeaway：你可以带走什么

页标题：带走一套路径，不是一个工具列表

页面内容：
1. 最小闭环：任务进入 → AI 判断 → 人确认 → 状态更新 → 复盘
2. 三层框架：Agent OS / Skills / n8n
3. 我的 Skill 清单
4. 我的 Agent 框架设置
5. 原则：Human Judgment 守住方向

讲法：
AI 的边界，不只取决于模型有多强，更取决于你有没有把它组织成系统。

---

## 18. 结束页

页标题：AI 的边界，取决于你如何组织它

页面内容：
Agent 承载角色  
Skill 沉淀能力  
n8n 串联流程  
Dashboard 建立信任  
Human Judgment 守住方向

讲法：
这就是我现在正在搭的个人 AI 工作系统。
