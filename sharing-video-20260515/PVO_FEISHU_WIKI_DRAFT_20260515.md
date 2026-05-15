# PVO 详解：Presentation Visual Orchestrator

> PVO = Presentation Visual Orchestrator，演示型视觉编排器。它不是单个做 slide 的 Skill，而是一套用于“分享 / 汇报 / Demo / 视觉表达”的全链路编排系统。

## 1. 为什么需要 PVO

我们这次做 sharing HTML Deck 时暴露了一个典型问题：

用户说 A，AI 可能会理解成 B；
AI 做了很久，结果页面很丑、信息密度不对、截图看不清；
用户 review 后指出问题，AI 再返工；
如果没有机制，这个循环会无限重复。

PVO 要解决的不是“能不能生成页面”，而是：

1. 是否先理解这次表达的用户是谁；
2. 是否知道观众应该带走什么；
3. 是否保持稳定审美水准；
4. 是否把用户原话保留下来；
5. 是否把图片、截图、视频以正确方式展示；
6. 是否避免 repo 和部署流程混乱；
7. 是否减少用户反复 review 低级问题。

一句话：

PVO 解决的是“复杂表达如何被 AI 正确视觉化”。

---

## 2. PVO 和 PLO 的区别

PLO 解决的是：一个复杂项目怎么被 AI 正确推进。

PVO 解决的是：一个复杂表达怎么被 AI 正确展示。

| 系统 | 关注点 | 输出 |
|---|---|---|
| PLO | 项目流程、任务路由、Skill 调度、交付标准 | 可执行项目计划 / 开发包 / 交付物 |
| PVO | 观众、叙事、视觉、截图、信息密度、takeaway | HTML Deck / PPT / Boss Deck / Demo 页面 |

PLO 更像项目经理。
PVO 更像演示总导演 + 视觉产品经理 + 信息架构师。

---

## 3. PVO 的全链路

PVO 的流程不是直接写 HTML，而是：

```text
用户需求
  ↓
0. Mode Detect / 类型识别
  ↓
1. Project Brief / 定义用户、目标、takeaway
  ↓
2. Narrative Architecture / 搭叙事骨架
  ↓
3. Page Type Router / 逐页定义页面类型
  ↓
4. Style Preset / 锁定画风
  ↓
5. Component Composer / 选择组件模板
  ↓
6. Image Treatment / 决定图片展示方式
  ↓
7. Prompt Archive / 保存用户原话
  ↓
8. Execution / 小步执行
  ↓
9. Visual QA / 视觉和信息密度验收
  ↓
10. Delivery + Skill Evolution / 交付与沉淀
```

---

## 4. Step 0：Mode Detect / 类型识别

PVO 先判断这次表达是哪一种类型，而不是直接做页面。

### 4.1 六种 Presentation 类型

| 类型 | 核心目标 | 典型内容 | 不该做什么 |
|---|---|---|---|
| Codebase Hard-core Analysis / 代码基础硬核分析 | 证明技术深度、架构理解、实现可行性 | 架构图、模块边界、调用链、diff、Evals、benchmark | 不要包装成炫技产品广告 |
| Product Promotion / 炫技产品推广 | 让人快速觉得“这个东西厉害、想试” | Hero demo、before/after、亮点卡、视频、wow moment | 不要堆底层代码细节 |
| Knowledge Sharing / 知识分享 | 让观众学会并带走方法 | 概念框架、费曼解释、例子、练习路径、资源包 | 不要只有炫技截图，没有方法 |
| Aesthetic Design / 美学设计展示 | 展示审美判断和视觉品味 | moodboard、style tokens、对比稿、组件 gallery | 不要把审美说成空洞形容词 |
| Boss Decision Deck / 老板决策汇报 | 争取资源、授权、下一阶段决策 | ROI、timeline、risk、resource ask、option matrix | 不要做成社区分享或技术教程 |
| Internal Execution Plan / 内部执行计划 | 让团队知道谁做什么、何时交付 | 甘特图、RACI、开发包、依赖、阻塞项 | 不要只讲愿景 |

### 4.2 类型识别规则

| 用户关键词 | 默认路由 |
|---|---|
| codebase / 架构 / 技术细节 / 调用链 / Evals | Codebase Hard-core Analysis |
| demo / wow / 产品效果 / 炫技 / 想试 | Product Promotion |
| 学习 / 分享 / takeaway / 怎么开始 / 资源包 | Knowledge Sharing |
| 画风 / 配色 / 审美 / 风格 / gallery | Aesthetic Design |
| 老板 / ROI / 资源 / 授权 / 决策 | Boss Decision Deck |
| timeline / 分工 / 开发包 / 甘特图 / 项目管理 | Internal Execution Plan |

核心原则：

同一份素材可以被不同类型重组，但表达目标不能混。

例如 codebase 分析页可以好看，但首先要证明技术判断；产品推广页可以放架构图，但首先要让人理解价值和 wow moment。

---

## 5. Step 1：Project Brief / 定义用户、目标、Takeaway

PVO 开始前必须回答：

1. 观众是谁？
2. 他们现在相信什么？
3. 我希望他们听完相信什么？
4. 他们要带走什么？
5. 这次是分享、培训、老板汇报、产品 demo，还是资源争取？
6. 输出是 HTML Deck、PPT、长图，还是 Vercel 页面？

### 5.1 Takeaway 三层

1. 认知 takeaway：观众相信了什么？
2. 方法 takeaway：观众知道怎么开始吗？
3. 资源 takeaway：观众能拿走什么文件、链接、框架？

模板：

```text
这场分享结束后，观众至少应该带走：
1. 一个核心判断：____
2. 一个可复用框架：____
3. 一个可立即尝试的起步路径：____
4. 一个资源入口：____
```

对应 Skill：
- audience-takeaway-brief
- presentation-positioning
- decision-context-mapper

产物：
- PROJECT_BRIEF.md

---

## 6. Step 2：Narrative Architecture / 叙事骨架

不同类型的 presentation，需要不同叙事结构。

### 6.1 知识分享型

```text
1. 为什么要听
2. 先看真实产物
3. 拆系统结构
4. 拆方法
5. 展示案例
6. 讲学习路径
7. 给 takeaway
```

### 6.2 老板决策型

```text
1. 当前成果
2. 下一阶段机会
3. 开发包 / roadmap
4. ROI / 风险
5. 需要老板决策什么
```

### 6.3 产品 Demo 型

```text
1. 用户痛点
2. 产品能力
3. Demo 流程
4. 技术 / 架构可信度
5. 下一步计划
```

对应 Skill：
- narrative-architect
- deck-outline-builder
- boss-decision-deck-logic
- sharing-run-of-show

产物：
- DECK_OUTLINE.md

---

## 7. Step 3：Page Type Router / 逐页定义类型

每页必须先定类型，不允许直接排版。

| 页面类型 | 作用 | 推荐模板 |
|---|---|---|
| 证据页 | 展示真实截图、真实产物、真实数据 | Big Screenshot Tabs / Asset Wall |
| 方法页 | 讲怎么做 | Concept + Case / Mistake vs Correct |
| 流程页 | 展示步骤和依赖 | Pipeline / Timeline / Step Chain |
| 决策页 | 推动选择 | ROI Cards / Option Matrix / Risk Table |
| 故事页 | 建立记忆点 | Learning Curve Timeline / Wow Moment Cards |
| 资源页 | 让观众带走东西 | Resource Pack / QR + Links |

产物示例：

```md
P03
类型：证据页
目标：先证明系统真的跑起来
模板：Big Screenshot Tabs
素材：PPT / HTML / 飞书报告 / 书 / 视频 / Agent / Dashboard / App开发
Takeaway：AI 已经能做完整资产生产
```

对应 Skill：
- slide-type-router
- page-intent-mapper
- information-density-checker

---

## 8. Step 4：Style Preset / 锁定画风

PVO 必须先选风格 preset，不能边做边试。

### 8.1 初始六套风格

| Style | 气质 | 适用场景 |
|---|---|---|
| Warm Builder | 米白/橙/青，高级但不冷，真实、系统、证据感 | 个人 AI 系统、社区分享 |
| Executive Dark | 深黑/金/灰，稳重、决策、资源感 | 老板汇报、资源争取 |
| Clean SaaS | 白/蓝/灰，清爽、产品化 | 产品 Demo、工具介绍 |
| Research Paper | 米白/墨绿/深灰，严谨、学术 | 研究、课程、框架方法论 |
| Neon Lab | 深色/紫/青，实验、未来感 | AI 技术实验、黑客松 |
| Minimal Keynote | 白/黑/单强调色，高级极简 | 少字强节奏演讲 |

当前 sharing deck 的默认风格是 Warm Builder。

对应 Skill：
- visual-style-selector
- css-token-generator
- style-consistency-checker
- html-style-gallery

产物：
- STYLE_SPEC.md

---

## 9. Step 5：Component Composer / 组件编排

PVO 根据页面类型选组件，不从零写。

### 9.1 组件库

证据页：
- Big Screenshot Tabs
- Asset Wall
- Browser Frame
- Phone Frame
- Before/After Evidence

方法页：
- Concept + Case Split
- Mistake vs Correct
- Checklist Cards
- Feynman Card

流程页：
- Timeline
- Pipeline
- Step Chain
- System Layer Diagram

决策页：
- ROI Cards
- Option Matrix
- Risk/Resource Table
- Decision Ask Cards

故事页：
- Learning Curve Timeline
- Wow Moment Cards
- Phase Journey

资源页：
- Resource Pack Cards
- QR + Links
- Framework Download Wall

对应 Skill：
- component-router
- slide-template-selector
- layout-composer
- gallery-component-library

---

## 10. Step 6：Image Treatment / 图片展示策略

这是 PVO 必须单独处理的一层。

### 10.1 图片模式

| 图片类型 | 默认模式 |
|---|---|
| 横向 PPT / HTML 截图 | cover 或 contain，看是否裁切重点 |
| Dashboard 长图 | scrollable + max-width 85-90% |
| App 手机截图 | scrollable 或 phone frame |
| 书页 / 文档 | scrollable + 多图堆叠 |
| 架构图 | contain + 可读字号 |
| 视频 | autoplay muted loop |
| 小图证据 | asset wall / gallery |

### 10.2 为什么不能简单 cover

cover 会让图片看起来“满”，但会裁切关键信息。
对于 Dashboard、书页、App 长截图来说，裁切就等于失去证据。

更好的策略：

```text
长图 / 复杂图：scrollable + max-width + 居中
横图 / Hero 图：cover
架构图：contain
```

对应 Skill：
- image-treatment-router
- screenshot-fit-decider
- scrollable-image-renderer
- browser-phone-frame-wrapper

产物：
- IMAGE_TREATMENT_DECISIONS.md

---

## 11. Step 7：Prompt Archive / 用户原话归档

PVO 必须保存用户逐页原话。

每条需求记录：

- 原文；
- 时间；
- 来源；
- 对应页码；
- 意图分类；
- 最终动作；
- commit。

### 11.1 为什么重要

用户原话里有真实判断和语感。
比如：

- “悬而未决时的判断力”
- “外星工具”
- “Wow Moment”
- “锯齿时刻”
- “探索、上头、冷静、稳定期”

这些不能被 AI 改成普通咨询腔。

对应 Skill：
- prompt-raw-archiver
- prompt-page-mapper
- design-decision-logger

产物：
- USER_PROMPTS_RAW.md
- USER_PROMPTS_BY_PAGE.md
- DESIGN_DECISIONS.md

---

## 12. Step 8：Execution / 小步执行

执行原则：

1. 一次只改一页或一个明确模块；
2. 不 `git add .`；
3. 不 `git add deck-v6/`；
4. 不提交 visual-check / bak / check html；
5. 改之前 fetch remote；
6. 改之后 diff + screenshot + push；
7. push 后验证 origin/master 和 Vercel。

对应 Skill：
- repo-execution-guard
- git-hygiene-checker
- vercel-deploy-verifier
- html-safe-editor

---

## 13. Step 9：Visual QA / 视觉和信息密度验收

PVO 必须自检，不能让用户反复 review 低级问题。

检查项：

1. 截图是否看得清？
2. 是否裁切关键信息？
3. 是否有视觉锚点？
4. 是否字太多？
5. 是否信息太薄？
6. 是否和当前 style 一致？
7. 是否有 takeaway？
8. 是否误删用户要保留的内容？
9. tab 顺序是否完全符合用户要求？
10. 是否用了真实证据？

对应 Skill：
- visual-vqa-checker
- information-density-evaluator
- style-consistency-auditor
- takeaway-checker

产物：
- VISUAL_QA_REPORT.md

---

## 14. Step 10：Delivery + Skill Evolution / 交付与沉淀

完成后不能只说“改好了”。

标准汇报：

```text
改了什么：
页码：
使用组件：
图片模式：
commit：
Vercel：
还剩风险：
```

然后沉淀：
- prompt archive；
- design decision；
- reusable component；
- style gallery update；
- skill evolution note。

对应 Skill：
- delivery-reporter
- skill-evolution-writer
- component-extractor

---

## 15. PVO 对应 Skill 总表

| 阶段 | Skill |
|---|---|
| 0 Mode Detect | pvo-mode-detect, intent-router |
| 1 Brief | audience-takeaway-brief, presentation-positioning |
| 2 Narrative | narrative-architect, deck-outline-builder |
| 3 Page Type | slide-type-router, page-intent-mapper |
| 4 Style | visual-style-selector, css-token-generator |
| 5 Component | component-router, layout-composer |
| 6 Image | image-treatment-router, scrollable-image-renderer |
| 7 Prompt | prompt-raw-archiver, prompt-page-mapper |
| 8 Execution | repo-execution-guard, html-safe-editor |
| 9 QA | visual-vqa-checker, takeaway-checker |
| 10 Delivery | delivery-reporter, skill-evolution-writer |

---

## 16. PVO 成功标准

PVO 好不好，不看生成速度，看：

1. 用户说 A，最终是不是 A；
2. 是否保持既有审美水准；
3. 是否减少用户重复 review；
4. 页面是否有证据、有结构、有 takeaway；
5. 是否避免 repo 污染；
6. 是否把用户原话沉淀成长期资产；
7. 是否能稳定复用到下一次分享、老板汇报、Demo、知识分享。

---

## 17. 下一步落地

建议建立正式 Skill：

```text
skills/pvo-presentation-visual-orchestrator/
  SKILL.md
  references/
    presentation-types.md
    style-presets.md
    component-gallery.md
    image-treatment.md
    repo-hygiene.md
  templates/
    project-brief.md
    page-plan.md
    design-decisions.md
    visual-qa.md
  assets/
    style-gallery/
    html-components/
```

以后用户说：

“做一个 4 页老板汇报 deck。”

PVO 不会直接写 HTML，而会先输出：

1. 观众：老板 / 决策者；
2. Takeaway：批准资源 / 授权；
3. 风格：Executive Dark；
4. 页面结构：成果 → 计划 → ROI → 决策；
5. 每页组件；
6. 缺少素材；
7. 执行 checklist。

确认后再进入生成。
