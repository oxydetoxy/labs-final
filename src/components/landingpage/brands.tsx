"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Brands() {
  const [animateLogos, setAnimateLogos] = useState(false);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset animation state when component mounts
    setAnimateLogos(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateLogos(true);
          observer.disconnect(); // Only trigger once
        }
      },
      { threshold: 0.1 } // Trigger when 10% of section is visible (better for mobile)
    );

    if (logosRef.current) {
      observer.observe(logosRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="w-full flex items-center justify-center">
      <div className="pb-7 rounded-lg flex flex-col items-center justify-center border border-[#4DD1F4] h-auto w-[95%] overflow-x-hidden">
        <div className="flex flex-col items-center justify-center translate-y-25">
          <h1 className="text-lg sm:text-xl md:text-2xl text-center px-2">
            Real Brands. Real Experiments.
          </h1>
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
            Real Results
          </h1>
          <Link href="/services">
            <button className="bg-[#4DD1F4] text-[#54453E] px-6 py-2 rounded-md font-light mt-4 mb-8 z-50 hover:bg-[#4DD1F4]/80 hover:scale-105 transition-all duration-300">
              All Services
            </button>
          </Link>
        </div>

        <div
          ref={logosRef}
          className={`${animateLogos ? "animate-in" : ""} w-full mt-30`}
        >
          {/* First row - 2 items */}
          <div className="flex items-center justify-between  sm:justify-center sm:gap-8 md:justify-between mb-2 md:mb-4 w-full px-2 sm:px-4">
            <div className="fall-in" style={{ animationDelay: "200ms" }}>
              <div className="h-24 w-24 translate-y-58 rotate-[20deg] translate-x-2 sm:translate-y-0 translate-x-0  sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-46 lg:w-46 border-2 border-[#4DD1F4] rounded-md sm:ml-0 md:ml-0 lg:ml-30 rotate-[-63deg] bg-cover bg-center">
                <Image
                  src="/ARADHANA.png"
                  alt="aradhana"
                  height={500}
                  width={500}
                  className="rotate-[63deg] object-cover"
                />
              </div>
            </div>
            <div className="fall-in" style={{ animationDelay: "800ms" }}>
              <div className="h-24 w-24 translate-y-28 -translate-x-18 sm:translate-y-0 sm:translate-x-0 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-46 lg:w-46 border-2 border-[#4DD1F4] rounded-md transform rotate-[44.12deg] sm:mr-0 md:mr-7 overflow-hidden flex items-center justify-center">
                <Image
                  src="/Little-tag.png"
                  alt="little-tag"
                  height={500}
                  width={500}
                  className="rotate-[-60deg] object-cover  h-4/5"
                />
              </div>
            </div>
          </div>

          {/* Second row - 5 items */}
          <div className="hidden sm:flex items-center justify-between mt-2 md:mt-5 mb-0 w-full px-2 sm:px-4">
            <div
              className="h-24 w-24  sm:h-28 sm:w-28 md:h-40 md:w-66 md:rotate-[-14.85deg] md:-translate-x-7 lg:h-46 lg:w-46 border-2 border-[#4DD1F4] rounded-md transform rotate-[34.85deg] sm:ml-0 md:ml-10 lg:ml-20 fall-in "
              style={{ animationDelay: "1s" }}
            >
              <Image
                src="/one-teacher.png"
                alt="one-teacher"
                height={500}
                width={500}
                className="rotate-[34.85deg] object-cover"
              />
            </div>
            <div
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-40 md:w-66 lg:h-46 lg:w-46 border-2 border-[#4DD1F4] rounded-md transform rotate-[14.96deg] fall-in"
              style={{ animationDelay: "1s" }}
            >
              <Image
                src="/Payal Jain.png"
                alt="payal-jain"
                height={500}
                width={500}
                className="rotate-[14.96deg] object-cover translate-y-10"
              />
            </div>
            <div
              className="h-24 w-24  sm:h-28  sm:w-28 md:h-40 md:w-66 lg:h-46 lg:w-46 border-2 border-[#4DD1F4] rounded-md transform rotate-[29deg] fall-in"
              style={{ animationDelay: "1.2s" }}
            >
              <Image
                src="/shades.png"
                alt="shades"
                height={500}
                width={500}
                className="rotate-[-50deg] object-cover translate-y-10"
              />
            </div>
            <div
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-40 md:w-66 lg:h-46 lg:w-46  border-2 border-[#4DD1F4] rounded-md transform rotate-[-12deg] fall-in overflow-hidden flex items-center justify-center"
              style={{ animationDelay: "1.4s" }}
            >
              <Image
                src="/Vaishali.png"
                alt="vaishali"
                height={500}
                width={500}
                className="rotate-[12deg] object-cover "
              />
            </div>
            <div
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-40 md:w-66 lg:h-46 lg:w-46 border-2 border-[#4DD1F4] rounded-md transform rotate-[-20deg] fall-in sm:mr-0 md:mr-10 lg:mr-30 overflow-hidden flex items-center justify-center"
              style={{ animationDelay: "1.6s" }}
            >
              <Image
                src="/Ksafe.png"
                alt="ksafe"
                height={500}
                width={500}
                className="rotate-[20deg] object-cover w-4/5 h-4/5"
              />
            </div>
          </div>

          {/* Mobile layout - Grid for smaller screens */}
          <div className="sm:hidden grid grid-cols-2 gap-4 mt-2 mb-0 w-full px-4">
            <div
              className="h-24 w-24 translate-y-60 -translate-x-8 mx-auto sm:translate-y-0 sm:translate-x-0 border-2 border-[#4DD1F4] rounded-md transform rotate-[34.85deg] fall-in"
              style={{ animationDelay: "1s" }}
            >
              <Image
                src="/one-teacher.png"
                alt="one-teacher"
                height={500}
                width={500}
                className="rotate-[34.85deg] object-cover"
              />
            </div>
            <div
              className="h-24 w-24 translate-y-30 translate-x-7 mx-auto border-2 border-[#4DD1F4] rounded-md transform rotate-[14.96deg] fall-in sm:translate-y-0 sm:translate-x-0"
              style={{ animationDelay: "1.1s" }}
            >
              <Image
                src="/Payal Jain.png"
                alt="payal-jain"
                height={500}
                width={500}
                className="rotate-[-14.96deg] object-cover translate-y-7"
              />
            </div>
            <div
              className="h-24 w-24 translate-x-20 rotate-[-20deg] mx-auto sm:translate-x-0 border-2 border-[#4DD1F4] rounded-md transform  fall-in"
              style={{ animationDelay: "1.2s" }}
            >
              <Image
                src="/shades.png"
                alt="shades"
                height={500}
                width={500}
                className="rotate-[-40deg] object-cover translate-y-7"
              />
            </div>
            <div
              className="h-24 w-24 translate-y-30 translate-x-8 mx-auto rotate-[16deg] sm:translate-y-0 sm:translate-x-0 border-2 border-[#4DD1F4] rounded-md transform rotate-[-29deg] fall-in"
              style={{ animationDelay: "1.3s" }}
            >
              <Image
                src="/Vaishali.png"
                alt="vaishali"
                height={500}
                width={500}
                className="rotate-[-26deg]  object-cover translate-y-7"
              />
            </div>
            <div
              className="h-24 w-24 mx-auto border-2 border-[#4DD1F4] rounded-md transform rotate-[-20deg] fall-in col-span-2 justify-self-center"
              style={{ animationDelay: "1.4s" }}
            >
              <Image
                src="/Ksafe.png"
                alt="ksafe"
                height={500}
                width={500}
                className="rotate-[-90deg] object-cover w-4/5 h-4/5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
