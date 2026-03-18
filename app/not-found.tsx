import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: "var(--color-warm-bg)" }}
    >
      <div
        className="text-8xl font-bold mb-4 select-none"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "var(--color-secondary)", opacity: 0.4 }}
        aria-hidden="true"
      >
        404
      </div>
      <h1
        className="font-bold mb-4"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "var(--color-primary)" }}
      >
        Page Not Found
      </h1>
      <p
        className="text-base max-w-md mb-10"
        style={{ color: "#6B7280", fontFamily: "'Inter', system-ui, sans-serif", lineHeight: 1.7 }}
      >
        The page you are looking for may have been moved, renamed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="px-7 py-3 rounded-lg font-semibold text-white text-sm hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Return to Home
        </Link>
        <Link
          href="/contact"
          className="px-7 py-3 rounded-lg font-semibold text-sm border-2 hover:opacity-80 transition-opacity"
          style={{ borderColor: "var(--color-primary)", color: "var(--color-primary)", fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          Contact Us
        </Link>
      </div>
      <div className="mt-12 flex flex-wrap gap-4 justify-center text-sm" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {[
          { label: "About Us", href: "/about/our-story" },
          { label: "Programmes", href: "/programmes" },
          { label: "Impact", href: "/impact" },
          { label: "News", href: "/news" },
          { label: "Events", href: "/events" },
        ].map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
