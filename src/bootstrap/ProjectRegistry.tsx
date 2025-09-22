// src/bootstrap/ProjectRegistry.tsx
import { useEffect } from 'react';
import { useStoreOverview, Project, ProjectI18n } from '../store/StoreOverview';
import raw from '../data/Projects.json';

type RawNew = {
  projects: Array<{
    key: string;
    i18n?: { en?: ProjectI18n; es?: ProjectI18n };
    headertitle?: string;       // legacy
    mainTitle?: string;         // legacy
    description?: string;       // legacy
    tags: string[];
    mainImage: string;
    images: string[];
    redirectLink?: string;
  }>;
};

export default function ProjectRegistry(): null {
  const registerProjects = useStoreOverview(s => s.registerProjects);

  useEffect(() => {
    const data = raw as unknown as RawNew;

    const mapped: Project[] = data.projects.map(p => {
      // Soporte JSON nuevo (i18n) o legacy (headertitle/mainTitle/description)
      const en: ProjectI18n = p.i18n?.en ?? {
        headerTitle: p.headertitle ?? '',
        title: p.mainTitle ?? '',
        description: p.description ?? '',
      };
      const es: ProjectI18n = p.i18n?.es ?? {
        headerTitle: p.headertitle ?? '',
        title: p.mainTitle ?? '',
        description: p.description ?? '',
      };

      return {
        id: p.key,
        i18n: { en, es },
        tags: p.tags ?? [],
        images: p.images ?? [],
        mainImage: p.mainImage ?? '',
        redirectLink: p.redirectLink,
      };
    });

    registerProjects(mapped);
  }, [registerProjects]);

  return null;
}
