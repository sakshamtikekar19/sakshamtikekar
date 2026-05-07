"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export default function ProjectCard({ title, description, tech, link, image }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card/50 hover:border-accent/50 transition-all"
    >
      <div className="aspect-video relative overflow-hidden">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-black flex items-center justify-center p-12">
           <h3 className="text-4xl font-black opacity-20 select-none">{title}</h3>
        </div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all"
          >
            Visit Website <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-muted text-[10px] uppercase tracking-widest font-bold rounded-full text-muted-foreground border border-border">
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent font-bold group-hover:underline"
        >
          View Case Study <ArrowRight size={18} />
        </a>
      </div>
    </motion.div>
  );
}
