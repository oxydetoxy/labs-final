"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function ThirdPage() {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const serviceOptions = ["SEO", "Paid Marketing", "Website Development", "Other"];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // Extract form data
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      mobile: formData.get("mobile") as string,
      service: selectedServices,
      company: formData.get("company") as string,
    };

    try {
      // Send to your API route using Nodemailer
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Email sent successfully!");
        router.push("/submitted");
      } else {
        console.error("Email send failed:", result.error);
        alert(`Failed to send email: ${result.message}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error sending your message. Please try again.");
    }
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
            name="fullName"
            required
            placeholder="Full Name*"
            className="w-full rounded-xl border px-5 py-4 bg-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#4DD1F4]"
            aria-label="Full Name"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address*"
            className="w-full rounded-xl border px-5 py-4 bg-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#4DD1F4]"
            aria-label="Email Address"
          />
          <input
            type="tel"
            name="mobile"
            required
            placeholder="Mobile Number*"
            className="w-full rounded-xl border px-5 py-4 bg-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#4DD1F4]"
            aria-label="Mobile Number"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <div className="rounded-xl border px-5 py-4 bg-white">
            <p className="text-sm mb-3 opacity-70">Select services (multiple)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {serviceOptions.map((service) => (
                <label key={service} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="service"
                    value={service}
                    checked={selectedServices.includes(service)}
                    onChange={() => toggleService(service)}
                    className="h-4 w-4 accent-[#4DD1F4]"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company / Brand Name"
            className="w-full rounded-xl border px-5 py-4 bg-white placeholder:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#4DD1F4]"
            aria-label="Company or Brand Name"
          />
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-[#4DD1F4] text-[#54453E] px-6 md:px-8 py-3 rounded-md hover:bg-[#4DD1F4]/90 transition-colors cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
