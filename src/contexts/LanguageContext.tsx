import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  isArabic: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("ar");
  const toggleLang = () => setLang((l) => (l === "ar" ? "en" : "ar"));
  const isArabic = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, isArabic }}>
      <div dir={isArabic ? "rtl" : "ltr"} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
