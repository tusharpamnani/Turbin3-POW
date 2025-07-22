export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl font-light text-white mb-6 tracking-tight">
              Tushar Pamnani
            </h1>
            <div className="w-24 h-0.5 bg-slate-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 font-light">
              Turbin3 Cohort Builder
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-slate-400 leading-relaxed">
              Welcome to my development journey through the Turbin3 cohort. This portfolio showcases 
              my progression from fundamental Solana concepts to advanced DeFi protocols, documenting 
              each milestone with precision and detail.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/tusharpamnani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium"
            >
              GitHub Profile
            </a>
            <a 
              href="https://linkedin.com/in/tushar-pamnani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-lg border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-emerald-600 rounded"></div>
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Smart Contracts</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Built comprehensive Solana programs including vaults, escrows, AMMs, and NFT utilities using Anchor framework.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Frontend Development</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Created React-based interfaces for blockchain interactions, providing seamless user experiences for complex DeFi operations.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 bg-amber-600 rounded"></div>
            </div>
            <h3 className="text-lg font-medium text-slate-900 mb-2">Testing & Deployment</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Implemented comprehensive TypeScript testing suites and deployed contracts to Solana devnet with proper validation.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-900 rounded-lg p-12 text-white text-center">
          <h3 className="text-2xl font-light mb-8">Journey Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-light text-emerald-400 mb-2">11</div>
              <div className="text-slate-300 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-light text-blue-400 mb-2">6</div>
              <div className="text-slate-300 text-sm">Frontend Interfaces</div>
            </div>
            <div>
              <div className="text-3xl font-light text-amber-400 mb-2">5</div>
              <div className="text-slate-300 text-sm">Smart Contracts</div>
            </div>
            <div>
              <div className="text-3xl font-light text-purple-400 mb-2">3</div>
              <div className="text-slate-300 text-sm">Weeks Intensive</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-slate-300 mb-8 text-lg">
            Explore the complete development journey and technical implementations
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200 font-medium">
              View Journey
            </button>
            <button className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200 font-medium">
              Read Learnings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}