import { useLanguage } from "@/contexts/LanguageContext";
import { content } from "@/data/content";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { lang, toggleLang, isArabic } = useLanguage();
  const t = content[lang].nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass-strong">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold tracking-wider text-primary uppercase">
          {t.title}
        </span>
        <button
          onClick={toggleLang}
          className="flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm text-foreground transition-all hover:border-primary/50 hover:shadow-[var(--shadow-gold)]"
        >
          <Globe className="h-4 w-4 text-primary" />
          {t.langSwitch}
        </button>
      </div>
    </nav>
  );
};

export default LanguageToggle;
