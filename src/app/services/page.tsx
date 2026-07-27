import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServicesClient, { UnifiedService } from "./ServicesClient";
import { getServices as getServicesFromContentful } from "@/lib/contentful";

export const revalidate = 3600; // Next.js ISR (revalidate hourly)

// STATIC FALLBACK DATA (Used if Contentful is unreachable or empty)
const STATIC_CLINICAL_PROGRAMS: UnifiedService[] = [
  {
    id: "service-24hr",
    category: "24/7 Clinical Care",
    title: "24-Hour Care & Supervision",
    subtitle: "Continuous Professional Oversight",
    description:
      "Our RN-operated home provides round-the-clock monitoring and dedicated caregiving support. We maintain constant vigilance day and night, ensuring resident safety, immediate medical response, assistance with nighttime routines, and peace of mind for families.",
    highlights: [
      "24/7 Awake Staffing & Monitoring",
      "Nighttime Checks & Mobility Support",
      "Emergency Medical Response System",
    ],
    iconName: "Clock",
    programType: "clinical",
  },
  {
    id: "service-memory",
    category: "Dementia & Alzheimer's",
    title: "Memory Care Support",
    subtitle: "Structured & Safe Environment",
    description:
      "Specialized care plans tailored for individuals living with Alzheimer's, dementia, and cognitive changes. We utilize structured daily routines, gentle redirection techniques, memory enhancement activities, and secure living spaces to foster familiarity and confidence.",
    highlights: [
      "Tailored Memory Enhancement Routines",
      "Symptom Management & Redirection",
      "Secure, Clutter-Free Sanctuary",
    ],
    iconName: "Brain",
    programType: "clinical",
  },
  {
    id: "service-behavioral",
    category: "Specialized Behavioral Care",
    title: "Behavioral Health Support",
    subtitle: "Empathetic & De-escalating Care",
    description:
      "Empathetic, structured support designed for residents requiring behavioral guidance, emotional regulation, and psychological wellness. Our trained staff applies evidence-based de-escalation, individualized coping routines, and close coordination with mental health professionals.",
    highlights: [
      "Individualized Behavior Care Plans",
      "Positive Behavioral Interventions",
      "Close Collaboration with Therapists",
    ],
    iconName: "ShieldPlus",
    programType: "clinical",
  },
  {
    id: "service-hospice",
    category: "Palliative & Comfort",
    title: "Hospice Support",
    subtitle: "Dignified End-of-Life Care",
    description:
      "Comfort-focused palliative support in full collaboration with licensed hospice agencies. We prioritize physical comfort, pain management, emotional peace, and spiritual support, allowing residents to spend their time surrounded by love, dignity, and family.",
    highlights: [
      "Hospice Agency Coordinated Care",
      "Symptom & Pain Management",
      "Family Emotional Support & Privacy",
    ],
    iconName: "HeartPulse",
    programType: "clinical",
  },
  {
    id: "service-therapy",
    category: "Rehabilitation Support",
    title: "Physical & Occupational Therapy Support",
    subtitle: "Restorative Mobility & Strength",
    description:
      "Collaborative support for physical, occupational, and speech therapy routines prescribed by visiting therapists. We encourage daily exercises, gait training, fall-prevention routines, and adaptive equipment usage to maintain maximum physical independence.",
    highlights: [
      "Visiting Therapist Assistance",
      "Daily Mobility & Exercise Routines",
      "Fall Prevention & Safety Equipment",
    ],
    iconName: "Activity",
    programType: "clinical",
  },
  {
    id: "service-dd",
    category: "Adaptive Support",
    title: "Developmental Disabilities (DD) Support",
    subtitle: "Skills Building & Person-Centered Care",
    description:
      "Individualized residential support for adults with developmental disabilities. We empower residents through skill development, community integration, social engagement, personal advocacy, and structured daily living assistance suited to individual abilities.",
    highlights: [
      "Person-Centered Living Plans",
      "Life Skill & Autonomy Development",
      "Social Integration & Activities",
    ],
    iconName: "UserCheck",
    programType: "clinical",
  },
];

const STATIC_DAILY_SERVICES: UnifiedService[] = [
  {
    id: "service-nutrition",
    category: "Nutritional Health",
    title: "Nutrition & Family Dining",
    subtitle: "Chef-Prepared Balanced Meals",
    description:
      "Nutritious, home-cooked meals prepared daily using fresh ingredients. We offer balanced rotating menus, 24/7 healthy snacks, personalized hydration tracking, and specialized dietary accommodations (diabetic, low-sodium, pureed) managed under clinical guidance.",
    highlights: [
      "Home-Cooked Rotating Menus",
      "Specialized Diet Accommodations",
      "Family-Style Social Dining",
    ],
    iconName: "Utensils",
    programType: "daily",
  },
  {
    id: "service-medication",
    category: "Clinical Administration",
    title: "Medication Management",
    subtitle: "RN Oversight & Precision Timing",
    description:
      "Comprehensive medication administration operated under Registered Nurse oversight. We handle prescription orders, pharmacy deliveries, dosage tracking, side-effect monitoring, and meticulous documentation to ensure absolute safety and adherence.",
    highlights: [
      "RN Oversight & Dose Auditing",
      "Pharmacy Integration & Delivery",
      "Secure Digital Logging & Records",
    ],
    iconName: "Pill",
    programType: "daily",
  },
  {
    id: "service-housekeeping",
    category: "Environment & Safety",
    title: "Housekeeping & Sanitization",
    subtitle: "Pristine & Safe Living Quarters",
    description:
      "Rigorous cleaning, sanitation, and fresh laundry services tailored to maintain a healthy environment. Living quarters are kept pristine, clutter-free, and sanitized, with safety features like grab bars and zero-threshold transitions.",
    highlights: [
      "Daily Cleaning & Sanitization",
      "Personalized Laundry & Linen Service",
      "Safe, Barrier-Free Environment",
    ],
    iconName: "Home",
    programType: "daily",
  },
  {
    id: "service-personal-care",
    category: "Dignified Support",
    title: "Personal Care Assistance",
    subtitle: "Respectful Daily Living Help",
    description:
      "Gentle, respectful assistance with activities of daily living (ADLs), including bathing, dressing, grooming, hygiene, and mobility transfer. Our caregivers treat every resident with the utmost respect, preserving dignity at every interaction.",
    highlights: [
      "Bathing, Grooming & Dressing",
      "Transfer & Incontinence Support",
      "Dignity-Preserving Caregiving",
    ],
    iconName: "Sparkles",
    programType: "daily",
  },
  {
    id: "service-companionship",
    category: "Mental Wellness",
    title: "Companionship & Social Life",
    subtitle: "Warm, Family-Centered Bonds",
    description:
      "Meaningful human connection and social engagement. Caregivers build genuine relationships with residents through conversations, games, arts and crafts, outdoor garden walks, music, and seasonal celebration events.",
    highlights: [
      "Daily One-on-One Engagement",
      "Arts, Crafts, Games & Music",
      "Outdoor Garden & Porch Relaxation",
    ],
    iconName: "Users",
    programType: "daily",
  },
];

export default async function ServicesPage() {
  // Try fetching dynamic entries from Contentful
  const contentfulData = await getServicesFromContentful();

  let clinicalPrograms: UnifiedService[] = STATIC_CLINICAL_PROGRAMS;
  let dailyServices: UnifiedService[] = STATIC_DAILY_SERVICES;

  // If Contentful entries exist, split and use them instead of static arrays
  if (contentfulData && contentfulData.length > 0) {
    clinicalPrograms = contentfulData.filter(
      (s) => s.programType === "clinical",
    );
    dailyServices = contentfulData.filter((s) => s.programType === "daily");
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#FAF8F4] min-h-screen text-stone-800 font-sans antialiased selection:bg-[#035346]/10">
        {/* HERO HEADER SECTION */}
        <section className="relative h-[480px] sm:h-[560px] w-full overflow-hidden bg-stone-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
              alt="Kompassionate Care Professional Services"
              fill
              priority
              className="object-cover object-center opacity-35 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#023b32]/95 via-[#035346]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent opacity-100" />
          </div>

          <div className="max-w-7xl mx-auto px-6 h-full relative z-10 flex items-center">
            <div className="max-w-2xl bg-[#035346]/90 backdrop-blur-md rounded-[2.5rem] p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2.5 h-full bg-[#DD844B]" />
              <span className="text-[#DD844B] text-xs font-bold tracking-[4px] uppercase block mb-3">
                Comprehensive Care Disciplines
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white leading-[1.15] tracking-wide">
                Specialized Support <br />
                <span className="italic text-[#DD844B]">
                  Tailored for Dignity
                </span>
              </h1>
              <p className="mt-4 text-stone-200 text-base sm:text-lg leading-relaxed font-light opacity-95">
                From 24-hour clinical supervision and memory care to home-cooked
                nutrition and genuine companionship, our RN-operated home
                supports every dimension of life.
              </p>
            </div>
          </div>
        </section>

        {/* DYNAMIC OR FALLBACK SERVICES SECTION */}
        <ServicesClient
          clinicalPrograms={clinicalPrograms}
          dailyServices={dailyServices}
        />

        {/* CALL TO ACTION SECTION */}
        <section className="py-20 border-t border-stone-200/60 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-[#DD844B] text-xs font-bold tracking-[3px] uppercase block mb-3">
              Direct Family Support
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#035346] mb-4">
              Have Questions About Room Availability or Custom Care Plans?
            </h2>
            <p className="text-base sm:text-lg text-stone-600 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
              Our Registered Nurse manager coordinates directly with families to
              discuss individual care needs, room options, and facility tours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact?type=tour"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#035346] hover:bg-[#023b32] text-white font-semibold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
              >
                <Calendar size={16} />
                <span>Book Private Tour</span>
              </Link>
              <a
                href="tel:+15034438325"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-[#035346] font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                <Phone size={16} />
                <span>Call Care Manager: (503) 443-8325</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
