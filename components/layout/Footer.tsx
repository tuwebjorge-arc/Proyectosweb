import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-serif tracking-wide block mb-1">AMW100</span>
              <span className="text-xs tracking-[0.3em] font-sans uppercase opacity-70">CARPENTRY</span>
            </Link>
            <p className="text-white/60 font-light max-w-sm leading-relaxed">
              Carpintería a medida · Renovación de interiores
              <br />
              {siteConfig.business.city} · {siteConfig.business.region}
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">Navegación</h4>
            <ul className="space-y-4">
              {siteConfig.navigation.main.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/70 hover:text-white transition-colors text-sm font-light">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm font-light text-white/70">
              <li>
                <a href={`tel:${siteConfig.business.phone?.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                  {siteConfig.business.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.business.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-white/40">
          <p>© {new Date().getFullYear()} AMW100 CARPENTRY. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            {siteConfig.navigation.legal.map(item => (
              <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
