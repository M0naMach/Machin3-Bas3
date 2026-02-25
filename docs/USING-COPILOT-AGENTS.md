# Using GitHub Copilot Custom Agents

This repository includes a collection of custom GitHub Copilot agents stored in [`.github/agents/`](../.github/agents/). These agents are specialized AI chat modes that give Copilot focused expertise for specific tasks.

## What Are Custom Agents?

Custom agents (`.agent.md` files) extend GitHub Copilot Chat with task-specific personas and instructions. Each agent is pre-configured with domain knowledge so you get more targeted, accurate responses without having to re-explain context each time.

## How to Access the Agents

### In VS Code

1. Open the **GitHub Copilot Chat** panel (click the Copilot icon in the Activity Bar, or press `Ctrl+Shift+I` / `Cmd+Shift+I`).
2. Click the **chat mode selector** — the dropdown that typically shows "Ask" or "Chat" at the top of the panel.
3. Select the agent you want from the list. All agents defined in `.github/agents/` appear here automatically.
4. Type your request. The agent's persona and instructions are applied to the entire conversation.

> **Tip**: Switch agents mid-session by clicking the mode selector again. Each new selection starts with the chosen agent's context.

### In GitHub.com (Copilot Chat on the web)

1. Open a repository, issue, pull request, or the global Copilot Chat sidebar.
2. Click the **chat mode / agent selector** dropdown near the text input.
3. Choose the desired agent and type your request.

### In GitHub Copilot Coding Agent (Agentic tasks)

When opening a Copilot issue or starting an agentic task (e.g., from a GitHub issue), select the agent in the agent picker before assigning the task. The chosen agent will guide the autonomous coding session.

---

## Available Agents

| Agent file | Specialisation |
|---|---|
| `ADR_agent` | Architectural Decision Records — structured decision documentation |
| `GitHub_Pro-Auto_Agent` | CI/CD automation, workflow generation, repository optimisation |
| `Thinking-Beast-Mode` | Deep, multi-step reasoning for complex problems |
| `Ultimate-Transparent-Thinking-Beast-Mode` | Extended transparent reasoning with step-by-step visibility |
| `critical-thinking` | Challenges assumptions and stress-tests proposed solutions |
| `devops-core` | Core DevOps principles, CALMS culture, DORA metrics |
| `devops-expert` | Full DevOps infinity-loop: plan → code → build → test → release → deploy → operate → monitor |
| `expert-nextjs-developer` | Next.js 15 App Router, Server Components, Turbopack, TypeScript |
| `expert-react-frontend-engineer` | React 19 hooks, Server Components, Actions, performance |
| `github-actions-expert` | Secure workflows, OIDC auth, action pinning, supply-chain security |
| `go-mcp-expert` | MCP servers in Go using the official SDK |
| `gpt-5-beast-mode` | Autonomous research and complex problem-solving |
| `hlbpa` | High-level architecture documentation and review |
| `mcp-m365-agent-expert` | MCP-based declarative agents for Microsoft 365 Copilot |
| `meta-agentic-project-scaffold` | Project scaffolding and workflow creation |
| `microsoft-agent-framework-dotnet` | Microsoft Agent Framework for .NET |
| `ms-sql-dba` | Microsoft SQL Server database administration |
| `neon-migration-specialist` | Zero-downtime Postgres migrations with Neon branching |
| `neon-optimization-analyzer` | Slow-query identification and Postgres optimisation |
| `plan` | Strategic planning and architecture analysis before implementation |
| `planner` | Feature implementation planning and refactoring strategies |
| `playwright-tester` | Playwright end-to-end test authoring and debugging |
| `postgresql-dba` | PostgreSQL database administration |
| `principal-software-engineer` | Principal-level engineering guidance and technical leadership |
| `prompt-engineer` | Prompt analysis and improvement |
| `python-mcp-expert` | MCP servers in Python |
| `refine-issue` | Issue refinement with acceptance criteria and NFRs |
| `search-ai-optimization-expert` | SEO, AEO, and Generative Engine Optimisation |
| `software-engineer-agent-v1` | Production-ready, specification-driven software engineering |
| `specification` | Writing and updating specification documents |
| `swift-mcp-expert` | MCP servers in Swift |
| `task-planner` | Actionable implementation task planning |
| `typescript-mcp-expert` | MCP servers in TypeScript |

---

## Tips for Getting the Best Results

- **Be specific about what you want** — agents are focused but still benefit from clear, scoped requests.
- **Use the right agent for the job** — e.g., use `github-actions-expert` for workflow changes, `expert-nextjs-developer` for component work.
- **Chain agents** — finish a planning session with `plan`, then hand off to `software-engineer-agent-v1` for implementation.
- **Agents respect the copilot instructions** — the project-level instructions in `.github/copilot-instructions.md` are always applied on top of the agent's own instructions.

## Troubleshooting

| Problem | Solution |
|---|---|
| Agents don't appear in the dropdown | Ensure you have a GitHub Copilot subscription and are signed in. Agent discovery requires Copilot Chat version 1.250+ in VS Code. |
| Agent produces generic responses | Check that you selected the agent *before* typing — switching mid-message may not apply the new context. Start a new chat session. |
| An agent is missing | Verify the corresponding `.agent.md` file exists in `.github/agents/` and is committed to the branch you are on. |
