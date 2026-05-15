# Remote Repo Pitfalls Review — 2026-05-15

## 结论
这次 sharing deck 最大的工程坑不是 HTML/CSS，而是 **多会话、多模型、多来源修改下的仓库状态失真**：本地、远端 GitHub、Vercel 线上版三者一度不一致，导致误删、覆盖、冲突、临时文件误提交。

---

## P0 级远端仓库问题

### 1. `git add deck-v6/` 误把视觉检查产物提交进远端

证据：commit `18dfd98` 一次提交了 91 个文件，包括：
- `deck-v6/visual-check/`
- `deck-v6/visual-check-current/`
- `deck-v6/check-p5.html`
- `deck-v6/check-p6.html`
- `deck-v6/index.html.bak`

这些属于本地验证产物，不应该进入远端主仓库。

影响：
- repo 噪音变大
- Vercel 部署包变脏
- 后续 diff/review 变困难
- 容易误以为 deck 有 39 页 visual-check，但真实 deck 是 33 页

建议：
- 从 Git 追踪中删除这些文件，但保留本地可重新生成能力
- `.gitignore` 加入：
  - `sharing-video-20260515/deck-v6/visual-check*/`
  - `sharing-video-20260515/deck-v6/check-p*.html`
  - `sharing-video-20260515/deck-v6/*.bak`
  - `sharing-video-20260515/deck-v6/tmp*/`

---

### 2. 把 Vercel 线上 HTML 当作 ground truth 有风险

这次出现过：本地文件与 Vercel 页面不一致，于是直接 `curl` 线上 HTML 覆盖本地，再修改。

这个策略当时救急有效，但长期有风险：
- Vercel 是部署产物，不是源码真相
- 线上 HTML 可能是旧部署、缓存、或被 build step 处理过
- 直接覆盖本地会丢失未部署改动

更好的策略：
1. `git fetch origin && git status`
2. 确认本地 branch 与 `origin/master` 是否一致
3. 若 Vercel 与 origin 不一致：先判断是部署延迟、缓存，还是 remote 不是当前分支
4. 只有在 emergency 下才把 Vercel HTML 当临时恢复源，并立即 commit 标注原因

原则：
- **GitHub remote 是源码基准**
- **Vercel 是部署验证基准**
- 二者不一致时，不要默认相信其中任一方，先定位差异来源

---

### 3. push 被 SIGKILL 不等于 push 失败

多次出现 exec 超时/SIGKILL，但 commit 或 push 实际已经部分完成。

坑点：
- 工具层显示 `SIGKILL`
- 但 GitHub remote 可能已经收到了提交
- 如果不查 `git log origin/master` / `git fetch`，容易重复操作或误判失败

标准验证：
```bash
git fetch origin
git log --oneline -3 origin/master
git status --short
```

---

### 4. 远端 ahead 时直接 push 会被拒

出现过：
- 本地 commit 后 push rejected
- 原因：远端已有本地没有的提交
- 后续 rebase 冲突

标准流程：
```bash
git fetch origin
git status -sb
# 若 behind：
git pull --rebase
# 再修改 / commit / push
```

不要在不确认状态时直接改文件并 push。

---

### 5. 多 agent / 多 session 同时改同一个 `index.html`，冲突成本高

HTML deck 是单文件大页面，所有页面都在一个 `index.html` 里。多人/多 session 同时改时：
- 很容易冲突
- diff 很难读
- 一处替换失败可能误伤相邻 slide

建议：
- 长期可拆成：`slides/01.html`、`slides/02.html` + build script
- 短期至少每次修改前锁定：页码 + 标题 + section 起止位置
- 每次只改一页或一类逻辑，不做混合修改

---

## 当前 repo 状态观察

### 已跟踪的本地验证产物
当前远端已追踪约 89 个 visual-check/check/bak 文件。

建议下一个 cleanup commit：
```bash
git rm -r --cached sharing-video-20260515/deck-v6/visual-check \
  sharing-video-20260515/deck-v6/visual-check-current \
  sharing-video-20260515/deck-v6/check-p5.html \
  sharing-video-20260515/deck-v6/check-p6.html \
  sharing-video-20260515/deck-v6/index.html.bak
```
然后更新 `.gitignore`。

### 当前 untracked 文件
当前工作区还有：
- `.superpowers/`
- `public/`
- `sharing-video-20260515/GAP_ANALYSIS_P1P37_20260514.md`
- `sharing-video-20260515/remotion/out/auto-stack-15s-natural.mp4`

建议先不要乱加。逐个判断是否属于项目源码/交付物。

---

## 对两份设计沉淀文档的 review

### 亮点
- “HTML Deck = 视觉证据层 + 结构引导层 + 带走物质层”非常准确
- “图片不是为了好看，是为了证明”是本项目最重要的洞察
- cover / contain / scroll 三段位可以直接沉淀进 frontend-slides Skill
- “排序是认知心理学问题”是 P03 tab 顺序迭代后的关键经验
- “AI 是快速原型工具，人是最终设计决策者”总结准确

### 需要修正的地方
1. “当你犹豫一个元素要不要保留时，删掉”有点过强。更准确是：
   - 重复/无证据/无叙事功能 → 删
   - 用户明确提过/承担 callback/承担证据链 → 先问再删

2. “每次改之前先 curl Vercel 线上版作为 ground truth”需要改成：
   - 先以 GitHub remote 为源码基准
   - 再用 Vercel 做部署验证
   - 二者不一致时先查原因，不直接覆盖

3. “小步提交，频繁 push”需要补一句：
   - 小步提交可以，但不要 `git add directory/`，必须用精确文件路径

4. 图片验证产物应该区分：
   - 可提交：最终截图、对外证据图、deck assets
   - 不提交：visual-check 临时页、contact sheets、check html、bak

---

## 建议形成的永久开发规程

### 修改前
```bash
git fetch origin
git status -sb
git log --oneline -3 origin/master
```

### 修改中
- 只改目标页
- 不用 `git add .`
- 不用 `git add deck-v6/`
- 临时文件全部放 `/tmp` 或 `.local/`

### 修改后
```bash
git diff --stat
git diff -- sharing-video-20260515/deck-v6/index.html
# 视觉验证
# commit 精确文件
git add sharing-video-20260515/deck-v6/index.html sharing-video-20260515/deck-v6/assets/xxx.png
git commit -m "fix(Pxx): ..."
git push origin master
```

### push 后
```bash
git fetch origin
git log --oneline -1 origin/master
curl -I https://auto-stack-sharing.vercel.app/sharing-video-20260515/deck-v6/index.html
```

---

## 下一步建议

P0：做一个 cleanup commit，删除远端已追踪的 visual-check/check/bak 文件并更新 `.gitignore`。

P1：把 `DESIGN_PRINCIPLES_HTML_DECK.md` 中关于 ground truth、删除策略、提交策略三处措辞修正。

P2：把 P03 gallery 的 `renderImage(mode)` 抽象成小函数，避免后续每次 tab 改动都手写 inline HTML。
