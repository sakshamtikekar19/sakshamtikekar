"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Briefcase, Globe, Mail } from "lucide-react";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Featured", href: "/#featured" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-xl rounded-sm">
            ST
          </div>
          <span className="font-bold text-lg tracking-tight text-black group-hover:text-gray-600 transition-colors">
            Saksham Tikekar
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-5">
          <Link href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-black transition-colors"><Briefcase size={18} /></Link>
          <Link href="https://github.com" target="_blank" className="text-gray-500 hover:text-black transition-colors"><Code2 size={18} /></Link>
          <Link href="#" className="text-gray-500 hover:text-black transition-colors"><Globe size={18} /></Link>
          <Link href="#" className="text-gray-500 hover:text-black transition-colors"><Mail size={18} /></Link>
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
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-8 flex flex-col items-center gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-black hover:text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-6 pt-4 border-t w-full justify-center border-gray-100">
              <Link href="#" className="text-gray-500 hover:text-black"><Briefcase size={24} /></Link>
              <Link href="#" className="text-gray-500 hover:text-black"><Code2 size={24} /></Link>
              <Link href="#" className="text-gray-500 hover:text-black"><Globe size={24} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
