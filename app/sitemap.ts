import type { MetadataRoute } from "next";
import { services } from "./data/services";
import { caseStudies } from "./data/work";
import { getMedia } from "./lib/media";
import { absoluteUrl, localePath } from "./lib/site";

export const dynamic = "force-static";

function pair(path: string, extra: Partial<MetadataRoute.Sitemap[number]> = {}): MetadataRoute.Sitemap {
  const languages = { en: absoluteUrl(path), es: absoluteUrl(localePath("es", path)), "x-default": absoluteUrl(path) };
  return (["en", "es"] as const).map((locale) => ({
    url: absoluteUrl(localePath(locale, path)),
    alternates: { languages },
    ...extra,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pair("/", { priority: 1 }),
    ...services.flatMap((service) => pair(`/${service.slug}`, { priority: 0.9 })),
    ...pair("/about", { priority: 0.6 }),
    ...caseStudies.flatMap((study) =>
      pair(`/work/${study.slug}`, {
        priority: 0.8,
        images: [
          ...[study.cover, ...study.gallery].filter(Boolean).map((src) => absoluteUrl(getMedia(src).src)),
          ...(study.youtubeId ? [absoluteUrl(getMedia(`youtube/${study.youtubeId}`).src)] : []),
        ],
      }),
    ),
  ];
}
