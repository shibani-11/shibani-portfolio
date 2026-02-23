import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { name, email, linkedin, github } = portfolioData;

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-dark-800/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 relative inline-block">
          Get In Touch
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent-400 rounded-full" />
        </h2>
        
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${email}`}
            className="px-8 py-4 bg-accent-400 text-dark-900 font-semibold rounded-lg hover:bg-accent-500 transition-all duration-300 hover:scale-105"
          >
            Say Hello
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gray-600 text-white rounded-lg hover:border-accent-400 hover:text-accent-400 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gray-600 text-white rounded-lg hover:border-accent-400 hover:text-accent-400 transition-all duration-300"
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
