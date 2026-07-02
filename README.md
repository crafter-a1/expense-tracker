# 💸 Expense Tracker — Claude GitHub Bot Demo

A small **React + Vite** expense tracker used to demonstrate the
[Claude GitHub bot](https://docs.anthropic.com/en/docs/claude-code/github-actions)
picking up issues and opening pull requests automatically.

The app **intentionally ships with bugs and missing features**. You file them as
GitHub issues (ready-made in [`issues/`](./issues)), and Claude fixes each one on
its own branch and opens a PR for you to review and merge.

---

## 1. Run the app locally

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build
npm test         # run the Vitest suite
npm run lint     # lint
```

## 2. Push this project to GitHub

```bash
git init
git add .
git commit -m "Initial commit: expense tracker demo"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

## 3. Wire up the Claude bot (one-time)

1. **Install the Claude GitHub App** on the repo:
   <https://github.com/apps/claude> → *Install* → select this repository.
   (Or run `/install-github-app` from the Claude Code CLI.)
2. **Add your API key** as a repository secret:
   Repo → *Settings* → *Secrets and variables* → *Actions* → *New repository secret*
   - Name: `ANTHROPIC_API_KEY`
   - Value: your key from <https://console.anthropic.com>
3. The workflow is already here: [`.github/workflows/claude.yml`](./.github/workflows/claude.yml).
   It runs whenever an issue or comment mentions `@claude`.

> **Permissions:** the workflow requests `contents: write`, `pull-requests: write`,
> and `issues: write` so the bot can push a branch and open a PR. Make sure
> *Settings → Actions → General → Workflow permissions* allows read/write.

## 4. Feed it the issues (one at a time)

Open [`issues/`](./issues) and follow [`issues/README.md`](./issues/README.md):
for each file, create a GitHub issue using its heading as the title and its body
(including the `@claude` line) as the description. Submit, watch the **Actions**
tab, review the PR Claude opens, and merge it.

Suggested order: work top-to-bottom. Issues **1–7** are genuine bugs baked into
the source; **8–20** are enhancements, features, tests, and polish.

---

## Project structure

```
.
├─ .github/workflows/claude.yml   # Claude bot trigger
├─ index.html
├─ vite.config.js                 # Vite + Vitest config
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx                     # state, filtering, delete
│  ├─ index.css
│  ├─ components/
│  │  ├─ ExpenseForm.jsx
│  │  ├─ ExpenseList.jsx
│  │  ├─ ExpenseItem.jsx
│  │  ├─ FilterBar.jsx
│  │  └─ Summary.jsx
│  ├─ utils/
│  │  ├─ format.js                # currency/date helpers + CATEGORIES
│  │  └─ storage.js               # localStorage load/save
│  └─ test/setup.js
└─ issues/                        # 20 ready-to-paste demo issues
```

## Notes

- This is a demo. The bugs are deliberate — don't "pre-fix" them or the issues
  will have nothing to resolve.
- API usage through the bot is billed to your Anthropic account.
- You can also just comment `@claude <request>` on any issue or PR to have the
  bot help beyond these 20 scripted tasks.
