"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

const Facebook = ({ size = 24, ...props }: IconProps) => (
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

const Instagram = ({ size = 24, ...props }: IconProps) => (
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

const Linkedin = ({ size = 24, ...props }: IconProps) => (
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

const Youtube = ({ size = 24, ...props }: IconProps) => (
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

interface SocialLink {
  readonly icon: React.ReactNode;
  readonly href: string;
  readonly label: string;
}

interface FooterLink {
  readonly label: string;
  readonly href: string;
}

const SOCIAL_PROFILES: readonly SocialLink[] = [
  {
    icon: <Facebook size={18} className="stroke-[2]" />,
    href: "https://facebook.com",
    label: "Facebook Profile",
  },
  {
    icon: <Instagram size={18} className="stroke-[2]" />,
    href: "https://instagram.com",
    label: "Instagram Profile",
  },
  {
    icon: <Linkedin size={18} className="stroke-[2]" />,
    href: "https://linkedin.com",
    label: "LinkedIn Professional Page",
  },
  {
    icon: <Youtube size={18} className="stroke-[2]" />,
    href: "https://youtube.com",
    label: "YouTube Channel Tour Videos",
  },
];

const QUICK_LINKS: readonly FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Our Story", href: "/about" },
  { label: "Care Services", href: "/services" },
  { label: "Our Home Gallery", href: "/gallery" },
  { label: "Get In Touch", href: "/contact" },
];

const CARE_SERVICES: readonly string[] = [
  "24-Hour Continuous Care",
  "Specialized Memory Care",
  "Hospice & Comfort Support",
  "Behavioral Health Management",
  "Physical Therapy Support",
];

export default function Footer() {
  return (
    <footer className="bg-[#035346] text-white border-t border-white/10 relative overflow-hidden select-none">
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="focus:outline-none rounded-xl">
              <img
                src="/images/logo2.png"
                alt="Kompassionate Care Signature Logo"
                className="h-16 w-auto object-contain transition-opacity duration-200 hover:opacity-95"
              />
            </Link>
            <p className="mt-6 text-stone-200/80 text-sm leading-relaxed font-normal max-w-sm">
              Providing compassionate, elite professional oversight alongside a
              warm, family-centered ecosystem where senior residents live with
              complete safety, personal dignity, and deep structural respect.
            </p>

            <div className="flex gap-3 mt-8">
              {SOCIAL_PROFILES.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-200 hover:text-white hover:bg-[#DD844B] hover:border-[#DD844B] transition-all duration-300 transform hover:-translate-y-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DD844B]/40"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="font-serif text-base text-[#DD844B] uppercase tracking-[2px] font-bold mb-6">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-3 text-sm text-stone-200/90">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-1 hover:text-[#DD844B] transition-all duration-300 transform hover:translate-x-1.5 w-fit focus:outline-none"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#DD844B]"
                  />
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-base text-[#DD844B] uppercase tracking-[2px] font-bold mb-6">
              Care Disciplines
            </h3>
            <div className="flex flex-col space-y-3.5 text-sm text-stone-200/90 font-normal">
              {CARE_SERVICES.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 group cursor-default hover:text-white transition-colors duration-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DD844B]/40 group-hover:bg-[#DD844B] transition-colors duration-200" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-base text-[#DD844B] uppercase tracking-[2px] font-bold mb-6">
              Contact Facility
            </h3>
            <address className="flex flex-col space-y-4 text-sm text-stone-200/90 font-normal not-italic">
              <div className="flex items-start gap-3 group">
                <MapPin size={16} className="text-[#DD844B] mt-0.5 shrink-0" />
                <span className="leading-relaxed text-stone-200/80">
                  5110 SE Drake Rd
                  <br />
                  Hillsboro OR, 97123
                </span>
              </div>

              <a
                href="tel:9713711444"
                className="flex items-center gap-3 w-fit hover:text-[#DD844B] transition-colors duration-200 focus:outline-none"
              >
                <Phone size={16} className="text-[#DD844B] shrink-0" />
                <span className="font-medium">+1 (971) 371-1444</span>
              </a>

              <a
                href="mailto:info@kompassionatecare.com"
                className="flex items-center gap-3 w-fit hover:text-[#DD844B] transition-colors duration-200 focus:outline-none break-all"
              >
                <Mail size={16} className="text-[#DD844B] shrink-0" />
                <span className="font-medium">info@kompassionatecare.com</span>
              </a>
            </address>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300/70 font-normal tracking-wide">
          <div>
            &copy; {new Date().getFullYear()} Kompassionate Care. All Rights
            Reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <Link
              href="/privacy"
              className="hover:text-[#DD844B] transition-colors duration-200 focus:outline-none"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#DD844B] transition-colors duration-200 focus:outline-none"
            >
              Terms of Service
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-[#DD844B] transition-colors duration-200 focus:outline-none"
            >
              Accessibility Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
