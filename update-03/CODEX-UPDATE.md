# AURA case — update 03: information architecture + before/after frames

Scope: section 06 Information architecture and section 09 Iterations. Nothing else changes.
This file describes the final state; if an earlier version of update-03 was applied, re-apply this one.

## 1. Add files
Replace in the case assets folder: `it1-before.webp`, `it1-after.webp`, `it2-before.webp`, `it2-after.webp`, `it3-before.webp`, `it3-after.webp` (new mockups with iPhone frame, transparent corners).

## 2. Information architecture
Same top-down tree on every screen size. Columns are sized by their content, so labels never overlap. When the tree is wider than the screen it scrolls horizontally inside its own row (page itself never scrolls sideways), starts centred on Home, and both edges fade.

Replace the IA body (`<div class="body tree" …>…</div>`) with:
```html
<div class="body tree-scroll"><div class="tree" role="img" aria-label="Information architecture: Home branches into Assets (Cash, Investments, Crypto), AI (Insights, Chat, Voice), Activity (Transactions, AI actions) and Control (Autonomy, Permissions, Limits)">
    <div class="tree-root"><span class="node root">Home</span></div>
    <div class="branches">
      <div class="branch" style="--n:3"><span class="node">Assets</span><ul><li><span class="node leaf">Cash</span></li><li><span class="node leaf">Investments</span></li><li><span class="node leaf">Crypto</span></li></ul></div>
      <div class="branch" style="--n:3"><span class="node">AI</span><ul><li><span class="node leaf">Insights</span></li><li><span class="node leaf">Chat</span></li><li><span class="node leaf">Voice</span></li></ul></div>
      <div class="branch" style="--n:2"><span class="node">Activity</span><ul><li><span class="node leaf">Transactions</span></li><li><span class="node leaf">AI actions</span></li></ul></div>
      <div class="branch" style="--n:3"><span class="node">Control</span><ul><li><span class="node leaf">Autonomy</span></li><li><span class="node leaf">Permissions</span></li><li><span class="node leaf">Limits</span></li></ul></div>
    </div>
  </div></div>
```
CSS — replace the whole Information architecture block with:
```css
/* ---------- Information architecture: top-down tree, full width, low height ---------- */
.tree{--v:18px;--tl:rgba(255,255,255,.2);display:grid;justify-items:center}
.node{display:inline-block;padding:9px 20px;border-radius:999px;background:var(--surface-2);font:500 var(--t-sm)/1.2 var(--body);white-space:nowrap;transition:background .3s,color .3s,transform .45s var(--ease)}
.node:hover{transform:translateY(-2px);background:#2a2a2a}
.node.root{background:var(--blue);color:#fff;padding-inline:34px}
.node.leaf{padding:8px 11px;font-size:12.5px;background:transparent;box-shadow:inset 0 0 0 1px var(--line);color:var(--muted);font-weight:400}
.node.leaf:hover{color:var(--fg);background:var(--surface)}
.tree-root{position:relative;padding-bottom:var(--v)}
.tree-root::after,.branch::after,.branch ul::before,.branch li::after{content:"";position:absolute;left:50%;width:1px;height:var(--v);background:var(--tl)}
.tree-root::after{bottom:0}
.tree-scroll{overflow-x:auto;margin-inline:calc(var(--gutter)*-1);padding-inline:var(--gutter);padding-bottom:8px;scrollbar-width:none}
.tree-scroll::-webkit-scrollbar{display:none}
.tree-scroll.is-over{-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.tree{width:max-content;min-width:100%}
.branches{display:grid;grid-template-columns:repeat(4,minmax(max-content,1fr));width:100%;column-gap:clamp(12px,2vw,28px)}
.branch{position:relative;padding-top:var(--v);display:grid;justify-items:center;align-content:start}
.branches > .branch::before{left:calc(clamp(12px,2vw,28px) / -2);right:calc(clamp(12px,2vw,28px) / -2)}
.branch li::before{left:-4px;right:-4px}
.branch::before,.branch li::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:var(--tl)}
.branch:first-child::before,.branch li:first-child::before{left:50%}
.branch:last-child::before,.branch li:last-child::before{right:50%}
.branch::after,.branch li::after{top:0}
.branch ul{position:relative;display:grid;grid-template-columns:repeat(var(--n),minmax(max-content,1fr));column-gap:8px;width:100%;margin-top:var(--v)}
.branch ul::before{top:calc(var(--v)*-1)}
.branch li{position:relative;padding:var(--v) 0 0;display:grid;justify-items:center}
```
Add inside `@media (max-width:1100px)`:
```css
.tree{--v:14px} .node{padding:7px 12px;font-size:12.5px} .node.root{padding-inline:24px} .node.leaf{padding:6px 9px;font-size:11.5px}
```
Remove every other tree rule from the media queries (the old 2-column / list fallback, `display:none` on connector lines, `.branches{grid-template-columns:1fr}`, `.tree{min-width:640px}`).

JS — add to the case script:
```js
  /* IA tree: when it is wider than the screen, start with Home centred */
  var centreTree = function(){ document.querySelectorAll('.tree-scroll').forEach(function(t){ var over = t.scrollWidth > t.clientWidth + 2; t.classList.toggle('is-over', over); t.scrollLeft = over ? (t.scrollWidth - t.clientWidth) / 2 : 0; }); };
  addEventListener('load', centreTree); addEventListener('resize', centreTree); centreTree();
```

## 3. Iterations — before/after in the same frame as Core experience
In each of the three `.pin-item` of `#iterations`, replace `<div class="stage"><div class="ba">…</div></div>` with:

Iteration 1:
```html
<div class="stage-wrap"><div class="stage stage--ba"><div class="ba">
            <figure><img src="assets/it1-before.webp" width="515" height="1120" alt="Before: recommendation screen" loading="lazy"><figcaption>Before</figcaption></figure>
            <span class="arrow" aria-hidden="true"><svg viewBox="0 0 54 30"><path d="M6 5l10 10L6 25"/><path d="M22 5l10 10-10 10"/><path d="M38 5l10 10-10 10"/></svg></span>
            <figure><img src="assets/it1-after.webp" width="515" height="1120" alt="After: single decision sheet" loading="lazy"><figcaption>After</figcaption></figure>
          </div></div>
```
Iteration 2:
```html
<div class="stage-wrap"><div class="stage stage--ba"><div class="ba">
            <figure><img src="assets/it2-before.webp" width="515" height="1120" alt="Before: global autonomy level" loading="lazy"><figcaption>Before</figcaption></figure>
            <span class="arrow" aria-hidden="true"><svg viewBox="0 0 54 30"><path d="M6 5l10 10L6 25"/><path d="M22 5l10 10-10 10"/><path d="M38 5l10 10-10 10"/></svg></span>
            <figure><img src="assets/it2-after.webp" width="515" height="1120" alt="After: rules by asset" loading="lazy"><figcaption>After</figcaption></figure>
          </div></div>
```
Iteration 3:
```html
<div class="stage-wrap"><div class="stage stage--ba"><div class="ba">
            <figure><img src="assets/it3-before.webp" width="515" height="1120" alt="Before: transfer completed" loading="lazy"><figcaption>Before</figcaption></figure>
            <span class="arrow" aria-hidden="true"><svg viewBox="0 0 54 30"><path d="M6 5l10 10L6 25"/><path d="M22 5l10 10-10 10"/><path d="M38 5l10 10-10 10"/></svg></span>
            <figure><img src="assets/it3-after.webp" width="515" height="1120" alt="After: automate similar transfers" loading="lazy"><figcaption>After</figcaption></figure>
          </div></div>
```

CSS — replace all `.ba…` and `.stage--ba…` rules with:
```css
.ba{display:grid;grid-template-columns:1fr auto 1fr;width:100%;gap:0;align-items:center;justify-content:center}
.stage--ba{display:grid;place-items:center;padding:0;aspect-ratio:1920/1426;container-type:size;border-color:rgba(255,255,255,.08);
  background:
    radial-gradient(circle at 1px 1px,rgba(255,255,255,.07) 1px,transparent 1.2px) 0 0/22px 22px,
    radial-gradient(60% 70% at 75% 55%,rgba(75,87,255,.22),transparent 70%),
    linear-gradient(90deg,#0f0f11 0 50%,#0d0e1a 50% 100%)}
.stage--ba::before{content:"";position:absolute;top:0;bottom:0;left:50%;width:1px;background:linear-gradient(180deg,transparent,rgba(255,255,255,.14) 20%,rgba(255,255,255,.14) 80%,transparent);pointer-events:none}
#iterations .pin-item,#core .pin-item{grid-template-columns:minmax(240px,1fr) minmax(0,2.5fr);gap:clamp(24px,3.4vw,56px);align-items:center}
#iterations .facts > div{grid-template-columns:1fr;gap:6px}
.ba figure{display:grid;gap:10px;justify-items:center}
.ba img{height:66cqh;width:auto;max-width:none;filter:drop-shadow(0 24px 40px rgba(0,0,0,.6))}
.ba figure:first-child img{opacity:.7;filter:grayscale(.5) drop-shadow(0 24px 40px rgba(0,0,0,.6))}
.ba figure:last-child img{filter:drop-shadow(0 0 50px rgba(75,87,255,.28)) drop-shadow(0 24px 40px rgba(0,0,0,.6))}
.ba figure{gap:3cqh}
.ba figcaption{order:-1;padding:8px 18px;border-radius:999px;background:var(--surface-2);color:var(--muted);font:500 var(--t-sm)/1 var(--body)}
.ba figure:last-child figcaption{background:var(--blue);color:#fff}
.ba .arrow{position:relative;z-index:1;display:grid;place-items:center;width:clamp(40px,7cqw,56px);aspect-ratio:1;border-radius:50%;background:#101016;box-shadow:inset 0 0 0 1px rgba(255,255,255,.14),0 10px 30px rgba(0,0,0,.5)}
.ba .arrow svg{width:56%;height:auto;fill:none;stroke:var(--blue-soft);stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;overflow:visible}
.ba .arrow path:nth-child(1){opacity:.3} .ba .arrow path:nth-child(2){opacity:.6}
```
Keep the chevron `@keyframes chev` animation block.

Inside `@media (min-width:900px) and (min-height:640px) and (prefers-reduced-motion:no-preference)` replace the old `#iterations.is-pinned{--mock-h:…}` and `#iterations.is-pinned .stage{…}` with:
```css
  #iterations.is-pinned .pin-item{align-items:center}
  #iterations.is-pinned .stage-wrap{align-self:center}
  #iterations.is-pinned .stage--ba{grid-template-rows:1fr;height:auto;width:min(100%,calc((100svh - 330px) * 1.3464))}
```
In `@media (max-width:899px)` use `.pin-item,#core .pin-item,#iterations .pin-item,.cols.t5,.cols.t7{grid-template-columns:1fr}`; remove `.ba img{height:auto;max-height:44svh}` from `@media (max-width:760px)`.

Result: frame has the same size and proportions (1920/1426) as the Core experience video frame. It is a split comparison card: left half neutral (Before, dimmed), right half with a soft blue glow (After), fine dot grid, thin divider in the middle with a round arrow badge.

## Check
- No overlapping labels in the IA tree at 1440, 1024, 768, 430, 360 px.
- No horizontal page scroll at any width.
- Iterations and Core experience frames line up; pager works; no console errors.
