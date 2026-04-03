import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ImageSections from "@/components/ImageSections";
import TimelineSection from "@/components/TimelineSection";

import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <LanguageProvider>
      <LanguageToggle />
      <main>
        <HeroSection />
        <StorySection />
        <ImageSections />
        <TimelineSection />
        <QRSection />
      </main>
      <FooterSection />
    </LanguageProvider>
  );
};

export default Index;
