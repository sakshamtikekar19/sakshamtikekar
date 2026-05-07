"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SystemHUD() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");
  const [fps, setFps] = useState(60);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setFps(Math.floor(Math.random() * (62 - 58 + 1) + 58));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 pointer-events-none hidden md:block">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col gap-1 font-mono text-[7px] uppercase tracking-[0.2em] text-blue-500/60"
      >
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
          <span>Core_System: Active</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Latency: 12ms</span>
          <span>FPS: {fps}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Rel_Path: /sakshamtikekar</span>
          <span>Time: {time}</span>
        </div>
        <div className="w-full h-[1px] bg-blue-500/20 mt-1" />
        <div className="flex justify-between text-[6px] text-blue-400/40">
          <span>Architecture: Blueprint_V4.0</span>
          <span>Auth: Verified</span>
        </div>
      </motion.div>
    </div>
  );
}
