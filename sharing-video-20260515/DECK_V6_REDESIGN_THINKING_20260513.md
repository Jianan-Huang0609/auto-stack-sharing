# Deck V6 Redesign Thinking — 对齐已批准文稿

状态：当前 `deck-v6/index.html` 已有视觉方向，但页面叙事还没有完全贴合 V6 文稿。  
目标：重新按 V6 已批准文稿设计页面结构、信息密度和视觉模板，再进入 HTML 改版。

---

## 0. 当前问题判断

### 问题 1：页面骨架仍像“素材目录”，不像“演讲节奏”

当前 deck 已经有 V6 的主题和 placeholder，但很多页只是把素材分类放进去。  
V6 文稿真正的节奏是：

1. 互动校准听众
2. 正式定位：不是工具清单，是能力边界
3. 先展现肌肉：n8n → Copilot+Skill → Agent
4. 再解释为什么这些肌肉成立：RAG / context / MCP / workflow / skill / agent OS
5. 三层方法拆解
6. 学习路径反转 + 人脑 tradeoff
7. AI 时代能力判断
8. CER proof
9. Takeaway

现在 deck 在第 3–5 步之间的转场还不够清楚。

---

### 问题 2：肌肉展示没有“总览 → 单项证明 → 下一项”的节奏

用户反馈正确：观众会不知道哪一页开始讲 n8n，哪一页开始切到 Skill，哪一页开始讲 Agent。

解决方式：每个 muscle 段固定 3 页结构：

- Section Break：现在进入哪一块肌肉
- Proof Page：大图 / 资产墙 / 系统截图
- Meaning Page：这说明了 AI 能做什么

不要只靠底部 section rail，页面本身也要有明显章节转换。

---

### 问题 3：三层方法拆解需要更像“课程页”，不是一页总结

n8n / Skills / Agent OS 都需要分别展开：

- 专业概念
- 费曼解释
- 优势 / 适合做什么
- 我的设置
- 踩坑
- Tips

每一层至少 2 页：

1. Concept + Feynman
2. Setup + Pitfalls + Tips

否则信息量放不下，也不符合 V6 文稿。

---

## 1. 重新设计后的整体页数

建议：34–38 页。

45min 干货不是每页讲很久，而是让页面承担不同职能：

- 视觉冲击页：10–30 秒
- Proof 页：60–90 秒
- 方法页：90–150 秒
- 思考页：60–120 秒
- Takeaway 页：30–60 秒

---

## 2. Page Architecture V2

### A. Opening / 校准与定位（5 页）

#### 01 Cover

任务：建立主题和气质。  
内容：我如何搭了一个个人 AI 工作系统。  
视觉：0506 米白橙青 + 大标题 + 三个标签 n8n / Skills / Agent OS。

#### 02 Opening Poll

任务：现场互动，让听众定位自己。  
内容：4 个问题：AI daily use / n8n-Dify / MCP / Skill-SOP。  
视觉：四张问卷卡片。

#### 03 Poll Meaning

任务：把互动和分享目的连接起来。  
核心句：举手的人带走进阶实践；没举手的人下次真实试一次。  
视觉：左边人群状态，右边今天的承诺。

#### 04 Not Tool List

任务：正式定位。  
核心句：今天不讲工具清单，先看能力边界。  
视觉：左边“工具清单”被划掉，右边“工作系统”被高亮。

#### 05 Three Questions

任务：给观众地图。  
内容：AI 能做什么 / 自动化能到什么程度 / 一个人如何搭系统。  
视觉：三张问题卡。

---

### B. Muscle Overview / 先看肌肉（1 页）

#### 06 Muscle Overview

任务：告诉观众接下来先看结果，不讲原理。  
内容：n8n → Copilot+Skill → Agent。  
视觉：三段横向 pipeline，大字“先看肌肉，后拆方法”。

---

### C. Muscle 1 — n8n（4 页）

#### 07 Section Break: n8n

任务：明确进入 n8n。  
视觉：全屏大字“Muscle 1 / n8n”，副标题“流程真的能跑起来”。

#### 08 n8n Proof

任务：用真实 workflow / pipeline 证明。  
内容：Trigger → Airtable → Code Decision → Feishu Push → Dashboard。  
视觉：右侧大图 proof card，左侧一句话解释。

#### 09 n8n Workflow Set

任务：展示不是一个 demo，而是一组可复用 workflow。  
内容：01 overdue / 02 eod / 03 dashboard sync / 06 sharing tracker。  
视觉：workflow 文件卡片 + 节点 mini-strip。

#### 10 From Workflow to AI Node

任务：引出 RAG / Chatbox / context / MCP。  
内容：普通 workflow 中间节点从 if/else 变成 AI。  
视觉：前后对比：Code node → AI node。

---

### D. Evolution Bridge — RAG / MCP（3 页）

#### 11 Chatbox → RAG → Tool Use → MCP → Agent OS

任务：建立时代脉络。  
视觉：演进时间线。

#### 12 Feynman Page

任务：把专业概念讲人话。  
内容：Chatbox 是房间里的人；RAG 是资料柜；Tool Use 是手脚；MCP 是统一插口；Agent OS 是工作机制。  
视觉：五张 icon 卡。

#### 13 RAG / Chatbox Workflow Demo Placeholder

任务：展示可以搭一个通用 demo。  
视觉：Chat Input → Docs/State → AI → Airtable/Dashboard → Response。

---

### E. Muscle 2 — Copilot + Skill（4 页）

#### 14 Section Break: Copilot + Skill

任务：明确切到第二块肌肉。  
核心句：不是写代码，是交付复杂表达资产。

#### 15 Asset Wall

任务：展示 PPT / HTML / Video / Script / Commit / Skill.md。  
视觉：AIPM 风格 2x3 asset wall，图片占主角。

#### 16 Why PPT / HTML Matter

任务：解释高审美、高结构要求是壁垒。  
内容：复杂内容结构 + 审美表达 + 可交付资产。  
视觉：左边“不是代码”，右边“表达系统”。

#### 17 Skill Pipeline

任务：展示 Skill 体系如何支持产物。  
内容：PLO → frontend-slides → ai-video-production → writing-book → dashboard。  
视觉：pipeline + Skill card。

---

### F. Muscle 3 — Agent OS（4 页）

#### 18 Section Break: Agent OS

任务：明确进入第三块肌肉。  
核心句：一个人背后，有一个小团队。

#### 19 Agent Team

任务：展示 SAM / Andrew / Rex / Lulu / Alex。  
视觉：SAM 居中，四个 Agent 环绕；不要只是五张平铺卡。

#### 20 Mechanism Proof

任务：展示不是拟人化，而是机制。  
内容：SOUL / HEARTBEAT / memory / agent_tasks / PROJECT_STATE。  
视觉：文件机制图 + screenshot placeholder。

#### 21 Dashboard / MAE / Feishu Proof

任务：展示系统可观察、可协作。  
视觉：Dashboard 大图 + MAE / Feishu 小图组合。

---

### G. Transition — 从肌肉到方法（1 页）

#### 22 So What?

任务：从“看起来很强”切到“如何搭”。  
核心句：这些不是三个工具，而是三层系统。  
视觉：n8n / Skills / Agent OS 三层堆叠，Human judgment 贯穿。

---

### H. Three-Layer Method / 三层方法（7 页）

#### 23 Three Layers Overview

任务：方法章节地图。

#### 24 n8n Concept + Feynman

任务：讲概念与费曼解释。  
视觉：左概念，右办公室调度员图。

#### 25 n8n Setup + Pitfalls + Tips

任务：讲我的设置、踩坑、tips。  
视觉：Airtable / n8n / Feishu / Dashboard 系统连线。

#### 26 Skills Concept + Feynman

任务：讲 Skill 不是 prompt。  
视觉：Prompt vs SOP / Playbook 对比。

#### 27 Skills Setup + Pitfalls + Tips

任务：讲如何写 Skill，如何沉淀。  
视觉：Skill.md anatomy。

#### 28 Agent OS Concept + Feynman

任务：讲 Agent OS 不是多开聊天窗口。  
视觉：Chatbot vs Team Operating System。

#### 29 Agent OS Setup + Pitfalls + Tips

任务：讲主脑、专业 Agent、任务账本、Dashboard。  
视觉：最小 Agent OS blueprint。

---

### I. Learning Path / 学习路径反转（3 页）

#### 30 My Learning Path

任务：讲真实路径 n8n → Skills → Agent OS。

#### 31 Recommended Build Path

任务：讲推荐路径 Agent OS → Skills → n8n。  
视觉：反向箭头对比。

#### 32 Agent Makes Learning Easy, But Human Brain Matters

任务：讲信息链路自动化 + 人脑不可省略。  
核心句：当你不知道一个信息时，它对你来说就像不存在。

---

### J. AI Era Thinking / 思考升级（3 页）

#### 33 Code Gets Cheap, Product Judgment Gets Expensive

任务：思想升维。  
视觉：大字页。

#### 34 Three Reflections

任务：项目反思 / 软件产品 / 内容资产系统。  
视觉：三张 reflection cards。

#### 35 From Project to Asset System

任务：把这次分享本身作为 proof。  
内容：定位 → 状态收集 → V6 文稿 → HTML → video → GitHub → dashboard → 复盘。  
视觉：timeline。

---

### K. CER Proof（2 页）

#### 36 CER/PTR Light Proof

任务：轻带公司项目，不抢主线。  
内容：个人系统也能落到复杂项目。  
视觉：CER/PTR 图或 PPT 占位。

#### 37 CER Working Method

任务：承接用户刚才说的真实流程。  
内容：用户需求 → 架构开发包 → 分工 → 内部轻量对齐 → 外部专家工作讨论 → 内部确认。  
视觉：process lane。

---

### L. Takeaway / 收尾（3 页）

#### 38 Minimal Loop

任务：告诉别人怎么开始。  
内容：任务进入 → AI 判断 → 人确认 → 状态更新 → 复盘沉淀。

#### 39 Resource Pack

任务：Skill 清单 + Agent 设置 + 外部链接。  
视觉：拍照页。

#### 40 Closing / Q&A

任务：收束。  
核心句：不是用 AI 工具，而是设计一套让 AI 正确工作的系统。

---

## 3. 页面设计模板

### Template A — Section Break

用途：n8n / Skill / Agent / Three Layers / Thinking。  
结构：
- 左上 section index
- 中间超大标题
- 右下一个短句
- 背景用淡淡的三层线条或节点图

信息量：低。  
讲述时间：10–20 秒。

---

### Template B — Split Proof

用途：n8n proof / CER proof / Dashboard proof。  
结构：
- 左：一句观点 + 3 bullets
- 右：AIPM 风格 proof card，大图占 60%

信息量：中。  
讲述时间：60–90 秒。

---

### Template C — Asset Wall

用途：Copilot+Skill 高审美 proof。  
结构：
- 2x3 图片墙
- 每张只有 label + 一句话
- 不写长文

信息量：视觉高、文字低。  
讲述时间：60 秒。

---

### Template D — Concept / Feynman

用途：三层方法每层第一页。  
结构：
- 左：专业概念
- 右：费曼解释
- 底部：一句金句

信息量：中高。  
讲述时间：90 秒。

---

### Template E — Setup / Pitfalls / Tips

用途：三层方法每层第二页。  
结构：
- 左：我的设置 / 架构图
- 右：踩坑 / tips / 起步方法

信息量：高。  
讲述时间：120 秒。

---

### Template F — Big Thought

用途：AI 时代思考。  
结构：
- 大字金句
- 下面 2–3 个解释点

信息量：低中。  
讲述时间：60 秒。

---

## 4. 信息量规则

每页只允许承担一种任务：

1. 过渡：低信息量，大标题。
2. 证明：大图为主，文字少。
3. 解释：概念 + 费曼，文字中等。
4. 方法：设置 + 坑 + tips，文字较多。
5. takeaway：可拍照，结构清楚。

不要在一页里同时做：证明 + 解释 + 方法 + takeaway。

---

## 5. 下一步 HTML 改法

1. 保留当前 `deck-v6/index.html` 的 CSS token、AIPM proof card、section rail。
2. 不在现有 30 页上小修，而是按上面的 40 页结构重排。
3. 先重排所有页面标题和结构。
4. 缺素材继续使用 placeholder。
5. 再逐页增强 UI：section break、split proof、asset wall、method page。

