import { useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useMemo(() => {
    return async (engine) => {
      await loadSlim(engine);
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 pointer-events-none"
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
            distance: 100,
            opacity: 0.2,
            width: 0.5,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
