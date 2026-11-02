/* Mentions légales et confidentialité : ouverture de la fenêtre et coordonnées issues de contenu.js */
(() => {
  const C = window.CLUB || {}, dlg = document.getElementById("legal");
  if (!dlg) return;
  document.querySelectorAll("[data-c]").forEach((el) => { el.textContent = (C.contact || {})[el.dataset.c] || ""; });
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
  const scroller = document.getElementById("legal-scroll");
  const open = (part) => {
    dlg.showModal?.(); document.documentElement.style.overflow = "hidden"; window.__lenis?.stop();
    const t = document.getElementById("lg-" + part);
    scroller.scrollTop = t && part !== "mentions" ? t.offsetTop - 16 : 0;
  };
  dlg.addEventListener("close", () => { document.documentElement.style.overflow = ""; window.__lenis?.start(); });
  document.querySelectorAll("[data-open-legal]").forEach((b) => b.addEventListener("click", () => open(b.dataset.openLegal)));
  document.getElementById("legal-close").addEventListener("click", () => dlg.close());
  dlg.querySelector(".doc__toc").addEventListener("click", (e) => {
    const a = e.target.closest("a"); if (!a) return; e.preventDefault();
    scroller.scrollTo({ top: document.querySelector(a.getAttribute("href")).offsetTop - 16, behavior: "smooth" });
  });
  if (["#mentions-legales", "#confidentialite"].includes(location.hash)) open(location.hash === "#confidentialite" ? "confidentialite" : "mentions");
})();
