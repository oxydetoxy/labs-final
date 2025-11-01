"use client";
import Image from "next/image";
import Footer from "@/components/landingpage/footer";
import Founder from "@/components/landingpage/founder";
import HeroCTA from "@/components/landingpage/hero-cta";
const data: string[] = [
  "Radical Clarity (Straightforwardness)",
  "Ethical Code (Integrity)",
  "Respect the Variables (Respect)",
  "Evolve Mode: On (Growth Mindset)",
  "Built to Break Norms (Innovation)",
];

export default function AboutPage() {
  return (
    <>
      <div className="pt-24 flex items-center justify-center px-2">
        <div className="relative">
          <Image
            src="/egg.png"
            alt="about"
            width={500}
            height={500}
            style={{ width: "850px", height: "466px" }}
            className="mx-auto hidden lg:block mt-10"
          />
          <Image
            src="/egg2.png"
            alt="about"
            width={400}
            height={300}
            style={{ width: "500px", height: "500px" }}
            className=" block lg:hidden mt-10"
          />
          <Image
            src="/bottle.png"
            alt="about"
            width={150}
            height={130}
            className="absolute top-[50px] left-[40px]"
          />
          <Image
            src="/cloudair.png"
            alt="about"
            width={250}
            height={150}
            className="absolute -right-[4%] top-[84%] lg:top-[420px] lg:left-[10px]"
          />
          <Image
            src="/circlearrow.png"
            alt="about"
            width={150}
            height={50}
            className="absolute hidden lg:block top-[58px] left-[690px]"
          />
          <Image
            src="/settings.png"
            alt="about"
            width={180}
            height={50}
            className="absolute hidden lg:block top-[400px] left-[690px]"
          />
          <h1 className=" mt-[10px] sm:mt-0 text-[20px] sm:text-xl lg:text-3xl w-[250px] md:text-2xl md:w-[350px] lg:w-full top-[200px] left-[25%]   text-center text-[#54444E] absolute  md:top-[220px] md:left-[80px] lg:top-[220px] lg:-left-[20px] font-display sm:left-[140px]">
            Every Great Brand Deserves a Lab-Tested Strategy
          </h1>
          <p className="text-[16px] mt-[40px] sm:mt-[20px] lg:mt-[10px] sm:text-[16px] lg:text-[18px] text-center w-[250px] sm:w-[300px] md:w-[350px] lg:w-full text-[#54453E] absolute top-[250px] left-[25%] md:top-[280px] md:left-[80px] lg:top-[280px] lg:-left-[20px] ">
            Welcome to The Strategy Lab — where marketing meets method, <br />
            creativity is tested, and growth is the only constant.
          </p>
        </div>
      </div>
      <div className="mt-40">
        <div className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-2xl sm:text-4xl fon text-[#54453E]">
            Why We Built the Lab?
          </h2>
          <div className="flex flex-col items-center justify-center w-[300px] sm:w-[630px] relative rounded-lg">
            <p className="text-[18px] sm:text-[18px] text-start text-[#54453E]">
              So, here’s the thing—businesses don’t fail because they lack
              ambition or great products. They struggle because they don’t have
              the right digital strategy, structure, and systems to scale. And
              that’s exactly why The Strategy Lab exists.
              <br />
              <br /> It started with a disconnect—one that Dhruv, our Founder,
              couldn’t ignore.
              <br /> <br /> Having worked on both sides—as part of top brands at
              Reliance like Satya Paul, Mothercare, and Ritu Kumar, and then
              closely with agencies executing their strategies—he noticed a huge
              gap. Brands knew what they wanted but couldn’t communicate it
              effectively.
              <br /> Agencies had the technical skills but missed the business
              vision.
              <br /> The result? Businesses weren’t getting the digital growth
              they actually needed.
              <br /> <br /> The industry wasn’t broken—just misunderstood.
              Digital marketing works, but brands and agencies weren’t speaking
              the same language. <br />
              That’s when Dhruv knew—he could bridge the gap. <br /> <br /> The
              Strategy Lab was built to connect strategy with execution. Not
              just to run ads, but to create full-scale digital solutions that
              actually align with a brand’s vision. <br /> Here’s what that
              looks like:
              <br />
              Websites that don’t just look good—they convert.
              <br /> SEO that actually drives business, not just traffic.
              <br /> Paid campaigns that deliver real ROI, not just impressions.
              <br /> A structured digital strategy that connects everything—so
              businesses stop guessing and start scaling.
              <br /> <br /> Because real growth isn’t random—it’s engineered.{" "}
              <br /> <br /> So, if you’re a business that’s tired of
              misalignment and ready to fix what’s broken, welcome to The
              Strategy Lab. <br /> <br /> Because this? This is where businesses
              come to grow.
            </p>
            <Image
              src="/glowbulb.png"
              alt="about"
              width={250}
              height={150}
              className="absolute top-[2%] hidden lg:block -left-[38%]"
            />
          </div>
          <Image
            src="/glowbulb.png"
            alt="about"
            width={250}
            height={150}
            className="flex justify-center lg:hidden items-center"
          />
          <h2 className="sm:text-4xl text-2xl font-display text-[#54453E]">
            Our Mission
          </h2>
          <div className="flex flex-col items-center justify-center w-[300px] sm:w-[630px] relative rounded-lg">
            <p className="text-[18px] text-start text-[#54453E]">
              To be the go-to growth lab for brands at every stage — from first
              launch to scale-up mode to full-on optimization.
            </p>
            <Image
              src="/lamp.png"
              alt="about"
              width={350}
              height={150}
              className="absolute hidden xl:block -top-[180px] -right-[45%]"
            />
          </div>
          <h2 className="sm:text-4xl font-display text-2xl  text-[#54453E]">
            Our Vision
          </h2>
          <div className="flex flex-col items-center justify-center w-[300px] sm:w-[630px] relative rounded-lg">
            <p className="text-[18px] text-start text-[#54453E]">
              To redefine what growth marketing looks like — by combining sharp
              strategy, bold creativity, and clean data to scale brands with
              precision. Along the way, we’re shaping how the industry sees
              digital marketing: smart, intentional, and science-backed.
            </p>
          </div>
          <h1 className="text-xl sm:text-4xl w-[300px]  sm:w-[630px] flex text-center justify-center items-center text-[#54453E] font-display">
            The Core Compounds of The Strategy Lab
          </h1>
          <div className="w-full flex justify-center items-center relative">
            <Image
              src="/wow2.png"
              alt="about"
              width={1200}
              height={350}
              className="w-full hidden sm:block"
            />
            <Image
              src="/mobileabout.png"
              alt="about"
              width={331}
              height={186}
              className="w-[331px] h-[366px] block sm:hidden"
            />
          </div>

          <div className="bg-[#4DD1F4] h-20 w-full mt-18"></div>
        </div>
      </div>
      <Founder />
      <HeroCTA />
      <Footer />
    </>
  );
}
