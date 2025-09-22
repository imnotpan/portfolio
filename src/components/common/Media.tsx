// src/components/common/Media.tsx
import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  className?: string;
  loopVideo?: boolean;
  preferVideo?: boolean; // si le pasas un .gif y true, intentará usar <video> si hay versión .mp4/.webm
};

const isGif = (url: string) => /\.gif(\?.*)?$/i.test(url);
const asVideoCandidate = (url: string) =>
  url.replace(/\.gif(\?.*)?$/i, '.webm') || url.replace(/\.gif(\?.*)?$/i, '.mp4');

const Media: React.FC<Props> = ({ src, alt, className, loopVideo = true, preferVideo = false, ...imgProps }) => {
  if (preferVideo && isGif(src)) {
    const vid = asVideoCandidate(src);
    // Si subes también una versión .webm/.mp4 con el mismo nombre
    return (
      <video
        className={className}
        playsInline
        muted
        autoPlay
        loop={loopVideo}
        preload="metadata"
        // fallback: si no carga el video, el póster será el propio gif
        poster={src}
      >
        <source src={vid.replace(/\.webm$/, '.webm')} type="video/webm" />
        <source src={vid.replace(/\.mp4$/, '.mp4')} type="video/mp4" />
      </video>
    );
  }

  // Por defecto usa <img> (GIF animará solo)
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      {...imgProps}
    />
  );
};

export default Media;
