import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Información sobre el tratamiento de datos personales conforme al Reglamento General de Protección de Datos (RGPD) en AMW100 CARPENTRY.",
};

export default function PrivacyPage() {
  const legalName = siteConfig.business.legalEntityName || siteConfig.name;
  const taxId = siteConfig.business.taxId || "[Pendiente de confirmación por el titular]";
  const address = siteConfig.business.address
    ? `${siteConfig.business.address}, ${siteConfig.business.city || ""}`
    : "[Domicilio pendiente de confirmación]";
  const email = siteConfig.business.email || "[Email de contacto pendiente de confirmación]";

  return (
    <div className="pt-28 pb-16">
      <section className="py-12 bg-brand-cream border-b border-brand-border">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Protección de datos"
            title="Política de Privacidad"
            subtitle="Conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD)."
          />
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container size="narrow">
          <div className="prose prose-stone max-w-none text-stone-700 text-sm sm:text-base leading-relaxed space-y-8">
            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                1. Responsable del Tratamiento
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li><strong>Responsable:</strong> {legalName}</li>
                <li><strong>Nombre comercial:</strong> {siteConfig.name}</li>
                <li><strong>NIF / CIF:</strong> {taxId}</li>
                <li><strong>Dirección:</strong> {address}</li>
                <li><strong>Correo electrónico de privacidad:</strong> {email}</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                2. Finalidad del Tratamiento de los Datos
              </h2>
              <p>
                Tratamos la información facilitada por los usuarios con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 mt-2">
                <li>Gestionar y responder a las solicitudes de información, contacto o presupuesto enviadas a través del formulario web.</li>
                <li>Prestar los servicios de carpintería y reforma contratados y realizar su seguimiento técnico.</li>
                <li>Cumplir con las obligaciones legales y fiscales aplicables a la actividad.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                3. Legitimación para el Tratamiento
              </h2>
              <p>
                La base legal para el tratamiento de tus datos es el <strong>consentimiento expreso</strong> otorgado al marcar la casilla de aceptación en nuestro formulario de contacto y/o la ejecución de medidas precontractuales o contractuales a petición del usuario.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                4. Conservación de los Datos
              </h2>
              <p>
                Los datos personales proporcionados se conservarán durante el tiempo necesario para atender la solicitud formulada o durante los años necesarios para cumplir con las obligaciones legales correspondientes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                5. Destinatarios y Cesión de Datos
              </h2>
              <p>
                No se cederán datos a terceros salvo obligación legal expresa o cuando sea estrictamente necesario para la prestación del servicio (por ejemplo, proveedores de infraestructura tecnológica con acuerdos de confidencialidad y tratamiento de datos conforme al RGPD).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                6. Derechos del Usuario (ARCO+)
              </h2>
              <p>
                Cualquier persona tiene derecho a obtener confirmación sobre si en {siteConfig.name} estamos tratando datos personales que les conciernan o no.
              </p>
              <p className="mt-2">
                Puedes ejercer tus derechos de:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 mt-2">
                <li><strong>Acceso:</strong> conocer qué datos estamos tratando.</li>
                <li><strong>Rectificación:</strong> solicitar la modificación de datos inexactos.</li>
                <li><strong>Supresión:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
                <li><strong>Limitación del tratamiento y Oposición:</strong> en los casos legalmente previstos.</li>
                <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
              </ul>
              <p className="mt-3">
                Para ejercitar estos derechos, puedes remitir un escrito acompañado de copia de tu documento de identidad a la dirección de correo electrónico: <strong>{email}</strong>. Asimismo, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-brand-wood underline">www.aepd.es</a>).
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
