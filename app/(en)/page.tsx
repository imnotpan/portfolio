import { HomePage } from "../components/HomePage";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "Kevin Medina — Freelance Pixel Artist & Animator | IMNOTAPAN",
  description:
    "Kevin Medina (IMNOTAPAN), freelance pixel artist & animator: game sprites, characters, environments and tilesets for studios, plus pixel art music videos for brands and artists — 26M+ views on Minina.",
});

export default function Page() {
  return <HomePage locale="en" />;
}
