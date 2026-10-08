# AURA case — update 04: IA connector lines + studio background for before/after

Apply after update-03. Scope: Information architecture lines and the before/after frame in Iterations. Nothing else changes. Mockup images stay as they are.

## 1. Add file
Copy `assets/ba-studio.webp` into the case assets folder (studio backdrop from the prototype videos, with the baked-in phone shadow removed).

## 2. Information architecture — continuous connector lines
Replace the rules from `.branches{…}` through `.branch li{…}` with:
```css
.branches{--cg:clamp(12px,2vw,28px);display:grid;grid-template-columns:repeat(4,minmax(max-content,1fr));width:100%;column-gap:var(--cg)}
.branch{position:relative;padding-top:var(--v);display:grid;justify-items:center;align-content:start}
.branch::before,.branch li::before{content:"";position:absolute;top:0;left:calc(var(--cg) / -2);right:calc(var(--cg) / -2);height:1px;background:var(--tl)}
.branch ul{--cg:8px}
.branch:first-child::before,.branch li:first-child::before{left:50%}
.branch:last-child::before,.branch li:last-child::before{right:50%}
.branch::after,.branch li::after{top:0}
.branch ul{position:relative;display:grid;grid-template-columns:repeat(var(--n),minmax(max-content,1fr));column-gap:var(--cg);width:100%;margin-top:var(--v)}
.branch ul::before{top:calc(var(--v)*-1)}
.branch li{position:relative;padding:var(--v) 0 0;display:grid;justify-items:center}
```
What changed: each horizontal connector now extends by half the column gap on both sides (`--cg`), so lines between siblings join instead of breaking. The edge fade on `.tree-scroll` stays only on `.is-over` (when the tree is wider than the screen, i.e. phone), never on desktop.

## 3. Before/after frame — studio backdrop with natural shadows
Replace the `.stage--ba{…}` and `.stage--ba::before{…}` rules (dot grid, split halves, divider) with:
```css
.stage--ba{display:grid;place-items:end center;padding:0;aspect-ratio:1920/1426;container-type:size;border-color:rgba(255,255,255,.08);
  background:
    radial-gradient(34% 16% at 73% 86%,rgba(75,87,255,.32),transparent 72%),
    radial-gradient(40% 55% at 73% 40%,rgba(75,87,255,.10),transparent 70%),
    url(assets/ba-studio.webp) center/cover no-repeat,#050505}
.stage--ba .ba{padding-bottom:9cqh}
.ba figure{position:relative}
.ba figure img{position:relative;z-index:1}
.ba figure::before{content:"";position:absolute;z-index:0;bottom:-1.2cqh;left:12%;right:12%;height:3.2cqh;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.95),rgba(0,0,0,.55) 55%,transparent);filter:blur(3px)}
.ba figure::after{content:"";position:absolute;z-index:0;bottom:-7.5cqh;right:30%;width:120%;height:8.5cqh;background:linear-gradient(270deg,rgba(0,0,0,.75),rgba(0,0,0,.35) 55%,transparent);transform:skewX(58deg);transform-origin:right top;filter:blur(7px);border-radius:0 0 40% 0}
.ba figure:last-child::before{background:radial-gradient(closest-side,rgba(10,12,40,.95),rgba(20,26,90,.45) 55%,transparent)}
```
Replace the `.ba .arrow{…}` rule with:
```css
.ba .arrow{position:relative;z-index:1;align-self:center;margin-bottom:6cqh;display:grid;place-items:center;width:clamp(40px,7cqw,56px);aspect-ratio:1;border-radius:50%;background:rgba(18,18,26,.55);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:inset 0 0 0 1px rgba(255,255,255,.16),0 10px 30px rgba(0,0,0,.5)}
```
**Path note:** the stylesheet lives in `css/`, so the background URL must point one level up: `url(../assets/ba-studio.webp)`. Adjust if the case CSS lives elsewhere.

Result: both phones stand on the same lit studio floor as the prototype videos; each casts a soft contact shadow and a long shadow to the left (light comes from the right); a blue glow sits behind and under the After phone; the arrow badge is frosted glass.

## Check
- IA at 390 px: all horizontal lines are continuous; edges fade only while the tree is scrollable. At 1440 px no fade.
- Iterations at 1440 / 1024 / 390 px: background visible (no 404 for `ba-studio.webp`), shadows under both phones, no horizontal page scroll.
