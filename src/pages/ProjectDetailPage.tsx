import { useEffect, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';

import FullScreenOverview from '../components/projects/FullScreenOverview';
import { useStoreOverview } from '../store/StoreOverview';
import { useLanguageStore } from '../store/useLenguageStore';

export default function ProjectDetailPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const lang = useLanguageStore((s) => s.language) as 'es' | 'en';

  const projectsById = useStoreOverview((s) => s.projectsById);
  const getProjectByIdLocalized = useStoreOverview((s) => s.getProjectByIdLocalized);
  const setOverviewFromProjectLocalized = useStoreOverview((s) => s.setOverviewFromProjectLocalized);

  const hasAny = useMemo(() => Object.keys(projectsById).length > 0, [projectsById]);
  const project = id ? getProjectByIdLocalized(id, lang) : undefined;

  // evita múltiples set en el mismo (id, lang)
  const lastSig = useRef<string | null>(null);
  useEffect(() => {
    if (!id || !project) return;
    const sig = `${id}::${lang}`;
    if (lastSig.current === sig) return;
    lastSig.current = sig;

    setOverviewFromProjectLocalized(id, lang, true);
  }, [id, lang, project, setOverviewFromProjectLocalized]);

  // Aún no cargan las listas al store (primer render)
  if (!hasAny) {
    return (
      <div className="min-h-[50vh] grid place-items-center bg-black text-white">
        <p className="opacity-80">Loading project…</p>
      </div>
    );
  }

  // Ya cargó el store y el id no existe → 404 local
  if (!id || !project) {
    return (
      <div className="min-h-[60vh] grid place-items-center bg-black text-white px-6">
        <div className="max-w-xl text-center space-y-4">
          <h1 className="text-3xl font-bold">Proyecto no encontrado</h1>
          <p className="opacity-80">
            No existe ningún proyecto con id <span className="font-mono">{id}</span>.
          </p>
          <Link
            to="/"
            className="inline-block px-4 py-2 border border-white/30 rounded hover:bg-white hover:text-black transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return <FullScreenOverview />;
}
