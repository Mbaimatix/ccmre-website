"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const anim = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(2rem)",
          transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        };

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "var(--color-warm-bg)" }}
      aria-labelledby="about-preview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div style={anim(0)}>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{
                backgroundColor: "rgba(201,162,39,0.12)",
                color: "var(--color-secondary)",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Who We Are
            </div>

            <h2
              id="about-preview-heading"
              className="font-bold leading-tight mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                color: "var(--color-primary)",
              }}
            >
              From Eastleigh to All of Africa
            </h2>

            <div
              className="space-y-4 text-base leading-relaxed"
              style={{
                color: "var(--color-text)",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              <p>
                The Centre for Christian-Muslim Relations in Eastleigh (CCMRE) was established
                in 2010 as a practical platform for St. Paul&apos;s University&apos;s MA programme
                in Islam and Christian-Muslim Relations (ICMR). Over 15 years of grassroots
                peacebuilding, open dialogue, and academic engagement have earned CCMRE
                recognition as one of Kenya&apos;s top faith-based organisations.
              </p>
              <p>
                In 2022, this legacy expanded into the Centre for Christianity and Islamic
                Studies in Africa (CCISA) — broadening our scope from Eastleigh to the entire
                African continent and beyond, with partnerships reaching from the African Union
                to international dialogue centres.
              </p>
            </div>

            <Link
              href="/about/our-story"
              className="inline-flex items-center gap-2 mt-8 font-semibold transition-colors hover:gap-3"
              style={{
                color: "var(--color-cta)",
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            >
              Our Full Story
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Image */}
          <div style={anim(150)} className="relative">
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", aspectRatio: "4/3" }}
            >
              <Image
                src="/images/about-preview.jpg"
                alt="Ven. Canon Scholar Wayua Kiilu coordinating a community dialogue session between Christians and Muslims in Eastleigh"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20 -z-10"
              style={{ backgroundColor: "var(--color-secondary)" }}
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-15 -z-10"
              style={{ backgroundColor: "var(--color-accent)" }}
              aria-hidden="true"
            />

            {/* Award badge */}
            <div
              className="absolute bottom-6 -left-6 hidden lg:flex flex-col items-center p-4 rounded-2xl shadow-xl text-center"
              style={{ backgroundColor: "white", minWidth: "140px" }}
            >
              <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-secondary)" }}>8+</span>
              <span className="text-xs font-semibold mt-0.5" style={{ color: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Awards Won</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
