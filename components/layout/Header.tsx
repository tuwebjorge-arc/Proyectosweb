"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config/site";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLang } from "@/lib/i18n/LanguageContext";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { t, lang, toggle } = useLang();

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/servicios" },
    { name: t.nav.about, href: "/sobre-nosotros" },
    { name: t.nav.projects, href: "/proyectos" },
    { name: t.nav.contact, href: "/contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const headerTheme = isHome && !isScrolled ? "dark" : "light";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-brand-ivory/95 backdrop-blur-md py-4 border-b border-brand-sand shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "group flex flex-col focus-visible:outline-brand-wood transition-colors",
              headerTheme === "dark" ? "text-white" : "text-brand-charcoal"
            )}
            aria-label={`${siteConfig.name} - Home`}
          >
            <span className="text-xl md:text-2xl font-serif tracking-wide group-hover:opacity-70 transition-opacity">
              AMW100
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] font-sans font-light uppercase opacity-80">
              CARPENTRY
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center space-x-10"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs uppercase tracking-widest transition-colors duration-300 relative py-2 font-medium",
                  headerTheme === "dark"
                    ? "text-white/80 hover:text-white"
                    : "text-brand-charcoal/70 hover:text-brand-charcoal"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <button
              type="button"
              onClick={toggle}
              aria-label={t.lang.switchLabel}
              className={cn(
                "text-xs uppercase tracking-widest font-medium transition-colors duration-300 px-3 py-1 border",
                headerTheme === "dark"
                  ? "border-white/30 text-white/80 hover:text-white hover:border-white"
                  : "border-brand-charcoal/20 text-brand-charcoal/70 hover:text-brand-charcoal hover:border-brand-charcoal/40"
              )}
            >
              {t.lang.switch}
            </button>

            <Link
              href="/contacto"
              className={cn(
                "text-xs uppercase tracking-widest font-medium transition-colors duration-300 px-6 py-3 border",
                headerTheme === "dark"
                  ? "border-white/30 text-white hover:bg-white hover:text-brand-charcoal"
                  : "border-brand-charcoal/20 text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
              )}
            >
              {t.nav.requestProject}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 transition-colors",
              headerTheme === "dark" ? "text-white" : "text-brand-charcoal"
            )}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-brand-charcoal z-40 md:hidden flex flex-col p-8 animate-in slide-in-from-top duration-300 overflow-y-auto">
          <nav className="flex flex-col space-y-6 pt-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-serif text-brand-ivory hover:text-brand-wood-light transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10 space-y-8">
            {/* Language toggle mobile */}
            <button
              type="button"
              onClick={() => { toggle(); setIsMobileMenuOpen(false); }}
              className="text-xs uppercase tracking-widest font-medium text-brand-ivory/70 hover:text-brand-ivory transition-colors"
            >
              {lang === "en" ? "Cambiar a Español" : "Switch to English"}
            </button>

            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block text-xs uppercase tracking-widest font-medium text-brand-charcoal bg-white px-8 py-4 w-full text-center"
            >
              {t.nav.requestProject}
            </Link>

            <div className="text-brand-ivory/50 text-sm font-light space-y-2">
              <p>{t.nav.location}</p>
              <p>+34 687 46 67 74</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
