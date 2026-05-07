import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import SectionHeader from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TechStack />
      <FeaturedProjects />

      {/* About Brief */}
      <section className="py-24 px-6 bg-card/50 border-y border-border">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <SectionHeader 
            title="From Hospitality to Full Stack" 
            subtitle={portfolioData.about.journey}
            align="center"
          />
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-muted border border-border rounded-full font-bold hover:bg-card transition-all"
          >
            Read My Full Story <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/10 blur-[100px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <SectionHeader 
            title="Ready to Build Something Amazing?" 
            subtitle="I am currently open to full-time opportunities and interesting freelance projects. Let's talk about how I can help you."
            align="center"
          />
          <Link
            href="/contact"
            className="flex items-center gap-3 px-10 py-5 bg-foreground text-background font-black rounded-full hover:scale-105 active:scale-95 transition-all text-xl"
          >
            <Mail size={24} />
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
