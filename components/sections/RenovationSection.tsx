import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function RenovationSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
          alt="Renovación de interiores"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-charcoal/60" />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white py-16 md:py-24">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Transformamos la forma en que se siente tu hogar.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-white/90 font-light leading-relaxed">
            <p>
              Realizamos renovaciones parciales e integrales de interiores para villas, casas y apartamentos.
            </p>
            <p>
              Nuestro trabajo puede incluir cocinas, baños, escaleras, carpintería, acabados y otros elementos interiores, creando un resultado armonioso en toda la propiedad.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
