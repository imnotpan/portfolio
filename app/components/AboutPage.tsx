import Link from "next/link";
import { getCaseStudy } from "../data/work";
import { copy } from "../lib/copy";
import { absoluteUrl, contactEmail, localePath, mailto, personJsonLd, socialLinks, steamHayakuUrl, type Locale } from "../lib/site";
import { CopyEmail } from "./CopyEmail";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { PixelArt } from "./PixelArt";
import { SiteHeader } from "./SiteHeader";

/** Shipped, public work a studio can check, most relevant to game teams first. */
const creditSlugs = [
  "hayaku-island-of-darkness",
  "minina-carre-spreen-music-video",
  "esa-noche-marcianeke-music-video",
  "zapping-rodi-garrido-film-intro",
  "esencia-lekays-music-video",
];

const content = {
  en: {
    title: "Pixel artist and animator",
    lead: (
      <>
        I’m <strong>Kevin Medina</strong> (<strong>IMNOTAPAN</strong>), a freelance pixel artist from Chile. I make characters, worlds and animation for <strong>games, music videos and brands</strong>, from first sketch to engine-ready files.
      </>
    ),
    helpTitle: "I can help with",
    help: ["Character design & sprite animation", "Backgrounds, environments & tilesets", "Game mockups & pixel UI", "Music videos & social loops"],
    bioTitle: "Bio",
    bio: [
      <>
        I currently work as a <strong>background and tileset artist on <a href={steamHayakuUrl} target="_blank" rel="noopener noreferrer">Hayaku! Island of Darkness</a></strong>, an action game coming to Steam: modular tiles, parallax layers and props the team assembles in-engine.
      </>,
      <>
        My animation has been part of <strong>music videos and productions with more than 27 million combined views</strong>, for artists and creators such as Carre &amp; Spreen, Marcianeke, Le&apos;Kays and Rodi Garrido.
      </>,
      <>
        I studied <strong>Computer Engineering</strong>, so I’m comfortable on the technical side too: sprite sheets, naming, export settings and working inside a dev team’s pipeline.
      </>,
      <>I’m open to freelance and contract work with indie studios, agencies, brands and musicians, remotely from anywhere.</>,
    ],
    window: "profile.txt",
    facts: [
      ["Role", "Pixel artist & animator"],
      ["Based in", "Chile · remote worldwide"],
      ["Languages", "Spanish · English"],
      ["Tools", "Aseprite · Unity · GameMaker"],
      ["Education", "Computer Engineering"],
      ["Now", "Hayaku! Island of Darkness"],
    ],
    creditsKicker: "Track record",
    creditsTitle: "Selected credits.",
    cols: { project: "Project", role: "Role", result: "Result" },
    contactTitle: "Got a project?",
    contactLead: "Send me a short brief: what you need, a rough deadline and a few references.",
    cta: "Start a project",
    work: "See the work",
  },
  es: {
    title: "Artista de pixel art y animador",
    lead: (
      <>
        Soy <strong>Kevin Medina</strong> (<strong>IMNOTAPAN</strong>), artista de pixel art freelance desde Chile. Creo personajes, mundos y animación para <strong>videojuegos, videoclips y marcas</strong>, desde el primer boceto hasta archivos listos para el motor.
      </>
    ),
    helpTitle: "Puedo ayudarte con",
    help: ["Diseño de personajes y animación de sprites", "Fondos, escenarios y tilesets", "Mockups de juego e interfaz pixel", "Videoclips y loops para redes"],
    bioTitle: "Bio",
    bio: [
      <>
        Actualmente trabajo como <strong>artista de fondos y tilesets en <a href={steamHayakuUrl} target="_blank" rel="noopener noreferrer">Hayaku! Island of Darkness</a></strong>, un juego de acción que llegará a Steam: tiles modulares, capas de parallax y props que el equipo arma en el motor.
      </>,
      <>
        Mi animación ha sido parte de <strong>videoclips y producciones que suman más de 27 millones de reproducciones</strong>, para artistas y creadores como Carre &amp; Spreen, Marcianeke, Le&apos;Kays y Rodi Garrido.
      </>,
      <>
        Estudié <strong>Ingeniería Civil Informática</strong>, así que también me muevo bien en lo técnico: sprite sheets, nomenclatura, ajustes de exportación y trabajo dentro del pipeline de un equipo de desarrollo.
      </>,
      <>Estoy disponible para trabajos freelance y por contrato con estudios indie, agencias, marcas y músicos, en remoto desde cualquier lugar.</>,
    ],
    window: "perfil.txt",
    facts: [
      ["Rol", "Pixel artist y animador"],
      ["Desde", "Chile · remoto a todo el mundo"],
      ["Idiomas", "Español · Inglés"],
      ["Herramientas", "Aseprite · Unity · GameMaker"],
      ["Estudios", "Ingeniería Civil Informática"],
      ["Ahora", "Hayaku! Island of Darkness"],
    ],
    creditsKicker: "Trayectoria",
    creditsTitle: "Créditos destacados.",
    cols: { project: "Proyecto", role: "Rol", result: "Resultado" },
    contactTitle: "¿Tienes un proyecto?",
    contactLead: "Envíame un brief corto: qué necesitas, un plazo aproximado y algunas referencias.",
    cta: "Hablemos de tu proyecto",
    work: "Ver el trabajo",
  },
};

export function AboutPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const c = content[locale];
  const url = absoluteUrl(localePath(locale, "/about"));
  const credits = creditSlugs.map((slug) => getCaseStudy(slug)).filter((study) => study !== undefined);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url,
          inLanguage: locale,
          mainEntity: personJsonLd,
        }}
      />
      <SiteHeader locale={locale} alternatePath={localePath(locale === "en" ? "es" : "en", "/about")} />
      <main id="main" className="about">
        <section className="about-hero" aria-labelledby="about-title">
          <figure className="about-portrait hud-window">
            <figcaption className="hud-bar">
              <span>
                <span className="canvas-dot" aria-hidden="true" />
                kevin_medina.jpg
              </span>
              <span className="about-status">
                <span className="status-dot" aria-hidden="true" />
                {t.hero.status}
              </span>
            </figcaption>
            <div className="about-photo">
              <PixelArt src="/Yo.jpeg" alt={locale === "es" ? "Retrato de Kevin Medina" : "Portrait of Kevin Medina"} sizes="(max-width: 860px) 92vw, 440px" priority />
              <PixelArt src="/images/static/ICON.png" alt="" className="about-badge" />
            </div>
          </figure>

          <div className="about-intro">
            <p className="kicker">{t.about.kicker}</p>
            <h1 id="about-title">{c.title}</h1>
            <p className="about-lead">{c.lead}</p>
            <h2 className="about-label">{c.helpTitle}</h2>
            <ul className="about-help">
              {c.help.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="button-row">
              <a className="button button-primary" href={mailto(t.contact.subject, t.contact.body)}>{c.cta} ▶</a>
              <Link className="button button-ghost" href={`${localePath(locale, "/")}#work`}>{c.work}</Link>
            </div>
          </div>
        </section>

        <section className="about-band" aria-labelledby="about-bio">
          <div className="about-bio">
            <h2 id="about-bio" className="about-label">{c.bioTitle}</h2>
            {c.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="hud-window about-profile">
            <div className="hud-bar">
              <span>
                <span className="canvas-dot" aria-hidden="true" />
                {c.window}
              </span>
              <span aria-hidden="true">_ □ ×</span>
            </div>
            <h2 className="sr-only">{t.about.facts}</h2>
            <dl className="hud-fields about-facts">
              {c.facts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="about-credits" aria-labelledby="credits-title">
          <p className="kicker">{c.creditsKicker}</p>
          <h2 id="credits-title" className="about-section-title">{c.creditsTitle}</h2>
          <ol className="credits">
            <li className="credits-head" aria-hidden="true">
              <span>{c.cols.project}</span>
              <span>{c.cols.role}</span>
              <span>{c.cols.result}</span>
            </li>
            {credits.map((study) => (
              <li key={study.slug} className="credit">
                <span className="credit-project">
                  <Link href={localePath(locale, `/work/${study.slug}`)} prefetch={false}>{study.title}</Link>
                  <span className="credit-kind">
                    {study.kind[locale]}
                    {study.uploadDate ? ` · ${new Date(study.uploadDate).getUTCFullYear()}` : ""}
                  </span>
                </span>
                <span className="credit-role">
                  <span className="credit-label">{c.cols.role}: </span>
                  {study.role[locale]}
                </span>
                <span className="credit-result">
                  {study.stat ? (
                    <>
                      <strong>{study.stat.value}</strong> {study.stat.label[locale]}
                    </>
                  ) : study.link ? (
                    <a href={study.link.href} target="_blank" rel="noopener noreferrer">{study.link.label[locale]} ↗</a>
                  ) : null}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact about-contact" aria-labelledby="about-contact-title">
          <div className="contact-copy">
            <p className="kicker">{t.contact.kicker}</p>
            <h2 id="about-contact-title">{c.contactTitle}</h2>
            <p className="contact-lead">{c.contactLead}</p>
            <p className="contact-note">{t.contact.deliverables}</p>
          </div>
          <div className="hud-window">
            <div className="hud-bar">
              <span>
                <span className="canvas-dot" aria-hidden="true" />
                {t.contact.window}
              </span>
              <span aria-hidden="true">_ □ ×</span>
            </div>
            <dl className="hud-fields">
              <div>
                <dt>{t.contact.to}</dt>
                <dd>
                  <a href={mailto(t.contact.subject, t.contact.body)}>{contactEmail}</a>
                </dd>
              </div>
            </dl>
            <div className="hud-actions">
              <a className="button button-primary" href={mailto(t.contact.subject, t.contact.body)}>
                {t.contact.send} ▶
              </a>
              <CopyEmail label={t.contact.copy} copiedLabel={t.contact.copied} />
            </div>
            <p className="about-links">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer me">
                  {link.label} ↗
                </a>
              ))}
            </p>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
