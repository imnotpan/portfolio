import type { Metadata } from "next";
import AboutPage from "../../about/page";
import { defaultOgImage, localizedAlternates } from "../../lib/site";

const title = "Sobre Kevin Medina | Artista de Pixel Art y Animador — IMNOTAPAN";
const description = "Kevin Medina, también conocido como IMNOTAPAN, es artista de pixel art y animador para videojuegos, música, proyectos de animación y trabajo comercial.";

export const metadata: Metadata = {
  title,
  description,
  alternates: localizedAlternates("/about", "/es/about", "/es/about"),
  openGraph: { type: "profile", url: "/es/about", title, description, images: [defaultOgImage] },
  twitter: { card: "summary_large_image", images: [defaultOgImage] },
};

export default function SpanishAboutPage() {
  return <AboutPage locale="es" />;
}
