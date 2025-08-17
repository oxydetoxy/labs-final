"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, []);

  return (
    <header
      className={`${
        isOpen ? "bg-white" : "bg-[#4DD1F4]"
      } md:bg-white flex gap-3 md:gap-0 justify-end md:justify-between items-center px-4 md:px-5 py-3`}
    >
      {!isOpen && (
        <button
          className="cursor-pointer block md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu />
        </button>
      )}

      {isOpen && (
        <div className="w-full flex flex-col items-center gap-4 md:hidden">
          <div className="w-full flex justify-between items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={56}
              height={56}
              className="md:w-[70px] md:h-[70px] w-14 h-14"
            />
            <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <RxCross2 className="text-3xl" />
            </button>
          </div>
          <Link
            href="/"
            className={`text-sm md:text-base ${
              pathname === "/" ? "font-extrabold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`text-sm md:text-base ${
              pathname === "/services" ? "font-extrabold" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="/lets-talk"
            className={`text-sm md:text-base  ${
              pathname === "/lets-talk" ? "font-extrabold" : ""
            }`}
          >
            Lets Talk
          </Link>
        </div>
      )}
      <div className="hidden md:block">
        <Image
          src="/logo.png"
          alt="logo"
          width={56}
          height={56}
          className="md:w-[70px] md:h-[70px] w-14 h-14"
        />
      </div>
      <div className="items-center text-[#54453E] gap-4 md:gap-5 hidden md:flex">
        <Link
          href="/"
          className={`text-sm md:text-base ${
            pathname === "/" ? "font-extrabold" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/services"
          className={`text-sm md:text-base ${
            pathname === "/services" ? "font-extrabold" : ""
          }`}
        >
          Services
        </Link>
      </div>
      <div className="hidden md:block">
        <Button
          size={"sm"}
          className="md:size-auto md:px-6 md:py-2 cursor-pointer bg-[#54453E] hover:bg-[#54453E]"
        >
          Let&apos;s Talk
        </Button>
      </div>
    </header>
  );
}
