import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { content } from "@/data/content";
import { QrCode } from "lucide-react";

const QRSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].qr;

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-lg px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-glass rounded-2xl p-10 md:p-14"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-2xl border border-primary/20 bg-secondary"
          >
            <QrCode className="h-20 w-20 text-primary" />
          </motion.div>

          <h3 className="text-gradient-gold font-arabic text-2xl font-bold">
            {t.title}
          </h3>
          <p className="mt-3 text-foreground/60">{t.subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default QRSection;
