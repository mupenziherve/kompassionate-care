"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#035346] to-[#013b32]" />

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[3px] text-xs font-bold text-[#DD844B]">
            Get Started Today
          </p>
          <h2 className="mt-6 text-4xl md:text-6xl font-serif text-white font-bold leading-tight">
            Experience Better Care
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg leading-relaxed">
            Schedule a personal tour and discover compassionate, professional
            care built completely around your family's dynamic routines and
            comfort parameters.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 items-center">
            <a
              href="tel:+19713711444"
              className="flex items-center justify-center gap-2 bg-[#DD844B] text-white px-8 py-4 rounded-full font-medium shadow-lg hover:bg-[#c9733b] transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-0.5"
            >
              <Phone size={18} />
              <span>Call +1 (971) 371-1444</span>
            </a>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-0.5"
            >
              <Calendar size={18} />
              <span>Book a Visit</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
