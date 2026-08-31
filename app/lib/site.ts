import type { Metadata } from "next";

export const siteUrl = "https://www.imnotapan.com";
export const siteName = "IMNOTAPAN";
export const artistName = "Kevin Medina";
export const defaultOgImage = "/ICON%20LANDING.png";

export const socialProfiles = [
  "https://www.instagram.com/imnotapan/",
  "https://twitter.com/imnotapan/",
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function localizedAlternates(
  path: string,
  spanishPath: string,
  canonical = path,
): Metadata["alternates"] {
  return {
    canonical,
    languages: {
      en: path,
      es: spanishPath,
      "x-default": path,
    },
  };
}
