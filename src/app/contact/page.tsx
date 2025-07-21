import React from "react";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-12 gap-6">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="flex flex-col gap-3 text-lg">
        {/* TODO: Update with your real contact info */}
        <a href="https://github.com/tusharpamnani" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">GitHub</a>
        <a href="https://linkedin.com/in/tushar-pamnani" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">LinkedIn</a>
        <a href="mailto:0xtushar.pamnani@gmail.com" className="underline text-blue-600 dark:text-blue-400">0xtushar.pamnani@gmail.com</a>
      </div>
    </main>
  );
} 