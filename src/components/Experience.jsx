import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 relative inline-block">
          Experience
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent-400 rounded-full" />
        </h2>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div 
              key={job.id}
              className="relative pl-8 border-l-2 border-dark-600 hover:border-accent-400 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-dark-700 border-2 border-dark-500 hover:bg-accent-400 hover:border-accent-400 transition-colors duration-300" />
              
              <div className="bg-dark-700/50 rounded-xl p-6 border border-dark-600 hover:border-dark-500 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {job.title}
                    </h3>
                    <p className="text-accent-400">{job.company}</p>
                  </div>
                  <span className="text-gray-500 text-sm whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {job.highlights.map((highlight, idx) => (
                    <li 
                      key={idx} 
                      className="text-gray-400 flex items-start gap-3"
                    >
                      <span className="text-accent-400 mt-1.5">▹</span>
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
