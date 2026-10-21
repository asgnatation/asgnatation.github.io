/* Hero : vue plongeante dans un couloir du bassin. Carrelage, ligne de nage,
   caustiques et ondes qui partent du doigt ou de la souris. WebGL 1, sans librairie. */
const canvas = document.getElementById("water");
const gl = canvas && (canvas.getContext("webgl", { antialias: false, alpha: false, preserveDrawingBuffer: false }));
if (gl) init();

function init() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MAX = 10;
  const vs = `attribute vec2 p; void main(){ gl_Position = vec4(p,0.,1.); }`;
  const fs = `
  precision highp float;
  uniform vec2 uRes; uniform float uTime; uniform float uLane; uniform vec4 uR[${MAX}];
  #define TAU 6.28318530718
  float waves(vec2 p, float t){
    float h = 0.0;
    h += sin(p.x*7.0 + t*1.10) * 0.010;
    h += sin(p.y*9.0 - t*1.35 + p.x*2.0) * 0.008;
    h += sin((p.x+p.y)*15.0 + t*1.9) * 0.004;
    h += sin((p.x-p.y*1.3)*23.0 - t*2.4) * 0.002;
    for(int i=0;i<${MAX};i++){
      vec4 r = uR[i]; float age = t - r.z;
      if(r.w <= 0.0 || age < 0.0 || age > 4.5) continue;
      float d = distance(p, r.xy);
      float front = age * 0.32;
      float env = exp(-pow((d - front) * 7.0, 2.0)) * exp(-age * 0.85) * r.w;
      h += sin((d - front) * 70.0) * 0.022 * env / (1.0 + d * 3.0);
    }
    return h;
  }
  float caustic(vec2 uv, float t){
    vec2 p = mod(uv * TAU, TAU) - 250.0;
    vec2 i = p; float c = 1.0; float inten = 0.005;
    for (int n = 0; n < 4; n++) {
      float tt = t * (1.0 - (3.5 / float(n + 1)));
      i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
      c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
    }
    c /= 4.0; c = 1.17 - pow(c, 1.4);
    return clamp(pow(abs(c), 8.0), 0.0, 1.0);
  }
  float box(float x, float a, float b, float s){ return smoothstep(a - s, a + s, x) - smoothstep(b - s, b + s, x); }
  void main(){
    vec2 uv = gl_FragCoord.xy / uRes.y;
    float aspect = uRes.x / uRes.y;
    float t = uTime;
    float e = 0.0025;
    float h = waves(uv, t);
    vec2 g = vec2(waves(uv + vec2(e,0.), t) - h, waves(uv + vec2(0.,e), t) - h) / e;
    vec2 q = uv + g * 0.035;                       // réfraction
    // carrelage du fond
    float tile = 0.075;
    vec2 tp = q / tile; vec2 f = abs(fract(tp) - 0.5);
    float grout = smoothstep(0.47, 0.495, max(f.x, f.y));
    float lane = box(q.x, uLane - 0.045, uLane + 0.045, 0.004);
    float tbar = box(q.x, uLane - 0.16, uLane + 0.16, 0.004) * box(q.y, 0.9, 0.98, 0.004);
    float lane2 = box(q.x, uLane - 1.8 - 0.045, uLane - 1.8 + 0.045, 0.004);
    float stripe = max(max(lane, tbar), lane2 * 0.9);
    vec3 tileC = mix(vec3(0.70, 0.90, 0.98), vec3(0.62, 0.86, 0.97), step(0.5, fract((floor(tp.x)+floor(tp.y))*0.5)) * 0.35);
    vec3 col = mix(tileC, vec3(0.53, 0.80, 0.93), grout * 0.8);
    col = mix(col, vec3(0.05, 0.22, 0.45), stripe * 0.92);
    // profondeur : plus foncé vers le bas
    col *= mix(0.80, 1.04, smoothstep(0.0, 1.0, gl_FragCoord.y / uRes.y));
    // teinte de l'eau
    col = mix(col, vec3(0.20, 0.62, 0.86), 0.32);
    // caustiques
    float c = caustic(q * 1.15 + vec2(0.0, t * 0.015), t * 0.45 + 23.0);
    float c2 = caustic(q * 1.15 * 1.03 + vec2(0.004, t * 0.015), t * 0.45 + 23.05);
    col += vec3(c * 0.34, (c + c2) * 0.20, c2 * 0.32) * (1.0 - stripe * 0.5);
    // reflets de surface
    vec3 n = normalize(vec3(-g * 1.4, 1.0));
    float spec = pow(max(dot(n, normalize(vec3(-0.35, 0.45, 1.0))), 0.0), 140.0);
    col += spec * 0.55;
    // zone de lecture plus claire à gauche
    float read = smoothstep(aspect * 0.75, 0.0, uv.x) * smoothstep(0.0, 0.55, gl_FragCoord.y / uRes.y);
    col = mix(col, vec3(0.86, 0.96, 1.0), read * 0.30);
    gl_FragColor = vec4(col, 1.0);
  }`;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) console.warn(gl.getShaderInfoLog(s)); return s; };
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(pr); gl.useProgram(pr);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uRes = gl.getUniformLocation(pr, "uRes"), uTime = gl.getUniformLocation(pr, "uTime"), uLane = gl.getUniformLocation(pr, "uLane"), uR = gl.getUniformLocation(pr, "uR");
  const ripples = new Float32Array(MAX * 4); let ri = 0;
  const t0 = performance.now();
  const now = () => (performance.now() - t0) / 1000;
  const addRipple = (x, y, s = 1) => { ripples.set([x, y, now(), s], ri * 4); ri = (ri + 1) % MAX; };

  let W = 0, Hh = 0, scale = 1;
  const resize = () => {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, r.width < 700 ? 1.25 : 1.5);
    scale = dpr; W = Math.max(1, Math.round(r.width * dpr)); Hh = Math.max(1, Math.round(r.height * dpr));
    canvas.width = W; canvas.height = Hh; gl.viewport(0, 0, W, Hh);
    const aspect = W / Hh;
    gl.uniform1f(uLane, aspect > 1.2 ? aspect * 0.78 : aspect * 0.86);
  };
  resize(); addEventListener("resize", resize);

  const toUV = (e) => { const r = canvas.getBoundingClientRect(); return [(e.clientX - r.left) / r.height, 1 - (e.clientY - r.top) / r.height]; };
  let last = 0, lx = 0, ly = 0;
  const hero = canvas.parentElement;
  hero.addEventListener("pointermove", (e) => {
    const [x, y] = toUV(e); const tt = now();
    if (tt - last > 0.07 && Math.hypot(x - lx, y - ly) > 0.025) { addRipple(x, y, 0.55); last = tt; lx = x; ly = y; }
  }, { passive: true });
  hero.addEventListener("pointerdown", (e) => { const [x, y] = toUV(e); addRipple(x, y, 1.4); });

  const draw = () => {
    gl.uniform2f(uRes, W, Hh); gl.uniform1f(uTime, now()); gl.uniform4fv(uR, ripples);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
  if (reduce) { draw(); return; }
  let visible = true, raf = 0, drop = 0;
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible && !raf) loop(); }).observe(canvas);
  document.addEventListener("visibilitychange", () => { if (!document.hidden && !raf) loop(); });
  const loop = () => {
    raf = 0; if (!visible || document.hidden) return;
    if (now() - drop > 2.6) { drop = now(); addRipple(Math.random() * (W / Hh), 0.15 + Math.random() * 0.7, 0.9); }
    draw(); raf = requestAnimationFrame(loop);
  };
  addRipple((W / Hh) * 0.7, 0.55, 1.2);
  loop();
}
