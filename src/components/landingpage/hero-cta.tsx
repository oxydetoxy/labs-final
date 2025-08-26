import Link from "next/link";

export default function HeroCTA() {
  return (
    <section
      className="relative bg-[#E6F3FF]  py-16 md:py-20 px-4 md:px-6 overflow-hidden bg-cover bg-center h-[290px] md:h-[424px] flex items-center justify-center"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      <div className="relative z-10 max-w-5xl mx-auto mt-40 text-center p-8">
        <h1
          className="text-[28px] mx-auto font-normal text-[#54453E] mb-12 leading-[100%] text-center px-2"
          style={{ fontFamily: "Lilita One" }}
        >
          <div className="whitespace-nowrap">
            Ready to cook up your next growth experiment?
          </div>
          <div className="whitespace-nowrap">
            Let&apos;s get in the lab – strategy goggles on, results incoming.
          </div>
        </h1>
        <Link
          href={"/lets-talk"}
          className="bg-[#54453E] mt-20 hover:bg-[#54453E] cursor-pointer text-white px-8 md:px-8 py-3 md:py-2 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </section>
  );
}
