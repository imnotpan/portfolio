#!/usr/bin/env node
// Builds web-ready artwork from assets/ into public/media and writes
// app/data/media.json. Originals stay out of public/ so they are never deployed.
//
// Pixel art is usually exported upscaled (x3, x6...). This script detects the
// real pixel grid, stores each piece at its native resolution as lossless WebP
// and lets CSS scale it back up with `image-rendering: pixelated`. A 2.6 MB
// GIF typically becomes a ~25 KB animated WebP with identical pixels.
//
// Usage: node scripts/build-media.mjs [--force]
// Requires sharp (installed with Next.js) and ffmpeg for the parallax videos.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import sharp from "sharp";

const root = resolve(import.meta.dirname, "..");
const sourceDir = join(root, "assets");
const publicDir = join(root, "public");
const outDir = join(publicDir, "media");
const manifestPath = join(root, "app/data/media.json");
const force = process.argv.includes("--force");

const LOSSLESS_BUDGET = 420 * 1024;
const LOSSY_MAX_WIDTH = 1600;
const THUMB_WIDTH = 760;

// Every source the site uses. Paths are relative to /assets and double as manifest keys.
const sources = [
  ...[
    "characters/BaseWolf.gif",
    "characters/Beams.gif",
    "characters/BOSS.gif",
    "characters/Bouncer.gif",
    "characters/CharacterAnims 0BACKUP copy.gif",
    "characters/Design Character v3.gif",
    "characters/EnemyB.gif",
    "characters/EnemyC.gif",
    "characters/FROG_EXPLORATION.png",
    "characters/GOBLIN.gif",
    "characters/HAALAN_BASE.png",
    "characters/Hollowhorn Shaman.gif",
    "characters/Judge.gif",
    "characters/KNIGHT.gif",
    "characters/orc_enemy copy.gif",
    "characters/PALADINKO MOCKUP copy.png",
    "characters/Player_backup_1 copy.gif",
    "characters/RatDesignFinal copy.gif",
    "images/static/img/Characters/EnemyA.gif",
    "images/static/img/Characters/Wolf_General.png",
    "CharactersRunning/DIMITRIRUNNING.gif",
    "CharactersRunning/KNIGHT RUNNING.gif",
    "CharactersRunning/RATRUNNING.gif",
    "CharactersRunning/WalkCycleBeams.gif",
    "images/static/ICON.png",
    "images/static/icon2.png",
    "Yo.jpeg",
  ],
  ...glob("images/static/img/Environment", /\.png$/i),
  ...glob("images/static/img/Illustrations", /\.png$/i),
  ...glob("images/static/img/Mockups", /\.png$/i),
  ...["esecorte", "esencia", "minina", "nuclear_dome", "postersuach", "rat", "tinygolf", "wakeup", "warrior"].flatMap(
    (folder) => glob(`images/static/img/pixel/${folder}`, /\.(png|gif|jpe?g)$/i),
  ),
];

const videos = [
  "images/static/img/Environment/pixel-parallax-pan-right-3x.gif",
  "images/static/img/Environment/pixel-parallax-pan-right-2x.gif",
  "images/static/img/Environment/pixel-parallax-full-horizontal-1x (3).gif",
];

// Static frames combined into one animated "roster" tile.
const sequences = [
  {
    key: "sequence/monster-roster",
    frames: Array.from({ length: 10 }, (_, index) => `characters/MonstersStatic${index + 1}.png`),
    delay: 900,
  },
];

function glob(dir, pattern) {
  const full = join(sourceDir, dir);
  return execFileSync("ls", [full], { encoding: "utf8" })
    .split("\n")
    .filter((name) => pattern.test(name))
    .map((name) => `${dir}/${name}`);
}

function slugPath(source) {
  return source
    .replace(/\.[^.]+$/, "")
    .replace(/^images\/static\/img\//, "")
    .replace(/^images\/static\//, "brand/")
    .toLowerCase()
    .replace(/\b(copy|backup)\b|\(\d+\)|_backup_\d+|0backup/g, "")
    .replace(/[^a-z0-9/]+/g, "-")
    .replace(/-+$/g, "")
    .replace(/-\//g, "/");
}

function isFresh(output, inputs) {
  if (force || !existsSync(output)) return false;
  const outTime = statSync(output).mtimeMs;
  return inputs.every((input) => statSync(input).mtimeMs <= outTime);
}

async function detectScale(file) {
  const image = sharp(file, { animated: true, limitInputPixels: false });
  const meta = await image.metadata();
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const pageHeight = meta.pageHeight ?? info.height;
  const totalHeight = info.height;
  const channels = info.channels;

  const isUniform = (k) => {
    if (width % k || pageHeight % k) return false;
    for (let y = 0; y < totalHeight; y++) {
      const blockY = y - ((y % pageHeight) % k);
      for (let x = 0; x < width; x++) {
        const blockX = x - (x % k);
        const a = (y * width + x) * channels;
        const b = (blockY * width + blockX) * channels;
        for (let c = 0; c < channels; c++) if (data[a + c] !== data[b + c]) return false;
      }
    }
    return true;
  };

  let scale = 1;
  for (const k of [12, 10, 8, 6, 5, 4, 3, 2]) {
    if (isUniform(k)) {
      scale = k;
      break;
    }
  }

  const delays = meta.delay ?? [];
  const averageDelay = delays.length ? delays.reduce((sum, value) => sum + value, 0) / delays.length : 0;
  const fps = averageDelay ? Math.round(1000 / averageDelay) : undefined;
  return { width, height: pageHeight, frames: meta.pages ?? 1, scale, fps };
}

async function processImage(source, previous) {
  const input = join(sourceDir, source);
  const base = slugPath(source);
  const output = join(outDir, `${base}.webp`);
  const relative = `/media/${base}.webp`;

  if (previous && isFresh(output, [input])) return previous;

  mkdirSync(dirname(output), { recursive: true });
  const { width, height, frames, scale, fps } = await detectScale(input);
  const animated = frames > 1;
  const nativeWidth = width / scale;
  const nativeHeight = height / scale;

  await sharp(input, { animated, limitInputPixels: false })
    .resize({ width: nativeWidth, kernel: "nearest" })
    .webp({ lossless: true, effort: 6 })
    .toFile(output);

  const entry = {
    src: relative,
    width,
    height,
    nativeWidth,
    nativeHeight,
    scale,
    animated,
    pixelated: scale > 1,
    ...(animated ? { frames, fps } : {}),
  };

  // Painterly or very large pieces: lossy WebP at a sensible size plus a thumb.
  if (statSync(output).size > LOSSLESS_BUDGET || /\.jpe?g$/i.test(source)) {
    const targetWidth = Math.min(width, LOSSY_MAX_WIDTH);
    await sharp(input, { animated, limitInputPixels: false })
      .resize({ width: targetWidth, kernel: scale > 1 ? "nearest" : "lanczos3" })
      .webp({ quality: 86, effort: 6, smartSubsample: true })
      .toFile(output);
    entry.pixelated = false;
    entry.width = targetWidth;
    entry.height = Math.round((height / width) * targetWidth);
  }

  if (entry.width > THUMB_WIDTH && !entry.pixelated) {
    const thumbOutput = join(outDir, `${base}.thumb.webp`);
    await sharp(input, { animated, limitInputPixels: false })
      .resize({ width: THUMB_WIDTH, kernel: "lanczos3" })
      .webp({ quality: 82, effort: 6 })
      .toFile(thumbOutput);
    entry.thumb = `/media/${base}.thumb.webp`;
  }

  if (animated) {
    const posterOutput = join(outDir, `${base}.poster.webp`);
    await sharp(input, { page: 0 })
      .resize({ width: entry.pixelated ? nativeWidth : Math.min(entry.width, THUMB_WIDTH), kernel: entry.pixelated ? "nearest" : "lanczos3" })
      .webp({ lossless: entry.pixelated, quality: 84 })
      .toFile(posterOutput);
    entry.poster = `/media/${base}.poster.webp`;
  }

  entry.bytes = statSync(output).size;
  return entry;
}

async function processVideo(source, previous) {
  const input = join(sourceDir, source);
  const base = slugPath(source);
  const mp4 = join(outDir, `${base}.mp4`);
  const webm = join(outDir, `${base}.webm`);
  const poster = join(outDir, `${base}.poster.webp`);

  if (previous && isFresh(mp4, [input]) && isFresh(webm, [input])) return previous;
  mkdirSync(dirname(mp4), { recursive: true });

  const { width, height, scale } = await detectScale(input);
  // Encode at 2× the native pixel grid: each art pixel becomes a 2×2 block, so
  // 4:2:0 chroma never bleeds across art pixels, at a fraction of the bytes.
  const encodeWidth = scale >= 2 ? (width / scale) * 2 : width;
  const resize = `scale=${encodeWidth}:-2:flags=neighbor`;
  execFileSync("ffmpeg", ["-v", "error", "-y", "-i", input, "-vf", resize, "-c:v", "libvpx-vp9", "-crf", "30", "-b:v", "0", "-row-mt", "1", "-pix_fmt", "yuv420p", "-an", webm]);
  execFileSync("ffmpeg", ["-v", "error", "-y", "-i", input, "-vf", resize, "-c:v", "libx264", "-crf", "23", "-preset", "slow", "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", mp4]);
  await sharp(input, { page: 0 })
    .resize({ width: width / scale, kernel: "nearest" })
    .webp({ lossless: true, effort: 6 })
    .toFile(poster);

  return {
    src: `/media/${base}.mp4`,
    webm: `/media/${base}.webm`,
    poster: `/media/${base}.poster.webp`,
    width,
    height,
    nativeWidth: width / scale,
    nativeHeight: height / scale,
    scale,
    animated: true,
    pixelated: true,
    video: true,
    bytes: statSync(mp4).size,
  };
}

async function processSequence({ key, frames, delay }, previous) {
  const inputs = frames.map((frame) => join(sourceDir, frame));
  const output = join(outDir, `${key}.webp`);
  const poster = join(outDir, `${key}.poster.webp`);
  if (previous && isFresh(output, inputs)) return previous;
  mkdirSync(dirname(output), { recursive: true });

  const { width, height, scale } = await detectScale(inputs[0]);
  const nativeWidth = width / scale;
  const nativeHeight = height / scale;
  const buffers = await Promise.all(
    inputs.map((input) =>
      sharp(input).resize({ width: nativeWidth, kernel: "nearest" }).ensureAlpha().raw().toBuffer(),
    ),
  );

  await sharp(Buffer.concat(buffers), {
    raw: { width: nativeWidth, height: nativeHeight * buffers.length, channels: 4, pageHeight: nativeHeight },
  })
    .webp({ lossless: true, effort: 6, loop: 0, delay: buffers.map(() => delay) })
    .toFile(output);
  await sharp(inputs[0]).resize({ width: nativeWidth, kernel: "nearest" }).webp({ lossless: true }).toFile(poster);

  return {
    src: `/media/${key}.webp`,
    poster: `/media/${key}.poster.webp`,
    width,
    height,
    nativeWidth,
    nativeHeight,
    scale,
    animated: true,
    pixelated: scale > 1,
    bytes: statSync(output).size,
  };
}

const previousManifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : {};
const manifest = {};
let totalBefore = 0;
let totalAfter = 0;

for (const source of sources) {
  const key = `/${source}`;
  manifest[key] = await processImage(source, previousManifest[key]);
  totalBefore += statSync(join(sourceDir, source)).size;
  totalAfter += manifest[key].bytes;
  process.stdout.write(`${manifest[key].scale}x ${String(manifest[key].bytes >> 10).padStart(5)} KB  ${source}\n`);
}

for (const source of videos) {
  const key = `/${source}`;
  manifest[key] = await processVideo(source, previousManifest[key]);
  totalBefore += statSync(join(sourceDir, source)).size;
  totalAfter += manifest[key].bytes;
  process.stdout.write(`video ${String(manifest[key].bytes >> 10).padStart(5)} KB  ${source}\n`);
}

for (const sequence of sequences) {
  manifest[sequence.key] = await processSequence(sequence, previousManifest[sequence.key]);
  process.stdout.write(`seq ${String(manifest[sequence.key].bytes >> 10).padStart(5)} KB  ${sequence.key}\n`);
}

// YouTube thumbnails, self-hosted so video pages don't wait on a third-party origin.
const { caseStudies } = await import(join(root, "app/data/work.ts"));
for (const study of caseStudies.filter((item) => item.youtubeId)) {
  const key = `youtube/${study.youtubeId}`;
  const output = join(outDir, `${key}.webp`);
  const thumb = join(outDir, `${key}.thumb.webp`);
  if (!force && previousManifest[key] && existsSync(output)) {
    manifest[key] = previousManifest[key];
    continue;
  }
  mkdirSync(dirname(output), { recursive: true });
  const response = await fetch(`https://i.ytimg.com/vi/${study.youtubeId}/maxresdefault.jpg`);
  if (!response.ok) throw new Error(`YouTube thumbnail ${study.youtubeId}: ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  await sharp(buffer).resize({ width: 1280 }).webp({ quality: 82, effort: 6 }).toFile(output);
  await sharp(buffer).resize({ width: 800 }).webp({ quality: 76, effort: 6 }).toFile(thumb);
  manifest[key] = {
    src: `/media/${key}.webp`,
    thumb: `/media/${key}.thumb.webp`,
    width: 1280,
    height: 720,
    nativeWidth: 1280,
    nativeHeight: 720,
    scale: 1,
    animated: false,
    pixelated: false,
    bytes: statSync(output).size,
  };
  process.stdout.write(`yt ${String(manifest[key].bytes >> 10).padStart(5)} KB  ${study.slug}\n`);
}

// Edge colour of the first frame: lets the site letterbox art seamlessly.
for (const entry of Object.values(manifest)) {
  if (entry.bg) continue;
  const file = join(publicDir, (entry.poster ?? entry.src).slice(1));
  const { data } = await sharp(file, { page: 0 }).extract({ left: 0, top: 0, width: 1, height: 1 }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  entry.bg = `#${[...data].map((value) => value.toString(16).padStart(2, "0")).join("")}`;
}

writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`\n${Object.keys(manifest).length} assets · ${(totalBefore / 1048576).toFixed(1)} MB → ${(totalAfter / 1048576).toFixed(1)} MB`);
