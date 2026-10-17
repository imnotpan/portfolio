#!/usr/bin/env node
// Some sprite GIFs carry a state label ("RUN", "IDLE", "ATTACK B"…) baked into the top-left
// corner of every frame. This erases it from the site's copies in public/media by repeating
// the background row just under the label upward (clean on flat colours, checkerboards and
// vertical props like chains). Runs after build-media and is safe to repeat: files without a
// label are left untouched.
//   node scripts/clean-labels.mjs

import { readFileSync, renameSync } from "node:fs";
import { join, resolve } from "node:path";
import sharp from "sharp";

const root = resolve(import.meta.dirname, "..");
const manifest = JSON.parse(readFileSync(join(root, "app/data/media.json"), "utf8"));

const NEAR_WHITE = 235;
const SEARCH_ROWS = 15; // labels live in the top rows only
const MIN_PIXELS = 6;

/** Bounding box of label text across every frame, or null when the file has no label. */
function findLabel(data, width, pageHeight, pages) {
  let x0 = Infinity;
  let x1 = -1;
  let y0 = Infinity;
  let y1 = -1;
  let count = 0;
  for (let page = 0; page < pages; page++) {
    for (let y = 0; y < SEARCH_ROWS; y++) {
      for (let x = 0; x < width; x++) {
        const i = ((page * pageHeight + y) * width + x) * 4;
        if (data[i + 3] > 200 && data[i] >= NEAR_WHITE && data[i + 1] >= NEAR_WHITE && data[i + 2] >= NEAR_WHITE) {
          count++;
          x0 = Math.min(x0, x);
          x1 = Math.max(x1, x);
          y0 = Math.min(y0, y);
          y1 = Math.max(y1, y);
        }
      }
    }
  }
  return count >= MIN_PIXELS ? { x0, x1, y0, y1 } : null;
}

async function clean(publicPath, label) {
  const file = join(root, "public", publicPath);
  const image = sharp(file, { animated: true });
  const meta = await image.metadata();
  const pages = meta.pages ?? 1;
  const pageHeight = meta.pageHeight ?? meta.height;
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const width = info.width;

  // Pad the text box a little: the label sits on a black plate.
  const rect = {
    x0: Math.max(0, label.x0 - 3),
    x1: Math.min(width - 1, label.x1 + 3),
    y0: Math.max(0, label.y0 - 2),
    y1: Math.min(pageHeight - 2, label.y1 + 2),
  };
  const sourceRow = rect.y1 + 1;
  for (let page = 0; page < pages; page++) {
    for (let y = rect.y0; y <= rect.y1; y++) {
      for (let x = rect.x0; x <= rect.x1; x++) {
        const from = ((page * pageHeight + sourceRow) * width + x) * 4;
        const to = ((page * pageHeight + y) * width + x) * 4;
        data.copy(data, to, from, from + 4);
      }
    }
  }

  const tmp = `${file}.tmp`;
  await sharp(data, { raw: { width, height: info.height, channels: 4, pageHeight } })
    .webp({ lossless: true, effort: 6, ...(pages > 1 ? { delay: meta.delay, loop: meta.loop ?? 0 } : {}) })
    .toFile(tmp);
  renameSync(tmp, file);
}

let cleaned = 0;
for (const [key, entry] of Object.entries(manifest)) {
  // Native-size animated sprite scenes only (172×129 frames).
  if (!entry.animated || !entry.pixelated || entry.nativeWidth !== 172 || entry.nativeHeight !== 129 || entry.video) continue;
  const image = sharp(join(root, "public", entry.src), { animated: true });
  const meta = await image.metadata();
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const label = findLabel(data, info.width, meta.pageHeight ?? meta.height, meta.pages ?? 1);
  if (!label) continue;
  await clean(entry.src, label);
  if (entry.poster) {
    const poster = sharp(join(root, "public", entry.poster));
    const { data: pdata, info: pinfo } = await poster.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const plabel = findLabel(pdata, pinfo.width, pinfo.height, 1);
    if (plabel) await clean(entry.poster, plabel);
  }
  cleaned++;
  console.log(`cleaned ${key} (label x ${label.x0}–${label.x1}, y ${label.y0}–${label.y1})`);
}
console.log(cleaned ? `${cleaned} sprite(s) cleaned` : "no labels found");
