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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
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
const mockupImageDimensions = {
    "celtic-fantasy-world": {
        width: 960,
        height: 720
    },
    "castle-environment-mockup": {
        width: 1202,
        height: 902
    },
    "ufo-grab-arcade-game-mockup": {
        width: 675,
        height: 1200
    },
    "nuclear-dome-sci-fi-world": {
        width: 1344,
        height: 756
    },
    "paladinko-game-art-mockup": {
        width: 1052,
        height: 1680
    },
    "platform-goblin-game-world": {
        width: 960,
        height: 720
    },
    "rat-character-world-mockup": {
        width: 1620,
        height: 2370
    },
    "western-world-environment-art": {
        width: 1080,
        height: 720
    }
};
function GalleryImage({ artwork }) {
    _s();
    const [hasLoaded, setHasLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const imageClassName = hasLoaded ? "gallery-image is-loaded" : "gallery-image";
    const onImageReady = ()=>setHasLoaded(true);
    const mockupDimensions = mockupImageDimensions[artwork.id];
    if (mockupDimensions) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: imageClassName,
            src: artwork.src,
            alt: artwork.title,
            width: mockupDimensions.width,
            height: mockupDimensions.height,
            sizes: "(max-width: 700px) calc(100vw - 40px), 18vw",
            quality: 75,
            loading: "lazy",
            decoding: "async",
            onLoad: onImageReady,
            onError: onImageReady
        }, void 0, false, {
            fileName: "[project]/app/PortfolioHome.tsx",
            lineNumber: 460,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: imageClassName,
        src: artwork.src,
        alt: artwork.title,
        fill: true,
        sizes: "(max-width: 700px) calc(100vw - 40px), 18vw",
        quality: 75,
        loading: "lazy",
        decoding: "async",
        onLoad: onImageReady,
        onError: onImageReady
    }, void 0, false, {
        fileName: "[project]/app/PortfolioHome.tsx",
        lineNumber: 477,
        columnNumber: 5
    }, this);
}
_s(GalleryImage, "4oVcghvc1mhDpvSNHU5dauizeEo=");
_c = GalleryImage;
function PortfolioHome() {
    _s1();
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
                                lineNumber: 693,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "site-logo-alias",
                                children: "aka IMNOTAPAN"
                            }, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 694,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 692,
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
                                lineNumber: 704,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 705,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 706,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 696,
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
                                lineNumber: 713,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/about${languageQuery}`,
                                onClick: ()=>setIsMenuOpen(false),
                                children: isSpanish ? "SOBRE MI" : "ABOUT"
                            }, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 716,
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
                                lineNumber: 719,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 708,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 691,
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
                                            lineNumber: 743,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "hero-runner hero-runner-left",
                                            src: "/CharactersRunning/DIMITRIRUNNING.gif",
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 744,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 742,
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
                                            lineNumber: 748,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "hero-logo hero-logo-front",
                                            src: "/images/static/ICON.png",
                                            alt: "IMNOTAPAN"
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 754,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 747,
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
                                            lineNumber: 762,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "hero-runner hero-runner-right",
                                            src: "/CharactersRunning/RATRUNNING.gif",
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 763,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 761,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/PortfolioHome.tsx",
                            lineNumber: 741,
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
                                            lineNumber: 769,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hero-kicker",
                                            children: isSpanish ? "PERSONAJES, MUNDOS Y VISUALES ANIMADOS PARA JUEGOS Y MARCAS." : "CHARACTERS, WORLDS AND ANIMATED VISUALS FOR GAMES & BRANDS."
                                        }, void 0, false, {
                                            fileName: "[project]/app/PortfolioHome.tsx",
                                            lineNumber: 772,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 768,
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
                                                lineNumber: 781,
                                                columnNumber: 78
                                            }, this),
                                            ", mientras sigo abierto a colaborar en nuevos proyectos, juegos y propuestas creativas."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/PortfolioHome.tsx",
                                        lineNumber: 781,
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
                                                lineNumber: 782,
                                                columnNumber: 76
                                            }, this),
                                            ", while staying open to new collaborations across games, projects and creative commissions."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/PortfolioHome.tsx",
                                        lineNumber: 782,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 779,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "hero-cta",
                                    href: "#work",
                                    children: isSpanish ? "VER TRABAJO" : "VIEW WORK"
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 785,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/PortfolioHome.tsx",
                            lineNumber: 767,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/PortfolioHome.tsx",
                    lineNumber: 740,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 739,
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
                        lineNumber: 794,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 792,
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
                                    lineNumber: 879,
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
                                        lineNumber: 885,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 884,
                                    columnNumber: 19
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GalleryImage, {
                                    artwork: artwork
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 905,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gallery-tile-overlay",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 906,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, artwork.id, true, {
                            fileName: "[project]/app/PortfolioHome.tsx",
                            lineNumber: 836,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/PortfolioHome.tsx",
                    lineNumber: 830,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 829,
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
                                    lineNumber: 924,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`,
                                    alt: video.title,
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/app/PortfolioHome.tsx",
                                    lineNumber: 931,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 922,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animation-copy",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: video.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/PortfolioHome.tsx",
                                        lineNumber: 940,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: video.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/PortfolioHome.tsx",
                                        lineNumber: 941,
                                        columnNumber: 17
                                    }, this),
                                    video.meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: video.meta
                                    }, void 0, false, {
                                        fileName: "[project]/app/PortfolioHome.tsx",
                                        lineNumber: 942,
                                        columnNumber: 31
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/PortfolioHome.tsx",
                                lineNumber: 939,
                                columnNumber: 15
                            }, this)
                        ]
                    }, video.id, true, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 916,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 914,
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
                        lineNumber: 951,
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
                        lineNumber: 960,
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
                            lineNumber: 973,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/PortfolioHome.tsx",
                        lineNumber: 972,
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
                        lineNumber: 980,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/PortfolioHome.tsx",
                lineNumber: 950,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/PortfolioHome.tsx",
        lineNumber: 690,
        columnNumber: 5
    }, this);
}
_s1(PortfolioHome, "QFdWWhmRnRpLPUYx4L41UsTcwP4=");
_c1 = PortfolioHome;
var _c, _c1;
__turbopack_context__.k.register(_c, "GalleryImage");
__turbopack_context__.k.register(_c1, "PortfolioHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_PortfolioHome_tsx_0kat9kt._.js.map