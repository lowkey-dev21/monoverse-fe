import Footer from "@/components/common/footer";
import { Headers } from "@/components/common/header";
import { AnimatedHero } from "@/components/landingPage/animated-hero";
import { CategoriesSection } from "@/components/landingPage/categories-section";
import CTASection from "@/components/landingPage/cta-section";
import FaqSection from "@/components/landingPage/faq-section";
import FeaturesSection from "@/components/landingPage/features-section";
import HowItWorksSection from "@/components/landingPage/how-it-works-section";
import PricingSection from "@/components/landingPage/pricing-section";
import Testimonial from "@/components/landingPage/testimonial-section";
import TrendingNowSection from "@/components/landingPage/trending-now-section";
import { LampDemo } from "@/components/ui/lamp";

export default function LandingPage() {
  return (
    <div className="bg-background w-full">
      <Headers/>
      <AnimatedHero />
      <TrendingNowSection />
      <FeaturesSection />
      <CategoriesSection />
      <HowItWorksSection />
      <PricingSection />
      <Testimonial />
      <FaqSection />
      <LampDemo />
      <CTASection />
      <Footer />
    </div>
  );
}
