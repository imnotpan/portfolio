import type { Metadata } from "next";
import PortfolioHome from "./PortfolioHome";
import { defaultOgImage, localizedAlternates } from "./lib/site";

const title = "Pixel Artist & Animator for Games & Brands | Kevin Medina";
const description =
  "Kevin Medina, also known as IMNOTAPAN, is a freelance Pixel Artist & Animator creating expressive characters, animation, environments and game art for games, brands and digital productions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: localizedAlternates("/", "/es"),
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: "IMNOTAPAN",
    images: [{ url: defaultOgImage, width: 384, height: 384, alt: "IMNOTAPAN pixel art logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [defaultOgImage],
  },
};

export default function Home() {
  return <PortfolioHome locale="en" />;
}
