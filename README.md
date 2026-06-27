# M0na Machin3 - Personal Website

> **Human connection, coded with care.**

A personal website built with Next.js, exploring the intersection of design, technology, and human connection. This is my digital space where I share my work, thoughts, and the journey of building meaningful digital experiences.

## ✨ Features

### 🎯 Command Navigation
- **Interactive Terminal Interface**: Press `/` to access the command palette
- **Dynamic Prompts**: Rotating questions that invite exploration
- **Easter Egg Commands**: Hidden interactions for discovery
- **Smooth Animations**: Boot sequence and glassmorphic design

### 🎨 Modern Design
- **Custom Typography**: Anurati, Aspal, and PoiretOne fonts
- **Radix UI Components**: Accessible, customizable component library
- **Tailwind CSS**: Utility-first styling with custom animations
- **Theme Support**: Light/dark mode with system preference detection
- **Responsive Design**: Optimized for all device sizes

### 📱 Pages & Sections
- **Home**: Hero section with animated timeline
- **Work**: Portfolio and collaboration information
- **Vision**: Creative direction and canvas
- **Timeline**: Project journey and development process
- **Services**: Available services and offerings
- **README**: About the project and mission
- **Portfolio**: Showcase (external — `p0rtf0li0-spac3.m0nalisa.workers.dev`)
- **AI Audit Actuarium**: AI evaluation framework (external — `ai-audit-actuarium.pages.dev`)

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/M0naLisaSmil3d/machin3-bas3.git
   cd machin3-bas3
   ```

2. **Install dependencies**
   ```bash
   npm ci
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎮 Usage

### Command Navigation
- Press `/` anywhere on the site to open the command palette
- Use arrow keys to navigate, Enter to select, Esc to close
- Try commands like:
  - `hom3bas3` - Return to home
  - `work` - Work section
  - `journey` - Timeline page
  - `readme` - View this documentation
  - `hello`, `story`, `hope`, `help` - Easter egg commands

## 🏗️ Project Structure

\`\`\`
machin3-bas3/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── work/              # Work section
│   ├── timeline/          # Timeline page
│   ├── notion-setup/      # Notion setup page
│   ├── notion-migration/  # Notion migration page
│   └── command-nav-demo/  # Command navigation demo
├── components/            # React components
│   ├── navigation/        # Command navigation system
│   ├── notion/           # Notion-specific components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility libraries
│   ├── notion/           # Notion API client
│   └── utils.ts          # Shared utilities
├── types/                # TypeScript type definitions
└── public/               # Static assets and fonts
\`\`\`

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Custom fonts (Anurati, Aspal, PoiretOne)

## 📝 Development

### Available Scripts
```bash
npm run dev           # Start development server
npm run pages:build   # Build for Cloudflare Pages Edge Runtime (use this, not npm run build)
npm run lint          # Run ESLint
npm test              # Run tests
```

### Portfolio & External Project Routing

If you want the website's `Portfolio` link and `/portfolio` route to hand off to a separate Cloudflare Pages site, set this environment variable in your deployment:

```bash
NEXT_PUBLIC_PORTFOLIO_URL=https://your-portfolio.pages.dev
```

Similarly, the `/actuarium` route and the **AI Audit Actuarium** link in the footer use:

```bash
NEXT_PUBLIC_ACTUARIUM_URL=https://your-actuarium.pages.dev
```

If either variable is not set, the site uses the default hardcoded URLs. Server-side redirects in `next.config.mjs` handle these routes at the edge; the individual pages provide a client-side fallback.

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
- `next` - React framework
- `@radix-ui/*` - Accessible UI primitives
- `@notionhq/client` - Notion API integration
- `tailwindcss` - Utility-first CSS
- `lucide-react` - Icon library
- `cmdk` - Command palette functionality

## 📄 License

This is my personal website. All rights reserved.

---

**Where reflection becomes connection.**  
*M0na Machin3 - 2025*
