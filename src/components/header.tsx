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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Background class logic
  const getBackgroundClass = () => {
    if (isOpen) {
      return "bg-white"; // Always white when menu is open
    }
    if (isScrolled) {
      return "bg-white shadow-md"; // White when scrolled
    }
    if (pathname === "/about") {
      return "bg-white"; // White for about page
    }
    return "bg-[#4DD1F4]"; // Blue when closed and not scrolled
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex gap-3 md:gap-0 justify-end md:justify-between items-center px-4 md:px-5 py-3 transition-all duration-300 ${getBackgroundClass()}`}
    >
      {/* Mobile Menu Button */}
      {!isOpen && (
        <button
          className="cursor-pointer block md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu />
        </button>
      )}

      {/* Mobile Menu Content */}
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
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm md:text-base ${
              pathname === "/about" ? "font-extrabold" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {`About`}
          </Link>
          <Link
            href="/services"
            className={`text-sm md:text-base ${
              pathname === "/services" ? "font-extrabold" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          
          <Link
            href="/lets-talk"
            className={`text-sm md:text-base ${
              pathname === "/lets-talk" ? "font-extrabold" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {`Let's Talk`}
          </Link>
         
        </div>
      )}

      {/* Logo (Desktop) */}
      <div className="hidden md:block">
        <Image
          src="/logo.png"
          alt="logo"
          width={70}
          height={70}
          className="w-[70px] h-[70px]"
        />
      </div>

      {/* Desktop Nav Links */}
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
        <Link
          href="/about"
          className={`text-sm md:text-base ${
            pathname === "/about" ? "font-extrabold" : ""
          }`}
        >
          About
        </Link>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden md:block">
        <Link href="/lets-talk">
          <Button
            size="sm"
            className="md:px-6 md:py-2 bg-[#54453E] hover:bg-[#54453E]"
          >
            {`Let's Talk`}
          </Button>
        </Link>
      </div>
    </header>
  );
}
