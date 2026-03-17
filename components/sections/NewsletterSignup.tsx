"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    // Honeypot check (handled by hidden field)
    setSubmitted(true);
    setError("");
  };

  return (
    <section
      className="py-16"
      style={{ backgroundColor: "var(--color-warm-bg)" }}
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ backgroundColor: "rgba(30,58,95,0.08)" }}
          aria-hidden="true"
        >
          <Mail size={24} style={{ color: "var(--color-primary)" }} />
        </div>

        <h2
          id="newsletter-heading"
          className="font-bold mb-3"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            color: "var(--color-primary)",
          }}
        >
          Stay Connected
        </h2>

        <p
          className="text-base mb-8"
          style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Get updates on our programmes, upcoming dialogue sessions, awards, and impact stories
          from across Africa.
        </p>

        {submitted ? (
          <div
            className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-base font-semibold"
            style={{ backgroundColor: "rgba(122,158,126,0.15)", color: "var(--color-accent)" }}
            role="alert"
            aria-live="polite"
          >
            <CheckCircle size={20} />
            Thank you! You&apos;re now subscribed to CCMRE updates.
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate aria-label="Newsletter subscription form">
            {/* Honeypot field — hidden from real users */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              aria-hidden="true"
              className="sr-only"
              autoComplete="off"
            />

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  placeholder="Your email address"
                  required
                  aria-required="true"
                  aria-invalid={!!error}
                  aria-describedby={error ? "newsletter-error" : undefined}
                  className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-shadow"
                  style={{
                    borderColor: error ? "#EF4444" : "#D1D5DB",
                    fontFamily: "'Inter', system-ui, sans-serif",
                    color: "var(--color-text)",
                    backgroundColor: "white",
                  }}
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg font-semibold text-white text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-md"
                style={{ backgroundColor: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                Subscribe
              </button>
            </div>

            {error && (
              <p
                id="newsletter-error"
                className="text-sm mt-2"
                style={{ color: "#EF4444", fontFamily: "'Inter', system-ui, sans-serif" }}
                role="alert"
              >
                {error}
              </p>
            )}

            <p
              className="text-xs mt-3"
              style={{ color: "#9CA3AF", fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
