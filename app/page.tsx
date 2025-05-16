import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import TechStackSection from "@/components/tech-stack-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}