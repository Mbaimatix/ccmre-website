import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Globe, Users, BookOpen, Mail } from "lucide-react";
import { AFRICAN_COUNTRIES, ORG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "MA in Islam & Christian-Muslim Relations (ICMR)",
  description:
    "Graduate programme in Islam and Christian-Muslim Relations at St. Paul's University, running since 2004. Training specialists from across Africa.",
};

export default function MaIcmrPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "var(--color-primary)" }} aria-labelledby="icmr-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Academic Programme · Since 2004</div>
          <h1 id="icmr-hero-heading" className="font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}>MA in Islam &amp; Christian-Muslim Relations</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>A graduate programme training the next generation of interfaith specialists across sub-Saharan Africa — offered under the School of Theology (JTSOT), St. Paul's University.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-bold text-2xl mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Programme Overview</h2>
              <div className="space-y-3 text-base leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                <p>The MA in Islam and Christian-Muslim Relations (ICMR) is one of Africa&apos;s most established graduate programmes in interfaith studies, running since 2004 at St. Paul&apos;s University in Limuru, Kenya.</p>
                <p>The programme attracts students from across sub-Saharan Africa and trains specialists in Christian-Muslim dialogue, interfaith theology, community peacebuilding, and African religious studies. Students engage in both theoretical coursework and practical community dialogue through the CCMRE platform.</p>
                <p>Graduates go on to serve as pastors, imams, academic researchers, community mediators, and interfaith leaders across Africa and beyond.</p>
              </div>
            </div>

            {/* Countries */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-bold text-xl mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>
                <Globe size={20} className="inline mr-2 mb-1" style={{ color: "var(--color-secondary)" }} aria-hidden="true" />
                Countries Represented
              </h2>
              <p className="text-sm mb-5" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>
                Students and graduates from {AFRICAN_COUNTRIES.length}+ African countries have enrolled in or been influenced by the ICMR programme.
              </p>
              <div className="flex flex-wrap gap-2">
                {AFRICAN_COUNTRIES.map((country) => (
                  <span
                    key={country}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "rgba(30,58,95,0.07)", color: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>

            {/* What you learn */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-bold text-xl mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>
                <BookOpen size={20} className="inline mr-2 mb-1" style={{ color: "var(--color-secondary)" }} aria-hidden="true" />
                Key Learning Areas
              </h2>
              <ul className="space-y-3">
                {[
                  "Theology of Christian-Muslim Relations in Africa",
                  "Islamic Studies: History, Theology, and Practice",
                  "Interfaith Dialogue Methodology",
                  "Community Peacebuilding and Conflict Transformation",
                  "Gender, Religion, and Inclusive Leadership",
                  "African Religious Traditions and Contexts",
                  "Research Methods in Religious Studies",
                  "Practical Field Placement (CCMRE platform)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "var(--color-secondary)" }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-base mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Quick Facts</h3>
              <div className="space-y-3 text-sm" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                {[
                  { label: "Running Since", value: "2004" },
                  { label: "Level", value: "Master of Arts (MA)" },
                  { label: "Institution", value: "St. Paul's University, Limuru" },
                  { label: "School", value: "JTSOT (School of Theology)" },
                  { label: "Mode", value: "Full-time / Part-time" },
                  { label: "Countries", value: "10+ African nations" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start gap-3 py-2 border-b border-gray-50 last:border-0">
                    <span style={{ color: "#9CA3AF" }}>{label}</span>
                    <span className="font-medium text-right" style={{ color: "var(--color-primary)" }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-6 text-white" style={{ backgroundColor: "var(--color-primary)" }}>
              <GraduationCap size={28} style={{ color: "var(--color-secondary)" }} className="mb-4" aria-hidden="true" />
              <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Apply Now</h3>
              <p className="text-white/70 text-sm mb-4" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>Admission details — contact us for the latest requirements and intake dates.</p>
              <a
                href={`mailto:${ORG.email}?subject=MA ICMR Enquiry`}
                className="flex items-center gap-2 text-sm font-semibold py-2.5 px-4 rounded-lg w-full justify-center transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-primary)" }}
              >
                <Mail size={15} /> Email Us to Apply
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
