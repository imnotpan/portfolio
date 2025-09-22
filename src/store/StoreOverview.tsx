// src/store/StoreOverview.ts
import { create } from 'zustand';

/** Idiomas soportados */
export type Lang = 'es' | 'en';

/** Texto localizado por idioma */
export type ProjectI18n = {
  headerTitle: string;
  title: string;
  description: string;
};

/** Proyecto normalizado para el store */
export type Project = {
  id: string; // slug normalizado (viene de id|key)
  i18n: { en: ProjectI18n; es: ProjectI18n };
  tags: string[];
  images: string[];
  mainImage: string;
  redirectLink?: string;

  // opcionales "planchados" si ya vienen en el JSON
  title?: string;
  description?: string;
  headerTitle?: string;
};

/** Estado UI + datos */
interface OverviewStore {
  isFullScreenOverviewActive: boolean;
  mainTitle: string;
  mainDescription: string;
  tags: string[];
  mainImage: string;
  images: string[];
  redirectLink: string;

  /** Índice unificado (projects + pixel + designs) por id normalizado */
  projectsById: Record<string, Project>;
}

/** Acciones públicas */
interface Action {
  setStateFullScreenOverview: (isActive: boolean) => void;
  setMainTitle: (title: string) => void;
  setRedirectLink: (url: string) => void;
  setDescription: (description: string) => void;
  setTags: (tags: string[]) => void;
  setMainImage: (image: string) => void;
  setImages: (images: string[]) => void;

  /** Registra Project[] ya normalizados (con id). */
  registerProjects: (projects: Project[]) => void;

  /**
   * Registra una lista cruda (de cualquier JSON) y la normaliza:
   * - acepta objetos con 'id' o 'key'
   * - mapea 'headertitle' → 'headerTitle', 'path' → 'mainImage'
   * - genera slug consistente en 'id'
   * - crea i18n si no viene
   */
  registerProjectsFromRaw: (raw: any[]) => void;

  getProjectById: (id: string) => Project | undefined;

  /** Inyecta todos los campos de un Project ya resuelto. */
  setOverviewFromProject: (p: Project, openFullScreen?: boolean) => void;

  /**
   * Busca por id en el índice, resuelve localización y abre/actualiza el overlay.
   * Si el id no existe, no hace nada (no crashea).
   */
  getProjectByIdLocalized: (
    id: string,
    lang: Lang
  ) => (Project & Required<Pick<Project, 'title' | 'description' | 'headerTitle'>>) | undefined;

  setOverviewFromProjectLocalized: (id: string, lang: Lang, openFullScreen?: boolean) => void;
}

/* ---------------------------------- */
/* Utils: slug                         */
/* ---------------------------------- */
/**
 * slugify sin guiones: "Ese corte!!!" -> "esecorte"
 * (Si prefieres con guiones, cambia el replace final por '-')
 */
const slugify = (s: string): string =>
  s
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, ''); // ← sin separadores (usa '-' si quieres guiones)

/* ---------------------------------- */
/* Store                               */
/* ---------------------------------- */

export const useStoreOverview = create<OverviewStore & Action>((set, get) => ({
  // ---- estado UI
  isFullScreenOverviewActive: false,
  mainTitle: '',
  mainDescription: '',
  tags: [],
  mainImage: '',
  images: [],
  redirectLink: '',

  // ---- índice unificado
  projectsById: {},

  // ---- setters UI
  setStateFullScreenOverview: (isActive) => set({ isFullScreenOverviewActive: isActive }),
  setRedirectLink: (url) => set({ redirectLink: url }),
  setMainTitle: (title) => set({ mainTitle: title }),
  setDescription: (description) => set({ mainDescription: description }),
  setTags: (tg) => set({ tags: tg }),
  setMainImage: (image) => set({ mainImage: image }),
  setImages: (imgs) => set({ images: imgs }),

  // ---- registro de Project[] ya normalizados
  registerProjects: (projects) =>
    set((state) => {
      const next = { ...state.projectsById };
      for (const p of projects) {
        if (!p?.id) continue;
        if (next[p.id]) {
          // eslint-disable-next-line no-console
          console.warn(`[StoreOverview] ID duplicado: ${p.id}. Sobrescribiendo.`);
        }
        next[p.id] = p;
      }
      return { projectsById: next };
    }),

  // ---- registro desde listas crudas (key|id → id slug, mapeos y fallbacks)
  registerProjectsFromRaw: (raw) =>
    set((state) => {
      const next = { ...state.projectsById };

      const normalizeToProjects = (items: any[]): Project[] =>
        (items ?? [])
          .map((it: any) => {
            const rawId = it?.id ?? it?.key;
            if (!rawId) return null; // ignora entradas sin id/key

            const id = slugify(String(rawId)); // normaliza aquí

            // Tomamos header/title/description con fallbacks comunes
            const header =
              it?.headerTitle ??
              it?.headertitle ??
              it?.i18n?.en?.headerTitle ??
              it?.i18n?.es?.headerTitle ??
              it?.title ??
              it?.name ??
              '';

            const title =
              it?.title ??
              it?.i18n?.en?.title ??
              header;

            const description =
              it?.description ??
              it?.i18n?.en?.description ??
              '';

            // i18n: si no viene, clonamos en ambos idiomas
            const i18n: Project['i18n'] =
              it?.i18n?.en && it?.i18n?.es
                ? it.i18n
                : {
                    en: { headerTitle: header, title, description },
                    es: { headerTitle: header, title, description },
                  };

            // Imagen principal: soporta "mainImage" y "path" (Designs.json)
            const mainImage = it?.mainImage ?? it?.path ?? '';
            const images = Array.isArray(it?.images)
              ? it.images
              : (mainImage ? [mainImage] : []);

            const out: Project = {
              id,
              i18n,
              tags: it?.tags ?? [],
              images,
              mainImage,
              redirectLink: it?.redirectLink,
              // opcionales “planchados”
              title,
              description,
              headerTitle: header,
            };

            if (next[id]) {
              // eslint-disable-next-line no-console
              console.warn(`[StoreOverview] ID duplicado detectado: ${id}. Sobrescribiendo.`);
            }

            return out;
          })
          .filter(Boolean) as Project[];

      for (const p of normalizeToProjects(raw)) next[p.id] = p;
      return { projectsById: next };
    }),

  // ---- helpers
  getProjectById: (id) => get().projectsById[id],

  setOverviewFromProject: (p, openFullScreen = true) => {
    const title = p.title ?? p.i18n?.en?.title ?? '';
    const description = p.description ?? p.i18n?.en?.description ?? '';
    set({
      mainTitle: title,
      mainDescription: description,
      tags: p.tags ?? [],
      mainImage: p.mainImage ?? '',
      images: p.images ?? [],
      redirectLink: p.redirectLink ?? '',
      isFullScreenOverviewActive: openFullScreen,
    });
  },

  getProjectByIdLocalized: (id, lang) => {
    const p = get().projectsById[id];
    if (!p) return undefined;
    const t = p.i18n?.[lang] ?? p.i18n?.en;
    const title = t?.title || p.title || p.i18n?.en?.title || '';
    const description = t?.description || p.description || p.i18n?.en?.description || '';
    const headerTitle = t?.headerTitle || p.headerTitle || p.i18n?.en?.headerTitle || '';
    return { ...p, title, description, headerTitle };
  },

  setOverviewFromProjectLocalized: (id, lang, openFullScreen = true) => {
    const p = get().projectsById[id];
    if (!p) return;
    const t = p.i18n?.[lang] ?? p.i18n?.en;
    const title = t?.title || p.title || p.i18n?.en?.title || '';
    const description = t?.description || p.description || p.i18n?.en?.description || '';
    set({
      mainTitle: title,
      mainDescription: description,
      tags: p.tags ?? [],
      mainImage: p.mainImage ?? '',
      images: p.images ?? [],
      redirectLink: p.redirectLink ?? '',
      isFullScreenOverviewActive: openFullScreen,
    });
  },
}));
