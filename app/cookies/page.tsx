import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How CCMRE/CCISA uses cookies on its website.",
};

export default function CookiesPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <section className="relative pt-32 pb-16" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Legal</div>
          <h1 className="font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>Cookie Policy</h1>
          <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>Last updated: March 2026</p>
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
              <h2 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>What Are Cookies?</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                Cookies are small text files stored on your device by your browser when you visit a website. They are widely used to make websites work correctly, remember your preferences, and provide basic analytics to website owners.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>How We Use Cookies</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                The CCMRE/CCISA website uses a minimal number of cookies. We do <strong>not</strong> use cookies for advertising or cross-site tracking.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
                  <thead>
                    <tr style={{ backgroundColor: "rgba(30,58,95,0.06)" }}>
                      <th className="text-left p-3 font-semibold" style={{ color: "var(--color-primary)" }}>Cookie</th>
                      <th className="text-left p-3 font-semibold" style={{ color: "var(--color-primary)" }}>Purpose</th>
                      <th className="text-left p-3 font-semibold" style={{ color: "var(--color-primary)" }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Strictly Necessary", purpose: "Required for the website to function correctly. Cannot be disabled.", duration: "Session" },
                      { name: "Analytics (optional)", purpose: "Help us understand how visitors use the site (e.g. Google Analytics, if enabled). No personal identification.", duration: "Up to 2 years" },
                    ].map((row, i) => (
                      <tr key={row.name} style={{ backgroundColor: i % 2 === 0 ? "transparent" : "rgba(30,58,95,0.02)" }}>
                        <td className="p-3 font-medium" style={{ color: "var(--color-text)" }}>{row.name}</td>
                        <td className="p-3" style={{ color: "#6B7280" }}>{row.purpose}</td>
                        <td className="p-3" style={{ color: "#6B7280" }}>{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Managing Cookies</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                You can control and delete cookies through your browser settings. Most browsers allow you to refuse all cookies or accept only certain types. Note that disabling strictly necessary cookies may affect website functionality.
              </p>
              <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                For instructions on managing cookies in your browser, visit <strong>aboutcookies.org</strong> or your browser&apos;s help documentation.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Contact</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                If you have questions about our use of cookies, contact us at{" "}
                <a href="mailto:skiilu@spu.ac.ke" className="underline hover:no-underline" style={{ color: "var(--color-primary)" }}>skiilu@spu.ac.ke</a>.
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
