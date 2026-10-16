import { HomePage } from "../../components/HomePage";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata({
  locale: "es",
  path: "/",
  title: "Kevin Medina — Artista de Pixel Art y Animador Freelance | IMNOTAPAN",
  description:
    "Kevin Medina (IMNOTAPAN), artista de pixel art y animador freelance: sprites, personajes, escenarios y tilesets para videojuegos, y videoclips en pixel art para marcas y artistas — más de 26M de vistas en Minina.",
});

export default function Page() {
  return <HomePage locale="es" />;
}
