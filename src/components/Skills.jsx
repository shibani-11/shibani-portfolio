import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 px-6 md:px-12 lg:px-24 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 relative inline-block">
          Skills
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent-400 rounded-full" />
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-accent-400 mb-3">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-dark-700 border border-dark-600 rounded-lg text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-accent-400 mb-3">ML/AI</h3>
            <div className="flex flex-wrap gap-2">
              {skills.ml_ai.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-dark-700 border border-dark-600 rounded-lg text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-accent-400 mb-3">Data Engineering</h3>
            <div className="flex flex-wrap gap-2">
              {skills.data_engineering.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-dark-700 border border-dark-600 rounded-lg text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-accent-400 mb-3">Analytics/Visualization</h3>
            <div className="flex flex-wrap gap-2">
              {skills.analytics.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-dark-700 border border-dark-600 rounded-lg text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-accent-400 mb-3">Cloud/Deployment</h3>
            <div className="flex flex-wrap gap-2">
              {skills.cloud_deployment.map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-dark-700 border border-dark-600 rounded-lg text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
