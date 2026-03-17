"use client";

import { useRef, useEffect, useState } from "react";
import { Award, Star } from "lucide-react";
import { AWARDS } from "@/lib/constants";

export default function AwardsSection() {
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

  const featured = AWARDS.slice(0, 6);

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-warm-bg)" }}
      aria-labelledby="awards-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-14"
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
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              backgroundColor: "rgba(201,162,39,0.15)",
              color: "var(--color-secondary)",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Recognition
          </div>
          <h2
            id="awards-heading"
            className="font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "var(--color-primary)",
            }}
          >
            Recognized for Excellence in Peacebuilding
          </h2>
          <p
            className="max-w-2xl mx-auto text-base"
            style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            CCMRE and CCISA have been recognised by national and international bodies
            for outstanding contributions to interfaith peace, diversity, and inclusion.
          </p>
        </div>

        {/* Awards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featured.map((award, i) => (
            <div
              key={award.name}
              className="flex gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              style={
                prefersReduced
                  ? {}
                  : {
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(2rem)",
                      transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
                    }
              }
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(201,162,39,0.12)" }}
                aria-hidden="true"
              >
                <Award size={22} style={{ color: "var(--color-secondary)" }} />
              </div>
              <div>
                <div
                  className="font-bold text-sm leading-snug mb-1"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "var(--color-primary)",
                  }}
                >
                  {award.name}
                </div>
                {award.year && (
                  <div
                    className="text-xs font-semibold mb-1"
                    style={{ color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {award.year}
                  </div>
                )}
                <div
                  className="text-xs text-gray-500 leading-relaxed"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {award.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition notes */}
        <div
          className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <Star size={24} className="shrink-0" style={{ color: "var(--color-secondary)" }} aria-hidden="true" />
          <div>
            <p className="text-white font-semibold" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Nominated for African Union side event — Addis Ababa, Ethiopia · 7 February 2026
            </p>
            <p className="text-white/60 text-sm mt-0.5" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
              Recognized among the top faith-based organizations in Kenya · 110+ grassroots dialogue sessions conducted since 2017
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
