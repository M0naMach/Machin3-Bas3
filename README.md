# M0na Machin3 - Personal Website

> **Human connection, coded with care.**

A personal website built with Next.js, exploring the intersection of design, technology, and human connection. This is my digital space where I share my work, thoughts, and the journey of building meaningful digital experiences.

**🌐 Live Site**: [audit.machin3.space](https://audit.machin3.space)

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
- **Timeline**: Project journey and development process
- **Notion Integration**: Setup and migration tools
- **Command Demo**: Interactive navigation showcase

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm (package manager)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/M0naMach/Machin3-Bas3.git
   cd Machin3-Bas3
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm ci
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

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
├── app/                     # Next.js app directory (App Router)
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout with fonts and theme
│   ├── globals.css         # Global styles
│   ├── api/                # API routes
│   ├── work/               # Work section
│   ├── portfolio/          # Portfolio projects
│   ├── timeline/           # Project timeline page
│   ├── vision/             # Vision/about page
│   ├── services/           # Services page
│   ├── readme/             # README documentation page
│   ├── notion-setup/       # Notion integration setup
│   ├── notion-migration/   # Notion migration tools
│   ├── privacy/            # Privacy policy
│   └── terms/              # Terms of service
│
├── components/             # React components
│   ├── navigation/         # Command palette system (cmdk)
│   ├── notion/             # Notion API integration components
│   ├── portfolio/          # Portfolio-specific components
│   └── ui/                 # Radix UI primitives & shadcn/ui components
│
├── lib/                    # Utility libraries
│   ├── notion/             # Notion API client utilities
│   ├── auth/               # Authentication utilities
│   ├── database/           # Database utilities
│   ├── memory/             # Memory management
│   ├── mentorship/         # Mentorship features
│   └── utils.ts            # Shared utility functions (cn, etc.)
│
├── types/                  # TypeScript type definitions
│   ├── integrations.ts     # Integration types
│   ├── memory.ts           # Memory types
│   └── notes.ts            # Notes types
│
├── public/                 # Static assets
│   ├── fonts/              # Custom fonts (Anurati, Aspal, PoiretOne, etc.)
│   ├── images/             # Image assets
│   └── art/                # Artwork and graphics
│
├── data/                   # Static data files
│   └── portfolio/          # Portfolio data
│
├── hooks/                  # Custom React hooks
├── scripts/                # Build and utility scripts
└── styles/                 # Additional stylesheets
\`\`\`

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Runtime**: Node.js 20.x
- **Styling**: Tailwind CSS 4.x with custom animations
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Custom fonts (Anurati, Aspal, PoiretOne, Caviar Dreams)
- **Deployment**: Cloudflare Pages (Edge Runtime)
- **Build Tool**: @cloudflare/next-on-pages for Edge compatibility

## 📝 Development

### Available Scripts
\`\`\`bash
npm run dev            # Start development server
npm run pages:build    # Build for Cloudflare Pages (Edge Runtime)
npm run lint           # Run ESLint
npm ci                 # Install dependencies (use instead of npm install)
\`\`\`

### Key Dependencies
- `next` - React framework (v15)
- `@radix-ui/*` - Accessible UI primitives
- `@notionhq/client` - Notion API integration
- `tailwindcss` - Utility-first CSS (v4)
- `lucide-react` - Icon library
- `cmdk` - Command palette functionality
- `@cloudflare/next-on-pages` - Cloudflare Pages adapter

## 🚀 Deployment

This site is deployed to **Cloudflare Pages** with a custom domain.

### Production URL
- **Primary**: [audit.machin3.space](https://audit.machin3.space)

### Deployment Process
1. Push to `live-deploy` branch triggers automated deployment
2. GitHub Actions workflow builds with `npm run pages:build`
3. Cloudflare Pages deploys to Edge Runtime
4. Custom domain configured in Cloudflare Dashboard

### Custom Domain Setup
The custom domain `audit.machin3.space` is configured through:
1. **DNS**: CNAME record pointing to Cloudflare Pages
2. **Cloudflare Dashboard**: Custom domain added to project settings
3. **SSL/TLS**: Automatic HTTPS via Cloudflare

To verify deployment:
\`\`\`bash
# Check recent deployments
curl -I https://audit.machin3.space
\`\`\`

## 📄 License

This is my personal website. All rights reserved.

---

**Where reflection becomes connection.**  
*M0na Machin3 - 2025*
