"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { portfolioData } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="My Projects" 
          subtitle="A showcase of my latest work, ranging from fitness platforms to clinical branding and AI-powered solutions."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <div 
              key={project.title} 
              className={index % 3 === 1 ? "lg:mt-12" : index % 3 === 2 ? "lg:mt-24" : ""}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Placeholder for more projects */}
        <div className="mt-32 p-12 rounded-3xl border border-dashed border-border flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4 text-muted-foreground">More Projects Coming Soon</h3>
          <p className="text-muted-foreground max-w-md">
            I'm constantly working on new and exciting challenges. Stay tuned for more updates!
          </p>
        </div>
      </div>
    </div>
  );
}
