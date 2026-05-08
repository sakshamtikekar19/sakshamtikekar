"use client";

import { useState, useEffect } from "react";
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
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState("");
  const [fps, setFps] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setFps(Math.floor(Math.random() * (62 - 58 + 1) + 58));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-6 py-3 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Header HUD - Left Side */}
        <div className="flex flex-col gap-0.5 font-mono text-[7px] md:text-[8px] uppercase tracking-widest text-white leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 bg-blue-600 rounded-full animate-pulse" />
            <span className="font-bold">CORE_SYS: ACTIVE</span>
          </div>
          <div className="flex gap-3 text-[6px] md:text-[7px] font-medium">
            <span>FPS: {fps}</span>
            <span>LAT: 12ms</span>
            <span className="hidden sm:inline">V4.0</span>
          </div>
          <div className="font-black text-[8px] md:text-[9px] mt-0.5 text-blue-500">
            T: {time || "00:00:00"}
          </div>
        </div>

        {/* Nav Links - Desktop Only (Center/Right) */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-bold text-white/70 hover:text-blue-500 transition-colors tracking-tighter uppercase font-space">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="https://www.linkedin.com/in/saksham-tikekar-0778721b9" target="_blank" className="text-white/40 hover:text-blue-500 transition-colors"><LinkedInIcon size={22} /></Link>
          <Link href="https://wa.me/918454069522" target="_blank" className="text-white/40 hover:text-green-500 transition-colors"><MessageCircle size={22} /></Link>
          <Link href="mailto:saksham.tikekar19@gmail.com" className="text-white/40 hover:text-white transition-colors"><Mail size={22} /></Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
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
            className="absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-2xl border-t border-white/5 p-8 flex flex-col items-center gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-extrabold text-white hover:text-blue-500 uppercase tracking-tighter font-space"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-8 pt-6 border-t w-full justify-center border-white/5">
              <Link href="https://www.linkedin.com/in/saksham-tikekar-0778721b9" target="_blank" className="text-white/30 hover:text-blue-500"><LinkedInIcon size={28} /></Link>
              <Link href="https://wa.me/918454069522" target="_blank" className="text-white/30 hover:text-green-500"><MessageCircle size={28} /></Link>
              <Link href="mailto:saksham.tikekar19@gmail.com" className="text-white/30 hover:text-white"><Mail size={28} /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
