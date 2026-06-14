"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Loader2,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const CONTAINER_STAGGER_PIPELINE: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ELEMENT_FADE_PIPELINE: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const isFormValid = useMemo(() => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.message.trim() !== ""
    );
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setSubmissionStatus("loading");

    try {
      const response = await fetch(
        "https://formspree.io/f/YOUR_FORMSPREE_ID_HERE",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      setSubmissionStatus("error");
    }
  };

  return (
    <section
      className="py-24 lg:py-32 bg-[#035346] text-white relative overflow-hidden"
      style={
        {
          contentVisibility: "auto",
          containIntrinsicSize: "0 850px",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            variants={CONTAINER_STAGGER_PIPELINE}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <motion.span
              variants={ELEMENT_FADE_PIPELINE}
              className="text-[#DD844B] uppercase font-bold tracking-[3px] text-xs"
            >
              Contact Us
            </motion.span>

            <motion.h2
              variants={ELEMENT_FADE_PIPELINE}
              className="mt-4 text-4xl sm:text-5xl font-serif text-white leading-[1.15] font-normal tracking-wide"
            >
              Schedule a Private Tour Today
            </motion.h2>

            <motion.p
              variants={ELEMENT_FADE_PIPELINE}
              className="mt-6 text-stone-200 text-base leading-relaxed font-normal"
            >
              We would be deeply honored to answer your structural care
              inquiries and help your family discover the pristine environment
              tailored to your loved one.
            </motion.p>

            <motion.div
              variants={ELEMENT_FADE_PIPELINE}
              className="mt-10 space-y-4"
            >
              <a
                href="https://maps.google.com/?q=5510+SE+Drake+Rd,+Hillsboro,+OR+97124"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="bg-[#DD844B] text-white p-3 rounded-xl shrink-0 transition-transform group-hover:scale-105">
                  <MapPin size={18} />
                </div>
                <div className="text-sm">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DD844B]">
                    Location
                  </p>
                  <p className="text-stone-100 mt-0.5 font-medium">
                    5510 SE Drake Rd, Hillsboro, OR 97124
                  </p>
                </div>
              </a>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
                <a
                  href="tel:+19713711444"
                  className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="bg-[#DD844B] text-white p-3 rounded-xl shrink-0 transition-transform group-hover:scale-105">
                    <Phone size={18} />
                  </div>
                  <div className="text-sm">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DD844B]">
                      Primary Line
                    </p>
                    <p className="text-stone-100 mt-0.5 font-medium whitespace-nowrap">
                      +1 (971) 371-1444
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+15034438325"
                  className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="bg-[#DD844B] text-white p-3 rounded-xl shrink-0 transition-transform group-hover:scale-105">
                    <Phone size={18} />
                  </div>
                  <div className="text-sm">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#DD844B]">
                      Secondary Line
                    </p>
                    <p className="text-stone-100 mt-0.5 font-medium whitespace-nowrap">
                      +1 (503) 443-8325
                    </p>
                  </div>
                </a>
              </div>

              <a
                href="mailto:kompassionatecarellc@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="bg-[#DD844B] text-white p-3 rounded-xl shrink-0 transition-transform group-hover:scale-105">
                  <Mail size={18} />
                </div>
                <div className="text-sm overflow-hidden text-ellipsis">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#DD844B]">
                    Email Communications
                  </p>
                  <p className="text-stone-100 mt-0.5 font-medium block overflow-hidden text-ellipsis break-all">
                    kompassionatecarellc@gmail.com
                  </p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 lg:p-12 text-gray-900 shadow-2xl relative overflow-hidden border border-stone-200/40"
          >
            <AnimatePresence mode="wait">
              {submissionStatus === "idle" || submissionStatus === "loading" ? (
                <motion.div
                  key="contact-form-layout"
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-serif text-[#035346] tracking-wide">
                    Request Secure Information
                  </h3>
                  <p className="text-gray-500 text-xs mt-1 font-normal">
                    Fill out the parameters below to initialize communications
                    with our team.
                  </p>

                  <form
                    onSubmit={handleFormSubmission}
                    className="mt-8 space-y-5"
                  >
                    <div className="relative">
                      <label htmlFor="form-input-name" className="sr-only">
                        Full Name
                      </label>
                      <input
                        id="form-input-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={submissionStatus === "loading"}
                        placeholder="Full Name"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#035346] focus:ring-2 focus:ring-[#035346]/10 transition-all duration-200 disabled:opacity-60"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="relative">
                        <label htmlFor="form-input-email" className="sr-only">
                          Email Address
                        </label>
                        <input
                          id="form-input-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={submissionStatus === "loading"}
                          placeholder="Email Address"
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#035346] focus:ring-2 focus:ring-[#035346]/10 transition-all duration-200 disabled:opacity-60"
                        />
                      </div>

                      <div className="relative">
                        <label htmlFor="form-input-phone" className="sr-only">
                          Phone Number
                        </label>
                        <input
                          id="form-input-phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          disabled={submissionStatus === "loading"}
                          placeholder="Phone Number"
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#035346] focus:ring-2 focus:ring-[#035346]/10 transition-all duration-200 disabled:opacity-60"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label htmlFor="form-input-message" className="sr-only">
                        Message Description
                      </label>
                      <textarea
                        id="form-input-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={submissionStatus === "loading"}
                        placeholder="Tell us how we can best support your family allocation needs..."
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#035346] focus:ring-2 focus:ring-[#035346]/10 transition-all duration-200 resize-none disabled:opacity-60"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!isFormValid || submissionStatus === "loading"}
                      className="w-full bg-[#035346] hover:bg-[#023b32] disabled:bg-stone-100 text-white disabled:text-stone-400 py-4 px-6 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md shadow-[#035346]/5 flex items-center justify-center gap-2 group cursor-pointer disabled:cursor-not-allowed"
                    >
                      {submissionStatus === "loading" ? (
                        <Loader2
                          size={16}
                          className="animate-spin text-stone-400"
                        />
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <ArrowRight
                            size={16}
                            className="transform group-hover:translate-x-0.5 transition-transform"
                          />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : submissionStatus === "success" ? (
                <motion.div
                  key="contact-success-layout"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="text-[#035346] bg-[#035346]/5 p-4 rounded-full">
                    <CheckCircle2 size={44} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-2xl font-serif text-[#035346] tracking-wide">
                    Transmission Successful
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 max-w-sm leading-relaxed font-normal">
                    Thank you for reaching out to Kompassionate Care. Our
                    clinical management team will process your coordinates and
                    establish contact within 24 operational hours.
                  </p>
                  <button
                    onClick={() => setSubmissionStatus("idle")}
                    className="mt-8 text-xs font-bold text-[#DD844B] uppercase tracking-wider hover:text-[#c9733b] transition-colors duration-200"
                  >
                    Submit New Request
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-error-layout"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="text-red-600 bg-red-50 p-4 rounded-full">
                    <XCircle size={44} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-2xl font-serif text-red-900 tracking-wide">
                    Submission Failed
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 max-w-sm leading-relaxed font-normal">
                    Something went wrong during form transmission. Please check
                    your network connection or try again directly via email.
                  </p>
                  <button
                    onClick={() => setSubmissionStatus("idle")}
                    className="mt-8 text-xs font-bold text-[#035346] uppercase tracking-wider hover:underline transition-all duration-200"
                  >
                    Try Resubmitting Form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
