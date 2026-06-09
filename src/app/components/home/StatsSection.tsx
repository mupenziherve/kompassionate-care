export default function StatsSection() {
  const stats = [
    {
      number: "24/7",
      label: "Care Available",
    },
    {
      number: "100%",
      label: "Personalized Care Plans",
    },
    {
      number: "RN",
      label: "Supervised Care",
    },
    {
      number: "365",
      label: "Days of Support",
    },
  ];

  return (
    <section className="py-24 bg-[#035346]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-5xl font-bold text-[#DD844B]">
                {stat.number}
              </h3>

              <p className="mt-3 text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
