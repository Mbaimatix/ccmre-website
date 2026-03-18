"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { ORG } from "@/lib/constants";

const subjects = [
  "Programme Enquiry",
  "Partnership",
  "Media",
  "Event",
  "Support / Donation",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", website: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Valid email is required.";
    if (!form.subject) e.subject = "Please select a subject.";
    if (!form.message.trim() || form.message.length < 10) e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.website) return; // honeypot
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      {/* Hero */}
      <section className="relative pt-32 pb-20" style={{ backgroundColor: "var(--color-primary)" }} aria-labelledby="contact-hero-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}>Reach Out</div>
          <h1 id="contact-hero-heading" className="font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>Contact Us</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>Whether you&apos;re a student, a partner, a journalist, or a community member — we want to hear from you.</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-bold text-xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Get in Touch</h2>
              <ul className="space-y-5">
                <li>
                  <a href={`mailto:${ORG.email}`} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(30,58,95,0.08)" }} aria-hidden="true">
                      <Mail size={17} style={{ color: "var(--color-primary)" }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "#9CA3AF", fontFamily: "'Inter', system-ui, sans-serif" }}>Email</div>
                      <div className="text-sm group-hover:underline" style={{ color: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>{ORG.email}</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`tel:${ORG.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(30,58,95,0.08)" }} aria-hidden="true">
                      <Phone size={17} style={{ color: "var(--color-primary)" }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "#9CA3AF", fontFamily: "'Inter', system-ui, sans-serif" }}>Phone</div>
                      <div className="text-sm group-hover:underline" style={{ color: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>{ORG.phone}</div>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(30,58,95,0.08)" }} aria-hidden="true">
                    <MapPin size={17} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold mb-0.5" style={{ color: "#9CA3AF", fontFamily: "'Inter', system-ui, sans-serif" }}>Address</div>
                    <div className="text-sm" style={{ color: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                      <div>{ORG.parent}</div>
                      <div>Limuru, Kenya</div>
                      <div className="text-xs text-gray-500 mt-0.5">{ORG.postal}</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-100" style={{ height: "220px" }}>
              <iframe
                src="https://maps.google.com/maps?q=St+Paul%27s+University+Limuru+Kenya&z=14&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St. Paul's University, Limuru — map location"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100">
              <h2 className="font-bold text-xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Send Us a Message</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
                  <CheckCircle size={40} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                  <h3 className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-primary)" }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}>Thank you for reaching out. We&apos;ll get back to you within 2–3 working days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  {/* Honeypot */}
                  <input type="text" name="website" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} tabIndex={-1} aria-hidden="true" className="sr-only" autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                        Full Name <span aria-label="required">*</span>
                      </label>
                      <input id="contact-name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" required aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-shadow focus:ring-2"
                        style={{ borderColor: errors.name ? "#EF4444" : "#E5E7EB", fontFamily: "'Inter', system-ui, sans-serif", color: "var(--color-text)" }}
                      />
                      {errors.name && <p id="name-err" role="alert" className="text-xs mt-1" style={{ color: "#EF4444", fontFamily: "'Inter', system-ui, sans-serif" }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                        Email Address <span aria-label="required">*</span>
                      </label>
                      <input id="contact-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" required aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-shadow"
                        style={{ borderColor: errors.email ? "#EF4444" : "#E5E7EB", fontFamily: "'Inter', system-ui, sans-serif", color: "var(--color-text)" }}
                      />
                      {errors.email && <p id="email-err" role="alert" className="text-xs mt-1" style={{ color: "#EF4444", fontFamily: "'Inter', system-ui, sans-serif" }}>{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="contact-subject" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                      Subject <span aria-label="required">*</span>
                    </label>
                    <select id="contact-subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required aria-required="true" aria-invalid={!!errors.subject}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-shadow bg-white"
                      style={{ borderColor: errors.subject ? "#EF4444" : "#E5E7EB", fontFamily: "'Inter', system-ui, sans-serif", color: form.subject ? "var(--color-text)" : "#9CA3AF" }}
                    >
                      <option value="" disabled>Select a subject…</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.subject && <p role="alert" className="text-xs mt-1" style={{ color: "#EF4444", fontFamily: "'Inter', system-ui, sans-serif" }}>{errors.subject}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                      Message <span aria-label="required">*</span>
                    </label>
                    <textarea id="contact-message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us how we can help…" required aria-required="true" aria-invalid={!!errors.message}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-shadow resize-none"
                      style={{ borderColor: errors.message ? "#EF4444" : "#E5E7EB", fontFamily: "'Inter', system-ui, sans-serif", color: "var(--color-text)" }}
                    />
                    {errors.message && <p role="alert" className="text-xs mt-1" style={{ color: "#EF4444", fontFamily: "'Inter', system-ui, sans-serif" }}>{errors.message}</p>}
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-base transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-md" style={{ backgroundColor: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
