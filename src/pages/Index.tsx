
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import SampleActivities from "@/components/SampleActivities";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <SampleActivities />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
