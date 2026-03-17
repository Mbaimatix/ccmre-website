"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
      aria-labelledby="cta-heading"
    >
      {/* Decorative wave patterns */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 w-full opacity-10"
          preserveAspectRatio="none"
        >
          <path d="M0,200 C360,300 1080,100 1440,200 L1440,400 L0,400 Z" fill="var(--color-secondary)" />
        </svg>
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0 w-1/2 opacity-5"
          preserveAspectRatio="none"
        >
          <circle cx="720" cy="200" r="400" fill="white" />
        </svg>
      </div>

      <div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={
          prefersReduced
            ? {}
            : {
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(2rem)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }
        }
      >
        <div
          className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          style={{
            backgroundColor: "rgba(201,162,39,0.15)",
            color: "var(--color-secondary)",
            border: "1px solid rgba(201,162,39,0.3)",
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          Get Involved
        </div>

        <h2
          id="cta-heading"
          className="font-bold text-white mb-6"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 3rem)",
          }}
        >
          Be Part of the Change
        </h2>

        <p
          className="text-white/75 text-base leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Whether you&apos;re a prospective student, a researcher, a donor, or a community member
          in Eastleigh — there is a place for you in our mission for peace.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/programmes/ma-icmr"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg text-base"
            style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Apply to ICMR Programme
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 text-base"
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "white",
              border: "2px solid rgba(255,255,255,0.3)",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Support Our Work
          </Link>
          <Link
            href="/events"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 text-base"
            style={{
              backgroundColor: "var(--color-cta)",
              color: "white",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Attend a Dialogue Session
          </Link>
        </div>
      </div>
    </section>
  );
}
