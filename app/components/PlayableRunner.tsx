"use client";

import { useEffect, useRef, useState } from "react";
import { createRunner, jumpRunner, stepRunner } from "../lib/runner";

type Phase = "ready" | "running" | "paused" | "over";

export function PlayableRunner({ isSpanish }: { isSpanish: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const game = useRef(createRunner());
  const phaseRef = useRef<Phase>("ready");
  const bestRef = useRef(0);
  const [phase, setPhase] = useState<Phase>("ready");
  const [finalScore, setFinalScore] = useState(0);

  const changePhase = (next: Phase) => {
    phaseRef.current = next;
    setPhase(next);
  };

  const play = () => {
    if (phaseRef.current === "ready" || phaseRef.current === "over") game.current = createRunner();
    changePhase("running");
    jumpRunner(game.current);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    const ratSprite = new Image();
    ratSprite.src = "/images/games/rat-runner-sprites.png";
    ctx.imageSmoothingEnabled = false;
    try { bestRef.current = Number(localStorage.getItem("imnotapan-runner-best")) || 0; } catch { /* Storage is optional. */ }
    let frame = 0;
    let previous = 0;
    const pause = () => {
      if (phaseRef.current === "running") {
        phaseRef.current = "paused";
        setPhase("paused");
      }
    };
    const visibility = () => { if (document.hidden) pause(); };
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) pause(); });
    if (canvas) observer.observe(canvas);

    const draw = (time: number) => {
      const dt = previous ? Math.min((time - previous) / 1000, 0.032) : 0;
      previous = time;
      const state = game.current;
      if (phaseRef.current === "running") {
        stepRunner(state, dt);
        if (state.over) {
          const score = Math.floor(state.distance / 10);
          bestRef.current = Math.max(bestRef.current, score);
          try { localStorage.setItem("imnotapan-runner-best", String(bestRef.current)); } catch { /* Play without persistence. */ }
          phaseRef.current = "over";
          setFinalScore(score);
          setPhase("over");
        }
      }
      ctx.clearRect(0, 0, 640, 240);
      ctx.fillStyle = "#d5e0df";
      ctx.fillRect(0, 0, 640, 240);
      // Simple laboratory wall panels, overhead lights and pipes.
      for (let i = 0; i < 5; i++) {
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
      for (let i = 0; i < 4; i++) {
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
      for (let i = 0; i < 12; i++) ctx.fillRect(Math.round(i * 64 - state.distance % 64), 198, 2, 42);
      for (const obstacle of state.obstacles) {
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
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("blur", pause);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  const prompt = phase === "ready"
    ? (isSpanish ? "TOCA PARA JUGAR" : "TAP TO PLAY")
    : phase === "over"
      ? (isSpanish ? "FIN DEL JUEGO · REINTENTAR" : "GAME OVER · TRY AGAIN")
      : (isSpanish ? "PAUSA · CONTINUAR" : "PAUSED · RESUME");

  return (
    <div className="build-preview runner-preview" role="group" aria-label={isSpanish ? "Minijuego de saltar obstáculos" : "Obstacle runner minigame"}>
      <div className="build-preview-topbar">
        <span><i aria-hidden="true" /> {isSpanish ? "BUILD JUGABLE" : "PLAYABLE BUILD"}</span>
        <span>LAB RUN / 01</span>
      </div>
      <button
        type="button"
        className="runner-playfield"
        aria-label={phase === "running" ? (isSpanish ? "Saltar" : "Jump") : prompt}
        aria-describedby="runner-instructions"
        onClick={play}
        onBlur={() => { if (phaseRef.current === "running") changePhase("paused"); }}
        onKeyDown={(event) => {
          if (["Space", "ArrowUp", "Enter"].includes(event.code)) {
            event.preventDefault();
            if (!event.repeat) play();
          }
          if (event.code === "Escape" && phaseRef.current === "running") changePhase("paused");
        }}
      >
        <canvas ref={canvasRef} width={640} height={240} aria-hidden="true" />
        {phase !== "running" && <span className="runner-overlay"><strong>{prompt}</strong><span>{isSpanish ? "ESPACIO / ↑ / TOCAR" : "SPACE / ↑ / TAP"}</span></span>}
      </button>
      <div className="runner-controls" id="runner-instructions">
        <span>{isSpanish ? "ESPACIO / ↑ / TOCAR PARA SALTAR" : "SPACE / ↑ / TAP TO JUMP"}</span>
        <span>{isSpanish ? "ESC: PAUSA" : "ESC: PAUSE"}</span>
      </div>
      <span className="sr-only" role="status">{phase === "over" ? `${isSpanish ? "Puntuación" : "Score"}: ${finalScore}. ${prompt}` : phase === "running" ? (isSpanish ? "Jugando" : "Playing") : prompt}</span>
    </div>
  );
}
