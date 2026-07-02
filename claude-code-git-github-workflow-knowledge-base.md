# Claude Code: Git & GitHub Workflow — Complete Knowledge Base

> Consolidated from: (1) Anthropic's official "Claude Code GitHub Actions" documentation, and (2) the "Claude Code for GitHub Tasks & Activities" training deck. Externalized guidance on automation use cases has been added at the end.

---

## 1. Overview: How Claude Code Connects to GitHub

Claude Code integrates with Git/GitHub at **three levels**:

| Level | Where it runs | What it feels like |
|---|---|---|
| **1. Terminal (Local)** | Your machine | You talk to Claude in the terminal; it runs `git`/`gh` commands for you — like pair programming with someone who never forgets Git syntax |
| **2. GitHub Actions (Remote)** | Inside your GitHub repo, as a bot | Tag `@claude` in a PR or issue comment; it responds by reviewing code, fixing bugs, or implementing features |
| **3. Headless / Scripting (Automated)** | CI/CD pipelines, build scripts | Use the `-p` (`--print`) flag to run Claude without an interactive session — perfect for automation and batch processing |

Claude Code GitHub Actions is built on top of the **Claude Agent SDK**, which also lets you build custom automation workflows beyond GitHub Actions.

---

## 2. Git Operations from the Terminal

When you open Claude Code inside a project folder, you can issue Git instructions in plain English instead of memorizing syntax. Claude translates your intent into the actual `git` and `gh` commands and runs them for you.

### Example natural-language instructions
- "show me a summary of all uncommitted changes"
- "commit and push the changes with a descriptive message"
- "create a feature branch called ui-improvements and switch to it"
- "push this branch and create a PR with a summary of changes"
- "review the pull request and merge into main branch"
- "switch back to main branch and delete the ui-improvements branch both locally and remotely as I am done with the UI changes"
- "pls look at the issue 2 reported and fix the problem"
- "commit and push this fix, then close issue 2"

You never need to remember exact Git/GitHub CLI syntax — Claude handles the mechanics behind the scenes.

### How Claude Creates a Pull Request (behind the scenes)
When you say "create a PR for my changes," Claude follows a structured 4-step process rather than blindly running commands:

1. **Gather Context** — Runs `git status`, `git diff`, `git log`, and `git diff main...HEAD` all at once to understand what changed.
2. **Prepare the Branch** — Checks if you're on a feature branch, whether changes are committed, and whether the branch is pushed to the remote. It handles any of these automatically if not.
3. **Analyze Changes** — Internally reviews all commits since the branch diverged from `main`, determines whether the work is a feature, bug fix, or refactor, and drafts a concise PR summary focused on *why* the changes were made (not just *what* changed).
4. **Create the PR** — Uses `gh pr create` to open the PR with a well-written title, description, and test plan.

---

## 3. CLAUDE.md — Teaching Claude Your Team's Rules

`CLAUDE.md` is a special file placed at your project root that acts as **Claude's project memory**. It loads automatically every time a session starts.

### What to put in CLAUDE.md
| Section | Purpose |
|---|---|
| **Repository structure** | Quick summary of important folders and their purpose, so Claude knows where to look |
| **Git conventions** | Branching rules (e.g., `feature/description`), commit message format (e.g., Conventional Commits: `feat:`, `fix:`, `docs:`) |
| **Common commands** | How to run tests, linters, or build scripts in your project |
| **Coding standards** | Style guides and patterns your team follows |

When Claude creates commits, PRs, or reviews code, it reads this file and automatically follows your team's conventions — functionally like onboarding a new developer who reads the team handbook before writing any code.

---

## 4. The `commit-commands` Plugin

Automates common Git operations to reduce context switching and manual command execution. Instead of running multiple Git commands, you invoke a single slash command to handle an entire workflow.

**Install:** run `/plugin` and install the `commit-commands` plugin.

| Command | What it does |
|---|---|
| `/commit` | Reviews your changes, stages files, and creates a commit with a smart message |
| `/commit-push-pr` | Does everything — commits, pushes to a feature branch, and opens a PR in one step |
| `/clean_gone` | Removes local branches that were already deleted on the remote |

---

## 5. Git Worktrees — Running Parallel Claude Code Sessions

### Why worktrees are needed
When working on multiple tasks at once (e.g., building a new feature *and* fixing a production bug), running everything in the same folder can cause:
- File conflicts
- Mixed changes
- Confusion between branches

### What is a Git Worktree?
A worktree creates a **separate working folder** from the same repository. Each worktree:
- Has its own files
- Uses its own branch
- Shares the same Git history and remote repo

Think of it as multiple independent workspaces for the same project.

### How Claude uses worktrees
Use the `--worktree` (or `-w`) option. If you don't provide a name, Claude generates a random one.

```bash
claude --worktree feature-cache
```

**What happens:**
- A new folder is created
- A new branch is created automatically
- Claude starts inside that isolated workspace

### Running multiple sessions in parallel
```bash
claude --worktree feature-cache
claude --worktree bugfix-performance
```
Each session runs independently, with its own working directory and its own branch.

### Where worktrees live
- Stored inside your repository at: `<repo>/.claude/worktrees/<name>`
- Branch naming pattern: `worktree-<name>`

### Creating worktrees mid-session
You don't need to restart Claude — simply say:
- "Start a worktree"
- "Work in a worktree"

Claude will create one automatically and move your work into it.

---

## 6. GitHub Actions Integration — The `@claude` Bot

This is where Claude Code becomes a bot living inside your repository, able to:
- Answer questions about your code, architecture, and design decisions
- Review PRs and suggest improvements
- Implement simple fixes, refactoring, and even new features
- Work with GitHub issues — read them, implement solutions, create PRs
- Track progress with visual checkboxes that update in real time

**Trigger:** Someone mentions `@claude` in a PR comment or issue comment, and GitHub Actions picks it up and runs Claude.

### How the `@claude` trigger works (flow)
1. **Someone tags `@claude`** in a PR or issue comment — e.g., "@claude review this PR" or "@claude fix this bug."
2. **GitHub Actions wakes up** — the workflow file (`claude.yml`) detects the mention and starts a job.
3. **Claude reads the context** — it looks at two main sources: the entire codebase and the `CLAUDE.md` file, ensuring it follows your project's rules and standards.
4. **Claude does the work** — it might review code and leave comments, implement a fix and push commits, or create a new PR.
5. **Results appear on GitHub** — Claude's response shows as a comment, a code review, or a new PR — just like any other team member.

### Setting up the GitHub Action — Quick Start
1. Open Claude Code and run `/install-github-app`.
2. Follow the prompts — it installs the Claude GitHub App (from `github.com/apps/claude`) on your repo.
3. It creates a PR with a workflow file (`.github/workflows/claude.yml`). Before merging, add your `ANTHROPIC_API_KEY` as a GitHub Secret (Settings → Secrets → Actions).
4. Merge the PR. Done.

**Test it:** Go to any PR or issue and type `@claude review this PR` or `@claude fix this bug`.

**Reference docs:**
- https://code.claude.com/docs/en/github-actions
- https://code.claude.com/docs/en/code-review

> Note: automatic reviews posted on every PR *without* needing a trigger are handled by the separate **GitHub Code Review** feature.

### Quick setup details (from official docs)
Running `/install-github-app` in the Claude Code terminal installs the GitHub App and interactively walks you through adding workflows and the API key secret.
- In Claude Code v2.1.187+, you can choose "Skip for now" after the App installs to stop there and return later by re-running `/install-github-app`. Earlier versions proceed straight to workflow selection.
- **You must be a repository admin** to install the GitHub App and add secrets.
- The GitHub App requests **read & write** permissions for Contents, Issues, and Pull requests.
- This quickstart is only available for **direct Claude API** users. Bedrock/Vertex users need the manual cloud-provider setup (see §9).

### Manual setup (if `/install-github-app` fails or isn't preferred)
1. Install the Claude GitHub App: https://github.com/apps/claude
   - Required permissions: Contents (R/W), Issues (R/W), Pull requests (R/W)
2. Add `ANTHROPIC_API_KEY` to repository secrets.
3. Copy the workflow file from the `examples/claude.yml` directory into `.github/workflows/`.
4. Test by tagging `@claude` in an issue or PR comment.

---

## 7. Upgrading from Beta to v1.0 (GA)

v1.0 introduces breaking changes. Required updates:

| Change | Action |
|---|---|
| Action version | `@beta` → `@v1` |
| Mode config | Remove `mode: "tag"` / `mode: "agent"` (now auto-detected) |
| Prompt input | `direct_prompt` → `prompt` |
| CLI options | Move `max_turns`, `model`, `custom_instructions`, etc. into `claude_args` |

### Breaking Changes Reference Table

| Old Beta Input | New v1.0 Input |
|---|---|
| `mode` | Removed — auto-detected |
| `direct_prompt` | `prompt` |
| `override_prompt` | `prompt` with GitHub variables |
| `custom_instructions` | `claude_args: --append-system-prompt` |
| `max_turns` | `claude_args: --max-turns` |
| `model` | `claude_args: --model` |
| `allowed_tools` | `claude_args: --allowedTools` |
| `disallowed_tools` | `claude_args: --disallowedTools` |
| `claude_env` | settings JSON format |

### Before / After example

**Beta:**
```yaml
- uses: anthropics/claude-code-action@beta
  with:
    mode: "tag"
    direct_prompt: "Review this PR for security issues"
    anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
    custom_instructions: "Follow our coding standards"
    max_turns: "10"
    model: "claude-sonnet-5"
```

**GA (v1.0):**
```yaml
- uses: anthropics/claude-code-action@v1
  with:
    prompt: "Review this PR for security issues"
    anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
    claude_args: |
      --append-system-prompt "Follow our coding standards"
      --max-turns 10
      --model claude-sonnet-5
```

The action now **auto-detects** whether to run in interactive mode (responds to `@claude` mentions) or automation mode (runs immediately with a prompt) based on your configuration.

---

## 8. Example Workflows

### Basic — respond to `@claude` mentions
```yaml
name: Claude Code
on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]
jobs:
  claude:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          # Responds to @claude mentions in comments
```

### Using Skills in the prompt
- Skill in repo's `.claude/skills/`: run `actions/checkout` before the action step, then pass `/skill-name`.
- Skill packaged in a plugin: install via `plugin_marketplaces` + `plugins` inputs, then pass the namespaced `/plugin-name:skill-name`.

```yaml
name: Code Review
on:
  pull_request:
    types: [opened, synchronize]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          plugin_marketplaces: "https://github.com/anthropics/claude-code.git"
          plugins: "code-review@claude-code-plugins"
          prompt: "/code-review:code-review ${{ github.repository }}/pull/${{ github.event.pull_request.number }}"
```

### Custom automation with prompts (scheduled job)
```yaml
name: Daily Report
on:
  schedule:
    - cron: "0 9 * * *"
jobs:
  report:
    runs-on: ubuntu-latest
    steps:
      - uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          prompt: "Generate a summary of yesterday's commits and open issues"
          claude_args: "--model opus"
```

### Common `@claude` comment invocations
- `@claude implement this feature based on the issue description`
- `@claude how should I implement user authentication for this endpoint?`
- `@claude fix the TypeError in the user dashboard component`

Claude automatically analyzes the surrounding context (PR diff, issue thread, codebase) and responds appropriately.

---

## 9. Using with Amazon Bedrock & Google Vertex AI

For enterprise environments needing control over data residency and billing, Claude Code GitHub Actions can run on your own cloud infrastructure with the same functionality.

### Prerequisites

**Google Cloud Vertex AI:**
- GCP project with Vertex AI enabled
- Workload Identity Federation configured for GitHub Actions
- Service account with required permissions
- A GitHub App (recommended) or default `GITHUB_TOKEN`

**Amazon Bedrock:**
- AWS account with Bedrock enabled
- GitHub OIDC Identity Provider configured in AWS
- IAM role with Bedrock permissions
- A GitHub App (recommended) or default `GITHUB_TOKEN`

### Setup steps
1. **Create a custom GitHub App** (recommended for 3rd-party providers):
   - Go to https://github.com/settings/apps/new
   - Fill in name, homepage URL
   - Uncheck "Active" for Webhooks (not needed)
   - Repository permissions: Contents (R/W), Issues (R/W), Pull requests (R/W)
   - Create the app, generate & download a private key (.pem), note the App ID
   - Install the app to your repository (select specific repo)
   - Add secrets: `APP_PRIVATE_KEY` (.pem contents), `APP_ID`
   - Used with `actions/create-github-app-token` to generate tokens in workflows
   - *Alternative:* use the official Anthropic app (https://github.com/apps/claude) — no extra auth config needed, but only works for direct Claude API.
2. **Configure cloud provider authentication** (Bedrock or Vertex AI specifics).
3. **Add required secrets**:

   | Provider | Secrets |
   |---|---|
   | Claude API (Direct) | `ANTHROPIC_API_KEY`; optionally `APP_ID` + `APP_PRIVATE_KEY` |
   | Google Vertex AI | `GCP_WORKLOAD_IDENTITY_PROVIDER`, `GCP_SERVICE_ACCOUNT`; optionally `APP_ID` + `APP_PRIVATE_KEY` |
   | Amazon Bedrock | `AWS_ROLE_TO_ASSUME`; optionally `APP_ID` + `APP_PRIVATE_KEY` |

4. **Create workflow files** for your chosen provider (Bedrock or Vertex AI templates).

---

## 10. Troubleshooting

| Issue | Checks |
|---|---|
| Claude not responding to `@claude` | Verify GitHub App is installed correctly, workflows are enabled, API key is set in repo secrets, and the comment uses `@claude` (not `/claude`) |
| CI not running on Claude's commits | Use the GitHub App or custom app (not the default Actions user); check workflow triggers include necessary events; verify app permissions include CI triggers |
| Authentication errors | Confirm API key validity/permissions; for Bedrock/Vertex check credentials configuration and secret names |

---

## 11. Advanced Configuration

### Action parameters

| Parameter | Description | Required |
|---|---|---|
| `prompt` | Instructions for Claude (plain text or a skill name) | No* |
| `claude_args` | CLI arguments passed to Claude Code | No |
| `plugin_marketplaces` | Newline-separated list of plugin marketplace Git URLs | No |
| `plugins` | Newline-separated list of plugin names to install before execution | No |
| `anthropic_api_key` | Claude API key | Yes** |
| `github_token` | GitHub token for API access | No |
| `trigger_phrase` | Custom trigger phrase (default: `@claude`) | No |
| `use_bedrock` | Use Amazon Bedrock instead of Claude API | No |
| `use_vertex` | Use Google Vertex AI instead of Claude API | No |

\* Optional — when omitted for issue/PR comments, Claude responds to the trigger phrase.
\** Required for direct Claude API; not required for Bedrock/Vertex.

### Passing CLI arguments via `claude_args`
```yaml
claude_args: "--max-turns 5 --model claude-sonnet-5 --mcp-config /path/to/config.json"
```
Common arguments:
- `--max-turns` — maximum conversation turns (default: 10)
- `--model` — model to use (e.g., `claude-sonnet-5`)
- `--mcp-config` — path to MCP configuration
- `--allowedTools` (alias `--allowed-tools`) — comma-separated list of allowed tools
- `--debug` — enable debug output

### Alternative integration methods
- **Custom GitHub App** — for organizations needing branded usernames or custom auth flows; requires `contents`, `issues`, `pull requests` permissions and the `actions/create-github-app-token` action.
- **Manual GitHub Actions** — direct workflow configuration for maximum flexibility.
- **MCP Configuration** — dynamic loading of Model Context Protocol servers.

### Customizing Claude's behavior
Two mechanisms:
1. **CLAUDE.md** — coding standards, review criteria, and project-specific rules at repo root (see §3).
2. **Custom prompts** — the `prompt` input in the workflow file, for workflow-specific instructions.

---

## 12. Status Line — The Always-On Cockpit Dashboard

### The pain
Mid-session, three questions keep nagging:
- How much context have I burned through?
- How much has this session cost so far?
- What branch am I even on right now?

Answering any of these normally breaks flow — type a command, read the output, get back to work.

### The fix
A persistent strip at the bottom of Claude Code shows whatever you want, always visible, without lifting a finger — like a car dashboard (speed, fuel, RPM) but for your Claude Code session.

### How it works — JSON in, text out
1. Claude Code sends JSON to your script via stdin — model name, cost, context %, git directory, session ID, etc.
2. Your script reads it and formats what it cares about — using bash, Python, Node.js, PowerShell, or any language.
3. Your script prints text to stdout — Claude Code displays it at the bottom of the screen.

### "I didn't even write a script" path
You can just describe what you want:
```
/statusline show model name and context percentage with a progress bar
```
Claude Code generates the script, drops it in `~/.claude/`, updates your settings, and you're done.

### Manual configuration (`~/.claude/settings.json`)
```json
{
  "statusLine": {
    "type": "command",
    "command": "~/.claude/statusline.sh",
    "padding": 2
  }
}
```

---

## 13. Security & Best Practices (from official docs)

- Never commit API keys directly to your repository.
- Always use GitHub Secrets for API keys (e.g., `${{ secrets.ANTHROPIC_API_KEY }}`) rather than hardcoding them in workflow files.
- Limit action permissions to only what's necessary.
- Always review Claude's suggestions before merging.
- Add your API key as a repository secret named `ANTHROPIC_API_KEY`.
- Full guidance: see the Claude Code Action security documentation.

### Optimizing performance
- Use issue templates to provide context.
- Keep `CLAUDE.md` concise and focused.
- Configure appropriate timeouts for your workflows.

### CI cost awareness
**GitHub Actions costs:**
- Claude Code runs on GitHub-hosted runners, consuming your Actions minutes — see GitHub's billing docs.

**API costs:**
- Each Claude interaction consumes API tokens based on prompt/response length.
- Token usage varies by task complexity and codebase size — see Claude's pricing page.

**Cost optimization tips:**
- Use specific `@claude` commands to reduce unnecessary API calls.
- Configure appropriate `--max-turns` in `claude_args` to prevent excessive iterations.
- Set workflow-level timeouts to avoid runaway jobs.
- Use GitHub's concurrency controls to limit parallel runs.

---

## 14. Externalized Material — How Claude Automates Real Engineering Workflows

*(This section is supplementary context, not from the source PDF, added to make the knowledge base actionable.)*

### 14.1 Automation value map

| Task category | How Claude Code helps | Level used (§1) |
|---|---|---|
| Day-to-day version control | Natural-language commit, branch, merge, cleanup — no need to memorize `git` flags | Terminal |
| Code review at scale | Auto-reviews every PR, or on `@claude review this PR`, flags issues, suggests fixes | GitHub Actions |
| Bug triage from issues | `@claude fix this bug` reads the issue, reproduces context from the codebase, patches it, opens a PR | GitHub Actions |
| Parallel feature work | Git worktrees let you run isolated Claude sessions per feature/bugfix without stepping on each other | Terminal |
| Nightly/scheduled reports | Cron-triggered workflow summarizes commits, open issues, flags risk areas | Headless / GitHub Actions |
| Build-time quality gates | Headless mode (`claude -p "..."`) runs inside CI to check code quality, generate docs, update tests before merge | Headless |
| Enterprise governance | CLAUDE.md encodes org-wide standards so every automated action (commit, PR, review) is compliant by default | All levels |
| Cost/context visibility | Status line surfaces live session cost and context usage so long-running automated sessions don't run away silently | Terminal |

### 14.2 Suggested adoption path for a team (e.g., a Product Engineering / platform team)
1. **Start local** — adopt terminal-level natural-language Git operations to cut onboarding friction for new engineers unfamiliar with `git`/`gh` syntax.
2. **Codify standards in `CLAUDE.md`** — capture branching conventions, commit format, test commands, and library-specific rules (this is where cross-cutting standards, like a common-* library ecosystem's conventions, get enforced automatically for every Claude-authored change).
3. **Turn on the `@claude` GitHub bot** — let engineers request reviews or fixes directly from PR/issue comments, reducing review latency without replacing human sign-off.
4. **Introduce headless mode in CI** — add a `claude -p` step to pipelines for automated quality checks, doc generation, or test updates on every push.
5. **Use worktrees for parallel initiatives** — when a platform/standards owner needs to work a new shared library and a production hotfix simultaneously, isolate them via `--worktree` instead of context-switching in one directory.
6. **Track cost and context via the status line** — especially valuable once headless/CI usage scales, to avoid runaway API spend across many automated jobs.

### 14.3 Where this fits governance and technical-debt goals
For a role focused on cross-project standards and zero technical debt:
- `CLAUDE.md` is the natural enforcement point for "standard project structure" and "implementation process" conventions — every automated commit/PR passes through it.
- The `@claude` GitHub Action can be scoped per-repository, so a shared library repo and each consuming project repo can carry their own `CLAUDE.md`, letting Claude apply project-specific rules while a base convention set stays consistent.
- Headless CI checks (`claude -p "review this codebase for duplication against common-* library patterns"`) can be scripted as an automated technical-debt/duplication scanner, feeding directly into KPIs like code-duplication trend and tech-debt trajectory.
- `commit-commands` plugin (`/commit-push-pr`) standardizes the commit → push → PR flow across all contributors, reducing process variance — directly supporting a "repeatable implementation process" goal.

### 14.4 Caveats worth flagging to a team before rollout
- The GitHub App requests broad **read & write** access to Contents, Issues, and Pull Requests — review this against org security policy before granting repo-admin-level installation.
- Automated PR creation still requires **human review before merge** — Claude Code does not bypass branch protection or review requirements by default.
- Cost scales with usage; `--max-turns` and workflow timeouts are the main levers to prevent runaway spend in high-traffic repos.
- Bedrock/Vertex setup is materially more involved (OIDC, workload identity, custom GitHub App) than the direct-API quickstart — budget extra setup time for regulated/enterprise environments.

---

## 15. Quick Reference — Key Commands & Flags

| Command / Flag | Purpose |
|---|---|
| `claude --worktree <name>` (`-w`) | Start a session in an isolated git worktree |
| `claude -p "<prompt>"` (`--print`) | Run headless (non-interactive), for scripts/CI |
| `/install-github-app` | Interactive setup of the Claude GitHub App + Actions workflow |
| `/plugin` | Install plugins (e.g., `commit-commands`) |
| `/commit` | Smart commit of staged/reviewed changes |
| `/commit-push-pr` | Commit → push → open PR in one step |
| `/clean_gone` | Delete local branches already removed on remote |
| `/statusline <description>` | Generate a custom status line script from a plain-English description |
| `@claude <request>` (in PR/issue comment) | Trigger the GitHub Actions bot |
| `--max-turns` | Cap conversation turns in CI/automation |
| `--model` | Specify model (e.g., `claude-sonnet-5`) |
| `--allowedTools` / `--allowed-tools` | Restrict tool access |
| `--mcp-config` | Point to an MCP server config file |
| `--debug` | Verbose debug output |

---

*End of knowledge base.*
