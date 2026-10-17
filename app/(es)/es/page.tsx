import { HomePage } from "../../components/HomePage";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata({
  locale: "es",
  path: "/",
  title: "Kevin Medina — Artista de Pixel Art y Animador en Chile | IMNOTAPAN",
  description:
    "Artista de pixel art y animador freelance en Chile: sprites, tilesets y escenarios para videojuegos, y videoclips en pixel art: más de 26M de vistas en Minina.",
});

export default function Page() {
  return <HomePage locale="es" />;
}
