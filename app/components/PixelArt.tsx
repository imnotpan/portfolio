import { getMedia } from "../lib/media";
import { LoopVideo } from "./LoopVideo";

type PixelArtProps = {
  src: string;
  alt: string;
  className?: string;
  /** "thumb" uses the lighter rendition where one exists. */
  variant?: "thumb" | "full";
  /** Layout width hint for lossy pieces that ship a lighter rendition. */
  sizes?: string;
  priority?: boolean;
};

/**
 * Renders artwork from the media manifest. Pixel-perfect pieces ship at their
 * native resolution and are scaled up by CSS with nearest-neighbour sampling;
 * animations fall back to their first frame when reduced motion is requested.
 */
export function PixelArt({ src, alt, className = "", variant = "full", sizes = "100vw", priority = false }: PixelArtProps) {
  const entry = getMedia(src);
  const classes = `pixel-art${entry.pixelated ? " is-pixelated" : ""}${className ? ` ${className}` : ""}`;

  if (entry.video) {
    return (
      <LoopVideo
        className={classes}
        label={alt}
        mp4={entry.src}
        webm={entry.webm}
        poster={entry.poster as string}
        width={entry.width}
        height={entry.height}
        eager={priority}
      />
    );
  }

  const file = variant === "thumb" && entry.thumb ? entry.thumb : entry.src;
  // Lossy pieces carry a 760px rendition: let the browser pick per layout.
  const srcSet = variant === "full" && entry.thumb ? `${entry.thumb} 760w, ${entry.src} ${entry.width}w` : undefined;
  const image = (
    // Plain <img>: the site is a static export and the files are pre-optimised.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={classes}
      src={file}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      width={entry.width}
      height={entry.height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : undefined}
    />
  );

  if (!entry.animated || !entry.poster) return image;

  return (
    <picture>
      <source media="(prefers-reduced-motion: reduce)" srcSet={entry.poster} />
      {image}
    </picture>
  );
}
