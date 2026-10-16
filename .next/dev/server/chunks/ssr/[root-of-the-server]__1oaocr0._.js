module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/PlayableRunner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlayableRunner",
    ()=>PlayableRunner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$runner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/runner.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function PlayableRunner({ isSpanish }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const game = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$runner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRunner"])());
    const phaseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("ready");
    const bestRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ready");
    const [finalScore, setFinalScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const changePhase = (next)=>{
        phaseRef.current = next;
        setPhase(next);
    };
    const play = ()=>{
        if (phaseRef.current === "ready" || phaseRef.current === "over") game.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$runner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createRunner"])();
        changePhase("running");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$runner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jumpRunner"])(game.current);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!ctx) return;
        const ratSprite = new Image();
        ratSprite.src = "/images/games/rat-runner-sprites.png";
        ctx.imageSmoothingEnabled = false;
        try {
            bestRef.current = Number(localStorage.getItem("imnotapan-runner-best")) || 0;
        } catch  {}
        let frame = 0;
        let previous = 0;
        const pause = ()=>{
            if (phaseRef.current === "running") {
                phaseRef.current = "paused";
                setPhase("paused");
            }
        };
        const visibility = ()=>{
            if (document.hidden) pause();
        };
        const observer = new IntersectionObserver(([entry])=>{
            if (!entry.isIntersecting) pause();
        });
        if (canvas) observer.observe(canvas);
        const draw = (time)=>{
            const dt = previous ? Math.min((time - previous) / 1000, 0.032) : 0;
            previous = time;
            const state = game.current;
            if (phaseRef.current === "running") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$runner$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stepRunner"])(state, dt);
                if (state.over) {
                    const score = Math.floor(state.distance / 10);
                    bestRef.current = Math.max(bestRef.current, score);
                    try {
                        localStorage.setItem("imnotapan-runner-best", String(bestRef.current));
                    } catch  {}
                    phaseRef.current = "over";
                    setFinalScore(score);
                    setPhase("over");
                }
            }
            ctx.clearRect(0, 0, 640, 240);
            ctx.fillStyle = "#d5e0df";
            ctx.fillRect(0, 0, 640, 240);
            // Simple laboratory wall panels, overhead lights and pipes.
            for(let i = 0; i < 5; i++){
                const x = Math.round(((i * 180 - state.distance * 0.12) % 900 + 900) % 900 - 180);
                ctx.fillStyle = "#b8c9c9";
                ctx.fillRect(x, 34, 2, 156);
                ctx.fillStyle = "#a1b5b6";
                ctx.fillRect(x + 35, 40, 92, 5);
                ctx.fillStyle = "#f4fff2";
                ctx.fillRect(x + 39, 45, 84, 6);
            }
            ctx.fillStyle = "#a1b5b6";
            ctx.fillRect(0, 72, 640, 6);
            for(let i = 0; i < 4; i++){
                const x = Math.round(((i * 230 - state.distance * 0.28) % 920 + 920) % 920 - 160);
                // Workbench, monitor and two block-shaped sample containers.
                ctx.fillStyle = "#829a9c";
                ctx.fillRect(x, 143, 110, 8);
                ctx.fillRect(x + 6, 151, 6, 39);
                ctx.fillRect(x + 96, 151, 6, 39);
                ctx.fillStyle = "#526b70";
                ctx.fillRect(x + 10, 103, 40, 30);
                ctx.fillRect(x + 26, 133, 8, 10);
                ctx.fillStyle = "#8de0c2";
                ctx.fillRect(x + 15, 108, 30, 20);
                ctx.fillStyle = "#daf5ec";
                ctx.fillRect(x + 19, 113, 17, 3);
                ctx.fillRect(x + 19, 119, 10, 3);
                ctx.fillStyle = "#eff7f4";
                ctx.fillRect(x + 66, 118, 14, 25);
                ctx.fillRect(x + 87, 124, 14, 19);
                ctx.fillStyle = "#85b8cc";
                ctx.fillRect(x + 69, 130, 8, 10);
                ctx.fillStyle = "#9bc788";
                ctx.fillRect(x + 90, 132, 8, 8);
            }
            ctx.fillStyle = "#6b8084";
            ctx.fillRect(0, 190, 640, 50);
            ctx.fillStyle = "#3b5159";
            ctx.fillRect(0, 190, 640, 7);
            ctx.fillStyle = "#8d9fa1";
            for(let i = 0; i < 12; i++)ctx.fillRect(Math.round(i * 64 - state.distance % 64), 198, 2, 42);
            for (const obstacle of state.obstacles){
                const x = Math.round(obstacle.x);
                ctx.fillStyle = "#344b56";
                ctx.fillRect(x, 190 - obstacle.height, obstacle.width, obstacle.height);
                ctx.fillStyle = "#edb75f";
                ctx.fillRect(x + 3, 190 - obstacle.height + 4, obstacle.width - 6, 6);
                ctx.fillStyle = "#7c9298";
                ctx.fillRect(x + 4, 184, obstacle.width - 8, 3);
            }
            const y = Math.round(146 - state.y);
            const spriteFrame = phaseRef.current === "running" && state.y === 0 ? Math.floor(time / 110) % 6 : 0;
            if (ratSprite.complete && ratSprite.naturalWidth > 0) {
                ctx.drawImage(ratSprite, spriteFrame * 108, 0, 108, 108, 86, y, 44, 44);
            }
            ctx.fillStyle = "#242329";
            ctx.font = "bold 14px monospace";
            ctx.textAlign = "right";
            ctx.fillText(`HI ${String(bestRef.current).padStart(5, "0")}   ${String(Math.floor(state.distance / 10)).padStart(5, "0")}`, 622, 25);
            frame = requestAnimationFrame(draw);
        };
        frame = requestAnimationFrame(draw);
        window.addEventListener("blur", pause);
        document.addEventListener("visibilitychange", visibility);
        return ()=>{
            cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener("blur", pause);
            document.removeEventListener("visibilitychange", visibility);
        };
    }, []);
    const prompt = phase === "ready" ? isSpanish ? "TOCA PARA JUGAR" : "TAP TO PLAY" : phase === "over" ? isSpanish ? "FIN DEL JUEGO · REINTENTAR" : "GAME OVER · TRY AGAIN" : isSpanish ? "PAUSA · CONTINUAR" : "PAUSED · RESUME";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "build-preview runner-preview",
        role: "group",
        "aria-label": isSpanish ? "Minijuego de saltar obstáculos" : "Obstacle runner minigame",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "build-preview-topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/app/components/PlayableRunner.tsx",
                                lineNumber: 146,
                                columnNumber: 15
                            }, this),
                            " ",
                            isSpanish ? "BUILD JUGABLE" : "PLAYABLE BUILD"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PlayableRunner.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "LAB RUN / 01"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PlayableRunner.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PlayableRunner.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "runner-playfield",
                "aria-label": phase === "running" ? isSpanish ? "Saltar" : "Jump" : prompt,
                "aria-describedby": "runner-instructions",
                onClick: play,
                onBlur: ()=>{
                    if (phaseRef.current === "running") changePhase("paused");
                },
                onKeyDown: (event)=>{
                    if ([
                        "Space",
                        "ArrowUp",
                        "Enter"
                    ].includes(event.code)) {
                        event.preventDefault();
                        if (!event.repeat) play();
                    }
                    if (event.code === "Escape" && phaseRef.current === "running") changePhase("paused");
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        width: 640,
                        height: 240,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PlayableRunner.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    phase !== "running" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "runner-overlay",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: prompt
                            }, void 0, false, {
                                fileName: "[project]/app/components/PlayableRunner.tsx",
                                lineNumber: 165,
                                columnNumber: 66
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isSpanish ? "ESPACIO / ↑ / TOCAR" : "SPACE / ↑ / TAP"
                            }, void 0, false, {
                                fileName: "[project]/app/components/PlayableRunner.tsx",
                                lineNumber: 165,
                                columnNumber: 91
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/PlayableRunner.tsx",
                        lineNumber: 165,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PlayableRunner.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "runner-controls",
                id: "runner-instructions",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: isSpanish ? "ESPACIO / ↑ / TOCAR PARA SALTAR" : "SPACE / ↑ / TAP TO JUMP"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PlayableRunner.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: isSpanish ? "ESC: PAUSA" : "ESC: PAUSE"
                    }, void 0, false, {
                        fileName: "[project]/app/components/PlayableRunner.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/PlayableRunner.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                role: "status",
                children: phase === "over" ? `${isSpanish ? "Puntuación" : "Score"}: ${finalScore}. ${prompt}` : phase === "running" ? isSpanish ? "Jugando" : "Playing" : prompt
            }, void 0, false, {
                fileName: "[project]/app/components/PlayableRunner.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/PlayableRunner.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/lib/runner.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRunner",
    ()=>createRunner,
    "jumpRunner",
    ()=>jumpRunner,
    "stepRunner",
    ()=>stepRunner
]);
const createRunner = ()=>({
        y: 0,
        velocity: 0,
        distance: 0,
        spawnIn: 1.5,
        obstacles: [],
        over: false
    });
function jumpRunner(state) {
    if (!state.over && state.y === 0) state.velocity = 570;
}
function stepRunner(state, dt, random = Math.random) {
    if (state.over) return;
    const speed = Math.min(420, 220 + state.distance / 100);
    state.distance += speed * dt;
    state.y = Math.max(0, state.y + state.velocity * dt - 850 * dt * dt);
    state.velocity = state.y > 0 ? state.velocity - 1700 * dt : 0;
    state.spawnIn -= dt;
    if (state.spawnIn <= 0) {
        state.obstacles.push({
            x: 650,
            width: 20 + Math.floor(random() * 12),
            height: 28 + Math.floor(random() * 16)
        });
        state.spawnIn = 1.3 + random() * 0.7;
    }
    for (const obstacle of state.obstacles){
        obstacle.x -= speed * dt;
        // A forgiving body hitbox inside the 44 × 44 rat sprite, excluding its tail.
        if (obstacle.x < 120 && obstacle.x + obstacle.width > 98 && state.y + 5 < obstacle.height) {
            state.over = true;
        }
    }
    state.obstacles = state.obstacles.filter((obstacle)=>obstacle.x + obstacle.width > 0);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1oaocr0._.js.map