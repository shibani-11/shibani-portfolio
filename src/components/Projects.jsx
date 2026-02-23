import { portfolioData } from '../data/portfolio';

const projectImages = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
];

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A0F1C]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center">Projects</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4 mb-10 rounded" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-[#111827] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:translate-y-[-8px] hover:border-[#3B82F6] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={projectImages[index % projectImages.length]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
                <p className="text-[#3B82F6] text-sm mt-1">{project.tech.join(' • ')}</p>
                <p className="text-gray-400 mt-3 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
