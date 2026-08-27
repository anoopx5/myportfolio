import React, { useEffect } from "react";
import { X, ExternalLink, Check, Layers, Code, Target, Shield, ArrowUpRight } from "lucide-react";
import { Project } from "../../types";
import { BrowserMockup } from "../ui/BrowserMockup";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111827]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border border-[#E2EEF6] rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto animate-fade-in">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-[#E2EEF6] flex items-center justify-between bg-gradient-to-r from-white via-[#F0F9FF] to-white">
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-lg text-[#00ADEF] px-3 py-1 rounded-full bg-white border border-[#BAE6FD] shadow-sm">
              {project.number}
            </span>
            <div>
              <h3 className="text-xl font-bold text-[#111827]">
                {project.name}
              </h3>
              <p className="text-xs text-[#6B7280]">{project.category}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111827] hover:bg-[#00ADEF] text-white text-xs font-medium shadow-sm hover:shadow-blue-glow transition-all"
            >
              <span>Visit Live Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#4B5563] hover:text-[#111827] bg-white hover:bg-[#F0F9FF] border border-[#E2EEF6] transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          
          <div>
            <BrowserMockup project={project} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Objective */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#111827] text-xs font-semibold uppercase tracking-wider">
                <Target className="w-4 h-4 text-[#00ADEF]" />
                <span>Project Objective</span>
              </div>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {project.overview.objective}
              </p>

              <div className="pt-2">
                <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-2">
                  Client Profile
                </div>
                <div className="text-sm font-medium text-[#111827] bg-[#F0F9FF] p-3 rounded-2xl border border-[#BAE6FD]">
                  {project.overview.clientType}
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#111827] text-xs font-semibold uppercase tracking-wider">
                <Code className="w-4 h-4 text-[#00ADEF]" />
                <span>Technologies & Frameworks</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.overview.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#F0F9FF] border border-[#BAE6FD] text-xs font-medium text-[#0284C7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-2">
                  Hosting & Deployment
                </div>
                <div className="flex items-center gap-2 text-sm text-[#111827] bg-[#F0F9FF] border border-[#BAE6FD] px-3 py-2.5 rounded-2xl">
                  <Shield className="w-4 h-4 text-[#00ADEF] flex-shrink-0" />
                  <span>Production Netlify Deployment with Global CDN & SSL</span>
                </div>
              </div>
            </div>

          </div>

          {/* Key Capabilities */}
          <div className="border-t border-[#E2EEF6] pt-6 space-y-4">
            <div className="flex items-center gap-2 text-[#111827] text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#00ADEF]" />
              <span>Key Capabilities Implemented</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 bg-white border border-[#E2EEF6] p-3.5 rounded-2xl text-xs sm:text-sm text-[#111827] shadow-sm"
                >
                  <Check className="w-4 h-4 text-[#00ADEF] flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-[#E2EEF6] bg-gradient-to-r from-white via-[#F0F9FF] to-white flex items-center justify-between">
          <span className="text-xs text-[#6B7280]">
            {project.name} — {project.filterCategory}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-white border border-[#E2EEF6] text-[#111827] text-xs font-medium hover:bg-[#F0F9FF] hover:border-[#BAE6FD] transition-all cursor-pointer shadow-sm"
            >
              Close
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#111827] text-white text-xs font-medium hover:bg-[#00ADEF] hover:shadow-blue-glow transition-all"
            >
              <span>Visit Live Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
