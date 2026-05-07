"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, MessageCircle, Mail } from "lucide-react";

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
          <Link href="https://linkedin.com" target="_blank" className="text-white/40 hover:text-blue-500 transition-colors"><Linkedin size={20} /></Link>
          <Link href="https://wa.me/your-number" target="_blank" className="text-white/40 hover:text-green-500 transition-colors"><MessageCircle size={20} /></Link>
          <Link href="mailto:your@email.com" className="text-white/40 hover:text-white transition-colors"><Mail size={20} /></Link>
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
              <Link href="https://linkedin.com" target="_blank" className="text-white/40 hover:text-blue-500"><Linkedin size={24} /></Link>
              <Link href="https://wa.me/your-number" target="_blank" className="text-white/40 hover:text-green-500"><MessageCircle size={24} /></Link>
              <Link href="mailto:your@email.com" className="text-white/40 hover:text-white"><Mail size={24} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
