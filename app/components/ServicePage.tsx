import Link from "next/link";
import type { Metadata } from "next";
import { getCaseStudy } from "../data/work";
import type { Service } from "../data/services";
import { copy } from "../lib/copy";
import { getMedia } from "../lib/media";
import { absoluteUrl, localePath, mailto, pageMetadata, personJsonLd, siteName, type Locale } from "../lib/site";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { PixelArt } from "./PixelArt";
import { SiteHeader } from "./SiteHeader";
import { VideoFacade } from "./VideoFacade";

function youtubeImage(id: string) {
  const entry = getMedia(`youtube/${id}`);
  return { src: entry.src, thumb: entry.thumb as string };
}

export function serviceMetadata(service: Service, locale: Locale): Metadata {
  return pageMetadata({
    locale,
    path: `/${service.slug}`,
    title: service.title[locale],
    description: service.description[locale],
    // Each service reuses the card of its lead case.
    image: `/og/${service.cases[0]}.jpg`,
    imageAlt: `${service.name[locale]} — ${copy[locale].byline}`,
  });
}

export function ServicePage({ service, locale }: { service: Service; locale: Locale }) {
  const t = copy[locale];
  const path = `/${service.slug}`;
  const url = absoluteUrl(localePath(locale, path));
  const studies = service.cases.map((slug) => getCaseStudy(slug)).filter((study) => study !== undefined);
  const clients = [...new Set(studies.map((study) => study.client).filter(Boolean))];
  const lead = studies[0];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${url}#page`,
              url,
              name: service.name[locale],
              description: service.description[locale],
              inLanguage: locale,
              about: { "@id": personJsonLd["@id"] },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: studies.map((study, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: study.title,
                  url: absoluteUrl(localePath(locale, `/work/${study.slug}`)),
                })),
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: siteName, item: absoluteUrl(localePath(locale, "/")) },
                { "@type": "ListItem", position: 2, name: service.name[locale], item: url },
              ],
            },
            personJsonLd,
          ],
        }}
      />
      <SiteHeader locale={locale} alternatePath={localePath(locale === "en" ? "es" : "en", path)} />

      <main id="main" className="case service">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={`${localePath(locale, "/")}#work`}>← {t.caseStudy.back}</Link>
        </nav>

        <header className="case-head">
          <p className="kicker">{service.kicker[locale]}</p>
          <h1>{service.h1[locale]}</h1>
          <p className="case-summary">{service.lead[locale]}</p>
        </header>

        <div className="case-hero">
          {service.hero.youtubeId ? (
            <VideoFacade id={service.hero.youtubeId} title={lead?.title ?? service.name[locale]} playLabel={t.animation.play} image={youtubeImage(service.hero.youtubeId)} eager />
          ) : service.hero.image ? (
            <PixelArt src={service.hero.image} alt={`${lead?.title ?? service.name[locale]} — ${t.byline}`} sizes="(max-width: 1180px) 100vw, 1130px" priority />
          ) : null}
        </div>

        <div className="case-body">
          <div className="case-text">
            <h2 className="kicker">{t.service.how}</h2>
            {service.how[locale].map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <dl className="case-facts" aria-label={t.caseStudy.details}>
            <div>
              <dt>{t.service.makes}</dt>
              <dd>
                <ul>
                  {service.makes[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt>{t.service.formats}</dt>
              <dd>{service.formats[locale]}</dd>
            </div>
            {clients.length ? (
              <div>
                <dt>{t.service.clients}</dt>
                <dd>{clients.join(" · ")}</dd>
              </div>
            ) : null}
            <div>
              <dt>{t.caseStudy.tools}</dt>
              <dd>Aseprite</dd>
            </div>
          </dl>
        </div>

        <section className="case-gallery-wrap" aria-labelledby="stills-title">
          <h2 id="stills-title" className="sr-only">{t.caseStudy.gallery}</h2>
          <div className="case-gallery">
            {service.stills.map((src) => {
              const owner = studies.find((study) => study.cover === src || study.gallery.includes(src));
              return (
                <figure key={src} className="case-figure">
                  <PixelArt src={src} alt={`${owner?.title ?? service.name[locale]} — ${owner?.kind[locale] ?? service.name[locale]}, ${t.byline}`} sizes="(max-width: 560px) 100vw, 560px" />
                </figure>
              );
            })}
          </div>
        </section>

        <section className="case-cta" aria-labelledby="service-cta-title">
          <h2 id="service-cta-title">{t.caseStudy.cta}</h2>
          <a className="button button-primary" href={mailto(`${t.contact.subject} (${service.name[locale]})`, t.contact.body)}>
            {t.hero.primary} →
          </a>
        </section>

        <section className="case-more" aria-labelledby="projects-title">
          <h2 id="projects-title" className="kicker">{t.service.projects}</h2>
          <div className="more-grid">
            {studies.map((study) => (
              <Link key={study.slug} className="more-card" href={localePath(locale, `/work/${study.slug}`)}>
                {study.cover ? (
                  <PixelArt src={study.cover} alt="" variant="thumb" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={youtubeImage(study.youtubeId as string).thumb} alt="" width={640} height={360} loading="lazy" />
                )}
                <span>
                  <strong>{study.title}</strong>
                  {study.stat ? `${study.stat.value} ${study.stat.label[locale]}` : study.kind[locale]}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
