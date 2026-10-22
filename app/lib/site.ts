import type { Metadata } from "next";

export type Locale = "en" | "es";

export const siteUrl = "https://www.imnotapan.com";
export const siteName = "IMNOTAPAN";
export const artistName = "Kevin Medina";
export const contactEmail = "contact@imnotapan.com";
export const defaultOgImage = "/og-image.png";
export const itchProfileUrl = "https://imnotapan.itch.io";
export const youtubeChannelUrl = "https://www.youtube.com/@imnotapan";
export const steamHayakuUrl = "https://store.steampowered.com/app/2402500/Hayaku_and_the_Island_of_Darkness/";
export const steamRockBottomUrl = "https://store.steampowered.com/app/4297840/Rock_Bottom/";

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/imnotapan/" },
  { label: "X / Twitter", href: "https://twitter.com/imnotapan/" },
  { label: "YouTube", href: youtubeChannelUrl },
  { label: "itch.io", href: itchProfileUrl },
];

export const socialProfiles = socialLinks.map((link) => link.href);

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function localePath(locale: Locale, path = "/") {
  if (locale === "en") return path;
  return path === "/" ? "/es" : `/es${path}`;
}

export function mailto(subject: string, body?: string) {
  const query = `subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;
  return `mailto:${contactEmail}?${query}`;
}

/** Self-canonical metadata with reciprocal EN/ES alternates. */
export function pageMetadata({
  locale,
  path,
  title,
  description,
  image = defaultOgImage,
  imageAlt = "IMNOTAPAN — pixel art & animation by Kevin Medina",
  type = "website",
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
}): Metadata {
  const url = localePath(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: path, es: localePath("es", path), "x-default": path },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName,
      locale: locale === "es" ? "es_CL" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_CL",
      images: [{ url: image, alt: imageAlt, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@imnotapan",
      creator: "@imnotapan",
      title,
      description,
      images: [image],
    },
  };
}

export const personJsonLd = {
  "@type": "Person",
  "@id": `${siteUrl}/#kevin-medina`,
  name: artistName,
  alternateName: siteName,
  jobTitle: "Pixel Artist & Animator",
  url: siteUrl,
  image: `${siteUrl}/media/yo.webp`,
  email: `mailto:${contactEmail}`,
  address: { "@type": "PostalAddress", addressCountry: "CL" },
  knowsAbout: [
    "Pixel art",
    "Sprite animation",
    "Character design",
    "Environment art",
    "Tileset design",
    "Game art",
    "Music video animation",
  ],
  sameAs: socialProfiles,
};
