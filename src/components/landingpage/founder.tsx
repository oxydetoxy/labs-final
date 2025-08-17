import Image from "next/image";

export default function Founder() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 lg:gap-16 max-w-7xl mt-16 lg:mt-24 mx-auto px-4 py-10">
      <div className="m-0 lg:m-24 flex flex-col items-center lg:items-start">
        <h1 className="text-4xl lg:text-7xl hidden lg:block text-[#54453E]">
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
          height={444}
          width={313}
          alt="founder"
          className="rounded-lg h-[444px] w-[400] object-cover block lg:hidden mt-3"
        />
        <div className="mt-5 text-[#4DD1F4] block lg:hidden text-center">
          <h1 className="text-xl lg:text-2xl font-black">Dhruv Tewari</h1>
          <p className="text-base lg:text-lg">Founder</p>
        </div>
        <p className="flex flex-col gap-1 lg:gap-4 text-lg lg:text-lg mt-5 text-center text-[#54453E] lg:text-start">
          <span>
            We believe that brands deserve more than just ‘social media
            management’ or ‘ad campaigns’.
          </span>
          <span className="font-bold"> So, we built a LAB for it.</span>
        </p>
        <div className="mt-5 text-[#4DD1F4] hidden lg:block">
          <h1 className="text-xl lg:text-2xl font-black">Dhruv Tewari</h1>
          <p className="text-base lg:text-lg">Founder</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center px-4 lg:px-0">
        <Image
          src="/founder.jpg"
          height={444}
          width={313}
          alt="founder"
          className="rounded-lg h-[444px] w-[400] object-cover"
        />
      </div>
    </div>
  );
}
