(function () {
  const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));

  window.renderWork = function () {
    const site = window.SITE;
    const labels = site.workLabels;
    const arrow = '<svg viewBox="0 0 26 26" aria-hidden="true"><path d="M7 19 19 7M7 7h12v12" fill="none" stroke="currentColor" stroke-width="2"/></svg>';
    document.querySelector("#app").innerHTML = `
      <section class="work-page" aria-labelledby="work-title">
        <h1 id="work-title" class="work-title work-reveal">${escape(site.workTitle)}</h1>
        <div class="work-list">
          ${site.workProjects.map((project, index) => `
            <a class="work-card work-reveal" href="${escape(project.href)}" aria-label="${escape(project.title)}">
              <div class="work-image"><img src="${escape(project.cover)}" alt="${escape(project.title)}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></div>
              <div class="work-info">
                <h2>${escape(project.title)}</h2>
                <span class="work-arrow">${arrow}</span>
                <dl class="work-details">
                  <div class="work-detail work-client"><dt>${escape(labels.client)}</dt><dd>${escape(project.client)}</dd></div>
                  <div class="work-detail work-service"><dt>${escape(labels.services)}</dt><dd>${escape(project.services)}</dd></div>
                  <div class="work-detail work-year"><dt>${escape(labels.year)}</dt><dd>${escape(project.year)}</dd></div>
                </dl>
              </div>
            </a>`).join("")}
        </div>
      </section>`;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("work-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.01 });
    document.querySelectorAll(".work-reveal").forEach((element) => {
      element.classList.add("work-animated");
      observer.observe(element);
    });
  };
})();
