import CTA from "@/components/landingpage/cta";
import Footer from "@/components/landingpage/footer";
import Founder from "@/components/landingpage/founder";
import HeroCTA from "@/components/landingpage/hero-cta";
import Image from "next/image";

export default function SubmittedPage() {
  return (
    <div className="text-[#54453E]">
      <div className="flex flex-col items-center justify-center gap-5 md:gap-10 px-6 py-20 md:p-32  relative">
        <h1 className="text-3xl md:text-4xl font-display">Submitted</h1>
        <h2 className="text-xl md:text-2xl font-display">
          Here&apos;s what to expect
        </h2>
        <p className="text-sm md:text-md max-w-md text-center opacity-80">
          Once your form lands in our inbox, we&apos;ll circle back within 24–48
          hours with brainpower locked and loaded.
        </p>
      </div>
      <div className="flex justify-end m-0 p-0">
        <Image
          src="/scope.png"
          alt="diagram"
          width={300}
          height={200}
          className="object-contain"
        />
      </div>

      <div className="h-[2vh] w-full m-0 p-0 flex items-center justify-start gap-2 overflow-hidden">
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
      <Founder />
      <HeroCTA />
      <Footer />
    </div>
  );
}
