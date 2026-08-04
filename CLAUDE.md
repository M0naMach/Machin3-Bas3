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
- `VOL-04-PUBLIC` (UID PUBL) — public static assets (`publicDir` in
  `vite.config.ts`). Kept strictly for served assets — do not repurpose.
  It contains its own internal 14-volume subdivision for organizing
  page-specific public assets: `VOL-01-HOOD`, `VOL-02-COMMUNITY`,
  `VOL-03-CONTEXT`, `VOL-05-USER`, `VOL-06-APPLICATIONS`, `VOL-07-PAPERWORK`,
  `VOL-08-KNOWLEDGE_BASE`, `VOL-09-AUTOMATIONS`, `VOL-10-TERMINAL_CONTROL`,
  `VOL-11-LIBRARY`, `VOL-12-COMMERCIAL`, `VOL-13-CNVS` (art), `VOL-14-SERVER`.
  Volume 4 is the container itself, so it isn't nested inside itself.
- `VOL-MBBS` — Machin3-Bas3 Broadcasting Station: social/external presence
  links (Reddit, etc). Separate top-level volume, distinct from and not
  nested inside `VOL-04-PUBLIC` — one holds served assets, the other holds
  outbound social links.
- No symlinks — the user has explicitly rejected symlink-based setups.

## Notes

- `.env.local` contains secrets (e.g. `NOTION_TOKEN`) — gitignored via
  `.env*`, must never be committed.
- Old Next.js directories (`app/`, `components/`, `lib/`, `hooks/`, `data/`)
  have been removed as part of the Vite migration — do not recreate them.

## Deployment (Cloudflare Pages)

- Build command should be `npm run build` (runs `tsc -b && vite build`),
  output directory `dist`. This is a plain Vite build, not Next.js.
- **Known issue (2026-08-02):** the Cloudflare Pages project's dashboard
  build settings still had a leftover Next.js-era build command
  (`npx @cloudflare/next-on-pages@1`), which fails outright — that package
  isn't a dependency anymore. This setting lives in the Cloudflare dashboard
  (Pages project → Settings → Builds & deployments), not in the repo, so it
  can't be fixed via a commit. The user needs to change it there to
  `npm run build` / output dir `dist` / framework preset "None" or "Vite".
- `wrangler.jsonc` must stay minimal for Pages: only `name` and
  `pages_build_output_dir`. Cloudflare's Pages config validator rejects a
  top-level `observability` block ("Configuration file for Pages projects
  does not support 'observability'") and requires `name` to be present —
  learned 2026-08-04 after a build failure. Don't add Workers-style fields
  (`observability`, `durable_objects`, etc.) here; this is a Pages project,
  not a Workers project.
- `wrangler.jsonc`'s `"name"` field is `"audit-proxy"`, not `"machin3-bas3"`.
  This must match the actual Cloudflare Pages project name Cloudflare has
  registered — Cloudflare itself flagged the mismatch and requested this
  exact value. Don't rename it back to match the repo name.
- The Pages project's **Deploy command** (separate from Build command) must
  be `npx wrangler pages deploy dist`, not the default `npx wrangler deploy`
  — the latter is for Workers and fails with "Missing entry-point to Worker
  script" since this is a static Pages site, not a Worker. This is also a
  dashboard-only setting (Settings → Builds & deployments → Deploy command).
