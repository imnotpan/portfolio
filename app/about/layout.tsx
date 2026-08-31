import type { Metadata } from "next";
import { JsonLd } from "../components/JsonLd";
import { defaultOgImage, localizedAlternates, siteName, socialProfiles } from "../lib/site";

const title = "About Kevin Medina | Pixel Artist & Animator — IMNOTAPAN";
const description = "Kevin Medina, also known as IMNOTAPAN, is a Pixel Artist & Animator working across games, animation, music and commercial projects.";

export const metadata: Metadata = {
  title,
  description,
  alternates: localizedAlternates("/about", "/es/about"),
  openGraph: { title, description, url: "/about", images: [defaultOgImage] },
  twitter: { card: "summary_large_image", images: [defaultOgImage] },
};

export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": ["ProfilePage", "Person"],
          name: "Kevin Medina",
          alternateName: siteName,
          jobTitle: "Pixel Artist & Animator",
          url: "https://www.imnotapan.com/about",
          image: "https://www.imnotapan.com/Yo.jpeg",
          sameAs: socialProfiles,
        }}
      />
      {children}
    </>
  );
}
