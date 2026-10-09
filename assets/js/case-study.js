(function () {
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  window.renderCaseStudy = function (project) {
    const app = document.querySelector("#app");
    app.classList.add("case-study");
    app.innerHTML = `
      <h1 class="case-title">${esc(project.title)}</h1>
      <p class="case-image-hint">Tap a slide to open it and zoom in.</p>
      <div class="case-panels">
        ${project.panels.map((panel, index) => `
          <a class="case-panel-link" href="${esc(panel.src)}" target="_blank" rel="noopener"
            aria-label="${esc(`${project.title} — open slide ${index + 1} at full resolution`)}">
          <img src="${esc(panel.src)}" alt="${esc(panel.alt || `${project.title} — ${index + 1}`)}"
            width="${panel.width}" height="${panel.height}"
            loading="${index === 0 ? "eager" : "lazy"}" ${index === 0 ? 'fetchpriority="high"' : 'decoding="async"'}></a>`).join("")}
      </div>`;
    window.appendCaseProjects(app, project);
  };

  // The same related-project block is used by image cases and HTML cases.
  window.appendCaseProjects = function (container, project) {
    const others = (window.SITE.workProjects || []).filter((item) => item.slug !== project.slug);
    for (let i = others.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [others[i], others[j]] = [others[j], others[i]];
    }
    if (!others.length) return;
    container.insertAdjacentHTML("beforeend", `<section class="case-more" aria-labelledby="case-more-heading">
        <h2 id="case-more-heading">More projects</h2>
        <div class="case-carousel" tabindex="0" aria-label="More projects">
          ${others.map((item, index) => `<a class="case-related" href="${esc(item.href)}" style="--case-delay: ${.1 + index * .3}s">
            <img src="${esc(item.cover)}" alt="${esc(item.title)}" loading="lazy" decoding="async">
          </a>`).join("")}
        </div>
      </section>`);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: .1 });
    container.querySelectorAll(".case-related").forEach((item) => observer.observe(item));
  };
})();
