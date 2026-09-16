import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Información legal y condiciones generales de uso de AMW100 CARPENTRY.",
};

export default function LegalNoticePage() {
  const legalName = siteConfig.business.legalEntityName || siteConfig.name;
  const taxId = siteConfig.business.taxId || "[Pendiente de confirmación por el titular]";
  const address = siteConfig.business.address
    ? `${siteConfig.business.address}, ${siteConfig.business.city || ""}`
    : "[Domicilio social pendiente de confirmación]";
  const email = siteConfig.business.email || "[Email pendiente de confirmación]";

  return (
    <div className="pt-28 pb-16">
      <section className="py-12 bg-brand-cream border-b border-brand-border">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Términos legales"
            title="Aviso Legal"
            subtitle="En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE)."
          />
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container size="narrow">
          <div className="prose prose-stone max-w-none text-stone-700 text-sm sm:text-base leading-relaxed space-y-8">
            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                1. Datos Identificativos del Responsable
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li><strong>Denominación comercial:</strong> {siteConfig.name}</li>
                <li><strong>Titular / Razón Social:</strong> {legalName}</li>
                <li><strong>NIF / CIF:</strong> {taxId}</li>
                <li><strong>Domicilio:</strong> {address}</li>
                <li><strong>Email de contacto:</strong> {email}</li>
                <li><strong>Actividad:</strong> Carpintería a medida, reformas y trabajos de ebanistería.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                2. Objeto y Ámbito de Aplicación
              </h2>
              <p>
                El presente aviso legal regula el acceso, navegación y uso del sitio web de {siteConfig.name}. El acceso y utilización de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso, las Condiciones Generales de Uso aquí reflejadas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                3. Propiedad Intelectual e Industrial
              </h2>
              <p>
                {legalName} es titular o dispone de las licencias correspondientes sobre todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo: imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño).
              </p>
              <p className="mt-2">
                Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública de la totalidad o parte de los contenidos de esta página web con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización previa por escrito del titular.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                4. Exclusión de Garantías y Responsabilidad
              </h2>
              <p>
                {siteConfig.name} no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                5. Modificaciones
              </h2>
              <p>
                {siteConfig.name} se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                6. Legislación Aplicable y Jurisdicción
              </h2>
              <p>
                La relación entre {siteConfig.name} y el USUARIO se regirá por la normativa española vigente. Cualquier controversia se someterá a los Juzgados y Tribunales competentes conforme a la legislación de consumidores y usuarios aplicable.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
