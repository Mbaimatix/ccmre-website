import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "CCMRE/CCISA's commitment to digital accessibility and how to report issues.",
};

export default function AccessibilityPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <section className="relative pt-32 pb-16" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Legal</div>
          <h1 className="font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>Accessibility Statement</h1>
          <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>Last reviewed: March 2026</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 space-y-8">
            <div>
              <h2 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Our Commitment</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                CCMRE/CCISA is committed to ensuring that this website is accessible to all people, regardless of disability, age, or the technology they use. Inclusivity is a core value of our organisation — it extends to our digital presence as much as our community programmes.
              </p>
              <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>What We Have Done</h2>
              <ul className="text-sm leading-relaxed space-y-2" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                {[
                  "All images include descriptive alt text",
                  "Skip-navigation link provided for keyboard users",
                  "Colour contrast ratios meet WCAG 2.1 AA minimums (4.5:1 for text)",
                  "All interactive elements are keyboard-navigable with visible focus indicators",
                  "ARIA labels and roles applied throughout for screen reader compatibility",
                  "Semantic HTML5 structure (header, main, nav, section, article, footer)",
                  "Animations respect the prefers-reduced-motion media query",
                  "Forms include proper labels, error messages, and required field indicators",
                  "Mobile-responsive design works across screen sizes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "var(--color-accent)" }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Known Limitations</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                Some partner logo images are currently displayed as styled text placeholders while we await high-resolution logo files from our partners. These will be replaced with properly alt-tagged images when available.
              </p>
              <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                We continually work to improve accessibility. If you encounter any barriers, please let us know.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Report an Accessibility Issue</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                If you experience any difficulty accessing content on this website, please contact us:
              </p>
              <div className="mt-3 p-4 rounded-xl text-sm space-y-1" style={{ backgroundColor: "rgba(30,58,95,0.05)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                <p><strong>Email:</strong> <a href="mailto:skiilu@spu.ac.ke" className="underline hover:no-underline" style={{ color: "var(--color-primary)" }}>skiilu@spu.ac.ke</a></p>
                <p><strong>Phone:</strong> +254 720 714 137</p>
                <p>We aim to respond within 5 working days.</p>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Technical Approach</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                This website is built with Next.js 15 using semantic HTML5 and modern accessibility best practices. It is compatible with current major browsers and assistive technologies including NVDA, VoiceOver, and JAWS screen readers.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm font-medium hover:underline" style={{ color: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>← Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
