import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ProjectCard";
import type { NormalizedProject } from "@/sanity/lib/normalize";
import type { Locale, Dictionary } from "@/i18n/types";

interface SelectedProjectsProps {
  locale: Locale;
  dict: Dictionary;
  projects: NormalizedProject[];
}

export function SelectedProjects({ locale, dict, projects }: SelectedProjectsProps) {
  const featured = projects.slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle>{dict.selectedProjects.title}</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {featured.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              locale={locale}
            />
          ))}
        </div>
        <div className="mt-12 md:mt-16 text-center">
          <Button href={`/${locale}/projects`} variant="outline">
            {dict.selectedProjects.viewAll}
          </Button>
        </div>
      </Container>
    </section>
  );
}
