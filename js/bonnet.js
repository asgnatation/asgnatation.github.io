/* Bonnet du club en 3D : dôme silicone, textures issues des photos recto/verso,
   bord découpé d'après la silhouette réelle du bonnet. */
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const canvas = document.getElementById("bonnet-canvas");
const stage = canvas?.parentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

try { start(); } catch (err) { console.warn(err); fallback(); }

function fallback() {
  document.getElementById("bonnet-fallback").hidden = false;
  canvas.hidden = true;
}

function start() {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
  camera.position.set(0, 1.6, 7.0);
  camera.lookAt(0, 0.05, 0);

  const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(3, 4, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0x9fe8ff, 2.2); rim.position.set(-4, 2, -3); scene.add(rim);
  const mintRim = new THREE.DirectionalLight(0x6dffb0, 1.1); mintRim.position.set(4, -1, -4); scene.add(mintRim);

  const loader = new THREE.TextureLoader();
  const tex = (url, srgb) => new Promise((ok, ko) => loader.load(url, (t) => {
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = renderer.capabilities.getMaxAnisotropy(); ok(t);
  }, undefined, ko));

  // géométrie : ellipsoïde ouvert, coupé sous l'équateur
  const B = 0.5;                 // la silhouette à plat descend à -0.69 rayon sous le centre de l'oreille
  const THETA = Math.acos(-0.5);  // jusqu'où descend la géométrie (le masque découpe le bord réel)
  const SX = 0.86, SY = 1.0, SZ = 1.14;
  const half = (side) => {
    const phiStart = side < 0 ? -Math.PI / 2 : Math.PI / 2;
    const g = new THREE.SphereGeometry(1, 180, 140, phiStart, Math.PI, 0, THETA);
    const pos = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      const nx = pos.getX(i), ny = pos.getY(i), nz = pos.getZ(i);
      // projection azimutale équidistante centrée sur l'oreille ≈ bonnet posé à plat
      const r = Math.acos(Math.min(1, Math.abs(nx))) / (Math.PI / 2);
      const len = Math.hypot(ny, nz) || 1;
      const fx = r * nz / len, fy = r * ny / len;
      const u = side < 0 ? (fx + 1) / 2 : (1 - fx) / 2;
      const v = (fy + B) / (1 + B);
      uv.setXY(i, u, v);
      pos.setXYZ(i, nx * SX, ny * SY, nz * SZ);
    }
    g.computeVertexNormals();
    return g;
  };

  Promise.all([
    tex("assets/bonnet/recto-color.png", true), tex("assets/bonnet/recto-mask.png"), tex("assets/bonnet/recto-print.png"),
    tex("assets/bonnet/verso-color.png", true), tex("assets/bonnet/verso-mask.png"), tex("assets/bonnet/verso-print.png")
  ]).then(([rc, rm, rp, vc, vm, vp]) => build({ rc, rm, rp, vc, vm, vp })).catch((e) => { console.warn(e); fallback(); });

  const group = new THREE.Group(); scene.add(group);
  const cap = new THREE.Group(); group.add(cap);
  group.rotation.x = 0.04;

  function build(t) {
    const outer = (map, alpha, bump) => new THREE.MeshPhysicalMaterial({
      map, alphaMap: alpha, alphaTest: 0.5, bumpMap: bump, bumpScale: 1.4,
      roughness: 0.38, metalness: 0, clearcoat: 0.55, clearcoatRoughness: 0.32,
      sheen: 0.4, sheenRoughness: 0.5, sheenColor: new THREE.Color(0x3a4a55), side: THREE.FrontSide
    });
    const inner = (alpha) => new THREE.MeshStandardMaterial({ color: 0x0d0e11, roughness: 0.85, alphaMap: alpha, alphaTest: 0.5, side: THREE.BackSide });
    for (const [side, c, m, p] of [[-1, t.rc, t.rm, t.rp], [1, t.vc, t.vm, t.vp]]) {
      const g = half(side);
      cap.add(new THREE.Mesh(g, outer(c, m, p)));
      cap.add(new THREE.Mesh(g, inner(m)));
    }
    cap.position.y = -0.18;
    cap.rotation.x = -0.16;   // l'avant du bonnet remonte, comme porté
    cap.scale.setScalar(1.15);
    ready();
  }

  // ---------- interaction ----------
  const FACE = { asg: Math.PI / 2, gournay: -Math.PI / 2 };
  let base = FACE.asg, target = base, drag = 0, vel = 0, scrollRot = 0, mode = "asg", dragging = false, lastX = 0;
  let intro = { y: 2.2, s: 0.6, r: -Math.PI * 1.2 };

  canvas.addEventListener("pointerdown", (e) => { dragging = true; lastX = e.clientX; vel = 0; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener("pointermove", (e) => { if (!dragging) return; const dx = e.clientX - lastX; lastX = e.clientX; drag += dx * 0.012; vel = dx * 0.012; });
  const up = () => { dragging = false; };
  canvas.addEventListener("pointerup", up); canvas.addEventListener("pointercancel", up);

  document.querySelectorAll("[data-face]").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll("[data-face]").forEach((x) => x.classList.toggle("is-on", x === b));
    mode = b.dataset.face;
    if (FACE[mode] !== undefined) {
      // revenir sur la face demandée par le chemin le plus court
      const cur = target + drag, goal = FACE[mode] - scrollRot, TAU = Math.PI * 2;
      target = goal + Math.round((cur - goal) / TAU) * TAU; drag = 0; vel = 0;
      base = target;
    }
  }));

  // ---------- taille & visibilité ----------
  const resize = () => {
    const r = stage.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height; camera.updateProjectionMatrix();
  };
  resize(); new ResizeObserver(resize).observe(stage);

  let visible = false, raf = 0, built = false;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !raf && built) loop(); }, { rootMargin: "100px" }).observe(stage);

  function ready() {
    built = true;
    if (window.gsap && !reduce) {
      const run = () => gsap.to(intro, { y: 0, s: 1, r: 0, duration: 1.8, ease: "elastic.out(1, 0.6)" });
      if (window.ScrollTrigger) ScrollTrigger.create({ trigger: stage, start: "top 85%", once: true, onEnter: run }); else run();
      // rotation pilotée par le scroll (épinglée sur grand écran)
      if (window.ScrollTrigger) {
        const pinIt = matchMedia("(min-width: 861px)").matches;
        ScrollTrigger.create({
          trigger: "#bonnet", start: pinIt ? "top top" : "top bottom", end: pinIt ? "+=110%" : "bottom top",
          pin: pinIt ? ".bonnet__pin" : false, scrub: 0.6,
          onUpdate: (s) => { scrollRot = s.progress * Math.PI * 2; }
        });
      }
    } else { intro = { y: 0, s: 1, r: 0 }; }
    if (visible) loop(); else renderer.render(scene, camera);
  }

  const clock = new THREE.Clock();
  const loop = () => {
    raf = 0;
    if (!visible) return;
    const dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
    if (!dragging) { drag += vel; vel *= 0.94; }
    if (mode === "spin" && !dragging) target += dt * 0.9;
    const goal = target + drag + scrollRot + intro.r;
    group.rotation.y += (goal - group.rotation.y) * Math.min(1, dt * 7);
    group.position.y = intro.y + (reduce ? 0 : Math.sin(t * 1.4) * 0.05);
    group.rotation.z = reduce ? 0 : Math.sin(t * 0.9) * 0.035;
    group.scale.setScalar(intro.s);
    renderer.render(scene, camera);
    raf = requestAnimationFrame(loop);
  };
}
