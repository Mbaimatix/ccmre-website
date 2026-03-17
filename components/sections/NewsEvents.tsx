"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/constants";

export default function NewsEvents() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const featured = NEWS_ITEMS.slice(0, 3);

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="news-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          style={
            prefersReduced
              ? {}
              : {
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(1.5rem)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }
          }
        >
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{
                backgroundColor: "rgba(30,58,95,0.08)",
                color: "var(--color-primary)",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Latest Updates
            </div>
            <h2
              id="news-heading"
              className="font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--color-primary)",
              }}
            >
              News &amp; Events
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-3 shrink-0"
            style={{ color: "var(--color-cta)", fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            View All News <ArrowRight size={15} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((item, i) => (
            <article
              key={item.slug}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
              style={
                prefersReduced
                  ? {}
                  : {
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(2rem)",
                      transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
                    }
              }
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category badge */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: "var(--color-cta)" }}
                >
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <div
                  className="flex items-center gap-1.5 text-xs mb-3"
                  style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  <Calendar size={12} />
                  <time dateTime={item.date}>{item.date}</time>
                </div>

                <h3
                  className="font-bold text-base leading-snug mb-3 flex-1 group-hover:underline"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "var(--color-primary)",
                  }}
                >
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </h3>

                <p
                  className="text-sm leading-relaxed mb-4 text-gray-600 line-clamp-2"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {item.excerpt}
                </p>

                <Link
                  href={`/news/${item.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
                  style={{ color: "var(--color-cta)", fontFamily: "'Inter', system-ui, sans-serif" }}
                  aria-label={`Read more about ${item.title}`}
                >
                  Read More <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
