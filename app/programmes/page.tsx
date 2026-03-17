import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Users, Globe, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programmes",
  description:
    "CCMRE/CCISA programmes: MA in Islam & Christian-Muslim Relations, Community Dialogue Initiatives, CCISA Pan-African Expansion, and PROCMURA Chapter.",
};

const programmes = [
  {
    icon: GraduationCap,
    title: "MA in Islam & Christian-Muslim Relations (ICMR)",
    href: "/programmes/ma-icmr",
    body: "Running since 2004, this graduate programme has trained specialists from 10+ African countries — all under one academic roof at St. Paul's University, Limuru, Kenya.",
    badge: "Academic",
    color: "var(--color-primary)",
  },
  {
    icon: Users,
    title: "CCMRE Community Dialogue Initiatives",
    href: "/programmes/community-dialogue",
    body: "110+ dialogue sessions in Kamukunji, Mathare, Eastleigh, Majengo, and Mlango Kubwa since 2017. Peace walks, open forums, media engagements, and healing conversations.",
    badge: "Community",
    color: "var(--color-accent)",
  },
  {
    icon: Globe,
    title: "CCISA Pan-African Expansion",
    href: "/programmes/ccisa",
    body: "Transitioned from Centre to Institute status in 2022. CCISA trains communities across Africa, partners with international organisations, and plans short courses across the continent.",
    badge: "Continental",
    color: "var(--color-cta)",
  },
];

export default function ProgrammesPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "var(--color-primary)" }} aria-labelledby="programmes-page-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>What We Do</div>
          <h1 id="programmes-page-heading" className="font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>Our Programmes</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>From the classroom to the community, from Eastleigh to all of Africa — four interconnected programmes driving interfaith peace.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {programmes.map((prog) => {
            const Icon = prog.icon;
            return (
              <div key={prog.title} className="flex flex-col md:flex-row gap-6 bg-white rounded-3xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${prog.color}18` }} aria-hidden="true">
                  <Icon size={28} style={{ color: prog.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${prog.color}15`, color: prog.color, fontFamily: "'Inter', system-ui, sans-serif" }}>{prog.badge}</span>
                  </div>
                  <h2 className="font-bold text-xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>{prog.title}</h2>
                  <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>{prog.body}</p>
                  <Link href={prog.href} className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-3 transition-all" style={{ color: prog.color, fontFamily: "'Inter', system-ui, sans-serif" }}>Learn More <ArrowRight size={15} /></Link>
                </div>
              </div>
            );
          })}
          {/* PROCMURA */}
          <div className="flex flex-col md:flex-row gap-6 bg-white rounded-3xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(122,158,126,0.12)" }} aria-hidden="true">
              <Users size={28} style={{ color: "var(--color-accent)" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(122,158,126,0.12)", color: "var(--color-accent)", fontFamily: "'Inter', system-ui, sans-serif" }}>Partnership</span>
              </div>
              <h2 className="font-bold text-xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>PROCMURA Chapter at SPU</h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>St. Paul's University is an active chapter member of the Programme for Christian-Muslim Relations in Africa (PROCMURA) — running collaborative programming alongside the ICMR academic offering.</p>
              <Link href="/programmes/procmura" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-3 transition-all" style={{ color: "var(--color-accent)", fontFamily: "'Inter', system-ui, sans-serif" }}>Learn More <ArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
