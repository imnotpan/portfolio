// src/components/projects/CoverCarousel.tsx
import  { useMemo } from 'react';
import { Link } from 'react-router-dom';

import Designs from '../../data/Designs.json';
import ImageCoverDesign from './ImageCoverDesign';

// Misma función de slug que usa tu store (sin guiones)
const slugify = (s: string): string =>
  s.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
   .toLowerCase().trim().replace(/[^a-z0-9]+/g, '');

type DesignItem = {
  key: string;
  headertitle: string;
  path: string;
};

export default function CoverGrid(): JSX.Element {
  const list = useMemo<DesignItem[]>(
    () => ((Designs as any)?.Designs ?? []) as DesignItem[],
    []
  );

  return (
    <section className="relative w-full">
      {/* GRID responsive tipo galería, sin JS */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {list.map((cover, index) => (
          <Link
            key={cover.key}
            to={`/pixel/${slugify(cover.key)}`}
            aria-label={`Open pixel project ${cover.headertitle}`}
            className="block"
          >
            {/* Asegúrate de que ImageCoverDesign tenga aspect-square y overlay al hover */}
            <ImageCoverDesign
              coverIndex={index}
              image={cover.path}
              name={cover.headertitle}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
