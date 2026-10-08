(function () {
  function loadAsset(tag, attributes) {
    return new Promise((resolve, reject) => {
      const element = document.createElement(tag);
      Object.assign(element, attributes);
      element.onload = resolve;
      element.onerror = () => reject(new Error("Could not load the AURA case asset."));
      (tag === "link" ? document.head : document.body).append(element);
    });
  }

  window.renderAuraCase = async function (project) {
    const app = document.querySelector("#app");
    app.setAttribute("aria-busy", "true");
    try {
      const [response] = await Promise.all([
        fetch(project.body),
        loadAsset("link", { rel: "stylesheet", href: "assets/css/aura-case.css" })
      ]);
      if (!response.ok) throw new Error("Could not load the AURA case page.");
      const source = new DOMParser().parseFromString(await response.text(), "text/html");
      const main = source.querySelector("main");
      // Preserve the supplied main and sprite; adapt asset paths for GitHub Pages.
      main.id = "app";
      main.classList.add("aura-case");
      main.querySelectorAll("img[src]").forEach((img) => {
        img.setAttribute("src", img.getAttribute("src").replace(/^assets\//, "assets/images/aura/"));
      });
      const sprite = source.querySelector("body > svg");
      app.before(sprite);
      app.replaceWith(main);
      document.body.dataset.case = "aura";
      const next = document.createElement("div");
      next.className = "case-study case-next";
      main.after(next);
      window.appendCaseProjects(next, project);
      await loadAsset("script", { src: "assets/js/aura-case.js" });
      document.dispatchEvent(new Event("aura:ready"));
    } catch (error) {
      const target = document.querySelector("#app");
      target.removeAttribute("aria-busy");
      target.setAttribute("role", "alert");
      target.textContent = "The case could not load. Please reload the page.";
      console.error(error);
    }
  };
})();
