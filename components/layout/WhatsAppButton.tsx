"use client";

import React from "react";
import { siteConfig } from "@/lib/config/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const whatsappNumber = siteConfig.business.whatsapp;

  // Si no está configurado el número de WhatsApp, no renderizar
  if (!whatsappNumber) {
    return null;
  }

  // Limpiar caracteres no numéricos
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    "Hola, me pongo en contacto desde la web de AMW100 CARPENTRY para solicitar información sobre un proyecto."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-2 group rounded-full"
      aria-label="Contactar por WhatsApp con AMW100 Carpentry"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline-block">
        WhatsApp
      </span>
    </a>
  );
}
