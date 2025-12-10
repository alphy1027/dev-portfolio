import AboutSection from "./home/sections/AboutSection";
import CallToActionSection from "./home/sections/CallToActionSection";
import ContactSection from "./home/sections/ContactSection";
import HeroSection from "./home/sections/HeroSection";
import JsonLd from "./home/sections/JsonLd";
import PortfolioSection from "./home/sections/PortfolioSection";
import ServicesSection from "./home/sections/ServicesSection";
import SkillsSection from "./home/sections/SkillsSection";
import TestimonialsSection from "./home/sections/TestimonialsSection";

export default function Home() {
  return (
    <>
      <JsonLd />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
      <CallToActionSection />
    </>
  );
}
