import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative border-t border-[#E2EEF6] bg-gradient-to-b from-white to-[#F0F9FF] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E2EEF6]">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Anoop Kumar Logo"
                className="w-8 h-8 object-contain drop-shadow-sm"
              />
              <span className="font-bold text-sm sm:text-base tracking-wider text-[#111827] uppercase">
                ANOOP KUMAR
              </span>
            </div>
            <p className="text-[#4B5563] text-sm leading-relaxed max-w-sm">
              Frontend & Web Developer. Creating modern, responsive websites for businesses, brands, and service providers.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2EEF6] text-[#111827] text-xs font-medium shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00ADEF] animate-pulse" />
                Available for New Projects
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#4B5563] hover:text-[#00ADEF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Contact & Social
            </h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href="mailto:anoopkumarx9@gmail.com"
                className="text-[#4B5563] hover:text-[#00ADEF] transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#00ADEF]" />
                <span>anoopkumarx9@gmail.com</span>
              </a>
              <a
                href="https://wa.me/919847805902?text=Hi%20Anoop,%20I%20would%20like%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4B5563] hover:text-[#00ADEF] transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#00ADEF]" />
                <span>+91 9847805902 (WhatsApp)</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4B5563] hover:text-[#00ADEF] transition-colors flex items-center gap-2 pt-1"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4B5563] hover:text-[#00ADEF] transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© 2026 Anoop Kumar. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Frontend & Web Developer in Kerala, India</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#4B5563] hover:text-[#00ADEF] px-3 py-1.5 rounded-full bg-white border border-[#E2EEF6] hover:border-[#BAE6FD] transition-all shadow-sm cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
