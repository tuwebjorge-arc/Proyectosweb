"use client";

import React, { createContext, useContext, useState } from "react";
import { translations, Lang } from "@/lib/i18n/translations";

// Use a generic object type to avoid literal-string type conflicts between EN and ES
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyTranslations = any;

interface LanguageContextValue {
  lang: Lang;
  t: AnyTranslations;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: translations.en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  return useContext(LanguageContext);
}
