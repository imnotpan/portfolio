import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { absoluteUrl } from "./lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1, alternates: { languages: { en: absoluteUrl("/"), es: absoluteUrl("/es"), "x-default": absoluteUrl("/") } } },
    { url: absoluteUrl("/es"), changeFrequency: "monthly", priority: 0.9, alternates: { languages: { en: absoluteUrl("/"), es: absoluteUrl("/es"), "x-default": absoluteUrl("/") } } },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.7, alternates: { languages: { en: absoluteUrl("/about"), es: absoluteUrl("/es/about"), "x-default": absoluteUrl("/about") } } },
    { url: absoluteUrl("/es/about"), changeFrequency: "monthly", priority: 0.6, alternates: { languages: { en: absoluteUrl("/about"), es: absoluteUrl("/es/about"), "x-default": absoluteUrl("/about") } } },
  ];

  return [
    ...localizedPages,
    ...projects.map((project) => ({
      url: absoluteUrl(`/work/${project.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [absoluteUrl(project.image)],
    })),
  ];
}
