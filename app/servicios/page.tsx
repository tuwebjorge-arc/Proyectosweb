import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Servicios de Carpintería y Reformas",
  description:
    "Descubre nuestra gama de servicios: carpintería a medida, reformas de interiores, cocinas, baños y revestimientos singulares en madera.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-16 bg-brand-cream min-h-screen">
      <section className="py-12 md:py-16">
        <Container size="wide">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6">Nuestros Servicios</h1>
            <p className="text-lg text-brand-charcoal/70 font-light">
              Soluciones integrales de carpintería y reforma adaptadas a cada propiedad.
            </p>
          </div>

          <div className="space-y-24">
            {siteConfig.services.map((service, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full lg:w-1/2 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="w-full lg:w-1/2 space-y-6">
                    <span className="text-brand-wood font-serif italic text-xl">
                      {service.id}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal">
                      {service.title}
                    </h2>
                    <p className="text-lg text-brand-charcoal/80 font-light leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
