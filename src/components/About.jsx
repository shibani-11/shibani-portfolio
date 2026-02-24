import { useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const About = () => {

  const particlesInit = useMemo(() => {
    return async (engine) => {
      await loadSlim(engine);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#0A0F1C] overflow-hidden"
    >

      {/* Particles Background */}
      <Particles
        id="aboutParticles"
        init={particlesInit}
        className="absolute inset-0"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: '#2563EB' },
            shape: { type: 'circle' },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 2 } },
            links: {
              enable: true,
              color: '#2563EB',
              distance: 140,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: 'none',
              outModes: { default: 'bounce' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
            },
            modes: {
              repulse: { distance: 80, duration: 0.3 },
            },
          },
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4 mb-10 rounded" />

        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed text-left">
            I’m an AI/ML enthusiast currently pursuing my Master’s in Information Technology and Management, with a background in Telecommunications Engineering and over 5 years of experience as a Software Engineer – Machine Learning. I specialize in designing and implementing end-to-end ML solutions using Python, SQL, PyTorch, and Scikit-learn, and I’ve recently been exploring Agentic AI systems that can plan, reason, and interact with tools and data sources.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed text-left">
            My work spans building scalable ML pipelines, designing RAG-based systems, developing LLM-powered workflows, and deploying AI-driven applications to production environments. I focus on performance optimization, reliability, and measurable impact.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed text-left">
            I’m really interested in AI engineering roles involving production ML systems, multi-agent orchestration, model optimization, and MLOps infrastructure. I enjoy solving complex problems and building intelligent systems that create real-world value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
