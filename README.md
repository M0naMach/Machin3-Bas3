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
- **Timeline**: Project journey and development process
- **Notion Integration**: Setup and migration tools
- **Command Demo**: Interactive navigation showcase

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/machin3-bas3.git
   cd machin3-bas3
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   pnpm install
   # or
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   pnpm dev
   # or
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

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Custom fonts (Anurati, Aspal, PoiretOne)

## 📝 Development

### Available Scripts
\`\`\`bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
\`\`\`

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
