import Image from "next/image";

export default function Founder() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 lg:gap-16 max-w-7xl mt-16 lg:mt-24 mx-auto px-4 py-10">
      <div className="m-0 lg:m-24 flex flex-col items-center lg:items-start relative">
        {/* Left hanging line for mobile - responsive positioning */}
        <div className="absolute -top-[140px] left-[1px] xs:left-[24px] sm:left-[calc(50%-272px)] w-0.5 h-[740px] bg-[#4DD1F4] block lg:hidden"></div>

        {/* Right hanging line for mobile - responsive positioning */}
        <div className="absolute -top-[140px] right-[1px] xs:right-[24px] sm:right-[calc(50%-272px)] w-0.5 h-[740px] bg-[#4DD1F4] block lg:hidden"></div>
        <h1 className="text-4xl lg:text-[80px] hidden lg:block text-[#54453E]">
          Experiment.
          <br />
          Evolve.
          <br />
          Expand.
        </h1>
        <h1 className="text-4xl lg:text-7xl text-center block lg:hidden text-[#54453E]">
          Experiment. Evolve.
          <br />
          <span className="font-bold">Expand.</span>
        </h1>
        <Image
          src="/founder.jpg"
          height={613}
          width={544}
          alt="founder"
          className="rounded-[15px] h-[613px] w-[544px] object-cover block lg:hidden mt-3 border-2 border-[#4DD1F4] bg-black bg-opacity-20"
        />
        <div className="mt-5 text-[#4DD1F4] block lg:hidden text-center">
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-xl lg:text-2xl font-black">Dhruv Tewari</h1>
          </div>
          <p className="text-base lg:text-[24px]">Founder</p>
        </div>
        <p className="flex flex-col gap-1 lg:gap-4 text-lg lg:text-[20px] mt-5 text-center text-[#54453E] lg:text-start">
          <span>
            We believe that brands deserve more than just ‘social media
            management’ or ‘ad campaigns’.
          </span>
          <span className="font-bold"> So, we built a LAB for it.</span>
        </p>
        <div className="mt-5 text-[#4DD1F4] hidden lg:block">
          <div className="flex items-center gap-2">
            <h1 className="text-xl lg:text-[40px] font-black">Dhruv Tewari</h1>
            <Image
              src="/dhruvarrow.png"
              alt="arrow"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <p className="text-base lg:text-[24px]">Founder</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center px-4 lg:px-0 relative">
        {/* Left hanging line */}
        <div className="absolute -top-[140px] xl:left-[24px] lg:left-[1px] w-0.5 h-[920px] bg-[#4DD1F4]"></div>

        {/* Right hanging line */}
        <div className="absolute -top-[140px] right-[1px] w-0.5 h-[920px] bg-[#4DD1F4]"></div>

        <Image
          src="/founder.jpg"
          height={513}
          width={544}
          alt="founder"
          className="rounded-[15px] h-[540px] w-[544px] object-cover border-2 border-[#4DD1F4] bg-black bg-opacity-20"
        />
      </div>
    </div>
  );
}
