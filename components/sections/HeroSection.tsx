"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { useLang } from "@/lib/i18n/LanguageContext";

export function HeroSection() {
  const { t } = useLang();
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.gallery[0]}
          alt="AMW100 Carpentry"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-white/80 uppercase tracking-[0.2em] text-sm mb-6">
          {t.hero.subtitle}
        </p>
        <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-12 font-light">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/servicios"
            className="px-8 py-4 bg-white text-brand-charcoal font-medium hover:bg-brand-ivory transition-colors duration-300 uppercase text-sm tracking-wider"
          >
            {t.hero.cta1}
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 border border-white text-white font-medium hover:bg-white/10 transition-colors duration-300 uppercase text-sm tracking-wider"
          >
            {t.hero.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}
