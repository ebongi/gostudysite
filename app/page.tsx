import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import FeatureStripSection from "./components/home/FeatureStripSection";
import ScreensSection from "./components/home/ScreensSection";
import FeaturesSection from "./components/home/FeaturesSection";
import WhySection from "./components/home/WhySection";
import PricingSection from "./components/home/PricingSection";
import SupportSection from "./components/home/SupportSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeatureStripSection />
        <ScreensSection />
        <FeaturesSection />
        <WhySection />
        <PricingSection />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
}
