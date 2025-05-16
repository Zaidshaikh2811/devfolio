"use client";

import { useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Lead developer for multiple web and mobile applications. Architected scalable solutions and mentored junior developers. Technologies: React, Next.js, Node.js, MongoDB, AWS."
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Developed and maintained e-commerce platforms and enterprise applications. Implemented CI/CD pipelines and improved application performance. Technologies: React, Node.js, PostgreSQL, Docker."
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2018 - 2020",
    description: "Created responsive and interactive web applications for various clients. Worked closely with designers to implement pixel-perfect UIs. Technologies: React, JavaScript, HTML, CSS, Sass."
  },
  {
    id: 4,
    title: "Freelance Web Developer",
    company: "Self-employed",
    period: "2016 - 2018",
    description: "Designed and built websites and web applications for small businesses and startups. Managed client relationships and project timelines. Technologies: JavaScript, PHP, MySQL, WordPress."
  }
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const experienceRefs = useRef<Array<HTMLElement | null>>([]);

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

    // Observe section element
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe each experience card
    experienceRefs.current.forEach((experience) => {
      if (experience) observer.observe(experience);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-16 md:py-24 opacity-0">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Work Experience
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            My professional journey and the companies I&#39;ve had the privilege to work with.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative ${index % 2 === 0 ? "md:pl-10" : "md:pr-10 md:text-right"
                    }`}
                  ref={(el) => (experienceRefs.current[index] = el)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

                  {/* Experience Card */}
                  <Card
                    className={`opacity-0 ${index % 2 === 0
                      ? "ml-auto md:mr-10 md:ml-0"
                      : "mr-auto md:ml-10 md:mr-0"
                      }`}
                    style={{ maxWidth: "calc(100% - 1rem)" }}
                  >
                    <CardHeader>
                      <CardTitle>{experience.title}</CardTitle>
                      <CardDescription>
                        {experience.company} | {experience.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{experience.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}