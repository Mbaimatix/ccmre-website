"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function useCountUp(target: string, duration = 1800, isVisible: boolean) {
  const [count, setCount] = useState("0");

  useEffect(() => {
    if (!isVisible) return;
    const numeric = parseInt(target.replace(/\D/g, ""));
    const suffix = target.replace(/[0-9]/g, "");
    if (isNaN(numeric)) { setCount(target); return; }

    const steps = 60;
    const increment = numeric / steps;
    let current = 0;
    let frame = 0;

    const prefersReduced =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;

    if (prefersReduced) { setCount(target); return; }

    const interval = setInterval(() => {
      current += increment;
      frame++;
      if (frame >= steps) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current).toString() + suffix);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  return count;
}

function StatCard({ value, label, sub, isVisible }: { value: string; label: string; sub: string; isVisible: boolean }) {
  const count = useCountUp(value, 1800, isVisible);

  return (
    <div className="flex flex-col items-center text-center px-6 py-6">
      <span
        className="font-bold text-5xl mb-2"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          color: "var(--color-secondary)",
        }}
        aria-label={`${value} — ${label}`}
      >
        {count}
      </span>
      <span
        className="font-semibold text-lg text-white mb-0.5"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        {label}
      </span>
      <span className="text-sm text-white/60" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {sub}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Impact statistics"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
