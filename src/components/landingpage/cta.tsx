import Image from "next/image";

export default function CTA() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between  max-w-7xl mx-auto mt-10 px-4">
        <h1 className="text-2xl md:text-[40px] font-display text-center md:text-left text-[#54453E]">
          Inside Our 5-Step Growth Engine
        </h1>
        <p className="text-base md:text-[24px] text-center md:text-left text-[#54453E]">
          Growth isn&apos;t guessed. It&apos;s engineered.
        </p>
      </div>
      <Image
        src="/section.png"
        alt="cta"
        width={1000}
        height={1000}
        className="w-full max-w-6xl mx-auto mt-[80px] px-4 h-auto hidden md:block"
      />
      <Image
        src="/mobile-section.png"
        alt="cta"
        width={800}
        height={800}
        className="w-full max-w-5xl mx-auto mt-5 px-4 h-auto block md:hidden"
      />
    </div>
  );
}
