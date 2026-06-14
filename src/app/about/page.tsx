"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const FADE_UP_ANIMATION: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 bg-[#FAF8F4] overflow-hidden">
        {/* Premium Elegant Header */}
        <section className="py-24 bg-[#035346] text-white relative">
          <div
            className="absolute inset-0 bg-[radial-gradient(#DD844B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none"
            aria-hidden="true"
          />
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <span className="text-[#DD844B] font-bold uppercase tracking-[3px] text-xs">
              Our Founders & History
            </span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-serif font-normal leading-[1.15] tracking-wide">
              The Hearts Behind <br />
              <span className="italic text-[#DD844B]">Kompassionate Care</span>
            </h1>
            <p className="mt-6 text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Built on profound personal family experience and professional
              nursing excellence to deliver true home-like sanctuary.
            </p>
          </div>
        </section>

        {/* Noella's Deep Personal Story Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP_ANIMATION}
                className="lg:col-span-5"
              >
                <div className="bg-[#035346]/5 rounded-[2.5rem] p-8 sm:p-12 border border-stone-100 text-center relative">
                  <div className="w-20 h-20 bg-[#DD844B]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#DD844B]">
                    <Heart
                      size={36}
                      fill="currentColor"
                      className="text-[#DD844B]/10"
                    />
                  </div>
                  <h2 className="text-3xl font-serif text-[#035346] font-normal tracking-wide">
                    Noella
                  </h2>
                  <p className="text-xs text-[#DD844B] uppercase tracking-widest font-bold mt-2">
                    Co-Founder & Care Champion
                  </p>

                  <div className="mt-8 border-t border-stone-200/60 pt-8 text-left space-y-4 text-sm text-stone-600">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-[#DD844B] shrink-0 mt-0.5"
                      />
                      <span>27 Years of Personal Family Care Experience</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-[#DD844B] shrink-0 mt-0.5"
                      />
                      <span>
                        Specialized in Dementia & Complex Memory Support
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP_ANIMATION}
                className="lg:col-span-7 space-y-6 flex flex-col items-start"
              >
                <span className="text-[#DD844B] font-bold text-xs tracking-[3px] uppercase">
                  Why I Am Passionate About Caregiving
                </span>
                <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
                  My passion for caregiving comes from a very personal place. My
                  grandmother was diagnosed with Alzheimer’s disease and
                  dementia at the age of 54 and lived with the disease until she
                  passed away at 81. For 27 years, I witnessed not only her
                  struggles but also the emotional and physical challenges my
                  family faced while caring for her. We loved her deeply, but we
                  often did not have the knowledge, tools, or resources needed
                  to fully understand her condition and provide the support she
                  needed.
                </p>
                <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                  During that time, we often felt alone, overwhelmed, and
                  uncertain about what to expect. There was little guidance or
                  support available for families navigating such a difficult
                  journey. Watching my grandmother’s condition progress taught
                  me the importance of compassion, patience, dignity, and
                  family-centered care.
                </p>
                <blockquote className="border-l-4 border-[#DD844B] pl-6 italic text-[#035346] font-serif text-lg py-2 my-4">
                  "This is more than just a service for me—it is personal. It
                  comes from the heart. At Kompassionate Care, we are committed
                  to walking alongside residents and their families every step
                  of the way."
                </blockquote>
                <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                  My goal is to provide a safe, loving, and supportive
                  environment where residents are treated like family and where
                  families can feel confident that their loved ones are
                  receiving thoughtful, respectful, and compassionate care every
                  day.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gisele's Clinical Excellence Story Section */}
        <section className="py-24 lg:py-32 bg-[#FAF8F4] border-t border-stone-200/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP_ANIMATION}
                className="lg:col-span-7 order-2 lg:order-1 space-y-6 flex flex-col items-start"
              >
                <span className="text-[#DD844B] font-bold text-xs tracking-[3px] uppercase">
                  A Lifelong Calling to Healthcare
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#035346] font-normal tracking-wide">
                  Gisele, BSN, RN
                </h2>
                <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
                  The creation of Kompassionate Care Adult Foster Home is the
                  fulfillment of a dream that began in childhood. It is more
                  than a business—it is a reflection of my lifelong passion for
                  caring for others. My passion for healthcare began at a very
                  young age and was inspired by my father, a dedicated medical
                  doctor. Watching him care for his patients and witnessing the
                  joy he felt when they recovered inspired me to pursue a career
                  dedicated to helping others.
                </p>
                <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                  As I grew older, I knew my future belonged in healthcare. I
                  became a nurse because I wanted to make a meaningful
                  difference in people’s lives. Today, I am a Registered Nurse
                  with over five years of experience caring for adults in a
                  variety of healthcare settings. I earned my Bachelor of
                  Science in Nursing from Midwestern State University and have
                  had the privilege of caring for older adults and individuals
                  with developmental disabilities.
                </p>
                <blockquote className="border-l-4 border-[#035346] pl-6 italic text-[#035346] font-serif text-lg py-2 my-4">
                  "I firmly believe that while people may forget many things,
                  they never forget how someone made them feel. This belief
                  guides every interaction, every decision, and every act of
                  care I provide."
                </blockquote>
                <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                  Opening Kompassionate Care has allowed me to combine my
                  professional nursing experience with my lifelong dream of
                  creating a place where individuals can receive compassionate
                  care in a true home-like setting. By building meaningful
                  relationships and understanding each resident’s unique needs,
                  preferences, and life story, I aim to provide care that
                  supports physical, emotional, and social fulfillment.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={FADE_UP_ANIMATION}
                className="lg:col-span-5 order-1 lg:order-2"
              >
                <div className="bg-[#035346]/5 rounded-[2.5rem] p-8 sm:p-12 border border-stone-200/40 text-center relative bg-white shadow-sm">
                  <div className="w-20 h-20 bg-[#035346]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#035346]">
                    <Award size={36} />
                  </div>
                  <h2 className="text-3xl font-serif text-[#035346] font-normal tracking-wide">
                    Gisele
                  </h2>
                  <p className="text-xs text-[#DD844B] uppercase tracking-widest font-bold mt-2">
                    Registered Nurse (BSN, RN)
                  </p>

                  <div className="mt-8 border-t border-stone-200/60 pt-8 text-left space-y-4 text-sm text-stone-600">
                    <div className="flex items-start gap-3">
                      <ShieldCheck
                        size={18}
                        className="text-[#035346] shrink-0 mt-0.5"
                      />
                      <span>Midwestern State University Alumna</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShieldCheck
                        size={18}
                        className="text-[#035346] shrink-0 mt-0.5"
                      />
                      <span>5+ Years Specialized Adult Clinical Care</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Back to Home CTA */}
        <section className="py-16 bg-white border-t border-stone-200/60 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#035346] hover:text-[#023b32] uppercase tracking-wider group transition-colors"
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
