"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const technologies = [
  {
    name: "React",
    logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    color: "#61DAFB"
  },
  {
    name: "Next.js",
    logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    color: "#000000"
  },
  {
    name: "Node.js",
    logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    color: "#339933"
  },
  {
    name: "MongoDB",
    logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    color: "#47A248"
  },
  {
    name: "TypeScript",
    logo: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    color: "#3178C6"
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    color: "#06B6D4"
  },
  {
    name: "React Native",
    logo: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    color: "#61DAFB"
  },
  {
    name: "GraphQL",
    logo: "https://cdn.worldvectorlogo.com/logos/graphql.svg",
    color: "#E10098"
  },
  {
    name: "Firebase",
    logo: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
    color: "#FFCA28"
  },
  {
    name: "Redis",
    logo: "https://cdn.worldvectorlogo.com/logos/redis.svg",
    color: "#DC382D"
  },
  {
    name: "AWS",
    logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
    color: "#FF9900"
  },
  {
    name: "Docker",
    logo: "https://cdn.worldvectorlogo.com/logos/docker.svg",
    color: "#2496ED"
  }
];

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const techRefs = useRef<Array<HTMLElement | null>>([]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    techRefs.current.forEach((tech) => {
      if (tech) observer.observe(tech);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 opacity-0">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Tech Stack
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            The technologies, frameworks, and tools I work with to build exceptional applications.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              ref={(el) => (techRefs.current[index] = el)}
              className="group flex flex-col items-center opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-muted p-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                <div className="relative h-12 w-12">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    fill
                    className="object-contain"
                    style={{ filter: "grayscale(100%)" }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.filter = "grayscale(0%)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.filter = "grayscale(100%)";
                    }}
                  />
                </div>
              </div>
              <span className="text-center font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}