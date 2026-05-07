"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import { 
  Code2, 
  Globe, 
  Cpu, 
  Layout, 
  Database, 
  Search, 
  Bot, 
  Zap 
} from "lucide-react";

const iconMap: Record<string, any> = {
  react: Code2,
  nextjs: Zap,
  typescript: Code2,
  tailwind: Layout,
  supabase: Database,
  wordpress: Globe,
  bot: Bot,
  search: Search,
};

export default function TechStack() {
  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Core Technologies" 
          subtitle="A modern stack chosen for performance, scalability, and exceptional developer experience."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {portfolioData.techStack.map((tech, index) => {
            const Icon = iconMap[tech.icon] || Code2;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center gap-6 p-10 rounded-sm border border-white/5 bg-[#0A0A0A] hover:border-blue-500/50 transition-all group"
              >
                <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon size={24} className="text-gray-500 group-hover:text-white transition-colors" />
                </div>
                <span className="font-black text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
