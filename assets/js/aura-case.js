(function(){
  var root = document.querySelector(".aura-case");
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var wide = matchMedia('(min-width: 900px) and (min-height: 640px)');
  var clamp = function(v){ return Math.max(0, Math.min(1, v)); };
  var progress = function(el){ var r = el.getBoundingClientRect(), span = r.height - innerHeight; return span > 0 ? clamp(-r.top / span) : 0; };

  /* Device toggle (one control per stage, all kept in sync) */
  document.body.dataset.device = 'mobile';
  var devBtns = root.querySelectorAll('.seg button');
  devBtns.forEach(function(b){ b.addEventListener('click', function(){
    document.body.dataset.device = b.dataset.device;
    devBtns.forEach(function(x){ x.setAttribute('aria-pressed', String(x.dataset.device === b.dataset.device)); });
    syncVideos();
  }); });

  /* Play only visible recordings; reduced motion keeps manual playback. */
  var videos = root.querySelectorAll('video[data-auto]');
  if (reduce) videos.forEach(function(v){ v.removeAttribute('autoplay'); v.controls = true; });
  var syncVideos = function(){
    videos.forEach(function(v){
      var r = v.getBoundingClientRect(), item = v.closest('.pin-item'), pin = v.closest('.pin');
      var shown = v.offsetParent && r.bottom > 0 && r.top < innerHeight &&
        (!pin || !pin.classList.contains('is-pinned') || item.classList.contains('is-active'));
      if (!reduce && !document.hidden && shown) {
        if (v.paused) { var playing = v.play(); if (playing) playing.catch(function(){}); }
      } else if (!reduce || !shown || document.hidden) v.pause();
    });
  };

  /* Fit IA only while leaf text stays readable; otherwise centre its swipe area. */
  var centreTree = function(){ root.querySelectorAll('.tree-scroll').forEach(function(t){
    var tree = t.querySelector('.tree'); tree.style.transform = ''; t.style.height = ''; t.classList.remove('is-fit');
    var cs = getComputedStyle(t), avail = t.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    var natural = tree.scrollWidth, ratio = avail / natural;
    if (ratio >= 1) { t.classList.remove('is-over'); t.scrollLeft = 0; return; }
    var leaf = parseFloat(getComputedStyle(tree.querySelector('.node.leaf')).fontSize);
    if (ratio * leaf >= 10.5) {
      t.classList.remove('is-over'); t.classList.add('is-fit');
      tree.style.transform = 'scale(' + ratio + ')';
      t.style.height = (tree.offsetHeight * ratio + parseFloat(cs.paddingBottom)) + 'px';
      t.scrollLeft = 0;
      return;
    }
    t.classList.add('is-over'); t.scrollLeft = (t.scrollWidth - t.clientWidth) / 2;
  }); };

  /* Numerals count up when they enter the viewport */
  if (!reduce && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){
      if (!e.isIntersecting) return; io.unobserve(e.target);
      var el = e.target, to = +el.dataset.count, t0 = performance.now(), dur = 2000;
      (function tick(now){ var p = clamp((now - t0) / dur), k = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(to * k); if (p < 1) requestAnimationFrame(tick); })(t0);
    }); }, { threshold: .6 });
    root.querySelectorAll('[data-count]').forEach(function(el){ io.observe(el); });
  }

  /* Scroll reveal */
  if (!reduce && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-rv');
    var targets = root.querySelectorAll('.hero > *, .sec:not(.pin) .head, .sec:not(.pin) .body, .sec:not(.pin) .body > .tiles > *, .orow .big, .orow .tiles > *, .concept.chosen, .sec:not(.pin) .nums > *, .prob > *');
    var rio = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } }); }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(function(el){ el.classList.add('rv'); var i = [].indexOf.call(el.parentNode.children, el); el.style.setProperty('--d', el.matches('.tile,.num,.prob > *,.learned > *') ? i : 0); rio.observe(el); });
    root.querySelectorAll('.chain li').forEach(function(li, k){ li.style.setProperty('--k', k); });
  }

  /* Pinned sections with vertical pager */
  var pins = [].map.call(root.querySelectorAll('.pin'), function(sec){
    var track = sec.querySelector('.pin-track'), items = sec.querySelectorAll('.pin-item'), dots = sec.querySelectorAll('.pager button');
    var set = function(i){
      items.forEach(function(el, k){ el.classList.toggle('is-active', k === i); });
      dots.forEach(function(d, k){ if (k === i) d.setAttribute('aria-current', 'true'); else d.removeAttribute('aria-current'); });
    };
    dots.forEach(function(d, k){ d.addEventListener('click', function(){
      var top = track.getBoundingClientRect().top + scrollY, span = track.offsetHeight - innerHeight;
      scrollTo({ top: top + span * ((k + .5) / items.length), behavior: 'smooth' });
    }); });
    return { sec: sec, items: items, update: function(){ set(Math.min(items.length - 1, Math.floor(progress(track) * items.length))); } };
  });

  /* Gallery row driven by vertical scroll */
  var gal = root.querySelector('.gallery'), view = gal.querySelector('.gallery-view'), row = gal.querySelector('.gallery-row');
  var pinned = false, ticking = false, shift = 0;
  var onScroll = function(){
    if (pinned) {
      pins.forEach(function(p){ p.update(); });
      row.style.transform = 'translate3d(' + (-progress(gal) * shift) + 'px,0,0)';
    }
    syncVideos();
  };
  var layout = function(){
    pinned = wide.matches && !reduce;
    pins.forEach(function(p){ p.sec.classList.toggle('is-pinned', pinned); if (!pinned) p.items.forEach(function(el){ el.classList.add('is-active'); }); });
    gal.classList.toggle('is-pinned', pinned);
    if (!pinned) { gal.style.height = ''; row.style.transform = ''; }
    else {
      view.scrollLeft = 0;
      shift = Math.max(0, row.scrollWidth - view.clientWidth);
      gal.style.height = (innerHeight + shift) + 'px';
    }
    centreTree();
    onScroll();
  };
  addEventListener('scroll', function(){ if (!ticking) { ticking = true; requestAnimationFrame(function(){ ticking = false; onScroll(); }); } }, { passive: true });
  addEventListener('resize', layout); addEventListener('load', layout);
  document.addEventListener('visibilitychange', syncVideos);
  root.querySelectorAll('img').forEach(function(img){ img.addEventListener('load', layout); });
  if (document.fonts) document.fonts.ready.then(layout);
  layout();
  setTimeout(syncVideos, 300);
})();
