import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, APP_URL } from "@/lib/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieBanner } from "@/components/layout/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: `${siteConfig.name} | Carpintería a Medida & Reformas de Calidad`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "carpintería a medida",
    "reformas de interiores",
    "ebanistería",
    "vestidores a medida",
    "cocinas de diseño",
    "muebles a medida",
    "panelados de madera",
    "reformas integrales",
    "AMW100 Carpentry",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: APP_URL,
    title: `${siteConfig.name} | Carpintería a Medida & Reformas de Calidad`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Carpintería y Reformas`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Carpintería a Medida & Reformas de Calidad`,
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org JSON-LD estructurado
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: APP_URL,
    ...(siteConfig.business.phone && { telephone: siteConfig.business.phone }),
    ...(siteConfig.business.email && { email: siteConfig.business.email }),
    ...(siteConfig.business.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.business.address,
        addressLocality: siteConfig.business.city,
        postalCode: siteConfig.business.postalCode,
        addressCountry: siteConfig.business.country || "ES",
      },
    }),
  };

  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-charcoal selection:bg-brand-wood selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
