# HTML 演讲页设计优化 V1 — 个人 AI 工作系统

目标：把 V4 演讲稿做成可讲、可看、可录屏、可二次剪视频的 HTML deck。  
原则：不是信息堆叠型 PPT，而是“演讲引导 + 视觉 proof + 可截图素材库”。

---

## 1. 总体设计方向

### 核心视觉隐喻

从「聊天窗口」扩展成「工作系统」。

视觉变化：
单点对话框 → 多模块系统面板 → 三层架构 → 真实工作流。

### 设计关键词

- 白底 / 浅蓝 / 少量深色科技感
- 大标题、少文字、强焦点
- 系统面板感，不要传统 PPT 模板感
- 每页一个视觉动作：点亮、流动、堆叠、路由、收束
- 每个概念必须绑定一个真实 proof 或操作路径

### 颜色建议

- 背景：#F7FAFF / #FFFFFF
- 主蓝：#2563EB
- 深色文字：#0F172A
- 辅助灰：#64748B
- 成功绿：#16A34A
- 能力紫：#7C3AED
- 自动化橙：#F59E0B

### 字体/排版

- 标题：56–72px，粗体
- 副标题：28–36px
- 正文卡片：22–28px
- 每页正文不超过 5 行
- 能用图就不要用长段文字

---

## 2. 页面结构优化

原 run-of-show 是 19 页。HTML 建议压成 15 个主页面 + 3 个资源附录页。

### Section A — Hook / 肌肉展示

#### Page 01 封面

标题：我如何搭了一个个人 AI 工作系统

副标题：从 n8n 自动化，到 Skill 复用，再到多 Agent 协作

视觉：
中心一个 AI OS 控制台，周围浮动四个模块：Automation / Skills / Agents / Dashboard。

设计重点：
第一眼要像“系统”，不要像普通标题页。

---

#### Page 02 先看结果

标题：AI 现在已经能带我做什么？

四宫格：
1. 跑自动化
2. 写软件
3. 做内容
4. 多 Agent 协作

每格下面放一句具体结果：
- 自动读取任务状态并提醒
- 从 spec 到 test 的开发流程
- 生成演讲稿、页面和视频原型
- 多 Agent 分工、记忆、heartbeat

交互/动效：
四张卡片依次点亮。

---

#### Page 03 核心转折

标题：这不是“用了更多工具”

大字：
从单次问答 → 持续工作的系统

视觉：
左侧一个聊天窗口，右侧一个 dashboard/system board。中间箭头扩展。

演讲作用：
把观众从“工具展示”带到“工作方式变化”。

---

### Section B — 三块肌肉

#### Page 04 n8n 自动化闭环

标题：n8n：把 AI 接进真实工作流

主视觉：
Remotion pipeline 或 HTML 版 pipeline：
Trigger → Airtable → Code Decision → Feishu Push → Dashboard

动效：
节点逐个点亮，数据包移动。

页面只放一句：
任务进入 → 判断 → 通知 → 状态更新

---

#### Page 05 n8n 干货：最小闭环

标题：不要先全自动，先做最小闭环

视觉：
五步横向流程：
触发 → 表格 → 判断 → 通知 → 状态更新

右侧 Tips 卡：
- AI 可以直接写 workflow JSON
- Code 节点承载复杂判断
- 每个 workflow 要有失败路径

左下角踩坑：
credential / 命名混乱 / 权限 / 无日志

设计重点：
这页要让观众觉得“我也能抄”。

---

#### Page 06 Copilot + Skills

标题：从写一段代码，到交付一个系统

主视觉：
Spec → Plan → Build → Test → Review → Ship

下方显示 repo / code / tests 三个小 proof 卡。

页面一句：
AI 写代码不是重点，流程化交付才是重点。

---

#### Page 07 Skills 干货

标题：Skill：把重复经验变成能力

主视觉：
一个 SKILL.md 文件结构：
When to use / Input / Steps / Output / Pitfalls

右侧：
三次原则：做三次以上再 Skill 化。

底部 Tips：
可串联、可自进化、但必须 Human Confirm。

---

#### Page 08 我的 Skill 系统

标题：我的 Skill 清单

视觉：
Skill Matrix，按类别分组：

产品/项目：PLO、product-sense-review、grill-me  
内容/视频：ai-video-production、frontend-slides、writing-book  
自动化/系统：airtable-dashboard、feishu-agent-workflow、cron agents  
Agent/模型：mae-autopilot、model-router、reflection

动效：
从单个 Skill 卡片汇聚成体系网络。

---

#### Page 09 Agent OS

标题：从一个 AI，到一个小团队

主视觉：
SAM 中心节点，Andrew / Rex / Lulu / Alex 环绕。

旁边机制：
Memory / Task Ledger / Heartbeat / Escalation / A2A

页面一句：
Agent 的关键不是名字，而是协作机制。

---

#### Page 10 Agent 干货

标题：Agent 怎么搭才不会变乱？

左侧：最小 Agent 设置
- 一个主脑
- 一个专业 Agent
- Memory
- Task Ledger
- Heartbeat
- Dashboard

右侧：踩坑
- Agent 太多
- 没有边界
- 没有任务账本
- Heartbeat 只检查不推进

底部金句：
Dashboard 是信任层，不是装饰。

---

### Section C — 系统合体 / 路径

#### Page 11 三层合体

标题：三层合起来，才是 AI 工作系统

主视觉：三层架构

Top：Agent OS — 组织协作  
Middle：Skills — 复用能力  
Bottom：n8n / Airtable / Dashboard — 放大流程  
Guardrail：Human Judgment

动效：
三层依次堆叠，最后 human judgment 做顶层 guardrail。

---

#### Page 12 顺序学，逆序搭

标题：我是顺序学的，但建议你逆序搭

左右对比：
我的路径：n8n → Skill → Agent OS  
推荐路径：Agent OS → Skill → n8n

底部 warning：
不要为了自动化而自动化。

---

### Section D — 思考方式升级

#### Page 13 AI 时代的核心能力

标题：代码变便宜，产品判断变贵

五个关键词：
定义问题 / 判断用户 / 设计流程 / 验证结果 / 沉淀资产

视觉：
从 Code Cost Down 到 Product Judgment Up 的跷跷板。

---

#### Page 14 从复盘到知识资产

标题：项目反思，可以变成一本书的材料

流程：
项目 → 跨 session 总结 → 模式归纳 → 方法论 → 书 / Skill / 培训材料

视觉：
多个 session 卡片汇聚成一本书。

---

#### Page 15 公司项目 proof：CER/PTR

标题：个人系统，也能落到公司复杂项目

视觉：双层图
左：项目推进 timeline  
右：能力包 stack

页面重点：
轻带，不要变成 CER 汇报。

一句话：
复杂流程可以拆成“任务推进”和“能力复用”两层。

---

### Section E — Takeaway

#### Page 16 资源 Takeaway

标题：你可以带走什么？

四张资源卡：
1. n8n 最小闭环
2. Skill 模板
3. Agent 框架设置
4. 三层搭建路径

---

#### Page 17 结束页

标题：AI 的边界，取决于你如何组织它

五行收束：
Agent 承载角色  
Skill 沉淀能力  
n8n 串联流程  
Dashboard 建立信任  
Human Judgment 守住方向

视觉：
所有模块收束成 AI Operating System。

---

## 3. HTML 交互/动效建议

### 必做动效

1. Page 02 四宫格逐个点亮。
2. Page 04 n8n pipeline 数据包移动。
3. Page 08 Skill 卡片汇聚成网络。
4. Page 09 Agent 节点环绕和 heartbeat 脉冲。
5. Page 11 三层架构堆叠。
6. Page 12 学习路径左右对比切换。

### 不建议

- 不要每页都复杂动画，会分散演讲注意力。
- 不要大段文字滚动。
- 不要过多 logo 墙，容易像工具广告。

---

## 4. 素材嵌入策略

### 第一优先级：真实 proof

- n8n workflow 截图 / JSON
- Remotion n8n pipeline 输出
- Skill 文件夹 / SKILL.md 截图
- Agent 文件机制截图：SOUL / HEARTBEAT / memory / agent_tasks
- Dashboard / Airtable 截图
- AutoStackSharing repo / HTML 页面截图

### 第二优先级：重绘示意图

如果真实截图太乱，就用真实结构重绘：
- n8n pipeline 重绘
- Agent OS 网络图
- Skill matrix
- 三层架构图

### 原则

真实截图用于“可信”。  
重绘图用于“讲清楚”。  
两者要搭配，不要只用 mock。

---

## 5. HTML Deck 文件建议

建议新建：
`sharing-video-20260515/deck-v4/index.html`
`sharing-video-20260515/deck-v4/style.css`
`sharing-video-20260515/deck-v4/assets/`

页面支持：
- 键盘左右切页
- 每页 16:9
- 可一键截图
- 可被 Remotion / screen recording 复用

---

## 6. 成功标准

好的 HTML deck 应该满足：

1. 不听讲也能看懂主线。
2. 听讲时不抢话，只给视觉锚点。
3. 每个抽象概念都有 proof 或可复制路径。
4. 能直接截图做视频素材。
5. 看起来像一个 AI system demo，不像传统 PPT。
