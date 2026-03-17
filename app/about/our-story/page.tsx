import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TIMELINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "From a university campus in Eastleigh to all of Africa — the story of CCMRE and CCISA, 2004 to 2026.",
};

export default function OurStoryPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "var(--color-primary)" }}
        aria-labelledby="story-hero-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{
              backgroundColor: "rgba(201,162,39,0.2)",
              color: "var(--color-secondary)",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            About Us
          </div>
          <h1
            id="story-hero-heading"
            className="font-bold text-white mb-5"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Our Story
          </h1>
          <p
            className="text-white/75 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            From a university campus initiative in Eastleigh to a pan-African Institute —
            over two decades of building peace, one conversation at a time.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      {/* Main story */}
      <section className="py-16 lg:py-24" aria-labelledby="story-body-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              id="story-body-heading"
              className="font-bold mb-6"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--color-primary)",
              }}
            >
              A Vision Born from the Classroom, Tested in the Community
            </h2>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              <p>
                The Centre for Christian-Muslim Relations in Eastleigh (CCMRE) began as a
                practical field platform for students enrolled in St. Paul&apos;s University&apos;s
                Master&apos;s programme in Islam and Christian-Muslim Relations (ICMR) — a programme
                running since 2004 that has drawn students from across sub-Saharan Africa,
                including Sudan, Rwanda, Tanzania, Nigeria, Sierra Leone, Ethiopia, Liberia,
                Uganda, Egypt, and Kenya.
              </p>
              <p>
                Founded in 2010, CCMRE set out to translate academic theory into real-world
                engagement — hosting community dialogues, open forums in mosques and churches,
                peace walks, and media appearances, all centered on building trust between
                Christians and Muslims in Eastleigh and the broader Kamukunji area.
              </p>
              <p>
                When the Dusit DusitD2 Hotel attack occurred, CCMRE was already embedded deep
                enough in the community to facilitate open healing dialogue between Christians
                and Muslims — at a time when the nation needed it most. This moment crystallised
                what years of quiet groundwork had built.
              </p>
              <p>
                In 2022, this decade-long work grew into the Centre for Christianity and Islamic
                Studies in Africa (CCISA), expanding the mandate from one neighbourhood in Nairobi
                to the entire African continent — with partnerships stretching from Local Leaders
                International to KAICIID and the African Union.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[4/3]">
              <Image
                src="/images/conference-group.jpg"
                alt="Delegates at the CCMRE/CCISA interfaith conference — Christians and Muslims gathered for dialogue at St. Paul's University"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full opacity-15 -z-10"
              style={{ backgroundColor: "var(--color-secondary)" }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-16 lg:py-24 bg-white"
        aria-labelledby="timeline-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="timeline-heading"
            className="font-bold text-center mb-14"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              color: "var(--color-primary)",
            }}
          >
            Two Decades of Impact — A Timeline
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
              style={{ backgroundColor: "rgba(30,58,95,0.12)" }}
              aria-hidden="true"
            />

            <ol className="space-y-8">
              {TIMELINE.map((item, i) => (
                <li
                  key={item.year}
                  className={`relative flex ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} items-start sm:items-center gap-6 sm:gap-12`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-16 sm:pl-0 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                    <div
                      className="inline-block font-bold text-lg mb-1"
                      style={{ color: "var(--color-secondary)", fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item.year}
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}
                    >
                      {item.event}
                    </p>
                  </div>

                  {/* Dot */}
                  <div
                    className="absolute left-8 sm:static shrink-0 w-4 h-4 rounded-full border-2 border-white shadow-md z-10 -translate-x-1/2 sm:translate-x-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                    aria-hidden="true"
                  />

                  {/* Spacer for alternating */}
                  <div className="flex-1 hidden sm:block" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "var(--color-warm-bg)" }}
      >
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.75rem",
              color: "var(--color-primary)",
            }}
          >
            Be Part of the Next Chapter
          </h2>
          <p className="mb-8 text-base" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>
            Join us as we expand from Eastleigh to all of Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/programmes/ma-icmr"
              className="px-7 py-3 rounded-lg font-semibold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Explore Programmes
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-lg font-semibold text-sm border-2 hover:opacity-80 transition-opacity"
              style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)" }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
