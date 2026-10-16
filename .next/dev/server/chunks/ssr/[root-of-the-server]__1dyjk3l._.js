module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/BattleBackdrop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BattleBackdrop",
    ()=>BattleBackdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * EarthBound-style battle backgrounds: a field of colour bands warped per
 * scanline, dithered between neighbouring palette entries, with the palette
 * slowly rotating. Drawn on a tiny canvas where 1 art pixel = CELL css pixels.
 */ const palettes = {
    // Deep purples into hot magenta.
    1: [
        "#2b1045",
        "#431463",
        "#6d1c7a",
        "#9a2a82",
        "#c13f86",
        "#9a2a82",
        "#6d1c7a",
        "#431463"
    ],
    // Teal waves.
    2: [
        "#0b2a3b",
        "#0e4452",
        "#126363",
        "#188a6b",
        "#2fae73",
        "#188a6b",
        "#126363",
        "#0e4452"
    ],
    // Rust and gold.
    3: [
        "#3a1114",
        "#5d1a1a",
        "#8c2a1b",
        "#bb4b1c",
        "#e0801f",
        "#bb4b1c",
        "#8c2a1b",
        "#5d1a1a"
    ]
};
/** Each field returns a position along the palette ring for one pixel. */ const fields = {
    // Twisting rings that breathe out from the centre.
    1: (x, y, w, h, t)=>{
        const dx = x - w / 2;
        const dy = (y - h / 2) * 1.7;
        return Math.hypot(dx, dy) * 0.1 + Math.sin(Math.atan2(dy, dx) * 4 + t * 0.9) * 1.1 - t * 1.4;
    },
    // Bands that wobble sideways scanline by scanline, the classic wobble.
    2: (x, y, _w, _h, t)=>{
        const wobble = Math.sin(y * 0.24 + t * 2.4) * 3.5 + Math.sin(y * 0.07 - t) * 6;
        return (x + wobble) * 0.05 + Math.sin(y * 0.05 + t * 0.7) * 1.4 + t * 0.9;
    },
    // Warped lattice, a lava-lamp plasma.
    3: (x, y, _w, _h, t)=>{
        const u = x + Math.sin(y * 0.13 + t * 1.4) * 5;
        const v = y + Math.cos(x * 0.11 + t * 1.1) * 5;
        return (Math.sin(u * 0.13) + Math.sin(v * 0.19) + Math.sin((u + v) * 0.07 + t)) * 1.6 + t * 0.6 + 4;
    }
};
const bayer = [
    [
        0,
        8,
        2,
        10
    ],
    [
        12,
        4,
        14,
        6
    ],
    [
        3,
        11,
        1,
        9
    ],
    [
        15,
        7,
        13,
        5
    ]
].map((row)=>row.map((value)=>(value + 0.5) / 16));
const FPS = 15;
function packed(hex) {
    const [r, g, b] = [
        1,
        3,
        5
    ].map((i)=>parseInt(hex.slice(i, i + 2), 16));
    // Little-endian ABGR for a Uint32Array view over RGBA bytes.
    return (255 << 24 | b << 16 | g << 8 | r) >>> 0;
}
function BattleBackdrop({ variant }) {
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const host = wrap.current;
        const surface = canvas.current;
        const context = surface?.getContext("2d");
        if (!host || !surface || !context) return;
        const colors = palettes[variant].map(packed);
        const field = fields[variant];
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let image = context.createImageData(1, 1);
        let pixels = new Uint32Array(image.data.buffer);
        let w = 1;
        let h = 1;
        let frame = 0;
        let last = 0;
        let visible = true;
        const resize = ()=>{
            const cell = host.clientWidth < 640 ? 3 : 4;
            w = Math.max(1, Math.ceil(host.clientWidth / cell));
            h = Math.max(1, Math.ceil(host.clientHeight / cell));
            surface.width = w;
            surface.height = h;
            // Whole css pixels per art pixel; the host crops the overhang.
            surface.style.width = `${w * cell}px`;
            surface.style.height = `${h * cell}px`;
            image = context.createImageData(w, h);
            pixels = new Uint32Array(image.data.buffer);
            draw(performance.now());
        };
        const draw = (now)=>{
            const t = now / 1000;
            const n = colors.length;
            for(let y = 0; y < h; y++){
                const row = bayer[y & 3];
                for(let x = 0; x < w; x++){
                    const value = field(x, y, w, h, t);
                    const base = Math.floor(value);
                    const step = value - base > row[x & 3] ? 1 : 0;
                    pixels[y * w + x] = colors[((base + step) % n + n) % n];
                }
            }
            context.putImageData(image, 0, 0);
        };
        const loop = (now)=>{
            frame = requestAnimationFrame(loop);
            if (!visible || document.hidden || now - last < 1000 / FPS) return;
            last = now;
            draw(now);
        };
        resize();
        const observer = new ResizeObserver(resize);
        observer.observe(host);
        const watcher = new IntersectionObserver(([entry])=>{
            visible = entry.isIntersecting;
        });
        watcher.observe(host);
        if (!reduced) frame = requestAnimationFrame(loop);
        return ()=>{
            cancelAnimationFrame(frame);
            observer.disconnect();
            watcher.disconnect();
        };
    }, [
        variant
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrap,
        className: "battle",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvas
        }, void 0, false, {
            fileName: "[project]/app/components/BattleBackdrop.tsx",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/BattleBackdrop.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/CanvasStage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasStage",
    ()=>CanvasStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$BattleBackdrop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/BattleBackdrop.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CheckerBackdrop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/CheckerBackdrop.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/**
 * Backdrops the visitor can cycle, like swapping the canvas background in
 * Aseprite: the two transparency grids (gently warping), then three EarthBound-style battle fields.
 */ const backdrops = [
    "checker",
    "checker-dark",
    "battle-1",
    "battle-2",
    "battle-3"
];
function CanvasStage({ file, status, label, children }) {
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const current = backdrops[index];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "canvas",
        "data-bg": current,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "canvas-bar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "canvas-dot",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CanvasStage.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            file
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CanvasStage.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "canvas-status",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "status-dot",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CanvasStage.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            status
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CanvasStage.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "canvas-toggle",
                        onClick: ()=>setIndex((value)=>(value + 1) % backdrops.length),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "↻"
                            }, void 0, false, {
                                fileName: "[project]/app/components/CanvasStage.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            " BG ",
                            index + 1,
                            "/",
                            backdrops.length,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: [
                                    ": ",
                                    label
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/CanvasStage.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/CanvasStage.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CanvasStage.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "canvas-stage",
                children: [
                    current.startsWith("battle-") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$BattleBackdrop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BattleBackdrop"], {
                        variant: Number(current.slice(-1))
                    }, current, false, {
                        fileName: "[project]/app/components/CanvasStage.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$CheckerBackdrop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckerBackdrop"], {
                        tone: current === "checker-dark" ? "dark" : "light"
                    }, current, false, {
                        fileName: "[project]/app/components/CanvasStage.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/CanvasStage.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/CanvasStage.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/CheckerBackdrop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckerBackdrop",
    ()=>CheckerBackdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * The transparency checkerboard itself, drifting and warping like an
 * EarthBound battle field: each scanline sways sideways, each column bobs,
 * and a faint iridescent tint washes through the squares. No overlay: the
 * grid is the only thing drawn. 1 art pixel = cell / CHECK css pixels.
 */ const CHECK = 8; // art pixels per checker square
const FPS = 20;
/** Faint tints the squares lean towards, slowly trading places. */ const tints = {
    light: [
        "#f4d6e4",
        "#d6e2f6"
    ],
    dark: [
        "#4a2d55",
        "#25395a"
    ]
};
const bayer = [
    [
        0,
        8,
        2,
        10
    ],
    [
        12,
        4,
        14,
        6
    ],
    [
        3,
        11,
        1,
        9
    ],
    [
        15,
        7,
        13,
        5
    ]
].map((row)=>row.map((value)=>(value + 0.5) / 16));
function rgb(value) {
    const hex = value.trim().replace("#", "");
    return [
        0,
        2,
        4
    ].map((i)=>parseInt(hex.slice(i, i + 2), 16));
}
function pack([r, g, b]) {
    // Little-endian ABGR for a Uint32Array view over RGBA bytes.
    return (255 << 24 | Math.round(b) << 16 | Math.round(g) << 8 | Math.round(r)) >>> 0;
}
const mix = (a, b, k)=>a.map((value, i)=>value + (b[i] - value) * k);
/** Tint strength steps, dithered between so the wash stays pixel-crisp. */ const LEVELS = 4;
const MAX_TINT = 0.55;
function CheckerBackdrop({ tone }) {
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const host = wrap.current;
        const surface = canvas.current;
        const context = surface?.getContext("2d");
        if (!host || !surface || !context) return;
        const style = getComputedStyle(host);
        const base = [
            rgb(style.getPropertyValue("--check-a")),
            rgb(style.getPropertyValue("--check-b"))
        ];
        const [tintA, tintB] = tints[tone].map(rgb);
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // Palette per square colour, tint pair and tint level, rebuilt as the tints trade places.
        let palette = new Uint32Array(2 * (LEVELS + 1));
        const buildPalette = (t)=>{
            const tint = mix(tintA, tintB, 0.5 + 0.5 * Math.sin(t * 0.25));
            palette = new Uint32Array(2 * (LEVELS + 1));
            for(let square = 0; square < 2; square++){
                for(let level = 0; level <= LEVELS; level++){
                    palette[square * (LEVELS + 1) + level] = pack(mix(base[square], tint, level / LEVELS * MAX_TINT));
                }
            }
        };
        let image = context.createImageData(1, 1);
        let pixels = new Uint32Array(image.data.buffer);
        let w = 1;
        let h = 1;
        let frame = 0;
        let last = 0;
        let visible = true;
        const resize = ()=>{
            const cell = parseFloat(style.getPropertyValue("--cell")) || 24;
            const px = cell / CHECK;
            w = Math.max(1, Math.ceil(host.clientWidth / px));
            h = Math.max(1, Math.ceil(host.clientHeight / px));
            surface.width = w;
            surface.height = h;
            surface.style.width = `${w * px}px`;
            surface.style.height = `${h * px}px`;
            image = context.createImageData(w, h);
            pixels = new Uint32Array(image.data.buffer);
            draw(reduced ? 0 : performance.now());
        };
        const draw = (now)=>{
            const t = now / 1000;
            buildPalette(t);
            // Interlaced sway comes and goes, so the grid is calm most of the time.
            const interlace = Math.max(0, Math.sin(t * 0.35)) * 1.6;
            const driftX = t * 3;
            const driftY = t * 1.5;
            const columns = new Float32Array(w);
            for(let x = 0; x < w; x++)columns[x] = Math.sin(x * 0.035 + t * 1.1) * 2.2;
            for(let y = 0; y < h; y++){
                const row = bayer[y & 3];
                const sway = Math.sin(y * 0.05 + t * 1.6) * 3 + Math.sin(y * 0.13 - t * 0.9) * 1.2 + (y & 1 ? interlace : -interlace);
                const u0 = sway + driftX;
                for(let x = 0; x < w; x++){
                    const u = x + u0;
                    const v = y + columns[x] + driftY;
                    const square = Math.floor(u / CHECK) + Math.floor(v / CHECK) & 1;
                    const wash = 0.5 + 0.5 * Math.sin(u * 0.022 + v * 0.031 - t * 0.7);
                    const level = wash * wash * LEVELS;
                    const step = Math.floor(level) + (level - Math.floor(level) > row[x & 3] ? 1 : 0);
                    pixels[y * w + x] = palette[square * (LEVELS + 1) + Math.min(LEVELS, step)];
                }
            }
            context.putImageData(image, 0, 0);
        };
        const loop = (now)=>{
            frame = requestAnimationFrame(loop);
            if (!visible || document.hidden || now - last < 1000 / FPS) return;
            last = now;
            draw(now);
        };
        resize();
        const observer = new ResizeObserver(resize);
        observer.observe(host);
        const watcher = new IntersectionObserver(([entry])=>{
            visible = entry.isIntersecting;
        });
        watcher.observe(host);
        if (!reduced) frame = requestAnimationFrame(loop);
        return ()=>{
            cancelAnimationFrame(frame);
            observer.disconnect();
            watcher.disconnect();
        };
    }, [
        tone
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrap,
        className: "battle",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvas
        }, void 0, false, {
            fileName: "[project]/app/components/CheckerBackdrop.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/CheckerBackdrop.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/CopyEmail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CopyEmail",
    ()=>CopyEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function CopyEmail({ label, copiedLabel }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "button button-ghost",
        onClick: async ()=>{
            try {
                await navigator.clipboard.writeText(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactEmail"]);
                setCopied(true);
                window.setTimeout(()=>setCopied(false), 2000);
            } catch  {
                window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactEmail"]}`;
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-live": "polite",
            children: copied ? copiedLabel : label
        }, void 0, false, {
            fileName: "[project]/app/components/CopyEmail.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/CopyEmail.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/GalleryShell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GalleryShell",
    ()=>GalleryShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Arrow({ flip = false }) {
    // Hand-placed pixel chevron, crisp at any size.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 7 11",
        width: "14",
        height: "22",
        "aria-hidden": "true",
        shapeRendering: "crispEdges",
        style: flip ? {
            transform: "scaleX(-1)"
        } : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M5 0h2v1H5zM4 1h2v1H4zM3 2h2v1H3zM2 3h2v1H2zM1 4h2v1H1zM0 5h2v1H0zM1 6h2v1H1zM2 7h2v1H2zM3 8h2v1H3zM4 9h2v1H4zM5 10h2v1H5z"
        }, void 0, false, {
            fileName: "[project]/app/components/GalleryShell.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/GalleryShell.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
/** Largest whole-number zoom that fits, so every art pixel stays square. */ function useIntegerScale(stage, item) {
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!stage || !item?.pixelated) return;
        const fit = ()=>{
            const style = getComputedStyle(stage);
            const width = stage.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
            const height = stage.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
            const scale = Math.max(1, Math.floor(Math.min(width / item.nativeWidth, height / item.nativeHeight)));
            setSize({
                width: item.nativeWidth * scale,
                height: item.nativeHeight * scale
            });
        };
        const observer = new ResizeObserver(fit);
        observer.observe(stage);
        return ()=>observer.disconnect();
    }, [
        stage,
        item
    ]);
    return item?.pixelated ? size : null;
}
function GalleryShell({ items, filters, labels, children }) {
    // One category at a time: big pieces, no mixed wall of everything.
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(filters[0]?.id ?? "");
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Only step through tiles that are actually on screen.
    const visible = items.filter((item)=>item.category === filter);
    const active = index === null ? null : visible[index];
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const closeButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const zoom = useIntegerScale(stage, active);
    // Restore a shared filter (?f=characters) on load.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const requested = new URLSearchParams(window.location.search).get("f");
        if (!requested || !filters.some((option)=>option.id === requested)) return;
        const frame = requestAnimationFrame(()=>setFilter(requested));
        return ()=>cancelAnimationFrame(frame);
    }, [
        filters
    ]);
    const chooseFilter = (next)=>{
        setFilter(next);
        const url = new URL(window.location.href);
        if (next === filters[0]?.id) url.searchParams.delete("f");
        else url.searchParams.set("f", next);
        window.history.replaceState(null, "", url);
    };
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIndex(null), []);
    const step = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((delta)=>setIndex((current)=>current === null ? current : (current + delta + visible.length) % visible.length), [
        visible.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (index !== null && !dialog.open) {
            dialog.showModal();
            closeButton.current?.focus();
            document.body.classList.add("menu-open");
        }
        if (index === null && dialog.open) dialog.close();
    }, [
        index
    ]);
    // Preload neighbours so stepping never flashes empty.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (index === null) return;
        for (const offset of [
            1,
            -1
        ]){
            const item = visible[(index + offset + visible.length) % visible.length];
            if (item && !item.video) new window.Image().src = item.src;
        }
    }, [
        index,
        visible
    ]);
    const lastId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (active) lastId.current = active.id;
    }, [
        active
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const dialog = dialogRef.current;
        if (!dialog) return;
        const onClose = ()=>{
            document.body.classList.remove("menu-open");
            setIndex(null);
            // Return focus to the tile of the last artwork viewed.
            const tile = document.querySelector(`.tile[data-id="${lastId.current}"]`);
            tile?.focus({
                preventScroll: true
            });
            tile?.scrollIntoView({
                block: "nearest"
            });
        };
        dialog.addEventListener("close", onClose);
        return ()=>dialog.removeEventListener("close", onClose);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (index === null) return;
        const onKey = (event)=>{
            if (event.key === "ArrowRight") step(1);
            if (event.key === "ArrowLeft") step(-1);
        };
        window.addEventListener("keydown", onKey);
        return ()=>window.removeEventListener("keydown", onKey);
    }, [
        index,
        step
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "filter-bar",
                role: "toolbar",
                "aria-label": labels.filter,
                children: filters.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": filter === option.id,
                        onClick: ()=>chooseFilter(option.id),
                        children: option.label
                    }, option.id, false, {
                        fileName: "[project]/app/components/GalleryShell.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/GalleryShell.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery-grid",
                "data-filter": filter,
                onClick: (event)=>{
                    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
                    const tile = event.target.closest("[data-id]");
                    if (!tile) return;
                    event.preventDefault();
                    const position = visible.findIndex((item)=>item.id === tile.dataset.id);
                    if (position >= 0) setIndex(position);
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/app/components/GalleryShell.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: dialogRef,
                className: "lightbox",
                "aria-label": active?.title,
                onClick: (event)=>{
                    if (event.target === event.currentTarget) close();
                },
                onPointerDown: (event)=>{
                    touchStart.current = event.pointerType === "mouse" ? null : event.clientX;
                },
                onPointerUp: (event)=>{
                    if (touchStart.current === null) return;
                    const delta = event.clientX - touchStart.current;
                    touchStart.current = null;
                    if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1);
                },
                children: active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lightbox-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lightbox-stage",
                            ref: setStage,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lightbox-frame",
                                style: {
                                    background: active.bg
                                },
                                children: active.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    className: active.pixelated ? "is-pixelated" : undefined,
                                    style: zoom ?? undefined,
                                    poster: active.poster,
                                    width: active.width,
                                    height: active.height,
                                    autoPlay: true,
                                    muted: true,
                                    loop: true,
                                    playsInline: true,
                                    "aria-label": active.title,
                                    children: [
                                        active.webm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            src: active.webm,
                                            type: "video/webm"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/GalleryShell.tsx",
                                            lineNumber: 196,
                                            columnNumber: 36
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            src: active.src,
                                            type: "video/mp4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/GalleryShell.tsx",
                                            lineNumber: 197,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/GalleryShell.tsx",
                                    lineNumber: 195,
                                    columnNumber: 19
                                }, this) : // eslint-disable-next-line @next/next/no-img-element
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: active.pixelated ? "is-pixelated" : undefined,
                                    style: zoom ?? undefined,
                                    src: active.src,
                                    alt: active.title,
                                    width: active.width,
                                    height: active.height
                                }, void 0, false, {
                                    fileName: "[project]/app/components/GalleryShell.tsx",
                                    lineNumber: 201,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/GalleryShell.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this)
                        }, active.id, false, {
                            fileName: "[project]/app/components/GalleryShell.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lightbox-bar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "lightbox-count",
                                            children: [
                                                String((index ?? 0) + 1).padStart(2, "0"),
                                                " ",
                                                labels.of,
                                                " ",
                                                String(visible.length).padStart(2, "0")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/GalleryShell.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: active.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/GalleryShell.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "lightbox-cat",
                                            children: active.categoryLabel
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/GalleryShell.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this),
                                        active.specs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "lightbox-specs",
                                            children: active.specs
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/GalleryShell.tsx",
                                            lineNumber: 212,
                                            columnNumber: 33
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/GalleryShell.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this),
                                active.caseHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "button button-small",
                                    href: active.caseHref,
                                    children: [
                                        labels.caseStudy,
                                        " →"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/GalleryShell.tsx",
                                    lineNumber: 215,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/GalleryShell.tsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "lightbox-nav lightbox-prev",
                            type: "button",
                            onClick: ()=>step(-1),
                            "aria-label": labels.previous,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {}, void 0, false, {
                                fileName: "[project]/app/components/GalleryShell.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/GalleryShell.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "lightbox-nav lightbox-next",
                            type: "button",
                            onClick: ()=>step(1),
                            "aria-label": labels.next,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                                flip: true
                            }, void 0, false, {
                                fileName: "[project]/app/components/GalleryShell.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/GalleryShell.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: closeButton,
                            className: "lightbox-close",
                            type: "button",
                            onClick: close,
                            "aria-label": labels.close,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/app/components/GalleryShell.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/GalleryShell.tsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/app/components/GalleryShell.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/GalleryShell.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/LoopVideo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoopVideo",
    ()=>LoopVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function LoopVideo({ mp4, webm, poster, label, width, height, className, eager = false }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = ref.current;
        if (!video) return;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let loaded = false;
        // The hero clip waits until the page has loaded so it never competes with
        // fonts, scripts or the poster (the LCP candidate) for bandwidth.
        let ready = !eager || document.readyState === "complete";
        let visible = false;
        const start = ()=>{
            if (reduceMotion.matches || !ready || !visible) return;
            if (!loaded) {
                loaded = true;
                video.preload = "auto";
            }
            void video.play().catch(()=>{
            // Autoplay can be blocked; the poster stays visible.
            });
        };
        const onLoad = ()=>{
            window.setTimeout(()=>{
                ready = true;
                start();
            }, 600);
        };
        if (!ready) window.addEventListener("load", onLoad, {
            once: true
        });
        const observer = new IntersectionObserver(([entry])=>{
            visible = entry.isIntersecting;
            if (visible) start();
            else if (!video.paused) video.pause();
        }, {
            rootMargin: eager ? "0px" : "200px"
        });
        observer.observe(video);
        return ()=>{
            observer.disconnect();
            window.removeEventListener("load", onLoad);
        };
    }, [
        eager
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
        ref: ref,
        className: className,
        "aria-label": label,
        width: width,
        height: height,
        poster: poster,
        muted: true,
        loop: true,
        playsInline: true,
        disablePictureInPicture: true,
        preload: "none",
        children: [
            webm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                src: webm,
                type: "video/webm"
            }, void 0, false, {
                fileName: "[project]/app/components/LoopVideo.tsx",
                lineNumber: 80,
                columnNumber: 15
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                src: mp4,
                type: "video/mp4"
            }, void 0, false, {
                fileName: "[project]/app/components/LoopVideo.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/LoopVideo.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/VideoFacade.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoFacade",
    ()=>VideoFacade
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function VideoFacade({ id, title, playLabel, image, eager = false }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "video-facade",
        children: active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
            title: title,
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: true
        }, void 0, false, {
            fileName: "[project]/app/components/VideoFacade.tsx",
            lineNumber: 21,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: ()=>setActive(true),
            "aria-label": `${playLabel}: ${title}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: image.thumb,
                    srcSet: `${image.thumb} 800w, ${image.src} 1280w`,
                    sizes: eager ? "(max-width: 760px) 100vw, 1100px" : "(max-width: 760px) 100vw, 640px",
                    alt: "",
                    width: 1280,
                    height: 720,
                    loading: eager ? "eager" : "lazy",
                    fetchPriority: eager ? "high" : undefined,
                    decoding: "async"
                }, void 0, false, {
                    fileName: "[project]/app/components/VideoFacade.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "play-icon",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/app/components/VideoFacade.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/VideoFacade.tsx",
            lineNumber: 28,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/VideoFacade.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/lib/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "absoluteUrl",
    ()=>absoluteUrl,
    "artistName",
    ()=>artistName,
    "defaultOgImage",
    ()=>defaultOgImage,
    "localizedAlternates",
    ()=>localizedAlternates,
    "siteName",
    ()=>siteName,
    "siteUrl",
    ()=>siteUrl,
    "socialProfiles",
    ()=>socialProfiles
]);
const siteUrl = "https://www.imnotapan.com";
const siteName = "IMNOTAPAN";
const artistName = "Kevin Medina";
const defaultOgImage = "/ICON%20LANDING.png";
const socialProfiles = [
    "https://www.instagram.com/imnotapan/",
    "https://twitter.com/imnotapan/"
];
function absoluteUrl(path = "/") {
    return new URL(path, siteUrl).toString();
}
function localizedAlternates(path, spanishPath, canonical = path) {
    return {
        canonical,
        languages: {
            en: path,
            es: spanishPath,
            "x-default": path
        }
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1dyjk3l._.js.map