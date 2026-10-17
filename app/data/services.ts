import type { Locale } from "../lib/site";
import type { CaseStudy, Localized } from "./work";

/**
 * Service pages: one per search intent the portfolio can prove with shipped
 * work. Every claim here already appears in a case study or the contact copy;
 * don't add rates, turnaround times or availability without the owner.
 */
export type Service = {
  slug: "game-pixel-art" | "pixel-art-music-videos";
  /** Short name for breadcrumbs and links. */
  name: Localized;
  title: Localized;
  description: Localized;
  kicker: Localized;
  h1: Localized;
  lead: Localized;
  how: Record<Locale, string[]>;
  makes: Record<Locale, string[]>;
  formats: Localized;
  /** Case studies shown on the page, strongest first. */
  cases: string[];
  /** Process stills taken from those cases. */
  stills: string[];
  hero: { image?: string; youtubeId?: string };
};

export const services: Service[] = [
  {
    slug: "game-pixel-art",
    name: { en: "Pixel art for games", es: "Pixel art para videojuegos" },
    title: {
      en: "Game Pixel Art: Sprites, Tilesets & Environments | Kevin Medina",
      es: "Pixel art para videojuegos: sprites y tilesets | Kevin Medina",
    },
    description: {
      en: "Freelance pixel artist for indie and mobile games: character sprites and animation, modular tilesets, parallax backgrounds and game mockups. Hayaku! on Steam.",
      es: "Pixel artist freelance para videojuegos indie y móviles: sprites y animación de personajes, tilesets modulares, fondos con parallax y mockups. Hayaku! en Steam.",
    },
    kicker: { en: "Game art · freelance", es: "Arte de juego · freelance" },
    h1: { en: "Pixel art for games.", es: "Pixel art para videojuegos." },
    lead: {
      en: "Sprites, character animation, tilesets and environments for indie and mobile games — including the background and tileset art for Hayaku! Island of Darkness on Steam.",
      es: "Sprites, animación de personajes, tilesets y escenarios para videojuegos indie y móviles, incluidos los fondos y tilesets de Hayaku! Island of Darkness en Steam.",
    },
    how: {
      en: [
        "Most of my game work starts from a gameplay screen, not a single asset. A mockup fixes character scale, palette and terrain readability before anything gets animated — the approach behind the Celtic, Castle, Western and Platform Goblin mockups below.",
        "On Hayaku! Island of Darkness I work as background and tileset artist: modular tiles, parallax layers and set dressing that the team assembles directly inside the engine, so each area gets its own mood without hurting gameplay readability.",
        "For characters I design and animate the sprite itself — idle, run, attack and boss cycles — and hand over engine-ready sprite sheets together with the layered .aseprite source.",
        "Projects range from full art direction (Nuclear Dome: characters, enemy roster, weapons, UI and a domed arena) to one character with skins, menus and levels (Anomaly Rat).",
      ],
      es: [
        "Casi todo mi trabajo para juegos parte de una pantalla de gameplay, no de un asset suelto. Un mockup fija la escala de los personajes, la paleta y la lectura del terreno antes de animar nada: es el enfoque detrás de los mockups Celtic, Castle, Western y Platform Goblin.",
        "En Hayaku! Island of Darkness trabajo como artista de fondos y tilesets: tiles modulares, capas de parallax y ambientación que el equipo arma directamente en el motor, para que cada zona tenga identidad sin perder lectura del gameplay.",
        "En personajes diseño y animo el sprite completo —reposo, carrera, ataque y ciclos de jefe— y entrego sprite sheets listos para el motor junto con el archivo .aseprite por capas.",
        "Los proyectos van desde la dirección de arte completa (Nuclear Dome: personajes, enemigos, armas, interfaz y una arena bajo una cúpula) hasta un personaje con skins, menús y niveles (Anomaly Rat).",
      ],
    },
    makes: {
      en: ["Character sprites & animation", "Enemy and boss design", "Modular tilesets", "Parallax backgrounds", "Game UI", "Gameplay mockups"],
      es: ["Sprites y animación de personajes", "Diseño de enemigos y jefes", "Tilesets modulares", "Fondos con parallax", "Interfaz de juego", "Mockups de gameplay"],
    },
    formats: {
      en: "Engine-ready sprite sheets, layered .aseprite / .png",
      es: "Sprite sheets listos para el motor, .aseprite / .png por capas",
    },
    cases: [
      "hayaku-island-of-darkness",
      "nuclear-dome-sci-fi-world",
      "rat-character-world-mockup",
      "tiny-golf-game-art",
      "castle-environment-mockup",
      "celtic-fantasy-world",
      "platform-goblin-game-world",
      "western-world-environment-art",
      "paladinko-game-art-mockup",
      "ufo-grab-arcade-game-mockup",
    ],
    stills: ["/images/static/img/Environment/hayaku_2.png", "/images/static/img/pixel/nuclear_dome/img_5.png", "/images/static/img/pixel/nuclear_dome/img_7.png"],
    hero: { image: "/images/static/img/Environment/hayaku_1.png" },
  },
  {
    slug: "pixel-art-music-videos",
    name: { en: "Pixel art music videos", es: "Videoclips en pixel art" },
    title: {
      en: "Pixel Art Music Videos & Animation | Kevin Medina, IMNOTAPAN",
      es: "Videoclips en pixel art y animación | Kevin Medina, IMNOTAPAN",
    },
    description: {
      en: "Animated pixel art music videos for artists and labels: Minina by Carre & Spreen (26M+ views), Esa Noche by Marcianeke (1.3M+). GIF or MP4 in 16:9, 9:16 and 1:1.",
      es: "Videoclips animados en pixel art para artistas y sellos: Minina de Carre & Spreen (26M+ vistas) y Esa Noche de Marcianeke (1,3M+). GIF o MP4 en 16:9, 9:16 y 1:1.",
    },
    kicker: { en: "Animation · music", es: "Animación · música" },
    h1: { en: "Pixel art music videos.", es: "Videoclips en pixel art." },
    lead: {
      en: "Animated pixel art music videos for artists and labels — Minina by Carre & Spreen passed 26 million views on YouTube, and Esa Noche by Marcianeke 1.3 million.",
      es: "Videoclips animados en pixel art para artistas y sellos: Minina de Carre & Spreen superó los 26 millones de reproducciones en YouTube y Esa Noche de Marcianeke, 1,3 millones.",
    },
    how: {
      en: [
        "Each video is built as a small pixel world around the track: a main scene, sprites of the artists and short animated sequences that carry the song from start to finish. Minina is one detailed isometric bedroom; Esencia travels from a forest road to space stations and neon grids.",
        "Scenes are drawn so that every frame also works as a still, so the cover art, key art and social media pieces come out of the same files as the video.",
        "The animation is delivered as GIF or MP4 in 16:9, 9:16 and 1:1, so one piece covers YouTube, vertical video and the release cover. Usage rights are agreed in every brief.",
        "The same approach works beyond music: the pixel art intro for the digital film “Que Mierda es Esto” (Rodi Garrido) was featured by CNN Chile, La Cuarta and AS Chile.",
      ],
      es: [
        "Cada video se construye como un pequeño mundo en pixel art alrededor de la canción: una escena principal, sprites de los artistas y secuencias animadas que la acompañan de principio a fin. Minina es una habitación isométrica detallada; Esencia viaja de un camino entre árboles a estaciones espaciales y cuadrículas de neón.",
        "Las escenas se dibujan para que cada cuadro funcione también como imagen fija, así la portada, el key art y las piezas para redes salen de los mismos archivos que el video.",
        "La animación se entrega en GIF o MP4 en 16:9, 9:16 y 1:1, para que una sola pieza cubra YouTube, video vertical y la portada del lanzamiento. Los derechos de uso se acuerdan en cada brief.",
        "El mismo enfoque funciona fuera de la música: la intro en pixel art de la película digital “Que Mierda es Esto” (Rodi Garrido) fue destacada por CNN Chile, La Cuarta y AS Chile.",
      ],
    },
    makes: {
      en: ["Animated scenes", "Sprites of the artists", "Isometric environments", "Cover & key art", "Stills for social media"],
      es: ["Escenas animadas", "Sprites de los artistas", "Escenarios isométricos", "Portada y key art", "Piezas para redes"],
    },
    formats: { en: "GIF or MP4 · 16:9, 9:16 and 1:1", es: "GIF o MP4 · 16:9, 9:16 y 1:1" },
    cases: ["minina-carre-spreen-music-video", "esa-noche-marcianeke-music-video", "esencia-lekays-music-video", "zapping-rodi-garrido-film-intro"],
    stills: ["/images/static/img/pixel/minina/img_3.png", "/images/static/img/pixel/esencia/img_4.png", "/images/static/img/pixel/minina/img_4.png"],
    hero: { youtubeId: "oE2rfyhIsuk" },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

/** The service a case study belongs to, for breadcrumbs. Film intros and event posters fit neither. */
export function serviceFor(study: CaseStudy) {
  if (study.category === "environments" || study.category === "mockups") return getService("game-pixel-art");
  if (study.category === "animation" && study.kind.en === "Music video") return getService("pixel-art-music-videos");
  return undefined;
}
