import React from "react";
import { processSteps } from "../../data/process";

export const Process: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-gradient-to-b from-white via-[#F0F9FF]/40 to-white border-t border-[#E2EEF6] scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl pb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#00ADEF] flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#00ADEF]" />
            <span>PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#111827] tracking-tight">
            From idea to{" "}
            <span className="font-serif italic font-normal text-[#00ADEF]">launch.</span>
          </h2>

          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
            A clear, collaborative process to build and launch your website efficiently without unnecessary friction.
          </p>
        </div>

        {/* 4 Steps Grid (Horizontal on Desktop, Stacked on Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-[#E2EEF6] bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-card hover:shadow-card-hover hover:border-[#BAE6FD] hover:-translate-y-1 group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#E2EEF6] pb-4">
                  <span className="font-serif italic text-3xl sm:text-4xl text-[#00ADEF] group-hover:text-[#0284C7] transition-colors">
                    {step.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                    Step {step.number}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xl font-bold text-[#111827] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="pt-6 mt-6 border-t border-[#E2EEF6] space-y-1.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                  Focus
                </div>
                <div className="text-xs font-medium text-[#111827]">
                  {step.details[0]}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

