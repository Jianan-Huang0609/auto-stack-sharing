# Deck V6 Page-by-Page Review — 内容密度与版式漂移修正

状态：基于当前 40 页 `sharing-video-20260515/deck-v6/index.html` 逐页 review。  
目标：决定哪些页压缩/合并，哪些页细致展开，哪些页需要补素材/补信息；同时解决当前“内容漂移、不好看”的格式问题。

---

## 0. 总体判断

当前 40 页的主线方向已经对了，但还不是最终可讲版。

主要问题有两个：

1. **内容层面**：有些页只是标题 + 一句话，适合作为 section break；但有些内容页还没有足够信息密度，尤其是 proof 页和方法页。
2. **版式层面**：当前页面元素位置容易漂移。因为不同页面用了 `center / two / wide / flow / proof` 混搭，但没有统一的页内网格。

接下来不要继续自由写 HTML。应该先固定 6 类模板，再把每页放进对应模板。

---

# 1. 版式系统修正：先解决“漂移”

## 1.1 当前漂移原因

- 每页内容高度不一致，`justify-content:center` 导致上下位置浮动。
- 标题、label、主体、底部注释没有统一位置。
- proof card、flow、asset wall 的高度没有固定，导致视觉重心变化。
- section break、proof page、method page 混用了同一套 `.content`，没有单独模板。
- 底部 section rail 和 slide dots 占空间，但内容区没有为它们预留固定 safe area。

---

## 1.2 建议统一页面骨架

每页统一为：

```text
┌────────────────────────────────────┐
│ Top Meta：章节 / 页码 / 小标签       │ fixed height 40
│ Title Area：主标题 + 副标题          │ fixed height 150–210
│ Body Area：proof / card / grid      │ flexible but fixed frame
│ Speaker Cue / Key Sentence          │ optional fixed bottom
└────────────────────────────────────┘
Bottom：section rail + dots
```

CSS 方向：

- `.slide` 不再默认 `align-items:center; justify-content:center`。
- 每页用 `.frame`：`display:grid; grid-template-rows:auto auto 1fr auto`。
- 所有 `.content` 固定 top padding 和 bottom safe padding。
- 标题统一左上，不要有的居中、有的偏左，除非是 section break / big thought。
- proof card 高度统一：大 proof 420–500px；asset card 160–180px；method card 150–180px。

---

## 1.3 六类模板

### Template 1 — Section Break

用途：06/07/14/18/22/33/40。  
版式：全屏大标题居中，下面一句话。  
信息密度：低。  
要求：不能放太多卡片。

### Template 2 — Opening / Poll

用途：02/03/05。  
版式：左标题区 + 右/下方 4 卡。  
要求：卡片等高。

### Template 3 — Split Proof

用途：08/13/20/21/36。  
版式：左 38% 文案，右 62% proof card。  
要求：proof card 固定高度；缺素材用同尺寸 placeholder。

### Template 4 — Asset Wall

用途：15/39。  
版式：2x3 或 4x2 资产卡。  
要求：图片占主，文字很短。

### Template 5 — Concept / Feynman

用途：12/24/26/28。  
版式：左专业概念，右费曼解释，底部金句。  
要求：左右卡片等高，不要中间漂移。

### Template 6 — Setup / Pitfalls / Tips

用途：25/27/29。  
版式：2x2 信息卡 + 左侧系统图/流程图。  
要求：这是高信息量页，但要有明确分区。

---

# 2. 逐页 Review

## 01 Cover

当前状态：保留。  
问题：基本 OK，但可以更像主视觉页。  
建议：保留为 Section Cover。增加背景三层淡线图：n8n / Skills / Agent OS。  
素材需求：无。  
信息密度：低，正确。

---

## 02 Opening Poll

当前状态：保留并增强。  
问题：互动问题 OK，但卡片内容略像问卷表，视觉可以更活。  
建议：保留 4 问；每张卡加 icon + 举手动作提示。  
需要补信息：如果想真实互动，需要确认飞书问卷/二维码/现场举手。否则就是 mock。  
素材需求：可无。

---

## 03 Why This Poll

当前状态：保留。  
问题：这页很重要，不能合并。它把互动和分享目的连接起来。  
建议：版式改成左右对比：
- 左：举手的人 → 进阶实践
- 右：没举手的人 → 下次真实试一次
底部：今天不是考大家会不会 AI。  
素材需求：无。

---

## 04 Positioning

当前状态：保留。  
问题：目前“工具清单 → 工作系统”有点单薄。  
建议：增加三行反差：
- 不是模型列表，而是工作系统
- 不是一次回答，而是持续推进
- 不是炫技 demo，而是真实闭环
素材需求：无。

---

## 05 Three Questions

当前状态：保留。  
问题：这页是地图页，信息量合适。  
建议：增加后续章节映射：
- Q1 对应 Muscle
- Q2 对应 n8n / workflow
- Q3 对应 Three Layers / Takeaway
素材需求：无。

---

## 06 Muscle Overview

当前状态：保留但增强。  
问题：现在只有一句话，缺少“接下来 3 个 proof”的结构。  
建议：改成三栏大卡：n8n / Copilot+Skill / Agent，每栏一张 preview placeholder。  
素材需求：n8n frame、HTML/PPT 截图、Agent dashboard 截图。  
信息密度：中低。

---

## 07 n8n Section Break

当前状态：保留。  
问题：作为 section break 是对的。  
建议：加一句“流程真的能跑起来”。不要加更多内容。  
素材需求：无。

---

## 08 n8n Proof

当前状态：需要增强。  
问题：这是第一块肌肉 proof，必须更强。现在如果真实图片缺失，会弱。  
建议：右侧大 proof card 固定展示 n8n pipeline frame；左侧补三层文字：
- 这是什么 workflow
- 它连接哪些系统
- 它证明了什么
素材需求 P0：真实 n8n UI 截图。  
可暂用：Remotion pipeline frame。

---

## 09 Workflow Set

当前状态：保留但需要视觉化。  
问题：现在四张卡只是文件名，没有 workflow 节点感。  
建议：每张卡加 mini-strip：Trigger → Airtable → Logic → Push / Sync。  
是否合并：不合并。它证明“不是一个 demo”。  
素材需求：workflow JSON 文件可作为内容源；真实截图可选。

---

## 10 Workflow to AI Node

当前状态：保留，但应更像桥。  
问题：现在从 n8n 到 AI node 过渡还不够有时代感。  
建议：做前后对比：
- Before：规则 / Code / IF
- After：AI 总结 / 分类 / 决策 / RAG
并在底部引出下一页 Evolution。  
素材需求：无。

---

## 11 Evolution Bridge

当前状态：保留。  
问题：适合 section/big diagram，不要太空。  
建议：放完整演进线：Chatbox → RAG → Context Engineering → Tool Use → MCP → Agent OS。  
是否需要展开：是，下一页概念解释承接。  
素材需求：可加 MCP docs quote。

---

## 12 Feynman Explanation

当前状态：保留但增强。  
问题：很适合观众理解，但现在只是节点词。  
建议：每个节点加一句解释：
- Chatbox：聪明但坐在房间里
- RAG：给他资料柜
- Tool Use：给他手脚
- MCP：给手脚统一插口
- Agent OS：给工作流程和任务表
素材需求：无。

---

## 13 RAG / Chatbox Demo

当前状态：保留，需要素材/信息。  
问题：如果只是 placeholder，会显得虚。  
建议：做一个更具体的 demo 场景：
“问：这个分享项目现在缺什么素材？”
workflow 读取 PROJECT_STATE / material checklist → AI 总结 → 写入 Dashboard。  
需要补信息：是否真的要搭一个小 n8n demo。  
素材需求 P0：RAG/chatbox workflow 截图；没有就用架构图。

---

## 14 Copilot+Skill Section Break

当前状态：保留。  
问题：OK。  
建议：标题可以更尖锐：不是 AI 写代码，是交付复杂表达资产。  
素材需求：无。

---

## 15 Asset Wall

当前状态：必须保留，且要重点增强。  
问题：这是 Copilot+Skill 最重要 proof，但现在全是 placeholder。  
建议：优先补 6 张图：
1. PPT 截图
2. AutoStackSharing HTML 截图
3. AIPM 页面截图
4. V6 Script / Project State 截图
5. GitHub commit 截图
6. Skill.md 截图
是否合并：不合并。  
信息密度：视觉高、文字低。

---

## 16 Why PPT / HTML Matter

当前状态：保留。  
问题：这页可以更有说服力。  
建议：用对比版式：
- 低壁垒：写几行代码
- 高壁垒：高密度内容 + 审美判断 + 结构化表达 + 可交付资产
素材需求：可无。

---

## 17 Skill Pipeline

当前状态：保留但需要展开一点。  
问题：现在只有 pipeline 名称，观众不知道每个 Skill 做什么。  
建议：每个节点加一句功能：
PLO 管状态 / frontend-slides 管页面 / video pack 管视频 / writing-book 管沉淀 / dashboard 管可视化。  
是否合并：可与 16 合并吗？不建议。16 讲为什么重要，17 讲怎么做到。

---

## 18 Agent OS Section Break

当前状态：保留。  
问题：OK。  
建议：背景可用淡淡 agent network。

---

## 19 Agent Team

当前状态：需要重做视觉。  
问题：现在 flow 排版弱，没有“小团队”的感觉。  
建议：SAM 居中，Andrew/Rex/Lulu/Alex 环绕，右侧加职责短语。  
素材需求：可无；如果有头像/emoji 更好。

---

## 20 Mechanism Proof

当前状态：保留，需要素材。  
问题：这是把 Agent 从“拟人化”拉回“机制”的关键页。  
建议：左侧讲机制，右侧放文件树：SOUL / HEARTBEAT / memory / agent_tasks / PROJECT_STATE。  
素材需求 P0：Agent 文件树截图；可打码。

---

## 21 Dashboard / MAE / Feishu Proof

当前状态：保留并重点增强。  
问题：这是 Agent OS proof 的高价值页，但全 placeholder。  
建议：改成 1 大 2 小：Dashboard 大图，MAE 架构和 Feishu 多 bot 小图。  
素材需求 P0：Dashboard 截图、MAE 架构图、飞书多 bot 截图。

---

## 22 So What / 三层系统转场

当前状态：保留。  
问题：这页承担从肌肉到方法的转折，不能弱。  
建议：做三层堆叠图：底层 n8n，中层 Skills，上层 Agent OS，Human judgment 贯穿。  
素材需求：无。

---

## 23 Three Layers Overview

当前状态：可能和 22 有重复。  
建议：可以合并进 22，或者 23 改成“章节地图”。  
推荐：压缩/合并。  
原因：22 已经说明三层系统；23 如果只是重复三张卡，会拖节奏。  
处理：22 做转场 + 地图；删除或弱化 23。

---

## 24 n8n Concept + Feynman

当前状态：保留。  
问题：内容方向对，但版式要更课程化。  
建议：左专业概念，右费曼解释，底部金句。  
素材需求：可无。

---

## 25 n8n Setup + Pitfalls + Tips

当前状态：保留，需要信息更具体。  
问题：方法页要够干货。  
建议：加“最小闭环具体例子”：Overdue reminder。  
需要补信息：n8n credential / naming / failure path 的真实踩坑例子。  
素材需求：workflow JSON / n8n 截图。

---

## 26 Skills Concept + Feynman

当前状态：保留。  
问题：OK，但可加 Prompt vs Skill 对比。  
建议：左边 Prompt，右边 Skill / SOP / Playbook。  
素材需求：可无。

---

## 27 Skills Setup + Pitfalls + Tips

当前状态：保留，需要具体化。  
问题：现在 Skill list 有，但没有 Skill anatomy。  
建议：展示一个 Skill.md 解剖：适用场景、输入、步骤、输出、验收、反例。  
素材需求 P0：一个真实 Skill.md 截图或 mock。

---

## 28 Agent OS Concept + Feynman

当前状态：保留。  
问题：OK，但“不是多开聊天窗口”可以视觉化。  
建议：左 Chatbot chaos，右 Agent OS team operating system。  
素材需求：无。

---

## 29 Agent OS Setup + Pitfalls + Tips

当前状态：保留，需要具体化。  
问题：方法页非常重要，应更像 blueprint。  
建议：展示最小 Agent OS：主脑 + 一个专业 Agent + memory + task ledger + dashboard。  
素材需求：Agent 文件树 / dashboard。

---

## 30 My Learning Path

当前状态：保留。  
问题：内容简单，适合短页。  
建议：与 31 做成双页对照，不合并。  
原因：用户明确要讲顺序学习与逆序搭建。

---

## 31 Recommended Build Path

当前状态：保留。  
问题：要讲清为什么反过来。  
建议：加三句解释：
- 先有 Agent，学习链路变简单
- 再有 Skill，经验可复用
- 最后 n8n，把高频流程接进系统
素材需求：无。

---

## 32 Human Brain Tradeoff

当前状态：保留，重点页。  
问题：这是思想升维页，需要更有力量。  
建议：大字金句 + 两列 tradeoff：
AI 可以自动化：搜索、整理、输出、分析
人脑不可省略：判断、选择、品味、方向
素材需求：无。

---

## 33 AI Era

当前状态：保留。  
问题：OK，作为 big thought。  
建议：可加小字：模型越来越强，系统和判断成为差异。  
素材需求：无。

---

## 34 Three Reflections

当前状态：保留但可合并/压缩。  
问题：这页和 35 相关。  
建议：如果时间紧，34+35 可以合并为一个“AI 时代三个资产化方向”页。  
推荐：保留 34，35 更具体展示本次项目作为 proof。

---

## 35 This Sharing Itself Is Proof

当前状态：保留，需要增强。  
问题：这是很好的 meta proof，但现在只是 timeline。  
建议：加真实文件/commit：info collection → V6 script → deck-v6 → material checklist → GitHub commits。  
素材需求：GitHub commit 截图 / PROJECT_STATE 截图。

---

## 36 CER / PTR Proof

当前状态：保留但轻带。  
问题：必须控制不抢主线。  
建议：只讲“个人系统也能落到公司复杂项目”，不要展开 CER 细节太多。  
素材需求 P0：CER/PTR 图或 PPT 截图。

---

## 37 CER Working Method

当前状态：保留。  
问题：这页是对用户刚才 CER 决策的承接，放在分享中可作为 proof。  
建议：用 process lane：需求 → 架构开发包 → 分工 → 内部轻对齐 → 外部专家 work review → 内部锁版。  
是否合并：可与 36 合并吗？不建议。36 是 proof，37 是方法。  
素材需求：无或 CER planning doc screenshot。

---

## 38 Minimal Loop

当前状态：保留。  
问题：是 takeaway 的核心。  
建议：做成拍照页，不要太多文字。  
素材需求：无。

---

## 39 Resource Pack

当前状态：保留但需要更完整。  
问题：当前资源太少，未覆盖 V6 文稿中的 Skill 清单和外部文档。  
建议：分三组：
- Skills：PLO / frontend-slides / video / dashboard / reflection
- Agent：SAM + 专业 Agent + memory/task/dashboard
- Docs：n8n / Dify / MCP / AI Agents / AI coding workflow
素材需求：链接二维码可选。

---

## 40 Closing / Q&A

当前状态：保留。  
问题：OK。  
建议：加 Q&A prompt：
- 普通人从哪里开始？
- 多 Agent 会不会乱？
- 公司项目能不能这么做？
- n8n / Skill / Agent OS 先学哪个？
素材需求：无。

---

# 3. 压缩 / 合并建议

## 建议合并或压缩

1. **22 + 23 合并**
   - 22 做“从肌肉到方法”的转场，同时给三层地图。
   - 23 当前重复，可以删或改为章节导航。

2. **34 + 35 可视时间决定是否合并**
   - 如果 45min 内容过长，合并为“从项目到资产系统”。
   - 如果想强化思想，保留两页。

3. **30 + 31 不合并**
   - 虽然都是路径，但一个是真实经历，一个是建议路径，用户明确要讲这个反转。

4. **36 + 37 不合并**
   - 36 是 proof，37 是 CER 操作方法。合并会让 CER 抢主线或太挤。

---

# 4. 必须展开的页

这些页不能压缩：

- 08 n8n Proof
- 10 Workflow to AI Node
- 11–13 Evolution Bridge / RAG / MCP
- 15 Asset Wall
- 16 Why PPT / HTML Matter
- 20 Mechanism Proof
- 21 Dashboard / MAE / Feishu Proof
- 24–29 三层方法六页
- 32 Human Brain Tradeoff
- 35 This Sharing Itself Is Proof
- 38 Minimal Loop

---

# 5. 素材优先级

## P0：没有就会明显弱

1. n8n workflow UI 截图
2. Dashboard 页面截图
3. PPT 截图
4. AutoStackSharing HTML 截图
5. AIPM 高审美页面截图
6. Agent 文件树 / agent_tasks / PROJECT_STATE 截图
7. 一个真实 Skill.md 截图
8. CER/PTR 图或 PPT 截图

## P1：有了会明显增强

9. MCP docs 截图
10. Dify docs 截图
11. n8n docs 截图
12. GitHub commit / diff 截图
13. MAE 架构图
14. 飞书多 bot 截图

## P2：可后补

15. 视频 trailer 截图
16. Remotion timeline 截图
17. 资源二维码

---

# 6. 下一步执行建议

不要马上继续加内容。先做两个技术改版：

1. **重构 CSS 布局系统**
   - 引入固定 `.frame` 网格。
   - 统一 title area、body area、speaker cue。
   - 固定 proof / asset / method card 高度。

2. **按 review 调整页面结构**
   - 合并 22/23。
   - 增强 08/09/10/12/15/17/19/21/25/27/29/32/35/39。
   - 继续保留 placeholder，但每个 placeholder 必须说明需要什么素材。

完成后再进入第三步：逐个替换真实截图。
