# HANDOFF — b1scu1tk1d

**One-liner:** A cinematic, retro-terminal personal archive site ("Cool Biscuits from the Internet") that publishes daily "transmissions," a curated link feed, and a downloads toolbox — and funnels to the owner's Magik Terminal product.
**Status:** live — ~85% to shippable (static site auto-deploys to GitHub Pages; content is hardcoded, monetization not wired)
**Monetization:** No direct revenue mechanism today; it is a brand/content funnel for Magik Terminal (owner's free MIT product) and curated tools — monetizable via sponsorships, affiliate links, or product upsell.

## What it is
A Next.js static-export site with a persona ("W1d0wm4k3r") publishing 22 dated blog "transmissions," a 10-item curated "biscuits" link feed, and a `/downloads` page of 16 security/OSINT/local-AI tools plus 6 bundled PDF guides. Heavy on aesthetic: amber/cyan neon, scanlines, grain, and an animated ASCII ocean with sharks. All content lives in TypeScript arrays — no CMS or backend.

## Who pays & why
Nobody pays directly. The audience is security/OSINT/local-AI hobbyists; the site builds an audience and drives downloads of Magik Terminal and affiliate-able tools. Revenue would come from sponsors, affiliate/referral links, or conversion to a paid product — none of which is instrumented yet.

## Stack
Next.js 16.3.6 + React 19 + TypeScript; Tailwind 4, shadcn/base-ui, lucide-react, motion; Bun package manager; static export (`output: "export"`, unoptimized images); GitHub Actions → GitHub Pages. Custom ASCII-ocean engine in `src/components/ascii-ocean/`.

## Architecture
Content-as-data (`src/lib/posts.ts`, `biscuits.ts`, `downloads.ts`) → rendered by client pages (`src/app/page.tsx` home: hero + transmissions + feed; `src/app/downloads/page.tsx` + `src/components/magik-download.tsx`) → static export to `./out` → deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`. Static PDFs served from `public/downloads/`.

## What works today
- Full site builds and auto-deploys to GitHub Pages on push to `main` (Bun + Next static export).
- Home (hero, animated ASCII ocean, transmissions, biscuit feed) and `/downloads` with 16 tools + 6 bundled PDF guides.
- Magik Terminal promo block linking to real GitHub release downloads (Windows/Mac).
- 22 posts + 10 biscuits authored; consistent retro-terminal design system.

## Gaps to ship (ranked)
1. No monetization instrumented — add affiliate/referral links, sponsor slots, and analytics to measure the funnel.
2. Content is hardcoded TS arrays (no CMS) — every post/biscuit is a code change + redeploy; no RSS/feed.
3. SEO/discovery gaps: per-page metadata/OG images, sitemap, and the custom domain (`b1scu1tk1d.com` is referenced but not configured in-repo); no analytics.

## Run it
```bash
bun install
bun run dev          # http://localhost:3000
bun run build        # static export to ./out
bun run lint
```

## Risks / unknowns
- Monetization unproven; audience size/traffic unknown (no analytics in the repo).
- Custom domain `b1scu1tk1d.com` and contact email are referenced but DNS/mail are not configured here.
- Content mixes real security/OSINT tooling with an edgy hacker aesthetic — review for brand/legal fit before courting sponsors.
- Next.js 16 is bleeding-edge (`AGENTS.md` warns APIs differ from training data); upgrades/plugins may break the static export.

## Fastest path to revenue
1. Add affiliate/referral links to the high-intent `/downloads` tools and track clicks.
2. Instrument analytics + an email capture ("send biscuits") to build a list.
3. Sell a sponsor slot in the daily transmission / feed once traffic is demonstrated.
