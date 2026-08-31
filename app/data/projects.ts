export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  services: string[];
  width: number;
  height: number;
};

export const projects: Project[] = [
  {
    slug: "celtic-fantasy-world",
    title: "Celtic Fantasy World",
    description: "Top-down game mockup developed as a cohesive fantasy world, balancing terrain readability, character scale and classic adventure atmosphere.",
    image: "/images/static/img/Mockups/CELTIC - ZELDA LIKE.png",
    services: ["Pixel Art", "Game Art"],
    width: 960,
    height: 720,
  },
  {
    slug: "castle-environment-mockup",
    title: "Castle Environment Mockup",
    description: "Modular castle environment designed with layered depth and a focused palette for clear, production-ready world building.",
    image: "/images/static/img/Mockups/Castle_Mockup.png",
    services: ["Pixel Art", "Environment Art"],
    width: 1202,
    height: 902,
  },
  {
    slug: "ufo-grab-arcade-game-mockup",
    title: "UFO Grab: Arcade Game Mockup",
    description: "Arcade game mockup built around fast target readability, bold silhouettes and a centered composition.",
    image: "/images/static/img/Mockups/Mockup-UFOGRAB copy.png",
    services: ["Pixel Art", "Game Art"],
    width: 675,
    height: 1200,
  },
  {
    slug: "nuclear-dome-sci-fi-world",
    title: "Nuclear Dome: Sci-Fi World",
    description: "Large-scale sci-fi environment shaped by industrial structures, side-scrolling readability and color blocks that separate playable spaces.",
    image: "/images/static/img/Mockups/NUCLEAR DOME.png",
    services: ["Pixel Art", "Environment Art"],
    width: 1344,
    height: 756,
  },
  {
    slug: "paladinko-game-art-mockup",
    title: "Paladinko: Game Art Mockup",
    description: "Game art mockup bringing character, UI and environment together as one readable vertical gameplay scene.",
    image: "/images/static/img/Mockups/PALADINKO MOCKUP.png",
    services: ["Pixel Art", "Game Art"],
    width: 1052,
    height: 1680,
  },
  {
    slug: "platform-goblin-game-world",
    title: "Platform Goblin: Game World",
    description: "Side-scrolling world study combining enemies, terrain and background elements with clear gameplay readability.",
    image: "/images/static/img/Mockups/PLATFORM GOBLIN.png",
    services: ["Pixel Art", "Game Art"],
    width: 960,
    height: 720,
  },
  {
    slug: "rat-character-world-mockup",
    title: "Rat: Character & World Mockup",
    description: "Vertical game scene pairing a central character with a dense environment to establish mood, personality and visual direction.",
    image: "/images/static/img/Mockups/RAT copy.png",
    services: ["Pixel Art", "Character Art", "Environment Art"],
    width: 1620,
    height: 2370,
  },
  {
    slug: "western-world-environment-art",
    title: "Western World & Environment Art",
    description: "Panoramic western environment built with a warm palette and confident shapes for immediate scene readability.",
    image: "/images/static/img/Mockups/WesternMockup.png",
    services: ["Pixel Art", "Environment Art"],
    width: 1080,
    height: 720,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
