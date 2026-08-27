import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "about", "work", "services", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 py-4 sm:py-6 px-4 sm:px-6 pointer-events-none transition-all duration-300">
        <div className="max-w-3xl mx-auto flex items-center justify-center">
          
          {/* Floating Pill Nav Bar */}
          <div className="w-full flex items-center justify-between bg-white/90 backdrop-blur-xl border border-[#E2EEF6] rounded-full px-3.5 sm:px-4 py-2 shadow-pill pointer-events-auto transition-all duration-300">
            
            {/* Custom Brand Logo & Name */}
            <a
              href="#home"
              className="flex items-center gap-2.5 group p-0.5 pr-3 rounded-full hover:bg-[#F0F9FF]/60 transition-colors"
              aria-label="Anoop Kumar - Homepage"
            >
              <img
                src="/logo.png"
                alt="Anoop Kumar Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform drop-shadow-sm flex-shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="font-bold text-xs sm:text-sm tracking-tight text-[#111827] group-hover:text-[#00ADEF] transition-colors leading-none">
                  Anoop Kumar
                </span>
                <span className="text-[9.5px] sm:text-[10px] text-[#6B7280] font-medium tracking-wider uppercase leading-tight mt-0.5">
                  Frontend & Web Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[#0284C7] bg-[#E0F2FE] font-semibold"
                        : "text-[#4B5563] hover:text-[#111827] hover:bg-[#F0F9FF]"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Let's Talk CTA */}
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#111827] text-white hover:bg-[#00ADEF] hover:shadow-md transition-all duration-200"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full bg-[#F0F9FF] text-[#111827] hover:bg-[#E0F2FE] focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>

          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/98 backdrop-blur-2xl md:hidden pt-28 px-6 flex flex-col justify-between pb-10 animate-fade-in pointer-events-auto">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] px-3">
              Navigation
            </p>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-xl font-medium text-[#111827] hover:bg-[#F0F9FF] hover:text-[#00ADEF] transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#E2EEF6]">
            <div className="flex items-center gap-2 px-3">
              <span className="w-2 h-2 rounded-full bg-[#00ADEF] animate-pulse" />
              <span className="text-xs text-[#4B5563] font-medium">Available for new client projects</span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#111827] text-white font-semibold text-sm shadow-md hover:bg-[#00ADEF] transition-colors"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

