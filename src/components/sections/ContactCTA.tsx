import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { Locale, Dictionary } from "@/i18n/types";

interface ContactCTAProps {
  locale: Locale;
  dict: Dictionary;
}

export function ContactCTA({ locale, dict }: ContactCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-bg2">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-text mb-4">
            {dict.contactCta.title}
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
            {dict.contactCta.text}
          </p>
          <Button href={`/${locale}/contact`} variant="primary">
            {dict.contactCta.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
