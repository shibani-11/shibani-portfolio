import { useEffect, useMemo } from 'react';
import { portfolioData } from '../data/portfolio';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const particlesInit = useMemo(() => {
    return async (engine) => {
      await loadSlim(engine);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-[#050816] to-[#0B1120]">
      {/* tsParticles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: '#2563EB' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            links: {
              enable: true,
              color: '#2563EB',
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              outModes: { default: 'bounce' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          className="font-hero text-6xl md:text-8xl lg:text-[96px] font-extrabold text-white mb-6 tracking-tight opacity-0 drop-shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.2s forwards' }}
        >
          Hello, I'm Shibani Kumar
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
            className="px-6 py-3 border border-accent-400 text-accent-400 rounded-lg hover:bg-accent-400 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-accent-400 text-accent-400 rounded-lg hover:bg-accent-400 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
          >
            GitHub
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="px-6 py-3 bg-accent-400 text-white font-medium rounded-lg hover:bg-accent-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
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
