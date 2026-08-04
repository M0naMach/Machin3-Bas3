# M0na Machin3 — Personal Website

> **Human connection, coded with care.**

A personal site and ecosystem for M0na Machin3 (machin3.space) — where work, services, art, and community live in one command-driven space.

## • The Redundancy

This started as a Next.js site on Vercel, and it worked — until it didn't. Edge-runtime quirks, `next-on-pages` build failures on Cloudflare, and a pile of boilerplate that grew every time a new feature needed a new page. Worse, the site had no real organizing logic: pages, components, and assets were scattered wherever they landed, so every addition meant re-deciding where things belonged. That drift is what necessitated a rebuild — not new features, but a structure that could hold them.

## • The Rhyme

Stop thinking of it as a website. Think of it as an **ecosystem** — a physical archive with 14 volumes, each one a distinct concern (structure, community, context, public, user, applications, paperwork, knowledge, automations, terminal control, library, commercial, observability, server). A page isn't just a route anymore; it's a room in a building you can walk into and know exactly where you are. The public-facing side of that archive — the Broadcasting Station — is where the world actually gets to look in.

## • The Reason

The app itself is a plain Vite + React Router single-page app — no server runtime, no edge functions, just a static build. Code lives in `VOL-06-APPLICATIONS`; public assets live in `VOL-04-PUBLIC`, which now has its own internal 14-volume subdivision so every page's assets have a designated home. External hop-offs (portfolio, the Actuarium audit tool) are handled with Cloudflare `_redirects` at the edge rather than server-side routing. `VOL-MBBS` holds outbound social links, kept separate from served assets on purpose — one is content, the other is a directory of where else to find me.

## • Machin3 M3chanics

- **Framework**: React 19 + Vite 6, client-side routing via React Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives, `cmdk` for the command palette
- **Icons**: Lucide React
- **Fonts**: Custom fonts (Anurati, Aspal, PoiretOne, Caviar Dreams)
- **Deployment**: Cloudflare Pages, native git integration (no GitHub Actions deploy step)

## • The Refinement

The whole Next.js layer came out — `app/`, `components/`, `lib/`, `hooks/`, `data/`, plus `next`, `next-themes`, `geist`, `@notionhq/client`, `react-hook-form`, `react-day-picker`, and `react-resizable-panels`, none of which the Vite build needed. That cut ~20,000 lines of dead/duplicate code and dropped Dependabot's count from 77 vulnerabilities to single digits. Portfolio and Actuarium routing moved from `NEXT_PUBLIC_*` env vars and Next config redirects to a single Cloudflare `_redirects` file. ESLint's config was fully dead (still pointing at `next/core-web-vitals` after `next` was uninstalled) and got replaced with a real Vite+React+TS flat config. And a second, independent GitHub Actions deploy workflow — stale, running a build script that no longer existed — got removed so there's exactly one deploy path: Cloudflare's own git integration.

## • The Result

A site that builds clean (`tsc -b && vite build`), lints clean, and deploys through one path instead of three competing ones. The command palette (press `/`) still works exactly as it always has — `hom3bas3`, `work`, `journey`, `readme`, and the easter eggs are all still there. What changed is everything underneath: the ecosystem now has a shape you can actually navigate.

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/M0naMach/Machin3-Bas3.git
cd Machin3-Bas3
npm ci
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Usage

### Command Navigation
- Press `/` anywhere on the site to open the command palette
- Use arrow keys to navigate, Enter to select, Esc to close
- Try commands like:
  - `hom3bas3` - Return to home
  - `work` - Work section
  - `journey` - Timeline page
  - `readme` - View this documentation
  - `hello`, `story`, `hope`, `help` - Easter egg commands

## Project Structure

```
Machin3-Bas3/
├── VOL-01-STRUCTURE/       # Neighborhood/foundational concept
├── VOL-02-COMMUNITY/       # Volunteer work, organizational affiliations
├── VOL-03-CONTEXT/         # Background/context content
├── VOL-04-PUBLIC/          # Public static assets (Vite publicDir)
│   ├── VOL-01-HOOD/ … VOL-14-SERVER/   # Per-page asset sub-volumes
│   ├── _headers            # Cloudflare response headers
│   ├── _redirects          # Portfolio/Actuarium edge redirects
│   ├── robots.txt / sitemap.xml / auth.md
│   └── .well-known/        # Agent-readiness endpoints (MCP card, API catalog, etc.)
├── VOL-05-USER/            # Client-facing assets (unused for this personal site)
├── VOL-06-APPLICATIONS/    # The React/Vite app — pages, components, routing
│   ├── APPS-Pages/
│   ├── APPS-Components/
│   └── APPS-main.tsx
├── VOL-07-PAPERWORK/       # Legal (privacy, terms, support)
├── VOL-08-KNOWLEDGE_BASE/
├── VOL-09-AUTOMATIONS/     # GitHub Copilot agents, CI config
├── VOL-10-TERMINAL_CONTROL/
├── VOL-11-LIBRARY/         # Shared utils (@lib alias)
├── VOL-12-COMMERCIAL/      # Corporate/licensing
├── VOL-13-OBSERVABILITY/
├── VOL-14-SERVER/
├── VOL-MBBS/                # Social/broadcasting links (Reddit, etc)
├── wrangler.jsonc
└── vite.config.ts
```

## Technology Stack

See [Machin3 M3chanics](#-machin3-m3chanics) above.

## Development

### Available Scripts
```bash
npm run dev        # Start development server
npm run build      # tsc -b && vite build
npm run preview    # Preview the production build locally
npm run lint        # Run ESLint
```

### Portfolio & Actuarium Routing

`/portfolio` and `/actuarium` are handled entirely at the Cloudflare edge via [`VOL-04-PUBLIC/_redirects`](VOL-04-PUBLIC/_redirects) — no environment variables, no client-side fallback. Update that file directly to change either destination.

### GitHub Copilot Agents

This repository ships 34 custom GitHub Copilot agents for specialised AI assistance. See the [Using Copilot Agents guide](docs/USING-COPILOT-AGENTS.md) to learn:

- How to open and select an agent in VS Code or GitHub.com
- Which agent to use for each type of task
- Tips for chaining agents together effectively

Agent files live in [`.github/agents/`](.github/agents/).

### Repository Governance

This repository uses GitHub Rulesets to maintain code quality and protect important branches. See the [Repository Rules Setup Guide](docs/REPOSITORY_RULES_SETUP.md) for:

- Branch protection configuration
- Required status checks (CI/CD)
- Pull request review requirements
- How to apply rulesets to your repository

Pre-configured ruleset templates are available in [`.github/rulesets/`](.github/rulesets/).

### Key Dependencies
- `react` / `react-router-dom` - App framework and routing
- `@radix-ui/*` - Accessible UI primitives
- `tailwindcss` - Utility-first CSS
- `lucide-react` - Icon library
- `cmdk` - Command palette functionality

## License

This is my personal website. All rights reserved.

---

**Where reflection becomes connection.**
*M0na Machin3*
