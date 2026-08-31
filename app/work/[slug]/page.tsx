import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "../../data/projects";
import { defaultOgImage, siteName } from "../../lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const title = `${project.title} | Pixel Art Project — ${siteName}`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${project.slug}`,
      title,
      description: project.description,
      images: [{ url: project.image, alt: `Pixel art project: ${project.title}` }],
    },
    twitter: { card: "summary_large_image", images: [project.image || defaultOgImage] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="portfolio-shell project-page">
      <header className="site-header">
        <Link className="site-logo" href="/" aria-label="IMNOTAPAN home">
          <span className="site-logo-name">KEVIN MEDINA</span>
          <span className="site-logo-alias">aka IMNOTAPAN</span>
        </Link>
        <nav className="site-nav project-nav" aria-label="Project navigation">
          <Link href="/#work">WORK</Link>
          <Link href="/about">ABOUT</Link>
        </nav>
      </header>

      <article className="project-page-content">
        <p className="project-view-kicker">Selected pixel art project</p>
        <h1>{project.title}</h1>
        <p className="project-page-role">Role: Pixel Artist &amp; Animator</p>
        <p>{project.description}</p>
        <p className="project-page-services"><strong>Services:</strong> {project.services.join(" / ")}</p>
        <Image
          className="project-page-image"
          src={project.image}
          alt={`Pixel art project: ${project.title}`}
          width={project.width}
          height={project.height}
          sizes="(max-width: 760px) calc(100vw - 40px), 860px"
          unoptimized
        />
        <section className="project-page-cta" aria-labelledby="project-contact-title">
          <h2 id="project-contact-title">Need pixel art for your project?</h2>
          <p>Available for freelance pixel art, animation and game art projects.</p>
          <a href="mailto:imnotapan@gmail.com?subject=Project%20inquiry">Start a project</a>
        </section>
      </article>
    </main>
  );
}
