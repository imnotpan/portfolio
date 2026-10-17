import Link from "next/link";
import type { Metadata } from "next";
import { serviceFor } from "../data/services";
import { caseStudies, type CaseStudy } from "../data/work";
import { copy } from "../lib/copy";
import { getMedia } from "../lib/media";
import { absoluteUrl, localePath, mailto, pageMetadata, personJsonLd, siteName, type Locale } from "../lib/site";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { PixelArt } from "./PixelArt";
import { SiteHeader } from "./SiteHeader";
import { VideoFacade } from "./VideoFacade";

function ogImage(study: CaseStudy) {
  return `/og/${study.slug}.jpg`;
}

function youtubeImage(id: string) {
  const entry = getMedia(`youtube/${id}`);
  return { src: entry.src, thumb: entry.thumb as string };
}

/** Search snippet: the summary plus what was delivered, kept within ~160 characters. */
function caseDescription(study: CaseStudy, locale: Locale) {
  const summary = study.summary[locale];
  const withDeliverables = `${summary} ${copy[locale].service.deliverables}: ${study.deliverables[locale].join(", ").toLowerCase()}.`;
  return withDeliverables.length <= 160 ? withDeliverables : summary;
}

export function caseStudyMetadata(study: CaseStudy, locale: Locale): Metadata {
  const label = study.slug.includes("film-intro") ? (locale === "es" ? "Animación en pixel art" : "Pixel Art Animation") : copy[locale].caseLabel[study.category];
  return pageMetadata({
    locale,
    path: `/work/${study.slug}`,
    title: `${study.title} — ${label} | Kevin Medina`,
    description: caseDescription(study, locale),
    image: ogImage(study),
    imageAlt: `${study.title} — ${copy[locale].byline}`,
    type: "article",
  });
}

export function CaseStudyPage({ study, locale }: { study: CaseStudy; locale: Locale }) {
  const t = copy[locale];
  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const related = caseStudies
    .filter((item) => item.slug !== study.slug && item.slug !== next.slug && item.cover)
    .sort((a, b) => Number(b.category === study.category) - Number(a.category === study.category))
    .slice(0, 3);
  const path = `/work/${study.slug}`;
  const url = absoluteUrl(localePath(locale, path));
  const images = [study.cover, ...study.gallery].filter(Boolean).map((src) => absoluteUrl(getMedia(src).src));
  if (study.youtubeId) images.push(absoluteUrl(youtubeImage(study.youtubeId).src));
  const byline = t.byline;
  const service = serviceFor(study);
  const servicePath = service ? localePath(locale, `/${service.slug}`) : undefined;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              "@id": `${url}#work`,
              name: study.title,
              headline: study.title,
              description: study.summary[locale],
              genre: study.kind[locale],
              inLanguage: locale,
              url,
              image: images,
              ...(study.uploadDate ? { datePublished: study.uploadDate.slice(0, 10) } : {}),
              creator: { "@id": personJsonLd["@id"] },
              ...(study.client ? { sourceOrganization: { "@type": "Organization", name: study.client } } : {}),
              ...(study.youtubeId
                ? {
                    video: {
                      "@type": "VideoObject",
                      name: study.title,
                      description: study.summary[locale],
                      thumbnailUrl: absoluteUrl(youtubeImage(study.youtubeId).src),
                      embedUrl: `https://www.youtube.com/embed/${study.youtubeId}`,
                      ...(study.uploadDate ? { uploadDate: study.uploadDate } : {}),
                    },
                  }
                : {}),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: siteName, item: absoluteUrl(localePath(locale, "/")) },
                ...(service && servicePath ? [{ "@type": "ListItem", position: 2, name: service.name[locale], item: absoluteUrl(servicePath) }] : []),
                { "@type": "ListItem", position: service ? 3 : 2, name: study.title, item: url },
              ],
            },
            personJsonLd,
          ],
        }}
      />
      <SiteHeader locale={locale} alternatePath={localePath(locale === "en" ? "es" : "en", path)} />

      <main id="main" className="case">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={`${localePath(locale, "/")}#work`}>← {t.caseStudy.back}</Link>
          {service && servicePath ? (
            <>
              <span aria-hidden="true"> / </span>
              <Link href={servicePath}>{service.name[locale]}</Link>
            </>
          ) : null}
        </nav>

        <header className="case-head">
          <p className="kicker">{study.kind[locale]}</p>
          <h1>{study.title}</h1>
          <p className="case-summary">{study.summary[locale]}</p>
          {study.stat ? (
            <p className="case-stat">
              <strong>{study.stat.value}</strong> {study.stat.label[locale]}
            </p>
          ) : null}
        </header>

        <div className="case-hero">
          {study.youtubeId ? (
            <VideoFacade id={study.youtubeId} title={study.title} playLabel={t.animation.play} image={youtubeImage(study.youtubeId)} eager />
          ) : (
            <PixelArt src={study.cover} alt={`${study.title} — ${study.kind[locale]}, ${byline}`} sizes="(max-width: 1180px) 100vw, 1130px" priority />
          )}
        </div>

        <div className="case-body">
          <div className="case-text">
            <h2 className="kicker">{t.caseStudy.about}</h2>
            {study.body[locale].map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            {study.link ? (
              <p>
                <a className="button button-light" href={study.link.href} target="_blank" rel="noopener noreferrer">
                  {study.link.label[locale]} ↗
                </a>
              </p>
            ) : null}
          </div>
          <dl className="case-facts" aria-label={t.caseStudy.details}>
            {study.client ? (
              <div>
                <dt>{t.caseStudy.client}</dt>
                <dd>{study.client}</dd>
              </div>
            ) : null}
            {study.uploadDate ? (
              <div>
                <dt>{t.caseStudy.year}</dt>
                <dd>{study.uploadDate.slice(0, 4)}</dd>
              </div>
            ) : null}
            <div>
              <dt>{t.caseStudy.role}</dt>
              <dd>{study.role[locale]}</dd>
            </div>
            <div>
              <dt>{t.caseStudy.deliverables}</dt>
              <dd>
                <ul>
                  {study.deliverables[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt>{t.caseStudy.tools}</dt>
              <dd>{study.tools.join(" · ")}</dd>
            </div>
          </dl>
        </div>

        {study.youtubeId && study.cover ? (
          <figure className="case-figure">
            <PixelArt src={study.cover} alt={`${study.title} — key art, ${byline}`} sizes="(max-width: 1180px) 100vw, 1130px" />
          </figure>
        ) : null}

        {study.gallery.length ? (
          <section className="case-gallery-wrap" aria-labelledby="gallery-title">
          <h2 id="gallery-title" className="sr-only">{t.caseStudy.gallery}</h2>
          <div className="case-gallery">
            {study.gallery.map((src, position) => (
              <figure key={src} className="case-figure">
                <PixelArt src={src} alt={`${study.title} — ${study.kind[locale]} (${position + 1}), ${byline}`} sizes="(max-width: 560px) 100vw, 560px" />
              </figure>
            ))}
          </div>
          </section>
        ) : null}

        <section className="case-cta" aria-labelledby="case-cta-title">
          <h2 id="case-cta-title">{t.caseStudy.cta}</h2>
          <a className="button button-primary" href={mailto(`${t.contact.subject} (${study.title})`)}>
            {t.hero.primary} →
          </a>
        </section>

        <section className="case-more" aria-labelledby="more-title">
          <h2 id="more-title" className="kicker">{t.caseStudy.more}</h2>
          <div className="more-grid">
            {[next, ...related].map((item, position) => (
              <Link key={item.slug} className="more-card" href={localePath(locale, `/work/${item.slug}`)}>
                {item.cover ? (
                  <PixelArt src={item.cover} alt="" variant="thumb" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={youtubeImage(item.youtubeId as string).thumb} alt="" width={640} height={360} loading="lazy" />
                )}
                <span>
                  {position === 0 ? <em>{t.caseStudy.next} →</em> : null}
                  <strong>{item.title}</strong>
                  {item.kind[locale]}
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
