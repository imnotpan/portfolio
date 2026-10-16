"use client";

import { useEffect, useRef } from "react";

/**
 * The transparency checkerboard itself, drifting and warping like an
 * EarthBound battle field: each scanline sways sideways, each column bobs,
 * and a faint iridescent tint washes through the squares. No overlay: the
 * grid is the only thing drawn. 1 art pixel = cell / CHECK css pixels.
 */
const CHECK = 8; // art pixels per checker square
const FPS = 20;

/** Faint tints the squares lean towards, slowly trading places. */
const tints = {
  light: ["#f4d6e4", "#d6e2f6"],
  dark: ["#4a2d55", "#25395a"],
} as const;

const bayer = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map((row) => row.map((value) => (value + 0.5) / 16));

function rgb(value: string) {
  const hex = value.trim().replace("#", "");
  return [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
}

function pack([r, g, b]: number[]) {
  // Little-endian ABGR for a Uint32Array view over RGBA bytes.
  return ((255 << 24) | (Math.round(b) << 16) | (Math.round(g) << 8) | Math.round(r)) >>> 0;
}

const mix = (a: number[], b: number[], k: number) => a.map((value, i) => value + (b[i] - value) * k);

/** Tint strength steps, dithered between so the wash stays pixel-crisp. */
const LEVELS = 4;
const MAX_TINT = 0.55;

export function CheckerBackdrop({ tone }: { tone: "light" | "dark" }) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = wrap.current;
    const surface = canvas.current;
    const context = surface?.getContext("2d");
    if (!host || !surface || !context) return;

    const style = getComputedStyle(host);
    const base = [rgb(style.getPropertyValue("--check-a")), rgb(style.getPropertyValue("--check-b"))];
    const [tintA, tintB] = tints[tone].map(rgb);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Palette per square colour, tint pair and tint level, rebuilt as the tints trade places.
    let palette = new Uint32Array(2 * (LEVELS + 1));
    const buildPalette = (t: number) => {
      const tint = mix(tintA, tintB, 0.5 + 0.5 * Math.sin(t * 0.25));
      palette = new Uint32Array(2 * (LEVELS + 1));
      for (let square = 0; square < 2; square++) {
        for (let level = 0; level <= LEVELS; level++) {
          palette[square * (LEVELS + 1) + level] = pack(mix(base[square], tint, (level / LEVELS) * MAX_TINT));
        }
      }
    };

    let image = context.createImageData(1, 1);
    let pixels = new Uint32Array(image.data.buffer);
    let w = 1;
    let h = 1;
    let frame = 0;
    let last = 0;
    let visible = true;

    const resize = () => {
      const cell = parseFloat(style.getPropertyValue("--cell")) || 24;
      const px = cell / CHECK;
      w = Math.max(1, Math.ceil(host.clientWidth / px));
      h = Math.max(1, Math.ceil(host.clientHeight / px));
      surface.width = w;
      surface.height = h;
      surface.style.width = `${w * px}px`;
      surface.style.height = `${h * px}px`;
      image = context.createImageData(w, h);
      pixels = new Uint32Array(image.data.buffer);
      draw(reduced ? 0 : performance.now());
    };

    const draw = (now: number) => {
      const t = now / 1000;
      buildPalette(t);
      // Interlaced sway comes and goes, so the grid is calm most of the time.
      const interlace = Math.max(0, Math.sin(t * 0.35)) * 1.6;
      const driftX = t * 3;
      const driftY = t * 1.5;
      const columns = new Float32Array(w);
      for (let x = 0; x < w; x++) columns[x] = Math.sin(x * 0.035 + t * 1.1) * 2.2;

      for (let y = 0; y < h; y++) {
        const row = bayer[y & 3];
        const sway = Math.sin(y * 0.05 + t * 1.6) * 3 + Math.sin(y * 0.13 - t * 0.9) * 1.2 + (y & 1 ? interlace : -interlace);
        const u0 = sway + driftX;
        for (let x = 0; x < w; x++) {
          const u = x + u0;
          const v = y + columns[x] + driftY;
          const square = (Math.floor(u / CHECK) + Math.floor(v / CHECK)) & 1;
          const wash = 0.5 + 0.5 * Math.sin(u * 0.022 + v * 0.031 - t * 0.7);
          const level = wash * wash * LEVELS;
          const step = Math.floor(level) + (level - Math.floor(level) > row[x & 3] ? 1 : 0);
          pixels[y * w + x] = palette[square * (LEVELS + 1) + Math.min(LEVELS, step)];
        }
      }
      context.putImageData(image, 0, 0);
    };

    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      if (!visible || document.hidden || now - last < 1000 / FPS) return;
      last = now;
      draw(now);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    const watcher = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    watcher.observe(host);
    if (!reduced) frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      watcher.disconnect();
    };
  }, [tone]);

  return (
    <div ref={wrap} className="battle" aria-hidden="true">
      <canvas ref={canvas} />
    </div>
  );
}
