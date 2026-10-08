# AURA case — update 10: hero video (replaces the hero image)

Apply after the other updates. Scope: hero media only. This is the hero part that was skipped in update 08 — use these files (new final video), not anything from update 08.

## 1. Assets
Copy `update-10/assets/*` into the case `assets/` folder (same folder as the other AURA videos):
- `hero-4k.mp4` — 3840×2160, 60 fps, original file, untouched (23 MB)
- `hero-1080.mp4` — 1920×1080, 60 fps, for screens < 900 px (16 MB)
- `hero.webp` — poster frame

## 2. HTML (hero)
Replace the current hero image figure (the `<figure …>` with the laptop image right after the hero meta/about block; there may be a `<!-- VIDEO SLOT · hero … -->` comment above it — remove it too) with:
```html
  <figure class="frame frame--bleed"><video class="hero-video" data-auto autoplay muted loop playsinline preload="auto" poster="assets/hero.webp" width="3840" height="2160" aria-label="AURA desktop: full product overview">
    <source src="assets/hero-1080.mp4" type="video/mp4" media="(max-width: 899px)">
    <source src="assets/hero-4k.mp4" type="video/mp4">
  </video></figure>
```
Keep the hero container's current classes/styling from the site if they differ — only the image is swapped for the video.

## 3. CSS
Next to the existing `.frame--bleed` rules add:
```css
.frame--bleed > video{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;background:#000}
```
No JS changes: the video uses the existing `video[data-auto]` logic (plays when visible, pauses off-screen). If the page has no such logic, the `autoplay muted loop playsinline` attributes are enough.

## Check
- Hero shows the poster immediately, then plays muted in a loop; no layout shift.
- Desktop loads hero-4k.mp4, phones load hero-1080.mp4.
- The old hero image file can be deleted if nothing else uses it.
- Show me the diff before merging into main.
