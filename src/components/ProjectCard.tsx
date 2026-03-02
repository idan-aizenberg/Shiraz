import Link from "next/link";
import Image from "next/image";
import type { NormalizedProject } from "@/sanity/lib/normalize";
import type { Locale } from "@/i18n/types";

interface ProjectCardProps {
  project: NormalizedProject;
  locale: Locale;
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-bg2 to-border">
        {project.coverImageUrl ? (
          <Image
            src={project.coverImageUrl}
            alt={project.title[locale]}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading text-muted/30 text-2xl tracking-[0.3em] uppercase">
              SCA
            </span>
          </div>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="font-heading text-lg md:text-xl text-text group-hover:text-accent transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:start-0 after:h-px after:w-0 group-hover:after:w-full after:bg-accent after:transition-all after:duration-300">
          {project.title[locale]}
        </h3>
        <p className="text-sm text-muted">
          {project.category[locale]} · {project.year}
        </p>
      </div>
    </Link>
  );
}
