import { HomePage } from "../components/HomePage";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "Kevin Medina — Freelance Pixel Artist & Animator | IMNOTAPAN",
  description:
    "Freelance pixel artist & animator from Chile: game sprites, tilesets and environments, plus pixel art music videos — 26M+ views on Minina. Hayaku! on Steam.",
});

export default function Page() {
  return <HomePage locale="en" />;
}
