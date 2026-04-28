# Portfolio Roadmap

Tracker for ongoing improvements. Check items off as they ship.

Each phase is independently shippable — finish in any order, stop after any phase.

---

## Phase 1 — Foundations & quick wins

Small, high-value items. Each is 30 min – 2 hours.

- [x] **1.1 Resume integration** — PDF in `public/`, "View Resume" button in About section (opens in new tab)
- [x] **1.2 NieR-themed 404 page** — `src/pages/404.astro` with "MEMORY CORRUPTED" glitch headline + return-home link
- [x] **1.3 SEO + social sharing meta** — OG tags, Twitter card, canonical URL, description in `BaseLayout.astro`; `site` set in `astro.config.mjs` (https://bhlonggul.vercel.app); custom 1200×630 NieR menu OG card at `public/og-image.png`
- [x] **1.4 Sitemap + robots.txt** — `@astrojs/sitemap` integration + `public/robots.txt`
- [x] **1.5 `prefers-reduced-motion` support** — global CSS catchall disables all animations + transitions; boot overlay and glitch scramble are skipped in JS for reduced-motion users
- [x] **1.6 Vercel Analytics** — `@vercel/analytics` installed, `inject()` called from BaseLayout *(visit data starts flowing once enabled in Vercel dashboard after first deploy)*

---

## Phase 2 — NieR aesthetic flourishes

Pure visual identity. Pick the ones that excite you most; none are mandatory. **SFX explicitly excluded.**

- [x] **2.1 POD 042 companion** — bracket-framed bubble bottom-right with section-aware flavor text; click − to minimize, click `[ ◆ POD ]` tab to expand; persists across navigation via sessionStorage
- [x] **2.2 Section "load" transitions** — generic `[data-stagger]` mechanism in global.css; IntersectionObserver in BaseLayout adds `.revealed` when container enters viewport; applied to activity log, both skill grids, projects grid, contact channels
- [x] **2.3 Custom cursor** — `public/cursor.svg` (crosshair) for default + `public/cursor-pointer.svg` (corner-bracket reticle) over interactive elements; CSS-keyword fallbacks (`crosshair`, `pointer`); text-input I-beam preserved for form fields
- [x] **2.4 Boot sequence depth** — extended `BootSequence.astro` with BIOS line, hex checksums, neural-link simulated error w/ recovery, YoRHa protocol line; total runtime ~6.2s; new `--warn` token added to `global.css` for the error state
- [x] **2.5 Cycling lore footer** — 15-string lore array in `BaseLayout.astro`; server picks initial value, client script picks a fresh one on every page load; centered between `// END OF TRANSMISSION` and the year, stacks below on narrow screens
- [x] **2.6 Konami code → glitch mode** — keydown listener in `BaseLayout.astro` watches for ↑↑↓↓←→←→BA; toggles `body.glitch-mode` (heavier scanlines w/ rolling animation + warn/green RGB-shift text-shadow, all in `global.css`); state persists in `localStorage` under `glitch:mode`; `#glitch-toast` confirms ON/OFF for 1.5s; ignores keystrokes inside inputs/textareas/contenteditable

---

## Phase 3 — Content depth

The biggest lift. Turns the site from a portfolio *page* into a portfolio *project*.

- [x] **3.1 Project detail pages** — migrated to Astro content collection at `src/content/projects/<slug>.md` with typed schema in `src/content.config.ts`; dynamic route at `src/pages/projects/[slug].astro` renders glitch title, hero image w/ scanlines, four-section markdown body (Problem / Approach / Tech / Outcome), and a Links frame (Source / Live demo / Back to Archive); home cards now overlay-link to the case study while keeping the external Source link clickable on top; MenuNav anchors made absolute (`/#section`) so detail pages can navigate back to home sections; `summer-research-2025.md` left as a stub for Brian to fill in
- [x] **3.2 Astro Image optimization** — moved `brian.jpg` + 4 project thumbnails from `public/` to `src/assets/` (`brian.jpg` and `assets/projects/`); `content.config.ts` schema now uses the `image()` helper for build-time validation; `<img>` tags swapped for `<Image>` from `astro:assets` on home portrait, home project thumbs, and detail-page heroes; per-use widths (320 / 640 / 1280) generate two webp variants per image, with explicit `width`/`height` attributes preventing CLS; massive size wins (`brian.jpg`: 1633kB → 7kB; `travelbookers.png`: 761kB → 16–44kB; PNGs across the board ~75–98% smaller); `og-image.png`, favicon, cursors, and resume PDF stay in `public/` since they need stable absolute URLs
- [ ] **3.3 Real contact form** — Formspree or Vercel Forms; terminal-prompt styling; honeypot for spam; success page

---

## Phase 4 — Showcases (ongoing / optional)

Each is a small standalone feature. Add when you have content for it.

- [ ] **4.1 `/now` page** — what you're currently learning/building/playing
- [x] **4.2 GitHub activity panel** — build-time fetch of `https://api.github.com/users/bhlonggul/events/public` from `index.astro` frontmatter; filter to PushEvent / CreateEvent / PullRequestEvent (drops Watch/IssueComment/etc. noise); collapse consecutive PushEvents to the same repo+branch into a single line with summed +N count; render the top 6 entries as a NieR-style log (`[YYYY.MM.DD] TYPE ▸ repo // detail`) inside a new `Live Feed` `CornerFrame` in the hero, immediately below `Recent Activity`; repo name links to the repo on GitHub; small `> source: github.com/bhlonggul` caption at the top of the frame; graceful empty/error fallback (`> feed unavailable` or `> no recent public activity`) so the layout doesn't shift if the API request fails at build time; PushEvent detail uses the branch name (with optional `+N` commit count when GitHub provides it — merge-pushes from PRs no longer return `commits`/`size`)
- [ ] **4.3 Skills loadout re-skin** — restyle skills grid as YoRHa unit equipment screen
- [ ] **4.4 Devlog / blog** — second content collection at `src/content/posts/`; route at `src/pages/blog/[slug].astro`

---

## Suggested weekly cadence

- **Week 1:** Finish Phase 1 entirely
- **Week 2:** Phase 3.1 alone (biggest content lift)
- **Week 3:** 2–3 Phase 2 favorites
- **Week 4+:** Phase 3.2, 3.3, then Phase 4 as content piles up

## How to verify after each phase

1. `npm run dev` — walk through every section + new route at desktop and mobile widths
2. `npm run build && npm run preview` — confirm production build is clean
3. Phase 1: DevTools → Lighthouse → target 90+ on Performance, SEO, Accessibility
4. Phase 2: enable "Reduce motion" in OS or DevTools → Rendering, confirm animations actually disable
5. Phase 3: deploy a Vercel preview branch, submit the contact form for real
6. Commit + deploy to Vercel main after each phase

---

*Full design rationale lives in the plan file at `~/.claude/plans/idk-where-my-claude-md-reactive-peacock.md` (not in repo). This file is the working tracker.*
