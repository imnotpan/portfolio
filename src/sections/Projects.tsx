// src/sections/Projects.tsx
import  { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import PortfolioCarousel from '../components/projects/PortfolioCarousel';
import useTextWriteAppear from '../hooks/useText';
import { useLanguageStore } from '../store/useLenguageStore';
import PortfolioGrid from '../components/projects/PortfolioGrid';

type Lang = 'es' | 'en';

const dict: Record<
  Lang,
  {
    headingTop: string;          // Título principal (banner superior)
    headingSub?: string;         // Subtítulo opcional
    designHeading: string;       // Banner “diseño”
    animatedLines: string[];     // Líneas animadas (2)
    animatedAria: string;        // Aria label descriptivo
  }
> = {
  en: {
    headingTop: 'PROJECTS',
    headingSub: 'Game dev & art',
    designHeading: 'PIXEL ART',
    animatedLines: ['Selected works', 'Beyond code: art'],
    animatedAria:
      'Selected projects: game development and game art, including gameplay, tools and visual work.',
  },
  es: {
    headingTop: 'PROYECTOS',
    headingSub: 'Game dev & arte',
    designHeading: 'PIXEL ART',
    animatedLines: ['Trabajos seleccionados', 'Más allá del código: arte'],
    animatedAria:
      'Proyectos seleccionados: desarrollo y arte para videojuegos, incluyendo gameplay, herramientas y trabajo visual.',
  },
};

function Projects(): JSX.Element {
  const lang = useLanguageStore((s) => s.language) as Lang;

  const ref = useRef<HTMLElement | null>(null);
  const isOnView = useInView(ref);

  const t = dict[lang];
  const animatedLine1 = useTextWriteAppear(t.animatedLines[0], isOnView, 1);
  const animatedLine2 = useTextWriteAppear(t.animatedLines[1], isOnView, 1);

  // Texto completo para SEO / accesibilidad (crawlers ven el contenido aunque la animación muestre por partes)
  const seoText = useMemo(
    () => `${t.headingTop} — ${t.headingSub ?? ''}. ${t.animatedLines.join('. ')}`,
    [t.headingTop, t.headingSub, t.animatedLines]
  );

  return (
    <section
      id="projects"
      className="section__page relative w-full h-full flex flex-col overflow-hidden z-10 bg-white"
      lang={lang}
      aria-label={t.animatedAria}
      ref={ref}
    >
      {/* Banner superior */}
      <div className="w-full bg-black text-white">
        <div className="w-full overflow-hidden flex">
          <motion.div
            animate="animate"
            className="font-archivoblack inline-block w-full flex flex-col items-center text-center py-4"
          >
            <h2 className="w-full text-6xl sm:text-8xl font-archivoblack font-extrabold">
              {t.headingTop}
            </h2>
            {t.headingSub && (
              <p className="mt-1 text-base sm:text-lg font-ibmmono opacity-80">
                {t.headingSub}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Carrusel de proyectos (juegos / técnicas) */}
      <PortfolioGrid />

      {/* Segundo banner (diseño / arte) */}
      <div className="bg-black text-white font-archivoblack w-full text-center z-50">
        <div className="flex flex-col sm:flex-row w-full text-center justify-center items-center py-6">
          <h3 className="text-6xl sm:text-7xl font-extrabold">
            {t.designHeading}
          </h3>

          {/* Texto accesible completo para SEO */}
          <span className="sr-only">{seoText}</span>

          {/* Texto animado en desktop */}
          <motion.p
            className="sm:mt-3 sm:ml-4 text-xl font-ibmmono text-center sm:text-left flex flex-col"
            aria-hidden="true"
          >
            <motion.span className="font-robotoslab sm:text-base text-3xl">
              {animatedLine1}
            </motion.span>
            <motion.span className="font-robotoslab">
              {animatedLine2}
            </motion.span>
          </motion.p>

          {/* Texto estático en mobile (para evitar parpadeos de animación) */}
          <p className="sm:hidden mt-2 text-base font-ibmmono opacity-90">
            {t.animatedLines.join(' — ')}
          </p>
        </div>
      </div>

      {/* Carrusel de portadas / artes */}
      <PortfolioCarousel/>
    </section>
  );
}

export default Projects;
