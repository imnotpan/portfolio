"use client";

import { useState, type ReactNode } from "react";
import { BattleBackdrop, type BattleVariant } from "./BattleBackdrop";
import { CheckerBackdrop } from "./CheckerBackdrop";

/**
 * Backdrops the visitor can cycle, like swapping the canvas background in
 * Aseprite: the two transparency grids (gently warping), then three EarthBound-style battle fields.
 */
const backdrops = ["checker", "checker-dark", "battle-1", "battle-2", "battle-3"] as const;

/**
 * The intro is an empty editor canvas: a transparency checkerboard with the cast
 * standing on it, framed by a retro window bar.
 */
export function CanvasStage({ file, status, label, children }: { file: string; status: string; label: string; children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const current = backdrops[index];

  return (
    <div className="canvas" data-bg={current}>
      <div className="canvas-bar">
        <span>
          <span className="canvas-dot" aria-hidden="true" />
          {file}
        </span>
        <span className="canvas-status">
          <span className="status-dot" aria-hidden="true" />
          {status}
        </span>
        <button type="button" className="canvas-toggle" onClick={() => setIndex((value) => (value + 1) % backdrops.length)}>
          <span aria-hidden="true">↻</span> BG {index + 1}/{backdrops.length}
          <span className="sr-only">: {label}</span>
        </button>
      </div>
      <div className="canvas-stage">
        {current.startsWith("battle-") ? (
          <BattleBackdrop key={current} variant={Number(current.slice(-1)) as BattleVariant} />
        ) : (
          <CheckerBackdrop key={current} tone={current === "checker-dark" ? "dark" : "light"} />
        )}
        {children}
      </div>
    </div>
  );
}
