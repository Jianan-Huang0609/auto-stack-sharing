# Asset Capture Report — 2026-05-13

目标：根据 Jianan 指示，自动寻找本地可用素材并生成截图，先替换 deck 中能替换的 placeholder。  
Deck: `sharing-video-20260515/deck-v6/index.html`  
Assets: `sharing-video-20260515/deck-v6/assets/`

---

## 已生成 / 已截取素材

### HTML / 页面类

- `assets/autostack-deck-v6-cover.png`  
  来源：`sharing-video-20260515/deck-v6/index.html`

- `assets/autostack-0506-cover.png`  
  来源：`0506/index.html`

- `assets/aipm-mystique-home.png`  
  来源：本地启动 `AIPM-Mystique` Vite 页面截图

- `assets/cer-tech-frame.png`  
  来源：`/Users/jianan/.openclaw/workspace/repos/CER_Tech-Frame/index.html`

### PPT 类

- `assets/cer-ppt-main.png`  
  来源：`/Users/jianan/Documents/SSME/CER-Presentation/SSME_QT_CER_0509.pptx`

- `assets/cer-ppt-selected.png`  
  来源：`/Users/jianan/Documents/SSME/CER-Presentation/0509/0509_selected_slides_1_3_4_6_10_editable.pptx`

### Dashboard

- `assets/dashboard-home.png`  
  来源：`http://127.0.0.1:8080/` 本地 Dashboard（使用本机已有 Basic Auth 环境变量截图；未在报告中暴露凭据）

### n8n

- `assets/n8n-workflows-preview.html`
- `assets/n8n-workflows-preview.png`

来源：本地 workflow JSON 渲染：
- `/Users/jianan/.openclaw/workspace/n8n-workflows/01-overdue-reminder.json`
- `/Users/jianan/.openclaw/workspace/n8n-workflows/02-eod-feishu.json`
- `/Users/jianan/.openclaw/workspace/n8n-workflows/03-dashboard-sync.json`
- `/Users/jianan/.openclaw/workspace/n8n-workflows/06-sharing-tracker.json`

说明：n8n CLI 本地存在，但真实 n8n UI 可能涉及登录/实例状态。为避免阻塞，先用本地 JSON 生成 workflow proof preview，可后续再替换真实 n8n UI 截图。

### 本地证据板

- `assets/local-proof-board.html`
- `assets/local-proof-board.png`

内容：
- GitHub commit trail
- V6 script / project state snippet
- Skill.md examples
- Agent file tree

---

## 已替换到 deck 的素材

- Page 06 n8n proof：替换为 `assets/n8n-workflows-preview.png`
- Page 13 asset wall：替换 PPT / HTML Deck / AIPM / Script / Commits / Skill.md 六个截图位
- Page 18 Agent mechanism：替换 Agent file tree proof 位
- Page 19 Dashboard / MAE：替换 Dashboard 与 MAE proof 位
- Page 33 CER proof：替换为 CER PPT 截图

---

## 仍需 Jianan 手动补的内容

1. Page 02：开场问卷二维码 / 飞书问卷链接
2. Page 11：真实 RAG / Chatbox n8n workflow 截图（如果要 demo）
3. Page 19：飞书多 bot 群聊截图（敏感内容需打码）
4. Page 36：四个资源链接 / 二维码
   - Skill 清单
   - Agent setup 示例
   - 学习资料合集
   - Starter repo / dashboard

---

## 注意

- PPT 截图当前使用 macOS QuickLook 生成的是封面/预览图，不是逐页精准截图。若需要指定某几页，后续可以用 Keynote/PowerPoint 导出或人工截图替换。
- n8n 当前用 JSON 结构渲染替代真实 UI 截图，优点是可控、干净；如果今晚能登录 n8n，本图可替换为真实 UI。
