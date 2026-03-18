import type { Metadata } from "next";
import Image from "next/image";
import { Award, Globe, Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "Team & Leadership",
  description:
    "Meet Ven. Canon Scholar Wayua Kiilu, the founding coordinator of CCMRE/CCISA, and the team behind Kenya's leading interfaith organisation.",
};

const achievements = [
  { icon: Award, text: "8+ major awards including multiple DIAR, PROCMURA Ambassador (2021), Peace League Africa (2025), and World Religions Champion (2024)" },
  { icon: Globe, text: "Invited to present at SECAM Side Event, African Union Summit, Addis Ababa, Ethiopia — 7 February 2026" },
  { icon: Mic, text: "Featured on Citizen TV Kenya — 'Sema na Citizen' on youth, security, and interfaith perspective" },
];

export default function TeamPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ backgroundColor: "var(--color-primary)" }}
        aria-labelledby="team-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Leadership
          </div>
          <h1
            id="team-hero-heading"
            className="font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Team &amp; Leadership
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            Driven by a passion for peace and a commitment to every voice being heard.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      {/* Coordinator profile */}
      <section className="py-16 lg:py-24" aria-labelledby="coordinator-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid md:grid-cols-5 gap-10 items-start bg-white rounded-3xl shadow-md overflow-hidden p-8 lg:p-12"
          >
            {/* Photo */}
            <div className="md:col-span-2 flex flex-col items-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4 border-4 border-[var(--color-secondary)]">
                <Image
                  src="/images/coordinator.jpg"
                  alt="Ven. Canon Scholar Wayua Kiilu — Coordinator of CCMRE/CCISA, holding Peace League Africa Award 2025"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
              <div
                className="px-4 py-1.5 rounded-full text-xs font-semibold text-center"
                style={{ backgroundColor: "rgba(201,162,39,0.15)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Founding Coordinator
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3">
              <h2
                id="coordinator-heading"
                className="font-bold text-2xl lg:text-3xl mb-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}
              >
                Ven. Canon Scholar Wayua Kiilu
              </h2>
              <p
                className="text-sm font-medium mb-6"
                style={{ color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Coordinator, ICMR &amp; CCMRE / CCISA — St. Paul&apos;s University
              </p>

              <div className="space-y-3 text-base leading-relaxed mb-8" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                <p>
                  The Centre&apos;s founding coordinator and driving force behind its growth from a campus
                  practical platform into a pan-African institute. Ven. Canon Scholar Wayua Kiilu has
                  led over 110 community dialogue sessions, presented research at universities across
                  Nairobi, and championed the inclusion of women and youth in interfaith dialogue and
                  peace advocacy across Kenya and Africa.
                </p>
                <p>
                  In February 2026, she was invited to present at the SECAM Side Event at the African
                  Union Summit in Addis Ababa, Ethiopia — a recognition of CCISA&apos;s continental reach
                  and her personal authority in interfaith leadership.
                </p>
                <p>
                  She has appeared on Citizen TV Kenya&apos;s &apos;Sema na Citizen&apos; programme discussing youth,
                  security, and interfaith perspectives, and has been recognized with multiple prestigious
                  awards including the PROCMURA Ambassador Award, multiple DIAR recognitions, the
                  Peace League Africa Award, and the World Religions Champion award from the Circle of
                  Concerned African Women Theologians.
                </p>
              </div>

              <ul className="space-y-3">
                {achievements.map((a) => {
                  const Icon = a.icon;
                  return (
                    <li key={a.text} className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: "rgba(201,162,39,0.12)" }}
                        aria-hidden="true"
                      >
                        <Icon size={15} style={{ color: "var(--color-secondary)" }} />
                      </div>
                      <span className="text-sm" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>{a.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team note */}
      <section className="py-16 bg-white" aria-labelledby="staff-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="staff-heading"
            className="font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--color-primary)" }}
          >
            Our Wider Community
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>
            CCMRE and CCISA draw on a wide network of academics, community leaders, chaplains,
            and interfaith practitioners from across Kenya and Africa. Students from over 10 countries
            enrolled in the MA in Islam and Christian-Muslim Relations form the practical backbone of
            our dialogue and outreach work. To connect with the team, please{" "}
            <a href="/contact" className="underline hover:no-underline" style={{ color: "var(--color-primary)" }}>contact us</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
