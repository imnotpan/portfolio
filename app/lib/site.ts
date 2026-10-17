import type { Metadata } from "next";

export const siteUrl = "https://www.imnotapan.com";
export const siteName = "IMNOTAPAN";
export const artistName = "Kevin Medina";
export const defaultOgImage = "/ICON%20LANDING.png";
export const contactEmail = "codelab.uah@gmail.com";
export const steamHayakuUrl = "https://store.steampowered.com/app/2863810/Hayaku_Island_of_Darkness/";

export type Locale = "en" | "es";

export const socialProfiles = [
  "https://www.instagram.com/imnotapan/",
  "https://twitter.com/imnotapan/",
];

export const socialLinks = socialProfiles;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function localePath(locale: Locale, path: string): string {
  if (locale === "es" && path !== "/") {
    return `/es${path}`;
  }
  return path;
}

export function mailto(subject: string, body: string): string {
  const encoded = encodeURIComponent(`${subject}\n\n${body}`);
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encoded}`;
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

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: artistName,
    url: siteUrl,
    image: absoluteUrl(defaultOgImage),
    sameAs: socialProfiles,
  };
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  image?: string,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName,
      images: [{ url: absoluteUrl(image || defaultOgImage) }],
    },
  };
}
