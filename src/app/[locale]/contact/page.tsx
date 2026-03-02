import { getDictionary, isValidLocale } from "@/i18n/getDictionary";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Divider } from "@/components/ui/Divider";
import { ContactForm } from "@/components/ContactForm";
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
    title: `${dict.contact.title} — ${dict.meta.title}`,
    description: dict.meta.description,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24">
      <Container>
        <SectionTitle>{dict.contact.title}</SectionTitle>
        <p className="text-muted text-base md:text-lg leading-relaxed mb-12">
          {dict.contact.subtitle}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm dict={dict} />
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="lg:ps-8 lg:border-s border-border">
              <h3 className="font-heading text-xl text-text mb-6">
                {dict.contact.info.title}
              </h3>
              <div className="text-sm text-muted">
                <div className="py-4">
                  <a
                    href={`mailto:${dict.contact.info.email}`}
                    className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 4L12 13L2 4" />
                    </svg>
                    {dict.contact.info.email}
                  </a>
                </div>
                <Divider />
                <div className="py-4">
                  <a
                    href={`tel:${dict.contact.info.phone.replace(/[\s-]/g, "")}`}
                    className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    {dict.contact.info.phone}
                  </a>
                </div>
                <Divider />
                <div className="py-4">
                  <a
                    href="https://www.instagram.com/shirazazulay/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-accent transition-colors duration-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                    {dict.contact.info.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
