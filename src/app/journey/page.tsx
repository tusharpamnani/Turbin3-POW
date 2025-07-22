import React from "react";

const weeks = [
  {
    title: "Week 1.1 and 1.2: SPL Token Minting",
    description: "Understood the concept of spl tokens on solana. Initialized, Added Metadata, Minted SPL tokens on Solana.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/03.%20Solana-Starter/ts/cluster1",
    frontendRepo: undefined,
    liveDemo: "https://explorer.solana.com/address/4JFrxZF8kN1CS5NVKG4zPbKEKs8v5PkMfARM5Fj1wpDA?cluster=devnet",
    screenshot: "/screenshots/spl_token.png"
  },
  {
    title: "Week 1.3: NFT Minting & Rug Day",
    description: "Understood the Metaplex tools for NFT. Initialized, Added Metadata to the NFT and Minted NFTs on Solana.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/03.%20Solana-Starter/ts/cluster1",
    frontendRepo: undefined,
    liveDemo: "https://solscan.io/account/FFEAz8WuiepkRAw3wPQt6HC5gUqwfGyUXiNhQ57Dvg9s?cluster=devnet",
    screenshot: "/screenshots/nft.png"
  },
  {
    title: "Week 2.1: Vault",
    description: "Understood what a vault actually is and how it works. Built the smart contract using anchor. Added typescript tests to it.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/04.%20Vault",
    frontendRepo: undefined,
    liveDemo: "https://explorer.solana.com/address/heiD65tNjyZVxNARhVVsrsa1HPzFThbaxoAmiyV1vzd?cluster=devnet",
    screenshot: "/screenshots/vault.png"
  },
  {
    title: "Unofficial: Vault Frontend",
    description: "Built a React frontend for the Vault smart contract, allowing users to interact with the contract via a web UI.",
    smartContractRepo: undefined,
    frontendRepo: "https://github.com/tusharpamnani/solana-vault",
    liveDemo: "solana-vault-phi.vercel.app",
    screenshot: "/screenshots/vault_frontend.png"
  },
  {
    title: "Week 2.2: Escrow",
    description: "Understood what an escrow is, how s it different from a vault. Implemented the escrow contract using anchor. Added Typescript tests for it.",
    smartContractRepo: "https://github.com/tusharpamnani/anchor_escrow",
    frontendRepo: undefined,
    liveDemo: "https://explorer.solana.com/address/EPrDxNJ1ZzAd7sNWZu4eziCM8hAFtH8WVtrUXhv3yLZM?cluster=devnet",
    screenshot: "/screenshots/escrow.png"
  },
  {
    title: "Unofficial: Escrow Frontend",
    description: "Developed a frontend for the Escrow contract, providing a user-friendly interface for escrow operations.",
    smartContractRepo: "https://github.com/tusharpamnani/anchor_escrow",
    frontendRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/05.%20Escrow/escrow-frontend",
    liveDemo: "solana-escrow-eta.vercel.app",
    screenshot: "/screenshots/escrow_frontend.png"
  },
  {
    title: "Week 2.3: AMM",
    description: "Explored AMMs and combined the knowledge of vault and escrow to build the Automated Market Maker smart contract using anchor.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/06.%20AMM",
    frontendRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/06.%20AMM/amm-frontend",
    liveDemo: undefined,
    screenshot: "/screenshots/amm.png"
  },
  {
    title: "Unofficial: AMM Frontend",
    description: "Created a frontend for the Automated Market Maker, enabling users to swap tokens and provide liquidity.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/06.%20AMM",
    frontendRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/06.%20AMM/amm-frontend",
    liveDemo: undefined,
    screenshot: undefined
  },
  {
    title: "Week 3.1: NFT Staking",
    description: "Using the knowledge of nfts from week 1, escrows from week 2, built an NFT Staking smart contract using anchor.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/08.%20nft_staking",
    frontendRepo: undefined,
    liveDemo: "https://explorer.solana.com/address/BZ9CvYyMP6yHpE5DxDgPg9pXjq2U7u4jb6tEXjotcu29?cluster=devnet",
    screenshot: "/screenshots/nft_staking.png"
  },
  {
    title: "Week 3.3: NFT Marketplace",
    description: "Using the knowledge of nfts and escrows from week 2, built an nft marketplace contract using anchor.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/09.%20marketplace",
    frontendRepo: undefined,
    liveDemo: "https://explorer.solana.com/address/WEfsSiB54VwHw1cYVgPfvpX8X4TxPnsPSAMmWTTw33H?cluster=devnet",
    screenshot: "/screenshots/marketplace.png"
  },
  {
    title: "Unofficial: Vault Contract in Pinocchio",
    description: "Implemented the Vault smart contract using Pinocchio, an advanced language for Solana, as part of the advanced Turbin3 cohort.",
    smartContractRepo: "https://github.com/tusharpamnani/pinnochio-vault",
    frontendRepo: undefined,
    liveDemo: undefined,
    screenshot: undefined
  }
];

export default function JourneyPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light text-white mb-4">
            Development Journey
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive timeline of blockchain development milestones and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200"></div>
          
          <div className="space-y-12">
            {weeks.map((week, idx) => (
              <div key={idx} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-4 h-4 bg-white border-2 border-slate-900 rounded-full"></div>
                </div>
                
                {/* Content card */}
                <div className="flex-1 bg-white rounded-lg border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-xl font-medium text-slate-900 mb-3">
                    {week.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {week.description}
                  </p>
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {week.smartContractRepo && (
                      <a 
                        href={week.smartContractRepo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors duration-150"
                      >
                        Smart Contract
                      </a>
                    )}
                    
                    {week.frontendRepo && (
                      <a 
                        href={week.frontendRepo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors duration-150"
                      >
                        Frontend
                      </a>
                    )}
                    
                    {week.liveDemo && (
                      <a 
                        href={week.liveDemo.startsWith('http') ? week.liveDemo : `https://${week.liveDemo}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-md hover:bg-emerald-100 transition-colors duration-150"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                  
                  {/* Screenshot placeholder */}
                  {week.screenshot && (
                    <div className="mt-6 pt-6 border-t border-slate-100">
                      <div className="w-full h-full bg-slate-100 rounded-lg overflow-hidden">
                        <img 
                          src={week.screenshot} 
                          alt={`${week.title} screenshot`} 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm">
            Journey documented with precision and attention to detail
          </p>
        </div>
      </div>
    </div>
  );
}