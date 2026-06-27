# M0na Machin3 - Personal Website

> **Human connection, coded with care.**

A personal website built with Next.js, exploring the intersection of design, technology, and human connection. This is my digital space where I share my work, services, and the journey of building meaningful digital experiences.

## ✨ Features

### 🎯 Command Navigation
- **Interactive Terminal Interface**: Press `/` to access the command palette
- **Dynamic Prompts**: Rotating questions that invite exploration
- **Easter Egg Commands**: Hidden interactions for discovery
- **Smooth Animations**: Boot sequence and glassmorphic design

### 🎨 Modern Design
- **Custom Typography**: Anurati, Aspal, PoiretOne, and Caviar Dreams fonts
- **Radix UI Components**: Accessible, customizable component library
- **Tailwind CSS v4**: Utility-first styling with custom animations
- **Theme Support**: Light/dark mode with system preference detection
- **Responsive Design**: Optimized for all device sizes

### 📱 Pages & Sections
- **Home**: Hero section with animated CTA
- **Work**: Portfolio and collaboration showcase
- **Services**: Interactive drafting desk with expandable service cards
- **Timeline**: Project journey and development process
- **Vision**: Purpose and direction statement
- **Actuarium**: AI audit methodology and redirect
- **README**: In-site documentation viewer

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/M0naMach/Machin3-Bas3.git
   cd Machin3-Bas3
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

```
Machin3-Bas3/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── work/              # Work/portfolio section
│   ├── services/          # Services drafting desk page
│   ├── timeline/          # Timeline page
│   ├── vision/            # Vision/purpose page
│   ├── actuarium/         # Actuarium redirect page
│   ├── readme/            # In-site README page
│   ├── portfolio/         # Portfolio redirect
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   └── api/               # API routes (contact, form)
├── components/            # React components
│   ├── navigation/        # Command navigation system
│   ├── services-desk.tsx  # Interactive services desk client
│   ├── portfolio/         # Portfolio-specific components
│   └── ui/               # Reusable UI components (Radix)
├── lib/                  # Utility libraries
│   ├── notion/           # Notion API client
│   ├── auth/             # Auth manager
│   ├── mentorship/       # Personality phrases
│   └── utils.ts          # Shared utilities
├── types/                # TypeScript type definitions
└── public/               # Static assets and fonts
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom animations
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Custom fonts (Anurati, Aspal, PoiretOne, Caviar Dreams)
- **Deployment**: Cloudflare Pages via Wrangler

## 📝 Development

### Available Scripts
```bash
npm run dev        # Start development server
npm run lint       # Run ESLint
npm run pages:build # Build for Cloudflare Pages (Edge compat)
npm run preview    # Build + run local Pages preview
```

### Portfolio Routing

If you want the website's `Portfolio` link and `/portfolio` route to hand off to a separate Cloudflare Pages site, set this environment variable in your deployment:

```bash
NEXT_PUBLIC_PORTFOLIO_URL=https://your-portfolio.pages.dev
```

If that variable is not set, the site redirects to `https://machin3.space/portfolio` by default.

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
