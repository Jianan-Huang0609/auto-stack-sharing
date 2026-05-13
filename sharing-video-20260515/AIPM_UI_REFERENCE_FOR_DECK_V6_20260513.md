# AIPM UI Reference for AutoStackSharing Deck V6

参考源：`/Users/jianan/.openclaw/workspace/repos/AIPM-Mystique`

用途：为 AutoStackSharing V6 演讲 HTML 提供图片展示和 UI 质感参考。  
原则：只吸收 AIPM 的图片/卡片/产品化展示手法，不改变 V6 deck 已锁定的 `0506/index.html` 米白 + 橙 + 青主视觉。

---

## 1. AIPM 页面值得借鉴的点

### 1.1 产品化页面，而不是普通 slide

AIPM 的页面不是一页一页简单 PPT，而像一个可浏览的产品知识库：

- 左侧导航 / 模块感
- 右侧主内容区
- 内容卡片 + 图片预览
- 可点击放大图片
- 章节之间有明确分类

V6 deck 可以不做完整 sidebar，但要借鉴它的“产品化知识页面”感觉。

---

### 1.2 大图 proof 卡片

AIPM 对图片的处理很强：

- 图片放在白色 / 米白卡片里
- 大圆角：`rounded-2xl / rounded-3xl`
- 细边框：`#E8DCC6`
- 轻 shadow：`shadow-sm → hover:shadow-md`
- 图片上方有 label pill
- 点击或 hover 有“可查看大图”的暗示

V6 deck 对 n8n / Dashboard / PPT / Agent 文件树 / 飞书截图都应使用这种方式。

---

### 1.3 暖色系层次

AIPM 色彩：

- 背景：`#FDFBF9` / `#FDFBF7`
- 深咖文字：`#4A2C2A`
- 主 accent：`#734025`
- 金橙：`#DC9942`
- 边框：`#E8DCC6`

V6 已锁定：

- 背景：`#faf9f5`
- 橙色 accent：`#d97706`
- 青色 skill：`#0d9488`

建议融合：

- 保留 V6 的橙 + 青，不改为 AIPM 深咖。
- 借用 AIPM 的暖白卡片、浅边框、轻 shadow 和图片容器。
- 文字可以继续用 V6 原本深灰/墨色，避免过度复古。

---

### 1.4 图片墙 / 资产墙

AIPM assets 里有很多适合做“成果 proof”的图片：

- `Prime.png` / `Prime2.0.png`：大屏产品感
- `可视化呈现.png` / `可视化效果.png`：UI/visual proof
- `项目管理文件.png`：结构化工作资产
- `三层逻辑.png`：架构逻辑图
- `CER Function.png`：功能结构图
- `Brain Prototype.png` / `Hand Prototype.png`：概念原型

V6 中 Copilot+Skill 段可以做类似“复杂表达资产墙”：

- PPT 截图
- AutoStackSharing HTML 截图
- AIPM 页面截图
- CER 架构页截图
- GitHub commit / diff 截图
- Skill.md 截图

这能强化“AI 不只是写代码，而是可以把高审美、高结构要求推进成资产”。

---

## 2. V6 deck 具体吸收方式

### 2.1 ProofFrame 组件

为所有截图统一做一个视觉容器：

结构：

- 外层白色卡片
- 顶部 pill：`PROOF / WORKFLOW / DASHBOARD / SKILL / DOC`
- 中间大图
- 底部一句 evidence caption
- 可选右上角 status tag：`LIVE / DRAFT / SOURCE / PLACEHOLDER`

适用页面：

- n8n workflow
- RAG/chatbox workflow
- PPT / HTML asset wall
- Agent file tree
- Dashboard
- MAE architecture
- Feishu multi-bot
- CER/PTR proof

---

### 2.2 AssetWall 组件

用于 Copilot+Skill 段。

布局：

- 2x3 或 3x2 图片卡片
- 每张卡片有 type label：`PPT` / `HTML` / `VIDEO` / `SCRIPT` / `COMMIT` / `SKILL`
- 每张卡片下面只放一句话，不写长段落

目的：

让观众第一眼看到“产物密度”和“审美壁垒”。

---

### 2.3 SplitProof 页面

左边：一句观点 + 3 个 bullet。  
右边：大图 proof。

适用：

- n8n：workflow 可以跑起来
- Agent：Dashboard 可观察
- CER：个人系统可以落到公司复杂项目

---

### 2.4 DiagramCard 页面

用于解释抽象概念。

比如：

- Chatbox → RAG → Tool Use → MCP → Agent OS
- Agent OS → Skills → n8n
- 任务进入 → AI 判断 → 人确认 → 状态更新 → 复盘沉淀

视觉：

- 米白背景
- 节点用白卡 + 橙/青 label
- 箭头用细线，不要科技蓝紫

---

## 3. V6 需要避免的事

1. 不把整个 deck 改成 AIPM 的深咖/粉白风格。  
   AIPM 是参考，不是替换。

2. 不做太复杂的交互。  
   演讲 deck 要稳定、好讲，不能像完整 web app 一样需要大量点击。

3. 不让图片抢掉叙事。  
   图片是 proof，主线仍然是“个人 AI 工作系统”。

4. 不继续混淆视频 HTML 和演讲 HTML。  
   AIPM 参考用于演讲 deck，不是 opening trailer。

---

## 4. 建议的 V6 HTML 设计 token

```css
:root {
  --bg: #faf9f5;
  --card: #ffffff;
  --card-soft: #fdfbf7;
  --border: #e8dcc6;
  --ink: #1f2933;
  --muted: #6b7280;
  --accent: #d97706;
  --accent-deep: #92400e;
  --skill: #0d9488;
  --skill-soft: #ccfbf1;
  --proof-shadow: 0 18px 60px rgba(120, 75, 30, 0.10);
}
```

---

## 5. 页面级应用建议

### 开场互动

使用 AIPM 的三卡片入口感：

- 4 张问题卡
- 每张有 icon circle
- hover 可以轻微 lift

### n8n 肌肉

使用 SplitProof：

- 左：workflow 概念和节点流
- 右：n8n 截图 / pipeline frame

### RAG/MCP 演进桥

使用 DiagramCard：

- Chatbox → RAG → Tool Use → MCP → Agent OS
- 右侧放 MCP docs 截图或 USB-C analogy quote

### Copilot+Skill

使用 AssetWall：

- PPT
- HTML
- Video base
- Script
- Commit
- Skill.md

### Agent OS

使用 DashboardWall：

- Dashboard screenshot large
- MAE architecture medium
- Feishu multi-bot medium
- Agent file tree medium

### CER proof

使用 one-page split：

- 左：用户需求 → 架构开发包 → 分工 → 内部对齐 → 外部专家 work review
- 右：CER/PTR dual-layer diagram or PPT screenshot

