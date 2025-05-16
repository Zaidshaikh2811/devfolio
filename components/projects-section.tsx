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
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Node.js, and MongoDB.",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription: "A comprehensive e-commerce solution with product management, shopping cart, user authentication, payment processing with Stripe, and order tracking. Built with Next.js for the frontend and Node.js/Express for the backend with MongoDB as the database.",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription: "A productivity application that allows teams to manage tasks collaboratively with real-time updates. Features include task creation, assignment, due dates, priority levels, comments, and file attachments. Built with React, Firebase for real-time database and authentication, and Redux for state management.",
  },
  {
    id: 3,
    title: "Fitness Tracking Mobile App",
    description: "A cross-platform mobile app for tracking workouts and nutrition.",
    image: "https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React Native", "Node.js", "PostgreSQL", "GraphQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription: "A comprehensive fitness tracking application that allows users to log workouts, track progress, set goals, and monitor nutrition. Features include custom workout plans, progress charts, and social sharing. Built with React Native for iOS and Android, with a Node.js backend and PostgreSQL database. GraphQL is used for efficient API queries.",
  },
  {
    id: 4,
    title: "Real Estate Listing Platform",
    description: "A platform for property listings with advanced search and filtering.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Express", "MongoDB", "Google Maps API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription: "A modern real estate platform featuring property listings, advanced search with filters, saved favorites, and map-based exploration. Includes agent profiles, property comparison, and virtual tour scheduling. Built with Next.js for the frontend, Express for the backend, MongoDB for the database, and integrated with Google Maps API for location-based features.",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "A dashboard for managing multiple social media accounts and analytics.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "D3.js", "Node.js", "OAuth"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription: "A comprehensive social media management tool allowing users to manage multiple accounts across platforms, schedule posts, analyze engagement metrics, and monitor brand mentions. Features interactive charts built with D3.js for visualizing analytics data. Implemented with React frontend, Node.js backend, and OAuth integration with various social media platforms.",
  },
  {
    id: 6,
    title: "Weather Forecast App",
    description: "A beautiful weather application with 7-day forecasts and location-based data.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Weather API", "Geolocation", "PWA"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription: "A progressive web application that provides current weather conditions and 7-day forecasts based on user location or search. Features include hourly predictions, weather alerts, and animated weather visuals. Implemented as a PWA for offline capabilities and installable experience using React, OpenWeatherMap API, and browser geolocation.",
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
          <DialogContent className="sm:max-w-3xl">
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