# Copilot Instructions for M0na Machin3 Personal Website

## Project Overview

This is a personal website/ecosystem built with Vite + React Router, featuring an interactive command palette navigation system and deployed to Cloudflare Pages. The site explores the intersection of design, technology, and human connection with a modern, glassmorphic interface, organized into a 14-volume structure (`VOL-*` directories at repo root — see root `CLAUDE.md`).

**Project Type**: Vite + React 19 + TypeScript single-page app
**Deployment Target**: Cloudflare Pages (static, no server runtime)
**Repository Size**: Small to medium

## Technology Stack

- **Framework**: Vite 6 + React 19, client-side routing via `react-router-dom`
- **Language**: TypeScript 5.x (strict mode enabled)
- **Runtime**: Node.js 20.x
- **Styling**: Tailwind CSS 4.x with custom animations
- **UI Components**: Radix UI primitives
- **Package Manager**: npm (use `npm ci` for consistent installs)
- **Build Tool**: plain `vite build` — no Next.js, no Edge Runtime, no `next-on-pages`

## Build and Validation Commands

### Installation
**ALWAYS run `npm ci` instead of `npm install`** to ensure consistent dependency installation:
```bash
npm ci
```

### Linting
```bash
npm run lint
```
Uses `eslint.config.js` (flat config, ESLint 9) — not `.eslintrc.json`, which doesn't exist in this project.

### Development Server
```bash
npm run dev
```
🌐 Opens at: http://localhost:5173

### Production Build
```bash
npm run build
```
Runs `tsc -b && vite build`. Output goes to `dist/`. **This is the only build command** — there is no separate Cloudflare/Edge build step.

### Testing
No test suite exists. Do not add a `npm test` script reference to CI without adding actual tests first.

## Project Structure

```
Machin3-Bas3/
├── .github/
│   ├── workflows/          # GitHub Actions (ci.yml only — no deploy workflow)
│   └── agents/             # Custom Copilot agents (managed separately)
├── VOL-01-STRUCTURE/ … VOL-14-SERVER/   # The 14-volume ecosystem structure
├── VOL-06-APPLICATIONS/    # The actual app: pages, components, routing
│   ├── APPS-Pages/
│   ├── APPS-Components/
│   └── APPS-main.tsx
├── VOL-04-PUBLIC/           # Public static assets (Vite publicDir)
│   ├── _redirects          # Cloudflare edge proxy/redirect rules
│   └── _headers
├── VOL-11-LIBRARY/          # Shared utils (@lib alias)
├── vite.config.ts
├── wrangler.jsonc
└── package.json
```

See root `CLAUDE.md` for the full volume breakdown and current known-issue log.

## Key Configuration Files

- **vite.config.ts**: Vite config — `publicDir: 'VOL-04-PUBLIC'`, path aliases (`@`, `@apps`, `@lib`, `@server`)
- **tsconfig.json**: TypeScript config with strict mode, matching path aliases
- **eslint.config.js**: Flat config (ESLint 9) — `typescript-eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- **wrangler.jsonc**: Cloudflare Pages config — keep minimal, only `name` and `pages_build_output_dir`. Pages projects reject Workers-style fields like `observability`.
- **components.json**: shadcn/ui component configuration

There is no `next.config.mjs`, no `.eslintrc.json` — if you see either referenced, it's stale; don't recreate them.

## CI/CD Workflows

### Pull Request Validation (ci.yml)
Runs `npm ci`, `npm run lint`, `npm run build`.

### Production Deployment
**There is no GitHub Actions deploy workflow.** Deployment happens entirely through Cloudflare Pages' native git integration (dashboard-configured), triggered on push to `live-deploy`. Do not recreate a `deploy.yml` — a previous one existed, was redundant with the native integration, and was removed.

## Important Conventions

### Styling
- Use Tailwind utility classes for styling
- Custom fonts: Anurati (display/headings), Aspal, PoiretOne, Caviar Dreams (default body font)
- Glassmorphic design with blur effects and gradients
- Theme support via a custom `ThemeProvider` (`VOL-06-APPLICATIONS/APPS-Components/theme-provider.tsx`) — not `next-themes`

### Component Patterns
- Radix UI primitives for accessible components
- Component composition with `@radix-ui/react-slot`
- Use `cn()` utility from `@lib/LIBR-Utils/utils` for conditional classes

### TypeScript
- Strict mode enabled
- Path aliases: `@/*` (root), `@apps/*` (`VOL-06-APPLICATIONS`), `@lib/*` (`VOL-11-LIBRARY`), `@server/*` (`VOL-14-SERVER`)

### Navigation System
- Command palette triggered by `/` key
- Uses `cmdk` library for command interface
- Commands defined in `VOL-06-APPLICATIONS/APPS-Components/navigation/command-navigation.tsx`

### External Routing (Portfolio / Actuarium)
`/portfolio` and `/actuarium` are proxied (not redirected) at the Cloudflare edge via `VOL-04-PUBLIC/_redirects` using status `200`, so the address bar stays on `machin3.space`. Don't reintroduce `NEXT_PUBLIC_*` env vars or Next.js-style `redirects()` config for these — there is no Next.js here.

## Common Gotchas

1. **This is a static SPA** — no server runtime, no Edge Functions, no API routes. Any "backend" need (contact form, etc.) requires a separate Cloudflare Worker, not an in-repo API route.
2. **Never use `pnpm` or `yarn`** — the project uses npm and CI expects `npm ci`
3. **Custom agents in `.github/agents/`** — do not modify these files
4. **No symlinks** — the user has explicitly rejected symlink-based setups; duplicate files across volumes are real copies, kept in sync manually

## Making Changes

1. Run `npm ci` to ensure clean dependency state
2. Test locally with `npm run dev`
3. Run `npm run lint` to catch code quality issues
4. Run `npm run build` (both `tsc -b` and `vite build` must pass) before committing

## File Naming Conventions

- React components: PascalCase (e.g., `CommandPalette.tsx`)
- Utilities/hooks: camelCase (e.g., `useCommandPalette.ts`)
- Volume directories: `VOL-NN-NAME` at repo root, `UID-Category` inside each volume

## Dependencies

**Adding new dependencies**:
1. Use `npm install <package>` to add
2. Commit the updated `package.json` and `package-lock.json`
3. Run `npm run build` to confirm nothing breaks
4. Check if the package size is reasonable (this is a client-facing site)

## Trust These Instructions

This file was rewritten 2026-08-05 to match the current Vite-based architecture after a Next.js → Vite migration. If something here contradicts what you observe in the repo, prefer the root `CLAUDE.md` (which logs known issues and recent decisions) and verify with `npm run build` before assuming these instructions are correct.
