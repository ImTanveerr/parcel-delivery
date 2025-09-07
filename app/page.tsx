import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NewsletterSection from "@/components/NewsletterSection";
import OfferSection from "@/components/OfferSection";
import ServicesExtraSection from "@/components/ServicesExtraSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/Testimonials";
import TrackParcelSection from "@/components/TrackParcelSection";


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrackParcelSection/>
      <ServicesSection />
      <ServicesExtraSection />
      <OfferSection />
      <BlogSection />
      
      <TestimonialsSection />
      <NewsletterSection />
  
      
      {/* Add TrackParcelSection, TestimonialsSection, BlogSection, NewsletterSection, ContactSection here */}
    </div>
  );
}
