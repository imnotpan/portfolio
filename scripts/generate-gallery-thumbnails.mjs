#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const publicDirectory = join(projectRoot, "public");
const outputDirectory = join(publicDirectory, "images", "thumbnails");
const maxWidth = 480;
const forceRegeneration = process.argv.includes("--force");
const supportedExtensions = new Set([".gif", ".jpg", ".jpeg", ".png"]);
const sourceDirectories = [
  "characters",
  "images/static/img/Environment",
  "images/static/img/Illustrations",
  "images/static/img/Mockups",
];

function getExtension(filePath) {
  const extensionStart = filePath.lastIndexOf(".");
  return extensionStart === -1 ? "" : filePath.slice(extensionStart).toLowerCase();
}

function getImageFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) return getImageFiles(filePath);
    return supportedExtensions.has(getExtension(entry.name)) ? [filePath] : [];
  });
}

function generateThumbnail(sourcePath) {
  const relativePath = relative(publicDirectory, sourcePath);
  const extension = getExtension(sourcePath);
  const thumbnailExtension = extension === ".gif" ? ".gif" : ".png";
  const outputPath = join(
    outputDirectory,
    relativePath.replace(/\.[^.]+$/, thumbnailExtension),
  );

  if (
    !forceRegeneration &&
    existsSync(outputPath) &&
    statSync(outputPath).mtimeMs >= statSync(sourcePath).mtimeMs
  ) {
    return false;
  }

  mkdirSync(resolve(outputPath, ".."), { recursive: true });
  const scale = `scale='min(${maxWidth},iw)':-2:flags=neighbor`;

  if (extension === ".gif") {
    execFileSync(
      "ffmpeg",
      [
        "-y",
        "-i",
        sourcePath,
        "-filter_complex",
        `[0:v]${scale},split[image][palette];[palette]palettegen=max_colors=256:stats_mode=diff[colors];[image][colors]paletteuse=dither=none`,
        "-gifflags",
        "+transdiff",
        outputPath,
      ],
      { stdio: "ignore" },
    );
    return true;
  }

  execFileSync(
    "ffmpeg",
    [
      "-y",
      "-i",
      sourcePath,
      "-frames:v",
      "1",
      "-update",
      "1",
      "-vf",
      scale,
      "-compression_level",
      "9",
      outputPath,
    ],
    { stdio: "ignore" },
  );
  return true;
}

const sourceFiles = sourceDirectories.flatMap((directory) =>
  getImageFiles(join(publicDirectory, directory)),
);
const generatedCount = sourceFiles.filter(generateThumbnail).length;

console.log(`Gallery thumbnails ready: ${generatedCount} generated, ${sourceFiles.length} total.`);
