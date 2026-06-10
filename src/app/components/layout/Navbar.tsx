"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="sticky top-0 z-50 bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Kompassionate Care"
              className="h-24 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            <motion.div
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
            >
              <Link href="/" className="hover:text-[#DD844B] transition">
                Home
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
            >
              <Link href="/about" className="hover:text-[#DD844B] transition">
                About
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
            >
              <Link
                href="/services"
                className="hover:text-[#DD844B] transition"
              >
                Services
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
            >
              <Link href="/gallery" className="hover:text-[#DD844B] transition">
                Gallery
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
            >
              <Link href="/contact" className="hover:text-[#DD844B] transition">
                Contact
              </Link>
            </motion.div>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+19713711444"
              className="flex items-center gap-2 text-[#035346] font-medium"
            >
              <Phone size={18} />
              (971) 371-1444
            </a>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="bg-[#DD844B] text-white px-6 py-3 rounded-xl font-medium shadow-md"
            >
              Schedule Tour
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-6 flex flex-col gap-5 text-gray-700 font-medium">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>

                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>

                <Link href="/services" onClick={() => setIsOpen(false)}>
                  Services
                </Link>

                <Link href="/gallery" onClick={() => setIsOpen(false)}>
                  Gallery
                </Link>

                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>

                <a
                  href="tel:+19713711444"
                  className="text-[#035346] font-semibold"
                >
                  Call Now
                </a>

                <button className="bg-[#DD844B] text-white py-3 rounded-xl font-medium">
                  Schedule Tour
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
