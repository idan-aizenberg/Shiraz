import { getDictionary, isValidLocale } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { Services } from "@/components/sections/Services";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Divider } from "@/components/ui/Divider";
import { getAllProjects } from "@/sanity/lib/queries";
import { normalizeProject } from "@/sanity/lib/normalize";
import type { Locale } from "@/i18n/types";

export default async function HomePage({
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
    <>
      <Hero locale={locale as Locale} dict={dict} />
      <Divider className="max-w-7xl mx-auto px-6 md:px-12" />
      <SelectedProjects locale={locale as Locale} dict={dict} projects={projects} />
      <Services dict={dict} />
      <AboutTeaser locale={locale as Locale} dict={dict} />
      <FAQ dict={dict} />
      <ContactCTA locale={locale as Locale} dict={dict} />
    </>
  );
}
