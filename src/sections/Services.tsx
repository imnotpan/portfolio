// src/sections/Services.tsx
import { useRef } from 'react';
import ServiceSection from '../components/services/ServiceSection';
import { useLanguageStore } from '../store/useLenguageStore';

type Lang = 'es' | 'en';

const dict: Record<
  Lang,
  {
    headingTop: string;
    headingBottom: string;
    services: Array<{
      topMainName: string;
      bottomMainName: string;
      name: string;
      tags: string[];
    }>;
  }
> = {
  es: {
    headingTop: 'SERVICIOS',
    headingBottom: 'VIDEOJUEGOS',
    services: [
      {
        topMainName: 'GAME',
        bottomMainName: 'DEV',
        name: 'Prototipado & Sistemas de Gameplay',
        tags: ['Unity', 'Unreal', 'Godot'],
      },
      {
        topMainName: 'TECHNICAL',
        bottomMainName: 'ART',
        name: 'Shaders, VFX en tiempo real & Optimización',
        tags: ['Shader Graph', 'HLSL', 'Niagara'],
      },
      {
        topMainName: 'ARTE',
        bottomMainName: '2D',
        name: 'Pixel Art, Sprites & Animación',
        tags: ['Aseprite', 'Spritesheets', 'Frame-by-frame'],
      },
      {
        topMainName: 'ARTE',
        bottomMainName: '3D',
        name: 'Modelado, Texturas & Rigging (Listo para juego)',
        tags: ['Blender', 'Low-poly', 'PBR', 'Retopo', 'UVs', 'Rig'],
      },
    ],
  },
  en: {
    headingTop: 'GAME',
    headingBottom: 'SERVICES',
    services: [
      {
        topMainName: 'GAME',
        bottomMainName: 'DEV',
        name: 'Prototyping & Gameplay Systems',
        tags: ['Unity', 'Unreal', 'Godot'],
      },
      {
        topMainName: 'TECHNICAL',
        bottomMainName: 'ART',
        name: 'Real-time Shaders, VFX & Optimization',
        tags: ['Shader Graph', 'HLSL', 'Niagara', 'VFX Graph'],
      },
      {
        topMainName: 'ART',
        bottomMainName: '2D',
        name: 'Pixel Art, Sprites & Animation',
        tags: ['Aseprite', 'Spritesheets', 'Frame-by-frame'],
      },
      {
        topMainName: 'ART',
        bottomMainName: '3D',
        name: 'Modeling, Texturing & Rigging (Game-Ready)',
        tags: ['Blender', 'Low-poly', 'PBR', 'Retopo', 'UVs', 'Rig'],
      },
    ],
  },
};

function Services(): JSX.Element {
  const ref = useRef<HTMLElement | null>(null);
  const lang = useLanguageStore((s) => s.language) as Lang;
  const t = dict[lang];

  return (
    <section
      ref={ref}
      id="services"
      className="section__page relative w-full bg-white text-black z-10 flex flex-col md:flex-row items-center justify-center text-left overflow-hidden"
      lang={lang}
      aria-label={lang === 'es' ? 'Servicios de desarrollo y arte para videojuegos' : 'Game development and game art services'}
    >
      {/* Título grande en dos líneas (responsivo) */}
      <div className="mb-0 md:mb-10 font-dugaspro text-7xl sm:text-8xl md:ml-20 md:text-9xl tracking-widest break-words leading-none select-none">
        <span>{t.headingTop}</span>
        <br />
        <span>{t.headingBottom}</span>
      </div>

      {/* Lista de servicios */}
      <div className="my-10 max-w-3xl w-full md:mr-10">
        {t.services.map((s, i) => (
          <div key={`${s.topMainName}-${s.bottomMainName}-${i}`}>
            <ServiceSection
              topMainName={s.topMainName}
              bottomMainName={s.bottomMainName}
              name={s.name}
              tags={s.tags}
            />
            {i < t.services.length - 1 && <hr className="bg-black h-[2px]" />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
