# AURA case — update 08: hero video (4K) + high-quality wireframe videos

Apply after update-07. Scope: hero media + replace the two wireframe videos. No other changes.

## 1. Assets
Copy `update-08/assets/*` into the case `assets/` folder (overwrite existing files):
- `hero-4k.mp4` — original 3840×2160, 60 fps, untouched stream (no re-encode, no quality loss), moov at start for fast playback
- `hero-1080.mp4` — 1920×1080, 60 fps, high quality, used on screens < 900 px
- `hero.webp` — poster frame
- `wire-mobile.mp4`, `wire-desktop.mp4` + `.webp` posters — re-encoded at 60 fps, higher quality (replace the update-07 versions)

`assets/hero-laptop.webp` is no longer used — it can be deleted.

## 2. HTML (hero)
Replace the hero comment + figure:
```html
  <!-- VIDEO SLOT · hero: ... -->
  <figure class="frame frame--bleed"><img src="assets/hero-laptop.webp" ...></figure>
```
with:
```html
  <figure class="frame frame--bleed"><video class="hero-video" data-auto autoplay muted loop playsinline preload="auto" poster="assets/hero.webp" width="3840" height="2160" aria-label="AURA desktop: full product overview">
    <source src="assets/hero-1080.mp4" type="video/mp4" media="(max-width: 899px)">
    <source src="assets/hero-4k.mp4" type="video/mp4">
  </video></figure>
```

## 3. CSS
Right after `.frame--bleed{padding:0} .frame--bleed > img{border-radius:0}` add:
```css
.frame--bleed > video{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;background:#000}
```
No JS changes: the hero video uses the existing `video[data-auto]` logic (plays when visible, pauses off-screen).

## Check
- Hero: 4K video on desktop, 1080p on phones; plays muted in a loop; no layout shift (poster shown first).
- Wireframes Mobile/Desktop play smoothly at 60 fps.
- Keep files under Git LFS limits: largest file is 29.6 MB (fine for GitHub, < 50 MB).
