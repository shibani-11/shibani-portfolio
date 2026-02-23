import { portfolioData } from '../data/portfolio';

const Leadership = () => {
  const { leadership, awards } = portfolioData;

  return (
    <section id="leadership" className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 relative inline-block">
          Leadership & Awards
          <span className="absolute -bottom-2 left-0 w-16 h-1 bg-accent-400 rounded-full" />
        </h2>
        
        <div className="space-y-6">
          {leadership.map((item) => (
            <div
              key={item.id}
              className="bg-dark-700/50 rounded-xl p-6 border border-dark-600 hover:border-accent-400 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-accent-400 text-sm">
                    {item.organization}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Awards as badges */}
        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-300 mb-4">Additional Recognition</h3>
          <div className="flex flex-wrap gap-3">
            {awards.map((award, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-sm text-gray-300"
              >
                {award}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
