(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/PortfolioHome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const filters = [
    "PERSONAJES",
    "MOCKUPS",
    "ENVIRONEMTN",
    "ILLUSTRATION",
    "ANIMATIONS"
];
const filterLabels = {
    TODO: {
        en: "ALL WORK",
        es: "TODO EL TRABAJO"
    },
    PERSONAJES: {
        en: "CHARACTERS",
        es: "PERSONAJES"
    },
    MOCKUPS: {
        en: "GAME MOCKUPS",
        es: "MOCKUPS DE JUEGO"
    },
    ENVIRONEMTN: {
        en: "ENVIRONMENTS",
        es: "ENTORNOS"
    },
    ILLUSTRATION: {
        en: "ILLUSTRATION",
        es: "ILUSTRACION"
    },
    ANIMATIONS: {
        en: "ANIMATION",
        es: "ANIMACION"
    }
};
const highlights = [
    {
        name: "HAYAKU ISLAND OF DARKNESS",
        href: "https://store.steampowered.com/app/2402500/Hayaku_and_the_Island_of_Darkness/"
    },
    {
        name: "CARRERA",
        href: "#work"
    },
    {
        name: "MININA - SPREEN X CARRERA",
        href: "https://www.youtube.com/results?search_query=MININA+SPREEN+X+CARRERA"
    }
];
const animationVideos = [
    {
        id: "youtube-oE2rfyhIsuk",
        title: "CARRE & SPREEN - MININA",
        youtubeId: "oE2rfyhIsuk",
        description: "Pixel art animation and visual production developed for the official music release, combining expressive characters, environments and animated storytelling into a distinctive retro-inspired visual.",
        meta: "26M+ views on YouTube"
    },
    {
        id: "youtube-55e3xPOoa7I",
        title: "MARCIANEKE - ESA NOCHE",
        youtubeId: "55e3xPOoa7I",
        description: "16-bit animated music visual created for Marcianeke, translating the identity and atmosphere of the track into a fully illustrated pixel art world built around characters, environments and animation.",
        meta: "1.3M+ views on YouTube"
    },
    {
        id: "youtube-kpwai908-TY",
        title: "LE'KAYS - ESENCIA",
        youtubeId: "kpwai908-TY",
        description: "Animated pixel art visual developed for Le'Kays, combining character animation, stylized environments and visual storytelling to build a distinctive identity around the music release.",
        meta: "60K+ views on YouTube"
    },
    {
        id: "youtube-8UqTzBiikf0",
        title: "RODI GARRIDO - QUE MIERDA ES ESTO",
        youtubeId: "8UqTzBiikf0",
        description: "Pixel art animated sequence created for the digital film Que Mierda es Esto, bringing its irreverent visual identity into a handcrafted animated intro designed specifically for the production.",
        meta: "Featured across national media including CNN Chile, La Cuarta and AS Chile"
    }
];
const artworks = [
    {
        id: "wolf-character-study",
        title: "Wolf Character Study",
        src: "/characters/BaseWolf.gif",
        category: "PERSONAJES"
    },
    {
        id: "beams-character-animation",
        title: "Beams Character Animation",
        src: "/characters/Beams.gif",
        category: "PERSONAJES"
    },
    {
        id: "boss-character-animation",
        title: "Boss Character Animation",
        src: "/characters/BOSS.gif",
        category: "PERSONAJES"
    },
    {
        id: "bouncer-character-animation",
        title: "Bouncer Character Animation",
        src: "/characters/Bouncer.gif",
        category: "PERSONAJES"
    },
    {
        id: "character-animation-exploration",
        title: "Character Animation Exploration",
        src: "/characters/CharacterAnims 0BACKUP copy.gif",
        category: "PERSONAJES"
    },
    {
        id: "character-design-exploration",
        title: "Character Design Exploration",
        src: "/characters/Design Character v3.gif",
        category: "PERSONAJES"
    },
    {
        id: "enemy-character-design-b",
        title: "Enemy Character Design B",
        src: "/characters/EnemyB.gif",
        category: "PERSONAJES"
    },
    {
        id: "enemy-character-design-c",
        title: "Enemy Character Design C",
        src: "/characters/EnemyC.gif",
        category: "PERSONAJES"
    },
    {
        id: "frog-character-exploration",
        title: "Frog Character Exploration",
        src: "/characters/FROG_EXPLORATION.png",
        category: "PERSONAJES"
    },
    {
        id: "goblin-character-design",
        title: "Goblin Character Design",
        src: "/characters/GOBLIN.gif",
        category: "PERSONAJES"
    },
    {
        id: "haalan-character-design",
        title: "Haalan Character Design",
        src: "/characters/HAALAN_BASE.png",
        category: "PERSONAJES"
    },
    {
        id: "hollowhorn-shaman-design",
        title: "Hollowhorn Shaman Design",
        src: "/characters/Hollowhorn Shaman.gif",
        category: "PERSONAJES"
    },
    {
        id: "judge-character-design",
        title: "Judge Character Design",
        src: "/characters/Judge.gif",
        category: "PERSONAJES"
    },
    {
        id: "knight-character-design",
        title: "Knight Character Design",
        src: "/characters/KNIGHT.gif",
        category: "PERSONAJES"
    },
    {
        id: "creature-design-01",
        title: "Creature Design 01",
        src: "/characters/MonstersStatic1.png",
        category: "PERSONAJES"
    },
    {
        id: "creature-design-02",
        title: "Creature Design 02",
        src: "/characters/MonstersStatic2.png",
        category: "PERSONAJES"
    },
    {
        id: "creature-design-03",
        title: "Creature Design 03",
        src: "/characters/MonstersStatic3.png",
        category: "PERSONAJES"
    },
    {
        id: "creature-design-04",
        title: "Creature Design 04",
        src: "/characters/MonstersStatic4.png",
        category: "PERSONAJES"
    },
    {
        id: "creature-design-05",
        title: "Creature Design 05",
        src: "/characters/MonstersStatic5.png",
        category: "PERSONAJES"
    },
    {
        id: "creature-design-06",
        title: "Creature Design 06",
        src: "/characters/MonstersStatic6.png",
        category: "PERSONAJES"
    },
    {
        id: "creature-design-07",
        title: "Creature Design 07",
        src: "/characters/MonstersStatic7.png",
        category: "PERSONAJES"
    },
    {
        id: "creature-design-08",
        title: "Creature Design 08",
        src: "/characters/MonstersStatic8.png",
        category: "PERSONAJES"
    },
    {
        id: "creature-design-09",
        title: "Creature Design 09",
        src: "/characters/MonstersStatic9.png",
        category: "PERSONAJES"
    },
    {
        id: "creature-design-10",
        title: "Creature Design 10",
        src: "/characters/MonstersStatic10.png",
        category: "PERSONAJES"
    },
    {
        id: "orc-character-design",
        title: "Orc Character Design",
        src: "/characters/orc_enemy copy.gif",
        category: "PERSONAJES"
    },
    {
        id: "paladinko-character-design",
        title: "Paladinko Character Design",
        src: "/characters/PALADINKO MOCKUP copy.png",
        category: "PERSONAJES"
    },
    {
        id: "player-character-animation",
        title: "Player Character Animation",
        src: "/characters/Player_backup_1 copy.gif",
        category: "PERSONAJES"
    },
    {
        id: "rat-character-design",
        title: "Rat Character Design",
        src: "/characters/RatDesignFinal copy.gif",
        category: "PERSONAJES"
    },
    {
        id: "asia-environment-study",
        title: "Asia Environment Study",
        src: "/images/static/img/Environment/Asia_Background.png",
        category: "ENVIRONEMTN"
    },
    {
        id: "bamboo-forest-environment",
        title: "Bamboo Forest Environment",
        src: "/images/static/img/Environment/BambooForest.png",
        category: "ENVIRONEMTN"
    },
    {
        id: "challenge-environment-design",
        title: "Challenge Environment Design",
        src: "/images/static/img/Environment/Challenge_Background.png",
        category: "ENVIRONEMTN"
    },
    {
        id: "hayaku-military-environment",
        title: "Hayaku Military Environment",
        src: "/images/static/img/Environment/hayaku_1.png",
        category: "ENVIRONEMTN"
    },
    {
        id: "hayaku-mountain-environment",
        title: "Hayaku Mountain Environment",
        src: "/images/static/img/Environment/hayaku_2.png",
        category: "ENVIRONEMTN"
    },
    {
        id: "nova-beach-environment",
        title: "Nova Beach Environment",
        src: "/images/static/img/Environment/Nova_Beach_Background.png",
        category: "ENVIRONEMTN"
    },
    {
        id: "modular-parallax-environment",
        title: "Modular Parallax Environment",
        src: "/images/static/img/Environment/pixel-parallax-full-horizontal-1x (3).gif",
        category: "ENVIRONEMTN"
    },
    {
        id: "parallax-world-building-study",
        title: "Parallax World Building Study",
        src: "/images/static/img/Environment/pixel-parallax-pan-right-2x.gif",
        category: "ENVIRONEMTN"
    },
    {
        id: "animated-environment-study",
        title: "Animated Environment Study",
        src: "/images/static/img/Environment/pixel-parallax-pan-right-3x.gif",
        category: "ENVIRONEMTN"
    },
    {
        id: "visual-development-study",
        title: "Visual Development Study",
        src: "/images/static/img/Illustrations/BOCETO.png",
        category: "ILLUSTRATION"
    },
    {
        id: "character-visual-development",
        title: "Character Visual Development",
        src: "/images/static/img/Illustrations/BOCETO 2.png",
        category: "ILLUSTRATION"
    },
    {
        id: "animated-stream-visual-brb",
        title: "Animated Stream Visual: BRB",
        src: "/images/static/img/Illustrations/BRB SCREEN.png",
        category: "ILLUSTRATION"
    },
    {
        id: "game-ui-character-selection",
        title: "Game UI & Character Selection",
        src: "/images/static/img/Illustrations/CharacterSelection.png",
        category: "ILLUSTRATION"
    },
    {
        id: "creature-illustration",
        title: "Creature Illustration",
        src: "/images/static/img/Illustrations/Painterly_Gremlin.png",
        category: "ILLUSTRATION"
    },
    {
        id: "animated-stream-visual-starting-soon",
        title: "Animated Stream Visual: Starting Soon",
        src: "/images/static/img/Illustrations/STARTING SOON copy.png",
        category: "ILLUSTRATION"
    },
    {
        id: "celtic-fantasy-world",
        title: "Celtic Fantasy World",
        src: "/images/static/img/Mockups/CELTIC - ZELDA LIKE.png",
        category: "MOCKUPS",
        description: "Top-down game mockup developed as a cohesive fantasy world, balancing terrain readability, character scale and classic adventure atmosphere.",
        mockupSpan: 30
    },
    {
        id: "castle-environment-mockup",
        title: "Castle Environment Mockup",
        src: "/images/static/img/Mockups/Castle_Mockup.png",
        category: "MOCKUPS",
        description: "Modular castle environment designed with layered depth and a focused palette for clear, production-ready world building.",
        mockupSpan: 30
    },
    {
        id: "ufo-grab-arcade-game-mockup",
        title: "UFO Grab: Arcade Game Mockup",
        src: "/images/static/img/Mockups/Mockup-UFOGRAB copy.png",
        category: "MOCKUPS",
        description: "Arcade game mockup built around fast target readability, bold silhouettes and a centered composition.",
        mockupSpan: 70
    },
    {
        id: "nuclear-dome-sci-fi-world",
        title: "Nuclear Dome: Sci-Fi World",
        src: "/images/static/img/Mockups/NUCLEAR DOME.png",
        category: "MOCKUPS",
        description: "Large-scale sci-fi environment shaped by industrial structures, side-scrolling readability and color blocks that separate playable spaces.",
        mockupSpan: 23
    },
    {
        id: "paladinko-game-art-mockup",
        title: "Paladinko: Game Art Mockup",
        src: "/images/static/img/Mockups/PALADINKO MOCKUP.png",
        category: "MOCKUPS",
        description: "Game art mockup bringing character, UI and environment together as one readable vertical gameplay scene.",
        mockupSpan: 63
    },
    {
        id: "platform-goblin-game-world",
        title: "Platform Goblin: Game World",
        src: "/images/static/img/Mockups/PLATFORM GOBLIN.png",
        category: "MOCKUPS",
        description: "Side-scrolling world study combining enemies, terrain and background elements with clear gameplay readability.",
        mockupSpan: 30
    },
    {
        id: "rat-character-world-mockup",
        title: "Rat: Character & World Mockup",
        src: "/images/static/img/Mockups/RAT copy.png",
        category: "MOCKUPS",
        description: "Vertical game scene pairing a central character with a dense environment to establish mood, personality and visual direction.",
        mockupSpan: 58
    },
    {
        id: "western-world-environment-art",
        title: "Western World & Environment Art",
        src: "/images/static/img/Mockups/WesternMockup.png",
        category: "MOCKUPS",
        description: "Panoramic western environment built with a warm palette and confident shapes for immediate scene readability.",
        mockupSpan: 27
    }
];
const languageStorageKey = "imnotapan-portfolio-language";
const galleryOrderStorageKey = "imnotapan-portfolio-gallery-order";
const galleryHiddenStorageKey = "imnotapan-portfolio-gallery-hidden";
const galleryEditModeStorageKey = "imnotapan-portfolio-gallery-edit-mode";
const defaultOrderIndexMap = Object.fromEntries(artworks.map((artwork, index)=>[
        artwork.id,
        index
    ]));
function PortfolioHome() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("PERSONAJES");
    const [isSpanish, setIsSpanish] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeVideoIds, setActiveVideoIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isEditMode, setIsEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [artworkOrderIndexMap, setArtworkOrderIndexMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOrderIndexMap);
    const [hiddenArtworkIds, setHiddenArtworkIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draggedArtworkId, setDraggedArtworkId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasLoadedGalleryState, setHasLoadedGalleryState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const languageQuery = isSpanish ? "?lang=es" : "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioHome.useEffect": ()=>{
            const languageFromUrl = new URLSearchParams(window.location.search).get("lang");
            const nextLanguage = languageFromUrl === "es" || languageFromUrl === null && localStorage.getItem(languageStorageKey) === "es";
            setIsSpanish(nextLanguage);
            localStorage.setItem(languageStorageKey, nextLanguage ? "es" : "en");
        }
    }["PortfolioHome.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioHome.useEffect": ()=>{
            const savedOrder = localStorage.getItem(galleryOrderStorageKey);
            const savedHidden = localStorage.getItem(galleryHiddenStorageKey);
            const savedEditMode = localStorage.getItem(galleryEditModeStorageKey);
            const allArtworkIds = artworks.map({
                "PortfolioHome.useEffect.allArtworkIds": (artwork)=>artwork.id
            }["PortfolioHome.useEffect.allArtworkIds"]);
            if (savedOrder) {
                try {
                    const parsedOrder = JSON.parse(savedOrder);
                    if (parsedOrder && typeof parsedOrder === "object" && !Array.isArray(parsedOrder)) {
                        const nextOrderIndexMap = {
                            ...defaultOrderIndexMap
                        };
                        for (const [id, value] of Object.entries(parsedOrder)){
                            if (allArtworkIds.includes(id) && typeof value === "number" && Number.isFinite(value)) {
                                nextOrderIndexMap[id] = value;
                            }
                        }
                        setArtworkOrderIndexMap(nextOrderIndexMap);
                    }
                } catch  {
                    localStorage.removeItem(galleryOrderStorageKey);
                }
            }
            if (savedHidden) {
                try {
                    const parsedHidden = JSON.parse(savedHidden);
                    if (Array.isArray(parsedHidden)) {
                        setHiddenArtworkIds(parsedHidden.filter({
                            "PortfolioHome.useEffect": (id)=>typeof id === "string" && allArtworkIds.includes(id)
                        }["PortfolioHome.useEffect"]));
                    }
                } catch  {
                    localStorage.removeItem(galleryHiddenStorageKey);
                }
            }
            setIsEditMode(savedEditMode === "true");
            setHasLoadedGalleryState(true);
        }
    }["PortfolioHome.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioHome.useEffect": ()=>{
            if (!hasLoadedGalleryState) return;
            localStorage.setItem(galleryOrderStorageKey, JSON.stringify(artworkOrderIndexMap));
        }
    }["PortfolioHome.useEffect"], [
        artworkOrderIndexMap,
        hasLoadedGalleryState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioHome.useEffect": ()=>{
            if (!hasLoadedGalleryState) return;
            localStorage.setItem(galleryHiddenStorageKey, JSON.stringify(hiddenArtworkIds));
        }
    }["PortfolioHome.useEffect"], [
        hiddenArtworkIds,
        hasLoadedGalleryState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioHome.useEffect": ()=>{
            if (!hasLoadedGalleryState) return;
            localStorage.setItem(galleryEditModeStorageKey, String(isEditMode));
        }
    }["PortfolioHome.useEffect"], [
        isEditMode,
        hasLoadedGalleryState
    ]);
    const orderedArtworks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortfolioHome.useMemo[orderedArtworks]": ()=>{
            return [
                ...artworks
            ].sort({
                "PortfolioHome.useMemo[orderedArtworks]": (leftArtwork, rightArtwork)=>{
                    const leftIndex = artworkOrderIndexMap[leftArtwork.id] ?? defaultOrderIndexMap[leftArtwork.id] ?? 0;
                    const rightIndex = artworkOrderIndexMap[rightArtwork.id] ?? defaultOrderIndexMap[rightArtwork.id] ?? 0;
                    if (leftIndex === rightIndex) {
                        return (defaultOrderIndexMap[leftArtwork.id] ?? 0) - (defaultOrderIndexMap[rightArtwork.id] ?? 0);
                    }
                    return leftIndex - rightIndex;
                }
            }["PortfolioHome.useMemo[orderedArtworks]"]);
        }
    }["PortfolioHome.useMemo[orderedArtworks]"], [
        artworkOrderIndexMap
    ]);
    const visibleArtworks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortfolioHome.useMemo[visibleArtworks]": ()=>activeFilter === "TODO" ? orderedArtworks.filter({
                "PortfolioHome.useMemo[visibleArtworks]": (artwork)=>!hiddenArtworkIds.includes(artwork.id)
            }["PortfolioHome.useMemo[visibleArtworks]"]) : orderedArtworks.filter({
                "PortfolioHome.useMemo[visibleArtworks]": (artwork)=>artwork.category === activeFilter && !hiddenArtworkIds.includes(artwork.id)
            }["PortfolioHome.useMemo[visibleArtworks]"])
    }["PortfolioHome.useMemo[visibleArtworks]"], [
        activeFilter,
        hiddenArtworkIds,
        orderedArtworks
    ]);
    const hiddenArtworks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PortfolioHome.useMemo[hiddenArtworks]": ()=>orderedArtworks.filter({
                "PortfolioHome.useMemo[hiddenArtworks]": (artwork)=>hiddenArtworkIds.includes(artwork.id)
            }["PortfolioHome.useMemo[hiddenArtworks]"])
    }["PortfolioHome.useMemo[hiddenArtworks]"], [
        hiddenArtworkIds,
        orderedArtworks
    ]);
    const activeArtwork = activeIndex === null ? null : visibleArtworks[activeIndex] ?? null;
    const closeLightbox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioHome.useCallback[closeLightbox]": ()=>{
            setActiveIndex(null);
        }
    }["PortfolioHome.useCallback[closeLightbox]"], []);
    const showPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioHome.useCallback[showPrevious]": ()=>{
            setActiveIndex({
                "PortfolioHome.useCallback[showPrevious]": (index)=>{
                    if (index === null || visibleArtworks.length === 0) return index;
                    return (index - 1 + visibleArtworks.length) % visibleArtworks.length;
                }
            }["PortfolioHome.useCallback[showPrevious]"]);
        }
    }["PortfolioHome.useCallback[showPrevious]"], [
        visibleArtworks.length
    ]);
    const showNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioHome.useCallback[showNext]": ()=>{
            setActiveIndex({
                "PortfolioHome.useCallback[showNext]": (index)=>{
                    if (index === null || visibleArtworks.length === 0) return index;
                    return (index + 1) % visibleArtworks.length;
                }
            }["PortfolioHome.useCallback[showNext]"]);
        }
    }["PortfolioHome.useCallback[showNext]"], [
        visibleArtworks.length
    ]);
    const playVideo = (videoId)=>{
        setActiveVideoIds((currentVideoIds)=>({
                ...currentVideoIds,
                [videoId]: true
            }));
    };
    const reorderVisibleArtworks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioHome.useCallback[reorderVisibleArtworks]": (fromId, toId)=>{
            if (fromId === toId) return;
            setArtworkOrderIndexMap({
                "PortfolioHome.useCallback[reorderVisibleArtworks]": (currentMap)=>{
                    const visibleIds = visibleArtworks.map({
                        "PortfolioHome.useCallback[reorderVisibleArtworks].visibleIds": (artwork)=>artwork.id
                    }["PortfolioHome.useCallback[reorderVisibleArtworks].visibleIds"]);
                    const fromVisibleIndex = visibleIds.indexOf(fromId);
                    const toVisibleIndex = visibleIds.indexOf(toId);
                    if (fromVisibleIndex === -1 || toVisibleIndex === -1) {
                        return currentMap;
                    }
                    const nextVisibleIds = [
                        ...visibleIds
                    ];
                    const [movedId] = nextVisibleIds.splice(fromVisibleIndex, 1);
                    nextVisibleIds.splice(toVisibleIndex, 0, movedId);
                    const nextMap = {
                        ...currentMap
                    };
                    const sortedVisibleIndexes = visibleIds.map({
                        "PortfolioHome.useCallback[reorderVisibleArtworks].sortedVisibleIndexes": (id)=>currentMap[id] ?? defaultOrderIndexMap[id] ?? 0
                    }["PortfolioHome.useCallback[reorderVisibleArtworks].sortedVisibleIndexes"]).sort({
                        "PortfolioHome.useCallback[reorderVisibleArtworks].sortedVisibleIndexes": (left, right)=>left - right
                    }["PortfolioHome.useCallback[reorderVisibleArtworks].sortedVisibleIndexes"]);
                    nextVisibleIds.forEach({
                        "PortfolioHome.useCallback[reorderVisibleArtworks]": (id, index)=>{
                            nextMap[id] = sortedVisibleIndexes[index] ?? index;
                        }
                    }["PortfolioHome.useCallback[reorderVisibleArtworks]"]);
                    return nextMap;
                }
            }["PortfolioHome.useCallback[reorderVisibleArtworks]"]);
        }
    }["PortfolioHome.useCallback[reorderVisibleArtworks]"], [
        visibleArtworks
    ]);
    const hideArtwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioHome.useCallback[hideArtwork]": (artworkId)=>{
            setHiddenArtworkIds({
                "PortfolioHome.useCallback[hideArtwork]": (currentIds)=>currentIds.includes(artworkId) ? currentIds : [
                        ...currentIds,
                        artworkId
                    ]
            }["PortfolioHome.useCallback[hideArtwork]"]);
            setActiveIndex({
                "PortfolioHome.useCallback[hideArtwork]": (currentIndex)=>{
                    if (currentIndex === null) return currentIndex;
                    const currentArtwork = visibleArtworks[currentIndex];
                    return currentArtwork?.id === artworkId ? null : currentIndex;
                }
            }["PortfolioHome.useCallback[hideArtwork]"]);
        }
    }["PortfolioHome.useCallback[hideArtwork]"], [
        visibleArtworks
    ]);
    const restoreArtwork = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PortfolioHome.useCallback[restoreArtwork]": (artworkId)=>{
            setHiddenArtworkIds({
                "PortfolioHome.useCallback[restoreArtwork]": (currentIds)=>currentIds.filter({
                        "PortfolioHome.useCallback[restoreArtwork]": (id)=>id !== artworkId
                    }["PortfolioHome.useCallback[restoreArtwork]"])
            }["PortfolioHome.useCallback[restoreArtwork]"]);
        }
    }["PortfolioHome.useCallback[restoreArtwork]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PortfolioHome.useEffect": ()=>{
            if (activeIndex === null) return;
            const handleKeyDown = {
                "PortfolioHome.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") closeLightbox();
                    if (event.key === "ArrowLeft") showPrevious();
                    if (event.key === "ArrowRight") showNext();
                }
            }["PortfolioHome.useEffect.handleKeyDown"];
            document.body.classList.add("lightbox-open");
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "PortfolioHome.useEffect": ()=>{
                    document.body.classList.remove("lightbox-open");
                    window.removeEventListener("keydown", handleKeyDown);
                }
            })["PortfolioHome.useEffect"];
        }
    }["PortfolioHome.useEffect"], [
        activeIndex,
        closeLightbox,
        showNext,
        showPrevious
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "portfolio-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "site-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "site-logo",
                        href: "/",
                        "aria-label": "Kevin Medina, aka IMNOTAPAN",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "site-logo-name",
                                children: "KEVIN MEDINA"
                            }, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 641,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "site-logo-alias",
                                children: "aka IMNOTAPAN"
                            }, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 642,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "menu-toggle",
                        type: "button",
                        "aria-label": isMenuOpen ? "Close navigation" : "Open navigation",
                        "aria-controls": "main-navigation",
                        "aria-expanded": isMenuOpen,
                        onClick: ()=>setIsMenuOpen((isOpen)=>!isOpen),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 652,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 653,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 654,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        id: "main-navigation",
                        className: `site-nav${isMenuOpen ? " is-open" : ""}`,
                        "aria-label": "Main navigation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#work",
                                "aria-current": "page",
                                onClick: ()=>setIsMenuOpen(false),
                                children: isSpanish ? "TRABAJO" : "WORK"
                            }, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 661,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/about${languageQuery}`,
                                onClick: ()=>setIsMenuOpen(false),
                                children: isSpanish ? "SOBRE MI" : "ABOUT"
                            }, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 664,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "language-toggle",
                                type: "button",
                                "aria-label": "Change language",
                                onClick: ()=>{
                                    const nextLanguage = !isSpanish;
                                    const url = new URL(window.location.href);
                                    url.searchParams.set("lang", nextLanguage ? "es" : "en");
                                    window.history.replaceState(null, "", url);
                                    localStorage.setItem(languageStorageKey, nextLanguage ? "es" : "en");
                                    setIsSpanish(nextLanguage);
                                    setIsMenuOpen(false);
                                },
                                children: "ES / EN"
                            }, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 667,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 656,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "icon-banner",
                "aria-label": "IMNOTAPAN portfolio",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "icon-banner-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-figure-row",
                            "aria-label": "IMNOTAPAN banner characters",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-runner-group hero-runner-group-left",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "hero-runner hero-runner-left",
                                            src: "/CharactersRunning/KNIGHT RUNNING.gif",
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 691,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "hero-runner hero-runner-left",
                                            src: "/CharactersRunning/DIMITRIRUNNING.gif",
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 692,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 690,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-logo-stack",
                                    "aria-label": "IMNOTAPAN",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "hero-logo hero-logo-spin",
                                            src: "/images/static/ICON2.png",
                                            alt: "",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 696,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "hero-logo hero-logo-front",
                                            src: "/images/static/ICON.png",
                                            alt: "IMNOTAPAN"
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 702,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 695,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-runner-group hero-runner-group-right",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "hero-runner hero-runner-right",
                                            src: "/CharactersRunning/WalkCycleBeams.gif",
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 710,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "hero-runner hero-runner-right",
                                            src: "/CharactersRunning/RATRUNNING.gif",
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 711,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 709,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/PortfolioHome.tsx",
                            lineNumber: 689,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-intro",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-title",
                                            children: isSpanish ? "ARTISTA DE PIXEL ART Y ANIMADOR." : "PIXEL ARTIST AND ANIMATOR."
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 717,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-kicker",
                                            children: isSpanish ? "PERSONAJES, MUNDOS Y VISUALES ANIMADOS PARA JUEGOS Y MARCAS." : "CHARACTERS, WORLDS AND ANIMATED VISUALS FOR GAMES & BRANDS."
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 720,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 716,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "hero-description",
                                    children: isSpanish ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "Actualmente trabajo como artista de fondos y tilesets en ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://store.steampowered.com/app/2402500/Hayaku_and_the_Island_of_Darkness/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: "Hayaku! Island of Darkness"
                                            }, void 0, false, {
                                                fileName: "[project]/app/PortfolioHome.tsx",
                                                lineNumber: 729,
                                                columnNumber: 78
                                            }, this),
                                            ", mientras sigo abierto a colaborar en nuevos proyectos, juegos y propuestas creativas."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/PortfolioHome.tsx",
                                        lineNumber: 729,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            "I currently work as a background and tileset artist on ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://store.steampowered.com/app/2402500/Hayaku_and_the_Island_of_Darkness/",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: "Hayaku! Island of Darkness"
                                            }, void 0, false, {
                                                fileName: "[project]/app/PortfolioHome.tsx",
                                                lineNumber: 730,
                                                columnNumber: 76
                                            }, this),
                                            ", while staying open to new collaborations across games, projects and creative commissions."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/PortfolioHome.tsx",
                                        lineNumber: 730,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 727,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "hero-cta",
                                    href: "#work",
                                    children: isSpanish ? "VER TRABAJO" : "VIEW WORK"
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 733,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/PortfolioHome.tsx",
                            lineNumber: 715,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/PortfolioHome.tsx",
                    lineNumber: 688,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 687,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "work",
                className: "portfolio-filters",
                "aria-label": "Work filters",
                children: filters.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "filter-button",
                        type: "button",
                        "aria-pressed": activeFilter === filter,
                        "data-active": activeFilter === filter,
                        onClick: ()=>{
                            setActiveFilter(filter);
                            closeLightbox();
                        },
                        children: filterLabels[filter][isSpanish ? "es" : "en"]
                    }, filter, false, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 742,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 740,
                columnNumber: 7
            }, this),
            false && isEditMode && hiddenArtworks.length > 0 ? "TURBOPACK unreachable" : null,
            activeFilter !== "ANIMATIONS" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: `gallery-grid ${activeFilter === "MOCKUPS" ? "gallery-grid-mockups" : ""}`,
                    "aria-label": "Work gallery",
                    "data-editing": isEditMode,
                    children: visibleArtworks.map((artwork, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `gallery-tile ${artwork.category === "MOCKUPS" ? "gallery-tile-mockup" : ""}`,
                            type: "button",
                            draggable: isEditMode,
                            style: artwork.category === "MOCKUPS" ? {
                                "--mockup-span": artwork.mockupSpan
                            } : undefined,
                            "data-dragging": draggedArtworkId === artwork.id,
                            "aria-label": `Open ${artwork.title}`,
                            onDragStart: (event)=>{
                                if (!isEditMode) return;
                                event.dataTransfer.effectAllowed = "move";
                                event.dataTransfer.setData("text/plain", artwork.id);
                                setDraggedArtworkId(artwork.id);
                            },
                            onDragOver: (event)=>{
                                if (!isEditMode || !draggedArtworkId) return;
                                event.preventDefault();
                                event.dataTransfer.dropEffect = "move";
                            },
                            onDrop: (event)=>{
                                if (!isEditMode) return;
                                event.preventDefault();
                                const fromId = event.dataTransfer.getData("text/plain") || draggedArtworkId;
                                if (fromId) {
                                    reorderVisibleArtworks(fromId, artwork.id);
                                }
                                setDraggedArtworkId(null);
                            },
                            onDragEnd: ()=>{
                                setDraggedArtworkId(null);
                            },
                            onClick: ()=>{
                                if (isEditMode) return;
                                setActiveIndex(index);
                            },
                            children: [
                                isEditMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gallery-tile-handle",
                                    "aria-hidden": "true",
                                    children: "DRAG"
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 827,
                                    columnNumber: 19
                                }, this) : null,
                                isEditMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gallery-tile-delete-wrap",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gallery-tile-delete",
                                        role: "button",
                                        tabIndex: 0,
                                        onClick: (event)=>{
                                            event.stopPropagation();
                                            hideArtwork(artwork.id);
                                        },
                                        onKeyDown: (event)=>{
                                            if (event.key === "Enter" || event.key === " ") {
                                                event.preventDefault();
                                                event.stopPropagation();
                                                hideArtwork(artwork.id);
                                            }
                                        },
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/app/PortfolioHome.tsx",
                                        lineNumber: 833,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 832,
                                    columnNumber: 19
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: artwork.src,
                                    alt: artwork.title,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 853,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gallery-tile-overlay",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 854,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, artwork.id, true, {
                            fileName: "[project]/app/PortfolioHome.tsx",
                            lineNumber: 784,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/PortfolioHome.tsx",
                    lineNumber: 778,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 777,
                columnNumber: 9
            }, this) : null,
            activeFilter === "ANIMATIONS" || activeFilter === "TODO" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "animation-list",
                "aria-label": "Animation reel",
                children: animationVideos.map((video)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "animation-item",
                        type: "button",
                        onClick: ()=>playVideo(video.id),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animation-player",
                                children: activeVideoIds[video.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    src: `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`,
                                    title: video.title,
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                    allowFullScreen: true
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 872,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
                                    alt: video.title,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 879,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 870,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animation-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: video.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/PortfolioHome.tsx",
                                        lineNumber: 888,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: video.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/PortfolioHome.tsx",
                                        lineNumber: 889,
                                        columnNumber: 17
                                    }, this),
                                    video.meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: video.meta
                                    }, void 0, false, {
                                        fileName: "[project]/app/PortfolioHome.tsx",
                                        lineNumber: 890,
                                        columnNumber: 31
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 887,
                                columnNumber: 15
                            }, this)
                        ]
                    }, video.id, true, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 864,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 862,
                columnNumber: 9
            }, this) : null,
            activeArtwork ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lightbox",
                role: "dialog",
                "aria-modal": "true",
                onClick: closeLightbox,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lightbox-close",
                        type: "button",
                        "aria-label": "Close image viewer",
                        onClick: closeLightbox,
                        children: "X"
                    }, void 0, false, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 899,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lightbox-arrow lightbox-arrow-left",
                        type: "button",
                        "aria-label": "Previous image",
                        onClick: (event)=>{
                            event.stopPropagation();
                            showPrevious();
                        },
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 908,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lightbox-stage",
                        onClick: (event)=>event.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "lightbox-image",
                            src: activeArtwork.src,
                            alt: activeArtwork.title
                        }, void 0, false, {
                            fileName: "[project]/app/PortfolioHome.tsx",
                            lineNumber: 921,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 920,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lightbox-arrow lightbox-arrow-right",
                        type: "button",
                        "aria-label": "Next image",
                        onClick: (event)=>{
                            event.stopPropagation();
                            showNext();
                        },
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 928,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 898,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/PortfolioHome.tsx",
        lineNumber: 638,
        columnNumber: 5
    }, this);
}
_s(PortfolioHome, "QFdWWhmRnRpLPUYx4L41UsTcwP4=");
_c = PortfolioHome;
var _c;
__turbopack_context__.k.register(_c, "PortfolioHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent = 'none') {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes, prefetchIntent);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const prefetchIntent = prefetchProp === false ? 'none' : prefetchProp === true ? 'full' : 'auto';
    const fetchStrategy = prefetchIntent !== 'none' ? getFetchStrategyFromPrefetchIntent(prefetchIntent) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true,
            transitionTypes: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else if (key === 'transitionTypes') {
                if (props[key] != null && !Array.isArray(props[key])) {
                    throw createPropError({
                        key,
                        expected: '`string[]`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time truthy", 1) {
        const { warnOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
        if (props.locale) {
            warnOnce('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof resolvedHref === 'string') {
                href = resolvedHref;
            } else if (typeof resolvedHref === 'object' && typeof resolvedHref.pathname === 'string') {
                href = resolvedHref.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${formattedHref}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${formattedHref}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Capture the Owner Stack during render so dev-only warnings emitted later
    // at navigation time can be associated with the JSX that created
    // this <Link>.
    const ownerStack = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus, ownerStack);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus,
        ownerStack
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            const { errorOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
            errorOnce('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchIntent(prefetchIntent) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchIntent === 'auto' ? _types.FetchStrategy.PPR : _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
}
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>{
    // Fast path: an absolute URL must start with a letter (the scheme).
    // Check for a-z and A-Z without the cost of the regex.
    const c = url.charCodeAt(0);
    const isLetter = c >= 65 /* A */  && c <= 90 || c >= 97 /* a */  && c <= 122;
    /* z */ if (!isLetter) {
        return false;
    }
    return ABSOLUTE_URL_REGEX.test(url);
};
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E1035",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
}
}),
]);

//# sourceMappingURL=_0gmort9._.js.map