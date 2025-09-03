"use client";
import Image from "next/image";
import { useState } from "react";

// Data for different slides
const slideData = [
  {
    id: 1,
    icon: "/new1.png",
    title: "Diagnose the Gaps",
    description: "Understand your goals.\nSpot what's missing",
    topIcon: "/update.svg",
  },
  {
    id: 2,
    icon: "/new2.png",
    title: "Define What Matters",
    description: "Find the areas worth \nfixing first.",

    topIcon: "/update.svg",
  },
  {
    id: 3,
    icon: "/new3.png",
    title: "Design a Custom Strategy",
    description: "Build a clear plan around \nyour needs.",
    topIcon: "/update.svg",
  },
  {
    id: 4,
    icon: "/new4.png",
    title: "Launch. Test. Learn.",
    description: "Go live. Track results. \nImprove quickly.",
    topIcon: "/update.svg",
  },
  {
    id: 5,
    icon: "/new5.png",
    title: "Scale What Works",
    description: "Double down on \nwhat’s working",
    topIcon: "/update.svg",
  },
];

// Mobile Diagram Component
function MobileDiagram() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const currentData = slideData[currentSlide];

  return (
    <div className="flex flex-col items-center justify-center block md:hidden mt-40">
      {/* Connecting lines */}
      <div className="flex justify-center mb-2 relative w-[264px]">
        {/* Left line - horizontal then vertical */}
        <div className="absolute w-0.5 h-[230px] bg-[#4DD1F4] left-[-24px] top-[-105px]"></div>
        <div className="absolute w-0.5 h-6 bg-[#4DD1F4] left-[-12px] rotate-90 top-28"></div>
        {/* Right line - horizontal then vertical */}
        <div className="absolute w-0.5 h-[230px] bg-[#4DD1F4] right-[-24px]  top-[-105px]"></div>
        <div className="absolute w-0.5 h-6 bg-[#4DD1F4] right-[-12px] rotate-90 top-28"></div>
        {/* Top horizontal connecting line */}
        <div className="absolute w-[308px] h-0.5 bg-[#4DD1F4] top-[-105px] left-[-24px]"></div>
        {/* Image in middle of horizontal line */}
        <div className="absolute top-[-125px] left-1/2 transform -translate-x-1/2 z-20">
          <Image
            src={currentData.topIcon}
            alt="icon"
            width={30}
            height={30}
            className="w-[96px] h-[96px] -translate-y-8 object-cover"
          />
        </div>
      </div>

      {/* Single box with swipe */}
      <div
        className="relative w-[264px] h-[212px] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 264}px)` }}
        >
          {slideData.map((data, index) => (
            <div
              key={index}
              className="w-[264px] h-[212px] border-2 flex flex-col justify-start items-center gap-4 border-[#4DD1F4] rounded-md shadow-lg drop-shadow-md p-2 flex-shrink-0  "
            >
              <div className="flex justify-center">
                <Image
                  src={data.icon}
                  alt="cta"
                  width={41}
                  height={40}
                  className="w-[61px] h-[40px] object-contain"
                />
              </div>

              <div className="text-center">
                <h1 className="text-lg font-bold">{data.title}</h1>
                <p className="text-sm whitespace-pre-line">
                  {data.description}
                </p>
              </div>

              {/* Progress dots inside box */}
              <div className="flex justify-center space-x-2 mt-2">
                {slideData.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      dotIndex === index
                        ? "bg-[#4DD1F4]"
                        : "border border-[#4DD1F4]"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CTA() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between  max-w-7xl mx-auto mt-10 px-4">
        <h1 className="text-2xl md:text-[40px] font-display text-center md:text-left text-[#54453E]">
          Inside Our 5-Step Growth Engine
        </h1>
        <p className="text-base md:text-[24px] text-center md:text-left text-[#54453E]">
          Growth isn&apos;t guessed. It&apos;s engineered.
        </p>
      </div>
      <Image
        src="/section.png"
        alt="cta"
        width={1000}
        height={1000}
        className="w-full max-w-6xl mx-auto mt-[80px] px-4 h-auto hidden md:block"
      />
      <div className="block md:hidden mt-5">
        <MobileDiagram />
      </div>
    </div>
  );
}
