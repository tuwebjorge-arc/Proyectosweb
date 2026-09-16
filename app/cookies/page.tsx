import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información detallada sobre el uso de cookies y tecnologías de almacenamiento local en AMW100 CARPENTRY.",
};

export default function CookiesPolicyPage() {
  return (
    <div className="pt-28 pb-16">
      <section className="py-12 bg-brand-cream border-b border-brand-border">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Transparencia"
            title="Política de Cookies"
            subtitle="Información sobre las cookies técnicas y de rendimiento empleadas en este sitio web conforme a la normativa europea e-Privacy y la AEPD."
          />
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container size="narrow">
          <div className="prose prose-stone max-w-none text-stone-700 text-sm sm:text-base leading-relaxed space-y-8">
            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                1. ¿Qué es una Cookie?
              </h2>
              <p>
                Una cookie es un pequeño fichero de texto que un sitio web almacena en el navegador del usuario al visitarlo. Su función es facilitar la navegación, recordar preferencias de sesión y asegurar el correcto funcionamiento técnico de las páginas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                2. Tipos de Cookies Utilizadas en este Sitio Web
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-brand-stone/60 border border-brand-border">
                  <h3 className="font-semibold text-brand-charcoal text-sm">
                    A. Cookies Técnicas y Estrictamente Necesarias (Exentas de consentimiento)
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Son aquellas imprescindibles para permitir la navegación a través de la web, la seguridad en la transmisión de datos y el correcto funcionamiento del formulario de solicitud de presupuesto.
                  </p>
                </div>

                <div className="p-4 bg-brand-stone/60 border border-brand-border">
                  <h3 className="font-semibold text-brand-charcoal text-sm">
                    B. Almacenamiento de Preferencias de Consentimiento
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Utilizamos una clave de almacenamiento local (<code>amw100_cookie_consent</code>) para recordar si has aceptado o rechazado la configuración de cookies y no volver a mostrar el aviso en cada visita.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                3. Cómo Gestionar o Desactivar Cookies en tu Navegador
              </h2>
              <p>
                Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador web:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 mt-2">
                <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
                <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad &amp; Seguridad &gt; Cookies y datos del sitio.</li>
                <li><strong>Apple Safari:</strong> Preferencias &gt; Privacidad.</li>
                <li><strong>Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos del sitio.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-brand-charcoal mb-3">
                4. Actualización de la Política de Cookies
              </h2>
              <p>
                {siteConfig.name} puede modificar esta Política de Cookies en función de nuevas exigencias legislativas o reglamentarias. Recomendamos revisar esta página periódicamente.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
