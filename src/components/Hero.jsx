import { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Hero = () => {
  const [resumeUrl, setResumeUrl] = useState('#');

  useEffect(() => {
    // Set resume URL from public assets
    setResumeUrl('/assets/ShibaniKumar.pdf');
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #050816 0%, #0B1120 100%)'
        }}
      />
      
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: 'transparent',
              },
            },
            particles: {
              color: {
                value: '#00E0C6',
              },
              links: {
                color: '#00E0C6',
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                outModes: {
                  default: 'bounce',
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
              opacity: {
                value: 0.4,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 2, max: 4 },
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            detectRetina: true,
          }}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Hi, I'm Shibani Kumar
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-3 font-light">
          AI/ML Engineer building scalable and production-validated intelligent systems.
        </p>
        
        <p className="text-lg text-gray-400 mb-10">
          Specializing in LLM workflows, ML evaluation frameworks, and high-performance model deployment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#00E0C6] text-gray-900 font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,224,198,0.5)] hover:brightness-110 transition-all duration-300"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#00E0C6] text-[#00E0C6] font-semibold rounded-lg hover:bg-[#00E0C6]/10 hover:shadow-[0_0_20px_rgba(0,224,198,0.3)] transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
