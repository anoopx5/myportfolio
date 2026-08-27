import React from "react";
import { Target, Palette, Smartphone, MessageSquare, ShieldCheck } from "lucide-react";
import { whyPoints } from "../../data/whyMe";

export const WhyMe: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Target":
        return <Target className="w-5 h-5 text-blue-600" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-blue-600" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-blue-600" />;
      case "MessageSquare":
        return <MessageSquare className="w-5 h-5 text-blue-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="relative py-24 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-widest">
            <span>Value & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-heading">
            Why Choose Me?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            The qualities that separate a dedicated freelance developer partnership from generic outsourced templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyPoints.map((point) => (
            <div
              key={point.number}
              className="group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 space-y-4 hover:border-blue-400/50 hover:-translate-y-1 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all [&_svg]:group-hover:text-white">
                  {getIcon(point.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-950 font-heading group-hover:text-blue-600 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 font-mono text-xs text-slate-400 group-hover:text-blue-600 transition-colors">
                Pillar {point.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
