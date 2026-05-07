"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Logo */}
        <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-xl rounded-sm mb-6 opacity-80 hover:opacity-100 transition-opacity">
          ST
        </div>
        
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-gray-500 mb-8">
            Digital Architect & Producer
          </p>
          
          <div className="flex gap-10 mb-10 justify-center">
            <Link href="/" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Home</Link>
            <Link href="/about" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">About</Link>
            <Link href="/projects" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Work</Link>
            <Link href="/contact" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Contact</Link>
          </div>
          
          <p className="text-xs text-gray-400 font-medium">
            © {new Date().getFullYear()} Saksham Tikekar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
