import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contacto | Solicitar Presupuesto",
  description:
    "Ponte en contacto con AMW100 CARPENTRY para solicitar presupuesto o información técnica para tu proyecto de carpintería o reforma.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16">
      {/* Header de la página */}
      <section className="py-12 md:py-16 bg-brand-cream border-b border-brand-border">
        <Container size="wide">
          <SectionHeading
            eyebrow="Atención comercial & técnica"
            title="Contacto y Solicitud de Presupuesto"
            subtitle="Cuéntanos los detalles de tu proyecto. Estudiamos tus planos o especificaciones y te presentamos una propuesta ajustada a tus necesidades."
          />
        </Container>
      </section>

      {/* Sección principal de contacto y formulario */}
      <ContactSection />
    </div>
  );
}
