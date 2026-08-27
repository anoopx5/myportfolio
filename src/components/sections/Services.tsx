import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-gradient-to-b from-white via-[#F0F9FF]/60 to-white border-t border-[#E2EEF6] scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl pb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#00ADEF] flex items-center gap-2">
            <span className="w-6 h-[1.5px] bg-[#00ADEF]" />
            <span>SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-[#111827] tracking-tight">
            What I{" "}
            <span className="font-serif italic font-normal text-[#00ADEF]">build.</span>
          </h2>

          <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed">
            High-performance, purpose-built websites designed to communicate your value proposition and turn visitors into paying customers.
          </p>
        </div>

        {/* 5 Large Numbered Editorial Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl border border-[#E2EEF6] bg-white p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 shadow-card hover:shadow-card-hover hover:border-[#BAE6FD] hover:-translate-y-1"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#E2EEF6] pb-4">
                  <span className="font-serif italic text-3xl sm:text-4xl text-[#00ADEF] group-hover:text-[#0284C7] transition-colors">
                    {service.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#E2EEF6] group-hover:bg-[#00ADEF] transition-colors" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="pt-8 mt-8 border-t border-[#E2EEF6] space-y-2.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
                  Deliverables
                </div>
                <div className="space-y-1.5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#4B5563]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ADEF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

