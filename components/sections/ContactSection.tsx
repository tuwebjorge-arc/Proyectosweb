import React from "react";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export function ContactSection() {
  const hasPhone = Boolean(siteConfig.business.phone);
  const hasEmail = Boolean(siteConfig.business.email);
  const hasWhatsapp = Boolean(siteConfig.business.whatsapp);
  const hasAddress = Boolean(siteConfig.business.address || siteConfig.business.city);
  const hasHours = Boolean(siteConfig.business.hours);

  return (
    <section id="contacto" className="py-20 md:py-28 bg-brand-stone/40">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Columna Izquierda: Información de Contacto */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              eyebrow="Contacto directo"
              title="Hablemos de tu próximo proyecto"
              subtitle="Rellena el formulario con los detalles de tu reforma o trabajo de carpintería y te responderemos a la mayor brevedad."
              className="mb-8"
            />

            <div className="space-y-6 pt-2">
              {/* Teléfono */}
              {hasPhone && (
                <div className="flex items-start gap-4 p-4 bg-white border border-brand-border">
                  <div className="p-2.5 bg-brand-stone text-brand-wood shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand-muted font-semibold">
                      Teléfono
                    </p>
                    <a
                      href={`tel:${siteConfig.business.phone?.replace(/\s+/g, "")}`}
                      className="text-base text-brand-charcoal hover:text-brand-wood font-medium transition-colors"
                    >
                      {siteConfig.business.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Email */}
              {hasEmail && (
                <div className="flex items-start gap-4 p-4 bg-white border border-brand-border">
                  <div className="p-2.5 bg-brand-stone text-brand-wood shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand-muted font-semibold">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.business.email}`}
                      className="text-base text-brand-charcoal hover:text-brand-wood font-medium transition-colors"
                    >
                      {siteConfig.business.email}
                    </a>
                  </div>
                </div>
              )}

              {/* WhatsApp */}
              {hasWhatsapp && (
                <div className="flex items-start gap-4 p-4 bg-white border border-brand-border">
                  <div className="p-2.5 bg-brand-stone text-[#25D366] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand-muted font-semibold">
                      WhatsApp
                    </p>
                    <a
                      href={`https://wa.me/${siteConfig.business.whatsapp?.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-brand-charcoal hover:text-brand-wood font-medium transition-colors"
                    >
                      {siteConfig.business.whatsapp}
                    </a>
                  </div>
                </div>
              )}

              {/* Ubicación */}
              {hasAddress && (
                <div className="flex items-start gap-4 p-4 bg-white border border-brand-border">
                  <div className="p-2.5 bg-brand-stone text-brand-wood shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand-muted font-semibold">
                      Ubicación
                    </p>
                    <p className="text-sm text-brand-charcoal font-medium">
                      {siteConfig.business.address ? `${siteConfig.business.address}, ` : ""}
                      {siteConfig.business.city}
                      {siteConfig.business.postalCode ? ` (${siteConfig.business.postalCode})` : ""}
                    </p>
                  </div>
                </div>
              )}

              {/* Horario */}
              {hasHours && (
                <div className="flex items-start gap-4 p-4 bg-white border border-brand-border">
                  <div className="p-2.5 bg-brand-stone text-brand-wood shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand-muted font-semibold">
                      Horario de atención
                    </p>
                    <p className="text-sm text-brand-charcoal font-medium">
                      {siteConfig.business.hours}
                    </p>
                  </div>
                </div>
              )}

              {/* Aviso si aún no hay datos de contacto directo configurados */}
              {!hasPhone && !hasEmail && (
                <div className="p-6 bg-brand-stone border border-brand-border text-sm text-stone-600 font-light leading-relaxed">
                  <p className="font-medium text-brand-charcoal mb-1">
                    Atención personalizada
                  </p>
                  <p>
                    Recibimos todas las solicitudes de manera centralizada a través de nuestro formulario web para valorar planos, mediciones y requisitos antes del primer contacto.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
