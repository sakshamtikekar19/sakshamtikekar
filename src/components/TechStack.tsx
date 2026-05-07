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
    <section className="py-12 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="Core Technologies" 
          subtitle="System architectural stack optimized for performance and scalability."
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
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
                className="relative group p-4 bg-[#080808]/60 backdrop-blur-md border border-white/5 overflow-hidden"
              >
                {/* Schematic Glow Borders */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Wireframe Icon Container */}
                <div className="relative flex flex-col items-center gap-4">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-3 border border-white/5 rounded-lg group-hover:border-cyan-500/40 transition-colors duration-500">
                      <Icon 
                        size={20} 
                        className="text-gray-600 group-hover:text-cyan-400 transition-colors duration-500" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <span className="font-extrabold text-[10px] uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                    
                    {/* Technical Metadata */}
                    <div className="flex flex-col items-center opacity-40 group-hover:opacity-80 transition-opacity duration-500 font-mono text-[8px] text-cyan-500/80">
                      <span className="tracking-tighter">{tech.name.toLowerCase().replace(/\s+/g, '_')}_{data.version}</span>
                      <span className="text-[7px] text-orange-500/60 uppercase tracking-widest">Load: {data.load}</span>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-cyan-500/80 transition-colors" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-orange-500/80 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
