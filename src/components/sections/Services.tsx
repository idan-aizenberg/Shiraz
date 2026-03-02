import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { OrganicCard } from "@/components/ui/OrganicCard";
import type { Dictionary } from "@/i18n/types";

interface ServicesProps {
  dict: Dictionary;
}

const serviceIcons = [
  // Thin elegant SVG icons as placeholders
  <svg key="design" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
    <rect x="4" y="4" width="24" height="24" rx="2" />
    <line x1="4" y1="12" x2="28" y2="12" />
    <line x1="12" y1="12" x2="12" y2="28" />
  </svg>,
  <svg key="renovation" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
    <path d="M16 4L28 14V28H4V14L16 4Z" />
    <rect x="12" y="18" width="8" height="10" />
  </svg>,
  <svg key="styling" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="16" cy="16" r="12" />
    <circle cx="16" cy="16" r="6" />
    <circle cx="16" cy="16" r="1" />
  </svg>,
];

export function Services({ dict }: ServicesProps) {
  return (
    <section className="py-16 md:py-24 bg-bg2/50">
      <Container>
        <SectionTitle>{dict.services.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {dict.services.items.map((service, idx) => (
            <OrganicCard key={idx}>
              <div className="text-accent mb-6">{serviceIcons[idx]}</div>
              <h3 className="font-heading text-xl md:text-2xl text-text mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </OrganicCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
