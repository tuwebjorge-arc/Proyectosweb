import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config/site";

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-charcoal text-brand-ivory">
      <Container>
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Nuestro proceso</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {siteConfig.processSteps.map((step) => (
            <div key={step.number} className="relative">
              <div className="text-6xl md:text-7xl font-serif text-brand-wood/30 mb-6">{step.number}</div>
              <h3 className="text-2xl font-serif text-brand-ivory mb-4">{step.title}</h3>
              <p className="text-brand-ivory/70 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
