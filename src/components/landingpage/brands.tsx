"use client";

import Image from "next/image";
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
      { threshold: 0.3 } // Trigger when 30% of section is visible
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
          <button className="bg-[#4DD1F4] text-[#54453E] px-6 py-2 rounded-md font-light mt-4 z-50 hover:bg-[#4DD1F4]/80 hover:scale-105 transition-all duration-300">
            All Services
          </button>
        </div>

        <div
          ref={logosRef}
          className={`mt-[7%] ${animateLogos ? "animate-in" : ""} w-full`}
        >
          <div className="flex items-center justify-between mb-4 w-full">
            <div className="fall-in" style={{ animationDelay: "200ms" }}>
              <div className="h-36 w-36 border border-[#4DD1F4] rounded-md ml-30 rotate-[-63deg] bg-cover bg-center">
                <Image
                  src="/ARADHANA.png"
                  alt="aradhana"
                  height={500}
                  width={500}
                  className="rotate-[63deg] object-cover "
                />
              </div>
            </div>
            <div className="fall-in" style={{ animationDelay: "800ms" }}>
              <div className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[120.12deg] mr-7">
                <Image
                  src="/Little-tag.png"
                  alt="little-tag"
                  height={300}
                  width={300}
                  className="rotate-[-120deg] object-cover mr-5 "
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-5 mb-0 w-full">
            <div
              className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[34.85deg] ml-10  mr-0 fall-in"
              style={{ animationDelay: "1s" }}
            >
              <Image
                src="/one-teacher.png"
                alt="one-teacher"
                height={500}
                width={500}
                className="rotate-[34.85deg] object-cover "
              />
            </div>
            <div
              className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[14.96deg] fall-in"
              style={{ animationDelay: "1s" }}
            >
              <Image
                src="/Payal Jain.png"
                alt="payal-jain"
                height={500}
                width={500}
                className="rotate-[14.96deg] object-cover mt-10 "
              />
            </div>
            <div
              className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[29deg] m-0 fall-in"
              style={{ animationDelay: "1.2s" }}
            >
              <Image
                src="/shades.png"
                alt="shades"
                height={500}
                width={500}
                className="rotate-[-20deg] object-cover mt-5"
              />
            </div>
            <div
              className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[-29deg] fall-in"
              style={{ animationDelay: "1.4s" }}
            >
              <Image
                src="/Vaishali.png"
                alt="vaishali"
                height={500}
                width={500}
                className="rotate-[20deg] object-cover mt-10"
              />
            </div>
            <div
              className="h-36 w-36 border-1 rounded-md border-[#4DD1F4] transform rotate-[-20deg] fall-in"
              style={{ animationDelay: "1.6s" }}
            >
              <Image
                src="/Ksafe.png"
                alt="ksafe"
                height={500}
                width={500}
                className="rotate-[20deg] object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
