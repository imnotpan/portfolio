import { AboutPage } from "../../../components/AboutPage";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata({
  locale: "es",
  path: "/about",
  title: "Sobre Kevin Medina — Artista de Pixel Art y Animador | IMNOTAPAN",
  description:
    "Artista de pixel art y animador chileno, ingeniero civil informático. Videoclips con más de 27M de reproducciones y fondos para Hayaku! Island of Darkness.",
  type: "profile",
});

export default function Page() {
  return <AboutPage locale="es" />;
}
