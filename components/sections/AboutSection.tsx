import { Container } from "@/components/ui/Container";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-ivory text-center">
      <Container>
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-wood text-sm uppercase tracking-[0.2em] mb-6 block">Sobre nosotros</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal mb-10">
            Más de 10 años de experiencia
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-brand-charcoal/80 font-light leading-relaxed">
            <p>Somos una empresa con más de 10 años de trayectoria.</p>
            <p>
              Combinamos la artesanía tradicional con el diseño contemporáneo para crear interiores únicos.
            </p>
            <p>
              Trabajamos estrechamente con cada cliente para comprender su visión y transformarla en un espacio cuidadosamente diseñado.
            </p>
            <p>
              Nuestro trabajo se define por la precisión, los materiales de calidad y los acabados refinados.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
