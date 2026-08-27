import React, { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { TrustIntro } from "./components/sections/TrustIntro";
import { FeaturedWork } from "./components/sections/FeaturedWork";
import { ProjectModal } from "./components/sections/ProjectModal";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { GlowMesh } from "./components/ui/GlowMesh";
import { Project } from "./types";

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-white via-[#F0F9FF]/60 to-white text-[#111827] selection:bg-[#00ADEF]/20 selection:text-[#0284C7] font-sans antialiased overflow-x-hidden">
      <GlowMesh variant="page" />

      {/* Floating Pill Navigation */}
      <Navbar onOpenContact={() => {
        const contactEl = document.getElementById("contact");
        if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
      }} />

      {/* Main Flow */}
      <main className="relative z-10">
        <Hero onSelectProject={() => {
          const el = document.getElementById("work");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }} />

        {/* Editorial Introduction Section */}
        <TrustIntro />

        {/* Selected Work Showcases */}
        <FeaturedWork onOpenProject={handleOpenProject} />

        {/* Services */}
        <Services />

        {/* Process */}
        <Process />

        {/* About Anoop & Technology Matrix */}
        <About />

        {/* Contact CTA & Inquiry Form */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
      />
    </div>
  );
}

export default App;

