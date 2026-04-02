import { useLanguage } from "@/contexts/LanguageContext";
import { content } from "@/data/content";

const FooterSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].footer;

  return (
    <footer className="border-t border-primary/10 py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="gold-divider mx-auto mb-8 w-16" />
        <h4 className="text-gradient-gold font-arabic text-xl font-bold">
          {t.title}
        </h4>
        <p className="mt-2 font-display text-3xl font-bold text-foreground/40">
          {t.years}
        </p>
        <p className="mt-3 text-sm text-foreground/40">{t.subtitle}</p>
        <div className="gold-divider mx-auto mt-8 w-16" />
      </div>
    </footer>
  );
};

export default FooterSection;
