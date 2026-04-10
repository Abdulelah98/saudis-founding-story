import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { content } from "@/data/content";
import trophyVideo from "@/assets/trophy-video.mp4.asset.json";

const ImageSections = () => {
  const { lang } = useLanguage();
  const t = content[lang].images;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-[0_0_60px_hsl(40_60%_50%/0.15)]">
            <video
              src={trophyVideo.url}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-center space-y-2"
          >
            <h3 className="font-arabic text-2xl font-bold text-primary md:text-3xl">
              {t.diriyah.caption}
            </h3>
            <p className="text-foreground/60">{t.diriyah.subtitle}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSections;
