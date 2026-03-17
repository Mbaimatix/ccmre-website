import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import AboutPreview from "@/components/sections/AboutPreview";
import ProgrammeCards from "@/components/sections/ProgrammeCards";
import FeaturedQuote from "@/components/sections/FeaturedQuote";
import NewsEvents from "@/components/sections/NewsEvents";
import AwardsSection from "@/components/sections/AwardsSection";
import PartnersMarquee from "@/components/sections/PartnersMarquee";
import CTABanner from "@/components/sections/CTABanner";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

export const metadata: Metadata = {
  title: "CCMRE / CCISA — Building Bridges of Peace Across Faiths and Communities",
  description:
    "The Centre for Christian-Muslim Relations in Eastleigh (CCMRE/CCISA) — a St. Paul's University initiative promoting interfaith dialogue, 110+ community sessions, and peaceful coexistence across Africa since 2010.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Centre for Christian-Muslim Relations in Eastleigh (CCMRE)",
  alternateName: "Centre for Christianity and Islamic Studies in Africa (CCISA)",
  description:
    "A St. Paul's University initiative promoting interfaith dialogue, peaceful coexistence, and education across Africa since 2010.",
  url: "https://ccmre.spu.ac.ke",
  email: "skiilu@spu.ac.ke",
  telephone: "+254720714137",
  address: {
    "@type": "PostalAddress",
    streetAddress: "St. Paul's University",
    addressLocality: "Limuru",
    addressCountry: "KE",
  },
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: "St. Paul's University",
    url: "https://www.spu.ac.ke",
  },
  foundingDate: "2010",
  areaServed: "Africa",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <StatsBar />
      <AboutPreview />
      <ProgrammeCards />
      <FeaturedQuote />
      <NewsEvents />
      <AwardsSection />
      <PartnersMarquee />
      <CTABanner />
      <NewsletterSignup />
    </>
  );
}
