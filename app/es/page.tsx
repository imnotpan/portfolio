import type { Metadata } from "next";
import PortfolioHome from "../PortfolioHome";
import { defaultOgImage, localizedAlternates } from "../lib/site";

const title = "Artista de Pixel Art y Animador para Juegos y Marcas | Kevin Medina";
const description = "Kevin Medina, también conocido como IMNOTAPAN, es un artista de pixel art y animador freelance que crea personajes, animación, entornos y arte para videojuegos, marcas y producciones digitales.";

export const metadata: Metadata = {
  title,
  description,
  alternates: localizedAlternates("/", "/es", "/es"),
  openGraph: { type: "website", url: "/es", title, description, images: [defaultOgImage] },
  twitter: { card: "summary_large_image", images: [defaultOgImage] },
};

export default function SpanishHome() {
  return <PortfolioHome locale="es" />;
}
