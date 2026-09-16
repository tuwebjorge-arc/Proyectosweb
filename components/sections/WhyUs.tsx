import React from "react";
import { siteConfig } from "@/lib/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Compass,
  Trees,
  PencilRuler,
  MessageSquareCheck,
  ShieldCheck,
  Layers,
} from "lucide-react";

export function WhyUs() {
  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6 text-brand-wood" />,
    Trees: <Trees className="w-6 h-6 text-brand-wood" />,
    PencilRuler: <PencilRuler className="w-6 h-6 text-brand-wood" />,
    MessageSquareCheck: <MessageSquareCheck className="w-6 h-6 text-brand-wood" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-wood" />,
    Layers: <Layers className="w-6 h-6 text-brand-wood" />,
  };

  return (
    <section className="py-20 md:py-28 bg-brand-charcoal text-brand-cream border-b border-brand-charcoal/90">
      <Container size="wide">
        <SectionHeading
          eyebrow="Valores y solvencia"
          title="Por qué confiar en AMW100 CARPENTRY"
          subtitle="Fundamentamos nuestro trabajo en criterios cualitativos rigurosos: oficio, diálogo constructivo con el cliente y respeto absoluto por la madera y los plazos."
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.pillars.map((pillar, i) => (
            <div
              key={i}
              className="p-8 bg-white/5 border border-white/10 hover:border-brand-wood-light/40 transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-white/10 inline-flex mb-6">
                  {iconMap[pillar.iconName] || (
                    <Compass className="w-6 h-6 text-brand-wood-light" />
                  )}
                </div>
                <h3 className="text-xl font-light text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-300 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] tracking-widest text-brand-wood-light uppercase">
                <span>0{i + 1}</span>
                <span className="w-4 h-[1px] bg-brand-wood-light" />
                <span>Criterio de calidad</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
