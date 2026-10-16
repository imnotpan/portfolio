import type { Locale } from "../lib/site";

export type Localized = Record<Locale, string>;

export type Category = "characters" | "environments" | "mockups" | "illustration" | "animation";

export const categories: { id: Category; label: Localized }[] = [
  { id: "characters", label: { en: "Characters", es: "Personajes" } },
  { id: "mockups", label: { en: "Game mockups", es: "Mockups" } },
  { id: "environments", label: { en: "Environments", es: "Escenarios" } },
  { id: "illustration", label: { en: "Illustration", es: "Ilustración" } },
  { id: "animation", label: { en: "Animation", es: "Animación" } },
];

export type CaseStudy = {
  slug: string;
  title: string;
  client?: string;
  kind: Localized;
  category: Category;
  summary: Localized;
  body: Record<Locale, string[]>;
  role: Localized;
  deliverables: Record<Locale, string[]>;
  tools: string[];
  cover: string;
  gallery: string[];
  youtubeId?: string;
  /** YouTube publish date (ISO), required by VideoObject. */
  uploadDate?: string;
  stat?: { value: string; label: Localized };
  /** Extra press or reach line for the home page, taken from the project summary. */
  reach?: Localized;
  link?: { href: string; label: Localized };
};

const pixel = (folder: string, file: string) => `/images/static/img/pixel/${folder}/${file}`;
const mockup = (file: string) => `/images/static/img/Mockups/${file}`;

export const caseStudies: CaseStudy[] = [
  {
    slug: "minina-carre-spreen-music-video",
    title: "Minina — Carre & Spreen",
    client: "Carre & Spreen",
    kind: { en: "Music video", es: "Videoclip" },
    category: "animation",
    summary: {
      en: "Pixel art animation and visual production for the official “Minina” music release — a 26M+ view isometric pixel world.",
      es: "Animación y producción visual en pixel art para el lanzamiento oficial de “Minina”: un mundo isométrico con más de 26 millones de reproducciones.",
    },
    body: {
      en: [
        "Pixel art animation and visual production developed for the official music release, combining expressive characters, environments and animated storytelling into a distinctive retro-inspired visual.",
        "The video is built around a detailed isometric bedroom scene, character sprites of both artists and short animated sequences that carry the track from start to finish.",
      ],
      es: [
        "Animación y producción visual en pixel art desarrollada para el lanzamiento oficial, combinando personajes expresivos, escenarios y narrativa animada en una pieza visual retro reconocible.",
        "El video se construye alrededor de una habitación isométrica detallada, sprites de ambos artistas y secuencias animadas que acompañan la canción de principio a fin.",
      ],
    },
    role: { en: "Pixel artist & animator", es: "Artista de pixel art y animador" },
    deliverables: {
      en: ["Isometric environment", "Character sprites", "Animated sequences", "Cover & key art"],
      es: ["Escenario isométrico", "Sprites de personajes", "Secuencias animadas", "Portada y key art"],
    },
    tools: ["Aseprite"],
    cover: pixel("minina", "main.jpg"),
    gallery: [pixel("minina", "img_2.png"), pixel("minina", "img_3.png"), pixel("minina", "img_4.png"), pixel("minina", "img_5.png")],
    youtubeId: "oE2rfyhIsuk",
    uploadDate: "2023-07-08T17:00:16-07:00",
    stat: { value: "26M+", label: { en: "views on YouTube", es: "reproducciones en YouTube" } },
  },
  {
    slug: "hayaku-island-of-darkness",
    title: "Hayaku! Island of Darkness",
    client: "Hayaku! (Steam)",
    kind: { en: "Indie game · in production", es: "Videojuego indie · en producción" },
    category: "environments",
    summary: {
      en: "Background and tileset art for Hayaku! Island of Darkness, a side-scrolling action game coming to Steam.",
      es: "Fondos y tilesets para Hayaku! Island of Darkness, un juego de acción de desplazamiento lateral que llegará a Steam.",
    },
    body: {
      en: [
        "I work as a background and tileset artist on Hayaku! Island of Darkness, building playable spaces and layered backdrops that keep gameplay readable while giving each area its own mood.",
        "The work covers modular tiles, parallax background layers and set dressing designed to be assembled by the team inside the engine.",
      ],
      es: [
        "Trabajo como artista de fondos y tilesets en Hayaku! Island of Darkness, construyendo espacios jugables y fondos por capas que mantienen la lectura del gameplay y dan identidad a cada zona.",
        "El trabajo incluye tiles modulares, capas de fondo con parallax y elementos de ambientación pensados para que el equipo los arme directamente en el motor.",
      ],
    },
    role: { en: "Background & tileset artist", es: "Artista de fondos y tilesets" },
    deliverables: {
      en: ["Modular tilesets", "Parallax backgrounds", "Environment props"],
      es: ["Tilesets modulares", "Fondos con parallax", "Props de escenario"],
    },
    tools: ["Aseprite"],
    cover: "/images/static/img/Environment/hayaku_1.png",
    gallery: ["/images/static/img/Environment/hayaku_2.png"],
    link: { href: "https://store.steampowered.com/app/2402500/Hayaku_and_the_Island_of_Darkness/", label: { en: "Wishlist on Steam", es: "Agrégalo a tu lista de deseados en Steam" } },
  },
  {
    slug: "esencia-lekays-music-video",
    title: "Esencia — Le'Kays",
    client: "Le'Kays",
    kind: { en: "Music video", es: "Videoclip" },
    category: "animation",
    summary: {
      en: "Animated pixel art music video for Le'Kays: character animation, sci-fi set pieces and a road-trip title card.",
      es: "Videoclip animado en pixel art para Le'Kays: animación de personajes, escenas de ciencia ficción y una portada de viaje por carretera.",
    },
    body: {
      en: [
        "Animated pixel art visual developed for Le'Kays, combining character animation, stylized environments and visual storytelling to build a distinctive identity around the music release.",
        "Scenes move from a warm forest road to space stations and neon grids, each one designed as a self-contained illustration that also works as a still for social media.",
      ],
      es: [
        "Visual animado en pixel art desarrollado para Le'Kays, que combina animación de personajes, escenarios estilizados y narrativa visual para construir una identidad propia alrededor del lanzamiento.",
        "Las escenas pasan de un camino entre árboles a estaciones espaciales y cuadrículas de neón; cada una funciona como ilustración independiente y también como pieza para redes sociales.",
      ],
    },
    role: { en: "Pixel artist & animator", es: "Artista de pixel art y animador" },
    deliverables: {
      en: ["Cover art", "Animated scenes", "Character animation"],
      es: ["Portada", "Escenas animadas", "Animación de personajes"],
    },
    tools: ["Aseprite"],
    cover: pixel("esencia", "img_4.png"),
    gallery: [pixel("esencia", "main.jpeg"), pixel("esencia", "img_2.png"), pixel("esencia", "img_3.png"), pixel("esencia", "img_5.png"), pixel("esencia", "img_6.png"), pixel("esencia", "img_7.png"), pixel("esencia", "img_8.png")],
    youtubeId: "kpwai908-TY",
    uploadDate: "2022-04-29T09:00:12-07:00",
    stat: { value: "60K+", label: { en: "views on YouTube", es: "reproducciones en YouTube" } },
  },
  {
    slug: "esa-noche-marcianeke-music-video",
    title: "Esa Noche — Marcianeke",
    client: "Marcianeke",
    kind: { en: "Music video", es: "Videoclip" },
    category: "animation",
    summary: {
      en: "16-bit animated music video for Marcianeke's “Esa Noche”, with 1.3M+ views on YouTube.",
      es: "Videoclip animado de estética 16 bits para “Esa Noche” de Marcianeke, con más de 1,3 millones de reproducciones.",
    },
    body: {
      en: [
        "16-bit animated music visual created for Marcianeke, translating the identity and atmosphere of the track into a fully illustrated pixel art world built around characters, environments and animation.",
      ],
      es: [
        "Visual animado de estética 16 bits creado para Marcianeke, que traduce la identidad y la atmósfera de la canción a un mundo de pixel art completamente ilustrado, con personajes, escenarios y animación.",
      ],
    },
    role: { en: "Pixel artist & animator", es: "Artista de pixel art y animador" },
    deliverables: {
      en: ["Character sprites", "Environments", "Animation"],
      es: ["Sprites de personajes", "Escenarios", "Animación"],
    },
    tools: ["Aseprite"],
    cover: "",
    gallery: [],
    youtubeId: "55e3xPOoa7I",
    uploadDate: "2021-11-27T19:00:08-08:00",
    stat: { value: "1.3M+", label: { en: "views on YouTube", es: "reproducciones en YouTube" } },
  },
  {
    slug: "zapping-rodi-garrido-film-intro",
    title: "Zapping — Rodi Garrido",
    client: "Rodi Garrido",
    kind: { en: "Film intro", es: "Intro de película" },
    category: "animation",
    summary: {
      en: "Pixel art animated intro for the digital film “Que Mierda es Esto”, featured by CNN Chile, La Cuarta and AS Chile.",
      es: "Intro animada en pixel art para la película digital “Que Mierda es Esto”, destacada por CNN Chile, La Cuarta y AS Chile.",
    },
    body: {
      en: [
        "Pixel art animated sequence created for the digital film Que Mierda es Esto, bringing its irreverent visual identity into a handcrafted animated intro designed specifically for the production.",
      ],
      es: [
        "Secuencia animada en pixel art creada para la película digital Que Mierda es Esto, que lleva su identidad irreverente a una intro animada hecha a mano específicamente para la producción.",
      ],
    },
    role: { en: "Pixel artist & animator", es: "Artista de pixel art y animador" },
    deliverables: {
      en: ["Animated intro sequence"],
      es: ["Secuencia de intro animada"],
    },
    tools: ["Aseprite"],
    cover: "",
    gallery: [],
    youtubeId: "8UqTzBiikf0",
    uploadDate: "2022-08-25T15:12:07-07:00",
    stat: { value: "CNN Chile", label: { en: "covered the film nationally", es: "cubrió la película a nivel nacional" } },
    reach: { en: "Also featured by La Cuarta and AS Chile", es: "También destacada por La Cuarta y AS Chile" },
  },
  {
    slug: "nuclear-dome-sci-fi-world",
    title: "Nuclear Dome",
    kind: { en: "Game art · mobile arcade", es: "Arte de juego · arcade móvil" },
    category: "mockups",
    summary: {
      en: "Complete art direction for a sci-fi arcade game: characters, enemy roster, weapons, UI and a domed arena.",
      es: "Dirección de arte completa para un arcade de ciencia ficción: personajes, enemigos, armas, interfaz y una arena bajo una cúpula.",
    },
    body: {
      en: [
        "Large-scale sci-fi environment shaped by industrial structures, side-scrolling readability and color blocks that separate playable spaces.",
        "Beyond the arena, the project includes an animated player character, a full enemy and weapon sheet, unlockable card art and a title screen — every element sharing one tight palette so it reads instantly on a phone screen.",
      ],
      es: [
        "Escenario de ciencia ficción a gran escala, definido por estructuras industriales, lectura clara de desplazamiento lateral y bloques de color que separan los espacios jugables.",
        "Además de la arena, el proyecto incluye un personaje jugable animado, hojas completas de enemigos y armas, cartas desbloqueables y pantalla de título, todo con una paleta acotada para leerse al instante en un teléfono.",
      ],
    },
    role: { en: "Pixel artist · art direction", es: "Artista de pixel art · dirección de arte" },
    deliverables: {
      en: ["Player animation", "Enemy & weapon sheets", "Arena background", "UI & title screen"],
      es: ["Animación del personaje", "Hojas de enemigos y armas", "Fondo de la arena", "Interfaz y pantalla de título"],
    },
    tools: ["Aseprite"],
    cover: mockup("NUCLEAR DOME.png"),
    gallery: [pixel("nuclear_dome", "main.gif"), pixel("nuclear_dome", "img_5.png"), pixel("nuclear_dome", "img_3.png"), pixel("nuclear_dome", "img_6.png"), pixel("nuclear_dome", "img_7.png"), pixel("nuclear_dome", "img_1.gif")],
  },
  {
    slug: "rat-character-world-mockup",
    title: "Anomaly Rat",
    kind: { en: "Game art · mobile", es: "Arte de juego · móvil" },
    category: "mockups",
    summary: {
      en: "Character, skins, menus and level art for a vertical mobile action game starring a lab rat.",
      es: "Personaje, skins, menús y niveles para un juego de acción vertical para móviles protagonizado por una rata de laboratorio.",
    },
    body: {
      en: [
        "Vertical game scene pairing a central character with a dense environment to establish mood, personality and visual direction.",
        "The set includes the animated rat, a sheet of unlockable skins, options and game-over screens and the title card — all built at a phone-native resolution.",
      ],
      es: [
        "Escena de juego vertical que combina un personaje central con un escenario denso para establecer ambiente, personalidad y dirección visual.",
        "El conjunto incluye la rata animada, una hoja de skins desbloqueables, pantallas de opciones y game over, y la portada, todo a una resolución nativa para teléfono.",
      ],
    },
    role: { en: "Pixel artist · UI", es: "Artista de pixel art · interfaz" },
    deliverables: {
      en: ["Animated character", "Skins", "Menus & HUD", "Level art"],
      es: ["Personaje animado", "Skins", "Menús y HUD", "Arte de niveles"],
    },
    tools: ["Aseprite"],
    cover: mockup("RAT copy.png"),
    gallery: [pixel("rat", "img_1.gif"), pixel("rat", "img_2.png"), pixel("rat", "img_3.png"), pixel("rat", "img_4.png"), pixel("rat", "img_5.png")],
  },
  {
    slug: "tiny-golf-game-art",
    title: "Tiny Golf",
    kind: { en: "Game art · characters & tiles", es: "Arte de juego · personajes y tiles" },
    category: "mockups",
    summary: {
      en: "A cast of golfers, animated wildlife and a modular course tileset for a cozy top-down golf game.",
      es: "Un elenco de golfistas, fauna animada y un tileset modular de campo para un juego de golf cenital y relajado.",
    },
    body: {
      en: [
        "A cozy top-down golf concept: four playable golfers with distinct silhouettes, small animated animals that bring the course to life and a modular tileset for greens, sand, water and rough.",
      ],
      es: [
        "Un concepto de golf cenital y relajado: cuatro golfistas jugables con siluetas distintas, pequeños animales animados que dan vida al campo y un tileset modular para green, arena, agua y rough.",
      ],
    },
    role: { en: "Pixel artist & animator", es: "Artista de pixel art y animador" },
    deliverables: {
      en: ["Character line-up", "Animated wildlife", "Course tileset"],
      es: ["Line-up de personajes", "Fauna animada", "Tileset del campo"],
    },
    tools: ["Aseprite"],
    cover: pixel("tinygolf", "main.png"),
    gallery: [pixel("tinygolf", "img_4.png"), pixel("tinygolf", "img_5.png"), pixel("tinygolf", "img_6.gif"), pixel("tinygolf", "img_1.gif"), pixel("tinygolf", "img_2.gif")],
  },
  {
    slug: "workshop-poster-series",
    title: "Workshop 2025 — Posters",
    kind: { en: "Event branding", es: "Branding de evento" },
    category: "illustration",
    summary: {
      en: "Pixel art poster series and schedule for a university workshop event.",
      es: "Serie de afiches en pixel art y cronograma para un workshop universitario.",
    },
    body: {
      en: [
        "A set of event posters that use pixel art illustration to carry the speakers, schedule and seasonal autumn palette — proof that the style works for print and event communication, not only games.",
      ],
      es: [
        "Una serie de afiches que usa ilustración en pixel art para presentar a los expositores, el cronograma y una paleta otoñal, demostrando que el estilo funciona en impresos y comunicación de eventos, no solo en juegos.",
      ],
    },
    role: { en: "Illustrator & designer", es: "Ilustrador y diseñador" },
    deliverables: {
      en: ["Poster series", "Event schedule", "Character portraits"],
      es: ["Serie de afiches", "Cronograma del evento", "Retratos de personajes"],
    },
    tools: ["Aseprite"],
    cover: pixel("postersuach", "main.png"),
    gallery: [pixel("postersuach", "img_1.png"), pixel("postersuach", "img_3.png")],
  },
  {
    slug: "celtic-fantasy-world",
    title: "Celtic Fantasy World",
    kind: { en: "Game mockup · top-down", es: "Mockup de juego · cenital" },
    category: "mockups",
    summary: {
      en: "Top-down adventure mockup balancing terrain readability, character scale and classic adventure atmosphere.",
      es: "Mockup de aventura cenital que equilibra lectura del terreno, escala de personajes y atmósfera de aventura clásica.",
    },
    body: {
      en: ["Top-down game mockup developed as a cohesive fantasy world, balancing terrain readability, character scale and classic adventure atmosphere."],
      es: ["Mockup de juego cenital desarrollado como un mundo de fantasía coherente, equilibrando la lectura del terreno, la escala de los personajes y una atmósfera de aventura clásica."],
    },
    role: { en: "Pixel artist", es: "Artista de pixel art" },
    deliverables: { en: ["Gameplay mockup", "Characters", "Terrain tiles"], es: ["Mockup de gameplay", "Personajes", "Tiles de terreno"] },
    tools: ["Aseprite"],
    cover: mockup("CELTIC - ZELDA LIKE.png"),
    gallery: [],
  },
  {
    slug: "castle-environment-mockup",
    title: "Castle Environment",
    kind: { en: "Game mockup · platformer", es: "Mockup de juego · plataformas" },
    category: "mockups",
    summary: {
      en: "Modular castle level with layered depth and a focused palette for production-ready world building.",
      es: "Nivel modular de castillo con profundidad por capas y una paleta acotada, listo para producción.",
    },
    body: {
      en: ["Modular castle environment designed with layered depth and a focused palette for clear, production-ready world building."],
      es: ["Escenario modular de castillo diseñado con profundidad por capas y una paleta acotada para construir mundos claros y listos para producción."],
    },
    role: { en: "Pixel artist", es: "Artista de pixel art" },
    deliverables: { en: ["Level mockup", "Enemies", "Tileset"], es: ["Mockup de nivel", "Enemigos", "Tileset"] },
    tools: ["Aseprite"],
    cover: mockup("Castle_Mockup.png"),
    gallery: ["/characters/BOSS.gif", "/characters/GOBLIN.gif", "/characters/KNIGHT.gif"],
  },
  {
    slug: "paladinko-game-art-mockup",
    title: "Paladinko",
    kind: { en: "Game mockup · vertical", es: "Mockup de juego · vertical" },
    category: "mockups",
    summary: {
      en: "Vertical gameplay scene bringing character, UI and environment together as one readable screen.",
      es: "Escena de juego vertical que integra personaje, interfaz y escenario en una sola pantalla legible.",
    },
    body: {
      en: ["Game art mockup bringing character, UI and environment together as one readable vertical gameplay scene."],
      es: ["Mockup de arte de juego que integra personaje, interfaz y escenario en una escena vertical clara y legible."],
    },
    role: { en: "Pixel artist", es: "Artista de pixel art" },
    deliverables: { en: ["Gameplay mockup", "UI", "Character"], es: ["Mockup de gameplay", "Interfaz", "Personaje"] },
    tools: ["Aseprite"],
    cover: mockup("PALADINKO MOCKUP.png"),
    gallery: ["/characters/PALADINKO MOCKUP copy.png"],
  },
  {
    slug: "western-world-environment-art",
    title: "Western World",
    kind: { en: "Game mockup · panoramic", es: "Mockup de juego · panorámico" },
    category: "mockups",
    summary: {
      en: "Panoramic western scene built with a warm palette and confident shapes for instant readability.",
      es: "Escena western panorámica construida con una paleta cálida y formas seguras para una lectura inmediata.",
    },
    body: {
      en: ["Panoramic western environment built with a warm palette and confident shapes for immediate scene readability."],
      es: ["Escenario western panorámico construido con una paleta cálida y formas seguras para una lectura inmediata de la escena."],
    },
    role: { en: "Pixel artist", es: "Artista de pixel art" },
    deliverables: { en: ["Scene mockup", "Characters"], es: ["Mockup de escena", "Personajes"] },
    tools: ["Aseprite"],
    cover: mockup("WesternMockup.png"),
    gallery: [],
  },
  {
    slug: "ufo-grab-arcade-game-mockup",
    title: "UFO Grab",
    kind: { en: "Game mockup · arcade", es: "Mockup de juego · arcade" },
    category: "mockups",
    summary: {
      en: "Arcade cabinet mockup built around fast target readability, bold silhouettes and a centered composition.",
      es: "Mockup de máquina arcade construido para una lectura rápida del objetivo, siluetas marcadas y composición centrada.",
    },
    body: {
      en: ["Arcade game mockup built around fast target readability, bold silhouettes and a centered composition."],
      es: ["Mockup de juego arcade construido en torno a la lectura rápida del objetivo, siluetas marcadas y una composición centrada."],
    },
    role: { en: "Pixel artist", es: "Artista de pixel art" },
    deliverables: { en: ["Arcade mockup", "UI"], es: ["Mockup arcade", "Interfaz"] },
    tools: ["Aseprite"],
    cover: mockup("Mockup-UFOGRAB copy.png"),
    gallery: [],
  },
  {
    slug: "platform-goblin-game-world",
    title: "Platform Goblin",
    kind: { en: "Game mockup · platformer", es: "Mockup de juego · plataformas" },
    category: "mockups",
    summary: {
      en: "Side-scrolling world study combining enemies, terrain and background with clear gameplay readability.",
      es: "Estudio de mundo de desplazamiento lateral que combina enemigos, terreno y fondo con una lectura clara del gameplay.",
    },
    body: {
      en: ["Side-scrolling world study combining enemies, terrain and background elements with clear gameplay readability."],
      es: ["Estudio de mundo de desplazamiento lateral que combina enemigos, terreno y elementos de fondo con una lectura clara del gameplay."],
    },
    role: { en: "Pixel artist", es: "Artista de pixel art" },
    deliverables: { en: ["Level mockup", "Enemies", "Tileset"], es: ["Mockup de nivel", "Enemigos", "Tileset"] },
    tools: ["Aseprite"],
    cover: mockup("PLATFORM GOBLIN.png"),
    gallery: [],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export type Artwork = {
  id: string;
  title: Localized;
  src: string;
  category: Category;
  project?: string;
  /** Client or context shown under the title, e.g. "Carre & Spreen · 26M+ views". */
  credit?: Localized;
  /** Takes two columns of the gallery: for landscape art that a square tile would crop too much. */
  wide?: boolean;
  /** Letterbox instead of crop (sheets, line-ups, tall screens). */
  fit?: "contain";
  /** Whole-number zoom on the 3-column desktop grid, when the automatic one is too small. */
  zoom?: number;
  /** Which side stays in frame when the piece is wider than the tile. */
  align?: "right";
  /** Frames where the character is small: native centre of the character and a whole-number zoom, so it fills the tile. */
  focus?: { x: number; y: number; zoom: number };
  /** Tile background when the art's own edge colour differs from the sampled one. */
  bg?: string;
};

const t = (en: string, es = en): Localized => ({ en, es });

// Order within each category is the order on the home page: strongest first.
export const artworks: Artwork[] = [
  { id: "hayaku-1", title: t("Hayaku! Island of Darkness — level background", "Hayaku! Island of Darkness — fondo de nivel"), src: "/images/static/img/Environment/hayaku_1.png", category: "environments", project: "hayaku-island-of-darkness", credit: t("Tilesets & backgrounds · Steam game", "Tilesets y fondos · juego de Steam") },
  { id: "knight", title: t("Knight — combat animation", "Caballero — animación de combate"), src: "/characters/KNIGHT.gif", category: "characters", project: "castle-environment-mockup", credit: t("Sprite animation", "Animación de sprite"), focus: { x: 87, y: 66, zoom: 4 } },
  { id: "castle", title: t("Castle level mockup", "Mockup de nivel — castillo"), src: mockup("Castle_Mockup.png"), category: "mockups", project: "castle-environment-mockup", credit: t("Game mockup", "Mockup de juego") },
  { id: "boss", title: t("Goblin King — boss idle", "Rey goblin — jefe"), src: "/characters/BOSS.gif", category: "characters", project: "castle-environment-mockup", credit: t("Boss sprite", "Sprite de jefe") },
  { id: "engineer", title: t("Engineer — idle", "Ingeniero — reposo"), src: "/characters/Beams.gif", category: "characters", focus: { x: 90, y: 77, zoom: 5 } },
  { id: "nuclear-player", title: t("Nuclear Dome — player run", "Nuclear Dome — personaje"), src: pixel("nuclear_dome", "main.gif"), category: "characters", project: "nuclear-dome-sci-fi-world", credit: t("Player character", "Personaje jugable") },
  { id: "celtic", title: t("Celtic adventure mockup", "Mockup de aventura celta"), src: mockup("CELTIC - ZELDA LIKE.png"), category: "mockups", project: "celtic-fantasy-world", credit: t("Top-down game mockup", "Mockup de juego cenital") },
  { id: "monster-roster", title: t("Enemy roster — 10 designs", "Galería de enemigos — 10 diseños"), src: "sequence/monster-roster", category: "characters", credit: t("Character design", "Diseño de personajes") },
  { id: "hayaku-2", title: t("Hayaku! — frozen ridge", "Hayaku! — cumbre helada"), src: "/images/static/img/Environment/hayaku_2.png", category: "environments", project: "hayaku-island-of-darkness", credit: t("Hayaku! · Steam game", "Hayaku! · juego de Steam") },
  { id: "rat-design", title: t("Rat — character design", "Rata — diseño de personaje"), src: "/characters/RatDesignFinal copy.gif", category: "characters", project: "rat-character-world-mockup", credit: t("Character animation", "Animación de personaje"), focus: { x: 86, y: 86, zoom: 6 } },
  { id: "wolf", title: t("Wolf — base design", "Lobo — diseño base"), src: "/characters/BaseWolf.gif", category: "characters", focus: { x: 80, y: 78, zoom: 5 } },
  { id: "bouncer", title: t("Bouncer — enemy", "Bouncer — enemigo"), src: "/characters/Bouncer.gif", category: "characters", focus: { x: 86, y: 57, zoom: 5 } },
  { id: "western", title: t("Western scene", "Escena western"), src: mockup("WesternMockup.png"), category: "mockups", project: "western-world-environment-art", credit: t("Environment art", "Arte de escenario") },
  { id: "hollowhorn", title: t("Hollowhorn Shaman"), src: "/characters/Hollowhorn Shaman.gif", category: "characters" },
  { id: "orc", title: t("Orc gunner — run & shoot", "Orco artillero — correr y disparar"), src: "/characters/orc_enemy copy.gif", category: "characters", focus: { x: 92, y: 66, zoom: 5 } },
  { id: "tinygolf-cast", title: t("Tiny Golf — cast", "Tiny Golf — elenco"), src: pixel("tinygolf", "img_4.png"), category: "characters", project: "tiny-golf-game-art", fit: "contain", bg: "#4aae28" },
  { id: "asia", title: t("Pagoda in the mist", "Pagoda entre la niebla"), src: "/images/static/img/Environment/Asia_Background.png", category: "environments" },
  { id: "paladinko", title: t("Paladinko — gameplay", "Paladinko — gameplay"), src: mockup("PALADINKO MOCKUP.png"), category: "mockups", project: "paladinko-game-art-mockup", fit: "contain" },
  { id: "bamboo", title: t("Bamboo forest", "Bosque de bambú"), src: "/images/static/img/Environment/BambooForest.png", category: "environments" },
  { id: "judge", title: t("Judge"), src: "/characters/Judge.gif", category: "characters", focus: { x: 88, y: 63, zoom: 6 } },
  { id: "goblin", title: t("Goblin spearman", "Goblin lancero"), src: "/characters/GOBLIN.gif", category: "characters", project: "castle-environment-mockup", focus: { x: 86, y: 84, zoom: 4 } },
  { id: "ufo", title: t("UFO Grab — arcade cabinet", "UFO Grab — máquina arcade"), src: mockup("Mockup-UFOGRAB copy.png"), category: "mockups", project: "ufo-grab-arcade-game-mockup" },
  { id: "nova-beach", title: t("Nova beach market", "Mercado de Nova Beach"), src: "/images/static/img/Environment/Nova_Beach_Background.png", category: "environments" },
  { id: "platform-goblin", title: t("Platform Goblin level", "Nivel Platform Goblin"), src: mockup("PLATFORM GOBLIN.png"), category: "mockups", project: "platform-goblin-game-world" },
  { id: "enemy-b", title: t("Enemy B — crawler", "Enemigo B — reptante"), src: "/characters/EnemyB.gif", category: "characters", focus: { x: 91, y: 66, zoom: 5 } },
  { id: "warrior", title: t("Warrior — sword swing", "Guerrero — ataque"), src: pixel("warrior", "img_0.gif"), category: "characters" },
  { id: "gunner-design", title: t("Gunner — character design", "Artillero — diseño de personaje"), src: "/characters/Design Character v3.gif", category: "characters", focus: { x: 94, y: 72, zoom: 5 } },
  { id: "topdown-hero", title: t("Top-down hero — run cycle", "Héroe cenital — carrera"), src: "/characters/CharacterAnims 0BACKUP copy.gif", category: "characters", focus: { x: 88, y: 62, zoom: 6 } },
  { id: "enemy-c", title: t("Enemy C — beetle", "Enemigo C — escarabajo"), src: "/characters/EnemyC.gif", category: "characters", focus: { x: 94, y: 62, zoom: 5 } },
  { id: "swordswoman", title: t("Swordswoman — platformer scene", "Espadachina — escena de plataformas"), src: "/characters/Player_backup_1 copy.gif", category: "characters", focus: { x: 88, y: 65, zoom: 5 } },
  { id: "haaland", title: t("Haaland — base design", "Haaland — diseño base"), src: "/characters/HAALAN_BASE.png", category: "characters", fit: "contain", zoom: 2, align: "right" },
  { id: "challenge", title: t("Sky fortress", "Fortaleza en el cielo"), src: "/images/static/img/Environment/Challenge_Background.png", category: "environments" },
  { id: "parallax-forest", title: t("Bamboo forest — parallax", "Bosque de bambú — parallax"), src: "/images/static/img/Environment/pixel-parallax-full-horizontal-1x (3).gif", category: "environments" },
  { id: "esecorte-crew", title: t("Crew portrait", "Retrato de grupo"), src: pixel("esecorte", "main.png"), category: "illustration", wide: true },
  { id: "sketch", title: t("Sketch — portrait", "Boceto — retrato"), src: "/images/static/img/Illustrations/BOCETO.png", category: "illustration" },
  { id: "brb-screen", title: t("BRB screen — stream identity", "Pantalla BRB — identidad de stream"), src: "/images/static/img/Illustrations/BRB SCREEN.png", category: "illustration", wide: true },
  { id: "sketch-2", title: t("Sketch — figure under the moon", "Boceto — figura bajo la luna"), src: "/images/static/img/Illustrations/BOCETO 2.png", category: "illustration" },
  { id: "gremlin", title: t("Painterly Gremlin", "Painterly Gremlin"), src: "/images/static/img/Illustrations/Painterly_Gremlin.png", category: "illustration", wide: true },
  { id: "starting-soon", title: t("Stream identity — Starting soon screen", "Identidad de stream — pantalla Starting soon"), src: "/images/static/img/Illustrations/STARTING SOON copy.png", category: "illustration" },
  { id: "tank", title: t("Tank between cones", "Tanque entre conos"), src: pixel("esecorte", "img_6.png"), category: "illustration", wide: true },
  { id: "poster-speakers", title: t("Workshop 2025 — speakers poster", "Workshop 2025 — afiche de expositores"), src: pixel("postersuach", "main.png"), category: "illustration", project: "workshop-poster-series" },
  { id: "monument", title: t("Monument — “¡Venceremos!”", "Monumento — «¡Venceremos!»"), src: pixel("wakeup", "img_2.png"), category: "illustration", wide: true },
  { id: "poster-autumn", title: t("Workshop 2025 — autumn poster", "Workshop 2025 — afiche de otoño"), src: pixel("postersuach", "img_1.png"), category: "illustration", project: "workshop-poster-series" },
  { id: "sneakers", title: t("Sneakers on the wire", "Zapatillas en el cable"), src: pixel("wakeup", "img_8.png"), category: "illustration", wide: true },
  { id: "poster-schedule", title: t("Workshop 2025 — schedule", "Workshop 2025 — cronograma"), src: pixel("postersuach", "img_3.png"), category: "illustration", project: "workshop-poster-series" },
];
