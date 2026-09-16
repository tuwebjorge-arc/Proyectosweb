import React from "react";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream border-b border-brand-border">
      <Container size="wide">
        <SectionHeading
          eyebrow="Metodología"
          title="Cómo desarrollamos tu proyecto"
          subtitle="Un proceso estructurado en 4 fases secuenciales para garantizar el rigor constructivo y la total tranquilidad durante la ejecución."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {siteConfig.processSteps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 bg-brand-stone/70 border border-brand-border/80 flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl font-light text-brand-wood/80 tracking-tighter block mb-4">
                  {step.number}
                </span>

                <h3 className="text-lg font-normal text-brand-charcoal mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-stone-600 font-light leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {step.details && (
                <div className="pt-4 border-t border-brand-border/60 text-xs text-brand-muted italic">
                  {step.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
