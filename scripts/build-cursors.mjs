#!/usr/bin/env node
// Draws the site's mouse cursors as real pixel art: an ink arrow and pointing hand with a
// white outline (readable on paper and on dark art). Shipped at 1× and 2× for image-set().
//   node scripts/build-cursors.mjs  ->  public/media/brand/cursor{,@2x}.png, cursor-pointer{,@2x}.png
// Hotspots used in app/globals.css (css px): arrow (0, 0), hand (4, 0).

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { deflateSync } from "node:zlib";

const outDir = join(resolve(import.meta.dirname, ".."), "public/media/brand");

// 1 = outline, X = body, . = transparent.
const arrow = [
  "1..........",
  "11.........",
  "1X1........",
  "1XX1.......",
  "1XXX1......",
  "1XXXX1.....",
  "1XXXXX1....",
  "1XXXXXX1...",
  "1XXXXXXX1..",
  "1XXXXXXXX1.",
  "1XXXXX11111",
  "1XX1XX1....",
  "1X1.1XX1...",
  "11..1XX1...",
  "1....1XX1..",
  ".....1XX1..",
  "......11...",
];

const hand = [
  "....11......",
  "...1XX1.....",
  "...1XX1.....",
  "...1XX1.....",
  "...1XX111...",
  "...1XX1XX11.",
  ".111XX1XX1X1",
  "1XX1XXXXXXX1",
  "1XXX1XXXXXX1",
  ".1XXXXXXXXX1",
  "..1XXXXXXXX1",
  "..1XXXXXXX1.",
  "...1XXXXXX1.",
  "...1XXXXX1..",
  "....1XXXX1..",
  "....1XXXX1..",
  "....111111..",
];

const INK = [0x17, 0x15, 0x1c, 255];
const WHITE = [255, 255, 255, 255];

function crc32(buffer) {
  let crc = ~0;
  for (const byte of buffer) {
    crc ^= byte;
    for (let k = 0; k < 8; k++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return ~crc >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
}

function encode(rows, scale) {
  const width = rows[0].length * scale;
  const height = rows.length * scale;
  const stride = width * 4 + 1;
  const raw = Buffer.alloc(stride * height);
  for (let y = 0; y < height; y++) {
    raw[y * stride] = 0;
    for (let x = 0; x < width; x++) {
      const cell = rows[Math.floor(y / scale)][Math.floor(x / scale)];
      // "1" is the outline and "X" the body: ink body, white outline.
      const color = cell === "1" ? WHITE : cell === "X" ? INK : [0, 0, 0, 0];
      Buffer.from(color).copy(raw, y * stride + 1 + x * 4);
    }
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6; // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

mkdirSync(outDir, { recursive: true });
for (const [name, rows] of [
  ["cursor", arrow],
  ["cursor-pointer", hand],
]) {
  for (const [suffix, scale] of [["", 1], ["@2x", 2]]) {
    const png = encode(rows, scale);
    writeFileSync(join(outDir, `${name}${suffix}.png`), png);
    console.log(`${name}${suffix}.png ${rows[0].length * scale}×${rows.length * scale} — ${png.length} bytes`);
  }
}
