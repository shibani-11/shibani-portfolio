import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 relative inline-block">
          Projects
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent-400 rounded-full" />
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-dark-700/50 rounded-xl p-6 border border-dark-600 hover:border-accent-400 transition-all duration-300 hover:shadow-lg hover:shadow-accent-400/5"
            >
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              
              {/* Project Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.highlights.map((highlight, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs bg-accent-400/10 text-accent-400 rounded"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs bg-dark-600 text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
