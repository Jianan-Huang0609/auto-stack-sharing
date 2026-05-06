# CER Project Retrospective · 2-Hour Meeting Kit

> 准备日期：2026-05-06 | 基于 CER main 分支代码审阅 + 项目管理文档分析

## 会议结构 (120 min)

| Time | Topic | Owner | Format |
|------|-------|-------|--------|
| 0:00-0:10 | 开场：这次 Retro 的目的 | Jianan | 口述 |
| 0:10-0:30 | **Session 1: 优势与短板** | 全员 | 每人写 3 张便利贴 → 分组讨论 |
| 0:30-0:55 | **Session 2: 可复用资产盘点** | Jianan | 展示材料 + 讨论 |
| 0:55-1:20 | **Session 3: 下一阶段方向** | 全员 | 优先级投票 + 路线讨论 |
| 1:20-1:45 | **Session 4: 个人实践与想法** | 每人 5-8 min | 自由分享 |
| 1:45-2:00 | 收束：Action Items + Owner + ETA | Jianan | 总结 |

---

## Session 1: 优势与短板 (20 min)

### 当前优势 (基于代码审阅识别)

| # | 优势 | 证据 |
|---|------|------|
| 1 | **多阶段 Pipeline 架构成熟** | Stage 0-5 完整链路：解析→对齐→LLM差异→Eval→白名单回流 |
| 2 | **Agent 设计体系完整** | 11 个专用子 Agent 设计文档（Master/Whitelist/FewShot/Eval/FormatAdaptor/Template/Diagnostic/Code/Golden/Onboarding/Consolidation），覆盖修复、监控、学习、适配、生命周期 |
| 3 | **Eval 框架扎实** | Golden Standard 机制 + EvalAgent 自动路由 + 趋势记录。不是「感觉好了」而是「数据说了算」 |
| 4 | **Skill 资产已形成** | 7 个独立 Skill（docx 提取×2、RAG 知识库、LLM Diff、测试验证、Skill 创建模板） |
| 5 | **项目管理体系成熟** | PM_Skill 含完整模板（需求定义、工作流、架构设计、成功指标、会议记录、功能升级、总结复盘、Skill 包） |
| 6 | **白名单机制可积累** | 规则修复自动回流，系统越跑越准 |
| 7 | **前端+后端分层** | UI 模块有独立 frontend/backend，非纯脚本 |
| 8 | **诚实复盘文化** | 0415 阶段总结坦率记录了「贡献累积但组织认证未同步」的落差感 |

### 当前短板

| # | 短板 | 影响 |
|---|------|------|
| 1 | **Agent 实现进度不明** | 设计文档完备但 `LEFA_Agentic_Harness_Plan.md` 标注 v0.5，子 Agent 实际开发状态需确认 |
| 2 | **知识单点风险** | Jianan 是 Pipeline 全链路唯一深度掌握者；其他成员的贡献边界和独立决策空间不清晰 |
| 3 | **Planning > Execution Gap** | EVALS PL.png / LEFA PL.png / Review PL.png 三张规划图存在，对应代码落地程度需验证 |
| 4 | **技术债积累** | `old/` 文件夹 + `06_潜在功能升级` 说明存在未消化的历史代码 |
| 5 | **组织可见性不足** | 0415 总结明确指出的问题——项目成果未转化为「组织级认证」和「职责升级」 |
| 6 | **Eval→Action 闭环未通** | Eval 发现问题后，是否自动触发 Agent 修复？还是依赖人工介入？ |
| 7 | **UI 成熟度待评估** | 前端代码存在，但是否已与真实用户交互、是否收集了可用性反馈 |
| 8 | **跨模块复用不充分** | CER → LR → PTR 的横向扩展已有设计，但实际共享代码/规则的程度需审计 |

---

## Session 2: 可复用资产盘点 (25 min)

### A. 协作方式

| 资产 | 位置 | 复用价值 |
|------|------|---------|
| **项目启动 Kickoff 模板** | `0.项目管理/0.Kickoff` | 技术选型→组队→需求对齐的标准流程 |
| **会议三段式模板** | `PM_Skill/会议三段式模板.md` | 「准备→决策→行动」结构，可直接套用 |
| **协作矩阵** | `02_协作Guidance/协作矩阵.md` | 角色×职责×沟通渠道的标准化 |
| **CER PoC 管理分享** | `PM_Skill/cer_poc_sharing.md` | 「把 LLM 当 team member」的思维框架，对 AI 项目管理有普适性 |

### B. 开发习惯

| 资产 | 位置 | 复用价值 |
|------|------|---------|
| **Stage 分阶段开发** | Pipeline Stage 0-5 | 「中间态落盘 + 可局部重跑」模式可推广到所有数据处理项目 |
| **白名单回流机制** | WhitelistAgent 设计 | 规则积累模式→任何需要「越用越好」的系统 |
| **Golden Standard 测试** | `CER_Project/Golden Standared/` | Evals 驱动的开发习惯→LLM 输出的质量锚点 |
| **规则优先 + LLM 兜底** | Stage1 拆分规则→Stage2 LLM | 能规则化的不调 LLM，降低成本和不确定性 |

### C. Skill 资产

| Skill | 位置 | 核心能力 |
|-------|------|---------|
| DOCX Extraction | `Skill/SKILL.md` | 按层级规则从 DOCX 定位抓取章节内容 |
| DOCX 3L Extraction | `Skill/docx-3l-extraction-skill` | 三层结构（章/节/条）深度提取 |
| LLM Diff | `Skill/llm-diff-skill` | 可复原 chunk diff + TableJSON 保护，避免长文本截断 |
| RAG Knowledge Base | `Skill/rag-knowledge-base-skill` | 基于文献的知识库构建与检索 |
| Test Validation | `Skill/test-validation-skill` | 自动化测试与验证 |
| Skill Creator Template | `Skill/create-skill-template` | Skill 创建标准化模板 |

### D. Agent 架构

| 组件 | 位置 | 复用价值 |
|------|------|---------|
| **LEFA Agentic Harness** | `Design/LEFA_Agentic_Harness_Plan.md` | 11-Agent 协调框架，Master→专项 Agent 的路由设计 |
| **Agent Design Plan** | `Design/Agent/AgentDesign_Plan.md` | 前端可视化流程 + Agent 调用 + Todo 管理 |
| **RAGent Framework** | `Design/ragent_framework` | RAG + Agent 融合的设计参考 |
| **Agent 实现代码** | `Design/Agent/` (main.py, graph.py, state.py) | LangGraph 风格的 Agent 图实现 |

---

## Session 3: 下一阶段方向 (25 min)

### 优先级投票（建议 1-5 打分，取平均排名）

| # | 方向 | 当前状态 | 为什么重要 | 预估工作量 |
|---|------|---------|-----------|-----------|
| **A** | **Evals 闭环** | Golden Standard 存在，EvalAgent 设计完成 | 让质量从「人工抽查」变成「自动门控」| 2-3 周 |
| **B** | **UI/UX 升级** | 前后端代码存在 | 降低非技术用户的使用门槛；是组织影响力的放大器 | 3-4 周 |
| **C** | **用户管理** | 未看到现有实现 | 多用户协作、权限控制、操作审计 | 2-3 周 |
| **D** | **Stakeholder 管理** | 0415 总结提到但无系统化方案 | 把项目成果翻译成组织语言，争取资源和认可 | 持续 |
| **E** | **Agent 落地** | 设计 v0.5，部分代码存在 | 从「人工改代码修复」变为「用户说一句话，系统自己修」 | 4-6 周 |
| **F** | **横向扩展** | CER→LR→PTR 已有初步验证 | 证明这不是单场景脚本，是能力底座 | 3-4 周 |
| **G** | **知识去单点化** | 当前 Jianan 是瓶颈 | 降低 bus factor，让更多人能独立决策 | 持续 |

### 建议的 MVP 路线（如果只能选 2 个）

1. **A + E 捆绑**：Evals 闭环 + Agent 落地 → 让系统自己修问题，Evals 自动验证修好了没有
2. **B 独立**：UI/UX 升级 → 对 stakeholder 展示的最直接方式

---

## Session 4: 个人实践与想法 (25 min)

### 引导问题（提前发给参会者）

> 每人准备 5-8 分钟分享，建议覆盖以下任意 3 个问题：

1. **你在 CER 项目里做的哪一个具体决定或操作，事后证明是对的？** 如果有第二次机会，你会怎么做得更好？

2. **有没有一个你反复遇到的问题或重复劳动，如果自动化掉会让你轻松很多？** 具体是什么？

3. **你觉得整个团队的协作方式里，最该改的一件事是什么？**

4. **如果 CER 项目下一个阶段只做一件事，你希望是什么？**

5. **你个人在这个项目里想得到什么？（技术成长？管理经验？行业认知？组织认可？）**

### Jianan 的个人分享建议

基于代码审阅，建议你分享：

| 维度 | 可以说的 |
|------|---------|
| **技术** | 「从 Stage 0 脚本到现在 11-Agent 设计，我最大的学习是：能规则化的不调 LLM，能自动化的不留给人」 |
| **管理** | 「把 PM 当成系统工程——给 LLM 上下文和给 team member 上下文本质是同一件事」 |
| **个人** | 「坦白说，我做这个项目不只是为了功能交付。我想验证：一个 AI 工程化的工作流能不能被组织认可为正式能力」 |

---

## 收束：Action Items 模板

| # | Action | Owner | ETA | 验收标准 |
|---|--------|-------|-----|---------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

---

## 附录：CER 仓库结构速览

```
CER (main)/
├── 0.项目管理/           ← Kickoff、会议记录、协作Guidance、阶段总结
│   ├── PM_Skill/         ← 项目管理技能包（复盘、分享、会议模板、讲稿）
│   └── 开发灵感/
├── 1.需求提出与分析/      ← Input/Output + User Requirement Spec
├── 2.产品功能设计/        ← Design Specification
├── 5.开发与实现/          ← 潜在功能升级 + Lesson&Learn
├── 6.Presentation/       ← 汇报材料
├── Design/               ← 架构 + Agent设计 + RAGent框架
│   ├── Agent/            ← Agent 实现代码 (main.py, graph.py, state.py)
│   └── LEFA_Agentic_Harness_Plan.md  ← 11-Agent 协调框架
├── CER_Project/          ← Evals + Golden Standard + Pipeline 代码
├── Literature Review/    ← 文献检索管线 (含 Dify 集成)
├── Review/               ← LEFA 汇报与 Tech Overview
├── Skill/                ← 7 个独立 Skill（docx 提取、RAG、LLM Diff、测试验证）
├── UI/                   ← 前后端分离的前端交互层
├── config/               ← 配置文件
├── logs/                 ← 运行日志
└── old/                  ← 历史代码
```
