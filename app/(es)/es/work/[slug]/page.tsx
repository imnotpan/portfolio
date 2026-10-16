import { notFound } from "next/navigation";
import { CaseStudyPage, caseStudyMetadata } from "../../../../components/CaseStudyPage";
import { caseStudies, getCaseStudy } from "../../../../data/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/es/work/[slug]">) {
  const study = getCaseStudy((await params).slug);
  return study ? caseStudyMetadata(study, "es") : {};
}

export default async function Page({ params }: PageProps<"/es/work/[slug]">) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  return <CaseStudyPage study={study} locale="es" />;
}
