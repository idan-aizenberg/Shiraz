import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary, isValidLocale, locales } from "@/i18n/getDictionary";
import {
  getProjectBySlug as fetchProjectBySlug,
  getAllSlugs,
} from "@/sanity/lib/queries";
import { normalizeProject } from "@/sanity/lib/normalize";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { EditorialGallery } from "@/components/EditorialGallery";
import type { Locale } from "@/i18n/types";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const sanityProject = await fetchProjectBySlug(slug);
  if (!sanityProject) return {};
  const project = normalizeProject(sanityProject);
  return {
    title: `${project.title[locale as Locale]} \u2014 Shiraz Chen Azulay`,
    description: project.description[locale as Locale],
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();

  const sanityProject = await fetchProjectBySlug(slug);
  if (!sanityProject) notFound();

  const project = normalizeProject(sanityProject);
  const dict = await getDictionary(locale as Locale);
  const l = locale as Locale;

  return (
    <article className="pt-28 md:pt-36 pb-16 md:pb-24">
      <Container>
        {/* Back link */}
        <Link
          href={`/${locale}/projects`}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200 mb-10"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="rtl:rotate-180"
          >
            <path d="M10 3L5 8L10 13" />
          </svg>
          {dict.projects.backToProjects}
        </Link>

        {/* Title */}
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-text mb-4">
          {project.title[l]}
        </h1>

        {/* Meta row */}
        <p className="text-sm md:text-base text-muted tracking-wide mb-8">
          {project.location[l]} · {project.year} · {project.category[l]}
        </p>

        {/* Tags */}
        {project.tags[l]?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags[l].map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-wider uppercase text-muted border border-border rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <Divider className="mb-10" />

        {/* Description */}
        <p className="text-muted text-base md:text-lg leading-relaxed max-w-3xl mb-14">
          {project.description[l]}
        </p>

        {/* Editorial Gallery */}
        {project.imageUrls.length > 0 && (
          <EditorialGallery
            images={project.imageUrls}
            alt={project.title[l]}
          />
        )}

        {/* CTA Block */}
        <div className="mt-20 text-center">
          <Divider className="mb-16" />
          <h2 className="font-heading text-2xl md:text-3xl text-text mb-4">
            {dict.projects.interestedTitle}
          </h2>
          <p className="text-muted text-base leading-relaxed max-w-md mx-auto mb-8">
            {dict.projects.interestedText}
          </p>
          <Button href={`/${locale}/contact`} variant="primary">
            {dict.projects.interestedCta}
          </Button>
        </div>
      </Container>
    </article>
  );
}
