(() => {
  const config = window.PAPER_CONFIG;
  if (!config) return;

  document.title = config.shortTitle || config.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", config.abstract || config.title);

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && value != null) el.textContent = value;
  };

  setText("paper-title", config.title);
  setText("venue", config.venue);
  setText("abstract-body", config.abstract);
  setText("footer-short", config.shortTitle || config.title);
  setText("bibtex", config.bibtex || "");

  const labHref = config.links?.lab || "https://trustworthyautonomy.github.io/";
  ["lab-link", "footer-lab"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = labHref;
  });

  const heroImage = document.getElementById("hero-image");
  if (heroImage) {
    heroImage.src = config.heroImage || "";
    heroImage.alt = config.heroImageAlt || "";
  }

  const authorsEl = document.getElementById("authors");
  if (authorsEl && Array.isArray(config.authors)) {
    authorsEl.innerHTML = config.authors
      .map((author, i) => {
        const name = author.link
          ? `<a href="${escapeAttr(author.link)}">${escapeHtml(author.name)}</a>`
          : escapeHtml(author.name);
        const aff = author.affiliation
          ? ` <span class="aff">(${escapeHtml(author.affiliation)})</span>`
          : "";
        const sep = i < config.authors.length - 1 ? ", " : "";
        return `${name}${aff}${sep}`;
      })
      .join("");
  }

  const actions = document.getElementById("hero-actions");
  if (actions && config.links) {
    const order = [
      ["pdf", "PDF", true],
      ["arxiv", "arXiv", false],
      ["code", "Code", false],
      ["video", "Video", false],
      ["data", "Data", false],
    ];
    actions.innerHTML = order
      .filter(([key]) => config.links[key])
      .map(([key, label, primary], i) => {
        const cls = primary || i === 0 ? "btn btn-primary" : "btn btn-ghost";
        return `<a class="${cls}" href="${escapeAttr(config.links[key])}">${label}</a>`;
      })
      .join("");
  }

  const highlightList = document.getElementById("highlight-list");
  if (highlightList && Array.isArray(config.highlights)) {
    highlightList.innerHTML = config.highlights
      .map(
        (item) => `
      <li data-reveal>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </li>`
      )
      .join("");
  }

  const copyBtn = document.getElementById("copy-bibtex");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const text = config.bibtex || "";
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copied";
        window.setTimeout(() => {
          copyBtn.textContent = "Copy BibTeX";
        }, 1600);
      } catch {
        copyBtn.textContent = "Select text above";
      }
    });
  }

  setupReveal();

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function escapeAttr(str) {
    return escapeHtml(str).replaceAll("'", "&#39;");
  }

  function setupReveal() {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node, i) => {
      if (node.closest(".hero") || node.classList.contains("site-header")) {
        window.setTimeout(() => node.classList.add("is-visible"), 80 + i * 90);
      } else {
        observer.observe(node);
      }
    });
  }
})();
