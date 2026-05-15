# Prompt 原文归档 + HTML Style Gallery 设计规范

> 目的：把这次 sharing deck 的真实需求迭代沉淀成可复用流程。以后再做分享型 HTML，不只保存最终稿，也保存“用户逐页要求原文”和“可选风格系统”。

---

## 1. 为什么必须保存逐页 Prompt 原文

这次最大的设计资产不是最后的 `index.html`，而是 Jianan 在过程中不断给出的逐页判断：

- 哪一页不对；
- 为什么不对；
- 观众会怎么看；
- 哪个词怪；
- 哪张图需要大一点；
- 哪个顺序才符合认知；
- 哪些内容必须带走。

这些不是普通 comment，而是 **设计决策样本**。如果只保存最终 HTML，会丢掉最有价值的“为什么”。

---

## 2. Prompt 原文归档规则

以后每个分享型 HTML 项目必须维护：

```text
USER_PROMPTS_RAW.md        # 用户原始需求，尽量逐字记录
USER_PROMPTS_BY_PAGE.md    # 按页整理后的需求
DESIGN_DECISIONS.md        # 每次取舍的原因
STYLE_GALLERY.md           # 本项目可选风格与组件
```

### 2.1 `USER_PROMPTS_RAW.md`

只做一件事：**原文保存**。

格式：

```md
## 2026-05-15 10:21 · WeChat

> 第四页的那个展示 dashboard 部分，图片是不是可以缩小一些……

关联页：P03 / 实战展示 Gallery
处理状态：done
commit: xxx
```

要求：
- 不润色；
- 不翻译；
- 不合并语义；
- 只补 metadata：时间、来源、关联页、状态、commit。

### 2.2 `USER_PROMPTS_BY_PAGE.md`

把原文映射到页面。

```md
## P03 · 实战展示 Gallery

### 原文需求
> PPT → HTML → 飞书报告 → 书 → 视频 → Agent → Dashboard → App开发 改成这个顺内需

### 设计意图
观众先看直观产物，再看系统能力。顺序是认知路径，不是视觉排序。

### 最终处理
- Tab 顺序调整；
- 管线删除；
- 视频保留；
- 书 / Agent / Dashboard / App 开发改成 scrollable。
```

### 2.3 `DESIGN_DECISIONS.md`

记录“为什么这样做”。

例子：

```md
## Decision: Dashboard/App/书/Agent 用 scrollable 而不是 contain

原因：
- cover 会裁切，无法证明系统细节；
- contain 虽完整，但竖长图太小；
- scrollable + max-width 85% 兼顾可读性和完整性。

结论：长图、Dashboard、App、复杂系统截图默认 scrollable。
```

---

## 3. 这次已暴露的 Prompt 归档缺口

当前已有：
- `agents/sam/handoffs/sharing_deck_user_comments_2026-05-14_17plus.md`：按页汇总，但不是完整原文；
- `SKILL_EVOLUTION_DECKV6_20260514.md`：设计模式提取；
- `DESIGN_PRINCIPLES_HTML_DECK.md`：设计军规；
- `DESIGN_REFLECTION_META.md`：元反思；
- `REMOTE_REPO_PITFALLS_REVIEW_20260515.md`：远端仓库踩坑。

缺口：
1. 没有完整 `USER_PROMPTS_RAW.md`；
2. 原文和最终 commit 没有一一绑定；
3. 用户逐页要求没有形成可机器读取的结构；
4. 风格系统还没有 gallery 化。

---

## 4. HTML Style Gallery 的必要性

Jianan 的判断很明确：以后不应该每次从零搭配 HTML 风格。应该做一个可选择的 **Style Gallery**，每次开新分享前先选：

- 颜色基调；
- 字体组合；
- 卡片圆角；
- 图像展示方式；
- 章节过渡；
- tab / timeline / pipeline / asset wall 模板。

这相当于把“审美选择”变成产品化组件库。

---

## 5. Style Gallery 应该包含什么

### 5.1 Palette Gallery / 配色图库

每套 style 是一组 CSS variables：

```css
:root {
  --bg: #f8f3e8;
  --text: #141413;
  --muted: #6b6258;
  --accent: #d97706;
  --teal: #0d9488;
  --soft: #fffaf0;
  --border: rgba(20,20,19,.10);
}
```

建议先做 6 套：

| Style | 气质 | 适用 |
|-------|------|------|
| Warm Builder | 米白/橙/青 | 个人系统、AI builder、温暖可信 |
| Executive Dark | 深黑/金/灰 | 老板汇报、战略决策、ROI |
| Clean SaaS | 白/蓝/灰 | 产品 Demo、工具介绍 |
| Research Paper | 米白/墨绿/深灰 | 研究、课程、框架方法论 |
| Neon Lab | 深色/紫/青 | AI/技术实验、未来感 |
| Minimal Keynote | 白/黑/单强调色 | 高级、少字、强节奏 |

### 5.2 Component Gallery / 组件图库

每个组件都要有 preview：

- Cover / 封面
- Question Poll / 提问页
- Big Screenshot Tabs / 大图 tab
- Asset Wall / 资产墙
- Timeline / 时间线
- Pipeline / 流程链
- Comparison Cards / 对比卡
- Agent Orbit / Agent 环形图
- Resource Pack / 资源页
- Closing / 结尾页

### 5.3 Image Treatment Gallery / 图片展示方式

| 类型 | 默认处理 |
|------|----------|
| 横向 screenshot | cover 或 contain，看是否裁切关键信息 |
| Dashboard 长图 | scrollable + max-width 85-90% |
| 手机长图 | scrollable + max-width 60-75% 或手机框 |
| 文档/书页 | scrollable + 多图拼接 |
| 架构图 | contain + 放大 key area |
| 视频 | autoplay muted loop |

---

## 6. Style Gallery 的实现建议

目录结构：

```text
html-style-gallery/
  index.html                 # gallery 总入口
  styles/
    warm-builder.css
    executive-dark.css
    clean-saas.css
    research-paper.css
    neon-lab.css
    minimal-keynote.css
  components/
    big-tabs.html
    asset-wall.html
    timeline.html
    pipeline.html
    agent-orbit.html
    resource-pack.html
  previews/
    warm-builder.png
    executive-dark.png
```

每次新项目流程：

```text
1. 先打开 style gallery
2. 选择 style preset
3. 选择 5-8 个组件模板
4. 生成 project scaffold
5. 再根据用户原文 prompt 逐页替换内容
```

---

## 7. 对 frontend-slides Skill 的新增要求

以后 `frontend-slides` 或相关 Skill 必须加入：

1. **Prompt Raw Capture**：用户每条逐页需求原文自动归档；
2. **Prompt → Page Mapping**：每条需求绑定页码、状态、commit；
3. **Style Preset Selection**：项目开始时先选风格，不临时拼；
4. **Component Reuse**：tab/gallery/timeline/pipeline 不重复手写；
5. **Image Mode Decision**：根据图片尺寸自动建议 cover/contain/scroll；
6. **Repo Hygiene Guard**：禁止 `git add .` / `git add deck-v6/`，阻止 visual-check 误提交。

---

## 8. 下一步落地任务

### P0
- [ ] 从当前微信/Discord transcript 尽可能恢复 `USER_PROMPTS_RAW.md`
- [ ] 建立 `USER_PROMPTS_BY_PAGE.md`
- [ ] cleanup repo：移除 visual-check/check/bak 远端追踪

### P1
- [ ] 新建 `html-style-gallery/` 原型
- [ ] 先实现 Warm Builder + Executive Dark 两套
- [ ] 抽象 P03 Big Screenshot Tabs 为可复用组件

### P2
- [ ] 把以上规则沉淀进 frontend-slides Skill
- [ ] 每次生成 deck 自动输出 style decision + prompt archive
