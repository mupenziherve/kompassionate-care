export default function ContactSection() {
  return (
    <section className="py-24 bg-[#035346] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="uppercase tracking-wider text-[#DD844B] font-semibold">
              Contact Us
            </span>

            <h2 className="mt-4 text-4xl font-bold">Schedule a Tour Today</h2>

            <p className="mt-6 text-gray-200">
              We would be honored to answer your questions and help you explore
              care options for your loved one.
            </p>

            <div className="mt-10 space-y-4">
              <p>📍 5110 SE Drake Rd, Hillsboro OR, 97123</p>

              <p>📞 +1 (971) 371-1444</p>

              <p>✉️ info@kompassionatecare.com</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 text-black">
            <h3 className="text-2xl font-bold text-[#035346]">
              Request Information
            </h3>

            <form className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl px-4 py-3"
              />

              <textarea
                rows={5}
                placeholder="Tell us how we can help..."
                className="w-full border rounded-xl px-4 py-3"
              />

              <button
                type="submit"
                className="w-full bg-[#DD844B] text-white py-4 rounded-xl font-medium"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
