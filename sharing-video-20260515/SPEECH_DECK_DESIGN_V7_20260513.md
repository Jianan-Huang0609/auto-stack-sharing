# Speech × Deck Design V7 — 个人 AI 工作系统分享

状态：基于 V6 演讲稿暂定稿 + 逐页 review 后的新版页面设计。  
目标：让 HTML deck 不再像素材目录，而是严格服务 45min 分享叙事。

---

## 0. 核心主线

这场分享的主线锁定为：

开场互动  
→ 正式定位：不是工具清单，是能力边界  
→ 先展现肌肉：n8n → Copilot+Skill → Agent  
→ RAG / context / MCP 演进桥  
→ 从肌肉转入三层方法  
→ n8n / Skills / Agent OS 分层详解  
→ 学习路径反转  
→ 人脑判断与 AI 时代能力  
→ CER proof 轻带  
→ Takeaway / Q&A

核心句：

不是用 AI 工具，而是设计一套让 AI 正确工作的系统。

---

## 1. 页面设计原则

每页只承担一种任务：

1. **过渡**：告诉观众进入哪一段。
2. **证明**：用截图 / 资产 / 系统图证明“这是真的”。
3. **解释**：讲专业概念 + 费曼解释。
4. **方法**：讲设置、踩坑、tips。
5. **带走**：让听众拍照记住。

不再把 proof、解释、方法、takeaway 混在同一页。

---

## 2. 固定版式系统

为了解决页面漂移，HTML 使用统一 frame：

- 顶部：section eyebrow / page number
- 标题区：固定高度
- 主体区：固定 grid
- 底部：key sentence / speaker cue
- 最底部：section rail + slide dots

### Template A — Section Break

用途：章节切换。  
信息密度：低。  
页面：06 / 07 / 14 / 18 / 22 / 33 / 40。

### Template B — Poll / Opening Cards

用途：开场互动、三个问题。  
信息密度：中。  
页面：02 / 03 / 05。

### Template C — Split Proof

用途：左观点，右证据。  
信息密度：中。  
页面：08 / 13 / 20 / 21 / 36。

### Template D — Asset Wall

用途：展示高审美产物墙。  
信息密度：视觉高、文字低。  
页面：15 / 39。

### Template E — Concept + Feynman

用途：专业概念 + 费曼解释。  
信息密度：中高。  
页面：12 / 24 / 26 / 28。

### Template F — Setup + Pitfalls + Tips

用途：方法页。  
信息密度：高。  
页面：25 / 27 / 29。

### Template G — Big Thought

用途：思考升级。  
信息密度：低中。  
页面：32 / 33 / 40。

---

## 3. 新版页面结构

### OPENING

01. Cover  
任务：建立主题。  
模板：Section / Cover。  
素材：无。

02. Opening Poll  
任务：开场互动。  
模板：Poll Cards。  
素材：可选二维码。

03. Poll Meaning  
任务：连接互动与分享目的。  
模板：Two Audience Cards。  
素材：无。

04. Positioning  
任务：定义不是工具清单。  
模板：Contrast Cards。  
素材：无。

05. Three Questions  
任务：给观众地图。  
模板：Question Cards。  
素材：无。

---

### MUSCLE FIRST

06. Muscle Overview  
任务：明确先看结果。  
模板：Section Break + 3 preview cards。  
素材：n8n / HTML / Agent proof 可后补。

---

### N8N MUSCLE

07. Section Break — n8n  
任务：切换到第一块肌肉。

08. n8n Proof  
任务：展示 workflow 能跑。  
模板：Split Proof。  
素材 P0：n8n UI 截图；暂用 Remotion pipeline frame。

09. Workflow Set  
任务：展示不是一个 demo。  
模板：Workflow Cards。  
素材：workflow JSON 文件名 / 节点流。

10. Workflow to AI Node  
任务：从普通自动化过渡到 AI 入驻 workflow。  
模板：Before/After。

---

### EVOLUTION BRIDGE

11. Evolution Timeline  
任务：建立时代脉络。  
模板：Timeline。

12. Feynman Explanation  
任务：把专业概念讲人话。  
模板：Concept + Feynman Cards。

13. RAG / Chatbox Demo  
任务：展示可搭一个通用流程。  
模板：Split Proof。  
素材 P1：RAG workflow 截图。

---

### COPILOT + SKILL MUSCLE

14. Section Break — Copilot + Skill  
任务：切到第二块肌肉。

15. Asset Wall  
任务：展示 PPT / HTML / AIPM / Script / Commit / Skill.md。  
模板：Asset Wall。  
素材 P0：6 张图。

16. Why PPT / HTML Matter  
任务：说明高审美高结构是壁垒。  
模板：Contrast Cards。

17. Skill Pipeline  
任务：展示能力包如何组合。  
模板：Pipeline Cards。

---

### AGENT OS MUSCLE

18. Section Break — Agent OS  
任务：切到第三块肌肉。

19. Agent Team  
任务：展示 SAM + 专业 Agent。  
模板：Network Diagram。

20. Mechanism Proof  
任务：说明不是拟人化，是机制。  
模板：Split Proof。  
素材 P0：Agent 文件树。

21. Dashboard / MAE / Feishu Proof  
任务：展示可观察、可协作。  
模板：Proof Wall。  
素材 P0：Dashboard；P1：MAE / 飞书。

---

### METHOD

22. So What / Three Layers  
任务：从肌肉转入方法，同时合并三层总览。  
模板：Layer Stack。  
说明：原 22 + 23 合并。

24. n8n Concept + Feynman  
25. n8n Setup + Pitfalls + Tips  
26. Skills Concept + Feynman  
27. Skills Setup + Pitfalls + Tips  
28. Agent OS Concept + Feynman  
29. Agent OS Setup + Pitfalls + Tips

这六页必须保留，不压缩。

---

### LEARNING + THINKING

30. My Learning Path  
任务：讲真实学习路径。

31. Recommended Build Path  
任务：讲推荐反向搭建路径。

32. Human Brain Tradeoff  
任务：讲 AI 让学习链路简单，但人脑不可省略。

33. Code Cheap / Product Judgment Expensive  
任务：AI 时代能力判断。

34. Three Reflections  
任务：项目反思、软件产品、内容资产系统。

35. This Sharing Itself Is Proof  
任务：把本项目作为资产生产系统 proof。

---

### CER + TAKEAWAY

36. CER / PTR Proof  
任务：轻带公司项目，证明可落地复杂项目。

37. CER Working Method  
任务：用户需求 → 架构开发包 → 分工 → 内部轻量对齐 → 外部专家讨论 → 内部锁版。

38. Minimal Loop  
任务：告诉别人如何开始。

39. Resource Pack  
任务：Skill / Agent / Docs / Path。

40. Closing + Q&A  
任务：收束。

---

## 4. 素材清单

### P0

- n8n workflow UI 截图
- Dashboard 页面截图
- PPT 截图
- AutoStackSharing HTML 截图
- AIPM 高审美页面截图
- Agent 文件树 / agent_tasks / PROJECT_STATE 截图
- 一个真实 Skill.md 截图
- CER/PTR 图或 PPT 截图

### P1

- MCP docs 截图
- Dify docs 截图
- n8n docs 截图
- GitHub commit / diff 截图
- MAE 架构图
- 飞书多 bot 截图

---

## 5. HTML 生成要求

1. 继续保留 `0506/index.html` 的米白 + 橙 + 青视觉基因。
2. 继续借鉴 AIPM 的 proof card / asset wall / rounded image container。
3. 所有页面使用固定 frame，不再漂移。
4. 缺素材用等尺寸 placeholder，不改变布局。
5. 底部保留 section rail，但不挤压主体内容。
