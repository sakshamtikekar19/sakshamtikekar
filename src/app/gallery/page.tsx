"use client";

import { motion } from "framer-motion";
import { Search, Maximize2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const galleryImages = [
  { id: 1, title: "Fitness Landing Page", category: "UI/UX", placeholder: "Flex Fitness" },
  { id: 2, title: "Clinic Service Page", category: "Web Design", placeholder: "Sonal Shah" },
  { id: 3, title: "AI Chatbot Interface", category: "Development", placeholder: "AI Support" },
  { id: 4, title: "E-commerce Checkout", category: "UI/UX", placeholder: "Store Flow" },
  { id: 5, title: "Dashboard Analytics", category: "Development", placeholder: "Admin Panel" },
  { id: 6, title: "Mobile Portfolio App", category: "Mobile", placeholder: "App Design" },
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Visual Gallery" 
          subtitle="A curated collection of visual snapshots and design details from my various projects."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-card border border-border"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                 <span className="text-3xl font-black opacity-10">{item.placeholder}</span>
              </div>
              
              <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center text-white backdrop-blur-sm">
                <Maximize2 size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
