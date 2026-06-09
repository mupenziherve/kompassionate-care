import { Clock3, HeartPulse, Brain, ShieldPlus, Activity } from "lucide-react";

const services = [
  {
    icon: Clock3,
    title: "24-Hour Care Services",
    description:
      "Continuous supervision, companionship, and support 24 hours a day.",
  },
  {
    icon: HeartPulse,
    title: "Hospice Support",
    description:
      "Comfort-focused care that preserves dignity and peace of mind.",
  },
  {
    icon: Brain,
    title: "Behavioral Health Support",
    description:
      "Personalized care plans promoting emotional wellness and stability.",
  },
  {
    icon: ShieldPlus,
    title: "Memory Support Care",
    description:
      "Specialized care for individuals living with dementia and Alzheimer's.",
  },
  {
    icon: Activity,
    title: "Therapy Support",
    description: "Support for mobility, recovery, strength, and independence.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#f8f8f6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#DD844B] uppercase font-semibold tracking-wider">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#035346]">
            Personalized Care Designed Around Every Resident
          </h2>

          <p className="mt-6 text-gray-600">
            We provide comprehensive care services focused on dignity, comfort,
            safety, and overall well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#035346] text-white flex items-center justify-center group-hover:bg-[#DD844B] transition">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[#035346]">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
