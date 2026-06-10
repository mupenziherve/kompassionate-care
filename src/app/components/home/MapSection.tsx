export default function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#DD844B] uppercase font-semibold">
            Our Location
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#035346]">
            Visit Kompassionate Care
          </h2>

          <p className="mt-4 text-gray-600">
            5110 SE Drake Rd, Hillsboro OR, 97123
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <iframe
            src="https://www.google.com/maps?q=5110+SE+Drake+Rd,+Hillsboro,+OR+97123&output=embed"
            width="100%"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
