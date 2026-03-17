"use client";

import { useRef, useEffect, useState } from "react";
import { PARTNERS } from "@/lib/constants";

export default function PartnersMarquee() {
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

  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section
      ref={ref}
      className="py-16 bg-white border-y border-gray-100"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h2
          id="partners-heading"
          className="font-bold text-xl"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "var(--color-primary)",
          }}
        >
          Our Partners &amp; Supporters
        </h2>
        <p
          className="text-sm mt-2"
          style={{ color: "#9CA3AF", fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Working together for peace across Africa and the world
        </p>
      </div>

      {/* Marquee */}
      <div
        className="overflow-hidden relative"
        role="list"
        aria-label="Our partners"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className={prefersReduced ? "flex gap-12 justify-center flex-wrap px-8" : "animate-marquee"}
          aria-hidden={prefersReduced ? "false" : "true"}
        >
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              role="listitem"
              className="flex flex-col items-center justify-center px-8 py-4 shrink-0 min-w-[140px] group"
              title={partner.full}
            >
              {/* Logo placeholder — styled text badge */}
              <div
                className="h-14 w-32 rounded-xl flex items-center justify-center border-2 transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:shadow-md"
                style={{ borderColor: "#E5E7EB" }}
              >
                <span
                  className="text-xs font-bold text-center px-2 leading-tight transition-colors duration-300 group-hover:text-[var(--color-primary)]"
                  style={{ color: "#9CA3AF", fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {partner.name}
                </span>
              </div>
              <span
                className="text-xs mt-2 text-center max-w-[120px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {partner.full}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* If reduced motion, show static grid */}
      {prefersReduced && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-wrap justify-center gap-4">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="px-5 py-2 rounded-full border-2 text-sm font-medium"
                style={{ borderColor: "#E5E7EB", color: "#6B7280" }}
              >
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
