import projectsData from '../../data/Projects.json';
import { useLanguageStore } from '../../store/useLenguageStore';
import ProjectCard from './ProjectCard';

type ProjectJSON = {
  key: string;
  i18n: {
    en: { headerTitle: string; title: string; description: string };
    es: { headerTitle: string; title: string; description: string };
  };
  mainImage: string;
  images: string[];
  tags: string[];
  redirectLink?: string;
};

function PixelSection(): JSX.Element {
  const lang = useLanguageStore((s) => s.language) as 'es' | 'en';

  return (
    <section className="relative w-full py-12 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(projectsData.projects as ProjectJSON[]).map((p) => {
            const t = p.i18n?.[lang] ?? p.i18n.en;
            return (
              <ProjectCard
                key={p.key}
                id={p.key}
                headerTitle={t.headerTitle}
                mainTitle={t.title}
                description={t.description}
                mainImage={p.mainImage}
                images={p.images}
                tags={p.tags}
                redirectLink={p.redirectLink}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}


export default PixelSection;
