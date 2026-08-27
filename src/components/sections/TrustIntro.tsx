import React from "react";
import { Building2, HeartPulse, ShoppingBag, Utensils, Sparkles } from "lucide-react";

export const TrustIntro: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-gradient-to-b from-white via-[#F0F9FF]/40 to-white border-t border-[#E2EEF6] scroll-mt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Section Label (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#00ADEF] flex items-center gap-2">
              <span className="w-6 h-[1.5px] bg-[#00ADEF]" />
              <span>ABOUT</span>
            </div>
          </div>

          {/* Editorial Content (9 cols) */}
          <div className="lg:col-span-9 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-[1.2]">
              Designing websites that look good — and{" "}
              <span className="font-serif italic font-normal text-[#00ADEF]">
                work for the business.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#4B5563] text-base sm:text-lg leading-relaxed pt-2">
              <p>
                I focus on creating modern websites tailored to the business behind them. Every project is designed from the ground up to reflect the brand, communicate clearly, and turn visitors into clients.
              </p>
              <p>
                My work spans business websites, real estate, healthcare, ecommerce, restaurants and beauty brands — each built with clean code, responsive layouts, and thoughtful visual design.
              </p>
            </div>

            {/* Quick Industry Pills */}
            <div className="pt-4 flex flex-wrap gap-2 text-xs text-[#4B5563]">
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2EEF6] shadow-sm font-medium">Real Estate</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2EEF6] shadow-sm font-medium">Healthcare</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2EEF6] shadow-sm font-medium">Ecommerce & Fashion</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2EEF6] shadow-sm font-medium">Restaurants & Dining</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2EEF6] shadow-sm font-medium">Beauty & Wellness</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
