import CTA from "@/components/landingpage/cta";
import Footer from "@/components/landingpage/footer";
import Founder from "@/components/landingpage/founder";
import HeroCTA from "@/components/landingpage/hero-cta";
import SecondPageHero from "@/components/secondpage/hero";
import Services from "@/components/secondpage/sevices";
import Image from "next/image";

export default function SecondPage() {
  return (
    <div>
      <SecondPageHero />
      <Services />
      <div className="flex justify-end m-0 p-0">
        <Image
          src="/scope.png"
          alt="diagram"
          width={300}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="h-[2vh] w-full m-0 p-0 flex items-center justify-start gap-4 overflow-hidden">
        <div className="bg-[#4DD1F4] w-[15%] h-full rounded-r-md "> </div>
        <div className="bg-[#4DD1F4] w-[15%] h-full rounded-md"> </div>
        <div className="bg-[#4DD1F4] w-[15%] h-full rounded-md"> </div>
        <div className="bg-[#4DD1F4] w-[15%] h-full rounded-md"> </div>
        <div className="bg-[#4DD1F4] w-[15%] h-full rounded-md"> </div>
        <div className="bg-[#4DD1F4] w-[15%] h-full rounded-md"> </div>
        <div className="bg-[#4DD1F4] w-[15%] h-full rounded-md"> </div>
        <div className="bg-[#4DD1F4] w-[15%] h-full rounded-l-md"> </div>
      </div>
      <CTA />
      <div className="bg-[#4DD1F4] mt-10 h-20 md:h-32" />
      <Founder />
      <HeroCTA />
      <Footer />
    </div>
  );
}
