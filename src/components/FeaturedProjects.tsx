import ProjectCard from "./ProjectCard";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section id="featured" className="py-32 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeader 
            title="Selected Works" 
            subtitle="Expertly crafting high-performance websites for clinics, gyms, restaurants, agencies, real estate, and media agencies."
            className="mb-0 text-left"
          />
          <Link
            href="/projects"
            className="flex items-center gap-2 font-black text-blue-500 hover:text-blue-400 transition-all pb-2 uppercase tracking-widest text-xs"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
