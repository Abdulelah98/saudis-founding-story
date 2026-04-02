import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { content } from "@/data/content";

const TimelineSection = () => {
  const { lang, isArabic } = useLanguage();
  const t = content[lang].timeline;

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient-gold font-arabic text-3xl font-bold md:text-4xl">
            {t.title}
          </h2>
          <div className="mt-4 gold-divider mx-auto w-16" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 start-6 md:start-1/2 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-16">
            {t.events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isArabic ? (i % 2 === 0 ? 40 : -40) : (i % 2 === 0 ? -40 : 40) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Dot */}
                <div className="absolute start-6 md:start-1/2 top-2 -translate-x-1/2 rtl:translate-x-1/2">
                  <div className="h-3 w-3 rounded-full border-2 border-primary bg-background shadow-[var(--shadow-gold)]" />
                </div>

                {/* Content */}
                <div className={`ms-16 md:ms-0 md:w-1/2 ${i % 2 === 0 ? "md:pe-16 md:text-end" : "md:ps-16 md:text-start"}`}>
                  <div className="bg-glass rounded-lg p-6">
                    <span className="text-gradient-gold font-display text-3xl font-bold md:text-4xl">
                      {event.year}
                    </span>
                    <h3 className="mt-2 font-arabic text-lg font-semibold text-foreground">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground/60">{event.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
