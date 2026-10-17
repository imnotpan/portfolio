#!/usr/bin/env node
// Records the average colour of every image's four edges in app/data/media.json (`edge`).
// Gallery tiles that show an image slightly smaller than the tile use them to continue the
// picture into the gap, so the gap reads as part of the art instead of a mismatched bar.
//   node scripts/edge-colors.mjs   (run after build-media; safe to repeat)

import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import sharp from "sharp";

const root = resolve(import.meta.dirname, "..");
const manifestPath = join(root, "app/data/media.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

const hex = ([r, g, b]) => `#${[r, g, b].map((value) => Math.round(value).toString(16).padStart(2, "0")).join("")}`;

function average(data, width, height, pick) {
  let r = 0;
  let g = 0;
  let b = 0;
  let n = 0;
  for (const [x, y] of pick(width, height)) {
    const i = (y * width + x) * 4;
    if (data[i + 3] < 128) continue; // ignore transparent pixels
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    n++;
  }
  return n ? hex([r / n, g / n, b / n]) : undefined;
}

const range = (n) => Array.from({ length: n }, (_, i) => i);
const rows = {
  t: (w) => range(w).map((x) => [x, 0]),
  b: (w, h) => range(w).map((x) => [x, h - 1]),
  l: (w, h) => range(h).map((y) => [0, y]),
  r: (w, h) => range(h).map((y) => [w - 1, y]),
};

let updated = 0;
for (const entry of Object.values(manifest)) {
  if (entry.video || !entry.src) continue;
  const file = join(root, "public", entry.poster ?? entry.src);
  const { data, info } = await sharp(file, { page: 0 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const edge = Object.fromEntries(Object.entries(rows).map(([side, pick]) => [side, average(data, info.width, info.height, pick)]));
  if (Object.values(edge).some((value) => !value)) continue;
  if (JSON.stringify(entry.edge) !== JSON.stringify(edge)) {
    entry.edge = edge;
    updated++;
  }
}

writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`edge colours: ${updated} entries updated`);
