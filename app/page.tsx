import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/sections/hero";
import { AboutSection } from "@/sections/about";
import { SkillsSection } from "@/sections/skills";
import { ProjectsSection } from "@/sections/projects";
import { ServicesSection } from "@/sections/services";
import { TestimonialsSection } from "@/sections/testimonials";
import { ContactSection } from "@/sections/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
      <Navbar />
      <main className="space-y-0">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

