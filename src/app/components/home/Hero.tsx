import { Phone, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#f8f8f6] min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <span className="text-[#DD844B] font-semibold uppercase tracking-wider">
            With You Every Step
          </span>

          <h1 className="mt-4 text-5xl font-bold text-[#035346] leading-tight">
            Compassionate Adult Foster Care in Oregon
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Providing personalized, family-centered care with dignity, comfort,
            and professional support 24 hours a day.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-[#DD844B] hover:opacity-90 text-white px-6 py-3 rounded-xl">
              Schedule a Tour
            </button>

            <button className="border border-[#035346] text-[#035346] px-6 py-3 rounded-xl">
              Call Now
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-[#035346]">
            <div>✓ RN Supervised</div>
            <div>✓ 24/7 Care</div>
            <div>✓ Safe Environment</div>
            <div>✓ Family Focused</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309"
              alt="Caregiver"
              className="w-full h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
