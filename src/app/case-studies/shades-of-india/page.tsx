"use client";

import Link from "next/link";
import Footer from "@/components/landingpage/footer";
import HeroCTA from "@/components/landingpage/hero-cta";

export default function ShadesOfIndiaCaseStudyPage() {
  return (
    <>
      <div className="bg-white w-full pt-28 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white border-2 border-[#4DD1F4] rounded-lg overflow-hidden">
            <div className="bg-[#4DD1F4] p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h1 className="text-[#54453E] font-bold text-xl sm:text-2xl">
                  How Shades of India Achieved a 2x Scale-Up While Sustaining a
                  9x ROAS
                </h1>
                <span className="bg-white border border-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm">
                  Fashion & Apparel
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 text-[#54453E]">
              <div>
                <h2 className="text-lg font-semibold mb-2">The Challenge</h2>
                <p>
                  As a bridge-to-luxury apparel brand with a high average order
                  value, Shades of India faced low conversion rates typical of
                  premium D2C brands and a plateau in performance from their
                  previous agency. While sale bursts reached a 10x ROAS at
                  modest budgets (INR 2.6L), BAU campaigns averaged around 1.8x
                  ROAS.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">
                  The Strategy & Execution
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Scale with efficiency:</strong> Doubled media spends
                    within 3 months and maintained 9x ROAS during sale events
                    at 2x previous budget.
                  </li>
                  <li>
                    <strong>Optimize traffic signals:</strong> Refined audiences
                    and creatives, aligned targeting with collection themes, and
                    tightened geo-focus toward high-intent regions.
                  </li>
                  <li>
                    <strong>Reallocation for growth:</strong> Paused
                    non-essential brand search campaigns without competitor
                    bidding and reinvested budget into new acquisition.
                  </li>
                  <li>
                    <strong>Maximize non-sale revenue:</strong> Improved BAU
                    ROAS by 95%, from 1.8x to 3.5x, through LPV-optimized
                    engagement campaigns that improved user quality and
                    remarketing pool depth.
                  </li>
                  <li>
                    <strong>Creative slicing across funnels:</strong> Brand
                    films and testimonials for upper funnel, rich product USPs
                    for prospecting, and dynamic feed plus offer-led creatives
                    for remarketing.
                  </li>
                  <li>
                    <strong>Placement-led scaling:</strong> Stories and reels
                    campaigns helped boost Instagram revenue by 3x.
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="bg-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm font-semibold">
                  2x Scale-Up
                </span>
                <span className="bg-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm font-semibold">
                  9x ROAS
                </span>
                <span className="bg-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm font-semibold">
                  95% BAU ROAS Lift
                </span>
              </div>

              <p className="italic">
                What our partner says about us: &quot;Enter Client Testimony&quot;
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
