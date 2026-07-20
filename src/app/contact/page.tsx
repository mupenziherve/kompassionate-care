"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar as CalendarIcon,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Loader2,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

interface TourWizardState {
  dateObject: Date | null;
  time: string;
  who: string;
  careLevel: string;
  timeline: string;
  fullName: string;
  email: string;
  phone: string;
}

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<"general" | "tour">("general");

  // General Form States
  const [generalForm, setGeneralForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Tour Wizard States
  const [tourStep, setTourStep] = useState(1);
  const [tourForm, setTourForm] = useState<TourWizardState>({
    dateObject: null,
    time: "",
    who: "",
    careLevel: "",
    timeline: "",
    fullName: "",
    email: "",
    phone: "",
  });

  // Infinite Scroll Calendar Baseline Tracker
  const [calendarStartDate, setCalendarStartDate] = useState<Date>(new Date());
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [activeTab, setActiveTab] = useState<"details" | "process">("details");

  // Inbound param link validation
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("type") === "tour") {
        setInquiryType("tour");
        setActiveTab("process");
      }
    }
  }, []);

  // Compute 6 rolling calendar days sequentially without limits
  const calendarDays = useMemo(() => {
    const days = [];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let i = 0; i < 6; i++) {
      const current = new Date(calendarStartDate);
      current.setDate(calendarStartDate.getDate() + i);
      days.push({
        dayName: daysOfWeek[current.getDay()],
        dayNumber: current.getDate().toString(),
        fullDate: current,
      });
    }
    return days;
  }, [calendarStartDate]);

  const currentMonthYearDisplay = useMemo(() => {
    return calendarStartDate.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  }, [calendarStartDate]);

  const handleNextWeek = () => {
    setCalendarStartDate((prev) => {
      const next = new Date(prev);
      next.setDate(prev.getDate() + 7);
      return next;
    });
  };

  const handlePrevWeek = () => {
    setCalendarStartDate((prev) => {
      const next = new Date(prev);
      next.setDate(prev.getDate() - 7);
      return next;
    });
  };

  const handleTourSelection = (field: keyof TourWizardState, value: string) => {
    setTourForm((prev) => ({ ...prev, [field]: value }));
    if (field !== "time" && field !== "dateObject") {
      setTourStep((prev) => prev + 1);
    }
  };

  // Submission handler for general messages
  // Submission handler for general messages
  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/meebjzvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _replyto: generalForm.email,
          "Inquiry Type": "General Care Inquiry & Support",
          "Sender Name": generalForm.name,
          "Email Address": generalForm.email,
          "Phone Number": generalForm.phone,
          "Message Details": generalForm.message,
          "Company Email": "kompassionatecarellc@gmail.com",
        }),
      });

      if (response.ok) {
        setSubmissionStatus("success");

        setGeneralForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    }
  };
  // Submission handler for multi-step guided tours
  const handleTourSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourForm.fullName || !tourForm.email || !tourForm.phone) return;

    setSubmissionStatus("loading");

    const formattedDate = tourForm.dateObject
      ? tourForm.dateObject.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "Not specified";

    // Text formatting for cleaner layout output inside email notification systems
    const structuredDetailedSummary = `
==================================================
  KOMPASSIONATE CARE TOUR REQUEST DATA DOSSIER
==================================================
• Requester Full Name  : ${tourForm.fullName}
• Email Node Connection: ${tourForm.email}
• Verified Contact Line: ${tourForm.phone}
--------------------------------------------------
• Selected Tour Date   : ${formattedDate}
• Preferred Time Window: ${tourForm.time}
• Care Beneficiary     : ${tourForm.who}
• Requested Care Profile: ${tourForm.careLevel}
• Move-In Timeline     : ${tourForm.timeline}
==================================================
    `;

    try {
      const response = await fetch("https://formspree.io/f/meebjzvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _replyto: tourForm.email,

          "Subject Filter": `🚨 New Private Tour Request - ${tourForm.fullName}`,
          "Inquiry Type": "Adult Foster Home Private Tour Booking",
          "Visitor Name": tourForm.fullName,
          "Email Address": tourForm.email,
          "Phone Number": tourForm.phone,
          "Target Tour Date": formattedDate,
          "Selected Time Slot": tourForm.time,
          "Care Recipient Selection": tourForm.who,
          "Program Information Needed": tourForm.careLevel,
          "Estimated Timeline": tourForm.timeline,
          "Complete Plaintext Overview": structuredDetailedSummary,
        }),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setTourForm({
          dateObject: null,
          time: "",
          who: "",
          careLevel: "",
          timeline: "",
          fullName: "",
          email: "",
          phone: "",
        });
        setTourStep(1);
      } else {
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    }
  };

  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F4] min-h-screen">
        {/* HERO HEADER DISPLAY */}
        <section className="relative h-[460px] sm:h-[520px] w-full overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=2000&q=80"
              alt="Kompassionate Care Premium Caregivers"
              className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023b32]/95 via-[#035346]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent opacity-100" />
          </div>

          <div className="max-w-7xl mx-auto px-6 h-full relative z-10 flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl bg-[#035346]/90 backdrop-blur-md rounded-[2rem] p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#DD844B]" />
              <span className="text-[#DD844B] text-xs font-bold tracking-[4px] uppercase block">
                {inquiryType === "tour"
                  ? "Private Booking Portal"
                  : "Get In Touch"}
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-tight tracking-wide">
                {inquiryType === "tour"
                  ? "Schedule Your Private Tour"
                  : "Connect With Our Care Team"}
              </h1>
              <p className="mt-4 text-stone-200 text-sm sm:text-base leading-relaxed font-light">
                {inquiryType === "tour"
                  ? "Follow our guided multi-step configuration interface below to choose a flexible walkthrough slot with our clinical team configuration."
                  : "Have questions about specialized care programs, room availability, or schedules? We are here to support your entire family structure."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* DATA CONTAINER PLATFORM */}
        <section className="pb-24 lg:pb-32 -mt-12 relative z-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* INTERACTIVE FORM ENGINE */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl shadow-stone-200/50 border border-stone-200/40 relative min-h-[640px] flex flex-col justify-between"
              >
                <div>
                  {/* UTILITY TAB HEADER TABS */}
                  <div className="mb-8">
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-3">
                      Nature of Communications
                    </label>
                    <div className="grid grid-cols-2 gap-2 bg-stone-100 p-1.5 rounded-xl">
                      <button
                        type="button"
                        onClick={() => {
                          setInquiryType("general");
                          setSubmissionStatus("idle");
                        }}
                        className={`py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${inquiryType === "general" ? "bg-[#035346] text-white shadow" : "text-stone-500 hover:text-stone-800"}`}
                      >
                        General Support
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setInquiryType("tour");
                          setSubmissionStatus("idle");
                        }}
                        className={`py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${inquiryType === "tour" ? "bg-[#035346] text-white shadow" : "text-stone-500 hover:text-stone-800"}`}
                      >
                        Book Guided Tour
                      </button>
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {submissionStatus === "loading" ? (
                      <motion.div
                        key="loading"
                        className="flex flex-col items-center justify-center py-24 my-auto"
                      >
                        <Loader2
                          size={40}
                          className="animate-spin text-[#035346]"
                        />
                        <p className="mt-4 text-sm text-stone-500 font-medium">
                          Encrypting and transferring payload variables...
                        </p>
                      </motion.div>
                    ) : submissionStatus === "success" ? (
                      <motion.div
                        key="success"
                        className="text-center py-16 flex flex-col items-center justify-center"
                      >
                        <div className="text-[#035346] bg-[#035346]/5 p-4 rounded-full">
                          <CheckCircle2 size={48} />
                        </div>
                        <h3 className="mt-6 text-2xl font-serif text-[#035346]">
                          Transmission Successful
                        </h3>
                        <p className="mt-3 text-sm text-stone-500 max-w-sm leading-relaxed">
                          Your tour booking profile has been compiled and
                          dispatched. Check your inbox for confirmation links
                          shortly.
                        </p>
                        <button
                          onClick={() => setSubmissionStatus("idle")}
                          className="mt-8 text-xs font-bold text-[#DD844B] uppercase tracking-wider hover:underline"
                        >
                          Submit Another Request
                        </button>
                      </motion.div>
                    ) : submissionStatus === "error" ? (
                      <motion.div
                        key="error"
                        className="text-center py-16 flex flex-col items-center justify-center"
                      >
                        <div className="text-red-600 bg-red-50 p-4 rounded-full">
                          <XCircle size={48} />
                        </div>
                        <h3 className="mt-6 text-2xl font-serif text-red-900">
                          Submission Failure
                        </h3>
                        <p className="mt-3 text-sm text-stone-500 max-w-sm leading-relaxed">
                          An error occurred while compiling your dynamic forms.
                          Please review network routes or attempt direct
                          submission again.
                        </p>
                        <button
                          onClick={() => setSubmissionStatus("idle")}
                          className="mt-8 text-xs font-bold text-[#035346] uppercase tracking-wider hover:underline"
                        >
                          Try Again
                        </button>
                      </motion.div>
                    ) : inquiryType === "general" ? (
                      /* STANDARD EMAIL FORM CONTAINER */
                      <motion.div
                        key="general-form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <h2 className="text-xl font-serif text-[#035346] tracking-wide">
                          General Inquiry Submission
                        </h2>
                        <form
                          onSubmit={handleGeneralSubmit}
                          className="mt-6 space-y-4"
                        >
                          <input
                            type="text"
                            required
                            placeholder="Full Name"
                            value={generalForm.name}
                            onChange={(e) =>
                              setGeneralForm({
                                ...generalForm,
                                name: e.target.value,
                              })
                            }
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 text-sm text-gray-900 outline-none focus:border-[#035346]"
                          />
                          <div className="grid sm:grid-cols-2 gap-4">
                            <input
                              type="email"
                              required
                              placeholder="Email Address"
                              value={generalForm.email}
                              onChange={(e) =>
                                setGeneralForm({
                                  ...generalForm,
                                  email: e.target.value,
                                })
                              }
                              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 text-sm text-gray-900 outline-none focus:border-[#035346]"
                            />
                            <input
                              type="tel"
                              required
                              placeholder="Phone Number"
                              value={generalForm.phone}
                              onChange={(e) =>
                                setGeneralForm({
                                  ...generalForm,
                                  phone: e.target.value,
                                })
                              }
                              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 text-sm text-gray-900 outline-none focus:border-[#035346]"
                            />
                          </div>
                          <textarea
                            required
                            rows={5}
                            placeholder="How can we assist your family?"
                            value={generalForm.message}
                            onChange={(e) =>
                              setGeneralForm({
                                ...generalForm,
                                message: e.target.value,
                              })
                            }
                            className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 text-sm text-gray-900 outline-none focus:border-[#035346] resize-none"
                          />
                          <button
                            type="submit"
                            className="w-full bg-[#035346] hover:bg-[#023b32] text-white py-4 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
                          >
                            <span>Send Message</span>
                            <ArrowRight size={16} />
                          </button>
                        </form>
                      </motion.div>
                    ) : (
                      /* GUIDED MULTI-STEP TOUR PORTAL SETUP */
                      <motion.div
                        key="tour-wizard"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {/* Progress Stepper Tracking Elements */}
                        <div className="flex gap-2 mb-8 justify-center">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div
                              key={i}
                              className={`h-1.5 flex-1 max-w-[60px] rounded-full transition-colors duration-300 ${tourStep >= i ? "bg-[#035346]" : "bg-stone-200"}`}
                            />
                          ))}
                        </div>

                        {/* STEP 1: Infinite Scroll Calendar & Custom Time Picker Layout */}
                        {tourStep === 1 && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-center"
                          >
                            <h2 className="text-xl font-serif text-[#035346] mb-1">
                              When would you like to schedule your tour?
                            </h2>
                            <p className="text-stone-400 text-xs mb-6">
                              We can't wait to have you!
                            </p>

                            <div className="mb-6 bg-stone-50 p-4 rounded-2xl border border-stone-200/60">
                              <div className="flex items-center justify-between px-4 mb-4">
                                <button
                                  type="button"
                                  onClick={handlePrevWeek}
                                  className="p-1.5 text-stone-600 hover:bg-stone-200 rounded-full transition-all"
                                >
                                  <ChevronLeft size={18} />
                                </button>
                                <p className="font-bold text-stone-800 text-sm tracking-wide">
                                  {currentMonthYearDisplay}
                                </p>
                                <button
                                  type="button"
                                  onClick={handleNextWeek}
                                  className="p-1.5 text-stone-600 hover:bg-stone-200 rounded-full transition-all"
                                >
                                  <ChevronRight size={18} />
                                </button>
                              </div>

                              <div className="flex justify-between gap-1 items-center">
                                {calendarDays.map((day, idx) => {
                                  const isSelected =
                                    tourForm.dateObject?.toDateString() ===
                                    day.fullDate.toDateString();
                                  return (
                                    <div
                                      key={idx}
                                      onClick={() =>
                                        setTourForm((prev) => ({
                                          ...prev,
                                          dateObject: day.fullDate,
                                        }))
                                      }
                                      className="flex flex-col items-center gap-1.5 flex-1 cursor-pointer group"
                                    >
                                      <span className="text-[11px] text-stone-400 font-medium">
                                        {day.dayName}
                                      </span>
                                      <div
                                        className={`w-9 h-9 rounded-full flex items-center justify-center text-xs transition-all ${isSelected ? "bg-[#035346] text-white font-bold shadow-md" : "text-stone-700 hover:bg-stone-200"}`}
                                      >
                                        {day.dayNumber}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2.5 mb-4">
                              {[
                                "9:00 AM",
                                "10:00 AM",
                                "11:00 AM",
                                "12:00 PM",
                                "1:00 PM",
                                "2:00 PM",
                                "3:00 PM",
                                "4:00 PM",
                                "5:00 PM",
                              ].map((t) => (
                                <button
                                  type="button"
                                  key={t}
                                  onClick={() =>
                                    setTourForm((prev) => ({
                                      ...prev,
                                      time: t,
                                    }))
                                  }
                                  className={`py-2.5 px-2 text-xs rounded-xl border transition-all ${tourForm.time === t ? "border-[#035346] bg-[#035346]/5 text-[#035346] font-bold" : "border-stone-200 text-stone-500 hover:border-[#035346]"}`}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>

                            {/* CUSTOM TIME ENTRY SYSTEM */}
                            <div className="mt-4 pt-4 border-t border-stone-100 text-left mb-6">
                              <label
                                htmlFor="custom-time-input"
                                className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2"
                              >
                                Or enter a custom hour window:
                              </label>
                              <input
                                id="custom-time-input"
                                type="text"
                                placeholder="e.g., 11:30 AM or Evening after 6:00 PM"
                                value={tourForm.time}
                                onChange={(e) =>
                                  setTourForm((prev) => ({
                                    ...prev,
                                    time: e.target.value,
                                  }))
                                }
                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-xs text-gray-900 outline-none focus:border-[#035346]"
                              />
                            </div>

                            <button
                              type="button"
                              disabled={!tourForm.dateObject || !tourForm.time}
                              onClick={() => setTourStep(2)}
                              className="w-full bg-[#035346] disabled:bg-stone-100 disabled:text-stone-400 text-white py-4 rounded-xl font-semibold text-sm transition-all"
                            >
                              Next Step
                            </button>
                          </motion.div>
                        )}

                        {/* STEP 2: Beneficiary Targets */}
                        {tourStep === 2 && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-center py-4"
                          >
                            <h2 className="text-xl font-serif text-[#035346] mb-8">
                              Who are you looking for?
                            </h2>
                            <div className="space-y-3 max-w-sm mx-auto">
                              {["Myself", "Loved One"].map((opt) => (
                                <button
                                  type="button"
                                  key={opt}
                                  onClick={() =>
                                    handleTourSelection("who", opt)
                                  }
                                  className="w-full bg-[#035346] text-white py-4 rounded-xl text-sm font-medium hover:bg-[#023b32] transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* STEP 3: Level of Care Selections (Aligned with Provided Capabilities) */}
                        {tourStep === 3 && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-center"
                          >
                            <h2 className="text-xl font-serif text-[#035346] mb-2">
                              What level of care would you like information for?
                            </h2>
                            <p className="text-stone-400 text-xs mb-6">
                              If you aren't completely sure, that is absolutely
                              fine.
                            </p>
                            <div className="space-y-2.5 max-w-md mx-auto">
                              {[
                                "24-Hour care & supervision",
                                "Memory care support",
                                "Behavioral health support",
                                "Hospice support",
                                "Physical & Occupational Therapy support",
                                "Respite Care",
                                "Not Sure",
                                "Other",
                              ].map((opt) => (
                                <button
                                  type="button"
                                  key={opt}
                                  onClick={() =>
                                    handleTourSelection("careLevel", opt)
                                  }
                                  className="w-full bg-[#035346] text-white py-3 px-4 rounded-xl text-xs font-medium hover:bg-[#023b32] transition-all text-left block border border-transparent shadow-sm"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* STEP 4: Relocation Timelines */}
                        {tourStep === 4 && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-center py-4"
                          >
                            <h2 className="text-xl font-serif text-[#035346] mb-8">
                              What is your placement timeline?
                            </h2>
                            <div className="space-y-3 max-w-sm mx-auto">
                              {[
                                "Immediately",
                                "1 - 3 months",
                                "3 Months +",
                                "Just Researching",
                              ].map((opt) => (
                                <button
                                  type="button"
                                  key={opt}
                                  onClick={() =>
                                    handleTourSelection("timeline", opt)
                                  }
                                  className="w-full bg-[#035346] text-white py-4 rounded-xl text-sm font-medium hover:bg-[#023b32] transition-all"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {/* STEP 5: Personal Client Profiles Registration Form */}
                        {tourStep === 5 && (
                          <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                          >
                            <h2 className="text-xl font-serif text-[#035346] mb-6 text-center">
                              Almost done! Let's lock in your details.
                            </h2>
                            <form
                              onSubmit={handleTourSubmit}
                              className="space-y-4 max-w-md mx-auto"
                            >
                              <div>
                                <label
                                  htmlFor="tour-fullName"
                                  className="block text-xs font-bold text-stone-500 uppercase mb-1"
                                >
                                  First and Last Name
                                </label>
                                <input
                                  id="tour-fullName"
                                  type="text"
                                  required
                                  placeholder="Jane Doe"
                                  value={tourForm.fullName}
                                  onChange={(e) =>
                                    setTourForm({
                                      ...tourForm,
                                      fullName: e.target.value,
                                    })
                                  }
                                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#035346]"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="tour-email"
                                  className="block text-xs font-bold text-stone-500 uppercase mb-1"
                                >
                                  Email Address
                                </label>
                                <input
                                  id="tour-email"
                                  type="email"
                                  required
                                  placeholder="jane@example.com"
                                  value={tourForm.email}
                                  onChange={(e) =>
                                    setTourForm({
                                      ...tourForm,
                                      email: e.target.value,
                                    })
                                  }
                                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#035346]"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="tour-phone"
                                  className="block text-xs font-bold text-stone-500 uppercase mb-1"
                                >
                                  Phone Number
                                </label>
                                <input
                                  id="tour-phone"
                                  type="tel"
                                  required
                                  placeholder="(503) 555-0199"
                                  value={tourForm.phone}
                                  onChange={(e) =>
                                    setTourForm({
                                      ...tourForm,
                                      phone: e.target.value,
                                    })
                                  }
                                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#035346]"
                                />
                              </div>

                              <button
                                type="submit"
                                className="w-full bg-[#DD844B] hover:bg-[#c8743d] text-white py-4 rounded-xl font-semibold text-sm transition-all mt-6 shadow"
                              >
                                Confirm Private Tour Request
                              </button>
                            </form>
                          </motion.div>
                        )}

                        {/* Backwards navigation trigger button */}
                        {tourStep > 1 && (
                          <button
                            type="button"
                            onClick={() => setTourStep((p) => p - 1)}
                            className="mt-6 text-xs text-stone-400 hover:text-stone-600 block mx-auto underline"
                          >
                            Return to Previous Step
                          </button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* CORPORATE INFORMATION DISPLAY SIDEBAR */}
              <div className="lg:col-span-5 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-stone-200/50 border border-stone-200/40 overflow-hidden"
                >
                  <div className="flex border-b border-stone-100 pb-4 mb-6">
                    <button
                      onClick={() => setActiveTab("details")}
                      className={`flex-1 text-center pb-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === "details" ? "text-[#035346] border-b-2 border-[#035346]" : "text-stone-400"}`}
                    >
                      Corporate Identity
                    </button>
                    <button
                      onClick={() => setActiveTab("process")}
                      className={`flex-1 text-center pb-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === "process" ? "text-[#035346] border-b-2 border-[#035346]" : "text-stone-400"}`}
                    >
                      Tour Protocol
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    {activeTab === "details" ? (
                      <motion.div
                        key="tab-details"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        className="space-y-6"
                      >
                        <div>
                          <div className="flex items-center gap-2 text-[#035346] mb-1">
                            <Building2 size={16} />
                            <h3 className="font-serif text-lg font-medium">
                              Kompassionate Care Services
                            </h3>
                          </div>
                          <p className="text-stone-400 text-xs font-medium uppercase tracking-widest">
                            Hillsboro, OR Facility Base
                          </p>
                        </div>

                        <a
                          href="tel:+19713711444"
                          className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200/60 transition-all group block"
                        >
                          <div className="bg-[#035346] text-white p-3 rounded-xl transition-transform group-hover:scale-105">
                            <Phone size={18} />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#DD844B] mb-1">
                              Click to Call
                            </p>
                            <p className="text-stone-800 font-semibold text-sm flex items-center gap-2">
                              <span>+1 (503) 443-8325</span>
                            </p>
                            <p className="text-stone-800 mt-1 font-semibold text-sm">
                              +1 (971) 371-1444
                            </p>
                            <p className="text-stone-800 mt-1 font-semibold text-sm">
                              +1 (469) 487-4894
                            </p>
                          </div>
                        </a>

                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/60">
                          <div className="bg-[#035346]/5 text-[#035346] p-3 rounded-xl shrink-0">
                            <MapPin size={18} />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                              Physical Address
                            </p>
                            <p className="text-stone-800 mt-0.5 font-medium text-sm leading-relaxed">
                              5510 SE Drake Rd
                              <br />
                              Hillsboro, OR 97129
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200/60 overflow-hidden text-ellipsis">
                          <div className="bg-[#035346]/5 text-[#035346] p-3 rounded-xl shrink-0">
                            <Mail size={18} />
                          </div>
                          <div className="overflow-hidden text-ellipsis">
                            <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                              Secure Inbox
                            </p>
                            <p className="text-stone-800 mt-0.5 font-medium text-sm block overflow-hidden text-ellipsis break-all">
                              kompassionatecarellc@gmail.com
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="tab-process"
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -15 }}
                        className="space-y-5"
                      >
                        <div className="flex items-center gap-2 text-[#035346] mb-2">
                          <CalendarIcon size={18} />
                          <h3 className="font-serif text-lg font-medium">
                            How to Schedule a Tour
                          </h3>
                        </div>

                        <div className="relative border-l-2 border-stone-200 pl-5 ml-2.5 space-y-6 text-sm">
                          <div>
                            <p className="font-bold text-stone-800 text-xs uppercase tracking-wider">
                              Step 1: Submit Form Request
                            </p>
                            <p className="text-stone-500 mt-1 text-xs leading-relaxed">
                              Complete our digital packet on the left, selecting
                              your optimal inquiry type and preferred date
                              windows.
                            </p>
                          </div>
                          <div>
                            <p className="font-bold text-stone-800 text-xs uppercase tracking-wider">
                              Step 2: Clinical Clearance Call
                            </p>
                            <p className="text-stone-500 mt-1 text-xs leading-relaxed">
                              Our nurse manager coordinates directly with your
                              family to map specific layout conditions and
                              medical support plans.
                            </p>
                          </div>
                          <div>
                            <p className="font-bold text-stone-800 text-xs uppercase tracking-wider">
                              Step 3: Private Walkthrough
                            </p>
                            <p className="text-stone-500 mt-1 text-xs leading-relaxed">
                              Enjoy an unhurried, clean overview of our safe,
                              tranquil private residential spaces in Hillsboro.
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 bg-[#FAF8F4] p-4 rounded-xl border border-stone-200 flex items-center gap-3">
                          <Clock size={16} className="text-[#DD844B]" />
                          <p className="text-xs text-stone-600 font-medium">
                            Tours are conducted Mon - Sun via strict walkthrough
                            validation configurations.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* GEOLOCATION MAP EMBED CONTAINER */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-[310px] rounded-[2.5rem] overflow-hidden border border-stone-200 shadow-lg relative bg-stone-100"
                >
                  <iframe
                    src="https://maps.google.com/maps?q=5110%20SE%20Drake%20Rd%20Hillsboro%20OR%2097123&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kompassionate Care Location Map"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
