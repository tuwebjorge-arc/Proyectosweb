import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    };
  }

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = siteConfig.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Otros proyectos para navegar
  const otherProjects = siteConfig.projects
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  return (
    <div className="pt-28 pb-16">
      {/* Breadcrumbs */}
      <section className="py-6 bg-brand-cream border-b border-brand-border">
        <Container size="wide">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-brand-muted">
            <Link
              href="/proyectos"
              className="hover:text-brand-wood transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Todos los proyectos</span>
            </Link>
            <span>/</span>
            <span className="text-brand-charcoal font-medium">{project.title}</span>
          </div>
        </Container>
      </section>

      {/* Hero del Proyecto */}
      <section className="py-12 md:py-16 bg-brand-cream">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="wood">{project.categoryLabel}</Badge>
              {project.location && (
                <span className="text-xs text-brand-muted uppercase tracking-wider">
                  {project.location}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
              {project.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Imagen Principal de Portada */}
      <section className="pb-16 bg-brand-cream">
        <Container size="wide">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-brand-border shadow-lg bg-stone-100">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Especificaciones y Memoria del Proyecto */}
      <section className="py-16 bg-brand-stone/40 border-y border-brand-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Memoria técnica */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-2xl font-light text-brand-charcoal">
                Memoria y concepto del proyecto
              </h2>
              <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
                {project.fullStory || project.description}
              </p>

              {project.scope && project.scope.length > 0 && (
                <div className="pt-6">
                  <h3 className="text-sm uppercase tracking-wider text-brand-charcoal font-semibold mb-4">
                    Alcance de los trabajos ejecutados:
                  </h3>
                  <ul className="space-y-3 text-sm text-stone-600 font-light">
                    {project.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-wood shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Ficha técnica lateral */}
            <div className="lg:col-span-4 bg-white p-8 border border-brand-border h-fit space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-brand-charcoal pb-3 border-b border-brand-border">
                Ficha Técnica
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-wider">Categoría</p>
                  <p className="font-medium text-brand-charcoal mt-0.5">{project.categoryLabel}</p>
                </div>

                {project.materials && (
                  <div>
                    <p className="text-brand-muted text-xs uppercase tracking-wider">Materiales clave</p>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {project.materials.map((m, i) => (
                        <span key={i} className="text-xs bg-brand-stone text-brand-charcoal px-2 py-0.5 border border-brand-border/60">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-brand-muted text-xs uppercase tracking-wider">Ejecución</p>
                  <p className="font-medium text-brand-charcoal mt-0.5">AMW100 CARPENTRY</p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border">
                <Button
                  href="/contacto"
                  variant="primary"
                  size="sm"
                  className="w-full gap-2"
                >
                  <span>Consultar proyecto similar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Galería adicional del proyecto */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="py-16 md:py-24 bg-brand-cream">
          <Container size="wide">
            <h3 className="text-2xl font-light text-brand-charcoal mb-8">
              Galería de detalles y acabados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.slice(1).map((img, i) => (
                <div key={i} className="bg-white border border-brand-border overflow-hidden">
                  <div className="relative aspect-[4/3] w-full bg-stone-100">
                    <Image
                      src={img.url}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {img.caption && (
                    <div className="p-4 bg-brand-stone/30 border-t border-brand-border text-xs text-stone-600 font-light">
                      {img.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Otros proyectos */}
      {otherProjects.length > 0 && (
        <section className="py-16 bg-brand-stone/30 border-t border-brand-border">
          <Container size="wide">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-light text-brand-charcoal">
                Otros proyectos destacados
              </h3>
              <Link
                href="/proyectos"
                className="text-xs uppercase tracking-wider text-brand-wood font-medium inline-flex items-center gap-1 hover:text-brand-wood-dark"
              >
                <span>Ver todos</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((op) => (
                <Link
                  key={op.id}
                  href={`/proyectos/${op.slug}`}
                  className="group bg-white border border-brand-border overflow-hidden flex flex-col hover:border-brand-wood/50 transition-colors"
                >
                  <div className="relative aspect-[16/9] w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={op.coverImage}
                      alt={op.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-brand-wood uppercase tracking-wider font-semibold">
                        {op.categoryLabel}
                      </span>
                      <h4 className="text-base font-light text-brand-charcoal mt-1 group-hover:text-brand-wood transition-colors">
                        {op.title}
                      </h4>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-brand-wood" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
