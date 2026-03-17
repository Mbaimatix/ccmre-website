import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Tv, BookOpen, Globe } from "lucide-react";
import { AWARDS, AFRICAN_COUNTRIES, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "15+ years of impact: 110+ dialogue sessions, 8+ awards, 10+ African countries, and a national role in post-Dusit healing. See CCMRE/CCISA's impact across Kenya and Africa.",
};

export default function ImpactPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "var(--color-primary)" }} aria-labelledby="impact-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Results & Recognition</div>
          <h1 id="impact-hero-heading" className="font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>Our Impact</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>15+ years of grassroots peacebuilding, academic excellence, and national healing — measured in lives changed and communities transformed.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24" aria-labelledby="stats-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="font-bold text-center mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--color-primary)" }}>Impact by the Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="font-bold text-4xl mb-1" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-secondary)" }}>{stat.value}</div>
                <div className="font-semibold text-sm" style={{ color: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>{stat.label}</div>
                <div className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature story — Dusit */}
      <section className="py-16 bg-white" aria-labelledby="dusit-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ backgroundColor: "rgba(212,117,78,0.12)", color: "var(--color-cta)", fontFamily: "'Inter', system-ui, sans-serif" }}>Featured Impact Story</div>
            <h2 id="dusit-heading" className="font-bold text-2xl lg:text-3xl mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Post-Dusit Attack: National Healing Through Dialogue</h2>
            <div className="space-y-3 text-base leading-relaxed mb-6" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
              <p>When the DusitD2 Hotel attack shook Kenya, CCMRE was already embedded deep enough in Nairobi&apos;s Christian and Muslim communities to facilitate the urgent open dialogue the nation needed.</p>
              <p>Within days, CCMRE brought Christians and Muslims together to discuss openly — creating a space where fear, grief, and confusion could be addressed across religious lines rather than calcifying into division.</p>
              <p>This moment crystallised CCMRE&apos;s essential role not just as a peacebuilding programme, but as a national asset in times of crisis.</p>
            </div>
            <blockquote className="border-l-4 pl-5 italic text-base" style={{ borderColor: "var(--color-secondary)", fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-text)" }}>
              &ldquo;After the Dusit attack, Muslims and Christians were able to meet and discuss openly — this helped the Nation.&rdquo;
              <footer className="text-sm not-italic mt-2" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#6B7280" }}>— Ven. Canon Scholar Wayua Kiilu</footer>
            </blockquote>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <Image src="/images/peace-walk.jpg" alt="CCMRE peace walk — community members marching together for unity and peace in Eastleigh" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 lg:py-24" aria-labelledby="impact-awards-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="impact-awards-heading" className="font-bold text-center mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--color-primary)" }}>Awards &amp; Recognition</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AWARDS.map((award) => (
              <div key={award.name} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
                <Award size={20} style={{ color: "var(--color-secondary)" }} aria-hidden="true" />
                <div className="font-bold text-sm" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>{award.name}</div>
                {award.year && <div className="text-xs font-semibold" style={{ color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>{award.year}</div>}
                <div className="text-xs text-gray-500" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{award.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="py-16 bg-white" aria-labelledby="media-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="media-heading" className="font-bold text-center mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--color-primary)" }}>Media &amp; Academic Reach</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Tv, title: "Citizen TV Kenya", body: "'Sema na Citizen' — discussing youth, security and interfaith perspectives at national level." },
              { icon: BookOpen, title: "PACU University Nairobi", body: "Research presentations connecting grassroots dialogue with academic discourse." },
              { icon: BookOpen, title: "Tangaza University College", body: "Academic engagement and research presentation at this leading Nairobi institution." },
              { icon: Globe, title: "AU Summit, Addis Ababa", body: "SECAM Side Event, Hilton Hotel, Ethiopia — 7 February 2026. Presenting Africa Water Vision 2063 and interfaith policy." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <Icon size={22} className="mb-4" style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16" aria-labelledby="countries-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="countries-heading" className="font-bold mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--color-primary)" }}>African Countries in Our Network</h2>
          <p className="text-base mb-8" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>Students, graduates, and community members connected to CCMRE/CCISA span more than 10 African nations.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {AFRICAN_COUNTRIES.map((c) => (
              <span key={c} className="px-5 py-2.5 rounded-full font-medium text-sm text-white" style={{ backgroundColor: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>{c}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
