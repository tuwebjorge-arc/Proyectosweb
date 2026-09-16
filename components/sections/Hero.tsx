import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-charcoal text-brand-cream">
      {/* Imagen de fondo editorial de alta calidad */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Carpintería y reformas de interiores por AMW100 Carpentry"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/60 to-brand-charcoal/40" />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow / Slogan */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-xs border border-white/15 text-[11px] font-medium tracking-[0.25em] uppercase text-brand-cream mb-6">
            <span className="w-2 h-2 bg-brand-wood-light rounded-full" />
            <span>Carpintería de Autor & Reformas de Interiores</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08] mb-6">
            Transformamos espacios con <span className="font-normal italic text-brand-sand">precisión</span>, diseño y oficio.
          </h1>

          {/* Descripción / Propuesta de valor */}
          <p className="text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-2xl leading-relaxed mb-10">
            Especialistas en carpintería a medida, renovación de interiores y proyectos singulares en madera para viviendas y espacios comerciales con acabados de alto nivel.
          </p>

          {/* Acciones principales */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              href="/contacto"
              variant="primary"
              size="lg"
              className="gap-2 group"
            >
              <span>Solicitar presupuesto</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <Button
              href="/proyectos"
              variant="outline"
              size="lg"
              className="text-white border-white/30 hover:bg-white hover:text-brand-charcoal"
            >
              <span>Ver proyectos</span>
            </Button>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
          <div className="flex items-center gap-8 tracking-widest uppercase">
            <span>{siteConfig.name}</span>
            <span className="hidden sm:inline-block text-white/30">•</span>
            <span className="hidden sm:inline-block">Madera noble & arquitectura interior</span>
          </div>

          <Link
            href="#propuesta"
            className="inline-flex items-center gap-2 hover:text-white transition-colors focus-visible:outline-white"
            aria-label="Desplazarse hacia la siguiente sección"
          >
            <span className="tracking-widest uppercase text-[11px]">Descubrir</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
