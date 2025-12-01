import AboutSection from "./home/sections/AboutSection";
import CallToActionSection from "./home/sections/CallToActionSection";
import HeroSection from "./home/sections/HeroSection";
import PortfolioSection from "./home/sections/PortfolioSection";
import ServicesSection from "./home/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <CallToActionSection />
    </>
  );
}
