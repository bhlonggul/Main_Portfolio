# Main_Portfolio

Personal portfolio site for **Brian Hlonggul** — CS undergrad at Cal State Fullerton.
Static site, single page with anchor-scrolled sections plus per-project case study pages.

🌐 Live: [bhlonggul.vercel.app](https://bhlonggul.vercel.app)

## Stack

- **[Astro](https://astro.build) 6** — static site generator
- **TypeScript** — for content collections + small bits of logic
- **Vercel** — hosting + analytics
- **VT323** + **Share Tech Mono** (Google Fonts) — terminal-y type
- **Lighthouse CI** — perf / a11y / SEO gates on every push

No CSS framework; all styles are scoped per `.astro` file with a small set of tokens in `src/styles/global.css`.

## Run locally

Requires Node `>=22.12.0`.

```bash
npm install     # first time only
npm run dev     # http://localhost:4321
npm run build   # production build → dist/
npm run preview # serve dist/ locally
npm run check   # astro type-check
```

## Project structure

```
src/
├── pages/
│   ├── index.astro              # home (hero, about, projects, contact)
│   ├── 404.astro
│   └── projects/[slug].astro    # case-study pages, generated from content collection
├── layouts/
│   └── BaseLayout.astro         # <head>, MenuNav, BootSequence, footer
├── components/
│   ├── BootSequence.astro       # session-gated boot overlay
│   ├── CornerFrame.astro        # bracket-cornered card
│   ├── GlitchText.astro         # character-scramble heading
│   ├── MenuNav.astro            # sticky nav with scroll-spy
│   └── Pod042.astro             # easter-egg companion
├── content/
│   └── projects/                # one MDX/MD file per case study
├── lib/seo.ts                   # JSON-LD helpers
└── styles/global.css            # color tokens, base styles, scanlines
```

## Easter eggs

- The **Konami code** (↑↑↓↓←→←→ B A) toggles glitch mode (heavier scanlines + RGB shift).
- A boot sequence plays once per session on first visit.

## Deploy

Pushes to `main` deploy to Vercel automatically. CI (`.github/workflows/ci.yml`) runs type-check, build, and Lighthouse CI on every push and PR — Lighthouse asserts performance ≥ 0.9 and accessibility / SEO ≥ 0.95.

## Roadmap

Active improvement plan lives in [`ROADMAP.md`](./ROADMAP.md).
