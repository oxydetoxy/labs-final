import type { Metadata } from "next";
import Footer from "@/components/landingpage/footer";

export const metadata: Metadata = {
  title: "Digital Marketing Budget Allocation Guide | TSL",
  description:
    "Learn how to allocate your digital marketing budget across channels using a funnel-based framework for smarter marketing spend.",
};

export default function MarketingBudgetAllocationPage() {
  return (
    <main className="pt-32 pb-16 px-4 bg-white text-[#54453E]">
      <section className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B4513] mb-3">
          Blog · D2C Growth
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight mb-4">
          How to Allocate Your Digital Marketing Budget Across Channels
        </h1>
        <p className="text-lg sm:text-xl mb-4">
          &quot;What percentage should go to Meta vs. Google vs. SEO?&quot;
        </p>
        <p className="mb-4">
          It&apos;s one of the most common questions we get — and one of the
          hardest to answer with a single formula. Budget allocation depends on
          your category, growth stage, competitive landscape, and business model.
        </p>
        <p className="mb-6">
          That said, there are principles that consistently hold true for premium
          D2C brands. This framework won&apos;t give you exact percentages (those
          need to be tested for your specific situation), but it will give you a
          rational approach to making allocation decisions.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          Why Budget Allocation Matters More for Premium D2C
        </h2>
        <p className="mb-4">High-AOV brands can&apos;t waste impressions.</p>
        <p className="mb-4">
          When you&apos;re selling ₹2,000 products, inefficient spend is
          recoverable. When you&apos;re selling ₹15,000 products, every rupee
          directed at the wrong audience delays growth.
        </p>
        <p className="mb-4">
          Premium D2C economics also have longer consideration windows. Someone
          buying a ₹500 item might convert on first click. Someone buying a
          ₹8,000 item might need 4–6 touchpoints across 2–3 weeks.
        </p>
        <p className="mb-6">
          This changes how you think about budget allocation. You&apos;re not
          just optimizing for immediate conversions — you&apos;re investing in
          the touchpoints that move buyers through a longer journey.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          The Funnel-Based Framework
        </h2>
        <p className="mb-4">
          Start with funnel stages, then map channels to each:
        </p>
        <ul className="space-y-4 mb-6">
          <li>
            <p>
              <span className="font-semibold">
                Upper Funnel (Awareness): 15–30% of budget
              </span>{" "}
              — Goal: Build brand familiarity with cold audiences. Channels: Meta
              brand campaigns, YouTube, programmatic display, PR, influencer
              partnerships. Metrics: Reach, frequency, video view completion,
              brand lift.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">
                Mid Funnel (Consideration): 30–45% of budget
              </span>{" "}
              — Goal: Deepen engagement with interested audiences. Channels: Meta
              retargeting, Google Discovery, content marketing, email nurturing,
              SEO content. Metrics: Site engagement, email signups, content
              consumption, return visits.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">
                Lower Funnel (Conversion): 25–40% of budget
              </span>{" "}
              — Goal: Convert high-intent prospects. Channels: Google Search
              (brand + non-brand), Meta conversion campaigns, retargeting, email
              conversion sequences. Metrics: ROAS, conversion rate, cost per
              acquisition.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">
                Retention: 10–15% of budget
              </span>{" "}
              — Goal: Increase repeat purchases and LTV. Channels: Email/SMS
              marketing, loyalty programs, exclusive content. Metrics: Repeat
              purchase rate, LTV, retention rate.
            </p>
          </li>
        </ul>
        <p className="mb-6 text-sm italic text-[#54453E]/70">
          Note: These ranges overlap intentionally. Your specific allocation
          depends on brand maturity and category dynamics.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          Allocation by Brand Maturity
        </h2>
        <p className="mb-4">
          Where you are in your growth journey should shape your budget split:
        </p>
        <ul className="space-y-4 mb-6">
          <li>
            <p>
              <span className="font-semibold">
                New brands (0–2 years, &lt;₹5cr revenue)
              </span>{" "}
              — Lean heavier on lower-funnel for faster feedback loops. Validate
              product-market fit through conversion data before scaling awareness.
              Suggested: Upper 15%, Mid 30%, Lower 45%, Retention 10%.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">
                Growth stage (2–5 years, ₹5–30cr revenue)
              </span>{" "}
              — Balance awareness building with conversion efficiency. You&apos;ve
              validated demand; now scale it sustainably. Suggested: Upper 25%,
              Mid 35%, Lower 30%, Retention 10%.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">
                Established brands (5+ years, &gt;₹30cr revenue)
              </span>{" "}
              — Invest more in upper-funnel to expand addressable market.
              Lower-funnel efficiency should be established. Suggested: Upper
              30%, Mid 30%, Lower 25%, Retention 15%.
            </p>
          </li>
        </ul>
        <p className="mb-6">
          These aren&apos;t prescriptions — they&apos;re starting points. Test
          and adjust based on what your data reveals.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          Channel-Specific Considerations
        </h2>
        <ul className="space-y-4 mb-6">
          <li>
            <p>
              <span className="font-semibold">Meta (Facebook/Instagram)</span>{" "}
              — Typically 30–50% of paid media budget for D2C. Strong for both
              awareness and conversion. Premium brands should emphasize quality
              creative over frequency.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Google (Search + Shopping)</span>{" "}
              — Typically 20–35% of paid media budget. Captures existing demand.
              Critical for high-intent moments. Premium brands often see higher
              CPCs but stronger conversion intent.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">SEO/Content</span> — Allocate
              10–20% of total marketing budget. Longer payback period but
              compounding returns. Essential for GEO/AEO visibility as AI search
              grows.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Email/SMS</span> — Typically 5–10%
              of budget for tools and content creation. Highest ROI channel for
              retained customers. Often under-invested by growth-focused brands.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Programmatic/Display</span> —
              0–10% depending on brand maturity. More relevant for established
              brands building broad awareness.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Influencer/Creator</span> — 5–15%
              for brands where social proof drives consideration. Focus on
              alignment over reach.
            </p>
          </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          How to Test and Optimize Allocation
        </h2>
        <p className="mb-4">
          Budget allocation should evolve, not stay static.
        </p>
        <ul className="space-y-3 mb-6">
          <li>
            <span className="font-semibold">Quarterly reviews.</span> Assess
            channel-level efficiency every quarter. Shift budget toward what
            &apos;s working, away from what&apos;s stalling.
          </li>
          <li>
            <span className="font-semibold">Incrementality testing.</span>{" "}
            Periodically pause or significantly reduce spend on specific channels
            to measure true lift vs. organic baseline.
          </li>
          <li>
            <span className="font-semibold">Multi-touch attribution.</span> Use
            attribution models that credit the full journey, not just last-click.
            This reveals upper-funnel&apos;s true contribution.
          </li>
          <li>
            <span className="font-semibold">Geographic testing.</span> Test
            allocation changes in limited markets before rolling out broadly.
          </li>
          <li>
            <span className="font-semibold">Seasonal adjustment.</span> Peak
            seasons (festivals, end-of-year) may warrant shifting to
            lower-funnel. Off-seasons may favor brand building.
          </li>
        </ul>
        <p className="mb-6">
          The goal isn&apos;t finding a &quot;perfect&quot; allocation —
          it&apos;s developing a testing rhythm that continuously improves
          efficiency.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          Conclusion
        </h2>
        <p className="mb-4">
          Budget allocation is both science and judgment. The framework helps
          structure the decision, but your specific situation — category
          dynamics, competitive pressure, margin structure — determines the right
          answer.
        </p>
        <p className="mb-4">
          Start with the funnel-based approach. Test within the ranges suggested
          for your maturity stage. Review quarterly. Adjust based on data, not
          assumptions.
        </p>
        <p className="mb-8">
          If you want an external assessment of your current allocation, we offer
          free marketing audits that analyze channel efficiency and recommend
          optimization opportunities. Request yours at{" "}
          <a
            href="https://thestrategylab.in/contact"
            className="text-[#8B4513] underline hover:text-[#54453E] transition-colors"
          >
            thestrategylab.in/contact
          </a>
          .
        </p>

        <div className="border-t border-[#E5E5E5] pt-8 mt-4">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            FAQ: Marketing Budget Allocation
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">
                Q: How much should D2C brands spend on marketing?
              </p>
              <p>
                Premium D2C brands typically allocate 15–25% of revenue to
                marketing, with higher percentages (25–35%) during aggressive
                growth phases. This includes both paid media and marketing
                team/agency costs.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Q: Should I prioritize Meta or Google?
              </p>
              <p>
                Both serve different purposes. Meta is typically stronger for
                demand generation and brand building. Google captures existing
                demand. Most D2C brands need both, with Meta often receiving
                slightly higher allocation (50–60% of the paid media split).
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Q: How do I allocate budget with limited data?
              </p>
              <p>
                Start with industry benchmarks and competitor research (observing
                their channel presence). Then commit to 90-day test periods with
                clear metrics before making major shifts. Early-stage allocation
                should favor channels with faster feedback loops (paid media over
                SEO).
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
}
