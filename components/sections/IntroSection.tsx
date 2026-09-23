"use client";

import { Container } from "@/components/ui/Container";
import { useLang } from "@/lib/i18n/LanguageContext";

export function IntroSection() {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-32 bg-brand-ivory">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-8">
            {t.intro.title}
          </h2>
          <p className="text-xl md:text-2xl text-brand-charcoal/80 font-light leading-relaxed">
            {t.intro.body}
          </p>
        </div>
      </Container>
    </section>
  );
}
