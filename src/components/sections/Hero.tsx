import React from "react";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
import portraitWebp from "../../assets/anoop-portrait.webp";
import { GlowMesh } from "../ui/GlowMesh";

interface HeroProps {
  onSelectProject?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProject }) => {
  const metadataTags = [
    "Web Design",
    "Web Development",
    "UI / UX",
    "Responsive Websites"
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white via-[#F0F9FF]/80 to-white"
    >
      <GlowMesh variant="hero" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Editorial Typography & CTA */}
          <div className="lg:col-span-7 space-y-8 text-left z-10">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BAE6FD] text-xs font-semibold tracking-wide text-[#0284C7] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#00ADEF] animate-pulse" />
              <span>Available for new projects</span>
            </div>

            {/* Main Headline with Serif Italic Accent */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold text-[#111827] tracking-tight leading-[1.08]">
              I Build Digital Experiences That{" "}
              <span className="font-serif italic font-normal text-[#111827] block sm:inline">
                Make an Impact.
              </span>
            </h1>

            {/* Subtext */}
            <div className="space-y-3 max-w-xl text-[#4B5563] text-base sm:text-lg leading-relaxed">
              <p>
                Hi, I’m <strong className="text-[#111827] font-semibold">Anoop</strong> — a freelance web developer creating modern, responsive websites for businesses, brands, and service providers.
              </p>
              <p className="text-sm sm:text-base text-[#6B7280]">
                I combine thoughtful UI design, responsive development and modern web technologies to turn ideas into professional digital experiences.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={() => onSelectProject?.("agentily")}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#111827] hover:bg-[#00ADEF] text-white font-medium text-sm shadow-md hover:shadow-blue-glow transition-all duration-300"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#F0F9FF] text-[#111827] hover:text-[#00ADEF] font-medium text-sm border border-[#E2EEF6] hover:border-[#BAE6FD] transition-all duration-300 shadow-sm"
              >
                <span>Let’s Talk</span>
                <span className="text-[#00ADEF] text-xs">○</span>
              </a>
            </div>

            {/* Floating Subtle Metadata Labels */}
            <div className="pt-4 flex flex-wrap gap-2 sm:gap-2.5">
              {metadataTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E2EEF6] text-xs font-medium text-[#4B5563] shadow-sm hover:border-[#BAE6FD] hover:text-[#00ADEF] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column (5 cols): Integrated Portrait with Blue Radial Glow */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            {/* Luminous Blue Radial Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] bg-gradient-to-tr from-[#00ADEF]/25 via-[#BAE6FD]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />

            {/* Portrait Image Container */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-[4/5] flex items-end justify-center overflow-hidden">
              <img
                src={portraitWebp}
                alt="Anoop Kumar - Frontend & Web Developer"
                width={650}
                height={719}
                decoding="async"
                loading="eager"
                // @ts-ignore
                fetchpriority="high"
                className="w-full h-full object-contain object-bottom monochrome-portrait hero-mask-bottom drop-shadow-md select-none pointer-events-none"
              />
            </div>

          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-14 flex items-center justify-start">
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-[#00ADEF] tracking-wider uppercase font-medium transition-colors"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#00ADEF]" />
        </a>
      </div>
    </section>
  );
};
