"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero — Building Bridges of Peace"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Community dialogue session at CCMRE — Christians and Muslims meeting in peaceful conversation"
          fill
          priority
          className={prefersReduced ? "" : "animate-ken-burns"}
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,25,47,0.80) 0%, rgba(10,25,47,0.45) 60%, rgba(10,25,47,0.20) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-start justify-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 opacity-0 translate-y-4"
          style={{
            backgroundColor: "rgba(201,162,39,0.2)",
            borderColor: "rgba(201,162,39,0.5)",
            border: "1px solid",
            color: "var(--color-secondary)",
            animation: "fadeSlideUp 0.6s ease forwards 0ms",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" aria-hidden="true" />
          A St. Paul&apos;s University Initiative · Since 2010
        </div>

        <h1
          className="font-bold text-white leading-tight mb-6 max-w-3xl opacity-0 translate-y-4"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            animation: "fadeSlideUp 0.7s ease forwards 150ms",
          }}
        >
          Building Bridges of Peace{" "}
          <span style={{ color: "var(--color-secondary)" }}>
            Across Faiths and Communities
          </span>
        </h1>

        <p
          className="text-white/85 max-w-2xl mb-8 leading-relaxed opacity-0 translate-y-4"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            animation: "fadeSlideUp 0.7s ease forwards 300ms",
          }}
        >
          For over a decade, CCMRE has been at the forefront of Christian-Muslim dialogue
          in Eastleigh and across Africa — transforming lives through education, engagement,
          and understanding.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-4"
          style={{ animation: "fadeSlideUp 0.7s ease forwards 450ms" }}
        >
          <Link
            href="/programmes/ma-icmr"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg text-base"
            style={{ backgroundColor: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Explore Our Programmes
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5 text-base"
            style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "white",
              border: "2px solid rgba(255,255,255,0.5)",
              fontFamily: "'Inter', system-ui, sans-serif",
              backdropFilter: "blur(4px)",
            }}
          >
            Join a Dialogue Session
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-70"
        aria-hidden="true"
      >
        <span className="text-white text-xs uppercase tracking-widest" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          Scroll
        </span>
        <div className="w-px h-10 bg-white/50 animate-pulse" />
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#F5F3F0" />
        </svg>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(1rem); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
