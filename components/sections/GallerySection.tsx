"use client";
import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { LightboxModal } from "@/components/gallery/LightboxModal";
import { siteConfig } from "@/lib/config/site";

export function GallerySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // Convert string array to the format LightboxModal expects
  const galleryItems = siteConfig.gallery.map(url => ({ url, alt: "AMW100 Carpentry Project" }));

  return (
    <section className="py-24 md:py-32 bg-brand-cream">
      <Container>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal text-center mb-6">Proyectos</h2>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {siteConfig.gallery.map((image, index) => (
            <div 
              key={index} 
              className="relative w-full overflow-hidden group cursor-pointer break-inside-avoid"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image}
                alt={`Proyecto ${index + 1}`}
                width={800}
                height={1000}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </Container>
      
      {isOpen && (
        <LightboxModal 
          isOpen={isOpen}
          images={galleryItems}
          currentIndex={currentIndex}
          onClose={() => setIsOpen(false)}
          onNavigate={setCurrentIndex}
        />
      )}
    </section>
  );
}
