import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import HealthBenefits from "@/components/HealthBenefits";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Independence from "@/components/Independence";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen p-3 md:p-6 lg:p-8">
      <div className="relative bg-[#F9FAF6] rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col min-h-[calc(100vh-2rem)] border border-neutral-100/50 shadow-sm">
        <Navbar />
        <main className="flex flex-col flex-1">
          <Hero />
          <HowItWorks />
          <HealthBenefits />
          <Testimonials />
          <Comparison />
          <Pricing />
          <CTASection />
          <Independence />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
