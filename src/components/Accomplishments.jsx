const Accomplishments = () => {
  const accomplishments = [
    {
      title: "Nash Leadership Fellow",
      organization: "UTD Naveen Jindal School of Management",
    },
    {
      title: "Menka Hemrajani Scholarship",
      organization: "UTD Naveen Jindal School of Management",
    },
    {
      title: "ITM Impact Award",
      organization: "Naveen Jindal School of Management",
    },
    {
      title: "President",
      organization: "Information Technology & Management Student Leadership Council",
    },
    {
      title: "General Secretary",
      organization: "Indian Students Association, UTD",
    },
  ];

  return (
    <section id="accomplishments" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A0F1C]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">Accomplishments</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4 mb-10 rounded" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accomplishments.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-blue-500/20 rounded-xl p-6 text-center transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-[#3B82F6] text-sm mt-2">{item.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
