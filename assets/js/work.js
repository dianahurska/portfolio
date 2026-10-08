(function () {
  const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character]));

  window.renderWork = function () {
    const site = window.SITE;
    const labels = site.workLabels;
    const arrow = '<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M6.69 11.88H5.19v-9L1.065 7.005 0 5.94 5.94 0l5.94 5.94-1.065 1.065L6.69 2.88Z" transform="translate(3.06 3.12) rotate(45 5.94 5.94)" fill="currentColor"/></svg>';
    document.querySelector("#app").innerHTML = `
      <section class="work-page" aria-labelledby="work-title">
        <h1 id="work-title" class="work-title work-reveal">${escape(site.workTitle)}</h1>
        <div class="work-list">
          ${site.workProjects.map((project, index) => `
            <a class="work-card work-reveal${project.details ? " work-card--details" : ""}" href="${escape(project.href)}" aria-label="${escape(project.title)}">
              <div class="work-image"><img src="${escape(project.cover)}" alt="${escape(project.title)}" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></div>
              <div class="work-info">
                <h2>${escape(project.title)}</h2>
                <span class="work-arrow" aria-hidden="true">${arrow}</span>
                <dl class="work-details">
                  ${(project.details || [
                    { label: project.labels?.client || labels.client, value: project.client, className: "work-client" },
                    { label: project.labels?.services || labels.services, value: project.services, className: "work-service" },
                    { label: labels.year, value: project.year, className: "work-year" }
                  ]).map((detail) => `<div class="work-detail ${escape(detail.className || "")}"><dt>${escape(detail.label)}</dt><dd>${escape(detail.value)}</dd></div>`).join("")}
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
