# Auto-Stack Sharing — 开发日志

> 记录从需求诞生到最终交付的完整过程。  
> 仓库：https://github.com/Jianan-Huang0609/auto-stack-sharing

---

## 项目起源

### 2026-05-05 09:13 CST — 需求提出

Jianan 在 Discord 上发来一份 MAE（Multi-Agent Engineering）端到端升级方案。核心目标：把 OpenClaw + MAE Router + Codex/Claude CLI 三层打通，实现"Discord 一句话 → 自动路由 → CLI 执行 → 结果回写"的完整链路。

方案包含 3 个新文件 + 4 个修改文件：
- `executors/unified_cli.py` — 统一 CLI 执行器，auto 路由 Codex/Claude
- `tools/search.py` — GLM-4-plus web_search 封装
- `demo/full_stack_demo.sh` — 一键全链路测试
- 修改 pipeline.py / router.py / airtable.py / mae_submit.py

### 同步讨论的设计附件

Jianan 同时发来三份设计稿，成为后续课件的核心素材：

1. **三层体系架构图**（PNG）— 用 n8n/Skill/Agent 三列展示"确定性分工"理念
2. **设计稿 HTML**（`design-layers.html`）— 精美的分层卡片布局，橙/绿/灰配色，含判断公式 + 三个案例
3. **分享讲稿 Markdown**（`presentation-script.md`）— 6 节完整叙事，从观点到落地建议

这三份附件定义了整个课件的**内容骨架**和**设计语言**。

---

## 阶段一：MAE 核心链路修复与验证

### 修复的 5 个阻塞项

| # | 问题 | 根本原因 | 修复方案 |
|---|------|---------|---------|
| 1 | Codex 拒绝写入文件 | 默认 sandbox 为 read-only | `--sandbox workspace-write --full-auto` |
| 2 | Codex 拒绝非 Git 目录 | 安全检查要求 | `--skip-git-repo-check` |
| 3 | Claude 权限弹窗阻塞 | 非交互模式需要跳过权限 | `--permission-mode bypassPermissions` |
| 4 | mae_submit Airtable 轮询永不返回 | submit 写 pending，poller 只处理 claimed | CLI 任务改为直连 executor，跳过 Airtable |
| 5 | Demo 脚本 GitHub namespace 错误 | `jianan/` → `Jianan-Huang0609/` | 修正 repo namespace |

### 验证结果

| 路径 | 路由决策 | 耗时 | 结果 |
|------|---------|:--:|------|
| `code --cli auto`（创建文件） | auto→Codex | 19.5s | ✅ hello.py 含 argparse + 类型注解，可运行 |
| `code --cli auto`（架构设计） | auto→Claude→Codex fallback | 57.3s | ✅ 7,421 chars 架构文档 |
| `pipeline --dry-run` | PipelineExecutor | <1s | ✅ 即时返回路由决策 |
| Router 展示 | research/code/refactor | <1s | ✅ 三种类型路由均正确 |

### P0：Discord `!mae` 命令触发

在 `skills/mae-autopilot/SKILL.md` 中定义了完整命令协议：

```
!mae code "任务"              → Codex/Claude auto 路由
!mae pipeline "任务"           → Pipeline 拆步执行
!mae research "任务"           → GLM 搜索+汇总
!mae dry "任务"                → 只看路由不执行
```

---

## 阶段二：课件 HTML 构建

### Jianan 的核心要求

> "我是需要一个能直接分享出去的课件 html，按照思路讲清楚：外部流水线 n8n/Dify 的能力、Skill 的能力、CLI/Agent 的能力（公司语境下可以是 VS Code + Copilot），然后再是我的实践、功能展示、设计思路、实际效果、takeaway"

### V1 → V2 → V3 迭代过程

#### V1（被否决）

第一版做成了**内部 Dashboard**（含状态面板、进度条、路线图），不符合"可分享课件"的定位。Jianan 反馈：

> "不是，我是需要一个能直接分享出去的课件 html"

#### V2（结构确立）

完全重写为可分享的长滚动课件，确立 10 章叙事结构：

1. 封面
2. 为什么需要分层？
3. 三层分工总览
4. 如何选择？— 判断公式（🆕 新增，教学核心）
5. 第一层 n8n/Dify
6. 第二层 Skill
7. 第三层 Agent/CLI
8. 三层如何协作？（🆕 新增，统一视角）
9. 我的实践 4 用例
10. 设计思路 + Takeaways

关键改进：
- 每层之间加入**过渡桥梁段落**（"n8n 擅长搬运但不擅长创作 → Skill"）
- 公司语境内嵌（n8n↔CI/CD，Skill↔Design System，Agent↔VS Code+Copilot）
- CSS 纯手绘流程图（零图片依赖）

#### V3（最终版）

Jianan 提出关键反馈：

> "我觉得首先要给大家一个视角，就是这些工具能实际做什么？可以收集一些惊艳的例子来做展示"

于是新增**第一章「这些工具能实际做什么？」**作为开场，把理论推到后面。

包含 6 个案例卡片（3 个 Jianan 实践 + 3 个外部案例），3×2 网格布局：

| 案例 | 指标 | 来源 |
|------|------|:--:|
| ⚡ Discord → 可运行的 Python 项目 | 21 秒 | Jianan |
| 🎬 零人工介入，自动生成 1080p 中文字幕视频 | 37s / 612KB | Jianan |
| 🧠 全天自动监控 AI 前沿，精准推送高信号内容 | 3条/天 | Jianan |
| 🌍 PM 零代码 2 小时上线内部工具网站 | 2 小时 | 外部 |
| 📡 竞品监控+日报，7×24 无人值守 | 全天候 | 外部 |
| 💡 Karpathy "Vibe Coding" | 新范式 | 外部 |

底部一句总结：

> "这些案例的共同点——你是在指挥一个人，而不是使用一个工具。"

---

## 最终课件结构（13 章）

```
一   这些工具能实际做什么？        🆕 先看效果
二   为什么需要分层？
三   三层分工总览
四   如何选择？— 判断公式          🆕 教学核心
五   第一层：n8n / Dify
六   第二层：Skill
七   第三层：Agent / CLI
八   三层如何协作？                🆕 统一视角
九   我的实践：四个真实用例
十   设计思路与关键决策
十一 Takeaways：从哪开始？
附   附录 & 交流
```

---

## 设计决策记录

### 为什么是长滚动而不是幻灯片？

- 长滚动更容易作为单文件分享（不需要翻页软件）
- 移动端友好，可以直接在手机上滑动浏览
- 打印友好，`@media print` 去除阴影
- 每个章节近全屏高度，保持视觉节奏

### 为什么自包含（零外部依赖）？

- 可以直接用 `file://` 协议打开，无需 HTTP 服务器
- 不依赖 CDN，离线也可用
- 不会有链接失效问题

### 配色方案

| 层 | 颜色 | 色值 | 类比 |
|----|------|------|------|
| n8n/Dify | 灰色 | `#555` | 神经系统 |
| Skill | 青色 | `#2B9B9E` | 肌肉记忆 |
| Agent | 橙色 | `#E87722` | 大脑 |

### 公司语境映射策略

贯穿全文的三个类比，确保技术/非技术同事都能理解：

| 层 | 公司场景类比 |
|----|------------|
| n8n/Dify | CI/CD Pipeline — 定义好就自动跑 |
| Skill | Design System — 一套规范保证输出质量一致 |
| Agent/CLI | VS Code + Copilot — 你已经在用了 |

---

## 仓库文件清单

```
auto-stack-sharing/
├── courseware.html          # 完整课件（13章，72KB，自包含）
├── design-layers.html       # 三层体系原始设计稿（14KB）
├── presentation-script.md   # 分享讲稿文字稿（7KB）
├── CHANGELOG.md             # 本文件
└── README.md                # 仓库说明
```

---

## 下一步

- [ ] 5 月 15 日内部分享
- [ ] 考虑部署 GitHub Pages 以便直接访问
- [ ] 视频管线 E2E 补完（Remotion 动画化）
- [ ] 内容管线全自动化（Brave API key 配置）
- [ ] Discord `!mae` 命令在群聊中正式启用
