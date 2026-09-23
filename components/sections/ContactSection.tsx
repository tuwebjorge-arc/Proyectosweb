"use client";

import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { useLang } from "@/lib/i18n/LanguageContext";

export function ContactSection() {
  const { t } = useLang();
  return (
    <section id="contacto" className="py-24 md:py-32 bg-brand-charcoal text-brand-ivory">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">{t.contact.heading}</h2>
            <p className="text-lg text-brand-ivory/80 font-light max-w-md leading-relaxed">
              {t.contact.subheading}
            </p>

            <div className="pt-8 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-brand-wood-light mb-2">
                  {t.contact.locationLabel}
                </p>
                <p className="text-xl font-light">
                  {siteConfig.business.city} · {siteConfig.business.region}
                </p>
              </div>

              {(siteConfig.business.phone || siteConfig.business.whatsapp) && (
                <div>
                  <p className="text-sm uppercase tracking-widest text-brand-wood-light mb-2">
                    {t.contact.phoneLabel}
                  </p>
                  <a
                    href={`https://wa.me/${siteConfig.business.whatsapp}`}
                    className="text-xl font-light hover:text-brand-wood transition-colors"
                  >
                    {siteConfig.business.phone}
                  </a>
                </div>
              )}

              {siteConfig.business.instagram && (
                <div>
                  <p className="text-sm uppercase tracking-widest text-brand-wood-light mb-2">
                    {t.contact.instagramLabel}
                  </p>
                  <a
                    href={siteConfig.business.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-light hover:text-brand-wood transition-colors"
                  >
                    @amw100carpentry
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="bg-brand-black p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
