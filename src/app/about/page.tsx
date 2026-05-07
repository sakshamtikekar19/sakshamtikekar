"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";
import { Heart, Target, Zap, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="My Journey" 
          subtitle="I believe that great software isn't just about code—it's about the experience it provides to the user. My background in luxury hospitality at Taj Hotels taught me the importance of execution, client satisfaction, and attention to detail."
          className="max-w-4xl"
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500 mb-6">
                Professional Summary
              </h2>
              <p className="text-xl md:text-2xl font-bold leading-tight text-white mb-8 font-space">
                Freelance Web Developer with 1+ year of experience building SEO-optimized websites and AI-powered solutions using WordPress, React.js, Next.js, and Supabase. Seeking full-time opportunity for growth and stability.
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
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Tools</p>
                    <p className="text-sm font-bold text-white/80 uppercase tracking-tighter font-mono">GitHub, Vercel, Cursor, Antigravity</p>
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
                 "Transitioning from luxury hospitality at Taj Hotels, I've learned that exceptional software is about frictionless execution. I build digital experiences with a focus on client satisfaction, performance, and the kind of attention to detail that only someone from a high-stakes service background can provide."
               </p>
               <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                 <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-black text-white text-xs">ST</div>
                 <div>
                   <p className="font-bold text-white uppercase tracking-widest text-xs">Saksham Tikekar</p>
                   <p className="text-[10px] text-white/40 uppercase font-mono">Principal Developer / AI Specialist</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
