const Education = () => {
  const education = [
    {
      degree: "Master of Science – Information Technology and Management",
      school: "The University of Texas at Dallas",
      period: "August 2024 - May 2026",
      details: "GPA: 3.767",
    },
    {
      degree: "Bachelor of Engineering – Telecommunication Engineering",
      school: "Visvesvaraya Technological University, India",
      period: "June 2013 - May 2017",
      details: "",
    },
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A0F1C]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">Education</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4 mb-10 rounded" />
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-[#3B82F6]"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#3B82F6]" />
              <div className="bg-white/5 border border-blue-500/20 rounded-xl p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-[#3B82F6] mt-1">{edu.school}</p>
                <p className="text-gray-400 text-sm mt-2">{edu.period}</p>
                {edu.details && (
                  <p className="text-gray-500 text-sm mt-1">{edu.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
