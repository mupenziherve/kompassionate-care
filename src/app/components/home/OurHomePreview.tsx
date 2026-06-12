"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Comfortable and peaceful living spaces",
  "Safe home environment",
  "Family-style atmosphere",
  "Designed for dignity and independence",
];

export default function OurHomePreview() {
  return (
    <section className="py-28 bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
grid
lg:grid-cols-2
gap-14
items-center
"
        >
          {/* Image side */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
relative
"
          >
            <div
              className="
rounded-[40px]
overflow-hidden
shadow-xl
h-[520px]
"
            >
              <img
                src="/images/home.jpg"
                alt="Kompassionate Care Home"
                className="
w-full
h-full
object-cover
hover:scale-105
transition
duration-700
"
              />
            </div>

            <div
              className="
absolute
bottom-6
right-6
bg-white
rounded-3xl
p-5
shadow-xl
"
            >
              <p
                className="
text-[#035346]
font-bold
"
              >
                A Place To Call Home
              </p>

              <p
                className="
text-gray-500
text-sm
mt-1
"
              >
                Comfort • Safety • Compassion
              </p>
            </div>
          </motion.div>

          {/* Text */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
text-[#DD844B]
uppercase
tracking-[3px]
text-xs
font-bold
"
            >
              Our Home
            </p>

            <h2
              className="
mt-4
font-serif
text-4xl
lg:text-5xl
text-[#035346]
"
            >
              A warm environment designed around your loved one
            </h2>

            <p
              className="
mt-6
text-gray-600
leading-relaxed
text-lg
"
            >
              Our adult foster home provides a comfortable, safe and supportive
              environment where residents receive professional care while
              feeling valued and respected.
            </p>

            <div
              className="
mt-8
space-y-4
"
            >
              {features.map((item) => (
                <div
                  key={item}
                  className="
flex
gap-3
items-center
"
                >
                  <Check size={20} className="text-[#DD844B]" />

                  <p
                    className="
text-gray-700
font-medium
"
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/our-home"
              className="
mt-10
inline-flex
items-center
gap-3
bg-[#035346]
text-white
px-7
py-4
rounded-full
font-semibold
hover:bg-[#024236]
transition
"
            >
              Visit Our Home
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

