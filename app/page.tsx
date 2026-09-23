import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { KitchenSection } from "@/components/sections/KitchenSection";
import { CarpentrySection } from "@/components/sections/CarpentrySection";
import { RenovationSection } from "@/components/sections/RenovationSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <KitchenSection />
      <CarpentrySection />
      <RenovationSection />
      <AboutSection />
      <ProcessSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
