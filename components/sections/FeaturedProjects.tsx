import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = siteConfig.projects.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-brand-cream border-b border-brand-border">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Portfolio seleccionado"
            title="Proyectos que hablan por sí mismos"
            subtitle="Una muestra de trabajos de carpintería personalizada, reformas residenciales y soluciones de mobiliario singular."
            className="mb-0"
          />

          <div className="mt-6 md:mt-0 shrink-0">
            <Button
              href="/proyectos"
              variant="outline"
              size="md"
              className="group gap-2"
            >
              <span>Ver todos los proyectos</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </div>

        {/* Layout Editorial de Proyectos Destacados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featured.map((project, idx) => (
            <article
              key={project.id}
              className={`group flex flex-col justify-between bg-white border border-brand-border overflow-hidden transition-all duration-300 hover:shadow-xl ${
                idx === 0 ? "md:col-span-2 lg:grid lg:grid-cols-12 lg:gap-8 items-center" : ""
              }`}
            >
              {/* Imagen */}
              <div
                className={`relative overflow-hidden bg-stone-200 ${
                  idx === 0
                    ? "lg:col-span-7 aspect-[16/10] w-full"
                    : "aspect-[16/10] w-full"
                }`}
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes={idx === 0 ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="dark">{project.categoryLabel}</Badge>
                </div>
              </div>

              {/* Contenido */}
              <div
                className={`p-6 sm:p-8 flex flex-col justify-between ${
                  idx === 0 ? "lg:col-span-5" : ""
                }`}
              >
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest text-brand-wood font-medium">
                    {project.materials?.[0] || "Solución personalizada"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-brand-charcoal tracking-tight group-hover:text-brand-wood transition-colors">
                    <Link href={`/proyectos/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-border/60 flex items-center justify-between">
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-charcoal group-hover:text-brand-wood font-semibold"
                  >
                    <span>Ver detalle del proyecto</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
