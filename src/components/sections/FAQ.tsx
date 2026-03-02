import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Accordion } from "@/components/ui/Accordion";
import type { Dictionary } from "@/i18n/types";

interface FAQProps {
  dict: Dictionary;
}

export function FAQ({ dict }: FAQProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle className="text-center [&>div]:mx-auto">{dict.faq.title}</SectionTitle>
        <Accordion items={dict.faq.items} />
      </Container>
    </section>
  );
}
