(() => {
  const c = window.PAPER_CONFIG;
  if (!c) return;

  document.title = c.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", c.abstract || c.title);

  document.getElementById("paper-title").textContent = c.title;
  document.getElementById("venue").textContent = c.venue || "";
  document.getElementById("abstract").textContent = c.abstract || "";
  document.getElementById("bibtex").textContent = c.bibtex || "";

  const authorsEl = document.getElementById("authors");
  authorsEl.innerHTML = (c.authors || [])
    .map((a, i) => {
      const name = a.link
        ? `<a href="${esc(a.link)}">${esc(a.name)}</a>`
        : esc(a.name);
      const sep = i < c.authors.length - 1 ? ", " : "";
      return name + sep;
    })
    .join("");

  const affEl = document.getElementById("affiliations");
  affEl.textContent = (c.affiliations || []).join(" · ");

  const linksEl = document.getElementById("links");
  linksEl.innerHTML = Object.entries(c.links || {})
    .filter(([, href]) => href)
    .map(([label, href]) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(label)}</a>`)
    .join("");

  const teaser = document.getElementById("teaser");
  if (c.teaser?.image) {
    teaser.hidden = false;
    const img = document.getElementById("teaser-image");
    img.src = c.teaser.image;
    img.alt = c.teaser.caption || "Teaser figure";
    document.getElementById("teaser-caption").textContent = c.teaser.caption || "";
  }

  const sectionsEl = document.getElementById("sections");
  sectionsEl.innerHTML = (c.sections || [])
    .map((s) => {
      const fig = s.image
        ? `<figure><img src="${esc(s.image)}" alt="${esc(s.caption || s.title)}" /><figcaption>${esc(s.caption || "")}</figcaption></figure>`
        : "";
      return `<section><h2>${esc(s.title)}</h2><p>${esc(s.text || "")}</p>${fig}</section>`;
    })
    .join("");

  const copyBtn = document.getElementById("copy-bibtex");
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(c.bibtex || "");
      copyBtn.textContent = "Copied";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1400);
    } catch {
      copyBtn.textContent = "Select text";
    }
  });

  function esc(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }
})();
