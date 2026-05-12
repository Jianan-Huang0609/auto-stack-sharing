# 视频剧本 V2 — 完整分享视频结构

目标：不是 PPT 录屏，不是静态页面阅读，而是「演讲开场片 / explainer video」。  
建议时长：90–120 秒短版；后续可扩展成 3–5 分钟完整版。  
画面原则：一个场景一个焦点；每 3–5 秒有状态变化；真实截图 + Remotion 动效混合。  
当前已完成场景：Scene 06 n8n Pipeline Remotion Prototype v1。

---

## 总体叙事线

从“AI 是聊天窗口” → “AI 是持续工作的操作系统” → “三层结构” → “真实工作 proof” → “自动化闭环” → “这个视频也是系统生产的”。

---

## Scene 01 — Hook：AI 不只是聊天窗口（0:00–0:10）

旁白：
如果 AI 不只是一个聊天窗口，而是一套可以持续工作的操作系统，它能做到什么？

画面：
黑/浅蓝渐变背景。一个 Chatbot 窗口出现，回答完一句话后淡出。随后画面扩展成系统界面：Memory、Tasks、Agents、Workflow 四个模块浮现。

屏幕文字：
From Chatbot → AI Operating System

素材：Remotion 纯动效即可。

---

## Scene 02 — Problem：真实工作不是一次问答（0:10–0:22）

旁白：
真实工作里，难的不是回答一个问题，而是信息不丢、任务不断、结果可验证。

画面：
会议记录、白板照片、PPT、代码、飞书文档、Dashboard 卡片散落。它们一开始混乱漂浮，随后被吸入一条 timeline。

屏幕文字：
Meeting → Plan → Task → Verify → Reuse

素材：
先用 mock 卡片；后续替换真实白板、CER PPT、Feishu、Dashboard 截图。

---

## Scene 03 — System Reveal：三层结构（0:22–0:36）

旁白：
我把它拆成三层：Agent OS 负责连续协作，Skills 负责能力复用，n8n 负责自动化闭环。

画面：
三层堆叠架构从下到上出现：
底层 n8n / Airtable / Dashboard
中层 Skills / PLO
顶层 Agent OS / SAM / Andrew / Rex / Lulu / Alex

屏幕文字：
Agent OS × Skills × n8n

素材：Remotion 架构动效。

---

## Scene 04 — Agent OS：多 Agent 分工（0:36–0:50）

旁白：
它不是一个万能助手，而是一组有分工、有记忆、有升级机制的 Agent。

画面：
SAM 居中，Andrew / Rex / Lulu / Alex 环绕。任务账本、Memory、Heartbeat 三条轨道围绕转动。一个任务从用户输入进入 SAM，再被分发到不同 Agent。

屏幕文字：
Roles / Memory / Task Ledger / Heartbeat

素材：
可用 agent workspace、task ledger 片段做背景蒙版。

---

## Scene 05 — Skills / PLO：任务先路由，再执行（0:50–1:08）

旁白：
PLO 会先判断任务类型：企业自动化、内容影响力、用户产品，还是个人工具。不同任务，走不同路径。

画面：
一个输入卡片：“准备内部 AI 分享”。进入 PLO 路由器，四条路径展开：
B2B Enterprise / B2B Content / ToC / Personal。
B2B Content 被点亮，输出：演讲结构、素材清单、视频脚本、动效原型。

屏幕文字：
Route before execution

素材：Remotion 动效 + PLO 简化图。

---

## Scene 06 — Proof Case：CER/PTR 真实工作（1:08–1:26）

旁白：
在 CER/PTR 项目里，这套系统把复杂注册流程拆成两层：一层是两周任务推进，一层是可复用能力包。

画面：
左右分屏。
左侧：纵向 timeline：用户需求、开发架构、Transfer、ROI。
右侧：横向 capability stack：Input/Data、Workflow、AI Function、Evals、Review、Transfer。
中间出现 mapping 线。

屏幕文字：
Project Tasks ≠ Product Architecture

素材：
CER PPT 截图、dual-layer view SVG/HTML。

---

## Scene 07 — Automation Scene：n8n 闭环（1:26–1:44）

旁白：
最后，n8n 把 AI 的判断接入真实工作流：读取状态、判断下一步、通知人、更新 Dashboard。

画面：
使用已完成 Remotion 场景：
Trigger → Read Airtable → Code Decision → Feishu Push → Dashboard。
节点依次点亮，数据包移动，最后 Loop Complete。

屏幕文字：
Automation loop complete

素材：
已完成：`sharing-video-20260515/remotion/out/n8n-pipeline-prototype.mp4`
后续替换为真实 n8n / Airtable / Dashboard 截图贴图版本。

---

## Scene 08 — Evolution Loop：系统会复盘，但不失控（1:44–1:58）

旁白：
系统还会记录哪些 Skill 有用、哪些问题重复出现；但真正更新能力之前，仍然需要人确认。

画面：
Observe → Detect Pattern → Dry-run Patch → Human Confirm → Skill Update 循环。Human Confirm 位置高亮。

屏幕文字：
Evolve with human control

素材：Remotion 动效。

---

## Scene 09 — Meta Reveal：这个视频也是系统产物（1:58–2:12）

旁白：
这个视频本身，也是这套系统生产出来的：主题、结构、脚本、场景、动画原型，都由它协助完成。

画面：
文件路径和产物快速闪现：PROJECT_STATE、SPEECH_SCRIPT、VIDEO_SCRIPT、Remotion composition、rendered mp4。最后汇聚成最终视频画面。

屏幕文字：
This video was planned by the system it explains.

素材：本 repo 文件树截图、Remotion 输出。

---

## Scene 10 — Closing：核心 takeaway（2:12–2:25）

旁白：
AI 的边界，不只取决于模型有多强，也取决于你有没有把它组织成系统。

画面：
三层结构再次出现，收束成一句话。

屏幕文字：
不是更多工具，而是一套持续工作的 AI OS。

结束画面：
Agent OS + Skills + Workflow + Human Judgment

---

## 制作优先级

### v2 必做
1. 把 Scene 01 / 03 / 05 / 07 做成 Remotion 主线。
2. Scene 07 复用已完成 n8n pipeline prototype。
3. 插入 3–4 个真实 proof 截图：CER PPT、PLO/dual-layer、n8n workflow、Dashboard/Feishu。

### v3 增强
1. 增加真实屏幕录制质感：鼠标、窗口、节点选中、状态变化。
2. 加中文配音和字幕。
3. 把 2 分钟短版扩展成演讲前 30 秒开场片 + 完整 5 分钟解释视频。
