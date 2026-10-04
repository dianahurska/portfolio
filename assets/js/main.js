(function () {
  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const arrow = '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M1 9 9 1M3 1h6v6"/></svg>';
  const page = document.body.dataset.page;

  /* ---------- Shared: header + footer ---------- */
  function header() {
    const el = $("#header");
    if (!el) return;
    el.className = "header" + (page === "home" ? "" : " compact");
    el.innerHTML = `
      <a href="index.html" class="brand"><span class="tag">${esc(S.tagline)}</span><span class="nm">${esc(S.name)}</span></a>
      <nav class="nav">
        <a href="work.html" class="${page === "project" || page === "work" ? "active" : ""}">Work</a>
        <a href="about.html" class="${page === "about" ? "active" : ""}">About</a>
        <a href="mailto:${esc(S.email)}" class="mail">${esc(S.email)}</a>
        <a href="mailto:${esc(S.email)}" class="at" aria-label="Email">@</a>
      </nav>`;
    if (page === "home") {
      const onScroll = () => el.classList.toggle("scrolled", window.scrollY > 280);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  function footer() {
    const el = $("#footer");
    if (!el) return;
    el.className = "footer";
    el.innerHTML = `
      <div class="footer-top">
        <span class="lt">Let's talk</span>
        <div class="footer-socials">${(S.footerSocials || S.socials).map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("")}</div>
      </div>
      <a class="footer-mail" href="mailto:${esc(S.email)}">${esc(S.email)}</a>
      <div class="footer-mid">
        <nav><a href="index.html">Home</a><a href="work.html">Work</a><a href="about.html">About</a></nav>
        <a href="#top" id="to-top">Back to top</a>
      </div>
      <div class="footer-bot"><span>${esc(S.address)}</span><span>${esc(S.copyright)}</span></div>`;
    $("#to-top").addEventListener("click", (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  }

  const list = (title, items) => items && items.length
    ? `<div class="side-list"><h4>${esc(title)}</h4><ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>` : "";

  const logo = (src, name) => src
    ? `<img class="logo-img" src="${esc(src)}" alt="">`
    : `<span class="logo-dot">${esc((name || "?")[0])}</span>`;

  /* ---------- Home ---------- */
  function home() {
    const nameParts = S.name.split(" ");
    $("#app").innerHTML = `
      <section class="home" id="work">
        <aside class="home-side"><div class="sticky">
          <div class="hero">
            <h1 class="hero-name">${nameParts.map(esc).join("<br>")}</h1>
            <p class="hero-tag-m">${esc(S.tagline)}</p>
            <p class="hero-loc">${esc(S.location)}</p>
          </div>
          <div class="side-lists">${list("Fields", S.fields)}${list("Previously at", S.previously)}</div>
        </div></aside>
        <div class="projects">
          ${(S.homeProjects ? S.homeProjects.map((slug) => S.projects.find((p) => p.slug === slug)) : S.projects).map((p) => `
            <a class="project-card" href="project.html?p=${encodeURIComponent(p.slug)}">
              <img src="${esc(p.cover)}" alt="${esc(p.title)}" loading="lazy">
              <div class="info"><h3>${esc(p.title)}</h3><p><span>Services:</span> ${esc(p.services)}</p></div>
            </a>`).join("")}
        </div>
      </section>

      ${S.recent && S.recent.title ? `
      <section class="section recent"><div class="section-inner">
        <div class="recent-head reveal">
          <h2>${esc(S.recent.title)}</h2>
          ${S.recent.url ? `<a class="visit" href="${esc(S.recent.url)}" target="_blank" rel="noopener">Visit ${arrow}</a>` : "<span></span>"}
          <div class="tags">${(S.recent.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        </div>
        <div class="recent-media reveal" id="recent-media">
          ${S.recent.video
            ? `<video src="${esc(S.recent.video)}" poster="${esc(S.recent.poster)}" playsinline preload="metadata"></video>
               <button class="play" aria-label="Play"><svg viewBox="0 0 16 16"><path d="M2 1l13 7-13 7z"/></svg></button>`
            : `<img src="${esc(S.recent.poster)}" alt="" loading="lazy">`}
        </div>
      </div></section>` : ""}

      ${S.timeline && S.timeline.length ? `
      <section class="section timeline"><div class="section-inner">
        <h2 class="section-title">Timeline</h2>
        <div class="timeline-list">
          ${S.timeline.map((t) => `
            <div class="tl-row reveal${t.current ? " current" : ""}">
              <span class="yr">${esc(t.year)}</span>
              <span class="co">${logo(t.logo, t.company)}${esc(t.company)}</span>
              <span class="rl">${esc(t.roles)}</span>
            </div>`).join("")}
        </div>
      </div></section>` : ""}

      ${S.numbers && S.numbers.length ? `
      <section class="section numbers"><div class="section-inner">
        <h2 class="section-title">Important numbers</h2>
        <div class="numbers-grid">
          ${S.numbers.map((n) => `
            <div class="num"><div class="val" data-value="${esc(n.value)}"></div>
            <span class="lbl">${esc(n.label)}</span></div>`).join("")}
        </div>
      </div></section>` : ""}

      ${S.stack && S.stack.length ? `
      <section class="section stack"><div class="section-inner">
        <h2 class="section-title">Tech stack</h2>
        <div class="stack-grid">
          ${S.stack.map((s) => `
            <a class="stack-card reveal${s.wide ? " wide" : ""}" href="${esc(s.url)}" target="_blank" rel="noopener">
              ${s.icon ? `<img class="ic" src="${esc(s.icon)}" alt="">` : `<span class="ic-letter">${esc(s.name[0])}</span>`}
              <div><h4>${esc(s.name)}</h4><p>${esc(s.desc)}</p></div>
            </a>`).join("")}
          ${fillerCells(S.stack)}
        </div>
      </div></section>` : ""}

      <section class="section elsewhere"><div class="section-inner">
        <h2 class="section-title">Elsewhere</h2>
        ${S.socials.map((s) => `
          <a class="social-row reveal" href="${esc(s.url)}" target="_blank" rel="noopener">
            <span class="lbl">${esc(s.label)}</span><span class="hdl">${esc(s.handle)}</span>
          </a>`).join("")}
      </div></section>`;

    // Numbers: rolling digits
    S.numbers && document.querySelectorAll(".num .val").forEach((el, i) => {
      const n = S.numbers[i];
      el.innerHTML = String(n.value).split("").map((d) =>
        /\d/.test(d)
          ? `<span class="digit"><span data-d="${d}">${"0123456789".split("").map((x) => `<span>${x}</span>`).join("")}</span></span>`
          : `<span>${esc(d)}</span>`).join("") + (n.suffix ? `<span class="sfx">${esc(n.suffix)}</span>` : "");
    });
    const roll = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      // each digit row is 1em + 1px tall
      e.target.querySelectorAll("[data-d]").forEach((c) => (c.style.transform = `translateY(calc(-${c.dataset.d}em - ${c.dataset.d}px))`));
      roll.unobserve(e.target);
    }), { threshold: 0.3 });
    document.querySelectorAll(".num").forEach((el) => roll.observe(el));

    // Recent video
    const media = $("#recent-media");
    const video = media && $("video", media);
    if (video) media.addEventListener("click", () => {
      if (video.paused) { video.play(); video.controls = true; media.classList.add("playing"); }
    });
  }

  // Fill the last row of the 4-col stack grid with an empty "X" cell, as in the original
  function fillerCells(stack) {
    const used = stack.reduce((a, s) => a + (s.wide ? 2 : 1), 0) % 4;
    return used ? `<div class="stack-card empty" style="grid-column: span ${4 - used}"></div>` : "";
  }

  /* ---------- About ---------- */
  function about() {
    const A = S.about, C = S.contact;
    const skills = S.fields.concat(S.fields);
    $("#app").innerHTML = `
      <section class="page">
        <h1 class="page-title">About</h1>
        <div class="about-grid">
          <div>
            <div class="about-bio reveal"><span class="lbl">${esc(A.label)}</span><p>${esc(A.bio)}</p></div>
            <div class="marquee" aria-hidden="true"><div class="marquee-track">${skills.concat(skills).map((f) => `<span>${esc(f)}</span>`).join("")}</div></div>
            <div class="about-bio"><span></span><div class="about-socials">${S.socials.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("")}</div></div>
          </div>
          ${A.portrait ? `<div class="portrait-wrap reveal"><div class="portrait-frame"></div><img src="${esc(A.portrait)}" alt="${esc(S.name)}"></div>` : ""}
        </div>
      </section>
      <section class="touch">
        <div>
          <h2>Get in touch</h2>
          <form class="form" id="contact-form">
            <input name="name" placeholder="Name" required>
            <input name="email" type="email" placeholder="Your email" required>
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send message ${arrow}</button>
            <p class="status" id="form-status" hidden></p>
          </form>
        </div>
        <div class="studio">
          <b>Studio:</b><br>${esc(C.studioName)}<br>
          ${C.studioAddress.map(esc).join("<br>")}
          <p class="ph">${esc(C.phone)}</p>
        </div>
      </section>`;

    $("#contact-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const f = e.target, status = $("#form-status");
      const data = Object.fromEntries(new FormData(f));
      status.hidden = false;
      if (!C.formEndpoint) {
        location.href = `mailto:${S.email}?subject=${encodeURIComponent("Message from " + data.name)}&body=${encodeURIComponent(data.message + "\n\n" + data.email)}`;
        status.textContent = "Opening your mail app…";
        return;
      }
      status.textContent = "Sending…";
      try {
        const r = await fetch(C.formEndpoint, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(data) });
        if (!r.ok) throw new Error();
        f.reset();
        status.textContent = "Thank you! Your message has been sent.";
      } catch {
        status.textContent = "Something went wrong. Please email me directly.";
      }
    });
  }

  /* ---------- Project ---------- */
  function project() {
    const slug = new URLSearchParams(location.search).get("p");
    const idx = Math.max(0, S.projects.findIndex((p) => p.slug === slug));
    const P = S.projects[idx];
    document.title = `${P.title} — ${S.name}`;
    if (P.layout === "case-study") {
      window.renderCaseStudy(P);
      return;
    }
    const others = S.projects.filter((_, i) => i !== idx).slice(0, 2);
    const img = (src) => `<div><img src="${esc(src)}" alt="" loading="lazy"></div>`;
    const block = (b) => {
      switch (b.type) {
        case "image": return `<div class="blk-img reveal"><img src="${esc(b.src)}" alt="" loading="lazy"></div>`;
        case "pair": return `<div class="blk-pair reveal">${b.srcs.map(img).join("")}</div>`;
        case "text": return `<div class="blk-text reveal">${b.title ? `<h3>${esc(b.title)}</h3>` : ""}<p>${esc(b.text)}</p></div>`;
        case "quote": return `<div class="blk-quote reveal"><p>${esc(b.text)}</p>${b.author ? `<span>${esc(b.author)}</span>` : ""}</div>`;
        case "split": return `<div class="blk-split reveal">${img(b.src)}<div>${b.title ? `<h3>${esc(b.title)}</h3>` : ""}<p>${esc(b.text)}</p></div></div>`;
        case "video": return `<div class="blk-video reveal"><video src="${esc(b.src)}" poster="${esc(b.poster || "")}" controls playsinline preload="metadata"></video></div>`;
        default: return "";
      }
    };
    $("#app").innerHTML = `
      <section class="p-hero"><div class="cover"><img src="${esc(P.cover)}" alt="${esc(P.title)}"></div></section>
      <div class="p-head">
        <h1>${esc(P.title)}</h1>
        ${P.url ? `<a class="visit" href="${esc(P.url)}" target="_blank" rel="noopener">Visit ${arrow}</a>` : ""}
      </div>
      <div class="p-meta">
        <div>Client:<b>${esc(P.client)}</b></div>
        <div>Deliverables:<b>${esc(P.deliverables)}</b></div>
        <div>Year:<b>${esc(P.year)}</b></div>
      </div>
      <div class="p-about reveal"><span class="lbl">About:</span><p>${P.about || ""}</p></div>
      <div class="blocks">${(P.blocks || []).map(block).join("")}</div>
      ${others.length ? `
      <section class="more">
        <h3>More projects</h3>
        <div class="more-list">${others.map((o) => `<a href="project.html?p=${encodeURIComponent(o.slug)}"><img src="${esc(o.cover)}" alt="${esc(o.title)}" loading="lazy"></a>`).join("")}</div>
      </section>` : ""}`;
  }

  /* ---------- Boot ---------- */
  if (S.description) {
    const m = document.querySelector('meta[name="description"]');
    if (m) m.content = S.description;
  }
  if (page === "home") document.title = `${S.name} — ${S.tagline}`;
  if (page === "about") document.title = `About — ${S.name}`;
  header();
  ({ home, about, project, work: window.renderWork }[page] || (() => {}))();
  footer();

  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
