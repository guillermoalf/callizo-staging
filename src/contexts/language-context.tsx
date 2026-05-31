"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import esTranslations from "@/i18n/es.json";
import enTranslations from "@/i18n/en.json";

export type Lang = "es" | "en";
export type Translations = typeof esTranslations;

const TRANSLATIONS: Record<Lang, Translations> = {
  es: esTranslations,
  en: enTranslations as Translations,
};

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangCtx>({
  lang: "es",
  setLang: () => {},
  t: esTranslations,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  return (
    <LangContext.Provider value={{ lang, setLang, t: TRANSLATIONS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LangContext);
}
