import ParticlesBackground from './ParticlesBackground';

const About = () => {
  const highlightKeywords = (text) => {
    const keywords = ['AI', 'Machine Learning', 'Python', 'TensorFlow', 'PyTorch'];
    let result = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      result = result.replace(regex, '<span class="text-[#3B82F6]">$1</span>');
    });
    return result;
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0A0F1C] relative">
      <ParticlesBackground />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4 mb-10 rounded" />
        
        <div className="space-y-6">
          <p 
            className="text-lg text-gray-300 leading-relaxed text-left"
            dangerouslySetInnerHTML={{
              __html: highlightKeywords("I'm Shibani Kumar, a results-driven AI and Machine Learning enthusiast currently pursuing my Master's in Information Technology and Management at The University of Texas at Dallas. With a strong foundation in Telecommunication Engineering and hands-on experience building data-driven solutions, I specialize in designing, training, and deploying machine learning models using Python, SQL, and frameworks such as scikit-learn, TensorFlow, and PyTorch.")
            }}
          />
          
          <p className="text-lg text-gray-300 leading-relaxed text-left">
            I am passionate about solving real-world problems through intelligent, data-driven systems—whether it's developing robust predictive models, optimizing end-to-end ML pipelines, or integrating machine learning into scalable products to enable smarter, faster decision-making at scale. I thrive in collaborative, fast-paced environments and I'm eager to contribute to building innovative, customer-centric solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
