import Link from "next/link";
import { getService } from "../data/services";
import { artworks, categories, getCaseStudy } from "../data/work";
import { copy } from "../lib/copy";
import { getMedia } from "../lib/media";
import { absoluteUrl, artistName, contactEmail, localePath, mailto, personJsonLd, type Locale } from "../lib/site";
import { CanvasStage } from "./CanvasStage";
import { CopyEmail } from "./CopyEmail";
import { Footer } from "./Footer";
import { GalleryShell, type LightboxItem } from "./GalleryShell";
import { JsonLd } from "./JsonLd";
import { PixelArt } from "./PixelArt";
import { SiteHeader } from "./SiteHeader";
import { VideoFacade } from "./VideoFacade";

/** The cast standing on the canvas; each one is a door into the work it comes from. */
const cast = [
  { src: "/CharactersRunning/KNIGHT RUNNING.gif", key: "knight", slug: "castle-environment-mockup", mobile: true },
  { src: "/CharactersRunning/DIMITRIRUNNING.gif", key: "gunner", slug: "nuclear-dome-sci-fi-world", mobile: false },
  { src: "/CharactersRunning/WalkCycleBeams.gif", key: "miner", slug: undefined, mobile: false },
  { src: "/CharactersRunning/RATRUNNING.gif", key: "rat", slug: "rat-character-world-mockup", mobile: true },
] as const;

/** Music videos and the film intro, biggest audience first. */
const reelSlugs = ["minina-carre-spreen-music-video", "esa-noche-marcianeke-music-video", "zapping-rodi-garrido-film-intro", "esencia-lekays-music-video"];

function youtubeImage(id: string) {
  const entry = getMedia(`youtube/${id}`);
  return { src: entry.src, thumb: entry.thumb as string };
}

/** Tiles in the first (default) category that load eagerly. */
const EAGER_TILES = 3;

/** Tile edge per layout (px) and the grid gap beside it: 3 fixed columns, 3 fluid columns, 2 columns on phones. */
const LAYOUTS = { lg: { edge: 400, gap: 12 }, md: { edge: 300, gap: 8 }, sm: { edge: 170, gap: 6 } } as const;

/**
 * Pixel art never gets a fractional zoom: each tile picks a whole number, so
 * every art pixel stays square. To crop as little as possible it takes the
 * zoom below the one that fully covers the tile whenever that leaves at most
 * a 15% gap (filled with the art's own edge colours).
 */
const MAX_GAP = 0.15;

type Fit = { style: React.CSSProperties; horizontalGap: boolean };

/** Tile width and height for a layout; a wide tile spans two columns. */
function tileEdges(layout: keyof typeof LAYOUTS, wide: boolean) {
  const { edge, gap } = LAYOUTS[layout];
  return { w: wide ? edge * 2 + gap : edge, h: edge };
}

function pixelFit(nw: number, nh: number, { contain, wide, zoom, maxGap }: { contain: boolean; wide: boolean; zoom?: number; maxGap: number }): Fit {
  const pick = (layout: keyof typeof LAYOUTS) => {
    const { w, h } = tileEdges(layout, wide);
    if (contain) return Math.max(1, Math.floor(Math.min(w / nw, h / nh)));
    const cover = Math.max(w / nw, h / nh);
    const lower = Math.floor(cover);
    const fits = lower >= 1 && lower * nw >= w * (1 - maxGap) && lower * nh >= h * (1 - maxGap);
    return fits ? lower : Math.ceil(cover);
  };
  const lg = zoom ?? pick("lg");
  const { w } = tileEdges("lg", wide);
  return {
    style: { "--nw": nw, "--s-lg": lg, "--s-md": pick("md"), "--s-sm": pick("sm") } as React.CSSProperties,
    horizontalGap: nw * lg < w,
  };
}

/** Small characters: a whole-number zoom centred on the character, always covering the tile. */
function focusFit(nw: number, nh: number, { x, y, zoom }: { x: number; y: number; zoom: number }): Fit {
  const cover = (layout: keyof typeof LAYOUTS) => {
    const { w, h } = tileEdges(layout, false);
    return Math.ceil(Math.max(w / nw, h / nh));
  };
  const scaled = (layout: keyof typeof LAYOUTS) => Math.max(cover(layout), Math.round((zoom * LAYOUTS[layout].edge) / LAYOUTS.lg.edge));
  return {
    style: { "--nw": nw, "--nh": nh, "--fx": x, "--fy": y, "--s-lg": zoom, "--s-md": scaled("md"), "--s-sm": scaled("sm") } as React.CSSProperties,
    horizontalGap: false,
  };
}

/** Smooth illustrations have no pixel grid to protect: size the box so the crop is 15% lighter, never below "contain". */
function softFit(width: number, height: number, wide: boolean, maxGap: number): Fit {
  const aspect = wide ? 2 : 1; // tile width over height
  const cover = Math.max(aspect / width, 1 / height);
  const contain = Math.min(aspect / width, 1 / height);
  const scale = Math.max(cover * (1 - maxGap), contain);
  const bw = ((width * scale) / aspect) * 100;
  const bh = height * scale * 100;
  return { style: { "--bw": `${bw}%`, "--bh": `${bh}%` } as React.CSSProperties, horizontalGap: bw < 99.5 };
}

/** Continues the picture into the tile's gap with the colours of the edges it meets. */
function gapBackground(entry: ReturnType<typeof getMedia>, horizontalGap: boolean) {
  const { edge } = entry;
  if (!edge) return entry.bg;
  return horizontalGap ? `linear-gradient(to right, ${edge.l} 50%, ${edge.r} 50%)` : `linear-gradient(to bottom, ${edge.t} 50%, ${edge.b} 50%)`;
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const caseHref = (slug: string) => localePath(locale, `/work/${slug}`);
  const categoryLabel = Object.fromEntries(categories.map((category) => [category.id, category.label[locale]]));
  const galleryCategories = categories.filter((category) => artworks.some((artwork) => artwork.category === category.id));
  const firstCategory = galleryCategories[0]?.id;
  const eagerIds = new Set(artworks.filter((artwork) => artwork.category === firstCategory).slice(0, EAGER_TILES).map((artwork) => artwork.id));

  const lightboxItems: LightboxItem[] = artworks.map((artwork) => {
    const entry = getMedia(artwork.src);
    return {
      id: artwork.id,
      title: artwork.title[locale],
      category: artwork.category,
      categoryLabel: artwork.credit?.[locale] ?? categoryLabel[artwork.category],
      src: entry.src,
      webm: entry.webm,
      poster: entry.poster,
      video: entry.video,
      width: entry.width,
      height: entry.height,
      nativeWidth: entry.nativeWidth,
      nativeHeight: entry.nativeHeight,
      pixelated: entry.pixelated,
      bg: entry.bg,
      specs: entry.pixelated
        ? [
            entry.frames ? `${entry.frames} ${t.gallery.frames}` : "",
            entry.fps ? `${entry.fps} fps` : "",
            `${entry.nativeWidth}×${entry.nativeHeight} px ${t.gallery.native}`,
          ]
            .filter(Boolean)
            .join(" · ")
        : undefined,
      caseHref: artwork.project ? caseHref(artwork.project) : undefined,
    };
  });

  const gamesService = getService("game-pixel-art")!;
  const videosService = getService("pixel-art-music-videos")!;
  const reels = reelSlugs.map((slug) => getCaseStudy(slug)).filter((study) => study?.youtubeId);

  const runner = (item: (typeof cast)[number]) => {
    const className = `runner${item.mobile ? "" : " runner-wide"}`;
    // Native width drives an integer zoom in CSS.
    const style = { "--nw": getMedia(item.src).nativeWidth } as React.CSSProperties;
    return item.slug ? (
      <Link key={item.key} className={className} style={style} prefetch={false} href={caseHref(item.slug)} aria-label={t.hero.cast[item.key]} data-tip={t.hero.cast[item.key]}>
        <PixelArt src={item.src} alt="" eager />
      </Link>
    ) : (
      <span key={item.key} className={className} style={style} aria-hidden="true">
        <PixelArt src={item.src} alt="" eager />
      </span>
    );
  };

  return (
    <>
      <SiteHeader locale={locale} alternatePath={locale === "en" ? "/es" : "/"} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${absoluteUrl(localePath(locale, "/"))}#work`,
          name: `${artistName} — ${t.gallery.title}`,
          inLanguage: locale,
          about: { "@id": personJsonLd["@id"] },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: artworks.map((artwork, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "ImageObject",
                name: artwork.title[locale],
                description: artwork.credit?.[locale] ?? categoryLabel[artwork.category],
                contentUrl: absoluteUrl(getMedia(artwork.src).poster ?? getMedia(artwork.src).src),
                creator: { "@id": personJsonLd["@id"] },
                creditText: artistName,
                copyrightNotice: `© ${artistName}`,
                ...(artwork.project ? { url: absoluteUrl(caseHref(artwork.project)) } : {}),
              },
            })),
          },
        }}
      />

      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <CanvasStage file="imnotapan.aseprite" status={t.hero.status} label={t.hero.canvas}>
            <div className="cast">
              {cast.slice(0, 2).map(runner)}
              <Link className="cast-logo" prefetch={false} href={localePath(locale, "/about")} aria-label={t.hero.cast.logo}>
                <PixelArt src="/images/static/icon2.png" alt="" className="cast-logo-back" eager />
                <PixelArt src="/images/static/ICON.png" alt="" className="cast-logo-front" priority />
              </Link>
              {cast.slice(2).map(runner)}
            </div>

            <div className="intro-copy">
              <p className="kicker">{t.hero.kicker}</p>
              <h1 id="intro-title" className="intro-title">{t.hero.title}</h1>
              <p className="intro-lead">{t.hero.lead}</p>
            </div>
          </CanvasStage>
        </section>

        <section className="work gallery-wrap" id="work" aria-labelledby="work-title">
          <header className="work-head">
            <p className="kicker">{t.gallery.kicker}</p>
            <h2 id="work-title" className="work-title">{t.gallery.title}</h2>
            <Link className="section-link" href={localePath(locale, `/${gamesService.slug}`)}>{gamesService.name[locale]} →</Link>
          </header>
          <GalleryShell
            items={lightboxItems}
            filters={galleryCategories.map((category) => ({ id: category.id, label: category.label[locale] }))}
            labels={{ ...t.gallery, filter: t.filter }}
          >
            {artworks.map((artwork) => {
              const entry = getMedia(artwork.src);
              const href = artwork.project ? caseHref(artwork.project) : entry.src;
              const contain = artwork.fit === "contain";
              const wide = artwork.wide === true;
              // Illustration tiles always fill the whole cell, so that tab reads as one even grid.
              const maxGap = artwork.category === "illustration" ? 0 : MAX_GAP;
              const fit: Fit | undefined = contain
                ? undefined
                : artwork.focus && entry.pixelated
                  ? focusFit(entry.nativeWidth, entry.nativeHeight, artwork.focus)
                  : entry.pixelated
                  ? pixelFit(entry.nativeWidth, entry.nativeHeight, { contain, wide, zoom: artwork.zoom, maxGap })
                  : softFit(entry.width, entry.height, wide, maxGap);
              // Contained pieces keep their flat background; Haaland/Tiny Golf-style sheets also need their own zoom.
              const containFit = contain && entry.pixelated ? pixelFit(entry.nativeWidth, entry.nativeHeight, { contain, wide, zoom: artwork.zoom, maxGap }) : undefined;
              // Sprites stand on the floor of their frame: anchor them to the bottom.
              const anchor = artwork.focus ? " tile-focus" : artwork.category === "characters" && !contain ? " tile-floor" : "";
              return (
                <a
                  key={artwork.id}
                  className={`tile${wide ? " tile-wide" : ""}${entry.pixelated ? " tile-px" : ""}${contain ? " tile-contain" : ""}${anchor}${artwork.align === "right" ? " tile-right" : ""}`}
                  href={href}
                  data-id={artwork.id}
                  data-category={artwork.category}
                  style={{ background: artwork.bg ?? (fit ? gapBackground(entry, fit.horizontalGap) : entry.bg), ...(fit ?? containFit)?.style }}
                >
                  <PixelArt
                    src={artwork.src}
                    alt={`${artwork.title[locale]} — ${categoryLabel[artwork.category]}, ${t.byline}`}
                    variant="thumb"
                    sizes="(max-width: 720px) 50vw, 33vw"
                    eager={eagerIds.has(artwork.id)}
                  />
                  <span className="tile-meta">
                    <span className="tile-title">{artwork.title[locale]}</span>
                    {artwork.credit ? <span className="tile-cat">{artwork.credit[locale]}</span> : null}
                  </span>
                </a>
              );
            })}
          </GalleryShell>
        </section>

        <section className="animation" id="animation" aria-labelledby="animation-title">
          <header className="animation-head">
            <p className="kicker">{t.animation.kicker}</p>
            <h2 id="animation-title" className="animation-title">{t.animation.title}</h2>
            <Link className="section-link" href={localePath(locale, `/${videosService.slug}`)}>{videosService.name[locale]} →</Link>
          </header>
          <div className="reels">
            {reels.map((study) =>
              study?.youtubeId ? (
                <article key={study.slug} className="reel">
                  <div className="reel-bar">
                    <a href={caseHref(study.slug)} aria-label={`${t.animation.case}: ${study.title}`}>
                      <span className="canvas-dot" aria-hidden="true" />
                      {study.title}
                    </a>
                    {study.uploadDate ? <span className="reel-year">{new Date(study.uploadDate).getUTCFullYear()}</span> : null}
                  </div>
                  <VideoFacade id={study.youtubeId} title={study.title} playLabel={t.animation.play} image={youtubeImage(study.youtubeId)} />
                  <dl className="reel-info">
                    <div>
                      <dt>{t.animation.role}</dt>
                      <dd>
                        {study.role[locale]}
                        <span className="reel-did"> — {study.deliverables[locale].join(" · ")}</span>
                      </dd>
                    </div>
                    {study.stat ? (
                      <div>
                        <dt>{t.animation.impact}</dt>
                        <dd>
                          <strong className="reel-stat">{study.stat.value}</strong> {study.stat.label[locale]}
                          {study.reach ? <span className="reel-did"> — {study.reach[locale]}</span> : null}
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                </article>
              ) : null,
            )}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="kicker">{t.contact.kicker}</p>
            <h2 id="contact-title">{t.contact.title}</h2>
            <p className="contact-lead">{t.contact.lead}</p>
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
            <p className="hud-hint">{t.contact.hint}</p>
            <div className="hud-actions">
              <a className="button button-primary" href={mailto(t.contact.subject, t.contact.body)}>
                {t.contact.send} ▶
              </a>
              <CopyEmail label={t.contact.copy} copiedLabel={t.contact.copied} />
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
