# AURA case — update 09: Maze video without frame

Apply after update-08. Scope: the Maze report video in section 08 (Usability testing). No new assets.

## HTML
Replace:
```html
<figure class="frame frame--video"><video src="assets/maze.mp4" poster="assets/maze.webp" width="1920" height="1064" muted loop playsinline controls preload="metadata" data-auto aria-label="Maze usability test report recording"></video></figure>
```
with:
```html
<figure class="media-plain"><video src="assets/maze.mp4" poster="assets/maze.webp" width="1920" height="1064" muted loop playsinline preload="metadata" data-auto aria-label="Maze usability test report recording"></video></figure>
```

## CSS
Right after `.frame--bleed > video{…}` add:
```css
/* video shown on its own, no surrounding frame — same width as the hero video */
.media-plain{margin:0;border-radius:var(--r);overflow:hidden;background:#fff}
.media-plain > video{display:block;width:100%;height:auto;aspect-ratio:1920/1064;object-fit:cover}
```

## Check
- Maze video has no dark frame/padding, rounded corners only, full content width — same width as the hero video (1128 px at ≥1400 px).
- 375 / 768 / 1024 / 1440 px: no horizontal scroll; video scales with the column.
