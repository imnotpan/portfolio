// src/components/projects/CoverCarousel.tsx
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import pixel from '../../data/pixel.json';
import { useLanguageStore } from '../../store/useLenguageStore';

// Slug igual que en tu store (sin guiones). Cambia el último replace por '-' si prefieres con guiones.
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

/** Tarjeta cuadrada memoizada */
const Tile = React.memo(function Tile({ item }: { item: TileData }) {
  return (
    <Link
      key={item.slug}
      to={`/pixel/${item.slug}`}
      aria-label={`Open pixel project ${item.name}`}
      className="block"
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: '320px 360px', // estimación para reservar espacio
      }}
    >
      {/* Contenedor cuadrado + overlay + título */}
      <div className="group relative aspect-square overflow-hidden border border-black bg-white rounded">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
          onDragStart={(e) => e.preventDefault()}
        />

        {/* Oscurecer al hover */}
        <div className="pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Título centrado */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="px-3 py-1 text-white text-center font-robotoslab font-semibold tracking-wide drop-shadow">
            {item.name}
          </p>
        </div>
      </div>
    </Link>
  );
});

export default function CoverGrid(): JSX.Element {
  const lang = useLanguageStore((s) => s.language) as Lang;

  // Lista cruda desde pixel.json
  const rawList = useMemo<PixelItem[]>(
    () => (((pixel as any)?.projects ?? []) as PixelItem[]),
    []
  );

  // Precomputo de slug, título localizado y src de imagen
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
    <section className="relative w-full">
      {/* GRID responsive tipo galería, sin carrusel */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {list.map((item) => (
          <Tile key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
