import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/constants";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = NEWS_ITEMS.find((n) => n.slug === slug);
  if (!item) return { title: "Article Not Found" };
  return {
    title: item.title,
    description: item.excerpt,
  };
}

export async function generateStaticParams() {
  return NEWS_ITEMS.map((item) => ({ slug: item.slug }));
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = NEWS_ITEMS.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <div style={{ backgroundColor: "var(--color-warm-bg)" }}>
      <div className="pt-28 pb-8" style={{ backgroundColor: "var(--color-primary)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            <ArrowLeft size={15} /> Back to News
          </Link>
          <div className="flex gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "var(--color-cta)", fontFamily: "'Inter', system-ui, sans-serif" }}>{item.category}</span>
          </div>
          <h1 className="font-bold text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>{item.title}</h1>
          <div className="flex items-center gap-2 mt-4 text-white/60 text-sm" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
            <Calendar size={13} />
            <time dateTime={item.date}>{item.date}</time>
          </div>
        </div>
        <div className="overflow-hidden leading-none mt-8" aria-hidden="true">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%" }}>
            <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="var(--color-warm-bg)" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video mb-10">
          <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 896px) 100vw, 896px" priority />
        </div>
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
          {item.body && item.body.length > 0 ? (
            <div className="space-y-5">
              {item.body.map((paragraph, i) => (
                <p key={i} className="leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.05rem" }}>
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.05rem" }}>
                {item.excerpt}
              </p>
              <p className="mt-6 text-sm italic" style={{ color: "#9CA3AF", fontFamily: "'Inter', system-ui, sans-serif" }}>
                Full article content will be updated as new details become available. Contact us at{" "}
                <a href="mailto:skiilu@spu.ac.ke" className="underline hover:no-underline" style={{ color: "var(--color-primary)" }}>skiilu@spu.ac.ke</a>{" "}
                for media enquiries.
              </p>
            </>
          )}
        </div>

        <div className="mt-10 flex justify-between items-center">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all" style={{ color: "var(--color-cta)", fontFamily: "'Inter', system-ui, sans-serif" }}>
            <ArrowLeft size={14} /> All News
          </Link>
        </div>
      </div>
    </div>
  );
}
