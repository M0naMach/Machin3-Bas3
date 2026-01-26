# Copilot Instructions for M0na Machin3 Personal Website

## Project Overview

This is a personal website built with Next.js 15, featuring an interactive command palette navigation system and deployed to Cloudflare Pages. The site explores the intersection of design, technology, and human connection with a modern, glassmorphic interface.

**Project Type**: Next.js 15 web application with TypeScript  
**Deployment Target**: Cloudflare Pages (Edge Runtime)  
**Repository Size**: Small to medium (~50-100 files)

## Technology Stack

- **Framework**: Next.js 15.1.9 with App Router
- **Language**: TypeScript 5.x (strict mode enabled)
- **Runtime**: Node.js 20.x
- **Styling**: Tailwind CSS 4.x with custom animations
- **UI Components**: Radix UI primitives
- **Package Manager**: npm (use `npm ci` for consistent installs)
- **Build Tool**: @cloudflare/next-on-pages for Edge Runtime compatibility

## Build and Validation Commands

### Installation
**ALWAYS run `npm ci` instead of `npm install`** to ensure consistent dependency installation:
```bash
npm ci
```
⏱️ Expected time: 30-60 seconds

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```
⏱️ Expected time: 5-10 seconds

**Note**: The Next.js config has `ignoreDuringBuilds: true` for both ESLint and TypeScript, but **you should still run linting** before committing to catch issues early.

### Development Server
Start the local development server:
```bash
npm run dev
```
🌐 Opens at: http://localhost:3000  
⏱️ Expected startup: 5-10 seconds

### Production Build (Cloudflare Edge)
**CRITICAL**: Always use the Cloudflare-specific build command:
```bash
npm run pages:build
```
⏱️ Expected time: 60-120 seconds

**DO NOT use `npm run build`** - while `npm run build` creates a standard Next.js build, `pages:build` specifically transforms it for Cloudflare Pages Edge Runtime compatibility using `@cloudflare/next-on-pages`. The CI uses `pages:build` to ensure Edge Runtime compatibility.

Output location: `.vercel/output/static/`

### Testing
Currently no test suite exists. The test script exits successfully:
```bash
npm test
```
Returns: "No tests specified" with exit code 0

## Project Structure

```
machin3-bas3/
├── .github/
│   ├── workflows/          # GitHub Actions CI/CD
│   │   ├── ci.yml         # PR validation (lint + pages:build)
│   │   ├── deploy.yml     # Production deploy to Cloudflare
│   │   └── node.js.yml    # Additional Node.js checks
│   └── agents/            # Custom Copilot agents (DO NOT MODIFY)
├── app/                   # Next.js App Router pages
│   ├── page.tsx          # Home page (main entry)
│   ├── layout.tsx        # Root layout with fonts and theme
│   ├── api/              # API routes
│   ├── work/             # Work section
│   ├── portfolio/        # Portfolio projects
│   ├── timeline/         # Project timeline page
│   ├── vision/           # Vision/about page
│   ├── services/         # Services page
│   ├── readme/           # README documentation page
│   ├── notion-setup/     # Notion integration setup
│   ├── notion-migration/ # Notion migration tools
│   ├── privacy/          # Privacy policy
│   └── terms/            # Terms of service
├── components/
│   ├── navigation/       # Command palette system (cmdk)
│   ├── notion/          # Notion API integration components
│   └── ui/              # Radix UI primitives & shadcn/ui components
├── lib/
│   ├── notion/          # Notion API client utilities
│   └── utils.ts         # Shared utility functions (cn, etc.)
├── types/               # TypeScript type definitions
├── public/              # Static assets (fonts, images)
├── styles/              # Global CSS files
└── data/                # Static data files
```

## Key Configuration Files

- **next.config.mjs**: Next.js configuration with image optimization disabled for static hosting
- **tsconfig.json**: TypeScript config with strict mode, path aliases (`@/*`)
- **.eslintrc.json**: Extends `next/core-web-vitals` and `next/typescript`
- **tailwind.config.ts**: Tailwind CSS configuration (if exists)
- **components.json**: shadcn/ui component configuration
- **wrangler.jsonc**: Cloudflare Workers/Pages configuration

## CI/CD Workflows

### Pull Request Validation (ci.yml)
Runs on all PRs to `main` branch:
1. Checkout code
2. Setup Node.js 20 with npm cache
3. `npm ci` - Install dependencies
4. `npm run lint` - Lint code
5. `npm run pages:build` - Build for Edge Runtime

⏱️ Total time: ~2-3 minutes  
**If this fails, your PR will be blocked.**

### Production Deployment (deploy.yml)
Triggered on push to `live-deploy` branch:
1. Install dependencies
2. Build with `npm run pages:build`
3. Deploy to Cloudflare Pages

**Deployment URL output**: Available in workflow logs

## Important Conventions

### Styling
- Use Tailwind utility classes for styling
- Custom fonts: Anurati (headings), Aspal, PoiretOne
- Glassmorphic design with blur effects and gradients
- Theme support via `next-themes`

### Component Patterns
- Radix UI primitives for accessible components
- Component composition with `@radix-ui/react-slot`
- Use `cn()` utility from `lib/utils.ts` for conditional classes

### TypeScript
- Strict mode enabled
- Use path alias `@/` for imports (e.g., `@/components/ui/button`)
- Type definitions in `types/` directory

### Navigation System
- Command palette triggered by `/` key
- Uses `cmdk` library for command interface
- Commands defined in `components/navigation/`

## Edge Runtime Compatibility

**CRITICAL**: This project deploys to Cloudflare Pages Edge Runtime. Avoid:
- Node.js-specific APIs (fs, path, os) in client/edge code
- Dynamic imports that aren't Edge-compatible
- Large server-side dependencies

If you add new dependencies or server-side code:
1. **Test with `npm run pages:build`** before committing
2. Check for Edge Runtime compatibility warnings

## Common Gotchas

1. **Always use `npm run pages:build`** instead of `npm run build` for validation
2. **Never use `pnpm` or `yarn`** - the project uses npm and the CI expects `npm ci`
3. **Static image optimization is disabled** - images must work without Next.js optimization
4. **TypeScript/ESLint errors ignored during builds** - but you should still fix them
5. **Custom agents in `.github/agents/`** - Do not modify these files

## Making Changes

When making code changes:
1. Run `npm ci` to ensure clean dependency state
2. Test locally with `npm run dev`
3. Run `npm run lint` to catch code quality issues
4. **Build with `npm run pages:build`** to ensure Edge compatibility
5. Check that the build completes successfully (120s timeout)

## File Naming Conventions

- React components: PascalCase (e.g., `CommandPalette.tsx`)
- Utilities/hooks: camelCase (e.g., `useCommandPalette.ts`)
- Page routes: lowercase with hyphens (e.g., `notion-setup/`)
- Config files: lowercase with extensions (e.g., `next.config.mjs`)

## Dependencies

**Adding new dependencies**:
1. Use `npm install <package>` to add
2. Commit the updated `package.json` and `package-lock.json`
3. Test with `npm run pages:build` to ensure Edge compatibility
4. Check if the package size is reasonable (this is a client-facing site)

## Trust These Instructions

These instructions have been validated by running commands in a clean environment. If something doesn't work as documented, please verify:
1. You're using Node.js 20.x
2. You ran `npm ci` with a clean `node_modules/`
3. You're using the exact commands shown above

Only perform additional searches if these instructions are incomplete or incorrect.
