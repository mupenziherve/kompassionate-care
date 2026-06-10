"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Structural Grid Background Element */}
      <div className="absolute inset-0 bg-[radial-gradient(#035346_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-center">
          {/* Left Side: Premium Multi-Layered Image Framework */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative w-full aspect-[4/5] sm:h-[520px] lg:h-[580px]"
          >
            {/* Structural Accent Frame Backdrop */}
            <div className="absolute inset-4 -rotate-2 rounded-[2.5rem] bg-[#035346]/5 -z-10" />
            <div className="absolute inset-4 translate-x-4 translate-y-4 rotate-1 rounded-[2.5rem] border border-[#DD844B]/20 -z-10" />

            {/* Main Visual Frame */}
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 relative bg-stone-100">
              <img
                src="/images/about.jpg"
                alt="Kompassionate Care Community Lifestyle"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle Ambient Bottom Shadow Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Elite Trust Overlap Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#035346] text-white p-5 rounded-2xl shadow-xl max-w-[220px] flex flex-col gap-2 border border-white/10 z-20"
            >
              <div className="bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center text-[#DD844B]">
                <ShieldCheck
                  size={20}
                  fill="white"
                  className="text-[#035346]"
                />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#DD844B]">
                Licensed Facility
              </p>
              <p className="text-xs text-white/90 leading-normal font-medium">
                Registered Nurse (RN) Managed Adult Foster Home.
              </p>
            </motion.div>
          </motion.div>clearTimeout

          {/* Right Side: Editorial Content Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs">
              Our Foundations
            </span>

            <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-[#035346] leading-[1.15] font-normal">
              A Home Built on Compassion, Dignity, and Trust
            </h2>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              Kompassionate Care is a pristine, premium Registered Nurse and
              caregiver-operated Adult Foster Home located in Oregon. We
              specialize in tailoring personalized residential support within a
              heavily secured, warm, and family-centered care ecosystem.
            </p>

            <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
              We fundamentally understand that selecting the right environment
              for your loved one is an deeply emotional milestone. Our
              operational core is built specifically to maximize daily
              independence while preserving absolute safety and clinical peace
              of mind.
            </p>

            {/* High-End Two-Column Feature Subgrid */}
            <div className="grid sm:grid-cols-2 gap-6 w-full mt-8 pt-8 border-t border-gray-100">
              <div className="flex gap-3 items-start">
                <div className="text-[#DD844B] mt-0.5 shrink-0">
                  <Heart
                    size={18}
                    fill="currentColor"
                    className="text-[#DD844B]/10"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#035346] tracking-wide">
                    Homelike Comfort
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Preserving the warmth, rhythm, and familiar safety of true
                    home living.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="text-[#DD844B] mt-0.5 shrink-0">
                  <ShieldCheck
                    size={18}
                    fill="currentColor"
                    className="text-[#DD844B]/10"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#035346] tracking-wide">
                    Clinical Peace of Mind
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Continuous RN oversight and meticulously managed medication
                    protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* High-Conversion CTA Trigger */}
            <div className="mt-10 w-full sm:w-auto">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#035346] hover:bg-[#023b32] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md shadow-[#035346]/10 group"
              >
                <span>Learn More About Our Story</span>
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
