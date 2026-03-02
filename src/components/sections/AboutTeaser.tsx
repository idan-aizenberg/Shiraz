import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { Locale, Dictionary } from "@/i18n/types";

interface AboutTeaserProps {
  locale: Locale;
  dict: Dictionary;
}

export function AboutTeaser({ locale, dict }: AboutTeaserProps) {
  return (
    <section id="about" className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-text mb-6">
            {dict.about.title}
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mb-8" />
          <div className="space-y-5 mb-10">
            {dict.about.text.split("\n\n").map((paragraph, idx) => (
              <p
                key={idx}
                className="text-muted text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <Button href={`/${locale}/contact`} variant="outline">
            {dict.about.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
