import Link from "next/link";

export default function HeroCTA() {
  return (
    <>
      <section
        className="md:block hidden relative bg-[#E6F3FF]  py-16 md:py-20 px-4 md:px-6 overflow-hidden bg-cover bg-center h-[290px] md:h-[424px] flex items-center justify-center "
        style={{ backgroundImage: "url(/hero.jpg)" }}
      >
        <div className="relative z-10 max-w-5xl mx-auto mt-40 text-center p-8">
          <h1
            className="text-[28px] mx-auto font-normal text-[#54453E] mb-6 leading-[100%] text-center px-2"
            style={{ fontFamily: "Lilita One" }}
          >
            <div className="whitespace-nowrap -mt-10 ">
              Ready to cook up your next growth experiment?
            </div>
            <div className="whitespace-nowrap mb-2">
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

      {/* Mobile-only version */}
      <section
        className="md:hidden relative bg-[#E6F3FF] py-16 px-4 overflow-hidden bg-cover bg-center h-[181px] flex items-center justify-center mt-8"
        style={{ backgroundImage: "url(/smallscreenfooter.png)" }}
      >
        <div className="relative z-10 max-w-5xl mx-auto text-center p-8">
          <h1
            className="text-[14px] sm:text-[24px] mx-auto font-normal text-[#54453E] mb-8 leading-[100%] text-center px-2"
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
            className="bg-[#54453E] hover:bg-[#54453E] cursor-pointer text-white px-6 py-2 rounded-[15px] text-base font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
