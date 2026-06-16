"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Star,
  ShieldCheck,
  HeartHandshake,
  Calendar as CalendarIcon,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen overflow-hidden bg-[#035346] flex items-center justify-center pt-28 pb-16 lg:py-20 xl:py-0">
        {/* Modern Premium Background Accents */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#DD844B]/10 blur-[120px]" />
          <div className="absolute bottom-[-20%] left-[-15%] w-[700px] h-[700px] rounded-full bg-teal-950/40 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center w-full">
            {/* Left Column: Typography & Action Core */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-col justify-center lg:col-span-7 z-20"
            >
              {/* Premium Pill Tagline */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full w-fit mb-6 shadow-sm">
                <HeartHandshake size={14} className="text-[#DD844B]" />
                <span className="uppercase tracking-[3px] text-stone-100 font-bold text-[11px]">
                  With you, every step of the way
                </span>
              </div>

              {/* Master Heading Layout */}
              <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.12] tracking-wide">
                Because your loved ones deserve more than care —
                <span className="block text-[#DD844B] italic mt-3 font-serif font-light bg-gradient-to-r from-[#DD844B] to-[#f3a877] bg-clip-text text-transparent">
                  They deserve a home.
                </span>
              </h1>

              {/* Credential Block & Descriptive Copy */}
              <div className="mt-8 max-w-2xl border-l-2 border-[#DD844B]/40 pl-6 space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#DD844B]/10 text-[#DD844B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border border-[#DD844B]/20">
                  <Sparkles size={12} />
                  Nurse-Owned • Nurse-Led • Family-Focused
                </div>
                <p className="text-stone-200/90 text-base sm:text-lg leading-relaxed font-light">
                  At Kompassionate Care Adult Foster Home, we provide
                  professional nursing oversight within a warm, family-centered
                  home where every resident is treated with dignity, compassion,
                  and respect.
                </p>
              </div>

              {/* Enhanced Action Buttons Container */}
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <a
                  href="/contact?type=tour"
                  className="bg-[#DD844B] hover:bg-[#c8743d] text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 shadow-xl shadow-[#DD844B]/20 flex items-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <CalendarIcon size={16} />
                  <span>Schedule a Tour</span>
                </a>

                <a
                  href="tel:+19713711444"
                  className="border border-white/20 bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-sm hover:bg-white hover:text-[#035346] hover:border-white transition-all duration-300 backdrop-blur-md flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Premium Trust Badges Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 pt-8 border-t border-white/10 text-white/90">
                <div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] p-3 rounded-xl backdrop-blur-sm">
                  <ShieldCheck size={16} className="text-[#DD844B] shrink-0" />
                  <span className="text-xs font-medium tracking-wide text-stone-200">
                    RN Led Care
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] p-3 rounded-xl backdrop-blur-sm">
                  <ShieldCheck size={16} className="text-[#DD844B] shrink-0" />
                  <span className="text-xs font-medium tracking-wide text-stone-200">
                    24-Hour Support
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] p-3 rounded-xl backdrop-blur-sm">
                  <ShieldCheck size={16} className="text-[#DD844B] shrink-0" />
                  <span className="text-xs font-medium tracking-wide text-stone-200">
                    Memory Care
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] p-3 rounded-xl backdrop-blur-sm">
                  <HeartHandshake
                    size={16}
                    className="text-[#DD844B] shrink-0"
                  />
                  <span className="text-xs font-medium tracking-wide text-stone-200">
                    Family Centered
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Dynamic Image Frame Container */}
            <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/5] lg:h-[640px] mx-auto flex items-center justify-center mt-16 lg:mt-0 lg:col-span-5 z-10">
              {/* Backing structural geometric accent box */}
              <div className="absolute inset-4 translate-x-3 translate-y-3 rounded-[3rem] border border-[#DD844B]/30 pointer-events-none z-0" />

              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="w-full h-full rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl relative bg-teal-950/40 z-10"
              >
                <img
                  src="/hero.png"
                  alt="Kompassionate Caregiver and Resident"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = "/images/hero.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* FIXED: Floating Review Card positioned at the far absolute top-right corner to clear faces */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -top-8 -right-6 md:-right-10 lg:-right-14 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl w-64 border border-stone-200/60 z-30 transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex gap-0.5 text-[#DD844B] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      fill="currentColor"
                      size={13}
                      className="shrink-0"
                    />
                  ))}
                </div>
                <h3 className="font-bold text-[#035346] text-xs uppercase tracking-wider">
                  Professional Excellence
                </h3>
                <p className="text-stone-600 text-[11px] mt-1.5 leading-relaxed font-normal">
                  Compassionate clinical nursing support delivered with
                  unmatched family dignity.
                </p>
              </motion.div>

              {/* Floating Contact Card positioned safely over the bottom left radius */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 left-6 lg:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl w-64 border border-stone-200/60 z-30"
              >
                <div className="flex items-center gap-3.5">
                  <div className="bg-[#035346] text-white p-3 rounded-xl shrink-0 shadow-md">
                    <Phone size={16} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-[#DD844B] text-[10px] font-bold uppercase tracking-widest">
                      Direct Nurse Line
                    </p>
                    <h3 className="font-serif font-bold text-[#035346] text-base mt-0.5 tracking-wide">
                      (971) 371-1444
                    </h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
