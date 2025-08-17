import Link from "next/link";

export default function HeroCTA() {
  return (
    <section
      className="relative bg-[#E6F3FF] py-16 md:py-20 px-4 md:px-6 overflow-hidden border bg-cover bg-center h-[190px] md:h-[424px] flex items-center justify-center"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-lg md:text-xl font-bold text-[#54453E] mb-6 leading-tight px-2">
          Ready to cook up your next growth experiment? Let&apos;s get in the
          lab – strategy goggles on, results incoming.
        </h1>
        <Link
          href={"/lets-talk"}
          className="bg-[#54453E] hover:bg-[#54453E] cursor-pointer text-white px-8 md:px-8 py-3 md:py-2 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </section>
  );
}
