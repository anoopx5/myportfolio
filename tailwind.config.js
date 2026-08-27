/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00ADEF",
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#00ADEF",
          600: "#0284C7",
          700: "#0369A1",
          subtle: "rgba(0, 173, 239, 0.08)",
          glow: "rgba(0, 173, 239, 0.22)",
        },
        ivory: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#FAFCFE",
          200: "#F0F7FC",
          300: "#E5F1F9",
        },
        cream: {
          DEFAULT: "#F4FAFD",
          light: "#FAFCFE",
          dark: "#E8F4FA",
        },
        ink: {
          DEFAULT: "#111827",
          pure: "#0B0F19",
          muted: "#4B5563",
          light: "#6B7280",
          faint: "#9CA3AF",
        },
        border: {
          ivory: "#E2EEF6",
          subtle: "rgba(0, 173, 239, 0.12)",
          hover: "rgba(0, 173, 239, 0.3)",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        heading: ["'Inter'", "'Plus Jakarta Sans'", "sans-serif"],
        serif: ["'DM Serif Display'", "'Playfair Display'", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.4" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "pill": "0 8px 32px -4px rgba(0, 173, 239, 0.08), 0 2px 8px -2px rgba(17, 24, 39, 0.04)",
        "card": "0 12px 36px -8px rgba(0, 173, 239, 0.07), 0 2px 8px -2px rgba(17, 24, 39, 0.03)",
        "card-hover": "0 20px 48px -12px rgba(0, 173, 239, 0.16), 0 4px 14px -3px rgba(17, 24, 39, 0.05)",
        "blue-glow": "0 0 50px rgba(0, 173, 239, 0.28)",
      },
    },
  },
  plugins: [],
};

