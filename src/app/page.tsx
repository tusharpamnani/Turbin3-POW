import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 gap-8">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center">
        Tushar Pamnani – Turbin3 Cohort Proof of Work
      </h1>
      {/* Intro Paragraph (Edit this) */}
      <p className="max-w-xl text-center text-lg text-gray-600 dark:text-gray-300">
        {/* TODO: Replace with your real intro */}
        Welcome! This site documents my journey through the Turbin3 cohort. Explore weekly projects, key learnings, and deliverables as I build in public.
      </p>
      {/* Social Links */}
      <div className="flex gap-6 mt-2">
        {/* TODO: Update your real links below */}
        <a href="https://github.com/tusharpamnani" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 dark:text-blue-400">GitHub</a>
        <a href="https://linkedin.com/in/tushar-pamnani" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 dark:text-blue-400">LinkedIn</a>
      </div>
    </main>
  );
}
