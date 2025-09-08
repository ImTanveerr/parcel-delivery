import BlogSection from "@/components/BlogSection";
import CoverageSection from "@/components/CoverageSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import NewsletterSection from "@/components/NewsletterSection";
import OfferSection from "@/components/OfferSection";
import PartnersSection from "@/components/PartnersSection";
import ServicesExtraSection from "@/components/ServicesExtraSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/Testimonials";
import TrackParcelSection from "@/components/TrackParcelSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrackParcelSection />
      <ServicesSection />
      <ServicesExtraSection />
      <OfferSection />


      <WhyChooseUsSection />

      <HowItWorksSection />
      <PartnersSection />
      <TestimonialsSection />
      <BlogSection />

      <CTASection />
      <CoverageSection />
      <NewsletterSection />

    </div>
  );
}
