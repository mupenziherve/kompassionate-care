"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight, ChevronRight } from "lucide-react";

// Social Media Icons
const Facebook = ({ size = 20, ...props }: any) => (
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

const Instagram = ({ size = 20, ...props }: any) => (
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

const Linkedin = ({ size = 20, ...props }: any) => (
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

const Youtube = ({ size = 20, ...props }: any) => (
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

export default function Footer() {
  return (
    <footer className="bg-[#035346] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/images/logo2.svg"
                alt="Kompassionate Care"
                width={220}
                height={80}
                className="w-[220px] h-auto object-contain"
              />
            </Link>
            <p className="text-stone-300 text-sm leading-relaxed mb-8">
              Providing compassionate, elite professional oversight alongside a
              warm, family-centered ecosystem.
            </p>
            <div className="flex gap-4">
              {SOCIAL_PROFILES.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#DD844B] hover:bg-[#DD844B] hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-stone-300 hover:text-[#DD844B] flex items-center gap-2 transition-colors"
                    >
                      <ChevronRight size={14} />
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">
              Care Disciplines
            </h4>
            <ul className="space-y-4">
              {[
                "24-Hour Care",
                "Memory Care",
                "Hospice Support",
                "Behavioral Health",
                "Physical Therapy",
              ].map((service) => (
                <li key={service} className="text-stone-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg text-white mb-6 tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-stone-300">
                <MapPin size={20} className="text-[#DD844B] shrink-0" />
                <span className="text-sm">
                  5110 SE Drake Rd, Hillsboro OR,97129
                </span>
              </div>
              <a
                href="tel:9713711444"
                className="flex items-center gap-3 text-stone-300 hover:text-[#DD844B] transition-colors"
              >
                <Phone size={20} className="text-[#DD844B] shrink-0" />

                <span className="text-sm leading-relaxed font-medium">
                  +1 (971) 371-1444
                  <br />
                  +1 (469) 487-4894
                </span>
              </a>
              <a
                href="mailto:info@kompassionatecare.com"
                className="flex items-center gap-3 text-stone-300 hover:text-[#DD844B] transition-colors"
              >
                <Mail size={20} className="text-[#DD844B] shrink-0" />
                <span className="text-sm">kompassionatecarellc@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-xs">
            &copy; {new Date().getFullYear()} Kompassionate Care. All Rights
            Reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-stone-400 text-xs">
              Professional Nursing Care
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
