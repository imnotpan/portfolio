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
    headingTop: 'GAME DEV',
    headingSub: 'Game dev',
    designHeading: 'PIXEL ART',
    animatedLines: ['Selected works', 'Beyond code: art'],
    animatedAria:
      'Selected projects: game development and game art, including gameplay, tools and visual work.',
  },
  es: {
    headingTop: 'GAME DEV',
    headingSub: 'Game dev',
    designHeading: 'PIXEL ART',
    animatedLines: ['Trabajos seleccionados', 'Más allá del código: arte'],
    animatedAria:
      'Proyectos seleccionados: desarrollo y arte para videojuegos, incluyendo gameplay, herramientas y trabajo visual.',
  },
};

function Projects(): JSX.Element {
  const lang = useLanguageStore((s) => s.language) as Lang;

  const ref = useRef<HTMLElement | null>(null);

  const t = dict[lang];

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
        {/* Segundo banner (diseño / arte) */}
      <div className="bg-black text-white font-archivoblack w-full text-center z-50">
        <div className="flex flex-col sm:flex-row w-full text-center justify-center items-center py-6">
          <h3 className="text-6xl sm:text-5xl font-extrabold">
            {t.designHeading}
          </h3>

          {/* Texto accesible completo para SEO */}
          <span className="sr-only">{seoText}</span>

         
        </div>
      </div>

      {/* Carrusel de portadas / artes */}
      <PortfolioCarousel/>
      {/* Banner superior */}
      <div className="w-full bg-black text-white">
        <div className="w-full overflow-hidden flex">
          <motion.div
            animate="animate"
            className="font-archivoblack inline-block w-full flex flex-col items-center text-center py-4"
          >
            <h2 className="w-full text-6xl sm:text-5xl font-archivoblack font-extrabold">
              {t.headingTop}
            </h2>
            
          </motion.div>
        </div>
      </div>

      {/* Carrusel de proyectos (juegos / técnicas) */}
      <PortfolioGrid />

    
    </section>
  );
}

export default Projects;
