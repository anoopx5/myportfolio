import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  withArrow = false,
  href,
  external = false,
  children,
  className = "",
  ...props
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-1.5",
    md: "px-6 py-3 text-sm sm:text-base gap-2",
    lg: "px-8 py-4 text-base sm:text-lg gap-2.5 font-semibold"
  };

  const variantClasses = {
    primary: "bg-accent hover:bg-accent-light text-bg-primary font-semibold shadow-lg shadow-accent/20 hover:shadow-cyan-glow hover:-translate-y-0.5",
    secondary: "bg-bg-tertiary hover:bg-bg-elevated text-text-primary border border-border-subtle hover:border-accent/40 hover:-translate-y-0.5",
    outline: "bg-transparent hover:bg-accent/10 text-text-primary hover:text-accent border border-border-subtle hover:border-accent/50",
    ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-white/5"
  };

  const baseClasses = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 active:scale-[0.98] cursor-pointer text-center select-none";

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`group ${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`group ${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
