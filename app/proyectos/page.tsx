import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGallery } from "@/components/gallery/ProjectGallery";
import { IntermediateCta } from "@/components/sections/IntermediateCta";

export const metadata: Metadata = {
  title: "Proyectos y Galería de Trabajos",
  description:
    "Explora nuestro catálogo de proyectos de carpintería a medida, reformas integrales, cocinas de autor y mobiliario singular.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Header de la Galería */}
      <section className="py-12 md:py-16 bg-brand-cream border-b border-brand-border">
        <Container size="wide">
          <SectionHeading
            eyebrow="Portfolio & Galería"
            title="Proyectos Realizados"
            subtitle="Una selección de intervenciones arquitectónicas, carpinterías a medida y reformas donde los materiales nobles y la precisión son protagonistas."
          />
        </Container>
      </section>

      {/* Grid interactivo con filtros y Lightbox */}
      <section className="py-16 md:py-24 bg-brand-stone/30">
        <Container size="wide">
          <ProjectGallery showFilters={true} />
        </Container>
      </section>

      {/* CTA Final */}
      <IntermediateCta />
    </div>
  );
}
