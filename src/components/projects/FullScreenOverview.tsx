// src/components/projects/FullScreenOverview.tsx
import { useRef } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { useStoreOverview } from '../../store/StoreOverview';
import TagElement from '../services/TagElement';
import { useLanguageStore } from '../../store/useLenguageStore';
import BackgroundPlanets from '../home/BackgroundPlanets';
import { useNavigate } from 'react-router-dom';

type Lang = 'es' | 'en';

const dict: Record<Lang, {
  close: string;
  cta: string;
  aria: string;
  tagsLabel: string;
}> = {
  es: {
    close: 'CERRAR',
    cta: '> VER PROYECTO',
    aria: 'Vista de proyecto a pantalla completa: imágenes a la izquierda, descripción a la derecha.',
    tagsLabel: 'Etiquetas',
  },
  en: {
    close: 'CLOSE',
    cta: '> VIEW PROJECT',
    aria: 'Full screen project view: images on the left, description on the right.',
    tagsLabel: 'Tags',
  },
};

/* ---------- Helpers para media ---------- */
const isVideo = (url: string) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

type MediaProps = {
  src: string;
  alt: string;
  eager?: boolean;
  className?: string;
};

function Media({ src, alt, eager = false, className }: MediaProps) {
  if (isVideo(src)) {
    // Renderiza video inline (silencioso y en loop)
    return (
      <video
        className={className}
        playsInline
        muted
        autoPlay
        loop
        preload={eager ? 'auto' : 'metadata'}
        // poster opcional: si quieres, coloca una imagen estática relacionada
        // poster={src.replace(/\.(mp4|webm|ogg)(\?.*)?$/i, '.jpg')}
      >
        {/* Incluye múltiples sources si quieres mayor compatibilidad */}
        <source src={src} />
      </video>
    );
  }

  // Cubre PNG/JPG/WEBP/AVIF/SVG y también GIF (animará solo)
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

function FullScreenOverview(): JSX.Element {
  const lang = useLanguageStore(s => s.language) as Lang;
  const navigate = useNavigate();

  const setStateFullScreenOverview = useStoreOverview((state) => state.setStateFullScreenOverview);
  const mainTitle       = useStoreOverview((state) => state.mainTitle);
  const mainDescription = useStoreOverview((state) => state.mainDescription);
  const tags            = useStoreOverview((state) => state.tags);
  const images          = useStoreOverview((state) => state.images);
  const redirectLink    = useStoreOverview((state) => state.redirectLink);

  const ref = useRef<HTMLDivElement | null>(null);
  const t = dict[lang];

  return (
    <RemoveScroll
      ref={ref}
      className="fixed z-50 bg-black h-screen w-screen overflow-hidden"
      allowPinchZoom
    >
      <button
        onClick={() => {
          setStateFullScreenOverview(false);
          navigate({ pathname: '/', hash: '#projects' }, { replace: true });
        }}
        className="fixed top-0 right-0 text-white text-sm md:text-base font-ibmmono p-4 md:p-5 z-50 hover:underline focus:outline-none focus:ring-2 focus:ring-white/60"
        aria-label={t.close}
      >
        {t.close}
      </button>

      {/* Fondo decorativo */}
      <div className="absolute inset-0 opacity-20 z-[10] pointer-events-none">
        <BackgroundPlanets />
      </div>

      {/* Layout principal: 2 columnas */}
      <div
        className="relative z-40 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] h-full"
        role="dialog"
        aria-label={t.aria}
      >
        <aside
          className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent p-4 sm:p-6 lg:p-8"
          aria-label={lang === 'es' ? 'Galería de imágenes del proyecto' : 'Project image gallery'}
        >
          <div className="mx-auto w-full max-w-5xl space-y-6 flex flex-col items-center">
            {images && images.length > 0 ? (
              images.map((src: string, i: number) => (
                <figure key={`${src}-${i}`} className="w-full flex justify-center">
                  <Media
                    src={src}
                    alt={`${mainTitle} — media ${i + 1}`}
                    eager={i === 0}
                    className="h-auto rounded-md max-w-[600px] w-full object-contain"
                  />
                </figure>
              ))
            ) : (
              <p className="text-neutral-400 font-ibmmono">
                {lang === 'es' ? 'Sin imágenes disponibles.' : 'No images available.'}
              </p>
            )}
          </div>
        </aside>

        {/* Columna derecha: texto (sticky en desktop) */}
        <main
          className="relative bg-black/60 text-white h-full overflow-y-auto lg:overflow-y-auto p-6 sm:p-8 lg:p-12"
          aria-label={lang === 'es' ? 'Detalles del proyecto' : 'Project details'}
        >
          <div className="lg:sticky lg:top-0 lg:max-h-screen lg:overflow-y-auto">
            <header className="mb-6">
              <h1 className="text-3xl sm:text-4xl font-archivoblack leading-tight">
                {mainTitle}
              </h1>
            </header>

            <section className="prose prose-invert max-w-none mb-8">
              <p className="font-ibmmono text-base md:text-lg text-neutral-200 whitespace-pre-line">
                {mainDescription}
              </p>
            </section>

            {/* CTA */}
            {redirectLink && (
              <div className="mb-8">
                <a
                  className="hover:underline font-ibmmono text-lg md:text-xl inline-flex items-center focus:outline-none focus:ring-2 focus:ring-white/60"
                  href={redirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.cta}
                </a>
              </div>
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
              <section aria-label={t.tagsLabel}>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: string, index: number) => (
                    <TagElement key={`${tag}-${index}`} name={tag} />
                  ))}
                </div>
              </section>
            )}

            {/* Relleno al final para que el sticky no “corte” el último elemento */}
            <div className="h-16" />
          </div>
        </main>
      </div>
    </RemoveScroll>
  );
}

export default FullScreenOverview;
