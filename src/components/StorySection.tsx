import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { content } from "@/data/content";

const StorySection = () => {
  const { lang } = useLanguage();
  const t = content[lang].story;

  return (
    <section id="story" className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-gradient-gold font-arabic text-3xl font-bold md:text-4xl">
            {t.title}
          </h2>
          <div className="mt-4 gold-divider mx-auto w-16" />
        </motion.div>

        <div className="space-y-8">
          {t.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-lg leading-loose text-foreground/80 md:text-xl"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
