import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROCMURA Chapter at SPU",
  description:
    "St. Paul's University hosts an active PROCMURA (Programme for Christian-Muslim Relations in Africa) chapter — running collaborative programming alongside the ICMR degree.",
};

export default function ProcmuraPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "var(--color-primary)" }} aria-labelledby="procmura-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Partnership Programme</div>
          <h1 id="procmura-hero-heading" className="font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}>PROCMURA Chapter at St. Paul&apos;s University</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>St. Paul's University is a proud active chapter member of the Programme for Christian-Muslim Relations in Africa (PROCMURA).</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <h2 className="font-bold text-2xl mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>About PROCMURA</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
              <p>PROCMURA — the Programme for Christian-Muslim Relations in Africa — is a pan-African ecumenical programme that coordinates and supports Christian-Muslim relations work across the continent. It brings together churches, universities, and religious organisations committed to building bridges between Christians and Muslims.</p>
              <p>St. Paul&apos;s University (SPU) hosts an active PROCMURA chapter, running collaborative programming alongside the ICMR academic programme and CCMRE/CCISA community work. This partnership strengthens SPU&apos;s continental network and provides students with access to the broader PROCMURA network of institutions across Africa.</p>
              <p>The PROCMURA Ambassador Award was presented to Ven. Scholar Wayua in 2021 — recognising her exceptional contribution to Christian-Muslim relations in Kenya and beyond.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
