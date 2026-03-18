import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { ORG } from "@/lib/constants";

const SocialIcons = {
  Facebook: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Twitter: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M2 3h6.5L22 21h-6.5L2 3z" />
    </svg>
  ),
  Linkedin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Youtube: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ backgroundColor: "var(--color-primary)" }}
      role="contentinfo"
    >
      {/* Wave top */}
      <div className="overflow-hidden leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#F5F3F0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 — Brand */}
          <div>
            <div
              className="font-bold text-2xl mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              CCMRE / CCISA
            </div>
            <div
              className="text-sm mb-4"
              style={{ color: "var(--color-secondary)", fontFamily: "'Inter', system-ui, sans-serif" }}
            >
              A St. Paul&apos;s University Initiative
            </div>
            <p className="text-sm text-white/75 leading-relaxed mb-6">
              Promoting peaceful coexistence, interfaith dialogue, and inclusive education
              across Africa since 2010.
            </p>
            <div className="flex gap-3">
              {[
                { icon: SocialIcons.Facebook, label: "Facebook", href: "#" },
                { icon: SocialIcons.Twitter, label: "Twitter / X", href: "#" },
                { icon: SocialIcons.Linkedin, label: "LinkedIn", href: "#" },
                { icon: SocialIcons.Youtube, label: "YouTube", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              {[
                { label: "Our Story", href: "/about/our-story" },
                { label: "Vision & Mission", href: "/about/vision-mission" },
                { label: "Programmes", href: "/programmes" },
                { label: "Impact", href: "/impact" },
                { label: "Events", href: "/events" },
                { label: "News & Media", href: "/news" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a
                  href={`mailto:${ORG.email}`}
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  <span>{ORG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${ORG.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  <span>{ORG.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <div>
                  <div>{ORG.parent}</div>
                  <div>Limuru, Kenya</div>
                  <div className="text-xs mt-0.5">{ORG.postal}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <h3
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--color-secondary)" }}
            >
              Information
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
                { label: "Accessibility Statement", href: "/accessibility" },
                { label: "Cookie Preferences", href: "/cookies" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 rounded-lg text-xs text-white/60" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
              <p className="font-semibold text-white/80 mb-1">Registered with</p>
              <p>St. Paul&apos;s University, Limuru, Kenya</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} CCMRE / CCISA. All rights reserved.</p>
          <p>A St. Paul&apos;s University Initiative, Limuru, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
