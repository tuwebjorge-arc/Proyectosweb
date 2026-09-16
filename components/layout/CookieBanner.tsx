"use client";

import React, { useSyncExternalStore, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const COOKIE_STORAGE_KEY = "amw100_cookie_consent";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): string | null {
  try {
    return localStorage.getItem(COOKIE_STORAGE_KEY);
  } catch {
    return "accepted";
  }
}

function getServerSnapshot(): string | null {
  return "accepted"; // Default to hidden on server to avoid hydration mismatch
}

export function CookieBanner() {
  const [closedManually, setClosedManually] = useState(false);
  const storedConsent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const isVisible = !storedConsent && !closedManually;

  const handleAccept = useCallback(() => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, "accepted");
    } catch {}
    setClosedManually(true);
  }, []);

  const handleDecline = useCallback(() => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, "essential_only");
    } catch {}
    setClosedManually(true);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-brand-charcoal text-brand-cream border-t border-brand-charcoal/90 shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed max-w-4xl">
          <p>
            Utilizamos cookies técnicas necesarias para el funcionamiento del sitio web y, en su caso, cookies de análisis anónimo para mejorar tu experiencia. Puedes consultar los detalles en nuestra{" "}
            <Link
              href="/cookies"
              className="text-brand-wood-light underline hover:text-white"
            >
              Política de Cookies
            </Link>
            .
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDecline}
            className="text-stone-300 hover:text-white hover:bg-white/10 text-xs px-3.5"
          >
            Solo necesarias
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleAccept}
            className="text-xs px-4"
          >
            Aceptar todas
          </Button>
        </div>
      </div>
    </div>
  );
}
