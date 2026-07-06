'use client';

import { useEffect, useRef } from 'react';

/**
 * Animated WebGL aurora background — domain-warped fbm noise mapped onto the
 * ink -> phosphor-lime palette. No dependencies, universal WebGL1 support,
 * respects prefers-reduced-motion, and idles cheaply via a single fullscreen
 * quad. Pointer position feeds a gentle parallax warp.
 */
const FRAG = `
precision highp float;

uniform vec2  u_res;
uniform float u_time;
uniform vec2  u_pointer;

// hash + value noise -> fbm
float hash(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0;
  float amp = 0.5;
  for(int i = 0; i < 5; i++){
    v += amp * noise(p);
    p *= 2.02;
    amp *= 0.5;
  }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  vec2 p = uv;
  p.x *= u_res.x / u_res.y;

  float t = u_time * 0.04;
  vec2 par = (u_pointer - 0.5) * 0.25;

  // domain warp
  vec2 q = vec2(fbm(p * 1.6 + t + par),
                fbm(p * 1.6 - t + vec2(5.2, 1.3)));
  vec2 r = vec2(fbm(p * 1.6 + q * 1.4 + vec2(1.7, 9.2) + t * 1.3),
                fbm(p * 1.6 + q * 1.4 + vec2(8.3, 2.8) - t));
  float f = fbm(p * 1.5 + r * 1.2);

  // palette: deep ink -> surface -> faint phosphor lime
  vec3 ink     = vec3(0.039, 0.055, 0.059);
  vec3 surface = vec3(0.063, 0.090, 0.102);
  vec3 lime    = vec3(0.784, 0.945, 0.412);

  vec3 col = mix(ink, surface, smoothstep(0.1, 0.95, f));
  float glow = smoothstep(0.5, 0.95, f + r.x * 0.4);
  col = mix(col, lime, glow * 0.30);

  // aurora ribbon following the warp
  float ribbon = smoothstep(0.74, 0.84, r.y) * (1.0 - smoothstep(0.84, 0.96, r.y));
  col += lime * ribbon * 0.22;

  // top-left ambient wash + bottom fade so it melts into the page
  col += lime * 0.06 * smoothstep(1.0, 0.0, length(uv - vec2(0.1, 0.95)));
  col *= smoothstep(-0.15, 0.55, uv.y) * 0.9 + 0.1;

  // subtle grain to kill banding
  float g = hash(gl_FragCoord.xy + u_time) * 0.025 - 0.0125;
  col += g;

  gl_FragColor = vec4(col, 1.0);
}
`;

const VERT = `
attribute vec2 a_pos;
void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

export function ShaderBackground({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const gl = canvas.getContext('webgl', {
      antialias: false,
      alpha: false,
      powerPreference: 'low-power',
    });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'u_res');
    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uPointer = gl.getUniformLocation(prog, 'u_pointer');

    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const onMove = (e: PointerEvent) => {
      pointer.tx = e.clientX / window.innerWidth;
      pointer.ty = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener('pointermove', onMove);

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    let raf = 0;
    let running = true;
    const start = performance.now();

    const render = (now: number) => {
      if (!running) return;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, reduced ? 8.0 : (now - start) / 1000);
      gl.uniform2f(uPointer, pointer.x, pointer.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduced) raf = requestAnimationFrame(render);
    };
    render(start);

    // pause when tab hidden to save the GPU
    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        running = true;
        raf = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  );
}
