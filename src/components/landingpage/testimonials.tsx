import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Testimonials() {
  return (
    <>
      <section className="py-16 md:py-24 relative my-12 md:my-24 w-full lg:hidden flex flex-col items-center p-8 gap-8">
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl mb-2 md:mb-4 font-display text-center !text-[#54453E]">
            Client Observations and Inference
          </h2>
          <p className="text-base md:text-lg max-w-sm mx-auto text-center !text-[#54453E]">
            Hear from the brands that trusted our process and saw the results.
          </p>
        </div>

        <Image
          src="/cloud.png"
          alt="Cloud left"
          width={120}
          height={100}
          className="absolute top-29 md:top-42 -left-13 z-30 -rotate-y-180"
        />
        <Image
          src="/cloud.png"
          alt="Cloud right"
          width={120}
          height={100}
          className="absolute top-29 md:top-42 -right-13 md:-right-4 z-30"
        />

        <div className="w-full flex items-center gap-8 mx-auto">
          <div className="bg-white rounded-lg flex flex-col gap-4 items-center px-4 py-4 xl:py-16  border-2 border-[#54453E] w-full min-h-[300px] sm:h-[324px] md:h-[300px] md:w-[45%]">
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#54453E]">
                Vaishali Gupta
              </h3>
              <p className="text-gray-600 text-[16px]">Founder of OTOS</p>
            </div>
            <p
              className={`${montserrat.className} text-gray-700 !text-[13px] text-center`}
            >
              Working with Dhruv was both strategic and seamless. He brought
              much-needed structure to our digital initiatives, was deeply
              involved in execution, and helped us achieve tangible results in a
              short period. Dhruv is a natural problem solver — he quickly
              identifies what&apos;s not working and proposes clear, actionable
              plans to move forward.
            </p>
          </div>
          <div className="bg-white rounded-lg flex-col gap-2 items-center px-4 py-4 xl:py-16  border-2 border-[#54453E] w-full sm:h-[324px] md:h-[300px] md:w-[45%] hidden sm:flex">
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-xl md:text-2xl font-bold text-[#54453E]">
                Garima Goel
              </h3>
              <p className="text-gray-600 text-[16px] text-center">
                Shades of India - Marketing Head
              </p>
            </div>
            <p
              className={`${montserrat.className} text-[#54453E] w-[80%] !text-[13px] text-center`}
            >
              Working with Dhruv is like being in a true partnership. During our
              engagement, he demonstrated remarkable expertise in both strategic
              planning and tactical execution that directly contributed to our
              business growth and helped us break the stagnant cycle we were
              stuck in.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 relative my-12 md:my-24 w-full hidden lg:block">
        <Image
          src="/cloud.png"
          alt="Cloud left"
          width={320}
          height={200}
          className="absolute top-16 -left-40 xl:-left-28 z-30 opacity-60 md:opacity-100 -rotate-y-180"
        />
        <Image
          src="/cloud.png"
          alt="Cloud right"
          width={320}
          height={200}
          className="absolute top-16 -right-40 xl:-right-28 z-30 opacity-60 md:opacity-100"
        />
        <div className="mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-16 flex flex-col md:flex-row items-start justify-center gap-3 md:gap-5 mx-auto max-w-4xl">
            <h2 className="text-xl md:text-2xl text-[#54453E] mb-2 md:mb-4 max-w-xs font-display text-left">
              Client Observations and Inference
            </h2>
            <p className="text-base md:text-lg text-[#54453E] max-w-sm mx-auto px-2 text-left">
              Hear from the brands that trusted our process and saw the results.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-12 w-full">
          <div className="bg-white rounded-lg rounded-l-none p-6 md:p-8  border border-[#54453E] w-[50px] xl:w-[130px] h-[450px]" />
          <div className="bg-white rounded-lg flex justify-between items-start px-4 py-4 xl:py-16  border border-[#54453E] w-[800px] xl:!w-[700px] h-[450px]">
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-[#54453E]">
                Vaishali Gupta
              </h3>
              <p className="text-[#54453E] text-base md:text-lg">
                Founder of OTOS
              </p>
            </div>
            <p
              className={`${montserrat.className} text-[#54453E] w-[80%] !text-[13px]`}
            >
              Working with Dhruv was both strategic and seamless. He brought
              much-needed structure to our digital initiatives, was deeply
              involved in execution, and helped us achieve tangible results in a
              short period. Dhruv is a natural problem solver — he quickly
              identifies what&apos;s not working and proposes clear, actionable
              plans to move forward.
            </p>
          </div>

          <div className="bg-white rounded-lg flex justify-between items-start px-4 py-4 xl:py-16  border border-[#54453E] w-[800px] xl:w-[700px] 2xl:w-[800px] 3xl:w-[1000px] h-[450px]">
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-2xl md:text-3xl font-bold text-[#54453E]">
                Garima Goel
              </h3>
              <p className="text-[#54453E] text-base md:text-lg">
                Shades of India - <br /> Marketing Head
              </p>
            </div>
            <p
              className={`${montserrat.className} text-[#54453E] w-[80%] !text-[13px]`}
            >
              Working with Dhruv is like being in a true partnership. During our
              engagement, he demonstrated remarkable expertise in both strategic
              planning and tactical execution that directly contributed to our
              business growth and helped us break the stagnant cycle we were
              stuck in. What makes Dhruv particularly effective is how he
              approaches each campaign not just as a job, but as a personal
              mission to deliver outstanding outcomes.
            </p>
          </div>

          <div className="bg-white rounded-lg rounded-r-none p-6 md:p-8  border border-[#54453E] w-[50px] xl:w-[130px] h-[450px]" />
        </div>
      </section>
    </>
  );
}
