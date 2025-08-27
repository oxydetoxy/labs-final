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
            <div className="flex flex-col lg:flex-row gap-8 justify-center lg:justify-between items-center lg:items-start ml-6 sm:ml-8 text-center lg:text-left">
              <div className="p-4 lg:p-6 flex flex-col gap-0 lg:gap-0 items-center lg:items-start">
                <div className="flex gap-4 mb-6 justify-center lg:justify-start -ml-14 ">
                  <Link
                    href="https://www.linkedin.com/company/thestrategylab-1618/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 lg:w-5 lg:h-5" />
                  </Link>
                  <Link
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors"
                  >
                    <Youtube className="w-6 h-6 lg:w-5 lg:h-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/thestrategylabhq?igsh=MW9nZDAxYTZmYWlqMw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors block lg:hidden"
                  >
                    <Instagram className="w-6 h-6 lg:w-5 lg:h-5" />
                  </Link>
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors block lg:hidden"
                  >
                    <Facebook className="w-6 h-6 lg:w-5 lg:h-5" />
                  </Link>
                </div>
                <div className="gap-4 mb-6 hidden lg:flex -ml-14">
                  <Link
                    href="https://www.instagram.com/thestrategylabhq?igsh=MW9nZDAxYTZmYWlqMw%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 h-max rounded-full lg:rounded-lg hover:scale-105 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <div className="flex-col gap-2 flex lg:hidden">
                <h3
                  className={`text-[20px] sm:text-[36px] font-normal text-[#54453E] leading-[100%] ${lillitaOne.className}`}
                >
                  Stay in the Lab Loop
                </h3>
                <p className="text-[14px] sm:text-base text-[#54453E]">
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
                <div className="space-y-2 mb-4">
                  <h3
                    className={`text-[20px] sm:text-[36px] font-normal text-[#54453E] mb-6 leading-[100%] ${lillitaOne.className}`}
                  >
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/"
                      className="block text-[14px] sm:text-base text-[#54453E] hover:text-[#8B4513] transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/services"
                      className="block text-[14px] sm:text-base text-[#54453E] hover:text-[#8B4513] transition-colors"
                    >
                      Services
                    </Link>
                    <Link
                      href="/lets-talk"
                      className="block text-[14px] sm:text-base text-[#54453E] hover:text-[#8B4513] transition-colors"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="block lg:hidden w-[45%]">
                  <h3
                    className={`text-[20px] sm:text-[36px] font-normal text-[#54453E] mb-3 lg:mb-6 leading-[100%] ${lillitaOne.className}`}
                  >
                    Get in Touch
                  </h3>
                  <p className="text-[14px] sm:text-base text-[#54453E] mb-6">
                    Have a question, a project, or just wanna nerd out over
                    strategy?{" "}
                    <Link
                      href="mailto:contactus@thestrategylab.in"
                      className="text-[#8B4513] hover:underline "
                    >
                      contactus@thestrategylab.in
                    </Link>{" "}
                    <br />
                    <Link
                      href="tel:+919818846104"
                      className="text-[#8B4513] hover:underline"
                    >
                      +91 9818846104
                    </Link>
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
              className={`text-[36px] font-normal text-[#54453E] mb-3 lg:mb-6 leading-[100%] ${lillitaOne.className}`}
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
                  href="mailto:contactus@thestrategylab.in"
                  className="text-[#8B4513] hover:underline"
                >
                  contactus@thestrategylab.in
                </Link>
              </div>
              <div>
                <p className="text-[#54453E] font-medium">Phone:</p>
                <Link
                  href="tel:+919818846104"
                  className="text-[#8B4513] hover:underline"
                >
                  +91 9818846104
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-col gap-0 hidden lg:flex">
            <h3
              className={`text-[36px] font-normal text-[#54453E] mb-3 lg:mb-6 leading-[100%] ${lillitaOne.className}`}
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

        {/* Trademark line - mobile centered, desktop stays in original position */}
        <div className="mt-8 lg:hidden">
          <p className="text-sm text-[#54453E] opacity-80 text-center">
            The Strategy Lab® is a trademark. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
