# PVO — Presentation Visual Orchestrator

> PVO = Presentation Visual Orchestrator。它不是一个单独做 slide 的 Skill，而是演示型 HTML / Deck 项目的视觉总编排器。

## 1. 定位

PVO 负责把用户的自然语言反馈，稳定路由到正确的视觉执行路径，避免：

```text
用户说 A → AI 误判成 B → 花很久做错 → 用户 review 发现丑/低密度 → 反复返工
```

PVO 的目标不是“多做”，而是 **高命中率、高审美一致性、高信息密度、低返工率**。

---

## 2. PVO 的输入

用户可能会说：

- “这页太丑”
- “这张图太大/太小”
- “这个顺序改成 A→B→C”
- “这个词怪”
- “老板要看 ROI”
- “这页 weak”
- “不要把讲稿灌进去”
- “这页要能 takeaway”
- “用我这张图”
- “保持现在这个风格”

PVO 必须先判断意图类型，而不是直接动手。

---

## 3. PVO Skill 集合

### 3.1 Audience & Takeaway Router

负责开工前定义：
- 观众是谁；
- 看完要相信什么；
- 要带走什么；
- 决策点是什么。

输出：Project Brief。

---

### 3.2 Visual Style Router

负责风格选择与一致性：
- Warm Builder；
- Executive Dark；
- Clean SaaS；
- Research Paper；
- Neon Lab；
- Minimal Keynote。

默认：如果没有特别指定，沿用当前 sharing deck 的 **Warm Builder** 水准。

---

### 3.3 Slide Structure Router

负责判断页面类型：
- 证据页；
- 方法页；
- 流程页；
- 决策页；
- 故事页；
- 资源页。

根据类型选择模板：
- Big Screenshot Tabs；
- Asset Wall；
- Timeline；
- Pipeline；
- Comparison Cards；
- Agent Orbit；
- Resource Pack。

---

### 3.4 Image Treatment Router

负责图片展示方式：
- cover；
- contain；
- scrollable；
- browser frame；
- phone frame；
- multi-image stack；
- zoomed evidence crop。

默认规则：
- Dashboard / App / 长图 / 文档图 → scrollable + max-width；
- 横向截图 → cover/contain 视内容决定；
- 视频 → autoplay muted loop。

---

### 3.5 Copy & Prompt Archive Router

负责：
- 保留用户原话；
- 映射 prompt 到页面；
- 标记处理状态；
- 绑定 commit。

用户给出的语感锚点不能随意改成咨询腔。

---

### 3.6 Repo Execution Router

负责工程卫生：
- 不 `git add .`；
- 不 `git add deck-v6/`；
- 不提交 visual-check / bak / check html；
- push 后验证 origin/master；
- Vercel 只做部署验证，不做源码 ground truth。

---

## 4. Intent Router 表

| 用户说法 | 路由 | 默认动作 | 风险 |
|---|---|---|---|
| “这页太丑” | Visual Style + Slide Structure | 先诊断，再换模板 | 不直接重写全页 |
| “信息密度不够” | Slide Structure | 加证据/流程/对比 | 不灌讲稿 |
| “图片太大/太小” | Image Treatment | 判断 cover/contain/scroll | 不改内容结构 |
| “按这个顺序” | Execution Constraint | 严格按用户顺序 | 不自作主张重排 |
| “这个词怪” | Copy Router | 只改词/语气 | 不扩大到结构改版 |
| “用这张图” | Image Treatment | 复制进 assets + 替换 src | 确认图片路径 |
| “老板汇报” | Audience + ROI | Executive/Decision 结构 | 不做社区分享风 |
| “要 takeaway” | Takeaway Router | 增资源/路径/框架 | 不变鸡汤 |
| “保持风格” | Visual Style | 延续当前 CSS tokens | 不换视觉系统 |
| “别反复改” | PVO Safety | 先 brief + checklist | 不直接大改 |


---

## 4.5 Presentation Type Router / 分享类型分流

PVO 不能只判断“页面怎么排版”，还要先判断这次表达属于哪种 presentation 类型。不同类型的审美、信息密度、证据形式、takeaway 完全不同。

| 类型 | 核心目标 | 视觉/内容策略 | 常用 Skill | 不该做什么 |
|---|---|---|---|---|
| Codebase Hard-core Analysis / 代码基础硬核分析 | 证明技术深度、架构理解、实现可行性 | 架构图、模块边界、调用链、diff、Evals、benchmark | `codebase-analyzer`, `architecture-mapper`, `evals-proof-builder` | 不要包装成炫技产品广告 |
| Product Promotion / 炫技产品推广 | 让人快速感到“这个东西厉害、想试” | Hero demo、before/after、亮点卡、视频、动效、用户价值 | `demo-storyteller`, `wow-moment-builder`, `product-landing-copy` | 不要堆底层代码细节 |
| Knowledge Sharing / 知识分享 | 让观众学会并带走方法 | 概念框架、费曼解释、例子、练习路径、资源包 | `concept-explainer`, `learning-path-builder`, `resource-pack-builder` | 不要只有炫技截图，没有方法 |
| Aesthetic Design / 美学设计展示 | 展示审美判断和视觉品味 | moodboard、style tokens、对比稿、组件 gallery、视觉系统 | `style-gallery-selector`, `visual-qa-checker`, `design-system-builder` | 不要把审美说成空洞形容词 |
| Boss Decision Deck / 老板决策汇报 | 争取资源、授权、下一阶段决策 | ROI、timeline、risk、resource ask、option matrix | `decision-deck-architect`, `roi-analyst`, `roadmap-planner` | 不要做成社区分享或技术教程 |
| Internal Execution Plan / 内部执行计划 | 让团队知道谁做什么、何时交付 | 甘特图、RACI、开发包、依赖、阻塞项 | `workpackage-planner`, `raci-mapper`, `timeline-builder` | 不要只讲愿景 |

### 分流规则

用户需求进入 PVO 后，先问：

```text
这次表达更像哪一种？
1. 代码/架构硬核分析
2. 产品推广/炫技 demo
3. 知识分享/培训
4. 美学设计展示
5. 老板决策汇报
6. 内部执行计划
```

如果用户没有明确说，PVO 根据关键词自动判断：

| 关键词 | 默认类型 |
|---|---|
| codebase / 架构 / 技术细节 / 调用链 / Evals | Codebase Hard-core Analysis |
| demo / wow / 产品效果 / 炫技 / 让人想试 | Product Promotion |
| 学习 / 分享 / takeaway / 怎么开始 / 资源包 | Knowledge Sharing |
| 画风 / 配色 / 审美 / 风格 / gallery | Aesthetic Design |
| 老板 / ROI / 资源 / 授权 / 决策 | Boss Decision Deck |
| timeline / 分工 / 开发包 / 甘特图 / 项目管理 | Internal Execution Plan |

### 关键原则

同一份素材可以被不同类型重组，但表达目标不能混。

例如 codebase 分析页可以有好看的视觉，但它首先要证明技术判断；产品推广页可以有架构图，但它首先要让人理解价值和 wow moment。PVO 必须先锁类型，再选组件。
---

## 5. PVO 执行流程

```text
1. 接收用户需求
2. 判断 intent
3. 若 intent 明确 → 生成执行 checklist
4. 若 intent 不明确 → 只问一个关键问题
5. 调用对应 Skill Router
6. 小步修改
7. 自检：审美 / 信息密度 / 图片 / 顺序 / repo hygiene
8. commit + push
9. 汇报：改了什么、页码、commit、链接
10. 把用户原话和设计决策归档
```

---

## 6. 高风险动作清单

以下动作必须先确认：

- 删除用户提过的页面/素材；
- 改主叙事；
- 改用户指定顺序；
- 改整体画风；
- 把真实截图换成 mock；
- 把用户原话改成泛化表达；
- 大规模重构单文件 HTML。

---

## 7. PVO 成功标准

PVO 好不好，不看生成速度，看：

1. 用户说 A，最终是不是 A；
2. 是否保持既有审美水准；
3. 是否减少用户重复 review；
4. 页面是否有证据、有结构、有 takeaway；
5. 是否避免 repo 污染；
6. 是否把用户原话沉淀成长期资产。

---

## 8. 下一步落地

- [ ] 把 PVO 写入 frontend-slides / jianan-presentation-system Skill；
- [ ] 建 `html-style-gallery/`；
- [ ] 建 `USER_PROMPTS_RAW.md` + `USER_PROMPTS_BY_PAGE.md` 模板；
- [ ] 把 P03 Big Screenshot Tabs 抽成组件；
- [ ] 加 repo hygiene guard。
