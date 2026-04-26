"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/landingpage/footer";
import HeroCTA from "@/components/landingpage/hero-cta";
import {
  Shirt,
  Heart,
  ShoppingCart,
  Bell,
  Settings,
  Building,
} from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <>
      <div className="w-full">
        {/* Hero Section with Image */}
        <div className="relative mt-12 w-full">
          <Image
            src="/casestudies.png"
            alt="case-studies"
            width={1000}
            height={1000}
            className="w-full object-cover   h-auto"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-[#54453E] text-center text-[18px]  sm:text-[24px]  lg:text-4xl font-display px-4">
              Explore Our Case Studies a.k.a Marketing Lab Records
            </h1>
            <p className="text-[#54453E] text-center text-[14px] sm:text-2xl lg:text-3xl sm:mt-4 px-4">
              Our Work, Their Wins
            </p>
            <Link
              href="/lets-talk"
              className="bg-[#54453E] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md sm:mt-3 cursor-pointer text-sm sm:text-lg hover:bg-[#3d3329] transition-colors"
            >
              Get In Touch!
            </Link>
            <div className="absolute bottom-0 left-0 right-0 h-[20%] md:h-[30%]  z-10"></div>
          </div>
        </div>
      </div>

      {/* Case Studies Grid and Industry Filter Section */}
      <div className="bg-white w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Case Studies Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Case Study Card 1 */}
                <div className="bg-white border-2 border-[#4DD1F4] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-[#4DD1F4] p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-[#54453E] font-bold text-lg">
                        Shades of India
                      </h3>
                      <span className="bg-white border border-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm">
                        Fashion & Apparel
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#54453E] mb-4">
                      2x scale-up while sustaining 9x ROAS during sale events.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm font-semibold">
                        2x Scale-Up
                      </span>
                      <span className="bg-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm font-semibold">
                        9x ROAS
                      </span>
                    </div>
                    <Link
                      href="/case-studies/shades-of-india"
                      className="inline-block bg-[#4DD1F4] text-[#54453E] px-4 py-2 rounded-md font-semibold hover:bg-[#3db8d9] transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Case Study Card 2 */}
                <div className="bg-white border-2 border-[#4DD1F4] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-[#4DD1F4] p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-[#54453E] font-bold text-lg">
                        Payal Jain
                      </h3>
                      <span className="bg-white border border-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm">
                        Fashion & Couture
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#54453E] mb-4">
                      Achieved 5.42% ad recall in a first-ever digital campaign.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm font-semibold">
                        5.42% Ad Recall
                      </span>
                      <span className="bg-[#4DD1F4] text-[#54453E] px-3 py-1 rounded-full text-sm font-semibold">
                        2.5M+ Reach
                      </span>
                    </div>
                    <Link
                      href="/case-studies/payal-jain"
                      className="inline-block bg-[#4DD1F4] text-[#54453E] px-4 py-2 rounded-md font-semibold hover:bg-[#3db8d9] transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Industry Filter Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 lg:sticky lg:top-24">
                <h2 className="text-2xl sm:text-3xl font-display text-[#54453E] mb-4">
                  In Your Industry?
                </h2>
                <p className="text-[#54453E] mb-6 text-sm sm:text-base">
                  See how we&apos;ve helped businesses like yours thrive. Browse
                  our case studies by industry.
                </p>

                <div className="flex flex-col gap-3 mb-6">
                  {/* Industry Buttons */}
                  <button className="flex items-center gap-3 bg-[#4DD1F4] text-white px-4 py-3 rounded-md hover:bg-[#3db8d9] transition-colors text-left">
                    <Shirt className="w-5 h-5" />
                    <span className="font-semibold">Fashion & Apparel</span>
                  </button>

                  <button className="flex items-center gap-3 bg-[#4DD1F4] text-white px-4 py-3 rounded-md hover:bg-[#3db8d9] transition-colors text-left">
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">Health & Wellness</span>
                  </button>

                  <button className="flex items-center gap-3 bg-[#4DD1F4] text-white px-4 py-3 rounded-md hover:bg-[#3db8d9] transition-colors text-left">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="font-semibold">E-Commerce</span>
                  </button>

                  <button className="flex items-center gap-3 bg-[#4DD1F4] text-white px-4 py-3 rounded-md hover:bg-[#3db8d9] transition-colors text-left">
                    <Bell className="w-5 h-5" />
                    <span className="font-semibold">Food & Beverage</span>
                  </button>

                  <button className="flex items-center gap-3 bg-[#4DD1F4] text-white px-4 py-3 rounded-md hover:bg-[#3db8d9] transition-colors text-left">
                    <Settings className="w-5 h-5" />
                    <span className="font-semibold">Technology</span>
                  </button>

                  <button className="flex items-center gap-3 bg-[#4DD1F4] text-white px-4 py-3 rounded-md hover:bg-[#3db8d9] transition-colors text-left">
                    <Building className="w-5 h-5" />
                    <span className="font-semibold">Real Estate</span>
                  </button>
                </div>

                <button className="w-full bg-[#54453E] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#3d3329] transition-colors">
                  Browse All Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroCTA />
      <Footer />
    </>
  );
}
