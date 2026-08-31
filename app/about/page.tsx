"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const socialLinks = [
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/imnotapan/",
  },
  {
    label: "Twitter",
    icon: "twitter",
    href: "https://twitter.com/imnotapan/",
  },
];

function SocialIcon({ type }: { type: string }) {
  if (type === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="4" y="4" width="16" height="16" rx="1.5" ry="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M19.2 7.2c-.5.2-1.1.4-1.7.5.6-.4 1-1 1.2-1.8-.6.4-1.3.7-2 .8-.6-.6-1.4-1-2.3-1-1.8 0-3.2 1.5-3.2 3.2 0 .2 0 .5.1.7-2.7-.1-5.1-1.4-6.7-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.4-.4 0 1.6 1.1 3 2.7 3.3-.3.1-.6.1-.8.1-.2 0-.4 0-.6-.1.4 1.3 1.7 2.3 3.1 2.3-1.2.9-2.6 1.4-4.2 1.4H4c1.5 1 3.4 1.6 5.3 1.6 6.3 0 9.8-5.3 9.8-9.8v-.4c.7-.5 1.2-1 1.7-1.7-.6.3-1.1.5-1.7.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

type AboutPageProps = {
  locale?: "en" | "es";
};

export default function AboutPage({ locale = "en" }: AboutPageProps) {
  const isSpanish = locale === "es";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const homePath = isSpanish ? "/es" : "/";
  const aboutPath = isSpanish ? "/es/about" : "/about";

  return (
    <main className="portfolio-shell" lang={locale}>
      <header className="site-header">
        <Link className="site-logo" href={homePath} aria-label="Kevin Medina, aka IMNOTAPAN">
          <span className="site-logo-name">KEVIN MEDINA</span>
          <span className="site-logo-alias">aka IMNOTAPAN</span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="main-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="main-navigation"
          className={`site-nav${isMenuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <Link href={`${homePath}#work`} onClick={() => setIsMenuOpen(false)}>
            {isSpanish ? "TRABAJO" : "WORK"}
          </Link>
          <Link href={aboutPath} aria-current="page" onClick={() => setIsMenuOpen(false)}>
            {isSpanish ? "SOBRE MI" : "ABOUT"}
          </Link>
          <Link
            className="language-toggle"
            aria-label="Change language"
            href={isSpanish ? "/about" : "/es/about"}
            onClick={() => setIsMenuOpen(false)}
          >
            ES / EN
          </Link>
        </nav>
      </header>

      <section className="about-section about-page" aria-labelledby="about-title">
        <div className="about-media">
          <Image
            className="about-portrait"
            src="/Yo.jpeg"
            alt="Kevin Medina portrait"
            width={960}
            height={1280}
          />

          <nav className="about-socials" aria-label="About social links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="about-social-icon" aria-hidden="true">
                  <SocialIcon type={social.icon} />
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="about-copy">
          <h1 id="about-title">
            {isSpanish ? "ARTISTA DE PIXEL ART Y ANIMADOR." : "PIXEL ARTIST AND ANIMATOR."}
          </h1>
          <p>
            {isSpanish
              ? <><strong>Soy Kevin Medina</strong>, tambien conocido como <strong>IMNOTAPAN</strong>. Creo personajes, mundos y animaciones en pixel art para videojuegos, musica, marcas y proyectos digitales, con especial interes en construir visuales con personalidad y una identidad reconocible.</>
              : <><strong>I'm Kevin Medina</strong>, also known as <strong>IMNOTAPAN</strong>. I create pixel art characters, worlds and animation for games, music, brands and digital projects, with a strong focus on building visuals with personality and a recognizable identity.</>}
          </p>
          <p>
            {isSpanish
              ? <><strong>Mi trabajo abarca</strong> <strong>character design, animation, environments y visual development</strong>, desde las primeras exploraciones hasta la produccion final.</>
              : <><strong>My work spans</strong> <strong>character design, animation, environments and visual development</strong>, from early exploration through final production.</>}
          </p>
          <p>
            {isSpanish
              ? <><strong>A lo largo de distintos proyectos</strong>, mi trabajo ha formado parte de <strong>videoclips y producciones digitales que acumulan mas de 27 millones de visualizaciones</strong>, colaborando en piezas para artistas y creadores como <strong>Carre & Spreen, Marcianeke, Le'Kays y Rodi Garrido</strong>.</>
              : <><strong>Across different projects</strong>, my work has been part of <strong>music videos and digital productions with more than 27 million combined views</strong>, contributing to pieces for artists and creators such as <strong>Carre & Spreen, Marcianeke, Le'Kays and Rodi Garrido</strong>.</>}
          </p>
          <p>
            {isSpanish
              ? <><strong>Tambien tengo formacion en Ingenieria Civil Informatica</strong>, lo que me permite moverme comodamente entre el lado artistico y tecnico de una produccion, integrandome a pipelines y equipos de desarrollo.</>
              : <><strong>I also have a background in Computer Engineering</strong>, which lets me move comfortably between the artistic and technical sides of a production, integrating smoothly into pipelines and development teams.</>}
          </p>
          <p>
            {isSpanish
              ? <><strong>Actualmente trabajo como artista de fondos y tilesets en Hayaku! Island of Darkness</strong> y estoy abierto a colaborar con estudios, marcas, agencias y equipos creativos en nuevos proyectos.</>
              : <><strong>I currently work as a background and tileset artist on Hayaku! Island of Darkness</strong> and I am open to collaborating with studios, brands, agencies and creative teams on new projects.</>}
          </p>
          <p className="about-contact">
            {isSpanish
              ? <><strong>Contacto:</strong> <a href="mailto:imnotapan@gmail.com">imnotapan@gmail.com</a></>
              : <><strong>Contact:</strong> <a href="mailto:imnotapan@gmail.com">imnotapan@gmail.com</a></>}
          </p>
          <p className="about-contact">
            {isSpanish
              ? <>Disponible para proyectos freelance de pixel art, animación y arte para videojuegos. <a href="mailto:imnotapan@gmail.com?subject=Project%20inquiry">Inicia un proyecto</a>.</>
              : <>Available for freelance pixel art, animation and game art projects. <a href="mailto:imnotapan@gmail.com?subject=Project%20inquiry">Start a project</a>.</>}
          </p>
        </div>
      </section>
    </main>
  );
}
