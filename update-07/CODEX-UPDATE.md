# AURA case — update 07: wireframe videos (Mobile / Desktop) + clear Concepts vs Wireframes titles

Apply after update-06. Scope: section 05 "Concept & wireframe" only.

## 1. Assets
Copy `update-07/assets/*` into the case `assets/` folder:
- `wire-mobile.mp4` + `wire-mobile.webp` (poster)
- `wire-desktop.mp4` + `wire-desktop.webp` (poster)

Both are 1920×1426 (same ratio as the Core experience videos), H.264, 30 fps, no audio. The mobile one is cropped in width so the phone has the same size as in section 07.
`assets/wireframe.webp` is no longer used — it can be deleted.

## 2. HTML
Replace the whole `<section class="sec wrap" id="concept">…</section>` with:
```html
<section class="sec wrap" id="concept">
  <div class="head"><span class="eyebrow"><b>05</b>Concept &amp; wireframe</span></div>
  <div class="body cw">
    <div class="cw-col">
      <div class="colh"><div><h2>Concepts</h2><p>3 directions for the AI’s role</p></div></div>
      <div class="concepts">
      <div class="concept"><span class="n">01</span><div><h3>Chat-first AI</h3><p>Ask AURA → type question → answer</p><p class="why">Required users to know what to ask and hid proactive value.</p></div></div>
      <div class="concept"><span class="n">02</span><div><h3>Insight-first AI</h3><p>Detects opportunity → explains → action</p><p class="why">AURA became proactive instead of reactive.</p></div></div>
      <div class="concept chosen"><span class="n">03</span><div><h3>Controlled autonomy<span class="badge"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.4l3 3 6-6.6"/></svg>Chosen</span></h3><p>Suggest → Ask before acting → Automatic within limits</p><p class="why">Automation became a spectrum, not an on/off permission.</p></div></div>
      </div>
    </div>
    <div class="cw-col wf">
      <div class="colh"><div><h2>Wireframes</h2><p>Low-fidelity · chosen concept</p></div>
        <div class="seg" role="group" aria-label="Device"><button type="button" data-device="mobile" aria-pressed="true">Mobile</button><button type="button" data-device="desktop" aria-pressed="false">Desktop</button></div></div>
      <div class="stage stage--video">
        <video class="pv" data-set="mobile" data-auto src="assets/wire-mobile.mp4" poster="assets/wire-mobile.webp" width="1920" height="1426" muted loop playsinline preload="none" aria-label="Mobile wireframes walkthrough"></video>
        <video class="pv" data-set="desktop" data-auto src="assets/wire-desktop.mp4" poster="assets/wire-desktop.webp" width="1920" height="1426" muted loop playsinline preload="none" aria-label="Desktop wireframes walkthrough"></video>
      </div>
    </div>
  </div>
</section>
```
The Mobile/Desktop tabs use the existing device toggle (same JS, same `body[data-device]` logic as Core experience) — no JS changes. The videos auto-play/pause via the existing `video[data-auto]` logic.

## 3. CSS
Add before the "Information architecture" block:
```css
.cw{display:grid;grid-template-columns:minmax(240px,1fr) minmax(0,2.5fr);gap:clamp(24px,3.4vw,56px);align-items:start}
.cw-col{display:grid;gap:clamp(16px,2vw,24px);align-content:start;min-width:0}
.colh{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;min-height:clamp(64px,6vw,78px);padding-bottom:clamp(14px,1.6vw,20px);border-bottom:1px solid var(--line)}
.colh h2{font:400 clamp(28px,2.8vw,40px)/1.05 var(--display);letter-spacing:-.035em}
.colh p{margin-top:8px;color:var(--muted);font-size:var(--t-sm);line-height:1.3}
.wf{justify-self:center;width:100%}
.concepts .concept:first-child{border-top:0}
```
Inside `@media (min-width:900px) and (min-height:640px) and (prefers-reduced-motion:no-preference)`, right after the `#core.is-pinned .stage--video{…}` line:
```css
  #concept .wf{width:min(100%,calc((100svh - 250px) * 1.3464))}
```
Inside `@media (max-width:899px)` add:
```css
  .cw{grid-template-columns:1fr}
```

## Check
- Wireframes frame has exactly the same size as the Core experience frame at every width (verified 390–1920 px).
- Mobile/Desktop tabs above the frame switch the wireframe video (and stay in sync with section 07).
- "Concepts" (left) and "Wireframes" (right) titles on one line; on phones stacked.
