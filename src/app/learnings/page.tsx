import React from "react";

export default function LearningsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Learnings & Reflections</h2>
      {/* Key Takeaways */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Key Takeaways</h3>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Hands-on experience with SPL token minting and metadata on Solana.</li>
          <li>Learned to use Metaplex tools for NFT creation and management.</li>
          <li>Built and tested smart contracts for vaults, escrows, and AMMs using Anchor.</li>
          <li>Applied previous knowledge to develop advanced contracts like NFT staking and marketplaces.</li>
          <li>Gained confidence in writing, testing, and deploying Solana programs.</li>
        </ul>
      </section>
      {/* Challenges */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Challenges</h3>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Understanding the differences and use-cases for vaults vs. escrows.</li>
          <li>Debugging and testing complex smart contract logic in Anchor.</li>
          <li>Integrating multiple concepts (NFTs, escrows, AMMs) into larger projects.</li>
          <li>Managing on-chain state and metadata efficiently.</li>
        </ul>
      </section>
      {/* Skills Gained */}
      <section>
        <h3 className="text-lg font-semibold mb-2">Skills Gained</h3>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
          <li>Solana program development with Anchor.</li>
          <li>Typescript-based smart contract testing.</li>
          <li>Minting and managing SPL tokens and NFTs.</li>
          <li>Building DeFi primitives: vaults, escrows, AMMs.</li>
          <li>Developing advanced NFT utilities: staking and marketplaces.</li>
        </ul>
      </section>
    </main>
  );
} 