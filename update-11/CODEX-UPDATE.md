# AURA — update 11: case cover image on Home and Work pages

Scope: the AURA case card/preview on the Home page and on the Work page. Nothing else changes.

## 1. Assets
Copy `update-11/assets/*` into the AURA case assets folder (same folder as the other AURA images):
- `aura-cover.webp` — 2400×1684 (for large / retina screens)
- `aura-cover-1200.webp` — 1200×842 (for phones / small cards)

## 2. Where to use it
Find how the AURA case card is defined (likely in `content.js` — the cases list used by Home and Work; or directly in the Home/Work HTML).
Set the AURA cover to this image in **both** places (Home and Work). If both pages read from the same data in content.js, change it once there.

Use the same markup/pattern the other case cards already use. If the card renders an `<img>`, use:
```html
<img src="<assets-path>/aura-cover-1200.webp"
     srcset="<assets-path>/aura-cover-1200.webp 1200w, <assets-path>/aura-cover.webp 2400w"
     sizes="(max-width: 900px) 100vw, 50vw"
     width="2400" height="1684" alt="AURA — AI Financial Agent case study cover" loading="lazy">
```
If the data only takes one image path, use `aura-cover.webp`.

## 3. Fit
- Keep the card's existing aspect ratio, radius, hover and animation exactly as the other cards.
- The image is ~10:7. If the card ratio is different, use `object-fit: cover; object-position: center;` — do not stretch.
- Remove the old AURA placeholder/preview image reference if it is no longer used.

## Check
- Home and Work: AURA card shows the new cover, sharp on retina, same size/behaviour as other cards.
- Clicking the card still opens the AURA case page.
- 375 / 768 / 1440 px: no distortion, no layout shift.
- Show me the diff before merging into main.
