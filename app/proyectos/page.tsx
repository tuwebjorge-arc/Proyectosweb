import React from "react";
import type { Metadata } from "next";
import { GallerySection } from "@/components/sections/GallerySection";

export const metadata: Metadata = {
  title: "Proyectos y Galería",
  description: "Explora nuestros proyectos de carpintería a medida y renovación de interiores.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <GallerySection />
    </div>
  );
}
