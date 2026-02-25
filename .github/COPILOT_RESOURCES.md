# GitHub Copilot Resources — Machin3-Bas3

Curated tools pulled from [github/awesome-copilot](https://github.com/github/awesome-copilot) to supercharge development on this Next.js 15 / TypeScript / Tailwind / Cloudflare Pages project.

---

## 📋 Instructions (`.github/instructions/`)

GitHub Copilot automatically applies these instruction files based on the `applyTo` glob patterns in each file's frontmatter. They guide code generation, suggestions, and edits across the codebase.

| File | Applies To | What It Does | VS Code Insiders Install |
|------|-----------|--------------|--------------------------|
| [`nextjs.instructions.md`](instructions/nextjs.instructions.md) | `**/*.tsx, **/*.ts, **/*.jsx, **/*.js, **/*.css` | Next.js App Router best practices (2026): server/client boundaries, caching, routing, data fetching | [![Install](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?logo=visualstudiocode)](https://aka.ms/awesome-copilot/install/instructions?url=vscode-insiders%3Achat-instructions%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Finstructions%2Fnextjs.instructions.md) |
| [`nextjs-tailwind.instructions.md`](instructions/nextjs-tailwind.instructions.md) | `**/*.tsx, **/*.ts, **/*.jsx, **/*.js, **/*.css` | Next.js + Tailwind CSS patterns, component structure, and utility class conventions | [![Install](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?logo=visualstudiocode)](https://aka.ms/awesome-copilot/install/instructions?url=vscode-insiders%3Achat-instructions%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Finstructions%2Fnextjs-tailwind.instructions.md) |
| [`reactjs.instructions.md`](instructions/reactjs.instructions.md) | `**/*.jsx, **/*.tsx, **/*.js, **/*.ts, **/*.css` | React component patterns, hooks, state management, and performance best practices | [![Install](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?logo=visualstudiocode)](https://aka.ms/awesome-copilot/install/instructions?url=vscode-insiders%3Achat-instructions%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Finstructions%2Freactjs.instructions.md) |
| [`typescript-5-es2022.instructions.md`](instructions/typescript-5-es2022.instructions.md) | `**/*.ts` | TypeScript 5.x strict-mode conventions, type safety, generics, and ES2022 targets | [![Install](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?logo=visualstudiocode)](https://aka.ms/awesome-copilot/install/instructions?url=vscode-insiders%3Achat-instructions%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Finstructions%2Ftypescript-5-es2022.instructions.md) |
| [`a11y.instructions.md`](instructions/a11y.instructions.md) | `**` | Accessibility (WCAG) guidance: ARIA roles, keyboard navigation, semantic HTML, colour contrast | [![Install](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?logo=visualstudiocode)](https://aka.ms/awesome-copilot/install/instructions?url=vscode-insiders%3Achat-instructions%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Finstructions%2Fa11y.instructions.md) |
| [`html-css-style-color-guide.instructions.md`](instructions/html-css-style-color-guide.instructions.md) | `**/*.html, **/*.css, **/*.js` | Colour usage rules, accessible design tokens, and professional styling conventions | [![Install](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?logo=visualstudiocode)](https://aka.ms/awesome-copilot/install/instructions?url=vscode-insiders%3Achat-instructions%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Finstructions%2Fhtml-css-style-color-guide.instructions.md) |
| [`github-actions-ci-cd-best-practices.instructions.md`](instructions/github-actions-ci-cd-best-practices.instructions.md) | `.github/workflows/*.yml` | Secure, efficient GitHub Actions: pinned SHAs, least-privilege permissions, caching, matrix builds | [![Install](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?logo=visualstudiocode)](https://aka.ms/awesome-copilot/install/instructions?url=vscode-insiders%3Achat-instructions%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Finstructions%2Fgithub-actions-ci-cd-best-practices.instructions.md) |
| [`taming-copilot.instructions.md`](instructions/taming-copilot.instructions.md) | `**` | Guardrails that prevent Copilot from making sweeping unintended changes across the codebase | [![Install](https://img.shields.io/badge/VS_Code_Insiders-Install-24bfa5?logo=visualstudiocode)](https://aka.ms/awesome-copilot/install/instructions?url=vscode-insiders%3Achat-instructions%2Finstall%3Furl%3Dhttps%3A%2F%2Fraw.githubusercontent.com%2Fgithub%2Fawesome-copilot%2Fmain%2Finstructions%2Ftaming-copilot.instructions.md) |

---

## 🪝 Hooks (`.github/hooks/`)

Hooks run automatically during GitHub Copilot coding agent sessions. Copy a hook folder to `.github/hooks/` (already done) and commit — they activate immediately.

| Hook | Events | What It Does |
|------|--------|--------------|
| [`session-auto-commit/`](hooks/session-auto-commit/README.md) | `sessionEnd` | Auto-commits and pushes all staged changes when a Copilot session ends — zero lost work |
| [`session-logger/`](hooks/session-logger/README.md) | `sessionStart`, `sessionEnd`, `userPromptSubmitted` | Logs all session activity to a local file for audit and debugging |
| [`governance-audit/`](hooks/governance-audit/README.md) | `sessionStart`, `sessionEnd`, `userPromptSubmitted` | Scans prompts for threat signals and writes governance events to an audit log |

---

## 🔄 Enabled Workflows

These resources together enable the following development workflows:

### 1. AI-Guided Next.js Development
**Instructions used:** `nextjs.instructions.md` + `nextjs-tailwind.instructions.md` + `reactjs.instructions.md`  
Copilot automatically follows App Router conventions, Tailwind utility patterns, and React component best practices whenever you edit `.tsx`/`.ts` files. Ask Copilot to create a new page or component and it will use `use client`/`use server` correctly, apply Tailwind classes, and structure hooks properly.

### 2. TypeScript Type Safety
**Instructions used:** `typescript-5-es2022.instructions.md`  
All `.ts` files receive TypeScript 5.x strict-mode guidance: no implicit `any`, proper generics, `satisfies` operator usage, and ES2022 output targeting. Use Copilot to refactor types or add new interfaces.

### 3. Accessibility Auditing & Fixes
**Instructions used:** `a11y.instructions.md` + `html-css-style-color-guide.instructions.md`  
Ask Copilot `@workspace Fix all accessibility issues in this component` and it will apply ARIA attributes, keyboard navigation, semantic elements, and colour contrast fixes aligned with WCAG 2.1 AA.

### 4. GitHub Actions Hardening
**Instructions used:** `github-actions-ci-cd-best-practices.instructions.md`  
When editing `.github/workflows/*.yml`, Copilot will suggest SHA-pinned actions, least-privilege permissions, dependency caching, and secure secret handling patterns.

### 5. Safe Agentic Sessions (Guardrails)
**Instructions used:** `taming-copilot.instructions.md`  
**Hooks used:** `governance-audit/`  
Prevents Copilot from making unintended sweeping changes. The governance-audit hook scans every prompt for threat signals and logs governance events for review.

### 6. Zero-Loss Coding Sessions
**Hooks used:** `session-auto-commit/` + `session-logger/`  
Every Copilot coding agent session is auto-committed on end and fully logged. No work is lost and every session is auditable.

### 7. Component Refactoring Workflow
**Instructions used:** `reactjs.instructions.md` + `nextjs-tailwind.instructions.md` + `a11y.instructions.md`  
Combine these with the `expert-react-frontend-engineer.agent.md` (already in `.github/agents/`) for a full component audit → accessibility fix → Tailwind refactor pipeline.

### 8. CI/CD Pipeline Improvement
**Instructions used:** `github-actions-ci-cd-best-practices.instructions.md`  
Use with the `github-actions-expert.agent.md` (already in `.github/agents/`) to review and harden all workflows in `.github/workflows/`.

---

## 💡 How to Use These in VS Code

1. **Click any "VS Code Insiders Install" badge** above to add an instruction directly to your local VS Code workspace.
2. **Or** rely on the files already committed here — VS Code Copilot reads `.github/instructions/*.instructions.md` automatically.
3. **Hooks** are already in `.github/hooks/` and activate automatically in any Copilot coding agent session assigned to this repo.

---

*All files sourced as-is from [github/awesome-copilot](https://github.com/github/awesome-copilot) (MIT licensed).*
