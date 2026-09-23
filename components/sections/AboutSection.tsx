"use client";

import { Container } from "@/components/ui/Container";
import { useLang } from "@/lib/i18n/LanguageContext";

export function AboutSection() {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-32 bg-brand-ivory text-center">
      <Container>
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-wood text-sm uppercase tracking-[0.2em] mb-6 block">
            {t.about.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-10">
            {t.about.title}
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-brand-charcoal/80 font-light leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <p>{t.about.p4}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
