import React from "react";
import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conoce nuestra trayectoria y experiencia en carpintería a medida y renovación de interiores.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  );
}
