# AutoStackSharing 内部分享稿件素材框架 V1

定位：45min 干货 + 15min Q&A。受众是跨部门同事：业务、软件、自动化方向。
目标：建立认知、展示能力、塑造 Jianan 懂 AI / 懂系统 / 能落地的个人品牌，并链接关键同事。

## 0. 总体主旨

这场分享不是工具清单，而是一次关于 AI 能力边界的展示。

核心句：
不是用 AI 工具，而是设计一套让 AI 正确工作的系统。

要回答三个问题：
1. AI 到底能做什么？
2. 日常管理里，自动化能做到什么程度？
3. 一个人怎样用 Agent OS + Skills + n8n，把 AI 变成真实工作系统？

## 1. 开场 Hook：不是工具，是能力边界

今天不是来堆砌工具的。
不是说我用了哪些模型、哪些平台、哪些插件。
我更想回答一个问题：
AI 的能力边界到底在哪？在日常管理里，我们能把自动化做到什么程度？

过去大家对 AI 的理解，很多还停留在聊天、写文案、回答问题。
但我最近尝试把它往前推了一步：把 AI 当作一个可以持续工作的系统来搭建。

金句：
- 今天不讲工具清单，先看能力边界。
- AI 的上限，不是模型会不会回答，而是你能不能把它组织进真实工作流。

## 2. 先秀肌肉：这套系统实际做出了什么

先不讲原理，先看产出。

1. 视频生成
脚本、分镜、HTML 场景、TTS、合成，都可以被组织成一条生产链。
金句：视频不是单点生成，而是一条生产流水线。

2. HTML 视觉内容
HTML 可以是课件、仪表盘、产品原型、技术框架，也可以成为视频素材。
金句：HTML 是 AI 时代最灵活的表达载体之一。

3. TTS 语音设计
TTS 不只是念稿，而是语气、节奏、身份感的设计。
金句：语音不是朗读，是内容人格的一部分。

4. 产品原型 / B2C 设计
AI 可以从一个想法，快速推进到可展示的产品原型。
金句：好的 AI 工作流，不只提高效率，也放大产品创意和审美创意。

5. 真实工作 PPT / CER 注册分析
这是最有工作说服力的素材。
素材：/Users/jianan/Documents/SSME/CER-Presentation/SSME_QT_CER_0509.pptx

## 3. 系统框架：三层自动化架构

这些产出不是靠单个工具堆出来的，而是靠三层架构：
1. n8n：自动化流程层
2. Skills：能力模块层
3. Agent OS：操作系统层

## 4. Layer 1：n8n 自动化层

n8n 负责触发、同步、提醒、Webhook、飞书推送、Dashboard 更新。
它解决的问题不是“AI 会不会生成内容”，而是：生成之后，谁来触发？谁来同步？谁来提醒？谁来可视化？

真实 workflows：
- 01 逾期任务 → 飞书提醒
- 02 EOD 日报 → 飞书
- 03 Dashboard 同步
- 05 CS25 课程监控
- 06 分享准备追踪

金句：
- Agent 输出如果不能进入运营闭环，就只是一次性聊天。
- n8n 让 AI 输出进入真实管理系统。

## 5. Layer 2：Skills 能力模块层

Skill 不是 prompt。Skill 是一个可复用的能力模块：它知道什么时候触发、怎么执行、读哪些参考、输出什么、如何进化。

例子：
- PLO：判断任务类型，决定走 B2B / ToC / Personal / Content 哪条路径
- frontend-slides：生成 HTML 课件/页面
- ai-video-production-pack：组织视频生产链
- nano-banana-pro：生成图片/视频素材
- beautiful-html-templates：提供视觉系统参考

金句：
- Prompt 是一次性的，Skill 是可复用的。
- 真正的效率来自能力模块化，而不是每次重新问一遍。

## 6. Layer 3：Agent OS 操作系统层

Agent OS 负责角色分工、记忆、任务账本、心跳、升级机制、跨 Agent 通信。

示例：
- SAM：主脑，协调和路由
- Andrew：学习、研究、技术评估
- Rex：工作项目、工程推进
- Lulu：内容、写作、视觉
- Alex：个人节奏和支持

金句：
- 多 Agent 的价值不是数量，而是协作机制。
- Agent 不是聊天窗口，而是持续工作的角色。

## 7. 学习反转：从工具学习到系统学习

我的真实路径是：n8n → Skill → OpenClaw / Agent OS。
这个路径能学会，但很痛苦。

后来我发现，当你真正理解 Agent 系统级架构之后，反推 Skill 和 n8n 会变得非常简单。

正确路径应该是：Agent OS → Skills → n8n。

金句：
- 从工具往上拼，会很痛苦；从系统往下拆，会很清楚。
- 先理解操作系统，再安装能力模块，最后连接自动化流程。

## 8. 代码比例下降：不是不专业，而是工作方式变化

推荐表达：
我现在日常直接手写代码的比例确实下降了，但这不是因为我不懂技术，而是因为工作重心发生了变化。

过去的问题是：我能不能把每一行代码写出来？
现在更重要的问题是：我能不能定义清楚问题、拆解系统、选择正确工具链、让 AI 产出可验证的结果？

金句：
- 代码比例下降，不代表技术能力下降，而是工作重心上移。
- 问题不是 AI 能不能写代码，而是你能不能设计让 AI 正确工作的系统。

## 9. 拍照 Takeaway：别人可以怎么开始

Agent OS：
- 安装 OpenClaw
- 配置模型和安全策略
- 创建第一个 Agent
- 写 SOUL.md / USER.md / memory
- 设置心跳和任务账本

Skills：
- 写一个 SKILL.md
- 定义触发场景和执行步骤
- 把经验、模板、外部方法吸收成 reference
- 每次真实使用后记录反馈

n8n：
- 启动 n8n
- 导入 workflow JSON
- 配置 Airtable / Feishu / GitHub 凭证
- 先手动跑通，再打开定时
- 最后接 Dashboard / 飞书推送

## 10. 收尾 Closing

AI 的上限，不是由某一个模型决定的。
真正的差距来自：谁更会定义问题、拆系统、模块化能力、接入真实流程、验证和持续进化。

最终金句：
未来不是每个人都有一个万能 Agent，而是每个人都需要搭建自己的 AI 操作系统。

## 11. 待补素材

1. CER 注册分析 PPT 截图
2. AutoStackSharing 主课件截图
3. AIPM / Love-Spinner / CER_Tech-Frame HTML 截图
4. n8n workflow 截图
5. Dashboard 截图
6. 飞书 MAE 多层控制框架截图
7. TTS 语音波形/试听片段
8. V7 视频素材截图/成片片段

## 12. 当前链接

主课件：
http://localhost:8765/index.html

视频素材 V7：
http://localhost:8765/sharing-video-20260515/scenes/v7/PLAY.html

仓库：
https://github.com/Jianan-Huang0609/auto-stack-sharing

PLO：
https://github.com/HJN-Bot/JN-SkillHub/tree/main/product-lifecycle-orchestrator

Feishu：
PLO 主文档：https://my.feishu.cn/wiki/HaEfw1Ig2iRf9mkndeXc1bZcn7r
视频生产包：https://my.feishu.cn/wiki/RC3awSJ4eiAaBRkXanzcH9nPnUc
