"use client";

import Link from "next/link";
import Footer from "@/components/landingpage/footer";
import HeroCTA from "@/components/landingpage/hero-cta";

export default function PayalJainCaseStudyPage() {
  return (
    <>
      <div className="bg-white w-full pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white border-2 border-[#4DD1F4] rounded-lg overflow-hidden">
            <div className="bg-[#4DD1F4] p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-[#54453E] font-bold text-xl sm:text-2xl">
                  How Payal Jain Achieved a 5.4% Ad Recall Rate for Their First
                  Digital Campaign
                </h1>
                <span className="bg-white border border-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm">
                  Fashion & Couture
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 text-[#54453E]">
              <div>
                <h2 className="text-lg font-semibold mb-2">The Challenge</h2>
                <p>
                  As an established offline couture label, Payal Jain had no
                  prior digital advertising presence. Their transition to
                  digital needed to build buzz for the Enchanted Forest
                  collection launch while avoiding junk impressions, low-quality
                  engagement, and weak recall from generic upper-funnel
                  campaigns.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">
                  The Strategy & Execution
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Scale with precision:</strong> Launched top-funnel
                    Meta campaigns centered on Reach and Traffic, tuned for real
                    visibility and premium-audience alignment.
                  </li>
                  <li>
                    <strong>Optimize for attention:</strong> Built and tested
                    audience cohorts in short bursts, then scaled the highest
                    ad-recall segment.
                  </li>
                  <li>
                    <strong>Frequency-driven lift:</strong> Increased controlled
                    frequency to 4.5x for the winning audience to deepen brand
                    imprint while maintaining relevance.
                  </li>
                  <li>
                    <strong>Creative slicing by funnel stage:</strong> Cinematic
                    teasers for awareness, fashion week moments and commentary
                    for engagement, and traffic-focused social handle pushes.
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm font-semibold">
                  5.42% Ad Recall Lift
                </span>
                <span className="bg-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm font-semibold">
                  2.5M+ Reach
                </span>
                <span className="bg-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm font-semibold">
                  2M+ Engagements
                </span>
                <span className="bg-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm font-semibold">
                  10,000+ Active Sessions
                </span>
              </div>

              <p className="italic">
                What our partner says about us: &quot;We love Dhruv he is so
                sexy&quot;
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/lets-talk"
                  className="inline-block bg-[#4DD1F4] text-[#54453E] px-4 py-2 rounded-md font-semibold hover:bg-[#3db8d9] transition-colors"
                >
                  Get In Touch
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-block bg-[#54453E] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#3d3329] transition-colors"
                >
                  Back to Case Studies
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>

      <HeroCTA />
      <Footer />
    </>
  );
}
