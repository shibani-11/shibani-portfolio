import { portfolioData } from '../data/portfolio';

const Section = ({ children, className = "", id = "" }) => (
  <section 
    id={id} 
    className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}
  >
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent-400 rounded-full" />
  </h2>
);

const About = () => {
  const { about, education } = portfolioData;

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            {about.summary}
          </p>
          
          <p className="text-gray-400 leading-relaxed">
            {about.interests}
          </p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            {about.highlights.map((highlight, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-dark-700 border border-dark-600 rounded-full text-sm text-accent-400"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          {/* Education Card */}
          <div className="bg-dark-700/50 rounded-xl p-6 border border-dark-600">
            <h3 className="text-xl font-semibold text-white mb-2">
              {education.degree}
            </h3>
            <p className="text-accent-400 mb-2">{education.school}</p>
            <p className="text-gray-500 text-sm mb-2">{education.period}</p>
            <p className="text-gray-400 text-sm">GPA: {education.gpa}</p>
          </div>
          
          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-dark-700 border border-dark-600">
              <img 
                src="/assets/images/profile.jpg" 
                alt={portfolioData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 border border-accent-400/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
