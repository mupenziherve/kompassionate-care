"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, MessageSquare, Phone } from "lucide-react";
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

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F4] overflow-hidden">
        {/* Premium Elegant Header with Ambient Fade Image Background */}
        <section className="relative h-[520px] sm:h-[580px] w-full overflow-hidden bg-[#035346]">
          <div className="absolute inset-0 z-0">
            {/* 
              PLACE YOUR IMAGE HERE 
              Dropped inside your root /public folder as discussed.
            */}
            <img
              src="/your-custom-hero-image.png"
              alt="Kompassionate Care Founders and History"
              className="w-full h-full object-cover object-center transform scale-102"
            />
            {/* 
              Ambient Gradient System matching gd.jpg: 
              Brings out the rich brand green while providing a natural dark vignette behind the text for flawless readability.
            */}
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

        {/* Noella's Deep Personal Story Section - Features the prominent curved cut mask from gd.jpg */}
        <section className="py-24 lg:py-32 bg-white relative z-20 -mt-16 rounded-t-[3rem] shadow-[0_-15px_30px_rgba(0,0,0,0.05)]">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP_ANIMATION}
              className="space-y-6 flex flex-col items-start"
            >
              <span className="text-[#DD844B] font-bold text-xs tracking-[3px] uppercase">
                Noella • Co-Founder & Care Champion
              </span>
              <h2 className="text-3xl font-serif text-[#035346] font-normal tracking-wide">
                Why I Am Passionate About Caregiving
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
                My passion for caregiving comes from a very personal place. My
                grandmother was diagnosed with Alzheimer’s disease and dementia
                at the age of 54 and lived with the disease until she passed
                away at 81. For 27 years, I witnessed not only her struggles but
                also the emotional and physical challenges my family faced while
                caring for her. We loved her deeply, but we often did not have
                the knowledge, tools, or resources needed to fully understand
                her condition and provide the support she needed.
              </p>
              <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                During those 27 years of personal family care experience, we
                often felt alone, overwhelmed, and uncertain about what to
                expect. There was little guidance or support available for
                families navigating such a difficult journey. Watching my
                grandmother’s condition progress taught me the importance of
                compassion, patience, dignity, and family-centered care, which
                drove me to become heavily specialized in dementia and complex
                memory support.
              </p>
              <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                That experience inspired me to dedicate my life to helping
                others. I want families to understand what their loved ones are
                experiencing, learn how to navigate the challenges that come
                with dementia and other age-related conditions, and most
                importantly, know that they are not alone.
              </p>
              <blockquote className="border-l-4 border-[#DD844B] pl-6 italic text-[#035346] font-serif text-lg py-2 my-2">
                "This is more than just a service for me—it is personal. It
                comes from the heart. At Kompassionate Care, we are committed to
                walking alongside residents and their families every step of the
                way."
              </blockquote>
              <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                My goal is to provide a safe, loving, and supportive environment
                where residents are treated like family and where families can
                feel confident that their loved ones are receiving thoughtful,
                respectful, and compassionate care every day.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gisele's Clinical Excellence Story Section */}
        <section className="py-24 lg:py-32 bg-[#FAF8F4] border-t border-stone-200/40">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FADE_UP_ANIMATION}
              className="space-y-6 flex flex-col items-start"
            >
              <span className="text-[#DD844B] font-bold text-xs tracking-[3px] uppercase">
                Gisele, BSN, RN • Registered Nurse
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#035346] font-normal tracking-wide">
                A Lifelong Calling to Healthcare
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
                The creation of Kompassionate Care Adult Foster Home is the
                fulfillment of a dream that began in childhood. It is more than
                a business—it is a reflection of my lifelong passion for caring
                for others. Through Kompassionate Care, I am committed to
                providing a warm, safe, and family-centered environment where
                every resident is treated with respect, dignity, and genuine
                compassion. My goal is to ensure that residents not only receive
                exceptional care but also feel valued, heard, and truly at home.
              </p>
              <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                My passion for healthcare began at a very young age and was
                inspired by my father, a dedicated medical doctor. Like many
                children, I enjoyed pretending to be a doctor, but for me, it
                was more than just a childhood game—it was the beginning of a
                calling. Watching my father care for his patients and witnessing
                the joy he felt when they recovered inspired me to pursue a
                career dedicated to helping others. His compassion, dedication,
                and commitment to service shaped the person I am today.
              </p>
              <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                As I grew older, I knew my future belonged in healthcare. I
                became a nurse because I wanted to make a meaningful difference
                in people’s lives. There is nothing more rewarding than seeing
                someone who arrives at their most vulnerable gradually regain
                strength, comfort, and hope.
              </p>
              <blockquote className="border-l-4 border-[#035346] pl-6 italic text-[#035346] font-serif text-lg py-2 my-2">
                "I firmly believe that while people may forget many things, they
                never forget how someone made them feel. This belief guides
                every interaction, every decision, and every act of care I
                provide."
              </blockquote>
              <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                Today, I am a Registered Nurse with over five years of
                experience caring for adults in a variety of healthcare
                settings. I earned my Bachelor of Science in Nursing from
                Midwestern State University and have had the privilege of caring
                for older adults and individuals with developmental
                disabilities. These experiences have strengthened my commitment
                to providing compassionate, person-centered care that promotes
                dignity, independence, comfort, and quality of life.
              </p>
              <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
                Opening Kompassionate Care has allowed me to combine my
                professional nursing experience with my lifelong dream of
                creating a place where individuals can receive compassionate
                care in a true home-like setting. My approach to care is
                centered on treating every resident as a member of our extended
                family. I understand that moving into an adult foster home is a
                significant life transition, and I strive to create an
                environment where residents feel safe, respected, and
                comfortable. By building meaningful relationships and
                understanding each resident’s unique needs, preferences, and
                life story, I aim to provide care that supports not only
                physical well-being but also emotional, social, and spiritual
                fulfillment.
              </p>
            </motion.div>
          </div>
        </section>

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
