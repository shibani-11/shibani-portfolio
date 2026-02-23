import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-dark-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-700 via-dark-900 to-dark-950" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p 
          className="text-accent-400 font-medium mb-4 opacity-0"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.1s forwards' }}
        >
          Hello, I'm
        </p>
        
        <h1 
          className="font-display text-5xl md:text-7xl font-bold text-white mb-4 opacity-0"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards' }}
        >
          {portfolioData.name}
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-gray-400 mb-8 opacity-0"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.3s forwards' }}
        >
          {portfolioData.title}
        </p>
        
        <div 
          className="flex flex-wrap justify-center gap-4 opacity-0"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.4s forwards' }}
        >
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent-400 text-accent-400 rounded-lg hover:bg-accent-400/10 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent-400 text-accent-400 rounded-lg hover:bg-accent-400/10 transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="px-6 py-3 bg-accent-400 text-dark-900 font-medium rounded-lg hover:bg-accent-500 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-accent-400 transition-colors duration-300 opacity-0"
        style={{ animation: 'fadeIn 1s ease-out 0.8s forwards' }}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
