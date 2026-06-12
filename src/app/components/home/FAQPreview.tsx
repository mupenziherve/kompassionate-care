"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";

interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

const FAQS_DATA: readonly FAQItem[] = [
  {
    question: "What makes Kompassionate Care different?",
    answer:
      "We combine professional nursing oversight with a warm family-centered home environment where residents receive personalized attention, dignity, and deep structural respect tailored to their lifestyle history.",
  },
  {
    question: "Is care available 24 hours a day?",
    answer:
      "Yes, absolutely. Our residents receive continuous around-the-clock support, supervision, and active clinical monitoring based strictly on their customized personal care plans.",
  },
  {
    question: "Do you support memory-related conditions?",
    answer:
      "Yes, memory care is one of our primary core disciplines. We provide compassionate, safe memory care support specifically optimized for individuals living with Alzheimer's and dementia.",
  },
  {
    question: "Can families visit before choosing care?",
    answer:
      "We warmly encourage it. Choosing care is a significant emotional transition, which is why we offer comprehensive personal tours and deep-dive family consultations to help you feel completely confident.",
  },
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="py-24 lg:py-32 bg-[#fdfdfb] relative overflow-hidden"
      style={{ contentVisibility: "auto", containIntrinsicSize: "0 800px" }}
    >
      {/* Decorative Brand Underlay */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#035346]/[0.01] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#DD844B]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Sticky Context Headline Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start">
            <span className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs bg-[#DD844B]/[0.06] px-3 py-1.5 rounded-full">
              Common Questions
            </span>

            <h2 className="mt-5 text-4xl sm:text-5xl font-serif text-[#035346] leading-[1.15] font-normal tracking-wide">
              Families Want to Know
            </h2>

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed font-normal max-w-md">
              Everything you need to navigate this important milestone and feel
              completely confident choosing the right care ecosystem for your
              loved one.
            </p>

            {/* Premium Dynamic Help Desk Badge */}
            <div className="mt-10 p-6 bg-[#035346]/[0.02] border border-[#035346]/10 rounded-3xl flex items-start gap-4 max-w-sm">
              <div className="bg-[#035346] text-white p-3 rounded-2xl shrink-0 shadow-md shadow-[#035346]/10">
                <HelpCircle size={20} className="stroke-[2]" />
              </div>
              <div>
                <h4 className="font-bold text-[#035346] text-sm tracking-wide">
                  Have a specific question?
                </h4>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  Our care coordination experts are here to walk you through
                  every detail.
                </p>
                <a
                  href="tel:+19713711444"
                  className="inline-flex items-center gap-1.5 text-[#DD844B] font-bold text-xs mt-3 group transition-opacity hover:opacity-90"
                >
                  <PhoneCall size={12} />
                  <span>Speak with a Coordinator</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium High-Performance Accordion Interface */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {FAQS_DATA.map((faq, index) => {
              const isOpen = openIndex === index;
              const displayIndex = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#035346]/20 shadow-[0_16px_32px_-12px_rgba(3,83,70,0.06)]"
                      : "bg-[#f9f9f6]/60 border-stone-200/50 hover:bg-white hover:border-stone-300 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#035346]/20 rounded-[2rem]"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6 pr-4">
                      {/* Premium Dynamic Index Tracking Counter */}
                      <span
                        className={`font-mono text-sm font-bold tracking-wider transition-colors duration-300 ${
                          isOpen
                            ? "text-[#DD844B]"
                            : "text-stone-400 group-hover:text-[#035346]/60"
                        }`}
                      >
                        {displayIndex}
                      </span>
                      <span
                        className={`text-base sm:text-lg font-serif tracking-wide transition-colors duration-300 ${
                          isOpen
                            ? "text-[#035346] font-medium"
                            : "text-gray-800 group-hover:text-[#035346]"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Highly Polished Custom Micro-Chevron */}
                    <div
                      className={`p-2 rounded-full transition-all duration-300 shrink-0 ${
                        isOpen
                          ? "bg-[#035346] text-white rotate-180 shadow-md shadow-[#035346]/10"
                          : "bg-white text-stone-400 border border-stone-200/60 group-hover:text-[#035346] group-hover:border-[#035346]/20"
                      }`}
                    >
                      <ChevronDown size={16} className="stroke-[2.5]" />
                    </div>
                  </button>

                  {/* High-Performance Smooth Height Variable Pipeline */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.25, delay: 0.05 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.15 },
                          },
                        }}
                      >
                        <div className="pl-14 sm:pl-20 pr-6 sm:pr-8 pb-6 sm:pb-8 text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                          <p className="pt-2 border-t border-stone-100">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Global Structural Redirect Controls */}
        <div className="text-center mt-16 lg:mt-20 border-t border-stone-200/50 pt-12">
          <motion.a
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/faq"
            className="inline-flex items-center gap-2 bg-[#035346] hover:bg-[#024437] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-md shadow-[#035346]/10 transition-colors duration-200"
          >
            <span>View All Knowledge Base Questions</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
