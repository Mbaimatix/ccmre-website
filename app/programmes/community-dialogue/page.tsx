import type { Metadata } from "next";
import Image from "next/image";
import { Users, MapPin, Tv, Music, Heart, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "CCMRE Community Dialogue Initiatives",
  description:
    "110+ community dialogue sessions in Kamukunji, Mathare, Eastleigh, Majengo, and Mlango Kubwa since 2017. Peace walks, open forums, and grassroots peacebuilding.",
};

const activities = [
  { icon: MessageCircle, title: "Community Dialogue Sessions", body: "Two structured dialogue sessions per month since 2017 — open, facilitated conversations between Christians and Muslims in Kamukunji, Mathare, Eastleigh, Majengo, and Mlango Kubwa." },
  { icon: Users, title: "Open Forums in Mosques & Churches", body: "Hosting and participating in interfaith open forums within religious spaces — normalising conversation and breaking down walls of misunderstanding." },
  { icon: Heart, title: "Peace Walks", body: "Community-led peace marches bringing Christians and Muslims together in visible solidarity — including gender-based violence awareness walks and interfaith parades." },
  { icon: Tv, title: "Media Engagements", body: "Appearances on Citizen TV Kenya's 'Sema na Citizen' programme, discussing youth, security, and interfaith perspectives at a national level." },
  { icon: Music, title: "Workshops & Seminars", body: "Training workshops on conflict transformation, peacebuilding methodology, gender and religion, and community leadership for grassroots practitioners." },
  { icon: MapPin, title: "Research Presentations", body: "Academic research presented at PACU University Nairobi, Tangaza University College, and other institutions — connecting grassroots practice with scholarly discourse." },
];

const areas = ["Kamukunji", "Mathare", "Eastleigh", "Majengo", "Mlango Kubwa"];

export default function CommunityDialoguePage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "var(--color-primary)" }} aria-labelledby="dialogue-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Community · Since 2010</div>
          <h1 id="dialogue-hero-heading" className="font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}>Community Dialogue Initiatives</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>110+ dialogue sessions. Five Nairobi neighbourhoods. One mission: real peace at the grassroots.</p>
          <div className="flex justify-center gap-8 mt-8">
            {[{ v: "110+", l: "Sessions" }, { v: "5", l: "Areas" }, { v: "2×", l: "Per Month" }].map(({ v, l }) => (
              <div key={l} className="text-center">
                <div className="font-bold text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-secondary)" }}>{v}</div>
                <div className="text-sm text-white/60" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      {/* Photo + areas */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <Image
              src="/images/community-dialogue.jpg"
              alt="CCMRE community dialogue session — Christians and Muslims gathered for open conversation in Eastleigh"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-bold text-2xl mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Where We Work</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
              Our community engagement is rooted in some of Nairobi&apos;s most diverse and dynamic neighbourhoods — areas where Christians and Muslims live, work, and raise families together. Since 2017, we have consistently held two sessions per month in each of these areas.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {areas.map((area) => (
                <span key={area} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-white" style={{ backgroundColor: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                  <MapPin size={12} aria-hidden="true" /> {area}
                </span>
              ))}
            </div>
            <blockquote className="border-l-4 pl-5 py-3 italic text-base" style={{ borderColor: "var(--color-secondary)", color: "var(--color-text)", fontFamily: "'Playfair Display', Georgia, serif" }}>
              &ldquo;After the Dusit attack, Muslims and Christians were able to meet and discuss openly — this helped the Nation.&rdquo;
              <footer className="text-sm not-italic mt-2" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "#6B7280" }}>— Ven. Canon Scholar Wayua Kiilu</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-white" aria-labelledby="activities-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="activities-heading" className="font-bold text-center mb-12" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--color-primary)" }}>Our Activities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((act) => {
              const Icon = act.icon;
              return (
                <div key={act.title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(122,158,126,0.12)" }} aria-hidden="true">
                    <Icon size={22} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>{act.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>{act.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
