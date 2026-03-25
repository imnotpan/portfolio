// src/components/MyInfo.tsx
import { Helmet } from 'react-helmet-async';
import SocialMediaButton from './SocialMediaButton';
import Avatar from '../../assets/Avatar.svg';
import LittleResume from './LittleResume';
import { useLanguageStore } from '../../store/useLenguageStore'; // tu store de idioma

type Lang = 'es' | 'en';

const dict: Record<Lang, {
  title: string;
  description: string;
  role: string;
  altAvatar: string;
  social: { twitter: string; instagram: string; github: string; email: string; };
}> = {
  es: {
    title: 'imnotapan — Technical Pixel Artist & Creative Developer',
    description: 'Portafolio de Kevin Medina (imnotapan), Technical Pixel Artist. +25M de vistas creando experiencias visuales, pixel art y advergaming de alto impacto.',
    role: 'Technical Pixel Artist & Creative Developer',
    altAvatar: 'Avatar de imnotapan (Kevin Medina)',
    social: { twitter: '> Twitter', instagram: '> Instagram', github: '> Github', email: '> Email' },
  },
  en: {
    title: 'imnotapan — Technical Pixel Artist & Creative Developer',
    description: 'Portfolio of Kevin Medina (imnotapan), Technical Pixel Artist. +25M views creating high-impact visual experiences, pixel art, and advergaming.',
    role: 'Technical Pixel Artist & Creative Developer',
    altAvatar: 'Avatar of imnotapan (Kevin Medina)',
    social: { twitter: '> Twitter', instagram: '> Instagram', github: '> Github', email: '> Email' },
  },
};

function MyInfo(): JSX.Element {
  const language = useLanguageStore(s => s.language) as Lang;
  const t = dict[language];

  const sameAs = [
    'https://twitter.com/imnotapan',
    'https://www.instagram.com/imnotapan/',
    'https://github.com/imnotpan',
    'mailto:imnotapan@gmail.com',
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kevin Medina',
    alternateName: 'imnotapan',
    jobTitle: t.role,
    url: 'https://imnotapan.com', // pon tu dominio si ya lo tienes
    sameAs,
  };

  return (
    <>
      {/* SEO META */}
      <Helmet>
        <html lang={language} />
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:site_name" content="imnotapan" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t.title} />
        <meta name="twitter:description" content={t.description} />
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* CONTENIDO VISIBLE */}
      <section
        className="absolute flex bottom-0 z-10 w-full justify-center"
        aria-label={language === 'es' ? 'Información principal' : 'Hero information'}
      >
        <div className="flex w-full justify-center lg:ml-64 md:ml-64 ml-16">
          <img
            className="lg:size-[50vh] md:size-[45vh] max-w-[50vh] translate-y-[10px]"
            src={Avatar}
            alt={t.altAvatar}
            width={600}
            height={600}
            loading="eager"
          />

          <div>
            {/* Encabezado SEO semántico */}
            <header className="sr-only">
              <h1>imnotapan — {t.role}</h1>
              <p>{t.description}</p>
            </header>

            <div className="hidden md:block">
              <LittleResume />
            </div>

            <hr className="border-gray-800 my-2" />

            {/* Socials */}
            <nav
              // Cambiamos a text-white para que resalte en tu fondo
              className="relative z-50 mt-4 hidden md:flex flex-col text-white"
              aria-label={language === 'es' ? 'Redes sociales' : 'Social links'}
            >
              <SocialMediaButton name={t.social.twitter}   url="https://twitter.com/imnotapan" target="_blank" />
              <SocialMediaButton name={t.social.instagram} url="https://www.instagram.com/imnotapan/"  target="_blank" />
              <SocialMediaButton name={t.social.github}    url="https://github.com/imnotpan" target="_blank" />
              <SocialMediaButton name={t.social.email}     url="mailto:imnotapan@gmail.com" />
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyInfo;