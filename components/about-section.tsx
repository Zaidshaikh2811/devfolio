"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe section elements
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe each item element
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24 opacity-0 ">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            Passionate developer with expertise in building exceptional digital
            experiences for web and mobile platforms.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div
            ref={(el) => (itemsRef.current[0] = el)}
            className="space-y-4 opacity-0"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-2xl font-bold">Who I Am</h3>
            <p className="text-muted-foreground">
              Hi, I&apos;m Mohammad Zaid Shaikh, a passionate and versatile Frontend Developer with a strong foundation in React, Next.js, TypeScript, and modern web technologies. Currently pursuing my B.E. in Computer Science from Nagesh Karajagi Orchid College of Engineering and Technology, I thrive on crafting responsive, accessible, and user-centric applications.
            </p>
            <p className="text-muted-foreground">
              With hands-on experience from impactful projects like a mock interview platform, a social media app, and a trip planner, I’ve optimized performance, enhanced user experience, and implemented secure, scalable architectures. At Sciqus Infotech, I lead frontend development for real-time platforms focused on user engagement and collaboration.
            </p>
            <p className="text-muted-foreground">
              💡 I’ve also built data-driven admin dashboards and authentication systems used by thousands of students at Maulana Azad Polytechnic, making education management more efficient and secure.
            </p>
          </div>

          <div
            ref={(el) => (itemsRef.current[1] = el)}
            className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto md:h-full opacity-0"
            style={{ animationDelay: "400ms" }}
          >
            <Image
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg"
              alt="Developer at work"
              fill
              className="object-cover"
            />
          </div>

          <div
            ref={(el) => (itemsRef.current[2] = el)}
            className="space-y-4 opacity-0"
            style={{ animationDelay: "600ms" }}
          >
            <h3 className="text-2xl font-bold">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">React Native</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">Express</Badge>
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">PostgreSQL</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Bootstrap</Badge>
              <Badge variant="secondary">HTML</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">C</Badge>
              <Badge variant="secondary">C++</Badge>
              <Badge variant="secondary">Java</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Redux</Badge>
              <Badge variant="secondary">GraphQL</Badge>
              <Badge variant="secondary">Git</Badge>
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">CI/CD</Badge>
              <Badge variant="secondary">AWS</Badge>

            </div>
          </div>

          <div
            ref={(el) => (itemsRef.current[3] = el)}
            className="grid grid-cols-2 gap-4 opacity-0"
            style={{ animationDelay: "800ms" }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold">1+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold">10+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold">20+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-4xl font-bold">10+</div>
                <p className="text-sm text-muted-foreground">Technologies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}