import { portfolioData } from '../data/portfolio';

const Research = () => {
  const { research } = portfolioData;

  return (
    <section id="research" className="py-20 px-6 md:px-12 lg:px-24 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 relative inline-block">
          Research
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent-400 rounded-full" />
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {research.map((item) => (
            <div
              key={item.id}
              className="bg-dark-700/50 rounded-xl p-6 border border-dark-600 hover:border-accent-400 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-gray-400 mb-4">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs bg-dark-600 text-accent-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
