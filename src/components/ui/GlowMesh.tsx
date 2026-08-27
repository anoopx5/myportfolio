import React from "react";

interface GlowMeshProps {
  className?: string;
  variant?: "hero" | "subtle" | "blue" | "page";
}

export const GlowMesh: React.FC<GlowMeshProps> = ({
  className = "",
  variant = "hero"
}) => {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      {variant === "hero" && (
        <>
          <div className="absolute top-4 right-10 w-[580px] h-[580px] bg-gradient-to-br from-[#00ADEF]/20 via-[#E0F2FE]/40 to-transparent rounded-full blur-[100px]" />
          <div className="absolute -top-20 left-1/4 w-[480px] h-[480px] bg-gradient-to-tr from-[#38BDF8]/15 via-[#BAE6FD]/30 to-transparent rounded-full blur-[90px]" />
          <div className="absolute top-1/2 -left-20 w-[420px] h-[420px] bg-[#00ADEF]/10 rounded-full blur-[90px]" />
        </>
      )}

      {variant === "page" && (
        <>
          <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#00ADEF]/10 rounded-full blur-[120px]" />
          <div className="absolute top-2/4 left-0 w-[480px] h-[480px] bg-[#BAE6FD]/25 rounded-full blur-[120px]" />
          <div className="absolute top-3/4 right-1/4 w-[550px] h-[550px] bg-[#00ADEF]/10 rounded-full blur-[130px]" />
        </>
      )}

      {variant === "blue" && (
        <div className="w-[450px] h-[450px] bg-[#00ADEF]/16 rounded-full blur-[100px]" />
      )}

      {variant === "subtle" && (
        <div className="w-[300px] h-[300px] bg-[#00ADEF]/10 rounded-full blur-[80px]" />
      )}
    </div>
  );
};


