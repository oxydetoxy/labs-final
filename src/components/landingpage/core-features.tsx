import FeatureCard from "../ui/feature-card";

export default function CoreFeatures() {
  return (
    <section className="relative mt-20 md:mt-42 py-12 md:py-16 px-4 md:px-6">
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[20%] md:h-[30%] bg-[#4DD1F4] z-10"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center mb-8 md:mb-12">
          <div className="lg:mb-0">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-[#54453E] mb-4">
              The Lab&apos;s Core Experiments
            </h2>
            <button className="bg-[#4DD1F4] text-[#54453E] px-6 py-2 rounded-md font-medium hidden lg:block">
              All Services
            </button>
          </div>
          <div className="text-left lg:text-right max-w-sm px-1 flex flex-col items-center gap-4">
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              This isn&apos;t a list of services.
              <br />
              It&apos;s a set of controlled experiments
              <br />
              designed to engineer real growth.
            </p>
            <button className="bg-[#4DD1F4] text-[#54453E] px-6 py-2 rounded-3xl font-medium block lg:hidden">
              All Services
            </button>
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-3 md:gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x">
          <FeatureCard
            imageUrl="/features/card1.png"
            imageAlt="Performance Advertising"
            number="01"
            title="Performance<br />Advertising"
            description="Results that aren't just impressive. They're profitable. Making every dollar work harder so you don't have to."
          />

          <FeatureCard
            imageUrl="/features/card2.png"
            imageAlt="Website Development & Maintenance"
            number="02"
            title="Website<br />Development<br />& Maintenance"
            description="A site that performs 24/7, so you don't have to."
          />

          <FeatureCard
            imageUrl="/features/card3.png"
            imageAlt="On-Page & Off-Page SEO"
            number="03"
            title="On-Page &<br />Off-Page SEO"
            description="Get found by the right people, at the right time, for the right reasons."
          />
        </div>
      </div>
    </section>
  );
}
