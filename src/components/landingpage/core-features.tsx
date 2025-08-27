import FeatureCard from "../ui/feature-card";
import Link from "next/link";

export default function CoreFeatures() {
  return (
    <section className="relative mt-20 md:mt-42 py-12 md:py-16 px-4 md:px-6 text-center ">
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[20%] md:h-[30%] bg-[#4DD1F4] z-10"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center mb-8 md:mb-12">
          <div className="lg:mb-0">
            <h2 className="font-display text-[20px] lg:text-[40px]  text-[#54453E] mb-4">
              The Lab&apos;s Core Experiments
            </h2>
            <Link href="/services">
              <button className="bg-[#4DD1F4] text-[#54453E] px-6 py-2 rounded-md font-medium hidden lg:block cursor-pointer">
                All Services
              </button>
            </Link>
          </div>
          <div className="max-w-sm px-1 flex flex-col items-start gap-4 mt-[20px]">
            <div className="text-gray-600 text-sm -mt-6 lg:-mt-0 leading-relaxed flex flex-col items-start">
              <p className="mb-1 ml-10 lg:ml-0">
                This isn&apos;t a list of services.
              </p>
              <p className="mb-1 ">
                It&apos;s a set of controlled experiments
              </p>
              <p className="">designed to engineer real growth.</p>
            </div>
            <Link href="/services">
              <button className="bg-[#4DD1F4] ml-14 lg:ml-0 text-[#54453E] px-6 py-2 rounded-3xl font-medium block lg:hidden cursor-pointer">
                All Services
              </button>
            </Link>
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x">
          <FeatureCard
            imageUrl="/features/card1.png"
            imageAlt="Performance Advertising"
            number="01"
            title="Performance<br />Advertising"
            description="Results that aren't just impressive. They're profitable. Making every dollar work harder so you don't have to."
            imageWidth={167}
            imageHeight={144}
          />

          <FeatureCard
            imageUrl="/features/card2.png"
            imageAlt="Website Development & Maintenance"
            number="02"
            title="Website<br />Development<br />& Maintenance"
            description="A site that performs 24/7, so you don't have to."
            imageWidth={250.3990020751953}
            imageHeight={140.8494415283203}
          />

          <FeatureCard
            imageUrl="/features/card3.png"
            imageAlt="On-Page & Off-Page SEO"
            number="03"
            title="On-Page &<br />Off-Page SEO"
            description="Get found by the right people, at the right time, for the right reasons."
            imageWidth={255.3990020751953}
            imageHeight={143.8494415283203}
          />
        </div>
      </div>
    </section>
  );
}
