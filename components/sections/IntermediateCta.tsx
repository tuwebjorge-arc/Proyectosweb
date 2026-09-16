import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export function IntermediateCta() {
  return (
    <section className="relative py-20 md:py-24 bg-brand-charcoal text-brand-cream overflow-hidden border-b border-brand-charcoal/90">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2000&auto=format&fit=crop"
          alt="Taller de carpintería y materiales nobles"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-brand-charcoal/80" />
      </div>

      <Container size="narrow" className="relative z-10 text-center">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-wood-light mb-4">
          Comencemos tu espacio
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
          ¿Tienes un proyecto de carpintería o reforma en mente?
        </h2>

        <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          Analizamos tus necesidades constructivas, estudiamos el espacio y te planteamos una propuesta a medida sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contacto"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto gap-2 group"
          >
            <span>Solicitar presupuesto</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          <Button
            href="/contacto"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-white border-white/40 hover:bg-white hover:text-brand-charcoal"
          >
            <span>Hablar con {siteConfig.name}</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
