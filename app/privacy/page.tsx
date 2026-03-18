import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CCMRE/CCISA collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Who We Are",
    body: `The Centre for Christian-Muslim Relations in Eastleigh (CCMRE) / Centre for Christianity and Islamic Studies in Africa (CCISA) is a programme of St. Paul's University (SPU), Limuru, Kenya. We are responsible for the personal information you provide to us through this website.\n\nContact: skiilu@spu.ac.ke | +254 720 714 137`,
  },
  {
    title: "2. Information We Collect",
    body: `We collect personal information only when you voluntarily provide it, including:\n\n• Contact form submissions (name, email address, message)\n• Newsletter subscriptions (email address)\n• Event enquiries and programme application enquiries\n\nWe do not use cookies for tracking or advertising purposes beyond what is necessary for the website to function.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use information you provide solely to:\n\n• Respond to your enquiries and messages\n• Send you updates on our programmes, dialogue sessions, and events (newsletter subscribers only)\n• Process programme application enquiries\n• Comply with legal obligations\n\nWe will never sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: "4. Legal Basis for Processing",
    body: `We process your personal data on the basis of:\n\n• Your consent (e.g. newsletter subscription, contact form submission)\n• Our legitimate interests in operating an educational and peacebuilding organisation\n• Compliance with applicable Kenyan and international law`,
  },
  {
    title: "5. Data Storage and Security",
    body: `Your data is stored securely. We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, or misuse. We retain your information only as long as necessary for the purposes described in this policy.`,
  },
  {
    title: "6. Your Rights",
    body: `You have the right to:\n\n• Access the personal information we hold about you\n• Request correction of inaccurate information\n• Request deletion of your information\n• Withdraw consent at any time (e.g. unsubscribe from newsletters)\n• Lodge a complaint with a relevant data protection authority\n\nTo exercise any of these rights, contact us at skiilu@spu.ac.ke.`,
  },
  {
    title: "7. Third-Party Services",
    body: `This website is hosted on Vercel. Our contact form and newsletter may be processed through third-party services. These services operate under their own privacy policies and are bound by appropriate data processing agreements.`,
  },
  {
    title: "8. Children's Privacy",
    body: `Our website is not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.`,
  },
  {
    title: "9. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: "10. Contact Us",
    body: `For any questions about this Privacy Policy or your personal data:\n\nEmail: skiilu@spu.ac.ke\nPhone: +254 720 714 137\nAddress: St. Paul's University, Limuru, Kenya`,
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <section className="relative pt-32 pb-16" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Legal</div>
          <h1 className="font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3rem)" }}>Privacy Policy</h1>
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
