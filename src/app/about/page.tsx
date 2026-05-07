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

        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-accent" /> Why Hire Me?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Transitioning from hospitality to development has given me a unique perspective. I don't just build websites; I build solutions that serve your business goals.
              </p>
              <ul className="space-y-4">
                {[
                  "Strong focus on ROI and conversion",
                  "Excellent client communication skills",
                  "Obsessive attention to UI/UX details",
                  "Fast learner and adaptive problem solver"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Heart className="text-accent" /> Skills & Mindset
              </h2>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.skills.map((skill) => (
                  <span key={skill} className="px-5 py-2 bg-muted rounded-full border border-border text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
            <div className="p-10 rounded-3xl border border-border bg-card/50 backdrop-blur-sm">
               <h3 className="text-2xl font-bold mb-6 italic">"A developer who speaks the language of business and service."</h3>
               <p className="text-muted-foreground leading-relaxed italic">
                 "During my time at Taj Hotels, I learned that luxury is defined by the absence of friction. I apply this same philosophy to web development: creating seamless, frictionless digital experiences that delight users and drive results."
               </p>
               <div className="mt-8 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center font-bold text-white">ST</div>
                 <div>
                   <p className="font-bold">Saksham Tikekar</p>
                   <p className="text-sm text-muted-foreground">Founder, Freelance Developer</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
