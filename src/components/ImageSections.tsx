import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { content } from "@/data/content";
import diriyahImg from "@/assets/diriyah-historic.jpg";
import najdiImg from "@/assets/najdi-architecture.jpg";
import unificationImg from "@/assets/unification-era.jpg";

interface ImageCardProps {
  src: string;
  caption: string;
  subtitle: string;
  index: number;
  reverse?: boolean;
}

const ImageCard = ({ src, caption, subtitle, index, reverse }: ImageCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay: 0.1 }}
    className={`flex flex-col gap-8 md:flex-row md:items-center ${reverse ? "md:flex-row-reverse" : ""}`}
  >
    <div className="image-zoom flex-1 overflow-hidden rounded-lg">
      <div className="relative aspect-[4/3]">
        <img
          src={src}
          alt={caption}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>
    </div>
    <div className="flex-1 space-y-3 text-center md:text-start">
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">
        0{index + 1}
      </span>
      <h3 className="text-gradient-gold font-arabic text-2xl font-bold md:text-3xl">
        {caption}
      </h3>
      <p className="text-foreground/60">{subtitle}</p>
    </div>
  </motion.div>
);

const ImageSections = () => {
  const { lang } = useLanguage();
  const t = content[lang].images;

  const images = [
    { src: diriyahImg, ...t.diriyah },
    { src: najdiImg, ...t.najdi },
    { src: unificationImg, ...t.unification },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl space-y-24 px-6 md:space-y-32">
        {images.map((img, i) => (
          <ImageCard
            key={i}
            src={img.src}
            caption={img.caption}
            subtitle={img.subtitle}
            index={i}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSections;
