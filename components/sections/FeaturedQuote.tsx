"use client";

import { useRef, useEffect, useState } from "react";

export default function FeaturedQuote() {
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
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--color-primary) 0%, #0d2240 100%)",
      }}
      aria-label="Featured quote from Ven. Scholar Wayua"
    >
      {/* Decorative quote marks */}
      <div
        className="absolute top-6 left-8 select-none pointer-events-none"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "12rem",
          lineHeight: 1,
          color: "rgba(201,162,39,0.10)",
        }}
        aria-hidden="true"
      >
        &ldquo;
      </div>
      <div
        className="absolute bottom-6 right-8 select-none pointer-events-none"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "12rem",
          lineHeight: 1,
          color: "rgba(201,162,39,0.10)",
        }}
        aria-hidden="true"
      >
        &rdquo;
      </div>

      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: "var(--color-secondary)" }}
        aria-hidden="true"
      />

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
          className="w-12 h-1 mx-auto mb-8 rounded-full"
          style={{ backgroundColor: "var(--color-secondary)" }}
          aria-hidden="true"
        />

        <blockquote>
          <p
            className="font-bold leading-relaxed mb-8 text-white"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.25rem, 3vw, 2rem)",
            }}
          >
            &ldquo;After the Dusit attack, Muslims and Christians were able to meet and discuss
            openly — this helped the Nation.&rdquo;
          </p>
          <footer>
            <cite
              className="not-italic"
              style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              <span
                className="block font-semibold text-base"
                style={{ color: "var(--color-secondary)" }}
              >
                Ven. Canon Scholar Wayua Kiilu
              </span>
              <span className="block text-sm text-white/60 mt-1">
                Coordinator, CCMRE / CCISA · On the impact of CCMRE&apos;s dialogue work in a moment of national crisis
              </span>
            </cite>
          </footer>
        </blockquote>

        <div
          className="w-12 h-1 mx-auto mt-8 rounded-full"
          style={{ backgroundColor: "var(--color-secondary)" }}
          aria-hidden="true"
        />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
