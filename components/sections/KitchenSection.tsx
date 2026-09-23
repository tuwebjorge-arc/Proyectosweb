import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function KitchenSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-ivory overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-8 leading-tight">
              Diseñadas para tu estilo de vida.
            </h2>
            <div className="space-y-6 text-lg text-brand-charcoal/80 font-light leading-relaxed">
              <p>
                Creamos cocinas a medida donde se unen la funcionalidad, los materiales y el diseño.
              </p>
              <p>
                Cada elemento se adapta al espacio, desde los muebles y las islas hasta el almacenamiento, los acabados y los detalles.
              </p>
              <p>
                Todo se diseña específicamente para tu hogar.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square md:aspect-[3/4] w-full">
              <Image
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop"
                alt="Cocina a medida de diseño premium"
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
