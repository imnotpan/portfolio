// src/components/AboutSection.tsx
import { useRef, useMemo } from 'react';
import useTextWriteAppear from '../hooks/useText';
import { motion, useInView } from 'framer-motion';
import { useLanguageStore } from '../store/useLenguageStore';

type Lang = 'es' | 'en';

const dict: Record<Lang, { heading: string; fullText: string; ariaLabel: string }> = {
  en: {
    heading: 'ABOUT',
    fullText:
      'Started game development at 15 on platforms like Newgrounds. Enrolled at Austral University in 2019, expanded to digital design in 2020, creating visualizers for Lollapalooza, cover art, and animated music videos for national/international artists.',
    ariaLabel:
      'About me: started game development at 15 on platforms like Newgrounds. Later studied at Austral University and expanded into digital design in 2020, creating visuals for Lollapalooza and working on cover art and music videos.',
  },
  es: {
    heading: 'SOBRE MÍ',
    fullText:
      'Comencé en el desarrollo de videojuegos a los 15 años en plataformas como Newgrounds. Ingresé a la Universidad Austral en 2019, y en 2020 me expandí al diseño digital, creando visuales para Lollapalooza, portadas y videoclips animados para artistas nacionales e internacionales.',
    ariaLabel:
      'Sobre mí: comencé en el desarrollo de videojuegos a los 15 años en plataformas como Newgrounds. Luego estudié en la Universidad Austral y en 2020 me expandí al diseño digital, creando visuales para Lollapalooza y trabajando en portadas y videoclips animados.',
  },
};

function AboutSection(): JSX.Element {
  const lang = useLanguageStore((s) => s.language) as Lang;
  const t = dict[lang];

  const ref = useRef<HTMLElement | null>(null);
  const isOnView = useInView(ref);

  const animated = useTextWriteAppear(t.fullText, isOnView, 0.9);
  const seoText = useMemo(() => t.fullText, [t.fullText]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-y-hidden overflow-x-hidden section__page w-full flex bg-black z-10"
      lang={lang}
      aria-label={t.ariaLabel}
    >
      <div className="flex flex-col w-full mx-[5vh] lg:mx-[30vh]">
        <div className="md:ml-10 mix-blend-difference relative z-20">
          {/* Título semántico */}
          <h2 className="font-archivoblack text-white text-7xl sm:text-8xl mt-10">
            {t.heading}
          </h2>

          {/* Texto animado (desktop) */}
          <motion.p
            className="hidden sm:block mb-10 text-gray-300 text-z font-bold font-neue text-4xl mr-4 text-left"
            aria-hidden="true"
          >
            {animated}
          </motion.p>

          {/* Texto accesible/SEO siempre visible para crawlers */}
          <span className="sr-only">{seoText}</span>

          {/* Texto estático (mobile) */}
          <p className="block sm:hidden my-5 mb-5 text-gray-300 text-4xl font-bold font-neue text-xl mr-4 text-left">
            {t.fullText}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
