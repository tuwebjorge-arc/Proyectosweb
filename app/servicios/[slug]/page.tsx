import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, ArrowUpRight, Check, CheckCircle2 } from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Servicio no encontrado",
    };
  }

  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.shortDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Proyectos relacionados
  const relatedProjects = siteConfig.projects.slice(0, 2);

  return (
    <div className="pt-28 pb-16">
      {/* Breadcrumb & Volver */}
      <section className="py-6 bg-brand-cream border-b border-brand-border">
        <Container size="wide">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-brand-muted">
            <Link
              href="/servicios"
              className="hover:text-brand-wood transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Todos los servicios</span>
            </Link>
            <span>/</span>
            <span className="text-brand-charcoal font-medium">{service.title}</span>
          </div>
        </Container>
      </section>

      {/* Hero del Servicio */}
      <section className="py-12 md:py-20 bg-brand-cream">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="wood">Especialidad de carpintería</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-brand-charcoal tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed">
                {service.fullDescription}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button
                  href="/contacto"
                  variant="primary"
                  size="md"
                  className="gap-2 group"
                >
                  <span>Solicitar presupuesto para este servicio</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-brand-border shadow-md bg-stone-100">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Características & Materiales */}
      <section className="py-16 md:py-24 bg-brand-stone/50 border-y border-brand-border">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Beneficios */}
            <div className="bg-white p-8 border border-brand-border">
              <h3 className="text-lg font-normal text-brand-charcoal mb-4 pb-3 border-b border-brand-border">
                Ventajas y Valor Añadido
              </h3>
              <ul className="space-y-3 text-sm text-stone-600 font-light">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-wood shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soluciones que incluye */}
            <div className="bg-white p-8 border border-brand-border">
              <h3 className="text-lg font-normal text-brand-charcoal mb-4 pb-3 border-b border-brand-border">
                Elementos que fabricamos
              </h3>
              <ul className="space-y-3 text-sm text-stone-600 font-light">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brand-charcoal shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materiales */}
            <div className="bg-white p-8 border border-brand-border md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-normal text-brand-charcoal mb-4 pb-3 border-b border-brand-border">
                Materiales y Maderas Nobles
              </h3>
              <p className="text-xs text-brand-muted mb-4 font-light">
                Seleccionamos maderas certificadas y herrajes de marcas líderes del sector:
              </p>
              <div className="flex flex-wrap gap-2">
                {service.materials.map((mat, i) => (
                  <span
                    key={i}
                    className="text-xs bg-brand-cream text-brand-charcoal px-3 py-1.5 border border-brand-border font-medium"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Fases de trabajo de este servicio */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <Container size="wide">
          <SectionHeading
            eyebrow="Metodología específica"
            title="Fases de ejecución del servicio"
            subtitle="Garantizamos el control riguroso de cada hito desde la toma de mediciones hasta la entrega final en obra."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-brand-border flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-light text-brand-wood block mb-3">
                    0{idx + 1}
                  </span>
                  <h4 className="text-base font-normal text-brand-charcoal mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Proyectos relacionados */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-brand-stone/30 border-t border-brand-border">
          <Container size="wide">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-light text-brand-charcoal">
                  Proyectos relacionados
                </h3>
                <p className="text-sm text-brand-muted mt-1">
                  Muestras de ejecución vinculadas a este tipo de trabajos.
                </p>
              </div>

              <Link
                href="/proyectos"
                className="text-xs uppercase tracking-wider text-brand-wood font-medium inline-flex items-center gap-1 hover:text-brand-wood-dark"
              >
                <span>Ver catálogo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <div
                  key={p.id}
                  className="group bg-white border border-brand-border overflow-hidden"
                >
                  <div className="relative aspect-[16/9] w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-brand-wood uppercase tracking-wider font-semibold">
                        {p.categoryLabel}
                      </p>
                      <h4 className="text-lg font-light text-brand-charcoal mt-1">
                        <Link href={`/proyectos/${p.slug}`}>{p.title}</Link>
                      </h4>
                    </div>
                    <Link
                      href={`/proyectos/${p.slug}`}
                      className="p-2 bg-brand-stone hover:bg-brand-wood hover:text-white transition-colors text-brand-charcoal"
                      aria-label={`Ver proyecto ${p.title}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-16 bg-brand-charcoal text-brand-cream">
        <Container size="narrow" className="text-center">
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-4">
            ¿Quieres un presupuesto para {service.title.toLowerCase()}?
          </h3>
          <p className="text-sm text-stone-300 font-light mb-8 max-w-xl mx-auto">
            Explícanos tu idea y te facilitaremos un estudio técnico y económico adaptado a las medidas y necesidades de tu estancia.
          </p>
          <Button
            href="/contacto"
            variant="primary"
            size="lg"
            className="gap-2"
          >
            <span>Contactar con nosotros</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </Container>
      </section>
    </div>
  );
}
