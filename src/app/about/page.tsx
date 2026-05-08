"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";
import { Heart, Target, Zap, Award } from "lucide-react";

const BASE_PATH = '/sakshamtikekar';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="My Journey" 
          subtitle="Started my career in luxury hospitality, where I learned client experience, communication, and execution at high standards. Over time, I transitioned into web development and began building modern websites and AI-powered digital experiences."
          className="max-w-4xl"
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500 mb-6">
                Professional Summary
              </h2>
              <p className="text-lg md:text-xl font-medium leading-relaxed text-white/80 mb-8">
                I now work with technologies like WordPress, React.js, Next.js, and Supabase to create clean, high-conversion web products. Currently looking to grow as a full stack developer within a strong and innovative team.
              </p>

              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500 mb-6">
                Why Hire Me
              </h2>
              <p className="text-xl md:text-2xl font-bold leading-tight text-white mb-8 font-space">
                I combine creative frontend development with real-world business understanding and client-focused thinking. I build modern, responsive, and SEO-focused digital experiences using React, Next.js, WordPress, and AI tools.
              </p>
              
              <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                <h3 className="text-xs font-black uppercase tracking-widest text-white/40 mb-6 border-b border-white/5 pb-4">
                  Technical Architecture
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Frontend</p>
                    <p className="text-sm font-bold text-white/80 uppercase tracking-tighter">React.js, Next.js, HTML, CSS, JavaScript</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Backend</p>
                    <p className="text-sm font-bold text-white/80 uppercase tracking-tighter">Supabase</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">CMS</p>
                    <p className="text-sm font-bold text-white/80 uppercase tracking-tighter">WordPress (SEO, Plugins, Elementor)</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">AI Systems</p>
                    <p className="text-sm font-bold text-white/80 uppercase tracking-tighter">Chatbots, Automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
            <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
               <h3 className="text-2xl font-black mb-6 uppercase tracking-tight font-space text-white">The Service Mindset</h3>
               <p className="text-white/60 leading-relaxed italic mb-8">
                 "My background helps me understand both user experience and execution quality. I’m a fast learner focused on building impactful and scalable web solutions."
               </p>
               <div className="mb-8">
                 <Link 
                   href="/resume.pdf" 
                   target="_blank"
                   className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-500 transition-all uppercase tracking-widest text-xs"
                 >
                   Download Resume
                 </Link>
               </div>
               <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                 <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                   <Image 
                     src={`${BASE_PATH}/saksham.png`}
                     alt="Saksham Tikekar"
                     fill
                     className="object-cover"
                   />
                 </div>
                 <div>
                   <p className="font-bold text-white uppercase tracking-widest text-xs">Saksham Tikekar</p>
                   <p className="text-[10px] text-white/40 uppercase font-mono tracking-tight">Full Stack Developer / Designer / AI Specialist</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
