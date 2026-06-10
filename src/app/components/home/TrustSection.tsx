import { HeartHandshake, ShieldCheck, Clock3, Users } from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Personalized support delivered with dignity, respect, and kindness.",
  },
  {
    icon: Clock3,
    title: "24/7 Assistance",
    description:
      "Round-the-clock care and supervision for safety and peace of mind.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description:
      "A secure, comfortable, and family-centered residential setting.",
  },
  {
    icon: Users,
    title: "Family Focused",
    description:
      "Working closely with families to ensure the best care experience.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#DD844B] font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#035346]">
            Why Families Trust Kompassionate Care
          </h2>
          

          <p className="mt-6 text-gray-600">
            We provide compassionate, professional care in a safe, comfortable
            home where residents are treated like family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-[#f8f8f6] rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#035346] text-white flex items-center justify-center">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#035346]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
