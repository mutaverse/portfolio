import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Rocket, Code2 } from "lucide-react";

const projects = [
  {
    title: "Fyrstly",
    type: "startup",
    description: "A career success platform for tech job hunting. Fyrstly uses AI to analyze resumes and match them to roles with precision, helping candidates present their experience clearly and relevantly.",
    image: "/fyrstly.svg",
    links: {
      website: "https://fyrstly.io",
      github: "#",
    },
  },
  {
    title: "UniHelpDesk",
    type: "project",
    description: "a centralized platform designed to streamline tertiary education decision-making for high school students in Ghana using AI, data, and behavioral insights.",
    image: "/unihelpdesk.svg",
    links: {
      website: "https://unihelpdesk.com",
      github: "#",
      
    },
  },
  {
    title: "Quest0",
    type: "project",
    description: " A multi-agent AI platform that analyzes research papers to identify gaps and generate level-specific research topics.",
    image: "/quest0.svg",
    links: {
      github: "https://github.com/mutaverse/Quest0",
    },
  },
  {
    title: "GuadianML",
    type: "project",
    description: "A robust AutoML pipeline for automating model training and evaluation for fraud classification.",
    image: "/guardianml.svg",
    links: {
      github: "https://github.com/mutaverse/GuardianML",
    },
  }
];

export const metadata = {
  title: "Projects",
  description: "Technical projects and startups I've built and contributed to.",
};

export default function Projects() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
          Projects
        </h1>
      </div>

      <div className="space-y-12">
        {projects.map((project, idx) => (
          <div key={idx} className="group">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Project Image */}
              <div className="relative flex-shrink-0 w-full sm:w-48 h-32 sm:h-32 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/50 dark:to-teal-800/50">
                    <div className="text-center">
                      {project.type === "startup" ? (
                        <Rocket className="h-8 w-8 mx-auto text-teal-600 dark:text-teal-400" />
                      ) : (
                        <Code2 className="h-8 w-8 mx-auto text-teal-600 dark:text-teal-400" />
                      )}
                      <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 font-mono">
                        Image
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="flex-1 space-y-3">
                <div className="flex items-start gap-3">
                  <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h2>
                  <span className={`px-2 py-1 text-xs font-mono rounded ${
                    project.type === "startup"
                      ? "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
                  }`}>
                    {project.type === "startup" ? "Startup" : "Project"}
                  </span>
                </div>
                
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  {project.links.website && (
                    <Link
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Website
                    </Link>
                  )}
                  {project.links.github && (
                    <Link
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  )}
                  {project.links.demo && (
                    <Link
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
