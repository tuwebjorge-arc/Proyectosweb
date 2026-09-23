import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function CarpentrySection() {
  return (
    <section className="py-24 md:py-32 bg-brand-charcoal text-brand-ivory overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Hecha a medida.<br />Hecha para tu hogar.
            </h2>
            <div className="space-y-6 text-lg text-brand-ivory/80 font-light leading-relaxed">
              <p>
                Creemos armarios, vestidores, muebles, revestimientos de pared y mobiliario empotrado personalizados.
              </p>
              <p>
                Cada pieza se diseña teniendo en cuenta la arquitectura de la propiedad, creando interiores integrados y cuidadosamente concebidos.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1200&auto=format&fit=crop"
                alt="Carpintería a medida"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
