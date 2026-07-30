"use client";

import { motion } from "framer-motion";
import {
  Phone,
  ShieldCheck,
  HeartHandshake,
  Calendar as CalendarIcon,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-0 lg:h-[80vh] xl:h-[90vh] overflow-hidden bg-[#035346] flex items-center pt-28 pb-16 lg:py-0">
      {/* Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none w-full h-full">
        <img
          src="/hero.png"
          alt="Kompassionate Care Background"
          className="w-full h-full object-cover object-center lg:object-[85%_center]"
          onError={(e) => {
            e.currentTarget.src = "/hero.png";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#035346]/90 via-[#035346]/75 lg:via-[#035346]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#035346]/20 via-transparent to-[#035346]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pl-6 lg:pl-20 xl:pl-32 pr-6">
        <div className="grid lg:grid-cols-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-9 xl:col-span-8 flex flex-col items-start text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full w-fit mb-5">
              <HeartHandshake size={14} className="text-[#DD844B]" />
              <span className="uppercase tracking-[3px] text-stone-100 font-bold text-[11px]">
                With You Every Step
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] max-w-4xl">
              Because your loved ones deserve more than care
              <span className="block text-[#DD844B] italic mt-3 font-light">
                They deserve a home.
              </span>
            </h1>

            {/* Description */}
            <div className="mt-6 max-w-3xl border-l-2 border-[#DD844B]/40 pl-6 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#DD844B]/10 text-[#DD844B] px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border border-[#DD844B]/20">
                <Sparkles size={12} />
                Nurse-Owned • Nurse-Led • Family-Focused
              </div>

              <p className="text-stone-200 text-base lg:text-lg leading-relaxed">
                At Kompassionate Care Adult Foster Home, we provide professional
                nursing oversight within a warm, family-centered home where
                every resident is treated with dignity, compassion, and respect.
              </p>

              <p className="text-stone-300 text-xs uppercase tracking-wide font-semibold">
                ★ Professional Excellence: Compassionate clinical nursing
                support delivered with unmatched family dignity.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="/contact?type=tour"
                className="bg-[#DD844B] hover:bg-[#c8743d] text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <CalendarIcon size={16} />
                Schedule a Tour
              </a>

              <a
                href="tel:+15034874894"
                className="border border-white/20 bg-white/5 text-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#035346] transition-all duration-300 flex items-center gap-2"
              >
                <Phone size={16} />
                <span>Call Now: 1 (503) 487-4894</span>
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 pt-6 border-t border-white/10 w-full max-w-4xl">
              {[
                "RN Led Care",
                "24-Hour Support",
                "Memory Care",
                "Family Centered",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] p-3 rounded-xl"
                >
                  <ShieldCheck size={15} className="text-[#DD844B] shrink-0" />
                  <span className="text-xs font-medium text-stone-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:block lg:col-span-3 xl:col-span-4" />
        </div>
      </div>
    </section>
  );
}
