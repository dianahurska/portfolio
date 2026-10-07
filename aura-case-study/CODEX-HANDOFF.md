# AURA case study — handoff for Codex

Target: the portfolio site (plain HTML, CSS and JavaScript, no frameworks, no build step, content rendered from `content.js`, hosted on GitHub Pages, published by push to `main`).

## What is in this package

| File | Purpose |
|---|---|
| `index.html` | Complete, working case page. Open it directly in a browser to see the approved result. |
| `css/aura-case.css` | All styles for the case page. |
| `js/aura-case.js` | All behaviour: device toggle, pinned sections, horizontal gallery, scroll reveal, number count-up. No dependencies. |
| `assets/*.webp` | Product screens, wireframe, Maze report and Google Forms screenshots. The information architecture is built in HTML, so `ia.webp` is unused. |

## Task

Add this case study to the site as a new case page, visually identical to `index.html` in this package.

1. Create the case page in the same place and with the same URL pattern as the existing case pages.
2. Keep the markup of `<main>` exactly as is. Do not rewrite copy: every text string is approved content.
3. Wrap the page with the site's own header/navigation, "next project" block and footer (see the two HTML comments in `index.html`).
4. Add the case to the work list / home page the same way the other cases are registered (`content.js`).
5. If the site renders case bodies from `content.js`, either (a) move the content into `content.js` following the existing schema, or (b) keep this page as static HTML and only register its card in `content.js`. Prefer (b) unless the schema already supports these block types; do not flatten the layout to fit the schema.

## CSS integration — read before merging

- `aura-case.css` is written as a standalone stylesheet. It sets rules on `body`, `img`, `p`, `h1`–`h3`, `ul`, `ol` and uses short class names (`.sec`, `.head`, `.label`, `.tile`, `.tiles`, `.list`, `.num`, `.frame`, `.phone`, `.stage`, `.pin`, `.badge`, `.chip`, `.note`).
- Load it **only on the case page**. If it must coexist with the site's global CSS on the same page, check for collisions with those names; if any collide, scope this file under a wrapper class on `<main>` rather than renaming classes one by one.
- Design tokens are CSS custom properties in `:root` at the top of the file. Map them to the site's tokens where the site already has equivalents:

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0d0d0d` | page background |
| `--surface` / `--surface-2` | `#161616` / `#1f1f1f` | tiles, hover |
| `--fg` / `--muted` / `--faint` | `#ededed` / `#9b9b9b` / `#5c5c5c` | text levels |
| `--blue` / `--blue-soft` / `--blue-deep` | `#4b57ff` / `#6072ff` / `#1b2063` | accent, accent text, funnel end |
| `--r` / `--r-in` | `16px` / `8px` | surface radius / image radius |
| `--max` / `--gutter` | `1240px` / `clamp(16px,4vw,56px)` | content width / side padding |
| `--display`, `--body` | Inter | **replace with the site's font family** |

- Font: the page loads Inter from Google Fonts as a stand-in. Replace `--display` and `--body` with the site's real font and remove the Google Fonts `<link>` if the site self-hosts fonts.
- Icons are inline SVG symbols defined once at the top of `<main>` (`<symbol id="i-…">`). Replace with the site's icon set if it has one; keep sizes.

## JavaScript integration

- `aura-case.js` is one IIFE with no globals and no dependencies. Load it at the end of `<body>` on the case page only.
- It sets `document.body.dataset.device` (`mobile` / `desktop`) and adds `js-rv` to `<html>`. If the site's JS uses the same names, rename here.
- Pinned sections and the scroll-driven gallery turn on only at `min-width: 900px` and `min-height: 640px` and never under `prefers-reduced-motion: reduce`. Below that everything is a normal vertical page. Keep this behaviour.
- If the site uses smooth-scroll or a scroll library, make sure it still fires native `scroll` events on `window`; the pinned sections read `getBoundingClientRect()` on scroll.

## Media to replace (owner will supply files)

Search the HTML for these comments:

| Comment | Replace with |
|---|---|
| `VIDEO SLOT · hero` | autoplay muted looped video of the laptop, poster = `assets/hero-laptop.webp` |
| `VIDEO SLOT · wireframes` | wireframes video |
| `VIDEO SLOT · Maze recording` | Maze test recording with controls, poster = `assets/maze-report.webp` |
| `PROTOTYPE SLOT · flow 1 / 2 / 3` | recorded prototype per flow; keep the Mobile / Desktop toggle (two sources per flow) |

Until files arrive, leave the current images in place. Use `<video playsinline muted loop preload="metadata">` and lazy-load everything below the hero.

## Responsive behaviour (already implemented, verify after merge)

| Width | Behaviour |
|---|---|
| ≥ 900 px (and height ≥ 640 px) | pinned Core experience and Iterations with vertical pager; gallery scrolls horizontally with page scroll |
| 761–899 px | no pinning; text above mockups; IA tree becomes a 2-column list; outcome rows stack heading above content |
| ≤ 760 px | single column everywhere; tables become stacked rows with inline labels; gallery is a native horizontal swipe |

No horizontal page scroll at 390, 768, 1024 or 1440 px.

## Acceptance checklist

- [ ] Page looks the same as `index.html` from this package at 1440, 1024, 768 and 390 px.
- [ ] Site header, footer and "next project" block are present and styled as on other case pages.
- [ ] Section numbers run 01–10 in order.
- [ ] Device toggle switches every flow; pager dots jump between slides; numbers count up once.
- [ ] With "reduce motion" enabled nothing is hidden and nothing is pinned.
- [ ] No console errors; no 404 for assets; all images have `alt`.
- [ ] Case card appears on the work list and links to the page.
- [ ] Nothing in other pages changed visually (CSS did not leak).

## Do not

- Do not change copy, numbers, or section order.
- Do not add frameworks, npm packages or a build step.
- Do not convert the layout to a different grid or "simplify" pinned sections.
