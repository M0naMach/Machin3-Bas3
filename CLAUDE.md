# Machin3-Bas3

Personal site/ecosystem for M0na Machin3 (machin3.space). Vite + React Router,
organized into a 14-volume structure (see `VOL-*` directories at repo root).

## Git workflow

- **Merge directly to `live-deploy`** — do not open pull requests, do not leave
  branches sitting unmerged. The user works from mobile (Working Copy app) and
  does not use PR review workflows. Commit, verify the build, and push straight
  to `live-deploy`.
- Always verify before pushing to `live-deploy`: `npx tsc --noEmit` and
  `npx vite build` should both pass clean.
- `live-deploy` has a branch protection rule requiring PRs; direct pushes go
  through as a "bypassed rule violation" (GitHub still allows it, just warns).
  The user may disable this rule from their end.

## Structure

- `VOL-06-APPLICATIONS` — the React/Vite app (pages, components, routing).
  This is where code lives and does not change structurally.
- `VOL-04-PUBLIC` — public static assets (`publicDir` in `vite.config.ts`).
  This is "MBBS" (Machin3-Bas3 Broadcasting Station) and now contains its own
  internal 14-volume subdivision for organizing page-specific public assets:
  `VOL-01-HOOD`, `VOL-02-COMMUNITY`, `VOL-03-CONTEXT`, `VOL-05-USER`,
  `VOL-06-APPLICATIONS`, `VOL-07-PAPERWORK`, `VOL-08-KNOWLEDGE_BASE`,
  `VOL-09-AUTOMATIONS`, `VOL-10-TERMINAL_CONTROL`, `VOL-11-LIBRARY`,
  `VOL-12-COMMERCIAL`, `VOL-13-CNVS` (art), `VOL-14-SERVER`. Volume 4 is the
  container itself, so it isn't nested inside itself.
- No symlinks — the user has explicitly rejected symlink-based setups.

## Notes

- `.env.local` contains secrets (e.g. `NOTION_TOKEN`) — gitignored via
  `.env*`, must never be committed.
- Old Next.js directories (`app/`, `components/`, `lib/`, `hooks/`, `data/`)
  have been removed as part of the Vite migration — do not recreate them.
