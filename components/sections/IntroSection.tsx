import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export function IntroSection() {
  return (
    <section id="propuesta" className="py-20 md:py-28 bg-brand-cream border-b border-brand-border">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna Texto */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-brand-wood">
              <span className="w-5 h-[1.5px] bg-brand-wood" />
              <span>Nuestra filosofía</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal leading-[1.15]">
              El equilibrio entre la calidez de la madera y la pureza constructiva.
            </h2>

            <div className="space-y-4 text-base md:text-lg text-stone-600 font-light leading-relaxed">
              <p>
                En <strong>AMW100 CARPENTRY</strong> entendemos cada proyecto como una oportunidad de integrar artesanía de precisión y arquitectura contemporánea. No creemos en soluciones estándar ni en procesos apresurados.
              </p>
              <p>
                Desde el despiece inicial en taller hasta el último ajuste en obra, seleccionamos minuciosamente cada tablero, cuidamos la dirección de la veta y ejecutamos encuentros limpios que resisten el paso del tiempo.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-wood hover:text-brand-wood-dark font-semibold group"
              >
                <span>Conocer nuestro método de trabajo</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Columna Imagen Asimétrica */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-border shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
                alt="Detalle de carpintería y acabados de autor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Elemento de diseño sutil */}
            <div className="absolute -bottom-6 -left-6 bg-brand-stone border border-brand-border p-5 hidden sm:block shadow-md max-w-xs">
              <p className="text-xs uppercase tracking-wider text-brand-charcoal font-semibold">
                Atención al milímetro
              </p>
              <p className="text-xs text-stone-600 font-light mt-1">
                Ajuste riguroso de frentes, biseles y herrajes ocultos.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
