/* AS Gournay Natation — rendu du contenu + interactions */
(() => {
  const C = window.CLUB;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const JOURS = { lun: "Lundi", mar: "Mardi", mer: "Mercredi", jeu: "Jeudi", ven: "Vendredi", sam: "Samedi" };
  const JCOURT = { lun: "Lun", mar: "Mar", mer: "Mer", jeu: "Jeu", ven: "Ven", sam: "Sam" };
  const toH = (s) => { const m = String(s).match(/(\d+)h(\d*)/); return m ? +m[1] + (m[2] ? +m[2] / 60 : 0) : 0; };
  const fmtDate = (iso, opt) => new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", opt);
  const euro = (n) => `${n} €`;
  const COLORS = {
    "jeunes": ["#8ED3F2", "#05253A"], "ados": ["#2FA3E0", "#fff"], "adultes-loisirs": ["#0B6FAE", "#fff"],
    "groupe-1": ["#3DD683", "#05281A"], "groupe-2": ["#17985A", "#fff"], "adultes-competition": ["#0B2536", "#fff"]
  };
  const label = (g) => g.nom + (g.id.startsWith("adultes") ? (g.filiere === "loisirs" ? " loisirs" : " compét") : "");

  /* ---------- liens & textes simples ---------- */
  $$("[data-saison]").forEach((e) => (e.textContent = C.saison));
  $$("[data-link]").forEach((a) => { const u = C.contact[a.dataset.link]; if (u) a.href = u; });
  $$("[data-mail]").forEach((a) => { a.href = "mailto:" + C.contact.email + "?subject=" + encodeURIComponent("Inscription AS Gournay Natation"); });
  $$('[data-link="inscription"]').forEach((a) => { if (!C.contact.inscription || C.contact.inscription === "#") { a.removeAttribute("target"); a.href = "#contact"; } });
  if (C.alerte?.actif) { $("#alerte").hidden = false; $("#alerte-texte").textContent = C.alerte.texte; }
  $("#c-adresse").innerHTML = `${esc(C.contact.adresse)}<br>${esc(C.contact.ville)}`;
  $("#c-email").textContent = C.contact.email; $("#c-email").href = "mailto:" + C.contact.email;
  $("#c-tel").textContent = C.contact.telephone; $("#c-tel").href = "tel:" + C.contact.telephone.replace(/\s/g, "");
  $("#itineraire").href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Piscine avenue des Aulnaies 76220 Gournay-en-Bray");
  $$(".copy").forEach((b) => b.addEventListener("click", async () => {
    const v = C.contact[b.dataset.copy];
    try { await navigator.clipboard.writeText(v); b.textContent = "Copié"; }
    catch { const r = document.createRange(); r.selectNodeContents(b.previousElementSibling); const s = getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = "Sélectionné"; }
    setTimeout(() => (b.textContent = "Copier"), 1800);
  }));

  /* ---------- stats ---------- */
  $("#stats").innerHTML = C.chiffres.map((c) => `<div class="stat"><b data-count="${c.valeur}" data-suffix="${esc(c.suffixe)}">${c.valeur}${esc(c.suffixe)}</b><span>${esc(c.label)}</span></div>`).join("");

  /* ---------- groupes ---------- */
  const cards = $("#cards");
  const renderCards = (fil) => {
    cards.innerHTML = C.groupes.filter((g) => g.filiere === fil).map((g) => `
      <article class="card card--${g.filiere}" data-id="${g.id}">
        <div class="card__top">
          <div><h3 class="card__name">${esc(g.nom)}</h3><p class="card__pub">${esc(g.public)}</p></div>
          <div class="card__price">${euro(g.tarif)}<small>la saison</small></div>
        </div>
        <span class="card__sessions">${esc(g.seances)} / semaine</span>
        <p class="card__desc">${esc(g.description)}</p>
        <ul class="slots">${g.creneaux.map((c) => `<li><b>${JOURS[c.jour]}</b><span>${c.debut} – ${c.fin}${c.note ? `<em>${esc(c.note)}</em>` : ""}</span></li>`).join("")}</ul>
      </article>`).join("");
    if (window.gsap && !reduce) gsap.from(cards.children, { y: 30, opacity: 0, duration: .55, stagger: .07, ease: "power3.out" });
  };
  let filiere = "loisirs";
  const setTab = (fil) => {
    filiere = fil;
    $$(".tabs [role=tab]").forEach((t) => t.setAttribute("aria-selected", t.dataset.filiere === fil));
    renderCards(fil);
  };
  $$(".tabs [role=tab]").forEach((t) => t.addEventListener("click", () => { setTab(t.dataset.filiere); markMatch(); }));
  setTab("loisirs");

  /* ---------- trouve ton groupe ---------- */
  const startYear = parseInt(C.saison, 10);
  const sel = $("#f-annee");
  for (let y = startYear - 4; y >= startYear - 90; y--) sel.add(new Option(y, y));
  sel.value = startYear - 11;
  let obj = "loisirs", match = [];
  const findGroup = () => {
    const y = +sel.value;
    const inRange = (g) => (g.naissanceMin == null || y >= g.naissanceMin) && (g.naissanceMax == null || y <= g.naissanceMax);
    const list = C.groupes.filter((g) => g.filiere === obj);
    const hit = list.filter(inRange);
    return { groups: hit.length ? hit : [list[list.length - 1]] };
  };
  const res = $("#finder-res");
  const renderFinder = () => {
    const r = findGroup(); match = r.groups.map((g) => g.id);
    const g = r.groups;
    const young = +sel.value >= startYear - 5;
    res.innerHTML = `
      <span class="k">Ton groupe</span>
      <span class="g">${g.map((x) => esc(label(x))).join(" ou ")}</span>
      <span class="p">${g.length > 1 ? `${euro(g[0].tarif)} – ${euro(g[1].tarif)}` : euro(g[0].tarif)} · ${esc(g[0].seances)}</span>
      <p class="t">${young ? "Rappel : il faut savoir nager 25 m pour s'inscrire. " : ""}${esc(r.note || g[0].creneaux.map((c) => `${JCOURT[c.jour]} ${c.debut}`).join(" · "))}</p>
      <a href="#planning" data-focus="${match.join(",")}">Voir sur le planning →</a>`;
    if (filiere !== g[0].filiere) setTab(g[0].filiere);
    markMatch();
    if (window.gsap && !reduce) gsap.from(res.children, { y: 16, opacity: 0, duration: .45, stagger: .05, ease: "power2.out" });
  };
  const markMatch = () => $$(".card").forEach((c) => c.classList.toggle("is-match", match.includes(c.dataset.id)));
  sel.addEventListener("change", renderFinder);
  $$(".seg [role=radio]").forEach((b) => b.addEventListener("click", () => {
    obj = b.dataset.obj; $$(".seg [role=radio]").forEach((x) => x.setAttribute("aria-checked", x === b)); renderFinder();
  }));
  res.addEventListener("click", (e) => { const a = e.target.closest("[data-focus]"); if (a) focusSched(a.dataset.focus.split(",")); });
  renderFinder();

  /* ---------- planning ---------- */
  const sched = $("#sched");
  const days = ["lun", "mar", "mer", "jeu", "sam"];
  const H = 58, GAP = 34, A0 = 10, A1 = 14, B0 = 17, B1 = 21;
  const y = (t) => (t <= A1 ? (t - A0) * H : (A1 - A0) * H + GAP + (Math.max(t, B0) - B0) * H);
  const totalH = y(B1) + 14;
  let html = `<div class="sched__corner"></div>` + days.map((d) => `<div class="sched__day">${JOURS[d]}</div>`).join("");
  let hours = "";
  for (let t = A0; t <= B1; t++) { if (t > A1 && t < B0) continue; hours += `<span style="top:${y(t)}px">${t}h</span>`; }
  html += `<div class="sched__hours" style="height:${totalH}px">${hours}</div>`;
  days.forEach((d) => {
    const ev = [];
    C.groupes.forEach((g) => g.creneaux.filter((c) => c.jour === d).forEach((c) => ev.push({ g, c, s: toH(c.debut), e: toH(c.fin) })));
    ev.sort((a, b) => a.s - b.s || a.e - b.e);
    // colonnes pour les créneaux qui se chevauchent
    const cols = []; let cluster = [], clusterEnd = -1;
    const flush = () => { const n = Math.max(...cluster.map((x) => x.col)) + 1; cluster.forEach((x) => (x.n = n)); cluster = []; };
    ev.forEach((x) => {
      if (x.s >= clusterEnd && cluster.length) { flush(); cols.length = 0; }
      let i = cols.findIndex((end) => end <= x.s); if (i < 0) { i = cols.length; cols.push(0); }
      cols[i] = x.e; x.col = i; cluster.push(x); clusterEnd = Math.max(clusterEnd, x.e);
    });
    if (cluster.length) flush();
    const slots = ev.map((x) => {
      const [bg, tc] = COLORS[x.g.id] || ["#0E8AD0", "#fff"];
      const top = y(x.s) + 2, h = y(x.e) - y(x.s) - 4, w = 100 / x.n;
      return `<div class="slot" data-g="${x.g.id}" style="--c:${bg};--tc:${tc};top:${top}px;height:${h}px;left:calc(${w * x.col}% + 3px);width:calc(${w}% - 6px)">
        <b>${esc(label(x.g))}</b><span>${x.c.debut}–${x.c.fin}</span>${x.c.note ? `<em>${esc(x.c.note)}</em>` : ""}</div>`;
    }).join("");
    html += `<div class="sched__col" style="height:${totalH}px">${slots}<div class="sched__gap" style="top:${y(A1)}px;height:${GAP}px">14h – 17h</div></div>`;
  });
  sched.innerHTML = html;
  sched.style.setProperty("--h", H + "px");
  const lines = `repeating-linear-gradient(180deg, transparent 0 ${H - 1}px, var(--line) ${H - 1}px ${H}px)`;
  $$(".sched__col").forEach((c) => Object.assign(c.style, { backgroundImage: `${lines}, ${lines}`, backgroundSize: `100% ${y(A1)}px, 100% ${totalH - y(B0)}px`, backgroundPosition: `0 0, 0 ${y(B0)}px`, backgroundRepeat: "no-repeat" }));
  $("#legend").innerHTML = C.groupes.map((g) => `<button class="chip" data-g="${g.id}" style="--c:${COLORS[g.id][0]}"><i></i>${esc(label(g))}</button>`).join("");
  let focused = [];
  const focusSched = (ids) => {
    focused = ids.length && ids.join() !== focused.join() ? ids : [];
    sched.classList.toggle("has-focus", focused.length > 0);
    $$(".slot", sched).forEach((s) => s.classList.toggle("is-focus", focused.includes(s.dataset.g)));
    $$("#legend .chip").forEach((b) => b.classList.toggle("is-on", focused.includes(b.dataset.g)));
  };
  $("#legend").addEventListener("click", (e) => { const b = e.target.closest("[data-g]"); if (b) focusSched([b.dataset.g]); });
  sched.addEventListener("click", (e) => { const s = e.target.closest(".slot"); if (s) focusSched([s.dataset.g]); });

  /* ---------- événements à venir ---------- */
  const startOf = (e) => new Date(`${e.date}T${e.heure || "09:00"}:00`);
  const endOf = (e) => new Date(`${e.date}T23:59:59`);
  const evs = (C.evenements || []).filter((e) => endOf(e) > new Date()).sort((a, b) => startOf(a) - startOf(b));
  const wrap = $("#next-wrap"), heroNext = $("#hero-next");
  const TAG = { competition: "Prochaine compète", evenement: "Prochain événement" };
  const dLong = (e) => fmtDate(e.date, { weekday: "long", day: "numeric", month: "long" });
  if (evs.length) {
    const pc = evs[0], target = startOf(pc), live = pc.lienLive && pc.lienLive.trim();
    const inner = `
      <div class="next__date"><b>${fmtDate(pc.date, { day: "numeric" })}</b><span>${fmtDate(pc.date, { month: "short" }).replace(".", "")}</span></div>
      <div><p class="next__tag">${TAG[pc.type] || TAG.competition}</p><h2 class="next__name">${esc(pc.nom)}</h2>
        <p class="next__meta">${esc(dLong(pc))} · ${esc(pc.lieu)}${pc.public ? " · " + esc(pc.public) : ""}</p>
        ${live ? `<span class="next__live"><span class="dot"></span>Programme et résultats en direct sur le live FFN →</span>`
               : (pc.type !== "evenement" ? `<p class="next__pending">Le lien du live FFN (programme et résultats) sera ajouté ici dès sa publication par la FFN.</p>` : "")}
      </div>
      <div class="cdown" aria-label="Compte à rebours"><div><b data-u="j">0</b><span>jours</span></div><div><b data-u="h">0</b><span>heures</span></div><div><b data-u="m">0</b><span>min</span></div><div><b data-u="s">0</b><span>sec</span></div></div>`;
    wrap.innerHTML = live ? `<a class="next" href="${esc(live)}" target="_blank" rel="noopener">${inner}</a>` : `<div class="next">${inner}</div>`;
    const nextEl = $(".next", wrap);
    const tick = () => {
      const d = Math.max(0, target - new Date()) / 1000;
      const v = { j: Math.floor(d / 86400), h: Math.floor(d / 3600) % 24, m: Math.floor(d / 60) % 60, s: Math.floor(d) % 60 };
      $$("[data-u]", nextEl).forEach((b) => (b.textContent = String(v[b.dataset.u]).padStart(2, "0")));
      const badge = d > 0 ? `J-${v.j}<small>${v.j > 1 ? "jours" : "jour"}</small>` : `J<small>c'est parti</small>`;
      heroNext.innerHTML = `<a href="${live ? esc(live) : "#competitions"}"${live ? ' target="_blank" rel="noopener"' : ""}><span class="cd">${badge}</span><span><b>${esc(pc.lieu)}</b><span class="s">${esc(dLong(pc))}</span></span></a>`;
    };
    tick(); setInterval(tick, 1000);
    $("#upcoming").innerHTML = evs.slice(1).map((e) => `<li><time datetime="${e.date}">${esc(fmtDate(e.date, { day: "numeric", month: "short" }))}</time><b>${esc(e.nom)}</b><span>${esc(e.lieu)}${e.public ? " · " + esc(e.public) : ""}</span>${e.lienLive ? `<a href="${esc(e.lienLive)}" target="_blank" rel="noopener">Live FFN →</a>` : ""}</li>`).join("");
  } else {
    wrap.innerHTML = `<div class="next"><div class="next__date"><b>?</b><span>bientôt</span></div><div><p class="next__tag">Prochaine compète</p><h2 class="next__name">Le calendrier arrive</h2><p class="next__meta">Suis le club sur Instagram pour les prochaines dates.</p></div></div>`;
    heroNext.remove();
  }
  $("#upcoming").hidden = !$("#upcoming").children.length;
  if ($("#bonnet-prix") && C.bonnet?.prix != null) $("#bonnet-prix").textContent = C.bonnet.prix;

  /* ---------- actus ---------- */
  const CAT = { "bassin": "Bassin", "eau-libre": "Eau libre", "vie-du-club": "Vie du club" };
  $("#news").innerHTML = [...C.actus].sort((a, b) => b.date.localeCompare(a.date)).map((a) => `
    <article class="post reveal" data-cat="${a.categorie}">
      <div class="post__img"><img src="${esc(a.image)}" alt="" loading="lazy"><span class="post__cat">${CAT[a.categorie] || ""}</span></div>
      <div class="post__body">
        <time class="post__date" datetime="${a.date}">${esc(fmtDate(a.date, { day: "numeric", month: "long", year: "numeric" }))}</time>
        <h3 class="post__title">${esc(a.titre)}</h3>
        <p class="post__txt">${esc(a.resume)}</p>
        ${a.temps_forts?.length ? `<ul class="hl">${a.temps_forts.map((t) => `<li><b>${esc(t.valeur)}</b><span>${esc(t.label)}</span></li>`).join("")}</ul>` : ""}
      </div>
    </article>`).join("");
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest("[data-cat]"); if (!b) return;
    $$("#filters .chip").forEach((x) => x.classList.toggle("is-on", x === b));
    $$(".post").forEach((p) => (p.hidden = !(b.dataset.cat === "tout" || p.dataset.cat === b.dataset.cat)));
  });

  /* ---------- galerie + lightbox ---------- */
  const G = C.galerie;
  $("#mosaic").innerHTML = G.map((g, i) => `<button data-i="${i}" aria-label="Agrandir : ${esc(g.alt)}"><img src="${esc(g.src.replace(".webp", "-sm.webp"))}" alt="${esc(g.alt)}" loading="lazy"></button>`).join("");
  const lb = $("#lightbox"), lbImg = $("#lb-img"); let cur = 0;
  const show = (i) => { cur = (i + G.length) % G.length; lbImg.src = G[cur].src; lbImg.alt = G[cur].alt; };
  $("#mosaic").addEventListener("click", (e) => { const b = e.target.closest("[data-i]"); if (!b) return; show(+b.dataset.i); lb.showModal?.(); });
  $("#lb-close").onclick = () => lb.close(); $("#lb-prev").onclick = () => show(cur - 1); $("#lb-next").onclick = () => show(cur + 1);
  lb.addEventListener("click", (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") show(cur - 1); if (e.key === "ArrowRight") show(cur + 1); });

  /* ---------- inscription ---------- */
  $("#aides").innerHTML = C.aides.map((a) => `<li><b>${esc(a.titre)}</b>${esc(a.texte)}</li>`).join("");
  $("#savoir").innerHTML = C.aSavoir.map((t) => `<li>${esc(t)}</li>`).join("");

  /* ---------- règlement intérieur ---------- */
  const R = window.REGLEMENT, docDlg = $("#reglement");
  if (R && docDlg) {
    const roman = ["I", "II", "III", "IV", "V", "VI"];
    $("#doc-toc").innerHTML = R.titres.map((t, i) => `<li><a href="#rg-t${i}">${roman[i]}. ${esc(t.titre)}</a><ol>${t.articles.map((a) => `<li><a href="#rg-a${a.n}">Art. ${a.n} · ${esc(a.titre)}</a></li>`).join("")}</ol></li>`).join("");
    $("#doc-body").innerHTML = `
      <header class="doc__head">
        <img src="assets/logos/logo-asg.svg" alt="" width="120" height="68">
        <div><p class="doc__kicker">AS Gournay Natation · Association loi 1901 affiliée à la FFN</p>
        <h2 class="doc__title" id="doc-title">Règlement intérieur</h2>
        <p class="doc__season">Saison ${esc(C.saison)}${R.miseAJour ? ` · mis à jour en ${esc(R.miseAJour.toLowerCase())}` : ""}</p></div>
      </header>
      <p class="doc__pre">${esc(R.preambule)}</p>
      ${R.titres.map((t, i) => `<section class="doc__sec" id="rg-t${i}"><h3 class="doc__h3"><span>${roman[i]}</span>${esc(t.titre)}</h3>
        ${t.articles.map((a) => `<div class="doc__art" id="rg-a${a.n}"><h4 class="doc__h4">Article ${a.n}<span>${esc(a.titre)}</span></h4>
          ${(a.p || []).map((x) => `<p>${esc(x)}</p>`).join("")}
          ${a.liste ? `<ul>${a.liste.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
          ${(a.apres || []).map((x) => `<p>${esc(x)}</p>`).join("")}</div>`).join("")}</section>`).join("")}
      <footer class="doc__foot">Le Bureau de l'AS Gournay Natation · Piscine municipale, avenue des Aulnaies, 76220 Gournay-en-Bray</footer>`;
    const scroller = $("#doc-scroll");
    const openDoc = () => { docDlg.showModal?.(); scroller.scrollTop = 0; document.documentElement.style.overflow = "hidden"; window.__lenis?.stop(); };
    const closeDoc = () => docDlg.close();
    docDlg.addEventListener("close", () => { document.documentElement.style.overflow = ""; window.__lenis?.start(); });
    $$("[data-open-reglement]").forEach((b) => b.addEventListener("click", openDoc));
    $("#doc-close").addEventListener("click", closeDoc);
    $("#doc-toc").addEventListener("click", (e) => { const a = e.target.closest("a"); if (!a) return; e.preventDefault(); e.stopPropagation(); const t = $(a.getAttribute("href")); scroller.scrollTo({ top: t.offsetTop - 16, behavior: "smooth" }); });
    if (location.hash === "#reglement") openDoc();
  }

  /* ---------- équipe ---------- */
  const avatar = `<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50 14c-17 0-29 12-29 28 0 3 .4 6 1.2 8.6C26 46 37 43 50 43s24 3 27.8 7.6c.8-2.6 1.2-5.6 1.2-8.6 0-16-12-28-29-28Z"/><circle cx="50" cy="50" r="17" fill="currentColor" opacity=".55"/><path fill="currentColor" opacity=".55" d="M18 96c2-17 15-27 32-27s30 10 32 27Z"/></svg>`;
  const grp = (t, list) => list?.length ? `<div class="team-group"><h3>${t}</h3><div class="team">${list.map((m) => `
    <article class="member reveal"><div class="member__ph">${m.photo ? `<img src="${esc(m.photo)}" alt="${esc(m.nom)}" loading="lazy">` : avatar + `<span class="tbd">Photo à venir</span>`}</div>
    <div class="member__in"><b>${esc(m.nom)}</b><span>${esc(m.role)}</span></div></article>`).join("")}</div></div>` : "";
  $("#team").innerHTML = grp("Bureau", C.equipe.bureau) + grp("Entraîneurs", C.equipe.entraineurs) + grp("Officiels", C.equipe.officiels) + grp("Communication", C.equipe.communication);

  /* ---------- partenaires ---------- */
  $("#logos").innerHTML = C.partenaires.map((p) => `<li><img src="${esc(p.logo)}" alt="${esc(p.nom)}" loading="lazy">${p.role ? `<em>${esc(p.role)}</em>` : ""}</li>`).join("");

  /* ---------- nav ---------- */
  const nav = $("#nav"), burger = $("#burger"), menu = $("#menu");
  const onScroll = () => nav.classList.toggle("is-stuck", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  burger.addEventListener("click", () => { const o = burger.getAttribute("aria-expanded") !== "true"; burger.setAttribute("aria-expanded", o); menu.hidden = !o; nav.classList.toggle("is-stuck", o || scrollY > 30); });
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) { burger.setAttribute("aria-expanded", false); menu.hidden = true; } });

  /* ---------- motion (GSAP) ---------- */
  if (!window.gsap || reduce) return;
  gsap.registerPlugin(ScrollTrigger);
  let lenis;
  if (window.Lenis && !matchMedia("(pointer:coarse)").matches) {
    lenis = new Lenis({ lerp: 0.11 });
    document.documentElement.classList.add("lenis");
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
    window.__lenis = lenis;
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]'); if (!a) return;
      const id = a.getAttribute("href"); const t = id === "#top" ? 0 : document.querySelector(id);
      if (t === null) return; e.preventDefault(); lenis.scrollTo(t, { offset: -70, duration: 1.2 });
    });
  }
  // hero intro
  gsap.from(".hero__title .word", { yPercent: 110, rotate: 4, duration: 1.1, ease: "expo.out", stagger: .08, delay: .1 });
  gsap.from([".hero__eyebrow", ".hero__lead", ".hero__cta"], { y: 24, opacity: 0, duration: .8, ease: "power3.out", stagger: .1, delay: .45 });
  gsap.to(".hero__in", { yPercent: -18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  // reveals
  $$(".reveal").forEach((el) => gsap.from(el, { y: 36, opacity: 0, duration: .9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } }));
  // parallax photos
  $$("[data-speed]").forEach((el) => gsap.to(el, { yPercent: -100 * +el.dataset.speed, ease: "none", scrollTrigger: { trigger: ".club", start: "top bottom", end: "bottom top", scrub: true } }));
  // counters
  $$("[data-count]").forEach((el) => {
    const end = +el.dataset.count, suf = el.dataset.suffix || "", o = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => gsap.to(o, { v: end, duration: 1.6, ease: "power2.out", onUpdate: () => (el.textContent = Math.round(o.v) + suf) }) });
  });
  // marquee driven by scroll velocity
  const track = $("#marquee"); let x = 0, dir = 1, boost = 0;
  ScrollTrigger.create({ onUpdate: (s) => { dir = s.direction; boost = Math.min(Math.abs(s.getVelocity()) / 300, 12); } });
  gsap.ticker.add(() => {
    const half = track.scrollWidth / 2; x -= (1.1 + boost) * dir; boost *= .92;
    if (x < -half) x += half; if (x > 0) x -= half; track.style.transform = `translate3d(${x}px,0,0)`;
  });
  // schedule slots pop in
  $$(".slot").forEach((s, i) => s.style.setProperty("--i", i));
  new IntersectionObserver(([e], o) => { if (e.isIntersecting) { sched.classList.add("is-in"); o.disconnect(); } }, { threshold: .25 }).observe(sched);
})();
