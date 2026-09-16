import React from "react";
import { Hero } from "@/components/sections/Hero";
import { IntroSection } from "@/components/sections/IntroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { WhyUs } from "@/components/sections/WhyUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IntermediateCta } from "@/components/sections/IntermediateCta";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <FeaturedProjects />
      <WhyUs />
      <ProcessSection />
      <IntermediateCta />
      <ContactSection />
    </>
  );
}
