"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, Navigation, Clock, ParkingCircle, Eye } from "lucide-react";

const SECTION_FADE_PIPELINE: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function MapSection() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#f8f8f6] relative overflow-hidden"
      style={
        {
          contentVisibility: "auto",
          containIntrinsicSize: "0 800px",
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <motion.div
            variants={SECTION_FADE_PIPELINE}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs">
                Our Location
              </span>

              <h2 className="mt-4 text-4xl sm:text-5xl font-serif text-[#035346] leading-[1.15] font-normal tracking-wide">
                Visit Our Warm & Welcoming Home
              </h2>

              <p className="mt-6 text-gray-600 text-base leading-relaxed font-normal">
                Nestled within a safe, beautiful, and peaceful neighborhood in
                Hillsboro, Oregon, our facility balances tranquil suburban
                living with immediate medical access.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-[#035346]/10 text-[#035346] p-3 rounded-2xl shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#035346] tracking-wide">
                      Facility Address
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed font-normal">
                      5110 SE Drake Rd
                      <br />
                      Hillsboro OR, 97123
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#035346]/10 text-[#035346] p-3 rounded-2xl shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#035346] tracking-wide">
                      Visiting Hours
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed font-normal">
                      Daily: 10:00 AM – 7:00 PM
                      <br />
                      <span className="text-xs text-gray-500 italic">
                        Custom family arrangements accommodated
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-[#035346]/10 text-[#035346] p-3 rounded-2xl shrink-0">
                    <ParkingCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#035346] tracking-wide">
                      Visitor Access
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed font-normal">
                      Complimentary on-site dedicated visitor parking.
                      Comprehensive step-free wheelchair accessibility
                      throughout.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row gap-4 w-full">
              <a
                href="https://maps.google.com/?q=5110+SE+Drake+Rd,+Hillsboro,+OR+97123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#035346] hover:bg-[#023b32] text-white px-7 py-4 rounded-full text-sm font-semibold transition-all duration-300 shadow-md shadow-[#035346]/10 group"
              >
                <span>Open in Google Maps</span>
                <Navigation
                  size={15}
                  className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

              <a
                href="/tour"
                className="inline-flex items-center justify-center gap-2.5 border border-[#035346]/30 hover:border-[#035346] hover:bg-[#035346]/5 text-[#035346] px-7 py-4 rounded-full text-sm font-semibold transition-all duration-300"
              >
                <span>Schedule Private Tour</span>
                <Eye size={15} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative min-h-[450px] lg:min-h-full rounded-[2.5rem] overflow-hidden border border-stone-200 bg-stone-100 shadow-xl [will-change:transform]"
          >
            <iframe
              src="https://maps.google.com/maps?q=5110%20SE%20Drake%20Rd,%20Hillsboro,%20OR%2097123&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full border-0 filter grayscale-[10%] contrast-[105%] brightness-[98%]"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kompassionate Care Location Map Map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
