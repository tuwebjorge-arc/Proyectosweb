import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhyUs } from "@/components/sections/WhyUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IntermediateCta } from "@/components/sections/IntermediateCta";

export const metadata: Metadata = {
  title: "Sobre AMW100 CARPENTRY | Filosofía y Oficio",
  description:
    "Conoce la filosofía de trabajo, compromiso con la madera noble y rigor constructivo de AMW100 CARPENTRY.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Header de la página */}
      <section className="py-12 md:py-16 bg-brand-cream border-b border-brand-border">
        <Container size="wide">
          <SectionHeading
            eyebrow="Oficio y precisión"
            title="Sobre AMW100 CARPENTRY"
            subtitle="Dedicación a la carpintería arquitectónica y las reformas de interiores con un enfoque centrado en la nobleza de los materiales y la exactitud en el detalle."
          />
        </Container>
      </section>

      {/* Manifiesto y Filosofía */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-wood">
                Manifiesto de taller
              </span>

              <h2 className="text-3xl sm:text-4xl font-light text-brand-charcoal tracking-tight leading-tight">
                Entendemos la madera como un material vivo que exige respeto, conocimiento y precisión.
              </h2>

              <div className="space-y-4 text-stone-600 font-light leading-relaxed">
                <p>
                  <strong>AMW100 CARPENTRY</strong> nace con la vocación de ofrecer un servicio integral donde conviven las técnicas artesanales de ensamblado y el diseño contemporáneo más depurado.
                </p>
                <p>
                  Cada encargo —desde un vestidor a medida hasta una reforma integral de vivienda— se concibe como un diálogo estrecho entre las necesidades del cliente y el potencial del espacio.
                </p>
                <p>
                  Trabajamos con maderas seleccionadas, cuidando los secados, la estabilidad dimensional de los tableros y la integración limpia de elementos técnicos, iluminación y herrajes.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-brand-stone/60 border border-brand-border">
                  <p className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">
                    Taller propio y montaje
                  </p>
                  <p className="text-xs text-stone-600 font-light mt-1">
                    Control directo de la fabricación y ajuste milimétrico en destino.
                  </p>
                </div>
                <div className="p-4 bg-brand-stone/60 border border-brand-border">
                  <p className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal">
                    Materiales certificados
                  </p>
                  <p className="text-xs text-stone-600 font-light mt-1">
                    Maderas nobles y herrajes garantizados para una durabilidad real.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-brand-border shadow-md bg-stone-100">
                <Image
                  src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?q=80&w=1200&auto=format&fit=crop"
                  alt="Taller y herramientas de carpintería"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pilares cualitativos */}
      <WhyUs />

      {/* Proceso */}
      <ProcessSection />

      {/* CTA Final */}
      <IntermediateCta />
    </div>
  );
}
