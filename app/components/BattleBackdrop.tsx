"use client";

import { useEffect, useRef } from "react";

export type BattleVariant = 1 | 2 | 3;

/**
 * EarthBound-style battle backgrounds: a field of colour bands warped per
 * scanline, dithered between neighbouring palette entries, with the palette
 * slowly rotating. Drawn on a tiny canvas where 1 art pixel = CELL css pixels.
 */
const palettes: Record<BattleVariant, string[]> = {
  // Deep purples into hot magenta.
  1: ["#2b1045", "#431463", "#6d1c7a", "#9a2a82", "#c13f86", "#9a2a82", "#6d1c7a", "#431463"],
  // Teal waves.
  2: ["#0b2a3b", "#0e4452", "#126363", "#188a6b", "#2fae73", "#188a6b", "#126363", "#0e4452"],
  // Rust and gold.
  3: ["#3a1114", "#5d1a1a", "#8c2a1b", "#bb4b1c", "#e0801f", "#bb4b1c", "#8c2a1b", "#5d1a1a"],
};

/** Each field returns a position along the palette ring for one pixel. */
const fields: Record<BattleVariant, (x: number, y: number, w: number, h: number, t: number) => number> = {
  // Twisting rings that breathe out from the centre.
  1: (x, y, w, h, t) => {
    const dx = x - w / 2;
    const dy = (y - h / 2) * 1.7;
    return Math.hypot(dx, dy) * 0.1 + Math.sin(Math.atan2(dy, dx) * 4 + t * 0.9) * 1.1 - t * 1.4;
  },
  // Bands that wobble sideways scanline by scanline, the classic wobble.
  2: (x, y, _w, _h, t) => {
    const wobble = Math.sin(y * 0.24 + t * 2.4) * 3.5 + Math.sin(y * 0.07 - t) * 6;
    return (x + wobble) * 0.05 + Math.sin(y * 0.05 + t * 0.7) * 1.4 + t * 0.9;
  },
  // Warped lattice, a lava-lamp plasma.
  3: (x, y, _w, _h, t) => {
    const u = x + Math.sin(y * 0.13 + t * 1.4) * 5;
    const v = y + Math.cos(x * 0.11 + t * 1.1) * 5;
    return (Math.sin(u * 0.13) + Math.sin(v * 0.19) + Math.sin((u + v) * 0.07 + t)) * 1.6 + t * 0.6 + 4;
  },
};

const bayer = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map((row) => row.map((value) => (value + 0.5) / 16));

const FPS = 15;

function packed(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  // Little-endian ABGR for a Uint32Array view over RGBA bytes.
  return ((255 << 24) | (b << 16) | (g << 8) | r) >>> 0;
}

export function BattleBackdrop({ variant }: { variant: BattleVariant }) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = wrap.current;
    const surface = canvas.current;
    const context = surface?.getContext("2d");
    if (!host || !surface || !context) return;

    const colors = palettes[variant].map(packed);
    const field = fields[variant];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let image = context.createImageData(1, 1);
    let pixels = new Uint32Array(image.data.buffer);
    let w = 1;
    let h = 1;
    let frame = 0;
    let last = 0;
    let visible = true;

    const resize = () => {
      const cell = host.clientWidth < 640 ? 3 : 4;
      w = Math.max(1, Math.ceil(host.clientWidth / cell));
      h = Math.max(1, Math.ceil(host.clientHeight / cell));
      surface.width = w;
      surface.height = h;
      // Whole css pixels per art pixel; the host crops the overhang.
      surface.style.width = `${w * cell}px`;
      surface.style.height = `${h * cell}px`;
      image = context.createImageData(w, h);
      pixels = new Uint32Array(image.data.buffer);
      draw(performance.now());
    };

    const draw = (now: number) => {
      const t = now / 1000;
      const n = colors.length;
      for (let y = 0; y < h; y++) {
        const row = bayer[y & 3];
        for (let x = 0; x < w; x++) {
          const value = field(x, y, w, h, t);
          const base = Math.floor(value);
          const step = value - base > row[x & 3] ? 1 : 0;
          pixels[y * w + x] = colors[(((base + step) % n) + n) % n];
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
  }, [variant]);

  return (
    <div ref={wrap} className="battle" aria-hidden="true">
      <canvas ref={canvas} />
    </div>
  );
}
