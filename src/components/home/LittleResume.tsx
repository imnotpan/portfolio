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
    // Texto directo: Rol híbrido + Logro masivo + Enfoque actual
    fullText: "Lead Pixel Artist & Creative Developer. +25M de vistas creando visuales para artistas globales y advergaming de alto impacto.",
    ariaLabel:
      'Resumen: Lead Pixel Artist y Desarrollador Creativo con más de 25 millones de vistas en proyectos para artistas internacionales.',
  },
  en: {
    fullText: "Lead Pixel Artist & Creative Developer. +25M views creating visuals for global artists and high-impact advergaming.",
    ariaLabel:
      "Summary: Lead Pixel Artist and Creative Developer with over 25 million views on projects for global artists.",
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
      className="font-ibmmono w-[280px] z-50 leading-tight text-black"
      lang={lang}
      dir="ltr"
      aria-label={t.ariaLabel}
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Accesibilidad */}
      <span className="sr-only">{seoText}</span>

      {/* Animación de escritura */}
      <motion.span aria-hidden="true">
        {animated}
      </motion.span>
      <CursorBlinker />

      {/* Metadata SEO (Aquí sí mantenemos el título de ingeniero para los motores de búsqueda) */}
      <meta itemProp="name" content="Kevin Medina" />
      <meta itemProp="alternateName" content="imnotapan" />
      <meta itemProp="jobTitle" content="Lead Pixel Artist & Computer Engineer" />
    </motion.p>
  );
}

export default LittleResume;