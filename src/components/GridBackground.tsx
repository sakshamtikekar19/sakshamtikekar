"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GridBackground() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const rotateParallax = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scaleParallax = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-[#020202]">
      {/* Mesh Gradient */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]" />
      
      {/* Global Honeycomb Pattern with High-Impact Parallax */}
      <motion.div 
        style={{ y: yParallax, rotate: rotateParallax, scale: scaleParallax }}
        className="absolute inset-[-20%] opacity-[0.08]"
      >
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="global-hex" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M30 0 L60 17.3 L60 34.6 L30 52 L0 34.6 L0 17.3 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#global-hex)" className="text-blue-500" />
        </svg>
      </motion.div>

      {/* Subtle Binary Streams */}
      <div className="absolute inset-0 opacity-[0.03] select-none font-mono text-[9px] text-blue-400">
        <BinaryStreams count={6} />
      </div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

function BinaryStreams({ count }: { count: number }) {
  const [mounted, setMounted] = useState(false);
  const streams = useMemo(() => {
    return [...Array(count)].map(() => [...Array(60)].map(() => Math.round(Math.random())).join(''));
  }, [count]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {streams.map((stream, i) => (
        <motion.div
          key={i}
          initial={{ y: -200 }}
          animate={{ y: 1200 }}
          transition={{ duration: Math.random() * 15 + 20, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
          className="absolute whitespace-nowrap"
          style={{ left: `${i * 20}%` }}
        >
          {stream}
        </motion.div>
      ))}
    </>
  );
}
