import React from "react";

const keyTakeaways = [
  "Hands-on experience with SPL token minting and metadata on Solana",
  "Learned to use Metaplex tools for NFT creation and management",
  "Built and tested smart contracts for vaults, escrows, and AMMs using Anchor",
  "Applied previous knowledge to develop advanced contracts like NFT staking and marketplaces",
  "Gained confidence in writing, testing, and deploying Solana programs"
];

const challenges = [
  "Understanding the differences and use-cases for vaults vs. escrows",
  "Debugging and testing complex smart contract logic in Anchor",
  "Integrating multiple concepts (NFTs, escrows, AMMs) into larger projects",
  "Managing on-chain state and metadata efficiently"
];

const skillsGained = [
  "Solana program development with Anchor",
  "Typescript-based smart contract testing",
  "Minting and managing SPL tokens and NFTs",
  "Building DeFi primitives: vaults, escrows, AMMs",
  "Developing advanced NFT utilities: staking and marketplaces"
];

export default function LearningsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-white mb-4">
            Learnings & Reflections
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Key insights, challenges overcome, and skills developed throughout the journey
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {/* Key Takeaways */}
          <section className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-emerald-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-medium text-slate-900">Key Takeaways</h2>
            </div>
            <div className="space-y-4">
              {keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-slate-700 leading-relaxed">{takeaway}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-amber-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-medium text-slate-900">Challenges</h2>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-slate-700 leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Gained */}
          <section className="bg-white rounded-lg border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-2 h-8 bg-blue-500 rounded-full mr-4"></div>
              <h2 className="text-2xl font-medium text-slate-900">Skills Gained</h2>
            </div>
            <div className="space-y-4">
              {skillsGained.map((skill, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <p className="text-slate-700 leading-relaxed">{skill}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900 rounded-lg p-8 text-white">
            <h3 className="text-xl font-medium mb-4">Growth Summary</h3>
            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
              This journey has been transformative, building from foundational token concepts to complex DeFi protocols. 
              Each challenge overcome has contributed to a deeper understanding of blockchain development and 
              the Solana ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}