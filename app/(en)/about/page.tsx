import { AboutPage } from "../../components/AboutPage";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata({
  locale: "en",
  path: "/about",
  title: "About Kevin Medina — Pixel Artist & Animator | IMNOTAPAN",
  description:
    "Chilean pixel artist and animator with a computer engineering background. Music videos with 27M+ combined views and background art for Hayaku! Island of Darkness.",
  type: "profile",
});

export default function Page() {
  return <AboutPage locale="en" />;
}
