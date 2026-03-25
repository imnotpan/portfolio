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
    return (
      <video
        className={className}
        playsInline
        muted
        autoPlay
        loop
        preload={eager ? 'auto' : 'metadata'}
      >
        <source src={src} />
      </video>
    );
  }

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

      <div className="absolute inset-0 opacity-20 z-[10] pointer-events-none">
        <BackgroundPlanets />
      </div>

      {/* Contenedor principal: 
          Móvil: Flex en columna y scroll general (overflow-y-auto).
          Escritorio (lg): Grid de 2 columnas sin scroll general (overflow-hidden) para que cada columna haga scroll por su lado. 
      */}
      <div
        className="relative z-40 flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] h-full overflow-y-auto lg:overflow-hidden"
        role="dialog"
        aria-label={t.aria}
      >
        
        {/* COLUMNA DE TEXTO (Renderiza primero para móvil) */}
        {/* Móvil: Fluye normal arriba. Escritorio (lg): Se va a la columna 2 y tiene scroll interno */}
        <main
          className="relative bg-black/60 lg:bg-black/40 text-white p-6 sm:p-8 lg:p-12 lg:h-full lg:overflow-y-auto lg:order-2"
          aria-label={lang === 'es' ? 'Detalles del proyecto' : 'Project details'}
        >
          <div className="mt-12 lg:mt-0"> {/* Margen extra en móvil para que el botón de CERRAR no tape el título */}
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

            {tags && tags.length > 0 && (
              <section aria-label={t.tagsLabel}>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: string, index: number) => (
                    <TagElement key={`${tag}-${index}`} name={tag} />
                  ))}
                </div>
              </section>
            )}

            <div className="h-16" />
          </div>
        </main>

        {/* COLUMNA DE IMÁGENES (Renderiza después) */}
        {/* Móvil: Fluye normal abajo. Escritorio (lg): Se va a la columna 1 y tiene scroll interno */}
        <aside
          className="p-4 sm:p-6 lg:p-8 lg:h-full lg:overflow-y-auto lg:order-1 flex flex-col items-center"
          aria-label={lang === 'es' ? 'Galería de imágenes del proyecto' : 'Project image gallery'}
        >
          <div className="w-full max-w-5xl space-y-6 flex flex-col items-center pb-12">
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

      </div>
    </RemoveScroll>
  );
}

export default FullScreenOverview;