export default function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div>
          <img
            src="/images/about.jpg"
            alt="Kompassionate Care"
            className="rounded-3xl shadow-xl w-full h-[550px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <span className="text-[#DD844B] uppercase font-semibold tracking-wider">
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#035346]">
            A Home Built on Compassion, Dignity, and Trust
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Kompassionate Care is a Registered Nurse and caregiver-operated
            Adult Foster Home dedicated to providing personalized care in a
            safe, comfortable, and family-centered environment.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We understand that choosing care for a loved one is one of life's
            most important decisions. Our mission is to enhance quality of life
            through compassionate support, professional care, and a welcoming
            home atmosphere.
          </p>

          <button className="mt-8 bg-[#035346] hover:opacity-90 transition text-white px-6 py-4 rounded-xl">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
