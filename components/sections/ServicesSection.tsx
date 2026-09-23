import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config/site";

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream">
      <Container>
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-6">Nuestros servicios</h2>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl font-light">
            Soluciones de carpintería e interiorismo adaptadas a cada propiedad.
          </p>
        </div>

        <div className="space-y-32">
          {siteConfig.services.map((service, index) => (
            <div 
              key={service.id}
              className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 relative aspect-[4/5] overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-brand-wood text-lg mb-4 block font-serif italic">{service.id}</span>
                <h3 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-6">{service.title}</h3>
                <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-8 font-light">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/servicios#${service.slug}`}
                  className="inline-flex items-center text-sm uppercase tracking-widest text-brand-charcoal hover:text-brand-wood transition-colors pb-1 border-b border-brand-charcoal/30 hover:border-brand-wood"
                >
                  Leer más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
