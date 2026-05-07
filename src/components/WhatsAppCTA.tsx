"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const whatsappUrl = "https://wa.me/918454069522?text=Hello%20Saksham,%20I'm%20interested%20in%20your%20services.%20Could%20you%20share%20more%20info%20about%20your%20availability%20for%20a%20project?";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-[#080808]/80 backdrop-blur-md border border-cyan-500/30 rounded-lg group overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.1)]"
    >
      {/* Blueprint Glow Effect */}
      <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-cyan-500/50" />
      <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-cyan-500/50" />

      <MessageCircle 
        size={20} 
        className="text-cyan-400 group-hover:text-white transition-colors duration-300 relative z-10" 
      />
      
      {/* Tooltip on hover */}
      <div className="absolute right-full mr-4 px-3 py-1.5 bg-[#080808]/90 border border-white/10 rounded text-[9px] font-bold uppercase tracking-widest text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Availability Check
      </div>
    </motion.a>
  );
}
