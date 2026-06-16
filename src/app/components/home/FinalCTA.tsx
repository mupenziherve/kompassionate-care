"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-14 lg:py-16 px-6 overflow-hidden bg-[#035346]">
      {/* High-End Ambient Visual Gradients & Textures */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#DD844B]/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-950/60 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Short, Low-Profile Glassmorphic Card Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 text-center shadow-2xl shadow-black/20 overflow-hidden"
        >
          {/* Premium Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
            <Sparkles size={11} className="text-[#DD844B]" />
            <span className="uppercase tracking-[3px] text-stone-200 font-bold text-[9px]">
              An Invitation to Peace of Mind
            </span>
          </div>

          {/* Compact Heading Layout */}
          <h2 className="text-3xl md:text-4xl font-serif text-white font-normal leading-tight tracking-wide max-w-2xl mx-auto">
            Step into a warmer standard of{" "}
            <span className="text-[#DD844B] italic font-light">
              professional care.
            </span>
          </h2>

          {/* Shortened Body Copy */}
          <p className="mt-4 max-w-xl mx-auto text-stone-300/90 text-sm md:text-base leading-relaxed font-light">
            Discover a welcoming environment built completely around your
            family's routine. Schedule your private consultation today.
          </p>

          {/* Action Controls Container */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 items-center max-w-xs mx-auto sm:max-w-none">
            {/* Primary Booking Button -> Contact Form */}
            <a
              href="/contact?type=tour"
              className="group relative flex items-center justify-center gap-2.5 bg-[#DD844B] hover:bg-[#c8743d] text-white px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#DD844B]/10 w-full sm:w-auto transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar
                size={14}
                className="shrink-0 group-hover:rotate-6 transition-transform duration-300"
              />
              <span>Book Guided Tour</span>
              <ArrowRight
                size={12}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0"
              />
            </a>

            {/* Secondary Direct Support Line */}
            <a
              href="tel:+19713711444"
              className="flex items-center justify-center gap-2.5 border border-white/20 bg-white/5 text-white px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider hover:bg-white hover:text-[#035346] hover:border-white transition-all duration-300 backdrop-blur-md w-full sm:w-auto transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone size={14} className="shrink-0" />
              <span>Call (971) 371-1444</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
