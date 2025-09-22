// src/components/LittleResume.tsx
import { useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CursorBlinker from './CursorBlinker';
import useTextWriteAppear from '../../hooks/useText';
import { useLanguageStore } from '../../store/useLenguageStore';

type Lang = 'es' | 'en';

const dict: Record<Lang, {
  fullText: string;
  ariaLabel: string;
}> = {
  es: {
    fullText: "Hola 👋 Soy game developer y designer de Chile.",
    ariaLabel:
      'Presentación breve: Hola, soy game developer y designer de Chile.',
  },
  en: {
    fullText: "Hello 👋 I'm a game developer and designer from Chile.",
    ariaLabel:
      "Short intro: Hello, I'm a game developer and designer from Chile.",
  },
};

function LittleResume(): JSX.Element {
  const lang = useLanguageStore((s) => s.language) as Lang;
  const t = dict[lang];

  const ref = useRef<HTMLParagraphElement | null>(null);
  const isOnView = useInView(ref);

  const animated = useTextWriteAppear(t.fullText, isOnView, 1);
  const seoText = useMemo(() => t.fullText, [t.fullText]);

  return (
    <motion.p
      ref={ref}
      className="font-ibmmono w-[260px] z-50 leading-snug"
      lang={lang}
      dir="ltr"
      aria-label={t.ariaLabel}
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Texto completo para SEO / accesibilidad */}
      <span className="sr-only">{seoText}</span>

      {/* Texto animado visible */}
      <motion.span aria-hidden="true">
        {animated}
      </motion.span>
      <CursorBlinker />

      {/* Microdatos SEO */}
      <meta itemProp="name" content="Kevin Medina" />
      <meta itemProp="alternateName" content="imnotapan" />
      <meta
        itemProp="jobTitle"
        content={lang === 'es' ? 'Game developer y designer' : 'Game developer and designer'}
      />
      <meta itemProp="homeLocation" content="Chile" />
    </motion.p>
  );
}

export default LittleResume;
