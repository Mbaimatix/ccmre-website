import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using the CCMRE/CCISA website.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing and using this website (ccmre.spu.ac.ke), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.`,
  },
  {
    title: "2. About This Website",
    body: `This website is operated by the Centre for Christian-Muslim Relations in Eastleigh (CCMRE) / Centre for Christianity and Islamic Studies in Africa (CCISA), a programme of St. Paul's University, Limuru, Kenya. It is provided for informational purposes about our programmes, activities, and mission.`,
  },
  {
    title: "3. Intellectual Property",
    body: `All content on this website — including text, photographs, graphics, logos, and programme materials — is the property of CCMRE/CCISA or St. Paul's University and is protected by applicable copyright laws.\n\nYou may share links to this website and quote brief excerpts for educational or journalistic purposes, provided you credit CCMRE/CCISA as the source. You may not reproduce substantial portions of this website without written permission.`,
  },
  {
    title: "4. Accuracy of Information",
    body: `We make every effort to ensure the information on this website is accurate and up to date. However, we make no warranties or representations as to the accuracy, completeness, or suitability of any information provided. Programme details, dates, and contact information are subject to change.`,
  },
  {
    title: "5. External Links",
    body: `This website may contain links to external websites operated by third parties (including partner organisations). These links are provided for convenience only. CCMRE/CCISA does not endorse, control, or take responsibility for the content of external websites.`,
  },
  {
    title: "6. Contact Forms and Communications",
    body: `When you submit a contact form or newsletter subscription, you agree to provide accurate information and accept that we may use your details to respond to your enquiry and, where you have subscribed, to send relevant updates. See our Privacy Policy for full details.`,
  },
  {
    title: "7. Limitation of Liability",
    body: `CCMRE/CCISA shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website or its content. This includes but is not limited to loss of data, loss of profits, or business interruption.`,
  },
  {
    title: "8. Governing Law",
    body: `These Terms of Use are governed by the laws of Kenya. Any disputes arising from the use of this website shall be subject to the jurisdiction of the courts of Kenya.`,
  },
  {
    title: "9. Changes to These Terms",
    body: `We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page with an updated date. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.`,
  },
  {
    title: "10. Contact",
    body: `For questions about these Terms of Use:\n\nEmail: skiilu@spu.ac.ke\nPhone: +254 720 714 137\nAddress: St. Paul's University, Limuru, Kenya`,
  },
];

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <section className="relative pt-32 pb-16" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Legal</div>
          <h1 className="font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>Terms of Use</h1>
          <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>Effective date: March 2026 · Last updated: March 2026</p>
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
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>{s.title}</h2>
                <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>{s.body}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm font-medium hover:underline" style={{ color: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>← Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
