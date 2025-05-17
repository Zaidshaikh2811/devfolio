"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Public Transport Complaint Portal",
    description: "A full-stack web app for users to report and track public transport complaints with real-time status updates and media support.",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Neon Database", "Drizzle ORM", "Typescript", "Tailwind CSS"],
    demoUrl: "https://public-transport-complain.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/PublicTransportComplain",
    longDescription: "The Public Transport Complaint Portal addresses the common issue of delayed or ignored complaints in public transportation. It provides a simple, user-friendly platform for commuters to submit issues with details and media evidence, helping authorities respond more effectively By allowing real- time status tracking and optional anonymous submissions, the app increases transparency and ensures complaints are acknowledged and resolved promptly, improving trust and service quality in public transport systems.",
  },
  {
    id: 2,
    title: " Developer Community Platform",
    description: " A real- time social platform for developers to share updates, showcase work, and engage  with the tech community.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["NextJS", "Tailwind", "Typescript", "Framer Motion"],
    demoUrl: "https://devpulse-ruddy.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/Devpulse",
    longDescription: "DevPulse is a community-driven platform built for developers to share updates, projects, and insights in real time. Unlike general-purpose social media, it offers a focused space for tech enthusiasts to engage, connect, and grow together. With features like user authentication, post interactions, and a clean UI, DevPulse encourages collaboration and continuous learning within the developer ecosystem.",
  },
  {
    id: 3,
    title: "Mock Interview Simulator",
    description: "A web app to help users practice technical interviews with timed questions and instant feedback.",
    image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Nextjs", "Tailwind", "Clerk", "Neon Database", "Drizzle ORM", "Gemini AI"],
    demoUrl: "https://mock-interview-five.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/MockInterview",
    longDescription: " Mock Interview is a web application that simulates real-world technical interviews. It presents users with timed coding and behavioral questions to help improve performance under pressure. The app offers a clean, focused interface for practicing interview skills and tracking progress. It's ideal for students and job seekers preparing for tech roles.",
  },
  {
    id: 4,
    title: "AI Travel Planner",
    description: "An AI-powered web app that creates personalized travel itineraries based on user preferences.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Express", "MongoDB", "Google Maps API"],
    demoUrl: "https://ai-travel-7tbm.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/AI-Travel",
    longDescription: "AI Travel is a smart itinerary planner that uses AI to generate custom travel plans based on user inputs like destination, duration, and interests. It eliminates the hassle of manual trip planning by instantly suggesting activities, places to visit, and optimal schedules. With a simple and intuitive interface, it helps travelers explore more efficiently and confidently.",
  },
  {
    id: 5,
    title: "Next Social Media Platform",
    description: "A modern full-stack social media app with real-time interactions, posting, and user engagement features.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["NextJS", "Typescript", "ImageKit", "Neon Database", "Prisma", "Clerk"],
    demoUrl: "https://next-social-media-kappa.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/Next_Social_Media",
    longDescription: "Next Social Media is a dynamic social networking platform where users can create posts, like, comment, and interact in real time. Built with Next.js and Firebase, it delivers a seamless user experience with authentication, responsive design, and smooth data flow. The app replicates core social media functionality with a focus on performance and usability.",
  },
  {
    id: 6,
    title: "JobBoard – Job Listing Platform",
    description: "A web app for browsing, posting, and managing job listings across various roles and industries.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: [" Next.js", "Tailwind", "Clerk", "Stripe"],
    demoUrl: "https://job-board-pi-seven.vercel.app/",
    githubUrl: "https://github.com/Zaidshaikh2811/JobBoard",
    longDescription: "JobBoard is a job listing platform that allows companies to post openings and candidates to browse and apply for roles. It features categorized job listings, detailed job views, and a clean, responsive UI. Built to simplify the hiring process, it connects job seekers with opportunities in an intuitive and efficient way. ",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<Array<HTMLElement | null>>([]);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

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

    // Observe each project card
    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-16 md:py-24 opacity-0">
      <div className="container px-4 md:px-6 mx-auto" >
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            A showcase of my recent work, from web applications to mobile apps.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group overflow-hidden transition-all hover:shadow-lg opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline">+{project.tags.length - 3}</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-6 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openProject(project)}
                >
                  View Details
                </Button>
                <div className="flex space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Live Demo</span>
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={closeProject}>
        {selectedProject && (
          <DialogContent className="sm:max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <p>{selectedProject.longDescription}</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}