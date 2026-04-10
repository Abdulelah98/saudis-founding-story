import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { content } from "@/data/content";
import { ChevronDown } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import trophyImage from "@/assets/founding-day-trophy.png";

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Diriyah heritage landscape"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={trophyImage}
            alt="يوم التأسيس السعودي - 300 عام"
            className="mx-auto h-48 w-auto drop-shadow-2xl md:h-64 lg:h-72"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <div className="mb-6 gold-divider mx-auto w-24" />
          <h1 className="font-arabic text-5xl font-bold leading-[1.6] pb-2 text-primary md:text-7xl lg:text-8xl">
            {t.title}
          </h1>
          <div className="mt-6 gold-divider mx-auto w-24" />
        </motion.div>

        <motion.p
          className="mx-auto mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a
            href="#story"
            className="inline-flex flex-col items-center gap-2 text-sm text-primary/70 transition-colors hover:text-primary"
          >
            {t.scroll}
            <ChevronDown className="h-5 w-5 animate-float" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
