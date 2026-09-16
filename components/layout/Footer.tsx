import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const hasSocial = Boolean(siteConfig.social.instagram || siteConfig.social.facebook);
  const hasContactInfo = Boolean(
    siteConfig.business.phone || siteConfig.business.email || siteConfig.business.city
  );

  return (
    <footer className="bg-brand-charcoal text-brand-cream border-t border-brand-charcoal/80 pt-16 pb-12">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Columna 1: Marca & Filosofía */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-flex flex-col group focus-visible:outline-white"
              aria-label={`${siteConfig.name} - Inicio`}
            >
              <span className="text-2xl font-light tracking-widest uppercase text-white group-hover:text-brand-wood-light transition-colors">
                AMW100
              </span>
              <span className="text-xs tracking-[0.3em] text-stone-400 uppercase">
                CARPENTRY
              </span>
            </Link>
            <p className="text-sm text-stone-300 font-light leading-relaxed max-w-sm pt-2">
              Carpintería de alta precisión, ebanistería arquitectónica y reformas de interiores. Espacios transformados con oficio, diseño y materiales nobles.
            </p>

            {hasSocial && (
              <div className="flex items-center space-x-3 pt-4">
                {siteConfig.social.instagram && (
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-none bg-white/5 hover:bg-brand-wood text-white transition-colors focus-visible:outline-white"
                    aria-label="Instagram de AMW100 Carpentry"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-none bg-white/5 hover:bg-brand-wood text-white transition-colors focus-visible:outline-white"
                    aria-label="Facebook de AMW100 Carpentry"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Columna 2: Navegación */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-wood-light">
              Navegación
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone-300 hover:text-white transition-colors inline-flex items-center gap-1 focus-visible:outline-white"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-wood-light">
              Especialidades
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="text-stone-300 hover:text-white transition-colors inline-flex items-center gap-1 group focus-visible:outline-white"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-wood-light" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-wood-light">
              Contacto
            </h3>
            {hasContactInfo ? (
              <ul className="space-y-3 text-sm text-stone-300">
                {siteConfig.business.phone && (
                  <li className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-brand-wood-light shrink-0" />
                    <a
                      href={`tel:${siteConfig.business.phone.replace(/\s+/g, "")}`}
                      className="hover:text-white transition-colors"
                    >
                      {siteConfig.business.phone}
                    </a>
                  </li>
                )}
                {siteConfig.business.email && (
                  <li className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-brand-wood-light shrink-0" />
                    <a
                      href={`mailto:${siteConfig.business.email}`}
                      className="hover:text-white transition-colors"
                    >
                      {siteConfig.business.email}
                    </a>
                  </li>
                )}
                {siteConfig.business.city && (
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-wood-light shrink-0 mt-0.5" />
                    <span>
                      {siteConfig.business.address
                        ? `${siteConfig.business.address}, `
                        : ""}
                      {siteConfig.business.city}
                      {siteConfig.business.country
                        ? `, ${siteConfig.business.country}`
                        : ""}
                    </span>
                  </li>
                )}
              </ul>
            ) : (
              <p className="text-sm text-stone-300 leading-relaxed font-light">
                Para consultas de proyectos, presupuestos o colaboraciones, utiliza nuestro{" "}
                <Link
                  href="/contacto"
                  className="text-brand-wood-light underline hover:text-white"
                >
                  formulario de contacto directo
                </Link>
                .
              </p>
            )}

            <div className="pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-brand-wood-light hover:text-white transition-colors font-medium"
              >
                <span>Solicitar valoración de proyecto</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            &copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            {siteConfig.navigation.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-stone-200 transition-colors focus-visible:outline-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
