import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Users, BookOpen, Handshake } from "lucide-react";
import { AFRICAN_COUNTRIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CCISA — Pan-African Expansion",
  description:
    "The Centre for Christianity and Islamic Studies in Africa (CCISA) — expanded from CCMRE in 2022 to serve all of Africa with interfaith training, education, and dialogue.",
};

export default function CCISAPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "var(--color-primary)" }} aria-labelledby="ccisa-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Pan-African · Since 2022</div>
          <h1 id="ccisa-hero-heading" className="font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}>CCISA — Centre for Christianity and Islamic Studies in Africa</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>The evolution of CCMRE into a pan-African institute — expanding our mandate from one neighbourhood in Nairobi to the entire African continent and beyond.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-bold text-xl mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>The Transition</h2>
              <div className="space-y-3 text-base leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                <p>In 2022, CCMRE transitioned from a community centre to Institute status, becoming the Centre for Christianity and Islamic Studies in Africa (CCISA). This transition reflected the growing continental and international reach of the work.</p>
                <p>CCISA now holds 24 community dialogue meetings yearly (two per month), plans short courses for communities across Kenya and Africa, conducts interreligious conferences, and hosts international visitors including delegates from Indonesia for university tours.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-bold text-xl mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Pan-African Vision</h2>
              <div className="space-y-3 text-base leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                <p>CCISA aims to become the hub for Christian-Muslim relations education across the African continent — offering training, research, and dialogue that is deeply contextualised for African realities.</p>
                <p>Our coordinator was invited to present at the SECAM Side Event at the African Union Summit in Addis Ababa, Ethiopia (7 February 2026) — a clear signal of CCISA&apos;s continental authority.</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Globe, title: "International Reach", body: "Engaging 10+ African countries and international partners from Europe and Asia." },
              { icon: Users, title: "24 Sessions/Year", body: "Two community dialogue meetings per month maintained consistently." },
              { icon: BookOpen, title: "Short Courses", body: "Planning county-wide and pan-African short courses for communities and practitioners." },
              { icon: Handshake, title: "Global Partnerships", body: "Working with LLI, KAICIID, DANMISSION, EMW, and other international organisations." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(201,162,39,0.12)" }} aria-hidden="true">
                  <Icon size={22} style={{ color: "var(--color-secondary)" }} />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h2 className="font-bold text-xl mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Countries in Our Network</h2>
            <div className="flex flex-wrap gap-2">
              {AFRICAN_COUNTRIES.map((c) => (
                <span key={c} className="px-3 py-1.5 rounded-full text-xs font-medium text-white" style={{ backgroundColor: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
