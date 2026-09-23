"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useLang } from "@/lib/i18n/LanguageContext";

export function KitchenSection() {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-32 bg-brand-ivory overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-8 leading-tight">
              {t.kitchen.title}
            </h2>
            <div className="space-y-6 text-lg text-brand-charcoal/80 font-light leading-relaxed">
              <p>{t.kitchen.p1}</p>
              <p>{t.kitchen.p2}</p>
              <p>{t.kitchen.p3}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square md:aspect-[3/4] w-full">
              <Image
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop"
                alt="Bespoke kitchen premium design"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
