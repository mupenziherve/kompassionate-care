"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ChevronRight, Heart } from "lucide-react";

// Social Media Icons
const Facebook = ({ size = 18, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 18, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 18, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = ({ size = 18, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const SOCIAL_PROFILES = [
  {
    icon: <Facebook />,
    href: "https://www.facebook.com/profile.php?id=61590491733670&sk=reviews",
    label: "Facebook",
  },
  {
    icon: <Instagram />,
    href: "https://www.instagram.com/kompassionate.care/",
    label: "Instagram",
  },
  {
    icon: <Linkedin />,
    href: "https://www.linkedin.com/company/kompassionate-care/about/?viewAsMember=true",
    label: "LinkedIn",
  },
  {
    icon: <Youtube />,
    href: "https://www.youtube.com/@kompassionatecare",
    label: "YouTube",
  },
];

const CARE_DISCIPLINES = [
  { name: "24-Hour Care", href: "/services#service-24hr" },
  { name: "Memory Care", href: "/services#service-memory" },
  { name: "Behavioral Health", href: "/services#service-behavioral" },
  { name: "Hospice Support", href: "/services#service-hospice" },
  { name: "Physical Therapy", href: "/services#service-therapy" },
  { name: "Developmental Disabilities", href: "/services#service-dd" },
];

export default function Footer() {
  return (
    <footer className="bg-[#035346] text-white pt-24 pb-12 relative overflow-hidden border-t border-emerald-900/40">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20">
          {/* Brand Presentation Column */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="inline-block transition-transform duration-300 hover:scale-[1.02] w-fit"
            >
              <Image
                src="/images/logo2.svg"
                alt="Kompassionate Care"
                width={220}
                height={80}
                priority
                className="w-[250px] h-auto object-contain"
              />
            </Link>
            <p className="text-emerald-100/70 text-sm leading-relaxed max-w-xs">
              Providing compassionate, elite professional oversight alongside a
              warm, family-centered ecosystem.
            </p>

            {/* Social profiles */}
            <div className="flex gap-3 pt-2">
              {SOCIAL_PROFILES.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#DD844B] flex items-center justify-center text-white hover:bg-white hover:text-[#DD844B] hover:-translate-y-1 transition-all duration-300 shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#DD844B] mb-7">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="group text-emerald-100/70 hover:text-white text-sm flex items-center gap-1.5 transition-colors duration-200"
                    >
                      <ChevronRight
                        size={14}
                        className="text-[#DD844B]/60 group-hover:text-[#DD844B] transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                      <span className="relative py-0.5">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#DD844B] transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Core Disciplines List (Now Clickable Links) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#DD844B] mb-7">
              Care Disciplines
            </h4>
            <ul className="space-y-3.5">
              {CARE_DISCIPLINES.map((discipline) => (
                <li key={discipline.name}>
                  <Link
                    href={discipline.href}
                    className="group text-emerald-100/70 hover:text-white text-sm flex items-center gap-2 transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DD844B]/60 group-hover:bg-[#DD844B] transition-colors shrink-0" />
                    <span className="relative py-0.5">
                      {discipline.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#DD844B] transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Structured Contact Information */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#DD844B] mb-7">
              Contact Us
            </h4>
            <div className="space-y-5">
              {/* Address Block */}
              <div className="flex items-start gap-3.5 text-emerald-100/70">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-[#DD844B] shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <span className="text-sm leading-relaxed">
                  5110 SE Drake Rd,
                  <br />
                  Hillsboro OR, 97123
                </span>
              </div>

              {/* Organized Phone Numbers List */}
              <div className="flex items-start gap-3.5 text-emerald-100/70">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-[#DD844B] shrink-0 mt-0.5">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col gap-2 text-sm font-medium">
                  <a
                    href="tel:+15034438325"
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span>+1 (503) 443-8325</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded uppercase font-bold tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
                      Main
                    </span>
                  </a>
                  <a
                    href="tel:+19713711444"
                    className="hover:text-white transition-colors"
                  >
                    +1 (971) 371-1444
                  </a>
                  <a
                    href="tel:+14694874894"
                    className="hover:text-white transition-colors"
                  >
                    +1 (469) 487-4894
                  </a>
                </div>
              </div>

              {/* Email Address Block */}
              <div className="flex items-start gap-3.5 text-emerald-100/70">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-[#DD844B] shrink-0 mt-0.5">
                  <Mail size={16} />
                </div>
                <a
                  href="mailto:kompassionatecarellc@gmail.com"
                  className="text-sm hover:text-white transition-colors break-all py-1.5"
                >
                  kompassionatecarellc@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-emerald-100/40 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Kompassionate Care LLC. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-1.5 text-emerald-100/40 text-xs tracking-wide">
            <span>Professional Elite Nursing Care</span>
            <Heart size={10} className="text-[#DD844B] fill-[#DD844B]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
