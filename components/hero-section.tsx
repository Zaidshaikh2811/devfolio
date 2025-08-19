"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "@/components/type-animation";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      heroRef.current.style.setProperty("--x", `${x}`);
      heroRef.current.style.setProperty("--y", `${y}`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(
            circle at calc(var(--x, 0.5) * 100%) calc(var(--y, 0.5) * 100%), 
            hsl(var(--primary)/0.15),
            transparent 40%
          )
        `
      }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <div className="absolute inset-0 animate-ping rounded-full bg-primary/20 opacity-75"></div>
              <span className="text-4xl font-bold">ZS</span>
            </div>
          </div>

          <h1 className="mb-4 animate-fade-in-up text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Zaid Shaikh
          </h1>

          <div className="mb-8 h-10 text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl mx-auto">
            <TypeAnimation
              sequence={[
                "Full Stack Web Developer",
                2000,
                "Mobile App Developer",
                2000,
                "UI/UX Designer",
                2000,
                "MERN Stack Expert",
                2000,
              ]}
            />
          </div>

          <p className="mb-8 max-w-prose text-muted-foreground mx-auto">
            I build exceptional digital experiences that make life easier and more enjoyable.
            With expertise in modern web and mobile technologies, I create products that people love to use.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button onClick={() => scrollToSection("#projects")} size="lg">
              View Projects
            </Button>
            <Button variant="outline" onClick={() => scrollToSection("#contact")} size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection("#about")}
          className="h-10 w-10 rounded-full"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}