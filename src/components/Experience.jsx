import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A0F1C]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">Experience</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4 mb-10 rounded" />
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-[#3B82F6]"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#3B82F6]" />
              <div className="bg-white/5 border border-blue-500/20 rounded-xl p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                <h3 className="text-xl font-semibold text-[#3B82F6]">{exp.title}</h3>
                <p className="text-white font-bold mt-1">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-gray-300 text-sm flex items-start">
                      <span className="text-[#3B82F6] mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
