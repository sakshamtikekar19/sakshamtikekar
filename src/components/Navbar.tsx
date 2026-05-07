"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Mail } from "lucide-react";

const BASE_PATH = '/sakshamtikekar';

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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-black/5 px-6 py-4 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Nav Links */}
        <div className="flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold text-black hover:text-blue-600 transition-colors tracking-tight uppercase">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="https://www.linkedin.com/in/saksham-tikekar-0778721b9" target="_blank" className="text-black hover:text-blue-600 transition-colors"><LinkedInIcon size={22} /></Link>
          <Link href="https://wa.me/918454069522" target="_blank" className="text-black hover:text-green-600 transition-colors"><MessageCircle size={22} /></Link>
          <Link href="mailto:saksham.tikekar19@gmail.com" className="text-black hover:text-gray-600 transition-colors"><Mail size={22} /></Link>
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
            className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-t border-black/5 p-8 flex flex-col items-center gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-extrabold text-black hover:text-blue-600 uppercase tracking-tighter"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-8 pt-6 border-t w-full justify-center border-black/5">
              <Link href="https://www.linkedin.com/in/saksham-tikekar-0778721b9" target="_blank" className="text-black/30 hover:text-blue-600"><LinkedInIcon size={28} /></Link>
              <Link href="https://wa.me/918454069522" target="_blank" className="text-black/30 hover:text-green-600"><MessageCircle size={28} /></Link>
              <Link href="mailto:saksham.tikekar19@gmail.com" className="text-black/30 hover:text-black"><Mail size={28} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
