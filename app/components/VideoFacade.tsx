"use client";

import { useState } from "react";

/** YouTube thumbnail that only loads the real player after a click. */
type VideoFacadeProps = {
  id: string;
  title: string;
  playLabel: string;
  /** Self-hosted thumbnail renditions (see scripts/build-media.mjs). */
  image: { src: string; thumb: string };
  eager?: boolean;
};

export function VideoFacade({ id, title, playLabel, image, eager = false }: VideoFacadeProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="video-facade">
      {active ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setActive(true)} aria-label={`${playLabel}: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.thumb}
            srcSet={`${image.thumb} 800w, ${image.src} 1280w`}
            sizes={eager ? "(max-width: 760px) 100vw, 1100px" : "(max-width: 760px) 100vw, 640px"}
            alt=""
            width={1280}
            height={720}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : undefined}
            decoding="async"
          />
          <span className="play-icon" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
