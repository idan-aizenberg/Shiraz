import { getDictionary, isValidLocale } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { getAllProjects } from "@/sanity/lib/queries";
import { normalizeProject } from "@/sanity/lib/normalize";
import type { Locale } from "@/i18n/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return {
    title: `${dict.projects.title} — ${dict.meta.title}`,
    description: dict.meta.description,
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const sanityProjects = await getAllProjects();
  const projects = sanityProjects.map(normalizeProject);

  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24">
      <Container>
        <SectionTitle>{dict.projects.allProjects}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale as Locale}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
