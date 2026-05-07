"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export default function ProjectCard({ title, description, tech, link, image }: ProjectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 hover:border-accent/50 transition-all"
    >
      <div className="aspect-[16/10] relative overflow-hidden">
        {/* Project Image */}
        <Image
          src={`/sakshamtikekar${image}`}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
        
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-md">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all font-space"
          >
            Launch Project <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tech.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[8px] uppercase tracking-widest font-bold rounded-sm border border-blue-500/20">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-2 tracking-tight font-space">{title}</h3>
        <p className="text-white/60 text-[11px] mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-500 group-hover:text-blue-400 uppercase tracking-widest transition-colors font-space"
        >
          View Case Study <ArrowRight size={12} />
        </a>
      </div>
    </motion.div>
  );
}
