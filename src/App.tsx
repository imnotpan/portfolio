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

// ⬇️ importa las fuentes crudas
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

// ⬇️ Boot: registra Projects, Pixel y Designs en el store
function Boot(): JSX.Element | null {
  const register = useStoreOverview((s) => s.registerProjectsFromRaw);
  React.useEffect(() => {
    register((projectsData as any).projects ?? []);
    register((pixelData as any).projects ?? []);
    register((Designs as any).Designs ?? []);
    // console.log('IDs cargados:', Object.keys(useStoreOverview.getState().projectsById));
  }, [register]);
  return null;
}

function Landing(): JSX.Element {
  const isFullScreenOverviewActive = useStoreOverview((s) => s.isFullScreenOverviewActive);
  const topFunction = (): void => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div className="flex flex-col w-full">
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
      <AboutMe />
      <Services />

      <section id="projects" tabIndex={-1}>
        <Projects />
      </section>

<div className="relative z-10 bg-black text-white text-5xl sm:text-8xl text-center overflow-x-hidden overflow-y-hidden">
  <SocialMediaButton name={'CONTACT'} url={'mailto:imnotapan@gmail.com'} />
</div>

      <Footer />
    </div>
  );
}

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Boot />           {/* ⬅️ hidrata el store aquí */}
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/pixel/:id" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
