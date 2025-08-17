import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Lilita_One } from "next/font/google";
import Link from "next/link";

const lillitaOne = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="bg-[#52D0F8] py-12 lg:py-16 px-4 sm:px-16 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <div>
            <div className="flex flex-col lg:flex-row gap-5 justify-between items-start lg:items-center">
              <div className="p-4 lg:p-10 flex flex-col gap-0 lg:gap-0 items-center mx-auto">
                <div className="flex gap-4 mb-6">
                  <Link
                    href="#"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors block lg:hidden"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors block lg:hidden"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                </div>
                <div className="gap-4 mb-6 hidden lg:flex">
                  <Link
                    href="#"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-sm text-[#54453E] opacity-80 block lg:hidden text-center">
                  The Strategy Lab® is a trademark. All rights reserved.
                </p>
              </div>
              <div className="flex-col gap-2 flex lg:hidden">
                <h3
                  className={`text-xl font-extrabold text-[#54453E]${lillitaOne.className}`}
                >
                  Stay in the Lab Loop
                </h3>
                <p className="text-[#54453E]">
                  Want in on our experiments, strategies, and marketing
                  breakthroughs? Drop your email below — we&apos;ll only send
                  stuff worth testing!
                </p>

                <form className="space-y-4">
                  <div className="flex flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-3xl lg:rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 rounded-3xl lg:rounded-md border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#54453E] text-white py-3 px-6 rounded-3xl lg:rounded-lg font-semibold transition-colors duration-300"
                  >
                    Ready for the experiment!
                  </button>
                </form>
              </div>
              <div className="flex w-full justify-between">
                <div className="space-y-2 mb-4 px-2">
                  <h3
                    className={`text-lg lg:text-xl font-extrabold text-[#54453E] mb-2 ${lillitaOne.className}`}
                  >
                    Quick Links
                  </h3>
                  <Link
                    href="#"
                    className="block text-[#54453E] hover:text-[#8B4513] transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="block text-[#54453E] hover:text-[#8B4513] transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="/"
                    className="block text-[#54453E] hover:text-[#8B4513] transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/"
                    className="block text-[#54453E] hover:text-[#8B4513] transition-colors"
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="/"
                    className="block text-[#54453E] hover:text-[#8B4513] transition-colors"
                  >
                    Contact
                  </Link>
                </div>
                <div className="block lg:hidden w-[50%]">
                  <h3
                    className={`text-lg lg:text-xl font-extrabold text-[#54453E] mb-3 lg:mb-6 ${lillitaOne.className}`}
                  >
                    Get in Touch
                  </h3>
                  <p className="text-[#54453E] mb-6">
                    Have a question, a project, or just wanna nerd out over
                    strategy?{" "}
                    <Link
                      href="mailto:Dhruv@thestrategylab.in"
                      className="text-[#8B4513] hover:underline"
                    >
                      Dhruvth@..
                    </Link>{" "}
                    <br />
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-[#54453E] opacity-80 hidden lg:block">
              The Strategy Lab® is a trademark. All rights reserved.
            </p>
          </div>
          <div className="hidden lg:block">
            <h3
              className={`text-lg lg:text-xl font-extrabold text-[#54453E] mb-3 lg:mb-6 ${lillitaOne.className}`}
            >
              Get in Touch
            </h3>
            <p className="text-[#54453E] mb-6">
              Have a question, a project, or just wanna nerd out over strategy?
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-[#54453E] font-medium">Email:</p>
                <Link
                  href="mailto:Dhruv@thestrategylab.in"
                  className="text-[#8B4513] hover:underline"
                >
                  Dhruv@thestrategylab.in
                </Link>
              </div>
              <div>
                <p className="text-[#54453E] font-medium">Phone:</p>
                <Link
                  href="tel:+919876543210"
                  className="text-[#8B4513] hover:underline"
                >
                  +91 98765 43210
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-col gap-0 hidden lg:flex">
            <h3
              className={`text-xl font-extrabold text-[#54453E] mb-3 lg:mb-6 ${lillitaOne.className}`}
            >
              Stay in the Lab Loop
            </h3>
            <p className="text-[#54453E] mb-6">
              Want in on our experiments, strategies, and marketing
              breakthroughs? Drop your email below — we&apos;ll only send stuff
              worth testing!
            </p>

            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#54453E] text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
              >
                Ready for the experiment!
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
