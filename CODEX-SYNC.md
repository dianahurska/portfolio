# AURA case — sync guide for Codex (updates 01–09)

The live AURA page on the site was changed after the original handoff (site header/footer, paths, content.js, other fixes).
**Those site changes must be kept.** Do NOT overwrite index.html / CSS / JS with any packaged file.
Apply only the missing updates, as targeted edits, adapting selectors/paths to the current code.

## Step 1 — work on a branch
Create branch `aura-updates` from main. Do not push to main until I approve the diff.

## Step 2 — audit: which updates are already in the live page?
For each update, check the marker in the current code and report a table: update → applied / not applied / partly.

| Update | What | Marker to check in current code |
|---|---|---|
| 01 | Gallery mockups | gallery uses `assets/g01.webp` … `g14.webp` |
| 02 | Prototype videos + Maze + Core layout | `assets/flow1-mobile.mp4` … `flow3-desktop.mp4`, `assets/maze.mp4` |
| 03 | IA tree + before/after frame | `.tree`, `.branches`, `.stage--ba` exist |
| 04 | IA connector lines + studio background | `.branch::before` rule; `assets/ba-studio.webp` in `.stage--ba` background |
| 05 | Clean mockups + IA fit | no `grayscale`/`drop-shadow` on `.ba` images; `centreTree` adds class `is-fit` |
| 06 | Shadows left, bigger frame, IA type, 10px minimum | `.ba figure::after` has `skewX(-75deg)`; `.node.leaf` font-size `13.5px`; `ratio * leaf >= 10.5` in `centreTree` |
| 07 | Wireframe videos + Concepts/Wireframes titles | `assets/wire-mobile.mp4`; class `.cw` |
| 08 | Hero 4K video | `assets/hero-4k.mp4`; `.hero-video` |
| 09 | Maze video without frame | class `.media-plain` |

## Step 3 — apply what is missing
Apply only the missing updates, in order (lowest number first), following each `update-0N/CODEX-UPDATE.md`.
- If a selector or snippet in an update does not match the current code exactly, find the equivalent element and apply the same visual result. Do not rewrite unrelated code.
- Copy each update's `assets/` into the case `assets/` folder (overwrite same names).
- Keep everything else on the page as it is now (header, footer, navigation, content.js, other cases, paths).

## Step 4 — check and report
- Page opens with no console errors; no horizontal scroll at 375 / 768 / 1024 / 1440 px.
- All videos load (hero, wireframes, Core experience, Maze); no broken image/video paths.
- Show me the full diff and the audit table. Wait for my OK, then merge into main.
- After merge, delete the `update-0N` folders and this file from the repo (they are instructions, not site files).
