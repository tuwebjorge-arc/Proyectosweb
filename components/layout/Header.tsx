"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll de la página cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);


  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-cream/95 backdrop-blur-md py-3.5 border-b border-brand-border/60 shadow-xs"
          : "bg-transparent py-5"
      )}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Logo / Marca */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-brand-wood"
            aria-label={`${siteConfig.name} - Inicio`}
          >
            <span className="text-lg md:text-xl font-medium tracking-widest text-brand-charcoal uppercase group-hover:text-brand-wood transition-colors">
              AMW100
            </span>
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] text-brand-muted uppercase">
              CARPENTRY
            </span>
          </Link>

          {/* Navegación Desktop */}
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Navegación principal"
          >
            {siteConfig.navigation.main.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-xs uppercase tracking-widest transition-colors duration-200 relative py-1 focus-visible:outline-brand-wood",
                    isActive
                      ? "text-brand-wood font-semibold"
                      : "text-brand-charcoal/80 hover:text-brand-wood"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-wood animate-in fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Acciones Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              href="/contacto"
              variant="primary"
              size="sm"
              className="group gap-1.5"
            >
              <span>Solicitar presupuesto</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          {/* Botón Menú Móvil */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-brand-charcoal hover:text-brand-wood focus-visible:outline-brand-wood cursor-pointer"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Menú Móvil Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[60px] bg-brand-cream z-40 md:hidden flex flex-col justify-between p-6 border-t border-brand-border animate-in slide-in-from-top duration-300 overflow-y-auto"
        >
          <div className="space-y-6 pt-4">
            <nav className="flex flex-col space-y-4" aria-label="Navegación móvil">
              {siteConfig.navigation.main.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-light tracking-wide py-2 border-b border-brand-border/40 transition-colors flex items-center justify-between",
                      isActive
                        ? "text-brand-wood font-normal"
                        : "text-brand-charcoal hover:text-brand-wood"
                    )}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4">
              <Button
                href="/contacto"
                variant="primary"
                size="lg"
                className="w-full justify-between"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Solicitar presupuesto</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="pt-8 pb-4 text-xs text-brand-muted border-t border-brand-border/50">
            <p className="font-medium text-brand-charcoal uppercase tracking-wider mb-1">
              AMW100 CARPENTRY
            </p>
            <p>{siteConfig.tagline}</p>
          </div>
        </div>
      )}
    </header>
  );
}
