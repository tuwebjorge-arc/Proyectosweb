import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig, APP_URL } from "@/lib/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: `${siteConfig.name} | Bespoke Carpentry & Interior Renovation`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Bespoke carpentry and interior renovation projects for private villas, residences and high-end apartments in Marbella and the Costa del Sol.",
  keywords: [
    "bespoke carpentry",
    "interior renovation",
    "marbella carpentry",
    "custom kitchens marbella",
    "fitted wardrobes",
    "interior design costa del sol",
    "AMW100 Carpentry",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: APP_URL,
    title: `${siteConfig.name} | Bespoke Carpentry & Interior Renovation`,
    description:
      "Bespoke carpentry and interior renovation projects for private villas, residences and high-end apartments in Marbella and the Costa del Sol.",
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Bespoke Carpentry & Renovation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Bespoke Carpentry & Interior Renovation`,
    description:
      "Bespoke carpentry and interior renovation projects for private villas, residences and high-end apartments in Marbella and the Costa del Sol.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    ],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.name,
    description:
      "Bespoke carpentry and interior renovation projects for private villas, residences and high-end apartments in Marbella and the Costa del Sol.",
    url: APP_URL,
    ...(siteConfig.business.phone && { telephone: siteConfig.business.phone }),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.business.city,
      addressRegion: siteConfig.business.region,
      addressCountry: siteConfig.business.country || "ES",
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-charcoal selection:bg-brand-wood selection:text-white font-sans">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
