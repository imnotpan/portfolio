import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { artistName, personJsonLd, siteName, siteUrl, type Locale } from "../lib/site";
import { JsonLd } from "./JsonLd";
import "../globals.css";

// "optional": body copy never re-paints late on slow connections (protects LCP).
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "optional" });
const pixel = localFont({
  src: "../fonts/AsepriteFont.woff2",
  variable: "--font-pixel",
  // Preloaded and only ~7 KB compressed, so the swap lands before first paint
  // on most connections; "block" measurably delayed LCP (the H1).
  display: "swap",
  fallback: ["ui-monospace", "Menlo", "monospace"],
  // The face draws caps at 6/16 of the em with tall built-in leading. Scale it
  // so 1 art pixel = 1/10 em and trim the line box around the glyphs.
  declarations: [
    { prop: "size-adjust", value: "160%" },
    { prop: "ascent-override", value: "62%" },
    { prop: "descent-override", value: "14%" },
  ],
  adjustFontFallback: false,
});

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  authors: [{ name: artistName, url: siteUrl }],
  creator: artistName,
  publisher: siteName,
  category: "Art & Design",
  formatDetection: { email: false, telephone: false, address: false },
};

export const rootViewport: Viewport = {
  themeColor: "#fbfaf7",
  colorScheme: "light",
};

export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${sans.variable} ${pixel.variable}`}>
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            name: siteName,
            alternateName: `${artistName} — Pixel Artist & Animator`,
            url: siteUrl,
            inLanguage: ["en", "es"],
            publisher: personJsonLd,
          }}
        />
        {children}
      </body>
    </html>
  );
}
