import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "./components/JsonLd";
import { artistName, siteName, siteUrl } from "./lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  creator: artistName,
  publisher: siteName,
  robots: { index: true, follow: true },
  icons: {
    icon: "/ICON%20LANDING.png",
    shortcut: "/ICON%20LANDING.png",
    apple: "/ICON%20LANDING.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            alternateName: artistName,
            url: siteUrl,
          }}
        />
        {children}
      </body>
    </html>
  );
}
