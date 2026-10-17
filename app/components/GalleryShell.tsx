"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type LightboxItem = {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  src: string;
  webm?: string;
  poster?: string;
  video?: boolean;
  width: number;
  height: number;
  nativeWidth: number;
  nativeHeight: number;
  pixelated: boolean;
  bg?: string;
  specs?: string;
  caseHref?: string;
};

type GalleryShellProps = {
  items: LightboxItem[];
  filters: { id: string; label: string }[];
  labels: { filter: string; caseStudy: string; close: string; previous: string; next: string; of: string };
  children: ReactNode;
};

function Arrow({ flip = false }: { flip?: boolean }) {
  // Hand-placed pixel chevron, crisp at any size.
  return (
    <svg viewBox="0 0 7 11" width="14" height="22" aria-hidden="true" shapeRendering="crispEdges" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path fill="currentColor" d="M5 0h2v1H5zM4 1h2v1H4zM3 2h2v1H3zM2 3h2v1H2zM1 4h2v1H1zM0 5h2v1H0zM1 6h2v1H1zM2 7h2v1H2zM3 8h2v1H3zM4 9h2v1H4zM5 10h2v1H5z" />
    </svg>
  );
}

/** Largest whole-number zoom that fits, so every art pixel stays square. */
function useIntegerScale(stage: HTMLElement | null, item: LightboxItem | null) {
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (!stage || !item?.pixelated) return;
    const fit = () => {
      const style = getComputedStyle(stage);
      const width = stage.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      const height = stage.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
      const scale = Math.max(1, Math.floor(Math.min(width / item.nativeWidth, height / item.nativeHeight)));
      setSize({ width: item.nativeWidth * scale, height: item.nativeHeight * scale });
    };
    const observer = new ResizeObserver(fit);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [stage, item]);

  return item?.pixelated ? size : null;
}

export function GalleryShell({ items, filters, labels, children }: GalleryShellProps) {
  // One category at a time: big pieces, no mixed wall of everything.
  const [filter, setFilter] = useState(filters[0]?.id ?? "");
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<number | null>(null);

  // Only step through tiles that are actually on screen.
  const visible = items.filter((item) => item.category === filter);
  const active = index === null ? null : visible[index];
  const [stage, setStage] = useState<HTMLDivElement | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const zoom = useIntegerScale(stage, active);

  // Restore a shared filter (?f=characters) on load.
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("f");
    if (!requested || !filters.some((option) => option.id === requested)) return;
    const frame = requestAnimationFrame(() => setFilter(requested));
    return () => cancelAnimationFrame(frame);
  }, [filters]);

  const chooseFilter = (next: string) => {
    setFilter(next);
    const url = new URL(window.location.href);
    if (next === filters[0]?.id) url.searchParams.delete("f");
    else url.searchParams.set("f", next);
    window.history.replaceState(null, "", url);
  };

  // Tiles of other categories sit hidden with lazy images; mobile browsers can leave them blank
  // when a tab is revealed, so fetch the shown ones right away and retry any that fail once.
  useEffect(() => {
    for (const image of document.querySelectorAll<HTMLImageElement>(".tile img")) {
      if (image.loading === "lazy" && image.getClientRects().length > 0) image.loading = "eager";
    }
  }, [filter]);

  useEffect(() => {
    const retry = (event: Event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement) || image.dataset.retried) return;
      image.dataset.retried = "1";
      const url = image.currentSrc || image.src;
      window.setTimeout(() => {
        image.srcset = "";
        image.src = `${url}${url.includes("?") ? "&" : "?"}r=${Date.now()}`;
      }, 1200);
    };
    document.addEventListener("error", retry, true);
    return () => document.removeEventListener("error", retry, true);
  }, []);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta: number) => setIndex((current) => (current === null ? current : (current + delta + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) {
      dialog.showModal();
      closeButton.current?.focus();
      document.body.classList.add("menu-open");
    }
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  // Preload neighbours so stepping never flashes empty.
  useEffect(() => {
    if (index === null) return;
    for (const offset of [1, -1]) {
      const item = visible[(index + offset + visible.length) % visible.length];
      if (item && !item.video) new window.Image().src = item.src;
    }
  }, [index, visible]);

  const lastId = useRef<string | null>(null);
  useEffect(() => {
    if (active) lastId.current = active.id;
  }, [active]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      document.body.classList.remove("menu-open");
      setIndex(null);
      // Return focus to the tile of the last artwork viewed.
      const tile = document.querySelector<HTMLElement>(`.tile[data-id="${lastId.current}"]`);
      tile?.focus({ preventScroll: true });
      tile?.scrollIntoView({ block: "nearest" });
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  return (
    <>
      <div className="filter-bar" role="toolbar" aria-label={labels.filter}>
        {filters.map((option) => (
          <button key={option.id} type="button" aria-pressed={filter === option.id} onClick={() => chooseFilter(option.id)}>
            {option.label}
          </button>
        ))}
      </div>

      <div
        className="gallery-grid"
        data-filter={filter}
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
          const tile = (event.target as HTMLElement).closest<HTMLElement>("[data-id]");
          if (!tile) return;
          event.preventDefault();
          const position = visible.findIndex((item) => item.id === tile.dataset.id);
          if (position >= 0) setIndex(position);
        }}
      >
        {children}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={active?.title}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onPointerDown={(event) => {
          touchStart.current = event.pointerType === "mouse" ? null : event.clientX;
        }}
        onPointerUp={(event) => {
          if (touchStart.current === null) return;
          const delta = event.clientX - touchStart.current;
          touchStart.current = null;
          if (Math.abs(delta) > 50) step(delta < 0 ? 1 : -1);
        }}
      >
        {active ? (
          <div className="lightbox-inner">
            <div className="lightbox-stage" key={active.id} ref={setStage}>
              <div className="lightbox-frame" style={{ background: active.bg }}>
                {active.video ? (
                  <video className={active.pixelated ? "is-pixelated" : undefined} style={zoom ?? undefined} poster={active.poster} width={active.width} height={active.height} autoPlay muted loop playsInline aria-label={active.title}>
                    {active.webm ? <source src={active.webm} type="video/webm" /> : null}
                    <source src={active.src} type="video/mp4" />
                  </video>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className={active.pixelated ? "is-pixelated" : undefined} style={zoom ?? undefined} src={active.src} alt={active.title} width={active.width} height={active.height} />
                )}
              </div>
            </div>
            <div className="lightbox-bar">
              <p>
                <span className="lightbox-count">
                  {String((index ?? 0) + 1).padStart(2, "0")} {labels.of} {String(visible.length).padStart(2, "0")}
                </span>
                <strong>{active.title}</strong>
                <span className="lightbox-cat">{active.categoryLabel}</span>
                {active.specs ? <span className="lightbox-specs">{active.specs}</span> : null}
              </p>
              {active.caseHref ? (
                <Link className="button button-small" href={active.caseHref}>
                  {labels.caseStudy} →
                </Link>
              ) : null}
            </div>
            <button className="lightbox-nav lightbox-prev" type="button" onClick={() => step(-1)} aria-label={labels.previous}>
              <Arrow />
            </button>
            <button className="lightbox-nav lightbox-next" type="button" onClick={() => step(1)} aria-label={labels.next}>
              <Arrow flip />
            </button>
            <button ref={closeButton} className="lightbox-close" type="button" onClick={close} aria-label={labels.close}>
              ×
            </button>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
