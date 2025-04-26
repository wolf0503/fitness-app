// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-400">
          FitPro
        </Link>
        
        <div className="flex gap-8 items-center">
          <Link 
            href="/dashboard" 
            className={`hover:text-indigo-400 transition-colors ${
              pathname === "/dashboard" ? "text-indigo-400" : "text-gray-300"
            }`}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}