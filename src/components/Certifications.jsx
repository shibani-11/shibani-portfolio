import ParticlesBackground from './ParticlesBackground';

const Certifications = () => {
  const certifications = [
    {
      name: "Business Analytics and Data Mining",
      issuer: "UT Dallas",
    },
    {
      name: "AWS Cloud Solutions Architect - Associate",
      issuer: "AWS",
    },
    {
      name: "Machine Learning with Python",
      issuer: "IBM",
    },
    {
      name: "Crash Course on Python",
      issuer: "Google",
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A0F1C] relative">
      <ParticlesBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center">Certifications</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4 mb-10 rounded" />
        
        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border border-[#3B82F6] rounded-full px-6 py-3 text-center transition-all duration-300 hover:bg-[#3B82F6]/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <h3 className="text-white font-medium">{cert.name}</h3>
              <p className="text-[#3B82F6] text-sm mt-1">Issued by {cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
