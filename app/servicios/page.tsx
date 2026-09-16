import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IntermediateCta } from "@/components/sections/IntermediateCta";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios de Carpintería y Reformas",
  description:
    "Descubre nuestra gama de servicios: carpintería a medida, reformas de interiores, cocinas, baños y revestimientos singulares en madera.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Header de la página */}
      <section className="py-12 md:py-16 bg-brand-cream border-b border-brand-border">
        <Container size="wide">
          <SectionHeading
            eyebrow="Especialidades constructivas"
            title="Nuestros Servicios"
            subtitle="Ofrecemos soluciones integrales de carpintería y reforma, uniendo el trabajo artesanal de taller con el rigor de la dirección de obra."
          />
        </Container>
      </section>

      {/* Listado detallado de servicios */}
      <section className="py-16 md:py-24 bg-brand-stone/30">
        <Container size="wide">
          <div className="space-y-20">
            {siteConfig.services.map((service, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="bg-white border border-brand-border p-6 sm:p-10 lg:p-12 shadow-xs"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Imagen */}
                    <div
                      className={`relative aspect-[16/10] w-full overflow-hidden bg-stone-100 border border-brand-border/60 ${
                        isEven ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"
                      }`}
                    >
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Contenido */}
                    <div
                      className={`space-y-6 ${
                        isEven ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-brand-wood uppercase">
                        <span>0{index + 1}</span>
                        <span className="w-4 h-[1px] bg-brand-wood" />
                        <span>Especialidad</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-light text-brand-charcoal tracking-tight">
                        {service.title}
                      </h2>

                      <p className="text-stone-600 font-light leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Ventajas / Características */}
                      <div className="space-y-2.5 pt-2">
                        <p className="text-xs uppercase tracking-wider text-brand-charcoal font-semibold">
                          Aspectos clave:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-600">
                          {service.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-brand-wood shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Materiales */}
                      <div className="pt-2">
                        <p className="text-xs uppercase tracking-wider text-brand-muted font-medium mb-2">
                          Materiales habituales:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.materials.map((mat, mIdx) => (
                            <span
                              key={mIdx}
                              className="text-xs bg-brand-stone text-stone-700 px-2.5 py-1 border border-brand-border/60"
                            >
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Botón a detalle o contacto */}
                      <div className="pt-4 flex flex-wrap gap-4">
                        <Button
                          href={`/servicios/${service.slug}`}
                          variant="primary"
                          size="sm"
                          className="gap-1.5 group"
                        >
                          <span>Ver proceso detallado</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Button>

                        <Button
                          href="/contacto"
                          variant="outline"
                          size="sm"
                        >
                          <span>Consultar presupuesto</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <IntermediateCta />
    </div>
  );
}
