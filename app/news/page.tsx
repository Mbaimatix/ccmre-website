import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "News & Media",
  description:
    "Latest news, award announcements, event reports, and media coverage from CCMRE/CCISA — Kenya's leading interfaith dialogue centre.",
};

export default function NewsPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "var(--color-primary)" }} aria-labelledby="news-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Latest Updates</div>
          <h1 id="news-hero-heading" className="font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>News &amp; Media</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>Awards, impact stories, event reports, and media coverage from CCMRE/CCISA.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="news-grid-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="news-grid-heading" className="sr-only">All news articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item) => (
              <article key={item.slug} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "var(--color-cta)" }}>{item.category}</div>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-1.5 text-xs mb-3" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>
                    <Calendar size={12} />
                    <time dateTime={item.date}>{item.date}</time>
                  </div>
                  <h3 className="font-bold text-base leading-snug mb-3 flex-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>
                    <Link href={`/news/${item.slug}`} className="group-hover:underline">{item.title}</Link>
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 text-gray-600 line-clamp-3" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{item.excerpt}</p>
                  <Link href={`/news/${item.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: "var(--color-cta)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
