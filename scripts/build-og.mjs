#!/usr/bin/env node
// Generates 1200×630 Open Graph cards into public/og from the case-study data.
// Usage: node scripts/build-og.mjs   (run after build-media.mjs)

import { mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import sharp from "sharp";

const root = resolve(import.meta.dirname, "..");
const publicDir = join(root, "public");
const outDir = join(publicDir, "og");
const { caseStudies } = await import(join(root, "app/data/work.ts"));
const media = JSON.parse(readFileSync(join(root, "app/data/media.json"), "utf8"));

const W = 1200;
const H = 630;
mkdirSync(outDir, { recursive: true });

const escape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function overlay({ kicker, title, subtitle }) {
  const size = title.length > 28 ? 58 : 72;
  return Buffer.from(`
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0.35" stop-color="#0d0c10" stop-opacity="0"/>
        <stop offset="1" stop-color="#0d0c10" stop-opacity="0.92"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <rect x="64" y="${H - 214}" width="12" height="12" fill="#ff3b4f"/>
    <text x="88" y="${H - 203}" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="22" letter-spacing="3" fill="#ffc861">${escape(kicker.toUpperCase())}</text>
    <text x="64" y="${H - 128}" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="${size}" fill="#ffffff">${escape(title)}</text>
    <text x="64" y="${H - 72}" font-family="Helvetica, Arial, sans-serif" font-weight="500" font-size="26" fill="#d9d5e0">${escape(subtitle)}</text>
  </svg>`);
}

async function background(source) {
  const entry = media[source];
  const file = join(publicDir, (entry.poster ?? entry.src).replace(/^\//, ""));
  const pixelated = entry.pixelated;
  return sharp(file, { page: 0 })
    .resize({ width: W, height: H, fit: "cover", position: "attention", kernel: pixelated ? "nearest" : "lanczos3" })
    .toBuffer();
}

for (const study of caseStudies) {
  const source = study.cover || `youtube/${study.youtubeId}`;
  await sharp(await background(source))
    .composite([{ input: overlay({ kicker: study.kind.en, title: study.title, subtitle: "Pixel art by Kevin Medina · IMNOTAPAN" }) }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(join(outDir, `${study.slug}.jpg`));
  console.log(`og/${study.slug}.jpg`);
}

// Home card: the hero title screen.
const hero = await background("/images/static/img/Environment/pixel-parallax-pan-right-3x.gif");
const logo = await sharp(join(publicDir, media["/images/static/ICON.png"].src.slice(1))).resize({ width: 186, kernel: "nearest" }).toBuffer();
const star = await sharp(join(publicDir, media["/images/static/icon2.png"].src.slice(1))).resize({ width: 186, kernel: "nearest" }).toBuffer();
await sharp(hero)
  .composite([
    { input: overlay({ kicker: "Kevin Medina · IMNOTAPAN", title: "Pixel art & animation", subtitle: "Characters, worlds & music videos for games, brands and artists" }) },
    { input: star, left: W - 64 - 186, top: 56 },
    { input: logo, left: W - 64 - 186, top: 56 },
  ])
  .png({ compressionLevel: 9, palette: true })
  .toFile(join(publicDir, "og-image.png"));
console.log("og-image.png");
