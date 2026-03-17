import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PARTNERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "CCMRE/CCISA partners: EMW, KIRKACTIE, DANMISSION, PROCMURA, LLI, KAICIID, St. Paul's University, Life and Peace Institute, Tangaza University, and PACU University.",
};

export default function PartnersPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ backgroundColor: "var(--color-primary)" }}
        aria-labelledby="partners-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Collaboration
          </div>
          <h1
            id="partners-hero-heading"
            className="font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Our Partners &amp; Supporters
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Peace is never built alone. These organisations walk alongside us in the mission
            for interfaith understanding across Africa and beyond.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      {/* Partners grid */}
      <section className="py-16 lg:py-24" aria-labelledby="partners-grid-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="partners-grid-heading"
            className="font-bold text-center mb-12"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--color-primary)",
            }}
          >
            Our Network of Partners
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Logo placeholder */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-xs font-bold text-center shrink-0"
                  style={{ backgroundColor: "rgba(30,58,95,0.07)", color: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {partner.name.split(" ")[0]}
                </div>
                <div>
                  <h3
                    className="font-bold text-sm mb-0.5"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}
                  >
                    {partner.full}
                  </h3>
                  <p
                    className="text-xs text-gray-500 leading-relaxed"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {partner.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section
        className="py-16 bg-white"
        aria-labelledby="partner-cta-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="partner-cta-heading"
            className="font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--color-primary)" }}
          >
            Partner With Us
          </h2>
          <p className="text-base mb-8" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>
            We welcome partnerships from organisations, academic institutions, faith communities,
            and individuals who share our commitment to peaceful coexistence across Africa.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white text-base transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Reach Out to Partner <ExternalLink size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
