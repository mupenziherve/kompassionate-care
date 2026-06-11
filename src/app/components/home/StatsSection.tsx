"use client";

import React from "react";
import { Activity, Shield, UserCheck, Calendar } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#035346] rounded-[2.5rem] shadow-xl p-10 lg:p-16 relative overflow-hidden">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            <div className="flex flex-col items-center text-center relative px-4 group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-white/[0.07] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                <Activity size={110} strokeWidth={1} />
              </div>
              <p className="text-4xl lg:text-5xl font-serif text-[#DD844B] font-normal tracking-wide relative z-10">
                24/7
              </p>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mt-4 relative z-10">
                Awake Supervision
              </h4>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed font-normal max-w-[200px] relative z-10">
                Continuous around-the-clock vigilant care, monitoring, and
                proactive safety.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative px-4 group sm:border-l sm:border-white/10 lg:border-l-2">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-white/[0.07] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                <Shield size={110} strokeWidth={1} />
              </div>
              <p className="text-4xl lg:text-5xl font-serif text-[#DD844B] font-normal tracking-wide relative z-10">
                100%
              </p>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mt-4 relative z-10">
                Individualized Care
              </h4>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed font-normal max-w-[200px] relative z-10">
                Meticulously mapped ADL and medication plans customized per
                resident.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative px-4 group lg:border-l-2 lg:border-white/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-white/[0.07] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                <UserCheck size={110} strokeWidth={1} />
              </div>
              <p className="text-4xl lg:text-5xl font-serif text-[#DD844B] font-normal tracking-wide relative z-10">
                RN
              </p>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mt-4 relative z-10">
                Clinical Direction
              </h4>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed font-normal max-w-[200px] relative z-10">
                Direct Registered Nurse management ensuring rigorous
                professional standards.
              </p>
            </div>

            <div className="flex flex-col items-center text-center relative px-4 group sm:border-l sm:border-white/10 lg:border-l-2">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-white/[0.07] pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                <Calendar size={110} strokeWidth={1} />
              </div>
              <p className="text-4xl lg:text-5xl font-serif text-[#DD844B] font-normal tracking-wide relative z-10">
                365
              </p>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mt-4 relative z-10">
                Annual Continuity
              </h4>
              <p className="text-xs text-stone-300 mt-2 leading-relaxed font-normal max-w-[200px] relative z-10">
                Uninterrupted operational support for permanent and respite
                placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
