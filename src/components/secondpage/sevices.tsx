import Image from "next/image";

interface FeatureItem {
  title: string;
  icon: string;
}

interface Section {
  number: string;
  title: string;
  blurbTop: string;
  blurbBottom: string;
  features: FeatureItem[];
}

function FeaturePill({ title, icon }: FeatureItem) {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3 sm:gap-4 bg-white border rounded-xl px-3 sm:px-4 py-3 sm:py-4">
      <div className="leading-tight">
        <div className="text-[13px] md:text-[16px] text-[#54453E] text-center">
          {title}
        </div>
      </div>
      <div className="flex object-contain items-center justify-center rounded-lg bg-[#F2EFEA]">
        <Image src={icon} alt="icon" width={88} height={85} />
      </div>
    </div>
  );
}

export default function Services() {
  const sections: Section[] = [
    {
      number: "01",
      title: "Website Development",
      blurbTop: "Websites That Convert, Not Just Exist ",
      blurbBottom:
        "A great website isn't just a digital presence — it's your most important sales tool.  At TSL, we approach web development with a focus on both form and function. From clean UI/UX design to back-end performance and long-term maintenance, we ensure your website keeps up with both your business goals and your audience’s expectations.",
      features: [
        { title: "End-to-End Web Development", icon: "/nine.png" },
        { title: "UI/UX Optimization", icon: "/ten.png" },
        { title: "Tool & Analytics Setup", icon: "/eleven.png" },
        { title: "Website Maintenance", icon: "/twelve.png" },
      ],
    },
    {
      number: "02",
      title: "Performance Marketing",
      blurbTop: "Engineered Ad Campaigns That Actually Work.",
      blurbBottom:
        "At TSL, we run performance like scientists by combining smart targeting, behavioral data, and CRO-backed strategies. We don’t just spend your money; we stress-test every rupee to maximize returns and scale the right signals.",
      features: [
        { title: "Performance & Funnel Audit", icon: "/five.png" },
        { title: "Digital Brand Visibility", icon: "/six.png" },
        { title: "Customer Journey Engagement", icon: "/seven.png" },
        { title: "Revenue & Lead Generation", icon: "/eight.png" },
      ],
    },
    {
      number: "03",
      title: "SEO",
      blurbTop: "SEO That Drives Rankings, Not Just Traffic.",
      blurbBottom:
        "A website without SEO is like a store in the middle of a desert — no one's going to find it. On-page SEO ensures that every page on your site is optimized for search engines and user experience. Off-page SEO builds your site's authority, driving traffic and boosting rankings. Together, they are the pillars of successful online visibility. .",
      features: [
        { title: "Site Health & Technical SEO", icon: "/first.png" },
        { title: "Keyword-Led Content Optimization", icon: "/second.png" },
        { title: "Backlink Strategy & Authority Building", icon: "/third.png" },
        { title: "Rank Tracking & SEO Analytics", icon: "/four.png" },
      ],
    },
  ];

  return (
    <div className="text-[#54453E]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-16">
        <h2 className="font-display text-2xl sm:text-3xl md:text-5xl mb-6 md:mb-8">
          Our Services Include
        </h2>
        <div className="border-t" />
        {sections.map((section) => (
          <div
            key={section.title}
            className="py-8 md:py-12 border-b last:border-b-0"
          >
            <div className="grid gap-6 md:gap-8 md:grid-cols-12 items-start">
              <div className="md:col-span-1 hidden md:block">
                <div className="text-sm md:text-base opacity-80">
                  {section.number}
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full md:hidden">
                <h3 className="font-black text-[16px] flex gap-4">
                  <span className="opacity-70"> {section.number}</span>{" "}
                  <span className="font-bold">{section.title}</span>
                </h3>
                <p className="text-sm ">{section.blurbTop}</p>
              </div>
              <div className="hidden md:block col-span-5">
                <h3 className="font-black text-2xl md:text-4xl">
                  {section.title}
                </h3>
                <p className="mt-3  md:mt-4 text-sm md:text-base opacity-80">
                  {section.blurbTop}
                </p>
                <p className="mt-3 w-[90%] md:mt-4 text-sm md:text-base opacity-80 hidden md:block">
                  {section.blurbBottom}
                </p>
              </div>
              <div className="md:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
                {section.features.map((feature) => (
                  <FeaturePill key={feature.title} {...feature} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
