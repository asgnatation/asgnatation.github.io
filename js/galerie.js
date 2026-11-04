/* Galerie par année : sélecteur d'année, albums par événement, visionneuse plein écran.
   Les données viennent de js/galerie-photos.js (window.GALERIE). */
(() => {
  const D = window.GALERIE;
  const root = document.getElementById("gal");
  if (!D || !root) return;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sm = (src) => src.replace(/\.webp$/, "-sm.webp");
  const plural = (n, a, b) => `${n} ${n > 1 ? b : a}`;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const years = D.annees.filter((y) => y.albums.length);
  const total = years.reduce((s, y) => s + y.albums.reduce((t, a) => t + a.photos.length, 0), 0);

  const btn = $("#gal-year"), menu = $("#gal-menu"), grid = $("#gal-grid"), mark = $("#gal-mark"), meta = $("#gal-meta");
  $("#gal-total").textContent = `${plural(total, "photo", "photos")} · ${years[years.length - 1].annee} – ${years[0].annee}`;

  // menu des années
  menu.innerHTML = years.map((y, i) => {
    const n = y.albums.reduce((t, a) => t + a.photos.length, 0);
    return `<li role="option" id="gal-opt-${y.annee}" data-i="${i}" aria-selected="false" tabindex="-1"><b>${y.annee}</b><span>${plural(n, "photo", "photos")}</span></li>`;
  }).join("");

  let yi = 0;
  const openMenu = (o) => {
    menu.hidden = !o; btn.setAttribute("aria-expanded", o);
    if (o) { const cur = menu.children[yi]; cur.focus({ preventScroll: true }); cur.scrollIntoView({ block: "nearest" }); }
  };
  btn.addEventListener("click", () => openMenu(menu.hidden));
  document.addEventListener("click", (e) => { if (!menu.hidden && !e.target.closest(".gal__picker")) openMenu(false); });
  menu.addEventListener("click", (e) => { const li = e.target.closest("[data-i]"); if (!li) return; setYear(+li.dataset.i); openMenu(false); btn.focus(); });
  menu.addEventListener("keydown", (e) => {
    const items = [...menu.children], k = items.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); items[Math.min(k + 1, items.length - 1)].focus(); }
    if (e.key === "ArrowUp") { e.preventDefault(); items[Math.max(k - 1, 0)].focus(); }
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setYear(k); openMenu(false); btn.focus(); }
    if (e.key === "Escape") { openMenu(false); btn.focus(); }
  });
  $("#gal-prev").addEventListener("click", () => setYear(Math.min(yi + 1, years.length - 1)));
  $("#gal-next").addEventListener("click", () => setYear(Math.max(yi - 1, 0)));

  const render = () => {
    const y = years[yi];
    const n = y.albums.reduce((t, a) => t + a.photos.length, 0);
    btn.querySelector("b").textContent = y.annee;
    mark.textContent = y.annee;
    meta.textContent = `${plural(y.albums.length, "album", "albums")} · ${plural(n, "photo", "photos")}`;
    [...menu.children].forEach((li, i) => li.setAttribute("aria-selected", i === yi));
    $("#gal-prev").disabled = yi === years.length - 1;
    $("#gal-next").disabled = yi === 0;
    $("#gal-prev").setAttribute("aria-label", yi < years.length - 1 ? `Année ${years[yi + 1].annee}` : "Année précédente");
    $("#gal-next").setAttribute("aria-label", yi > 0 ? `Année ${years[yi - 1].annee}` : "Année suivante");
    grid.innerHTML = y.albums.map((a, ai) => {
      const c = a.photos[0], many = a.photos.length > 1;
      return `<button class="alb${many ? " alb--stack" : ""}" data-a="${ai}" aria-label="Ouvrir l'album ${esc(a.titre)}, ${plural(a.photos.length, "photo", "photos")}">
        <span class="alb__cover">${many ? `<i style="background-image:url('${esc(sm(a.photos[1].src))}')"></i>` : ""}<img src="${esc(sm(c.src))}" alt="" loading="lazy" width="${c.w || ""}" height="${c.h || ""}"><span class="alb__count">${a.photos.length} <small>${a.photos.length > 1 ? "photos" : "photo"}</small></span></span>
        <span class="alb__body"><span class="alb__date">${esc(a.date ? a.date + " " + y.annee : y.annee)}</span><b class="alb__title">${esc(a.titre)}</b></span>
      </button>`;
    }).join("");
  };
  const setYear = (i) => {
    if (i === yi && grid.children.length) return;
    const dir = i < yi ? 1 : -1; yi = i;
    if (window.gsap && !reduce && grid.children.length) {
      gsap.to(grid.children, { opacity: 0, y: 12, duration: .18, stagger: .015, onComplete: () => {
        render();
        gsap.fromTo(grid.children, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .5, ease: "power3.out", stagger: .04 });
        gsap.fromTo(mark, { opacity: 0, x: 40 * dir }, { opacity: 1, x: 0, duration: .6, ease: "power3.out" });
      } });
    } else render();
  };
  render();
  grid.addEventListener("click", (e) => { const b = e.target.closest("[data-a]"); if (b) openViewer(years[yi], +b.dataset.a, 0); });

  // ---------- visionneuse (défilement natif au doigt, adapté au paysage comme au portrait) ----------
  const V = $("#viewer"), vStrip = $("#vw-strip");
  const track = document.createElement("div");
  track.className = "vw__track"; track.id = "vw-track";
  $(".vw__fig").replaceWith(track);
  const vCap = document.createElement("p");
  vCap.className = "vw__cap"; vCap.id = "vw-cap"; vCap.hidden = true;
  $(".vw__stage").after(vCap);
  let alb = null, pi = 0, tgt = null, yearOf = null;

  const load = (k) => {
    const slide = track.children[k]; if (!slide || slide.dataset.loaded) return;
    slide.dataset.loaded = "1";
    const p = alb.photos[k], img = slide.querySelector("img");
    img.src = sm(p.src); // miniature déjà en cache : affichage immédiat
    const full = new Image();
    full.onload = () => { img.src = p.src; slide.classList.add("is-sharp"); };
    full.src = p.src;
  };
  const update = (i) => {
    pi = i;
    const p = alb.photos[pi];
    $("#vw-count").textContent = `${pi + 1} / ${alb.photos.length}`;
    vCap.textContent = p.legende || ""; vCap.hidden = !p.legende;
    [pi, pi + 1, pi - 1, pi + 2].forEach(load);
    [...vStrip.children].forEach((t, k) => t.setAttribute("aria-current", k === pi));
    const t = vStrip.children[pi];
    if (t) vStrip.scrollTo({ left: t.offsetLeft - (vStrip.clientWidth - t.offsetWidth) / 2, behavior: reduce ? "auto" : "smooth" });
  };
  const goTo = (i, smooth = true) => {
    const n = alb.photos.length; i = (i + n) % n; tgt = smooth ? i : null;
    track.scrollTo({ left: i * track.clientWidth, behavior: smooth && !reduce ? "smooth" : "auto" });
    if (!smooth) update(i);
  };
  let ticking = false;
  track.addEventListener("scroll", () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      if (!alb) return;
      const i = Math.round(track.scrollLeft / track.clientWidth);
      if (i === tgt) tgt = null;
      if (i !== pi && i >= 0 && i < alb.photos.length) update(i);
    });
  }, { passive: true });
  addEventListener("resize", () => { if (V.open && alb) track.scrollLeft = pi * track.clientWidth; });

  const openViewer = (y, ai, i) => {
    yearOf = y; alb = y.albums[ai]; pi = -1;
    $("#vw-title").textContent = alb.titre;
    $("#vw-date").textContent = alb.date ? `${alb.date} ${y.annee}` : y.annee;
    const one = alb.photos.length < 2;
    V.classList.toggle("is-single", one);
    track.innerHTML = alb.photos.map((p, k) => `<div class="vw__slide"><img alt="${esc(p.legende || `${alb.titre}, photo ${k + 1}`)}" decoding="async" draggable="false"></div>`).join("");
    vStrip.innerHTML = one ? "" : alb.photos.map((p, k) => `<button data-k="${k}" aria-label="Photo ${k + 1}"><img src="${esc(sm(p.src))}" alt="" loading="lazy"></button>`).join("");
    V.showModal?.(); document.documentElement.style.overflow = "hidden"; window.__lenis?.stop();
    requestAnimationFrame(() => goTo(i, false));
  };
  V.addEventListener("close", () => { document.documentElement.style.overflow = ""; window.__lenis?.start(); alb = null; track.innerHTML = ""; });
  $("#vw-close").addEventListener("click", () => V.close());
  $("#vw-prev").addEventListener("click", () => goTo((tgt ?? pi) - 1));
  $("#vw-next").addEventListener("click", () => goTo((tgt ?? pi) + 1));
  vStrip.addEventListener("click", (e) => { const b = e.target.closest("[data-k]"); if (b) goTo(+b.dataset.k); });
  V.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo((tgt ?? pi) - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); goTo((tgt ?? pi) + 1); }
  });
  V.addEventListener("click", (e) => { if (e.target === V) V.close(); });

  // lien direct vers une année : asgnatation.fr/#galerie-2014
  const h = location.hash.match(/^#galerie-(\d{4})$/);
  if (h) { const i = years.findIndex((y) => y.annee === h[1]); if (i >= 0) { yi = -1; setYear(i); } }
})();
