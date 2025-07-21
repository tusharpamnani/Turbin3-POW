import React from "react";

const weeks = [
  {
    title: "Week 1.1 and 1.2: SPL Token Minting",
    description: "Understood the concept of spl tokens on solana. Initialized, Added Metadata, Minted SPL tokens on Solana.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/03.%20Solana-Starter/ts/cluster1", // TODO: Add repo link
    frontendRepo: undefined,
    liveDemo: "https://explorer.solana.com/address/4JFrxZF8kN1CS5NVKG4zPbKEKs8v5PkMfARM5Fj1wpDA?cluster=devnet",
    screenshot: "/screenshots/spl_token.png"
  },
  {
    title: "Week 1.3: NFT Minting & Rug Day",
    description: "Understood the Metaplex tools for NFT. Initialized, Added Metadata to the NFT and Minted NFTs on Solana.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/03.%20Solana-Starter/ts/cluster1", // TODO: Add repo link
    frontendRepo: undefined,
    liveDemo: "https://solscan.io/account/FFEAz8WuiepkRAw3wPQt6HC5gUqwfGyUXiNhQ57Dvg9s?cluster=devnet",
    screenshot: "/screenshots/nft.png"
  },
  {
    title: "Week 2.1: Vault",
    description: "Understood what a vault actually is and how it works. Built the smart contract using anchor. Added typescript tests to it.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/04.%20Vault", // TODO: Add repo link
    frontendRepo: undefined,
    liveDemo: "https://explorer.solana.com/address/heiD65tNjyZVxNARhVVsrsa1HPzFThbaxoAmiyV1vzd?cluster=devnet",
    screenshot: "/screenshots/vault.png"
  },
  {
    title: "Unofficial: Vault Frontend",
    description: "Built a React frontend for the Vault smart contract, allowing users to interact with the contract via a web UI.",
    smartContractRepo: undefined,
    frontendRepo: "https://github.com/tusharpamnani/solana-vault", // TODO: Add frontend repo link
    liveDemo: "solana-vault-phi.vercel.app",
    screenshot: "/screenshots/vault_frontend.png"
  },
  {
    title: "Week 2.2: Escrow",
    description: "Understood what an escrow is, how s it different from a vault. Implemented the escrow contract using anchor. Added Typescript tests for it.",
    smartContractRepo: "https://github.com/tusharpamnani/anchor_escrow", // TODO: Add repo link
    frontendRepo: undefined,
    liveDemo: "https://explorer.solana.com/address/EPrDxNJ1ZzAd7sNWZu4eziCM8hAFtH8WVtrUXhv3yLZM?cluster=devnet",
    screenshot: "/screenshots/escrow.png"
  },
  {
    title: "Unofficial: Escrow Frontend",
    description: "Developed a frontend for the Escrow contract, providing a user-friendly interface for escrow operations.",
    smartContractRepo: "https://github.com/tusharpamnani/anchor_escrow",
    frontendRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/05.%20Escrow/escrow-frontend", // TODO: Add frontend repo link
    liveDemo: "solana-escrow-eta.vercel.app",
    screenshot: "/screenshots/escrow_frontend.png"
  },
  {
    title: "Week 2.3: AMM",
    description: "Explored AMMs and combined the knowledge of vault and escrow to build the Automated Market Maker smart contract using anchor.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/06.%20AMM", // TODO: Add repo link
    frontendRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/06.%20AMM/amm-frontend",
    liveDemo: undefined,
    screenshot: "/screenshots/amm.png"
  },
  {
    title: "Unofficial: AMM Frontend",
    description: "Created a frontend for the Automated Market Maker, enabling users to swap tokens and provide liquidity.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/06.%20AMM", // TODO: Add repo link
    frontendRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/06.%20AMM/amm-frontend",
    liveDemo: undefined,
    screenshot: undefined
  },
  {
    title: "Week 3.1: NFT Staking",
    description: "Using the knowledge of nfts from week 1, escrows from week 2, built an NFT Staking smart contract using anchor.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/08.%20nft_staking", // TODO: Add repo link
    frontendRepo: undefined,
    liveDemo: "https://explorer.solana.com/address/BZ9CvYyMP6yHpE5DxDgPg9pXjq2U7u4jb6tEXjotcu29?cluster=devnet",
    screenshot: "/screenshots/nft_staking.png"
  },
  {
    title: "Week 3.3: NFT Marketplace",
    description: "Using the knowledge of nfts and escrows from week 2, built an nft marketplace contract using anchor.",
    smartContractRepo: "https://github.com/tusharpamnani/Q3_2025_Builder_TusharPamnani/tree/main/09.%20marketplace", // TODO: Add repo link
    frontendRepo: undefined,
    liveDemo: "https://explorer.solana.com/address/WEfsSiB54VwHw1cYVgPfvpX8X4TxPnsPSAMmWTTw33H?cluster=devnet",
    screenshot: "/screenshots/marketplace.png"
  },
  {
    title: "Unofficial: Vault Contract in Pinocchio",
    description: "Implemented the Vault smart contract using Pinocchio, an advanced language for Solana, as part of the advanced Turbin3 cohort.",
    smartContractRepo: "https://github.com/tusharpamnani/pinnochio-vault", // TODO: Add Pinocchio contract repo link
    frontendRepo: undefined,
    liveDemo: undefined,
    screenshot: undefined
  }
];

export default function JourneyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Cohort Journey</h2>
      <ol className="space-y-8">
        {weeks.map((week, idx) => (
          <li key={idx} className="border-l-4 border-blue-500 pl-4 pb-4">
            <h3 className="text-xl font-semibold">{week.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{week.description}</p>
            <div className="flex flex-wrap gap-4 text-sm mb-2">
              {week.smartContractRepo && (
                <a href={week.smartContractRepo} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">Smart Contract Repo</a>
              )}
              {week.frontendRepo && (
                <a href={week.frontendRepo} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">Frontend Repo</a>
              )}
              {week.liveDemo && (
                <a href={week.liveDemo} target="_blank" rel="noopener noreferrer" className="underline text-green-600 dark:text-green-400">Live Demo</a>
              )}
            </div>
            {/* Screenshot placeholder */}
            {week.screenshot ? (
              <img src={week.screenshot} alt="Screenshot" className="rounded border w-full max-w-md" />
            ) : null}
          </li>
        ))}
      </ol>
    </main>
  );
} 