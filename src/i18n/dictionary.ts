// src/i18n/dictionary.ts
import type { Language } from '../store/useLenguageStore';

export const dict = {
  es: {
    brand: 'IMNOTAPAN',
    sections: {
      home: 'Inicio',
      about: 'Sobre mí',
      services: 'Servicios',
      projects: 'Proyectos',
    },
  },
  en: {
    brand: 'IMNOTAPAN',
    sections: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      projects: 'Projects',
    },
  },
} satisfies Record<Language, {
  brand: string;
  sections: Record<'home' | 'about' | 'services' | 'projects', string>;
}>;
