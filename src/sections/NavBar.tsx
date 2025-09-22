// src/layout/NavBar.tsx
import  { useEffect, useRef, useState, useCallback } from 'react';
import NavBarButton from '../components/navBar/NavBarButton';
import { useLanguageStore } from '../store/useLenguageStore';
import { dict } from '../i18n/dictionary';
import { Section } from '../types/section';

function NavBar(): JSX.Element {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const navLinkElsRef = useRef<NodeListOf<Element> | null>(null);
  const sectionElsRef = useRef<NodeListOf<Element> | null>(null);
  const currentSectionRef = useRef<Section>(currentSection);

  const language = useLanguageStore((s) => s.language);
  const setLanguage = useLanguageStore((s) => s.setLanguage);
  const t = dict[language];

  // Mantiene el valor actual en un ref para no recrear el handler
  useEffect(() => {
    currentSectionRef.current = currentSection;
  }, [currentSection]);

  useEffect(() => {
    navLinkElsRef.current = document.querySelectorAll('.nav__link');
    sectionElsRef.current = document.querySelectorAll('.section__page');
    setCurrentSection('home');
  }, []);

  const handleMouseScroll = useCallback((): void => {
    const y = window.scrollY;
    const bottomGuard = document.body.clientHeight - 100;

    if (y === 0) {
      setCurrentSection('home');
    } else if (y + window.innerHeight >= bottomGuard) {
      setCurrentSection('projects');
    } else {
      sectionElsRef.current?.forEach((sectionEl) => {
        const el = sectionEl as HTMLElement;
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setCurrentSection(el.id as Section);
        }
      });
    }

    // Actualiza .active
    if (navLinkElsRef.current) {
      navLinkElsRef.current.forEach((link) => link.classList.remove('active'));
      const current = Array.from(navLinkElsRef.current).find((link) =>
        (link as HTMLElement).id.includes(currentSectionRef.current)
      );
      current?.classList.add('active');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleMouseScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleMouseScroll);
  }, [handleMouseScroll]);

  return (
    <header className="fixed z-50 hidden md:block lg:block w-full">
      <nav className="bg-white flex flex-row">
        <a
          onClick={() => setCurrentSection('home')}
          className="nav__link"
          id={'#home'}
          href={'#home'}
        >
          <div className="mx-4 text-left justify-left text-sm font-archivoblack ml-2">
            {t.brand}
          </div>
        </a>

        <div className="flex justify-end w-full items-center">
          {/* Toggle idioma */}
 

          {/* Items traducidos */}
          <NavBarButton setCurrentSection={setCurrentSection} section="home"     label={t.sections.home} />
          <NavBarButton setCurrentSection={setCurrentSection} section="about"    label={t.sections.about} />
          <NavBarButton setCurrentSection={setCurrentSection} section="services" label={t.sections.services} />
          <NavBarButton setCurrentSection={setCurrentSection} section="projects" label={t.sections.projects} />
        <div className="mr-2 flex gap-1">
            <button
                className={`px-2 py-1 ${language === 'es' ? 'bg-black text-white' : 'bg-transparent'}`}
                onClick={() => setLanguage('es')}
            >
                ES
            </button>
            <span className="mx-1">/</span>
            <button
                className={`px-2 py-1 ${language === 'en' ? 'bg-black text-white' : 'bg-transparent'}`}
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
        </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;