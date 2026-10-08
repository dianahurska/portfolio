# AURA case — update 05: clean before/after mockups + IA fully visible on desktop

Apply after update-04. Scope: before/after frame (Iterations) and the IA tree. Nothing else changes.

## 1. Before/after — mockups stay original, bigger, with natural floor shadows
Remove all of these (they tinted / faded the mockups):
- `.ba figure:first-child img{opacity…;filter:grayscale…}`
- `.ba figure:last-child img{filter:drop-shadow(… rgba(75,87,255 …))…}`
- `.ba figure:last-child::before{…}`
- the two blue `radial-gradient(…rgba(75,87,255…)…)` layers in `.stage--ba` background

Replace `.ba img{…}` with:
```css
.ba img{height:79cqh;width:auto;max-width:none}
```
Replace the `.stage--ba{…}` … `.ba figure::after{…}` block with:
```css
.stage--ba{display:grid;place-items:end center;padding:0;aspect-ratio:1920/1426;container-type:size;border-color:rgba(255,255,255,.08);background:url(../assets/ba-studio.webp) center/cover no-repeat,#050505}
.stage--ba .ba{padding-bottom:6cqh}
.ba figure{position:relative}
.ba figure img{position:relative;z-index:1}
/* contact shadow right under the phone */
.ba figure::before{content:"";position:absolute;z-index:0;bottom:-.6cqh;left:6%;right:6%;height:2.4cqh;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.9),rgba(0,0,0,.5) 60%,transparent);filter:blur(2px)}
/* long cast shadow on the floor, light from the right */
.ba figure::after{content:"";position:absolute;z-index:0;bottom:-5.5cqh;right:22%;width:105%;height:6cqh;background:linear-gradient(270deg,rgba(0,0,0,.6),rgba(0,0,0,.28) 50%,transparent 95%);transform:skewX(60deg);transform-origin:right top;filter:blur(9px)}
```
Also set `.ba figure{gap:2.2cqh}` and in `.ba{…}` use `gap:0 2cqw`.

Result: mockups are shown exactly as exported (no opacity, no filters, no glow), about 20% larger; the only effects are a contact shadow under each phone and a soft long shadow on the studio floor.

## 2. Information architecture — fully visible on desktop, no scroll
Spacing tweaks:
```css
.branches{--cg:clamp(10px,1.6vw,22px)}
.branch ul{--cg:6px}
.node.leaf{padding:7px 10px}
.tree-scroll.is-fit{overflow:hidden}
.tree-scroll.is-fit .tree{min-width:0;transform-origin:left top}
```
Replace the `centreTree` function in the case script with:
```js
  var centreTree = function(){ document.querySelectorAll('.tree-scroll').forEach(function(t){
    var tree = t.querySelector('.tree'); tree.style.transform = ''; t.style.height = ''; t.classList.remove('is-fit');
    var cs = getComputedStyle(t), avail = t.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    var natural = tree.scrollWidth, ratio = avail / natural;
    if (ratio >= 1) { t.classList.remove('is-over'); t.scrollLeft = 0; return; }
    if (innerWidth >= 1100 || ratio >= 0.75) {   /* desktop (and wide tablets): scale the whole tree to fit, no scroll */
      t.classList.remove('is-over'); t.classList.add('is-fit');
      tree.style.transform = 'scale(' + ratio + ')';
      t.style.height = (tree.offsetHeight * ratio + parseFloat(cs.paddingBottom)) + 'px';
      return;
    }
    t.classList.add('is-over'); t.scrollLeft = (t.scrollWidth - t.clientWidth) / 2;   /* phone: swipe */
  }); };
```
Behaviour: on desktop (≥1100 px) and wide tablets the whole tree is scaled down just enough to fit the content width — no scrollbar, no edge fade. On narrow tablets and phones (where scaling would make text unreadable) it swipes horizontally, starts centred on Home, and only then the edges fade.

## Check
- 1920 / 1440 / 1280 / 1024 px: IA tree fully visible, no scroll, no fade.
- 768 / 430 px: IA swipes, lines continuous.
- Iterations: mockups look identical to the source images; shadows only on the floor.
