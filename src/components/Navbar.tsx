"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "Cohort Journey" },
  { href: "/learnings", label: "Learnings" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-background/80 backdrop-blur sticky top-0 z-30">
      <div className="max-w-4xl mx-auto flex items-center justify-between py-3">
        {/* Site Title/Logo (edit here) */}
        <Link href="/" className="text-lg font-bold tracking-tight text-foreground hover:opacity-80 transition">
          Tushar Pamnani
        </Link>
        {/* Nav Links */}
        <div className="flex gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 py-1 rounded transition-colors font-medium text-base
                ${pathname === link.href
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}
              `}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 