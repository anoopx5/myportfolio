import React from "react";
import { capabilityCategories } from "../../data/skills";

export const About: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-white via-[#F0F9FF]/50 to-white border-t border-[#E2EEF6] scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Personal Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#00ADEF] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#00ADEF]" />
              <span>ABOUT ANOOP</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-tight">
              A developer who cares about the{" "}
              <span className="font-serif italic font-normal text-[#00ADEF]">details.</span>
            </h2>

            <div className="space-y-4 text-[#4B5563] text-base sm:text-lg leading-relaxed">
              <p>
                I’m <strong className="text-[#111827] font-semibold">Anoop Kumar</strong>, a frontend and web developer focused on building modern websites for businesses and brands.
              </p>
              <p>
                My approach combines visual design, responsive development and practical user experience. Every project should not only look polished, but also communicate the business clearly and make it easy for visitors to take action.
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Clean Text-Based Capabilities Matrix */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl border border-[#E2EEF6] bg-white p-6 sm:p-8 space-y-6 shadow-card">
              <div className="flex items-center justify-between border-b border-[#E2EEF6] pb-4">
                <h3 className="text-lg font-bold text-[#111827]">
                  Technology & Capabilities
                </h3>
                <span className="text-xs text-[#0284C7] bg-[#F0F9FF] border border-[#BAE6FD] px-3 py-1 rounded-full font-medium tracking-wide uppercase">
                  Production Stack
                </span>
              </div>

              {/* Categorized Clean Text Capabilities */}
              <div className="space-y-6">
                {capabilityCategories.map((group, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                      {group.title}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3.5 py-1.5 rounded-full bg-[#F0F9FF] border border-[#E2EEF6] text-xs sm:text-sm font-medium text-[#111827] hover:border-[#00ADEF] hover:text-[#00ADEF] transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E2EEF6] text-xs text-[#4B5563] leading-relaxed">
                Focused on delivering fast, accessible, and responsive web experiences tailored to real business objectives.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

