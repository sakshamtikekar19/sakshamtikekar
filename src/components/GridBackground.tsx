"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GridBackground() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-[#020202]">
      {/* Mesh Gradient */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]" />
      
      {/* Global Honeycomb Pattern with Parallax */}
      <motion.div 
        style={{ y: yParallax, rotate: rotateParallax }}
        className="absolute inset-[-10%] opacity-[0.04]"
      >
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="global-hex" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <path d="M25 0 L50 14.4 L50 28.8 L25 43.4 L0 28.8 L0 14.4 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#global-hex)" className="text-blue-500" />
        </svg>
      </motion.div>

      {/* Subtle Binary Streams */}
      <div className="absolute inset-0 opacity-[0.02] select-none font-mono text-[9px] text-blue-400">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -200 }}
            animate={{ y: 1200 }}
            transition={{ duration: Math.random() * 15 + 20, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
            className="absolute whitespace-nowrap"
            style={{ left: `${i * 20}%` }}
          >
            {[...Array(60)].map(() => Math.round(Math.random())).join('')}
          </motion.div>
        ))}
      </div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
