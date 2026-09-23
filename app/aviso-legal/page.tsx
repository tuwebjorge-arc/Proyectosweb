import React from "react";
import { Container } from "@/components/ui/Container";

export default function AvisoLegalPage() {
  return (
    <div className="pt-28 pb-16 bg-brand-cream min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm border border-brand-sand">
          <h1 className="text-3xl font-serif text-brand-charcoal mb-8">Aviso Legal</h1>
          <div className="prose prose-stone">
            <p>[DATOS DE LA EMPRESA PENDIENTES DE CONFIGURACIÓN]</p>
            <p>La información legal completa estará disponible en la versión final de la página web cuando se disponga de todos los datos fiscales definitivos.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
