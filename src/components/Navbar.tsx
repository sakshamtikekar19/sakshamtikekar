"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Mail } from "lucide-react";

const LinkedInIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Featured", href: "/#featured" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black text-xl rounded-sm">
            ST
          </div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-blue-500 transition-colors">
            Saksham Tikekar
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-semibold text-white/60 hover:text-white transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="https://www.linkedin.com/in/saksham-tikekar-0778721b9" target="_blank" className="text-white/40 hover:text-blue-500 transition-colors"><LinkedInIcon size={20} /></Link>
          <Link href="https://wa.me/918454069522" target="_blank" className="text-white/40 hover:text-green-500 transition-colors"><MessageCircle size={20} /></Link>
          <Link href="mailto:saksham.tikekar19@gmail.com" className="text-white/40 hover:text-white transition-colors"><Mail size={20} /></Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-xl border-t border-white/5 p-8 flex flex-col items-center gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-white hover:text-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-6 pt-4 border-t w-full justify-center border-white/10">
              <Link href="https://www.linkedin.com/in/saksham-tikekar-0778721b9" target="_blank" className="text-white/40 hover:text-blue-500"><LinkedInIcon size={24} /></Link>
              <Link href="https://wa.me/918454069522" target="_blank" className="text-white/40 hover:text-green-500"><MessageCircle size={24} /></Link>
              <Link href="mailto:saksham.tikekar19@gmail.com" className="text-white/40 hover:text-white"><Mail size={24} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
