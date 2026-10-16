"use client";

import { useEffect, useRef } from "react";

type LoopVideoProps = {
  mp4: string;
  webm?: string;
  poster: string;
  label: string;
  width: number;
  height: number;
  className?: string;
  /** Start loading immediately (hero) instead of when scrolled near. */
  eager?: boolean;
};

/** Muted looping clip that only downloads and plays while on screen. */
export function LoopVideo({ mp4, webm, poster, label, width, height, className, eager = false }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let loaded = false;
    // The hero clip waits until the page has loaded so it never competes with
    // fonts, scripts or the poster (the LCP candidate) for bandwidth.
    let ready = !eager || document.readyState === "complete";
    let visible = false;

    const start = () => {
      if (reduceMotion.matches || !ready || !visible) return;
      if (!loaded) {
        loaded = true;
        video.preload = "auto";
      }
      void video.play().catch(() => {
        // Autoplay can be blocked; the poster stays visible.
      });
    };

    const onLoad = () => {
      window.setTimeout(() => {
        ready = true;
        start();
      }, 600);
    };
    if (!ready) window.addEventListener("load", onLoad, { once: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else if (!video.paused) video.pause();
      },
      { rootMargin: eager ? "0px" : "200px" },
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      window.removeEventListener("load", onLoad);
    };
  }, [eager]);

  return (
    <video
      ref={ref}
      className={className}
      aria-label={label}
      width={width}
      height={height}
      poster={poster}
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="none"
    >
      {webm ? <source src={webm} type="video/webm" /> : null}
      <source src={mp4} type="video/mp4" />
    </video>
  );
}
