"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLang } from "@/lib/i18n/LanguageContext";

export function RenovationSection() {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-32 bg-brand-cream relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
          alt="Interior renovation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-charcoal/60" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white py-16 md:py-24">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            {t.renovation.title}
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-white/90 font-light leading-relaxed">
            <p>{t.renovation.p1}</p>
            <p>{t.renovation.p2}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
