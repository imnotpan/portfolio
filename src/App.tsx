// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import FullScreenOverview from './components/projects/FullScreenOverview';
import NavBar from './sections/NavBar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import SocialMediaButton from './components/home/SocialMediaButton';
import { useStoreOverview } from './store/StoreOverview';
import ProjectDetailPage from './pages/ProjectDetailPage';

import projectsData from './data/Projects.json';
import pixelData from './data/pixel.json';
import Designs from './data/Designs.json';

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const tryScroll = () => {
        const el = document.querySelector(hash);
        if (el) {
          (el as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
          (el as HTMLElement).focus?.({ preventScroll: true });
        } else {
          setTimeout(tryScroll, 50);
        }
      };
      requestAnimationFrame(tryScroll);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);
  return null;
}

function Boot(): JSX.Element | null {
  const register = useStoreOverview((s) => s.registerProjectsFromRaw);
  React.useEffect(() => {
    register((projectsData as any).projects ?? []);
    register((pixelData as any).projects ?? []);
    register((Designs as any).Designs ?? []);
  }, [register]);
  return null;
}
function Landing(): JSX.Element {
  const isFullScreenOverviewActive = useStoreOverview((s) => s.isFullScreenOverviewActive);
  const topFunction = (): void => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="flex flex-col w-full">
      {/* Botón UP con mix-blend para que siempre sea visible */}
      {!isFullScreenOverviewActive && (
        <div className="fixed mix-blend-difference z-[200] right-0 bottom-0 p-2 md:p-12 sm:scale-[1] scale-[0.7]">
          <button
            onClick={topFunction}
            className="font-bold mix-blend-difference p-5 rounded-full md:hover:zoom-buttom text-black bg-white"
          >
            <p>UP</p>
          </button>
        </div>
      )}

      {isFullScreenOverviewActive && <FullScreenOverview />}
      {!isFullScreenOverviewActive && <NavBar />}

      <Home />

      <section id="projects" tabIndex={-1}>
        <Projects />
      </section>

      <div className="relative z-10 bg-black text-white font-archivoblack tracking-tighter text-5xl sm:text-6xl text-center overflow-x-hidden overflow-y-hidden">
        <SocialMediaButton name={'CONTACT'} url={'mailto:imnotapan@gmail.com'} />
      </div>

      <Footer />
    </div>
  );
}
export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      {/* TEXTURA DE RUIDO (GRAIN OVERLAY) MEJORADA */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-[0.1]"
        style={{
          // Usamos baseFrequency alto (0.65) para grano fino y background-repeat para que no se estire
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px', // Esto fuerza a que el patrón sea pequeño y se repita
          backgroundRepeat: 'repeat',
        }}
      />

      <Boot />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/pixel/:id" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}