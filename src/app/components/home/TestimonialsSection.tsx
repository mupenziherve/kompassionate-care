import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Family Member",
    role: "Daughter of Resident",
    quote:
      "The care and compassion shown by the team gave our family peace of mind. We always felt our loved one was safe and respected.",
  },
  {
    name: "Family Member",
    role: "Son of Resident",
    quote:
      "The staff treated my father like family. Communication was excellent and the environment was warm and welcoming.",
  },
  {
    name: "Family Member",
    role: "Resident Advocate",
    quote:
      "Professional, caring, and attentive. We are grateful for the support provided during a very important time.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#DD844B] uppercase font-semibold tracking-wider">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#035346]">
            Trusted by Families
          </h2>

          <p className="mt-6 text-gray-600">
            Our goal is to provide compassionate care and peace of mind for
            residents and their families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f8f8f6] rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex gap-1 text-[#DD844B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 text-gray-600 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-[#035346]">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
