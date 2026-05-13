# AutoStackSharing Project State

Updated: 2026-05-13 13:32 CST
Owner: Jianan
PLO mode: B2B Content / Influence + Asset Production
Current phase: framing → asset production prototype
Repo: https://github.com/Jianan-Huang0609/auto-stack-sharing

## 1. Audience / Stakeholders

| Stakeholder | Need / motivation | What they must believe after this | Risk / objection |
|---|---|---|---|
| Cross-department peers | Understand what AI can really do in daily work | AI is no longer only chat; it can become a working system | Too tool-heavy, not enough proof |
| Software expert | See system thinking and real technical leverage | Jianan understands AI orchestration, architecture, and verification, not just vibe coding | “AI wrote all code” may look unprofessional |
| Automation expert | See how n8n / workflows connect with Agent systems | Agent OS + Skills + n8n can scale automation beyond one-off workflows | n8n demo feels abstract if not animated/proven |
| Business colleagues | See practical business/work impact | AI can produce PPT, HTML, video, analysis, and management automation | Too technical / hard to adopt |

## 2. Goal / Success Criteria

- Primary goal: deliver a 45min practical sharing + 15min Q&A that shows the capability boundary of a personal AI operating system in real daily management and content/work production.
- Secondary goals: establish Jianan’s AI authority, create networking pull, attract software/automation collaborators.
- Non-goal: exhaustive tool tutorial or pure coding demo.
- Success signals: people remember the three-layer model, ask for setup details, and believe the outputs are real.
- Desired next action: interested peers ask to connect, copy the setup path, or collaborate on AI automation.

## 3. Core Hook / Positioning

- One-sentence hook: AI 的能力边界到底在哪？在日常管理中，自动化到底能做到什么程度？
- Core thesis: AI’s real leverage is not one tool, but a system: Agent OS + Skills + n8n.
- What this is NOT: not a tool list, not “look how many apps I use”, not “AI writes all my code”.
- Best opening question: 如果 AI 不只是聊天窗口，而是一套持续工作的操作系统，它到底能帮我们做到什么？
- Strongest contrast: from isolated tools → working operating system; from hand-written code → orchestrated, verified outputs.

## 4. Proof / Muscle

| Proof asset | Type | Why compelling | Status | Link / path |
|---|---|---|---|---|
| CER registration analysis PPT | PPT screenshot | Real work/business proof | ready, needs screenshot | `/Users/jianan/Documents/SSME/CER-Presentation/SSME_QT_CER_0509.pptx` |
| AutoStackSharing main deck | HTML deck | Existing polished courseware | ready | `index.html` |
| V7 video scenes | HTML video material | Video-first, animated-material starting point | prototype | `sharing-video-20260515/scenes/v7/PLAY.html` |
| AIPM / product HTML | HTML screenshot | Product / B2C / dashboard proof | needs selected screenshot | `../AIPM-Mystique/index.html` |
| n8n workflows | workflow screenshots | Automation muscle | needs screenshot or animated HTML recreation | `/Users/jianan/.openclaw/workspace/n8n-workflows/` |
| Dashboard | screenshot | Operations closed loop | blocked by auth / needs access | `http://127.0.0.1:8080/` |
| Feishu MAE / writing status | doc screenshot | Knowledge pipeline proof | needs screenshot | Feishu docs |
| TTS voice design | audio/waveform | Sensory proof | needs clip/waveform | TBD |

## 5. Framework / Mental Model

Main framework: three-layer AI automation system.

1. n8n scale layer: triggers, sync, workflows, Feishu push, Dashboard.
2. Skills layer: reusable capabilities, not one-off prompts.
3. Agent OS layer: memory, task ledger, roles, heartbeat, escalation.

Takeaway model: first show muscle, then explain system, then give adoption path.
Learning reversal appears after the three layers: Jianan learned n8n → Skills → Agent OS, but the recommended path is Agent OS → Skills → n8n.

## 6. Output Format / Asset Plan

| Output | Purpose | Audience state | Status | Link / path |
|---|---|---|---|---|
| Main deck | calm reading / presentation | sit down and understand | active | `index.html` |
| Draft framework | script material source | planning / editing | active | `draft-sharing-framework-20260512.md` |
| Video scenes V7 | attention / conversion / motion material | quick visual impact | prototype | `sharing-video-20260515/scenes/v7/PLAY.html` |
| Real screenshots | proof | belief building | pending | TBD |
| Final video | short conversion asset | “what should I look at?” | prototype started | `sharing-video-20260515/remotion/out/n8n-pipeline-prototype.mp4` |
| Remotion n8n pipeline prototype | dynamic automation proof | motion-first video asset | rendered v1 | `sharing-video-20260515/remotion/out/n8n-pipeline-frame.png`, `sharing-video-20260515/remotion/out/n8n-pipeline-prototype.mp4` |

## 7. Open Questions / Grill Log

| Question | Answer | Decision made? | Follow-up |
|---|---|---|---|
| Should learning reversal be the hook? | No. It is important but not opening hook. | yes | Put it after muscle + system reveal |
| Should HTML works all be shown? | No. Select a few strong examples. | yes | Choose 3–4 screenshots only |
| Should video scenes be static slide-like? | No. They need motion/recording/conversion feeling. | yes | Build dynamic n8n pipeline example |
| How to discuss code ratio decline safely? | Frame as work moving upward to orchestration/spec/verification, not “AI writes all code”. | yes | Use careful wording in script |

## 8. Current Phase Gate

- Current phase: content state locked enough for asset iteration.
- Entry condition met: audience, goal, proof themes, three-layer framework are clear.
- Exit condition: real proof screenshots + one dynamic video pipeline prototype are inserted.
- Completed: one Remotion dynamic n8n pipeline prototype rendered as preview PNG + MP4.
- Blockers: need real screenshots from PPT/n8n/Dashboard/Feishu/TTS.
- Next gate: replace placeholder pipeline cards with real screenshots and extend the 14s prototype into the full sharing sequence.
- Must not change without owner confirmation: main hook, visual style baseline, repo as source of truth.

## 9. Scale Evaluation

| Dimension | Score 1-5 | Evidence | Problem / drift | Fix |
|---|---:|---|---|---|
| State retention | 3 | Important context captured in draft, but came late | PLO questions stayed in chat too long | Use PROJECT_STATE from start |
| Grill question hit-rate | 3 | Audience/goals emerged after several rounds | Questions not tied to state table | Grill answers must update Project State |
| Phase discipline | 2 | HTML/video execution distracted from framing | Jumped to V5/V6 too early | Gate execution behind current phase |
| Asset-source consistency | 3 | Corrected to repo source of truth | Temporary SAM state caused confusion | Assets must live in repo |
| User correction frequency | 2 | Multiple corrections on color/video purpose | Visual/video assumptions too early | Prototype smaller, ask before broad generation |
| Reuse potential | 4 | Project State template can generalize | Needs global PLO adoption | Added to PLO template |

## 10. Change Log

| Time | Change | Reason | Evidence |
|---|---|---|---|
| 2026-05-12 21:30 | Main deck typography increased; video entry added | Text was too small; video needed entry | `index.html` |
| 2026-05-12 21:30 | V7 video-first scenes created | V6 was readable but not eye-catching as video | `sharing-video-20260515/scenes/v7/` |
| 2026-05-12 21:36 | Project State added | Need scale evaluation and PLO state retention | `PROJECT_STATE.md` |

| 2026-05-13 07:20 | Remotion n8n pipeline prototype rendered | Jianan approved video execution; Remotion is the chosen animation route | `src/N8nPipelinePrototype.tsx`, `sharing-video-20260515/remotion/out/` |

| 2026-05-13 07:36 | Reframed speech/video script to muscle-first structure | Jianan rejected concept-first V2; new structure starts with n8n → Copilot+Skill → Agent, then three-layer landing, learning order, thinking decomposition, resources | `sharing-video-20260515/SPEECH_SCRIPT_V3_20260513.md`, `sharing-video-20260515/VIDEO_SCRIPT_V3_20260513.md` |

| 2026-05-13 07:48 | V4 script reframed around personal AI system first, CER/PTR second | Jianan wanted to first present the personal system and only briefly mention CER company project | `sharing-video-20260515/SPEECH_SCRIPT_V4_20260513.md`, `sharing-video-20260515/VIDEO_SCRIPT_V4_20260513.md` |

| 2026-05-13 07:55 | Added run-of-show page structure for V4 sharing | Converts V4 speech script into 19 presentation pages with titles, bullets, speaker notes, and visual direction | `sharing-video-20260515/PRESENTATION_RUN_OF_SHOW_V1_20260513.md` |

| 2026-05-13 08:00 | Rebuilt HTML deck around V4 personal AI system story | Root `index.html` and `sharing-video-20260515/deck-v4/index.html` now follow V4: personal AI system first, three muscles, three-layer landing, learning path, thinking decomposition, CER/PTR light proof, resources takeaway | `index.html`, `sharing-video-20260515/deck-v4/index.html` |

| 2026-05-13 08:18 | Added V8 video HTML base from V4 story | Video storyline locked as 2m-ish trailer: muscle → system → playbooks → learning/thinking → CER light proof → resources; based on old scenes/v7 HTML base but updated to personal AI system narrative | `sharing-video-20260515/scenes/v8/PLAY.html`, `sharing-video-20260515/scenes/v8/scene-*.html` |

| 2026-05-13 08:24 | Repositioned video as pre-talk muscle trailer | Jianan clarified video HTML should be pure muscle display with a reversal and hook, played 1–2 min before the talk, not a full explainer; formal talk handles method breakdown | `sharing-video-20260515/VIDEO_OPENING_MUSCLE_CONCEPT_V1_20260513.md` |

| 2026-05-13 09:20 | Added information collection state to stop repeated questioning | Jianan pointed out prior answers must be persisted under PLO-style project state; added locked answers, remaining true unknowns, concept gaps, and next execution order | `sharing-video-20260515/SHARING_INFO_COLLECTION_V1_20260513.md` |

| 2026-05-13 09:28 | Corrected sharing state from Discord SAM source | Duration/purpose/visual preferences corrected from Discord SAM 2026-05-12: 45min dry goods + 15min Q&A; cross-functional business/software/automation audience; goal is cognition + capability display + personal brand + collaborator pull; visual direction is colorful system feel, not white/beige | `sharing-video-20260515/SHARING_INFO_COLLECTION_V1_20260513.md` |

| 2026-05-13 09:29 | Split visual preference by HTML object | Jianan clarified video HTML can use the previous orange tone; presentation/front-end HTML should return to the original beige background with orange + teal baseline | `sharing-video-20260515/SHARING_INFO_COLLECTION_V1_20260513.md` |

| 2026-05-13 10:22 | Drafted full V5 speech script from locked state | V5 is a 45min+Q&A MD script with professional concepts, Feynman explanations, muscle proof, three-layer landing plan, learning reversal, AI-era thinking decomposition, CER/PTR light proof, resources, Q&A, and HTML mapping based on original 0506 beige+orange+teal source | `sharing-video-20260515/SPEECH_SCRIPT_V5_20260513.md` |

| 2026-05-13 10:45 | Added V6 refinements: opening interaction, RAG/MCP bridge, MAE/Dashboard/Feishu proof, human-brain tradeoff | Jianan requested opening poll/questions, n8n/RAG/chatbox/context engineering/MCP/model moment bridge, more Agent proof (Dashboard, MAE, Feishu multi-bot), and the point that Agent makes learning easier but human judgment remains essential | `sharing-video-20260515/SPEECH_SCRIPT_V6_20260513.md` |

| 2026-05-13 10:50 | Locked V6 and created material/HTML next-step checklist | V6 script is temporarily final; next step is deck-v6 from original 0506 source; material list covers interaction, n8n, RAG/MCP docs, Copilot+Skill PPT/HTML, Agent/MAE/Dashboard/Feishu, thinking, CER proof, resources | `sharing-video-20260515/V6_MATERIALS_AND_HTML_NEXT_STEPS_20260513.md` |

| 2026-05-13 13:32 | Added AIPM UI reference for V6 deck | Jianan asked to reference AI PM page design for attractive image/UI treatment. Design decision: keep 0506 beige/orange/teal deck identity while borrowing AIPM proof-card, asset-wall, split-proof, rounded shadow image containers, and productized knowledge-page feel | `sharing-video-20260515/AIPM_UI_REFERENCE_FOR_DECK_V6_20260513.md` |
