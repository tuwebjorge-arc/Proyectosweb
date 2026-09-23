import { Container } from "@/components/ui/Container";

export function IntroSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-ivory">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-8">
            Interiores diseñados para durar
          </h2>
          <p className="text-xl md:text-2xl text-brand-charcoal/80 font-light leading-relaxed">
            Cada proyecto nace de una conversación, una propiedad y una visión concreta. 
            Trabajamos estrechamente con cada cliente para comprender su visión y transformarla en un espacio cuidadosamente diseñado, donde la precisión, los materiales de calidad y los acabados refinados marcan la diferencia.
          </p>
        </div>
      </Container>
    </section>
  );
}
