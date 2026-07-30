import React from "react";
import { ArrowLeft, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getFounderBios } from "@/lib/contentful";

export const revalidate = 0;

export default async function AboutPage() {
  const founders = await getFounderBios();

  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F4] overflow-hidden">
        {/* Premium Elegant Header */}
        <section className="relative h-[520px] sm:h-[580px] w-full overflow-hidden bg-[#035346]">
          <div className="absolute inset-0 z-0">
            <img
              src="/your-custom-hero-image.png"
              alt="Kompassionate Care Founders and History"
              className="w-full h-full object-cover object-center transform scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#035346]/75 to-[#035346]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#035346]/30 via-transparent to-[#035346]/30" />
          </div>

          <div className="max-w-5xl mx-auto px-6 h-full relative z-10 flex flex-col justify-center items-center text-center pt-10">
            <span className="text-[#DD844B] font-bold uppercase tracking-[3px] text-xs sm:text-sm drop-shadow-sm">
              Our Founders & History
            </span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-serif font-normal leading-[1.2] tracking-wide text-white drop-shadow-md">
              The Hearts Behind <br />
              <span className="italic text-[#DD844B] inline-block mt-1">
                Kompassionate Care
              </span>
            </h1>
            <p className="mt-6 text-white/95 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-sm">
              Built on profound personal family experience and professional
              nursing excellence to deliver true home-like sanctuary.
            </p>
          </div>
        </section>

        {/* Dynamic Founders Sections */}
        {founders.map((founder, index) => {
          const isEven = index % 2 === 0;
          const sectionBg = isEven
            ? "bg-white"
            : "bg-[#FAF8F4] border-t border-stone-200/40";
          const quoteBorder = isEven
            ? "border-l-4 border-[#DD844B]"
            : "border-l-4 border-[#035346]";

          const paragraphs = founder.story ? founder.story.split("\n\n") : [];
          const firstHalf = paragraphs.slice(0, 3);
          const secondHalf = paragraphs.slice(3);

          return (
            <section
              key={founder.id}
              className={`py-24 lg:py-32 ${sectionBg} relative z-20 ${isEven ? "-mt-16 rounded-t-[3rem] shadow-[0_-15px_30px_rgba(0,0,0,0.05)]" : ""}`}
            >
              <div className="max-w-3xl mx-auto px-6">
                <div className="space-y-6 flex flex-col items-start">
                  <span className="text-[#DD844B] font-bold text-xs tracking-[3px] uppercase">
                    {founder.name} • {founder.role}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#035346] font-normal tracking-wide">
                    {founder.title}
                  </h2>

                  {/* First half of paragraphs */}
                  {firstHalf.map((paragraph, pIdx) => (
                    <p
                      key={`top-${pIdx}`}
                      className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* Blockquote in the middle */}
                  {founder.quote && (
                    <blockquote
                      className={`${quoteBorder} pl-6 italic text-[#035346] font-serif text-lg py-2 my-2`}
                    >
                      &quot;{founder.quote}&quot;
                    </blockquote>
                  )}

                  {/* Remaining paragraphs */}
                  {secondHalf.map((paragraph, pIdx) => (
                    <p
                      key={`bot-${pIdx}`}
                      className="text-stone-500 text-sm sm:text-base leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Action-Oriented CTA Buttons Section */}
        <section className="py-20 bg-white border-t border-stone-200/60">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#035346] mb-4">
              Experience the Kompassionate Difference
            </h3>
            <p className="text-stone-500 text-sm sm:text-base max-w-xl mx-auto mb-10 font-light">
              We welcome you to visit our sanctuary, meet our dedicated team,
              and see how we create a beautiful, supportive home environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#035346] hover:bg-[#023b32] text-white font-bold px-8 py-4 rounded-xl shadow-md transition-colors text-sm uppercase tracking-wider"
              >
                <MessageSquare size={18} />
                <span>Send Us a Message</span>
              </Link>
              <a
                href="tel:+19713711444"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-[#035346] font-bold px-8 py-4 rounded-xl border-2 border-[#035346] transition-colors text-sm uppercase tracking-wider"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </section>

        {/* Back to Home Link */}
        <section className="pb-16 bg-white text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-stone-400 hover:text-[#035346] uppercase tracking-wider group transition-colors"
          >
            <ArrowLeft
              size={16}
              className="transform group-hover:-translate-x-1 transition-transform"
            />
            <span>Return to Home Page</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
