import type { Metadata } from "next";
import Footer from "@/components/landingpage/footer";

export const metadata: Metadata = {
  title: "Measure Marketing ROI Without Vanity Metrics | TSL",
  description:
    "Learn how to measure real marketing ROI using revenue, CAC, and LTV instead of vanity metrics like impressions, clicks, and followers.",
};

export default function MarketingROIMeasurementPage() {
  return (
    <main className="pt-32 pb-16 px-4 bg-white text-[#54453E]">
      <section className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B4513] mb-3">
          Blog · Performance Marketing
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display leading-tight mb-4">
          How to Measure Marketing ROI Without Vanity Metrics
        </h1>
        <p className="text-lg sm:text-xl mb-4">
          Impressions are up. Followers are growing. CTR looks healthy.
        </p>
        <p className="mb-4">
          But revenue is flat. And you&apos;re not sure if marketing is actually
          working.
        </p>
        <p className="mb-4">
          This disconnect — between activity metrics and business outcomes — is
          the vanity metrics trap. Most marketing reports are filled with numbers
          that feel good but don&apos;t connect to what actually matters:
          revenue, profit, and customer quality.
        </p>
        <p className="mb-6">
          This guide introduces a measurement framework focused on metrics that
          tie marketing directly to business outcomes.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          What Are Vanity Metrics (and Why They Persist)
        </h2>
        <p className="mb-4">
          Vanity metrics are measurements that look impressive but don&apos;t
          reliably predict business success.
        </p>
        <p className="mb-3 font-semibold">Common culprits:</p>
        <ul className="list-disc pl-5 space-y-1 mb-4">
          <li>Impressions (without context)</li>
          <li>Follower counts</li>
          <li>Website traffic (without quality indicators)</li>
          <li>Email list size (without engagement)</li>
          <li>Likes, shares, comments (without conversion correlation)</li>
        </ul>
        <p className="mb-4">
          Why do marketers keep reporting them? They&apos;re easy to measure,
          easy to grow, and easy to explain. They also tend to go up and to the
          right, which makes everyone feel good in reviews.
        </p>
        <p className="mb-4">
          The problem: they create false confidence. A brand can celebrate
          &quot;record engagement&quot; while sales decline. The numbers
          aren&apos;t lying — they&apos;re just not measuring what matters.
        </p>
        <p className="mb-6">
          For premium D2C brands, this is especially dangerous. You&apos;re not
          optimizing for mass reach; you&apos;re optimizing for quality
          connections with customers who fit your brand. Vanity metrics obscure
          whether that&apos;s actually happening.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          The Metrics That Actually Matter
        </h2>
        <p className="mb-4">
          Replace vanity metrics with these outcome-focused alternatives:
        </p>
        <ul className="space-y-4 mb-6">
          <li>
            <p>
              <span className="font-semibold">Revenue Metrics</span> —
              Marketing-attributed revenue (by channel), Revenue per session (by
              traffic source), Incremental revenue (vs. baseline/control).
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Efficiency Metrics</span> —
              Customer Acquisition Cost (blended and by channel), ROAS (with
              realistic attribution windows), Marketing efficiency ratio
              (marketing spend / revenue), Cost per qualified lead (not just any
              lead).
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Customer Quality Metrics</span> —
              New customer LTV by acquisition source, First-purchase AOV by
              channel, Time to second purchase by cohort, Return rate by
              acquisition channel.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">Growth Health Metrics</span> —
              Revenue concentration (new vs. repeat), Organic vs. paid traffic
              ratio, Brand search volume growth, Net Promoter Score trends.
            </p>
          </li>
        </ul>
        <p className="mb-6">
          The shift: from &quot;how much activity did we generate?&quot; to
          &quot;how efficiently did we create business value?&quot;
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          Building a Measurement Framework
        </h2>
        <p className="mb-4">Structure your measurement in layers:</p>
        <ul className="space-y-4 mb-6">
          <li>
            <p>
              <span className="font-semibold">
                Layer 1: Business Outcomes (Monthly/Quarterly)
              </span>{" "}
              — What changed for the business? Revenue growth, Profit margin,
              Customer count (new + retained), Market share indicators.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">
                Layer 2: Marketing Performance (Weekly/Monthly)
              </span>{" "}
              — How efficiently is marketing contributing? Channel-level
              ROAS/ROI, CAC trends, Conversion rates, LTV:CAC ratios.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">
                Layer 3: Operational Metrics (Daily/Weekly)
              </span>{" "}
              — What&apos;s happening in campaigns? CPM, CPC, CTR (as diagnostic
              tools), Audience reach and frequency, Creative performance, Landing
              page performance.
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">
                Layer 4: Leading Indicators (Ongoing)
              </span>{" "}
              — What predicts future performance? Brand search trends, Email/SMS
              list health, Engagement quality scores, Customer feedback signals.
            </p>
          </li>
        </ul>
        <p className="mb-6">
          The key: Layer 3 and 4 inform optimization. Layer 1 and 2 determine
          success.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          Attribution Without Overthinking It
        </h2>
        <p className="mb-4">
          Attribution is complex, but perfect attribution isn&apos;t required
          for good decisions.
        </p>
        <p className="mb-3 font-semibold">Simple approach that works:</p>
        <ol className="list-decimal pl-5 space-y-2 mb-5">
          <li>
            Use platform-reported attribution for optimization within each
            platform.
          </li>
          <li>
            Use blended metrics (total spend / total revenue) for overall
            efficiency.
          </li>
          <li>
            Run periodic incrementality tests to calibrate platform claims.
          </li>
        </ol>
        <p className="mb-3 font-semibold">For premium D2C specifically:</p>
        <p className="mb-4">
          Longer consideration windows require longer attribution windows. If
          your average customer takes 21 days from first touch to purchase,
          7-day attribution understates upper-funnel value.
        </p>
        <p className="mb-4">
          Multi-touch attribution models can help, but don&apos;t require
          perfect accuracy. Directional understanding — knowing which channels
          over or under-perform their platform-reported numbers — is sufficient
          for allocation decisions.
        </p>
        <p className="mb-3 font-semibold">When attribution gets complicated:</p>
        <p className="mb-6">
          If you&apos;re spending significant budget and need precision,
          consider: Marketing Mix Modeling (MMM) for channel-level allocation,
          Geo-based lift tests for incrementality, Hold-out tests for specific
          campaigns. For most brands under ₹50cr revenue, simpler approaches
          work fine.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          Reporting That Drives Decisions
        </h2>
        <p className="mb-4">
          Most marketing reports are built for justification, not
          decision-making.
        </p>
        <p className="mb-3 font-semibold">Better report structure:</p>
        <ul className="space-y-3 mb-5">
          <li>
            <span className="font-semibold">Open with:</span> What changed for
            the business? — Revenue vs. target, New customer acquisition vs.
            target, Key efficiency metrics vs. historical.
          </li>
          <li>
            <span className="font-semibold">Then explain:</span> What drove
            those changes? — Channel performance breakdown, Campaign wins and
            losses, External factors (seasonality, competition).
          </li>
          <li>
            <span className="font-semibold">Close with:</span> What are we doing
            about it? — Optimization priorities, Budget allocation changes, Tests
            in progress.
          </li>
        </ul>
        <p className="mb-3 font-semibold">Report hygiene:</p>
        <ul className="list-disc pl-5 space-y-1 mb-5">
          <li>
            Compare to meaningful baselines (same period last year, not just
            last month)
          </li>
          <li>Separate correlation from causation</li>
          <li>Acknowledge uncertainty where it exists</li>
          <li>Include what didn&apos;t work, not just wins</li>
          <li>Connect metrics to actual business implications</li>
        </ul>
        <p className="mb-6">
          The goal isn&apos;t a document that looks impressive — it&apos;s a
          document that enables better decisions.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">
          Conclusion
        </h2>
        <p className="mb-4">
          Vanity metrics feel productive but obscure what matters. Revenue
          metrics feel harder but reveal truth.
        </p>
        <p className="mb-4">
          The shift to outcome-focused measurement changes how you think about
          marketing — from activity generator to revenue driver. That mindset
          shift affects decisions at every level.
        </p>
        <p className="mb-4">
          Start by auditing your current reporting: How many of your key metrics
          directly connect to revenue or customer quality? Eliminate what
          doesn&apos;t, add what&apos;s missing.
        </p>
        <p className="mb-8">
          If you want an external assessment of your marketing performance and
          measurement approach, we offer free marketing audits that evaluate both
          strategy and metrics. Request yours at{" "}
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
            FAQ: Marketing Measurement
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">
                Q: How do I measure brand marketing ROI?
              </p>
              <p>
                Brand marketing impact is measured through brand lift studies,
                search volume for branded terms, direct traffic trends, and
                long-term shifts in conversion efficiency. It&apos;s harder to
                attribute precisely but visible in trends over 6–12 months.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Q: What attribution model should D2C brands use?
              </p>
              <p>
                Most D2C brands do well with data-driven or time-decay models
                that credit the full journey rather than just last touch.
                Platform default settings often undervalue upper-funnel activity.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Q: How often should we review marketing metrics?
              </p>
              <p>
                Campaign-level: daily/weekly. Channel performance:
                weekly/bi-weekly. Business outcomes: monthly. Strategic
                assessment: quarterly. Match review frequency to the timeframe
                needed for meaningful signals.
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
