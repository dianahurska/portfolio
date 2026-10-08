# AURA case — update 06: before/after shadows + bigger frame, larger IA type, 10px minimum

Apply after update-05. Scope: Iterations before/after frame and the IA tree. No new assets. Nothing else changes.

## 1. Before/after (Iterations)
Replace these rules with:
```css
.ba{display:grid;grid-template-columns:auto auto auto;width:100%;gap:0 3.2cqw;align-items:center;justify-content:center}
.stage--ba .ba{padding-bottom:5cqh}
/* contact shadow right under the phone */
.ba figure::before{content:"";position:absolute;z-index:0;bottom:-.5cqh;left:7%;right:7%;height:1.6cqh;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.92),rgba(0,0,0,.55) 65%,transparent);filter:blur(1.5px)}
/* long soft cast shadow falling down-LEFT on the floor (light from the right, as in the prototype backdrop) */
.ba figure::after{content:"";position:absolute;z-index:0;top:calc(100% - 1cqh);left:6%;right:6%;height:11cqh;transform-origin:center top;transform:skewX(-75deg);background:linear-gradient(180deg,rgba(0,0,0,.85),rgba(0,0,0,.55) 35%,rgba(0,0,0,.25) 75%,rgba(0,0,0,.1));filter:blur(1.2cqh)}
.ba img{height:83cqh;width:auto;max-width:none}
.ba figure{gap:1.8cqh}
```
In `.ba .arrow{…}` set `margin-bottom:5cqh`.

Add right after `.ba figure:last-child figcaption{…}`:
```css
@container (max-height:420px){.ba img{height:74cqh}.ba figcaption{padding:6px 14px}.stage--ba .ba{padding-bottom:6cqh}.ba .arrow{margin-bottom:6cqh}}
```
Bigger frame — split the shared rule `#iterations .pin-item,#core .pin-item{…}` so Core keeps its values and Iterations gets:
```css
#core .pin-item{grid-template-columns:minmax(240px,1fr) minmax(0,2.5fr);gap:clamp(24px,3.4vw,56px);align-items:center}
#iterations .pin-item{grid-template-columns:minmax(230px,1fr) minmax(0,2.85fr);gap:clamp(24px,3vw,48px);align-items:center}
```
In the pinned media query: `#iterations.is-pinned .stage--ba{…width:min(100%,calc((100svh - 285px) * 1.3464))}` (was 330px).

## 2. Information architecture — larger type
```css
.node{…padding:10px 22px;…font:500 var(--t-md)/1.2 var(--body);…}
.node.root{…padding-inline:38px}
.node.leaf{padding:8px 12px;font-size:13.5px;…}
.branches{--cg:clamp(10px,1.4vw,18px);display:grid;grid-template-columns:repeat(4,auto);width:100%;column-gap:var(--cg)}
.branch ul{--cg:7px}
```
(`repeat(4,auto)` instead of equal columns — removes empty space, so the tree fits at real size.)

In `@media (max-width:1100px)` replace the two tree lines with:
```css
  .tree{--v:16px} .node{padding:9px 16px;font-size:14px} .node.root{padding-inline:30px} .node.leaf{padding:7px 11px;font-size:13px}
```
Replace `centreTree` in the case script with:
```js
  var centreTree = function(){ document.querySelectorAll('.tree-scroll').forEach(function(t){
    var tree = t.querySelector('.tree'); tree.style.transform = ''; t.style.height = ''; t.classList.remove('is-fit');
    var cs = getComputedStyle(t), avail = t.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    var natural = tree.scrollWidth, ratio = avail / natural;
    if (ratio >= 1) { t.classList.remove('is-over'); t.scrollLeft = 0; return; }
    var leaf = parseFloat(getComputedStyle(tree.querySelector('.node.leaf')).fontSize);
    if (ratio * leaf >= 10.5) {   /* fits with text still >= 11px: scale the whole tree, no scroll */
      t.classList.remove('is-over'); t.classList.add('is-fit');
      tree.style.transform = 'scale(' + ratio + ')';
      t.style.height = (tree.offsetHeight * ratio + parseFloat(cs.paddingBottom)) + 'px';
      return;
    }
    t.classList.add('is-over'); t.scrollLeft = (t.scrollWidth - t.clientWidth) / 2;   /* would get too small: keep real size, swipe */
  }); };
```
Rule: the tree is scaled down only while its smallest text stays ≥10.5 px; otherwise it keeps real size and swipes.

## Check
- No text anywhere renders below 10 px (verified 320–1920 px).
- 1920/1440/1280/1100/1024: IA fully visible, no scroll. ≤834: IA swipes, starts on Home.
- Before/after: phones closer and larger, soft shadow falls to the left down to the frame edge; nothing clipped on mobile.
