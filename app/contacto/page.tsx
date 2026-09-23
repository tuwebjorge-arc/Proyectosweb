import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Solicita un presupuesto para tu proyecto de carpintería a medida o renovación de interiores.",
};

export default function ContactPage() {
  return (
    <div className="pt-20 bg-brand-charcoal min-h-screen flex flex-col justify-center">
      <ContactSection />
    </div>
  );
}
