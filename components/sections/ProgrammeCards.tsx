"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { GraduationCap, Users, Globe, ArrowRight } from "lucide-react";

const programmes = [
  {
    icon: GraduationCap,
    title: "MA in Islam & Christian-Muslim Relations",
    body: "Running since 2004, this graduate programme has trained specialists from Sudan, Rwanda, Nigeria, Ethiopia, Uganda, Tanzania, Liberia, Sierra Leone, Egypt, and Kenya — all under one academic roof at St. Paul's University.",
    href: "/programmes/ma-icmr",
    color: "var(--color-primary)",
  },
  {
    icon: Users,
    title: "Community Dialogue Initiatives",
    body: "Over 110 dialogue sessions conducted in Kamukunji, Mathare, Eastleigh, Majengo, and Mlango Kubwa since 2017. Bringing Christians and Muslims together at the grassroots for peace walks, open forums, and healing conversations.",
    href: "/programmes/community-dialogue",
    color: "var(--color-accent)",
  },
  {
    icon: Globe,
    title: "CCISA — Pan-African Expansion",
    body: "Since transitioning to Institute status in 2022, CCISA reaches beyond Kenya — training communities across Africa, partnering with international organisations, and nurturing the next generation of peacebuilders.",
    href: "/programmes/ccisa",
    color: "var(--color-cta)",
  },
];

export default function ProgrammeCards() {
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

  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="programmes-heading"
    >
      {/* Top wave */}
      <div className="overflow-hidden leading-none -mt-20 mb-10" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,0 L0,0 Z" fill="#F5F3F0" />
        </svg>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              backgroundColor: "rgba(30,58,95,0.08)",
              color: "var(--color-primary)",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            What We Do
          </div>
          <h2
            id="programmes-heading"
            className="font-bold"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "var(--color-primary)",
            }}
          >
            Our Programmes
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <article
                key={prog.title}
                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
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
                {/* Top color bar */}
                <div className="h-1.5 w-full" style={{ backgroundColor: prog.color }} aria-hidden="true" />

                <div className="flex flex-col flex-1 p-8">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${prog.color}18` }}
                    aria-hidden="true"
                  >
                    <Icon size={26} style={{ color: prog.color }} />
                  </div>

                  <h3
                    className="font-bold text-xl mb-4 leading-snug"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      color: "var(--color-primary)",
                    }}
                  >
                    {prog.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed flex-1 mb-6"
                    style={{
                      color: "var(--color-text)",
                      fontFamily: "'Inter', system-ui, sans-serif",
                    }}
                  >
                    {prog.body}
                  </p>

                  <Link
                    href={prog.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-3"
                    style={{ color: prog.color, fontFamily: "'Inter', system-ui, sans-serif" }}
                    aria-label={`Learn more about ${prog.title}`}
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </Link>
                </div>

                {/* Hover lift */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 20px 40px rgba(30,58,95,0.10)` }}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="overflow-hidden leading-none mt-16" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="var(--color-warm-bg)" />
        </svg>
      </div>
    </section>
  );
}
