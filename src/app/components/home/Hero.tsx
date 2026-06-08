import { Phone, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#035346]">
            Compassionate Adult Foster Care in Oregon
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Providing personalized, family-centered care with dignity, comfort,
            and professional support 24/7.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-[#DD844B] text-white px-6 py-3 rounded-lg flex items-center gap-2">
              <Calendar size={18} />
              Schedule a Tour
            </button>

            <button className="border border-[#035346] text-[#035346] px-6 py-3 rounded-lg flex items-center gap-2">
              <Phone size={18} />
              Call Now
            </button>
          </div>

          {/* TRUST TAGS */}
          <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div>✔ RN Supervised Care</div>
            <div>✔ 24/7 Support</div>
            <div>✔ Safe Residential Home</div>
            <div>✔ Family-Centered Care</div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309"
            alt="Caregiver with elderly patient"
            className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
          />

          {/* Floating card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl p-4">
            <p className="font-semibold text-[#035346]">
              24/7 Professional Care
            </p>
            <p className="text-sm text-gray-500">
              Always here for your loved ones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
