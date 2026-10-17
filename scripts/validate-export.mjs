#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const out = join(root, "out");
const { caseStudies } = await import(join(root, "app/data/work.ts"));
const projectSlugs = caseStudies.map((study) => study.slug);
const errors = [];

function resolvePage(pathname) {
  if (pathname === "/") return join(out, "index.html");
  const clean = pathname.replace(/^\//, "");
  const candidates = [join(out, `${clean}.html`), join(out, clean, "index.html")];
  return candidates.find(existsSync) ?? candidates[0];
}

function check(condition, message) {
  if (!condition) errors.push(message);
}

function validatePage({ pathname, lang, alternates = false }) {
  const file = resolvePage(pathname);
  check(existsSync(file), `${pathname}: exported HTML is missing`);
  if (!existsSync(file)) return;
  const html = readFileSync(file, "utf8");
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  check(new RegExp(`<html[^>]+lang=["']${lang}["']`, "i").test(html), `${pathname}: html lang must be ${lang}`);
  check(h1Count === 1, `${pathname}: expected one H1, found ${h1Count}`);
  check(/<title>[^<]+<\/title>/i.test(html), `${pathname}: title missing`);
  check(/<meta[^>]+name=["']description["'][^>]+content=["'][^"']+/i.test(html), `${pathname}: description missing`);
  const canonicalPath = pathname === "/" ? "/?" : pathname;
  check(new RegExp(`<link[^>]+rel=["']canonical["'][^>]+href=["']https://www\\.imnotapan\\.com${canonicalPath}`).test(html), `${pathname}: canonical missing or incorrect`);
  check(/property=["']og:image["']/i.test(html), `${pathname}: Open Graph image missing`);
  check(/name=["']twitter:card["'][^>]+summary_large_image/i.test(html), `${pathname}: large Twitter card missing`);
  check(/application\/ld\+json/i.test(html), `${pathname}: JSON-LD missing`);
  if (alternates) {
    check(/hreflang=["']en["']/i.test(html) && /hreflang=["']es["']/i.test(html) && /hreflang=["']x-default["']/i.test(html), `${pathname}: language alternates incomplete`);
  }
}

validatePage({ pathname: "/", lang: "en", alternates: true });
validatePage({ pathname: "/about", lang: "en", alternates: true });
validatePage({ pathname: "/es", lang: "es", alternates: true });
validatePage({ pathname: "/es/about", lang: "es", alternates: true });
for (const slug of projectSlugs) {
  validatePage({ pathname: `/work/${slug}`, lang: "en", alternates: true });
  validatePage({ pathname: `/es/work/${slug}`, lang: "es", alternates: true });
}

for (const file of ["404.html", "robots.txt", "sitemap.xml", "staticwebapp.config.json"]) {
  check(existsSync(join(out, file)), `/${file}: export is missing`);
}

if (existsSync(join(out, "404.html"))) {
  const html = readFileSync(join(out, "404.html"), "utf8");
  check(/name=["']robots["'][^>]+noindex/i.test(html), "/404: noindex missing");
  check(!/name=["']robots["'][^>]+content=["']index/i.test(html), "/404: contradictory index directive found");
}

if (existsSync(join(out, "robots.txt"))) {
  const robots = readFileSync(join(out, "robots.txt"), "utf8");
  check(robots.includes("Sitemap: https://www.imnotapan.com/sitemap.xml"), "/robots.txt: canonical sitemap missing");
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Validated ${projectSlugs.length * 2 + 4} indexable pages plus robots, sitemap and 404.`);
