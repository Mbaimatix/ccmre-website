import type { Metadata } from "next";
import { Eye, Target, Heart, Users, Globe, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision, Mission & Values",
  description:
    "CCMRE's vision for a peaceful Africa, mission to facilitate interfaith education, and core values of dignity, inclusivity, peace, and excellence.",
};

const values = [
  {
    icon: Heart,
    title: "Dignity & Respect",
    body: "All human beings are treated with dignity irrespective of religion, gender, class, age, or ability. Every person who enters our spaces is seen, heard, and valued.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    body: "Accommodative engagement across all cultural backgrounds, religious affiliations, and abilities — men, women, youth, the differently-abled, and all classes are welcome.",
  },
  {
    icon: Globe,
    title: "Peace Advocacy",
    body: "Creating awareness on peaceful coexistence across all networks — from community dialogue sessions in Eastleigh to international conferences and the African Union.",
  },
  {
    icon: Star,
    title: "Academic Excellence",
    body: "Producing specialists in Christian-Muslim relations across Africa through the MA in Islam and Christian-Muslim Relations and expanding programmes under CCISA.",
  },
];

export default function VisionMissionPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ backgroundColor: "var(--color-primary)" }}
        aria-labelledby="vm-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Who We Are
          </div>
          <h1
            id="vm-hero-heading"
            className="font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Vision, Mission &amp; Values
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            The principles that guide every dialogue, every class, and every walk for peace.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24" aria-labelledby="vision-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision */}
            <div
              className="p-8 lg:p-10 rounded-3xl"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(201,162,39,0.2)" }}
                aria-hidden="true"
              >
                <Eye size={26} style={{ color: "var(--color-secondary)" }} />
              </div>
              <h2
                id="vision-heading"
                className="font-bold text-white text-2xl mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Our Vision
              </h2>
              <p className="text-white/80 leading-relaxed" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                &ldquo;To be the hub and African Centre for Christian-Muslim relations, training and educating
                on peaceful coexistence, inclusion, cohesion, gender accommodation, and peaceful
                coexistence — where people of all religions are free to engage with their fellow
                human beings without tensions or fear, be it men, women, youth, disabled, and all
                classes.&rdquo;
              </p>
            </div>

            {/* Mission */}
            <div
              className="p-8 lg:p-10 rounded-3xl border-2"
              style={{ backgroundColor: "white", borderColor: "rgba(30,58,95,0.1)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: "rgba(30,58,95,0.08)" }}
                aria-hidden="true"
              >
                <Target size={26} style={{ color: "var(--color-primary)" }} />
              </div>
              <h2
                className="font-bold text-2xl mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}
              >
                Our Mission
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                &ldquo;To facilitate training and education for people of different religions, cultural
                backgrounds, genders, classes, and abilities to embrace peace, peaceful coexistence,
                inclusion, diversity, and cohesion.&rdquo;
              </p>
            </div>
          </div>

          {/* Core Values */}
          <h2
            className="font-bold text-center mb-10"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--color-primary)",
            }}
          >
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "rgba(201,162,39,0.12)" }}
                    aria-hidden="true"
                  >
                    <Icon size={24} style={{ color: "var(--color-secondary)" }} />
                  </div>
                  <h3
                    className="font-bold text-base mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}
                  >
                    {val.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {val.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
