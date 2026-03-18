import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";


export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming dialogue sessions, conferences, and events from CCMRE/CCISA — two community dialogue sessions per month in Eastleigh and surrounding areas.",
};

const upcomingEvents = [
  {
    title: "Monthly Community Dialogue Session — Kamukunji",
    date: "Every 2nd Wednesday",
    time: "10:00 AM – 12:00 PM",
    location: "Kamukunji, Nairobi",
    type: "Dialogue Session",
    description: "Open interfaith dialogue between Christians and Muslims in the Kamukunji community. All are welcome. No prior experience required.",
  },
  {
    title: "Monthly Community Dialogue Session — Eastleigh",
    date: "Every 4th Wednesday",
    time: "10:00 AM – 12:00 PM",
    location: "Eastleigh, Nairobi",
    type: "Dialogue Session",
    description: "Our flagship Eastleigh dialogue — the community where CCMRE was born. Open to all faiths and backgrounds.",
  },
  {
    title: "Open Forum — Mathare & Mlango Kubwa",
    date: "Monthly",
    time: "2:00 PM – 4:00 PM",
    location: "Mathare / Mlango Kubwa",
    type: "Open Forum",
    description: "Community open forum held in partnership with local mosque and church leadership. Topics vary based on community needs.",
  },
  {
    title: "ICMR Interreligious Conference",
    date: "Annual — typically Q3/Q4 (date to be confirmed)",
    time: "Full Day",
    location: "St. Paul's University, Limuru",
    type: "Conference",
    description: "Annual academic-community conference bringing together ICMR students, researchers, community leaders, and international partners.",
  },
];

const typeColors: Record<string, string> = {
  "Dialogue Session": "var(--color-primary)",
  "Open Forum": "var(--color-accent)",
  "Conference": "var(--color-cta)",
  "Workshop": "var(--color-secondary)",
};

export default function EventsPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "var(--color-primary)" }} aria-labelledby="events-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Get Involved</div>
          <h1 id="events-hero-heading" className="font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>Events &amp; Dialogue Sessions</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>Two community dialogue sessions per month, year-round — plus annual conferences, workshops, and peace walks. Everyone is welcome.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-labelledby="events-list-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="events-list-heading" className="font-bold mb-10" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "var(--color-primary)" }}>Regular Events &amp; Upcoming</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full text-white shrink-0" style={{ backgroundColor: typeColors[event.type] || "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>{event.type}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-3 text-sm" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>
                      <span className="flex items-center gap-1.5"><Calendar size={13} aria-hidden="true" />{event.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={13} aria-hidden="true" />{event.time}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={13} aria-hidden="true" />{event.location}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 text-center">
            <h2 className="font-bold text-xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Attend a Dialogue Session</h2>
            <p className="text-base mb-6" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>All community dialogue sessions are open to everyone — no registration required. Contact us for exact dates, locations, and to receive session reminders.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--color-primary)" }}>
              Contact Us <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
