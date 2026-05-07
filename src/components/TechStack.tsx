"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import { 
  Code2, 
  Globe, 
  Database, 
  Search, 
  Bot, 
  Zap,
  Terminal,
  Cpu
} from "lucide-react";

const iconMap: Record<string, any> = {
  react: Code2,
  nextjs: Zap,
  typescript: Terminal,
  tailwind: Cpu,
  supabase: Database,
  wordpress: Globe,
  bot: Bot,
  search: Search,
};

const techData: Record<string, { version: string; load: string }> = {
  "React.js": { version: "v18.2.0", load: "100%" },
  "Next.js": { version: "v14.0.4", load: "98%" },
  "TypeScript": { version: "v5.3.3", load: "100%" },
  "Tailwind CSS": { version: "v3.4.0", load: "100%" },
  "Supabase": { version: "v2.39.0", load: "94%" },
  "WordPress": { version: "v6.4.2", load: "100%" },
  "AI Automation": { version: "v2.1.0", load: "88%" },
  "SEO": { version: "v4.2.1", load: "96%" },
};

export default function TechStack() {
  return (
    <section className="py-32 px-6 bg-[#020202] relative overflow-hidden">
      {/* Digital Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M25 0 L50 14.4 L50 28.8 L25 43.4 L0 28.8 L0 14.4 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" className="text-blue-500" />
        </svg>
      </div>

      {/* Binary Streams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03] select-none font-mono text-[10px] leading-none text-blue-400">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100 }}
            animate={{ y: 1000 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
            className="absolute whitespace-nowrap"
            style={{ left: `${i * 12}%` }}
          >
            {[...Array(50)].map(() => Math.round(Math.random())).join('')}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="Core Technologies" 
          subtitle="System architectural stack optimized for performance and scalability."
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {portfolioData.techStack.map((tech, index) => {
            const Icon = iconMap[tech.icon] || Code2;
            const data = techData[tech.name] || { version: "v1.0.0", load: "100%" };
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group p-8 bg-[#080808]/40 backdrop-blur-sm border border-white/5 overflow-hidden"
              >
                {/* Schematic Glow Borders */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Wireframe Icon Container */}
                <div className="relative flex flex-col items-center gap-6">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    {/* Glowing Wireframe Effect */}
                    <div className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-5 border border-white/5 rounded-lg group-hover:border-cyan-500/50 transition-colors duration-500">
                      <Icon 
                        size={32} 
                        className="text-gray-600 group-hover:text-cyan-400 transition-colors duration-500 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <span className="font-extrabold text-[11px] uppercase tracking-[0.25em] text-gray-400 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                    
                    {/* Technical Metadata */}
                    <div className="flex flex-col items-center opacity-40 group-hover:opacity-80 transition-opacity duration-500 font-mono text-[9px] text-cyan-500/80">
                      <span className="tracking-tighter">{tech.name.toLowerCase().replace(/\s+/g, '_')}_{data.version}</span>
                      <span className="text-[8px] text-orange-500/60 uppercase tracking-widest mt-1">Load Status: {data.load}</span>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-cyan-500/80 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-orange-500/80 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
