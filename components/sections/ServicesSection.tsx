import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-stone/60 border-b border-brand-border">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Especialidades"
            title="Servicios de carpintería y reforma integral"
            subtitle="Desarrollamos soluciones constructivas y de mobiliario a medida para viviendas particulares, estudios de arquitectura y espacios comerciales."
            className="mb-0"
          />

          <div className="mt-6 md:mt-0 shrink-0">
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-wood hover:text-brand-wood-dark font-semibold group"
            >
              <span>Ver todos los servicios</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border border-brand-border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-brand-wood/40"
            >
              <div>
                {/* Imagen del Servicio */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-light text-brand-charcoal group-hover:text-brand-wood transition-colors">
                    <Link href={`/servicios/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-stone-600 font-light leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Materiales y detalles */}
                  <div className="mt-4 pt-4 border-t border-brand-border/60">
                    <p className="text-[11px] uppercase tracking-wider text-brand-muted font-medium mb-2">
                      Materiales & soluciones:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.materials.slice(0, 3).map((mat, i) => (
                        <span
                          key={i}
                          className="text-[11px] bg-brand-stone text-stone-700 px-2 py-0.5 border border-brand-border/60"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón enlace inferior */}
              <div className="p-6 pt-0">
                <Link
                  href={`/servicios/${service.slug}`}
                  className="w-full py-2.5 px-4 bg-brand-stone/60 hover:bg-brand-wood hover:text-white text-brand-charcoal text-xs uppercase tracking-wider font-medium flex items-center justify-between transition-colors group/btn"
                >
                  <span>Explorar servicio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
