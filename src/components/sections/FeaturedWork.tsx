import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import { Project, ProjectCategory } from "../../types";
import { BrowserMockup } from "../ui/BrowserMockup";

interface FeaturedWorkProps {
  onOpenProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Real Estate", "Healthcare", "Ecommerce", "Restaurant", "Beauty"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.filterCategory === activeFilter);

  return (
    <section id="work" className="relative py-28 sm:py-36 bg-gradient-to-b from-white via-[#F0F9FF]/50 to-white scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E2EEF6]">
          <div className="space-y-4 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#00ADEF] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#00ADEF]" />
              <span>SELECTED WORK</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold text-[#111827] tracking-tight">
              A few things I’ve{" "}
              <span className="font-serif italic font-normal text-[#00ADEF]">built.</span>
            </h2>

            <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
              A selection of business websites created with different visual identities, industries and user experiences.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-white border border-[#E2EEF6] shadow-sm self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#00ADEF] text-white shadow-sm"
                    : "text-[#4B5563] hover:text-[#111827] hover:bg-[#F0F9FF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Varied Editorial Layout Showcases */}
        <div className="pt-16 sm:pt-20 space-y-24 sm:space-y-32">
          {filteredProjects.map((project, index) => {
            // Distinct layout rules:
            // Project 01 (index 0): Content left / Image right
            // Project 02 (index 1): Image left / Content right
            // Project 03 (index 2): Large centered browser preview with content above/below
            // Project 04 (index 3): Content left / Image right
            // Project 05 (index 4): Image left / Content right

            const isCentered = project.number === "03";
            const isImageLeft = project.number === "02" || project.number === "05";

            if (isCentered) {
              return (
                <div
                  key={project.id}
                  className="group relative rounded-3xl border border-[#E2EEF6] bg-white p-6 sm:p-12 transition-all duration-300 shadow-card hover:shadow-card-hover hover:border-[#BAE6FD]"
                >
                  <div className="max-w-3xl mx-auto text-center space-y-4 mb-8 sm:mb-10">
                    <div className="flex items-center justify-center gap-3">
                      <span className="font-serif italic text-2xl sm:text-3xl text-[#00ADEF]">
                        {project.number}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] text-xs font-semibold tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
                      {project.name}
                    </h3>

                    <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed max-w-xl mx-auto">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111827] hover:bg-[#00ADEF] text-white font-medium text-xs sm:text-sm shadow-sm hover:shadow-blue-glow transition-all"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => onOpenProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F0F9FF] text-[#111827] hover:text-[#00ADEF] font-medium text-xs sm:text-sm border border-[#E2EEF6] hover:border-[#BAE6FD] transition-all cursor-pointer shadow-sm"
                      >
                        Case Study Breakdown
                      </button>
                    </div>
                  </div>

                  {/* Centered Large Mockup */}
                  <div
                    className="max-w-4xl mx-auto cursor-pointer transform group-hover:scale-[1.01] transition-transform duration-300"
                    onClick={() => onOpenProject(project)}
                  >
                    <BrowserMockup project={project} />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl border border-[#E2EEF6] bg-white p-6 sm:p-10 lg:p-12 transition-all duration-300 shadow-card hover:shadow-card-hover hover:border-[#BAE6FD]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Preview Side (7 cols) */}
                  <div className={`lg:col-span-7 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                    <div
                      className="cursor-pointer transform group-hover:scale-[1.015] transition-transform duration-300"
                      onClick={() => onOpenProject(project)}
                    >
                      <BrowserMockup project={project} />
                    </div>
                  </div>

                  {/* Editorial Text Side (5 cols) */}
                  <div className={`lg:col-span-5 space-y-6 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-serif italic text-3xl sm:text-4xl text-[#00ADEF]">
                        {project.number}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7] text-xs font-semibold tracking-wide">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-tight">
                      {project.name}
                    </h3>

                    <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2 pt-1">
                      {project.highlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#4B5563]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00ADEF]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E2EEF6]">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111827] hover:bg-[#00ADEF] text-white font-medium text-xs sm:text-sm shadow-sm hover:shadow-blue-glow transition-all"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => onOpenProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F0F9FF] text-[#111827] hover:text-[#00ADEF] font-medium text-xs sm:text-sm border border-[#E2EEF6] hover:border-[#BAE6FD] transition-all cursor-pointer shadow-sm"
                      >
                        Case Study Breakdown
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
