import Hero from "@/components/landingpage/hero";
import CoreFeatures from "@/components/landingpage/core-features";
import Brands from "@/components/landingpage/brands";
import Testimonials from "@/components/landingpage/testimonials";
import CTA from "@/components/landingpage/cta";
import Founder from "@/components/landingpage/founder";
import HeroCTA from "@/components/landingpage/hero-cta";
import Footer from "@/components/landingpage/footer";

export default function Home() {
  return (
    <div className="text-[#54453E] w-full">
      <Hero />
      <CoreFeatures />
      <Brands />
      <Testimonials />
      <CTA />
      <div className="bg-[#4DD1F4] mt-10 h-20 md:h-32" />
      <Founder />
      <HeroCTA />
      <Footer />
    </div>
  );
}
