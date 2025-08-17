"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function ThirdPage() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/submitted");
  };
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 text-[#54453E]">
      <div className="grid md:grid-cols-12 items-start gap-6 md:gap-10">
        <div className="md:col-span-6">
          <h2 className="font-display text-2xl md:text-4xl">
            Here&apos;s what to expect
          </h2>
        </div>
        <div className="md:col-span-6">
          <p className="text-sm md:text-base opacity-80">
            Once your form lands in our inbox, we&apos;ll circle back within
            24–48 hours with brainpower locked and loaded.
          </p>
        </div>
      </div>

      <div className="border-t my-6" />

      <form className="grid gap-5" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          <input
            type="text"
            required
            placeholder="Full Name*"
            className="w-full rounded-xl border px-5 py-4 bg-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#4DD1F4]"
            aria-label="Full Name"
          />
          <input
            type="email"
            required
            placeholder="Email Address*"
            className="w-full rounded-xl border px-5 py-4 bg-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#4DD1F4]"
            aria-label="Email Address"
          />
          <input
            type="tel"
            required
            placeholder="Mobile Number*"
            className="w-full rounded-xl border px-5 py-4 bg-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#4DD1F4]"
            aria-label="Mobile Number"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select One" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="seo">SEO</SelectItem>
              <SelectItem value="paid-marketing">Paid Marketing</SelectItem>
              <SelectItem value="web-dev">Website Development</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <input
            type="text"
            placeholder="Company / Brand Name"
            className="w-full rounded-xl border px-5 py-4 bg-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#4DD1F4]"
            aria-label="Company or Brand Name"
          />
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-[#4DD1F4] text-[#54453E] px-6 md:px-8 py-3 rounded-md hover:bg-[#4DD1F4]/90 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
