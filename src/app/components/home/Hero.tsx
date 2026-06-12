"use client";

import { motion } from "framer-motion";
import { Phone, Star, ShieldCheck, HeartHandshake } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#035346] flex items-center justify-center">
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="uppercase tracking-[4px] text-[#DD844B] font-semibold mb-6 text-sm">
              With You Every Step
            </p>

            <h1 className="font-serif text-white text-5xl sm:text-6xl xl:text-7xl leading-[1.15] font-normal">
              A Place of Safety,
              <span className="block text-[#DD844B] italic mt-2 font-serif">
                A Feeling of Home.
              </span>
            </h1>

            <p className="text-white/80 text-lg mt-6 max-w-xl leading-relaxed">
              We provide warm, dignified, personalized care for your loved ones.
              You don't have to navigate this journey alone.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-[#DD844B] hover:bg-[#c8743d] text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-md">
                Schedule a Tour
              </button>

              <a
                href="tel:+19713711444"
                className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#035346] hover:border-white transition-all duration-200 backdrop-blur-sm"
              >
                Call Now
              </a>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-12 pt-8 border-t border-white/10 text-white/90 max-w-md">
              <div className="flex items-center gap-2.5 text-sm">
                <ShieldCheck size={18} className="text-[#DD844B]" />
                <span>RN Operated</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm">
                <ShieldCheck size={18} className="text-[#DD844B]" />
                <span>24/7 Care</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm">
                <ShieldCheck size={18} className="text-[#DD844B]" />
                <span>Licensed Home</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm">
                <HeartHandshake size={18} className="text-[#DD844B]" />
                <span>Family Centered</span>
              </div>
            </div>
          </motion.div>

          <div className="relative w-full max-w-lg lg:max-w-none aspect-[4/4] sm:aspect-[4/5] lg:h-[580px] xl:h-[620px] mx-auto flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl relative bg-teal-950/20"
            >
              <img
                src="/hero.png"
                alt="Caregiver supporting an elderly woman"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "/images/hero.png";
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute top-12 -left-6 xl:-left-10 bg-white rounded-2xl p-5 shadow-xl w-64 border border-gray-50 z-20"
            >
              <div className="flex gap-0.5 text-[#DD844B] mb-2">
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
                <Star fill="currentColor" size={14} />
              </div>

              <h3 className="font-bold text-[#035346] text-sm tracking-wide">
                Trusted Care
              </h3>

              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                Compassionate support delivered with dignity and respect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-6 -right-4 xl:-right-6 bg-white rounded-2xl p-4 shadow-xl w-64 border border-gray-50 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#DD844B] text-white p-2.5 rounded-full shrink-0">
                  <Phone size={16} fill="currentColor" />
                </div>

                <div>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                    Call Anytime
                  </p>
                  <h3 className="font-bold text-[#035346] text-sm mt-0.5">
                    (971) 371-1444
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
