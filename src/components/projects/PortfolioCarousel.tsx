// src/components/projects/CoverCarousel.tsx
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import pixel from '../../data/pixel.json';
import { useLanguageStore } from '../../store/useLenguageStore';

const slugify = (s: string): string =>
  s.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
   .toLowerCase().trim().replace(/[^a-z0-9]+/g, '');

type Lang = 'es' | 'en';

type PixelItem = {
  key: string;
  i18n: {
    en: { headerTitle?: string; title?: string; description?: string };
    es: { headerTitle?: string; title?: string; description?: string };
  };
  mainImage?: string;
  images?: string[];
};

type TileData = {
  slug: string;
  name: string;
  image: string;
};

const Tile = React.memo(function Tile({ item }: { item: TileData }) {
  return (
    <Link
      key={item.slug}
      to={`/pixel/${item.slug}`}
      aria-label={`Open pixel project ${item.name}`}
      // aspect-square fuerza el cuadrado perfecto siempre
      className="relative block w-full aspect-square overflow-hidden group bg-black"
    >
      <img
        src={item.image}
        alt={item.name}
        // object-cover rellena el cuadrado sin estirar ni deformar la imagen
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        loading="lazy"
        decoding="async"
        onDragStart={(e) => e.preventDefault()}
      />

      {/* Overlay oscuro al pasar el ratón */}
      <div className="pointer-events-none absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Título centrado ajustado para que no se desborde en móviles (text-base) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
        <p className="text-white text-center text-base sm:text-lg md:text-xl font-robotoslab font-bold tracking-wide drop-shadow-md">
          {item.name}
        </p>
      </div>
    </Link>
  );
});

export default function CoverGrid(): JSX.Element {
  const lang = useLanguageStore((s) => s.language) as Lang;

  const rawList = useMemo<PixelItem[]>(
    () => (((pixel as any)?.projects ?? []) as PixelItem[]),
    []
  );

  const list: TileData[] = useMemo(() => {
    const getTitle = (p: PixelItem): string => {
      const t = (p.i18n?.[lang] || p.i18n?.en) || { headerTitle: '', title: '' };
      return (t.headerTitle || t.title || '').toString();
    };
    const getImage = (p: PixelItem): string =>
      p.mainImage || (Array.isArray(p.images) && p.images[0]) || '';

    return rawList.map((p) => ({
      slug: slugify(p.key),
      name: getTitle(p),
      image: getImage(p),
    }));
  }, [rawList, lang]);

  return (
    <section className="relative w-full bg-black">
      {/* Cambio de layout:
        Móvil (default): 2 columnas mínimo
        Tablet (md): 3 columnas
        Escritorio (lg en adelante): 4 columnas máximo
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {list.map((item) => (
          <Tile key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}