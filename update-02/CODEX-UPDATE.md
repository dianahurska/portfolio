# AURA case — update 02: prototype videos and Maze recording

Scope: Core experience (3 flows) and the Maze block in Usability testing. Nothing else changes.
If an earlier version of this update was already applied, re-apply this one: it describes the final state.

## 1. Add files
Copy everything from `assets/` into the case page's assets folder:
`flow1-mobile.mp4`, `flow1-desktop.mp4`, `flow2-mobile.mp4`, `flow2-desktop.mp4`, `flow3-mobile.mp4`, `flow3-desktop.mp4`, `maze.mp4` and a `.webp` poster for each.
All are H.264 MP4, 1920 px wide, no audio, `faststart`, 2–4.5 MB each.

## 2. Core experience: replace each flow's stage
In each of the three `.pin-item` articles of `#core`, replace the whole stage block (the old `<div class="stage">…</div>` with the `.device` / `.shots` image sequences) with the matching block below. The Mobile/Desktop toggle now sits **above** the video, outside the frame.

Flow 1:
```html
<div class="stage-wrap">
            <div class="seg" role="group" aria-label="Device"><button type="button" data-device="mobile" aria-pressed="true">Mobile</button><button type="button" data-device="desktop" aria-pressed="false">Desktop</button></div>
            <div class="stage stage--video">
            <video class="pv" data-set="mobile" data-auto src="assets/flow1-mobile.mp4" poster="assets/flow1-mobile.webp" width="1920" height="1426" muted loop playsinline preload="none" aria-label="Mobile prototype: From insight to confident action"></video>
            <video class="pv" data-set="desktop" data-auto src="assets/flow1-desktop.mp4" poster="assets/flow1-desktop.webp" width="1920" height="1426" muted loop playsinline preload="none" aria-label="Desktop prototype: From insight to confident action"></video>
            </div>
          </div>
```

Flow 2:
```html
<div class="stage-wrap">
            <div class="seg" role="group" aria-label="Device"><button type="button" data-device="mobile" aria-pressed="true">Mobile</button><button type="button" data-device="desktop" aria-pressed="false">Desktop</button></div>
            <div class="stage stage--video">
            <video class="pv" data-set="mobile" data-auto src="assets/flow2-mobile.mp4" poster="assets/flow2-mobile.webp" width="1920" height="1426" muted loop playsinline preload="none" aria-label="Mobile prototype: Automation that earns trust"></video>
            <video class="pv" data-set="desktop" data-auto src="assets/flow2-desktop.mp4" poster="assets/flow2-desktop.webp" width="1920" height="1426" muted loop playsinline preload="none" aria-label="Desktop prototype: Automation that earns trust"></video>
            </div>
          </div>
```

Flow 3:
```html
<div class="stage-wrap">
            <div class="seg" role="group" aria-label="Device"><button type="button" data-device="mobile" aria-pressed="true">Mobile</button><button type="button" data-device="desktop" aria-pressed="false">Desktop</button></div>
            <div class="stage stage--video">
            <video class="pv" data-set="mobile" data-auto src="assets/flow3-mobile.mp4" poster="assets/flow3-mobile.webp" width="1920" height="1426" muted loop playsinline preload="none" aria-label="Mobile prototype: Ask naturally. Act faster."></video>
            <video class="pv" data-set="desktop" data-auto src="assets/flow3-desktop.mp4" poster="assets/flow3-desktop.webp" width="1920" height="1426" muted loop playsinline preload="none" aria-label="Desktop prototype: Ask naturally. Act faster."></video>
            </div>
          </div>
```

Layout: text column on the left (vertically centred, labels stacked above their text), large video frame on the right (about 70% of the width). The video fills the frame edge to edge, no black side bars; the frame keeps the video's aspect ratio 1920/1426.

## 3. Usability testing: Maze recording
Replace the Maze `<figure class="frame frame--video">…<img …maze-report.webp…></figure>` (and its `VIDEO SLOT` comment) with:
```html
<figure class="frame frame--video"><video src="assets/maze.mp4" poster="assets/maze.webp" width="1920" height="1064" muted loop playsinline controls preload="metadata" data-auto aria-label="Maze usability test report recording"></video></figure>
```

## 4. CSS — add to the case stylesheet
```css
.stage--video{display:block;padding:0;aspect-ratio:1920/1426;background:#000;isolation:isolate}
.stage--video .pv{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:none}
body[data-device="mobile"] .stage--video .pv[data-set="mobile"],body[data-device="desktop"] .stage--video .pv[data-set="desktop"]{display:block}
.stage-wrap{display:grid;gap:14px;justify-items:center;align-content:center;min-width:0}
.stage-wrap .stage{width:100%}
#core .pin-item{grid-template-columns:minmax(240px,1fr) minmax(0,2.5fr);gap:clamp(24px,3.4vw,56px);align-items:center}
#core .copy{align-self:center}
#core .facts > div{grid-template-columns:1fr;gap:6px}
#core .copy h2{max-width:none}
.frame--video > video{width:100%;height:auto;display:block;border-radius:var(--r-in);box-shadow:0 30px 80px -30px rgba(0,0,0,.8)}
```
Inside the existing `@media (min-width:900px) and (min-height:640px) and (prefers-reduced-motion:no-preference)` block add:
```css
#core.is-pinned .pin-item{align-items:center}
  #core.is-pinned .stage-wrap{align-self:center}
  #core.is-pinned .stage--video{height:auto;width:min(100%,calc((100svh - 250px) * 1.3464))}
```
In the `@media (max-width:899px)` block make sure `#core .pin-item` is also single-column:
```css
.pin-item,#core .pin-item,.cols.t5,.cols.t7{grid-template-columns:1fr}
```

## 5. JS — add to the case script
Add near the top of the IIFE (after `reduce`, `wide`, `clamp`, `progress` are defined):
```js
  /* Prototype videos: play only the one that is visible */
  var vids = [].slice.call(document.querySelectorAll('video[data-auto]'));
  var pinnedNow = function(){ return document.querySelector('.pin.is-pinned') !== null; };
  var syncVideos = function(){
    vids.forEach(function(v){
      var item = v.closest('.pin-item'), r = v.getBoundingClientRect();
      var shown = v.offsetParent !== null && (!item || !pinnedNow() || item.classList.contains('is-active'));
      var inView = r.bottom > 0 && r.top < innerHeight && r.width > 0;
      if (shown && inView && !reduce) { if (v.paused) { var pr = v.play(); if (pr && pr.catch) pr.catch(function(){}); } }
      else if (!v.paused) v.pause();
    });
  };
  if (reduce) vids.forEach(function(v){ v.controls = true; });
```
Then:
- in the device-toggle click handler, call `syncVideos();` after updating `aria-pressed`;
- in the `scroll` listener's `requestAnimationFrame` callback, call `syncVideos();` after `onScroll();`;
- add `addEventListener('load', syncVideos); setTimeout(syncVideos, 300);`.

Behaviour: only the video that is on screen, in the active pinned slide and matching the Mobile/Desktop toggle plays; all others pause. Videos are muted and loop. With reduced motion they do not autoplay and show controls.

## 6. Cleanup (optional)
Core experience no longer uses the image sequences, so `.shots` / `.device` CSS for `#core` and the `setInterval` that rotated `.shots img` can be removed. Do not delete `m-*.webp` / `d-*.webp` if other sections still reference them (search first). `maze-report.webp` is no longer referenced.

## Check
- 1440 px: big video frame on the right, toggle above it, text centred vertically on the left; toggle switches Mobile/Desktop; video loops.
- 1024 px: same layout, text not cramped.
- 390 px: text, then toggle, then video, full width.
- Safari iOS: videos play inline (`muted` + `playsinline` are set).
- No 404s, no console errors.
