import React, { useState } from "react";
import { ExternalLink, Sparkles, Building2, ShieldCheck, TrendingUp, Activity, HeartHandshake, ShoppingBag, Gift, CreditCard, Flame, Wine, Utensils, Scissors, Crown } from "lucide-react";
import { Project } from "../../types";

interface BrowserMockupProps {
  project: Project;
  className?: string;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({
  project,
  className = ""
}) => {
  const [imageError, setImageError] = useState(false);

  const getIcon = (name: string) => {
    const icons: Record<string, React.ReactNode> = {
      Building2: <Building2 className="w-4 h-4 text-[#D9937D]" />,
      ShieldCheck: <ShieldCheck className="w-4 h-4 text-[#D9937D]" />,
      TrendingUp: <TrendingUp className="w-4 h-4 text-[#D9937D]" />,
      Sparkles: <Sparkles className="w-4 h-4 text-teal-400" />,
      Activity: <Activity className="w-4 h-4 text-teal-400" />,
      HeartHandshake: <HeartHandshake className="w-4 h-4 text-teal-400" />,
      ShoppingBag: <ShoppingBag className="w-4 h-4 text-emerald-400" />,
      Gift: <Gift className="w-4 h-4 text-emerald-400" />,
      CreditCard: <CreditCard className="w-4 h-4 text-emerald-400" />,
      Flame: <Flame className="w-4 h-4 text-amber-400" />,
      Wine: <Wine className="w-4 h-4 text-amber-400" />,
      Utensils: <Utensils className="w-4 h-4 text-amber-400" />,
      Scissors: <Scissors className="w-4 h-4 text-rose-400" />,
      Crown: <Crown className="w-4 h-4 text-rose-400" />
    };
    return icons[name] || <Sparkles className="w-4 h-4 text-[#D9937D]" />;
  };

  const cleanUrlDisplay = project.url.replace("https://", "").replace(/\/$/, "");

  return (
    <div className={`w-full rounded-2xl overflow-hidden border border-[#E6E1DC] bg-white shadow-card hover:shadow-card-hover transition-all duration-300 group ${className}`}>
      {/* Top Browser Window Header */}
      <div className="bg-[#F1ECE7]/90 px-4 py-3 border-b border-[#E6E1DC] flex items-center justify-between gap-2 select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E6E1DC] group-hover:bg-rose-400/80 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E6E1DC] group-hover:bg-amber-400/80 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E6E1DC] group-hover:bg-emerald-400/80 transition-colors" />
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-sm mx-auto bg-[#FAF8F5] border border-[#E6E1DC] rounded-md px-3 py-1 text-xs text-[#686868] flex items-center justify-between overflow-hidden shadow-sm">
          <span className="truncate flex items-center gap-1.5">
            <span className="text-emerald-600 text-[10px]">●</span>
            <span className="font-mono text-[11px] text-[#161616] font-medium">{cleanUrlDisplay}</span>
          </span>
          <span className="text-[10px] text-[#D9937D] font-semibold hidden sm:inline uppercase tracking-wider">Live Preview</span>
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#686868] hover:text-[#161616] p-1 transition-colors"
          title="Open live website in new tab"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Website Viewport Area */}
      {project.image && !imageError ? (
        <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden bg-[#FAF8F5] flex items-start justify-center">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            width={800}
            height={500}
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-[1.025] transition-transform duration-500 ease-out"
            loading="lazy"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      ) : (
        /* Fallback Viewport Render */
        <div className="relative min-h-[320px] sm:min-h-[380px] p-6 sm:p-8 bg-[#161616] text-white flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,147,125,0.18),transparent_60%)] pointer-events-none" />

          <div className="relative z-10 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-white">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accentColor }} />
              <span>{project.previewVisual.badge}</span>
            </div>

            <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight max-w-xl">
              {project.previewVisual.headline}
            </h4>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-lg font-light">
              {project.previewVisual.subheadline}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white shadow-lg transition-transform"
                style={{ backgroundColor: project.accentColor }}
              >
                {project.previewVisual.ctaText}
              </span>
            </div>
          </div>

          <div className="relative z-10 pt-6 mt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4">
            {project.previewVisual.stats.map((st, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-white/10 text-center sm:text-left">
                <div className="text-[11px] text-neutral-400 truncate">{st.label}</div>
                <div className="text-sm sm:text-base font-bold text-white truncate" style={{ color: i === 0 ? project.accentColor : '#FFF' }}>
                  {st.value}
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 pt-3 hidden sm:flex flex-wrap gap-2">
            {project.previewVisual.features.map((feat, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-xs text-neutral-200 backdrop-blur-sm"
              >
                {getIcon(feat.icon)}
                <span className="text-white font-medium">{feat.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


