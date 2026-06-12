"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What makes Kompassionate Care different?",
    answer:
      "We combine professional nursing oversight with a warm family-centered home environment where residents receive personalized attention, dignity, and respect.",
  },
  {
    question: "Is care available 24 hours a day?",
    answer:
      "Yes. Our residents receive continuous support, supervision, and assistance based on their individual care plans.",
  },
  {
    question: "Do you support memory-related conditions?",
    answer:
      "Yes. We provide compassionate memory care support for individuals living with Alzheimer's and other related conditions.",
  },
  {
    question: "Can families visit before choosing care?",
    answer:
      "Absolutely. We encourage families to schedule a personal tour and consultation to experience our home environment.",
  },
];

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#DD844B] font-semibold tracking-widest text-sm"
          >
            COMMON QUESTIONS
          </motion.p>

          <h2 className="mt-4 text-4xl md:text-5xl font-heading text-[#035346]">
            Families want to know
          </h2>

          <p className="mt-5 text-gray-600 max-w-xl mx-auto">
            Everything you need to feel confident choosing the right care.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    className="px-6 pb-6 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/faq"
            className="inline-flex bg-[#035346] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#024437] transition"
          >
            View All Questions
          </a>
        </div>
      </div>
    </section>
  );
}
