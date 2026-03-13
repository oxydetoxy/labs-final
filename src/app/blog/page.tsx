import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, Tag } from "lucide-react";
import Footer from "@/components/landingpage/footer";
import HeroCTA from "@/components/landingpage/hero-cta";

export const metadata: Metadata = {
  title: "Blog — Marketing Insights & Strategy | The Strategy Lab",
  description:
    "Fresh thinking on founder-led marketing, D2C growth, content strategy, and brand building. Real experiments, honest results.",
};

const BLOG_POSTS = [
  {
    slug: "/founder-led-marketing-guide",
    category: "Founder-Led Growth",
    title: "Founder-Led Marketing: Why It Works and How to Start",
    excerpt:
      "Brand accounts get ignored. Founders get followed. Learn why algorithms and audiences both favour real people over logos — and how to build a founder presence without burning out.",
    readTime: "8 min read",
    date: "Mar 2025",
    featured: true,
  },
  {
    slug: "/agency-vs-in-house-marketing",
    category: "D2C Growth",
    title: "When to Hire an Agency vs Build In-House: A Decision Framework",
    excerpt:
      "The agency vs. in-house debate is one of the most common questions D2C founders face as they scale. Here's a framework for actually making the decision based on your budget, growth stage, and strategy.",
    readTime: "9 min read",
    date: "Mar 2025",
    featured: false,
  },
  {
    slug: "/marketing-budget-allocation-d2c",
    category: "D2C Growth",
    title: "How to Allocate Your Digital Marketing Budget Across Channels",
    excerpt:
      "What percentage should go to Meta vs. Google vs. SEO? A funnel-based framework that gives you a rational approach to budget allocation — without fake precision.",
    readTime: "8 min read",
    date: "Mar 2025",
    featured: false,
  },
  {
    slug: "/marketing-roi-measurement",
    category: "Performance Marketing",
    title: "How to Measure Marketing ROI Without Vanity Metrics",
    excerpt:
      "Impressions are up. Revenue is flat. The vanity metrics trap is costing you clarity. Here's the measurement framework that connects marketing activity to real business outcomes.",
    readTime: "9 min read",
    date: "Mar 2025",
    featured: false,
  },
];

const TOPICS = [
  "Founder-Led Growth",
  "Content Strategy",
  "D2C Growth",
  "Brand Building",
  "Social Media",
  "Performance Marketing",
];

export default function BlogPage() {
  const [featuredPost, ...restPosts] = BLOG_POSTS;

  return (
    <>
      {/* Hero */}
      <div className="bg-[#4DD1F4] pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#54453E] mb-3">
            The Strategy Lab
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-display text-[#54453E] leading-tight mb-4"
            style={{ fontFamily: "Lilita One" }}
          >
            Ideas Worth Experimenting With
          </h1>
          <p className="text-[#54453E] text-lg sm:text-xl max-w-2xl">
            Marketing insights, growth experiments, and honest takes on what
            actually works for D2C brands today.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white w-full py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left — Blog Posts */}
            <div className="lg:col-span-2 space-y-8">

              {/* Featured Post */}
              <Link href={featuredPost.slug} className="block group">
                <div className="border-2 border-[#4DD1F4] rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-[#4DD1F4] px-6 py-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#54453E]">
                      <Tag className="w-3.5 h-3.5" />
                      {featuredPost.category}
                    </span>
                    <span className="text-xs font-medium text-[#54453E] bg-white border border-[#54453E]/20 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-display text-[#54453E] leading-snug mb-3 group-hover:text-[#8B4513] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-[#54453E]/80 text-base sm:text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-4 text-sm text-[#54453E]/60">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                        <span>{featuredPost.date}</span>
                      </div>
                      <span className="inline-flex items-center gap-2 bg-[#54453E] text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#3d3329] transition-colors">
                        <BookOpen className="w-4 h-4" />
                        Read Article
                      </span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Rest of posts grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {restPosts.map((post) => (
                  <Link key={post.slug} href={post.slug} className="block group">
                    <div className="h-full border-2 border-[#4DD1F4] rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                      <div className="bg-[#4DD1F4] px-5 py-3 flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-[#54453E]" />
                        <span className="text-sm font-semibold text-[#54453E]">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-lg font-semibold text-[#54453E] leading-snug mb-3 group-hover:text-[#8B4513] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[#54453E]/70 text-sm leading-relaxed mb-5 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="flex items-center gap-1.5 text-xs text-[#54453E]/50">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                          <span className="inline-flex items-center gap-1.5 bg-[#4DD1F4] text-[#54453E] px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-[#3db8d9] transition-colors">
                            Read
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right — Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-8">

                {/* Topics */}
                <div className="bg-white border-2 border-[#4DD1F4] rounded-lg p-6">
                  <h2
                    className="text-2xl font-display text-[#54453E] mb-2"
                    style={{ fontFamily: "Lilita One" }}
                  >
                    Browse by Topic
                  </h2>
                  <p className="text-sm text-[#54453E]/70 mb-5">
                    Pick a topic and find the content most relevant to where you
                    are right now.
                  </p>
                  <div className="flex flex-col gap-2">
                    {TOPICS.map((topic) => (
                      <div
                        key={topic}
                        className="flex items-center gap-3 bg-[#4DD1F4]/10 border border-[#4DD1F4]/30 text-[#54453E] px-4 py-2.5 rounded-md text-sm font-medium"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#4DD1F4] flex-shrink-0" />
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA box */}
                <div className="bg-[#54453E] rounded-lg p-6 text-white">
                  <h3
                    className="text-xl font-display mb-2"
                    style={{ fontFamily: "Lilita One" }}
                  >
                    Get Insights First
                  </h3>
                  <p className="text-sm text-white/70 mb-5 leading-relaxed">
                    New articles, experiments, and strategy drops — straight to
                    your inbox. No fluff.
                  </p>
                  <Link href="/lets-talk">
                    <button className="w-full bg-[#4DD1F4] text-[#54453E] px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-[#3db8d9] transition-colors">
                      Let&apos;s Talk
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroCTA />
      <Footer />
    </>
  );
}
