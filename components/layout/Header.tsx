"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // On inner pages, always treat as scrolled (solid header)
  const solidHeader = !isHomepage || scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solidHeader
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight group" aria-label="CCMRE / CCISA Home">
          <span
            className="font-bold text-xl tracking-tight transition-colors"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: solidHeader ? "var(--color-primary)" : "white",
            }}
          >
            CCMRE / CCISA
          </span>
          <span
            className="text-xs font-medium transition-colors"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              color: solidHeader ? "var(--color-secondary)" : "rgba(201,162,39,0.9)",
            }}
          >
            A St. Paul&apos;s University Initiative
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    solidHeader
                      ? "text-gray-700 hover:text-[var(--color-primary)]"
                      : "text-white/90 hover:text-white"
                  )}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={cn(
                      "transition-transform duration-200",
                      openDropdown === item.label ? "rotate-180" : ""
                    )}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    solidHeader
                      ? "text-gray-700 hover:text-[var(--color-primary)]"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && openDropdown === item.label && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                  role="menu"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      role="menuitem"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[var(--color-primary)] transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md"
            style={{ backgroundColor: "var(--color-cta)", fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Support Our Work
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-md transition-colors"
          style={{ color: solidHeader ? "var(--color-primary)" : "white" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 top-0 z-40 bg-[var(--color-primary)] flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
            <span
              className="font-bold text-xl text-white"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              CCMRE / CCISA
            </span>
            <button
              className="text-white p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 text-left text-white font-semibold text-lg border-b border-white/10"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      aria-expanded={mobileExpanded === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={cn(
                          "transition-transform duration-200",
                          mobileExpanded === item.label ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-4 mt-1 mb-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-white/80 hover:text-white text-base transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-white font-semibold text-lg border-b border-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="px-6 py-6 border-t border-white/20">
            <Link
              href="/contact"
              className="block text-center py-3 px-6 rounded-lg text-white font-semibold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-cta)" }}
              onClick={() => setMobileOpen(false)}
            >
              Support Our Work
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
