import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "emerald" | "amber" | "pink" | "outline";
  className?: string;
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
  size = "md"
}) => {
  const sizeClasses = size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-xs sm:text-sm";

  const variantClasses = {
    default: "bg-bg-tertiary text-text-secondary border border-border-subtle",
    cyan: "bg-cyan-950/40 text-cyan-400 border border-cyan-500/30",
    emerald: "bg-emerald-950/40 text-emerald-400 border border-emerald-500/30",
    amber: "bg-amber-950/40 text-amber-400 border border-amber-500/30",
    pink: "bg-pink-950/40 text-pink-400 border border-pink-500/30",
    outline: "bg-transparent text-text-primary border border-border-subtle hover:border-accent/40"
  };

  return (
    <span className={`inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-200 ${sizeClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};
