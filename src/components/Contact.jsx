import ParticlesBackground from './ParticlesBackground';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { name, email, linkedin, github } = portfolioData;

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A0F1C] relative">
      <ParticlesBackground />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4 mb-10 rounded" />
        
        <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${email}`}
            className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300"
          >
            Say Hello
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#3B82F6] text-[#3B82F6] rounded-lg hover:bg-[#3B82F6]/10 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#3B82F6] text-[#3B82F6] rounded-lg hover:bg-[#3B82F6]/10 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
        
        <p className="text-gray-500 text-sm mt-12">
          © {new Date().getFullYear()} {name}. Built with React + Vite + Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
