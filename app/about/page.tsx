"use client";

import { useState } from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const education = [
  {
    institution: "Kwame Nkrumah University of Science and Technology",
    degree: "Bachelor of Science in Actuarial Science",
    period: "2020 - 2024",
    description: "Focused on statistics, machine learning, mathematics, finance and risk management.",
  },
];

const experience = [
  {
    role: "Founder",
    company: "Fyrstly",
    period: "December 2025 - Present",
    description: "A career success platform for tech job hunting.",
    achievements: [
      "I founded Fyrstly.io to rethink how job seekers navigate the technical hiring process. At its core, Fyrstly uses AI to analyze resumes and match them to roles with precision, helping candidates present their experience clearly and relevantly. I’m responsible for shaping the product vision, leading system design, and building the backend and AI components that power the platform. This includes designing data pipelines, developing model integration for relevance scoring, and iterating on the user experience based on real usage patterns. Alongside development, I share insights publicly on AI engineering, product strategy, and early-stage startup building emphasizing clarity, iteration, and effectiveness."
    ],
  },
  {
    role: "Python Engineer (Data Platform & Pipelines)",
    company: "Hive Data Services Limited",
    period: "Jan 2026 - Present",
    description: "Ghana",
    achievements: [
      "I’m joining Hive Data Services as a Python Engineer working on data platforms and pipelines. My focus is on improving pipeline reliability, observability, testing, and orchestration, as well as supporting AI-assisted development workflows. The role sits at the intersection of data engineering and applied AI, with an emphasis on building robust, maintainable systems that support financial data products at scale."
    ]
  },
  {
    role: "Backend Engineer",
    company: "Turing",
    period: "Jun 2025 - Aug 2025",
    description: "Palo Alto, CA, USA",
    achievements: [
      "At Turing, I worked as a backend engineer on a real-time audio collaboration platform serving top AI clients. I architected and deployed RESTful APIs with role-based authentication, and designed session management systems for lobby-based user grouping. The work involved building and operating Dockerized services using NestJS, TypeScript, and PostgreSQL, with a strong focus on reliability and performance. Through query optimization and system-level improvements, I helped reduce response times significantly for concurrent users. I collaborated closely with product and design teams in a fast-paced, fully remote environment, shipping features on a weekly cadence."
    ],
  },
  {
    role: "AI Engineer",
    company: "Turing",
    period: "Aug 2024 - Jun 2025",
    description: "Palo Alto, CA, USA",
    achievements: [
      "As an AI engineer at Turing, I worked on large-scale model development and evaluation projects for frontier AI systems. I led parts of the RLHF pipeline for Apple Foundation Models, contributing to improvements in code generation quality across Python and JavaScript. I also built evaluation tooling and structured benchmarking datasets for Amazon Nova, assessing model reasoning across tens of thousands of test scenarios. My work included designing multi-turn prompting strategies, stress-testing LLM behavior, and collaborating with product teams to define model requirements and iterate quickly in production-oriented research workflows."
    ],
  },
  {
    role: "AI Research Assistant",
    company: "LHydra-com",
    period: "Sep 2023 - Mar 2024",
    description: "Fargo, ND, USA",
    achievements: [
      "At LHydra-com, I worked as an AI research assistant on recommendation systems and applied machine learning for social impact. I researched and prototyped hybrid recommender models that combined collaborative filtering with content-based approaches, and analyzed demographic patterns influencing user preferences at scale. The work involved processing and analyzing over a million data points using Python-based data tooling, and contributing to the evaluation framework used to assess model performance. This role strengthened my interest in applied research and data-driven system design for real-world decision-making."
    ]
  }
];

const skills = [
  { category: "Languages & Frameworks", items: ["Python", "TypeScript", "Node.js", "NestJS", "FastAPI", "LangChain", "CrewAI", "AISuite"] },
  { category: "AI/ML", items: ["LLMs", "RLHF", "Prompt Engineering", "Embeddings", "Model Evaluation", "RAG concepts", "Recommendation Systems", "Agentic AI", "Finetuning", "Data Curation"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL"] },
  { category: "Data Science", items: ["Pandas", "NumPy", "Data Analysis", "TensorFlow", "PyTorch", "scikit-learn", "Feature Engineering"] },
  { category: "DevOps & Infrastructure", items: ["GCP", "Docker", "Git", "CI/CD fundamentals", "Infrastructure as Code concepts"] },
  { category: "APIs & Development", items: ["RESTful APIs"] },
  { category: "Project Management", items: ["JIRA"] },
];

const tabs = [
  { id: "experience", label: "Work Experience", icon: Briefcase },
  { id: "education", label: "Educational Background", icon: GraduationCap },
  { id: "skills", label: "Skills & Expertise", icon: Award },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
          About Me
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
        I’m a lifelong learner who enjoys experimenting, building, and understanding how things work. 
        I like exploring new ideas, testing them in practice, and refining them through iteration.
        Below, you’ll find my technical experience, expertise, and educational background.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="mb-8 border-b border-neutral-200 dark:border-neutral-800">
        <nav className="flex space-x-8 overflow-x-auto scrollbar-hide" aria-label="Tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  group relative flex items-center gap-2 px-4 py-4 text-base font-medium transition-all duration-300 border-b-2 rounded-t-lg
                  ${
                    isActive
                      ? "text-teal-600 dark:text-teal-400 border-teal-600 dark:border-teal-400 bg-teal-50/30 dark:bg-teal-900/10"
                      : "text-neutral-500 dark:text-neutral-500 border-transparent hover:text-neutral-700 dark:hover:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-600"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className={`h-5 w-5 transition-all duration-300 ${isActive ? "text-teal-600 dark:text-teal-400" : "text-neutral-400 dark:text-neutral-600"}`} />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="relative min-h-[400px]">
        {/* Work Experience */}
        {activeTab === "experience" && (
          <div className="animate-fade-in space-y-8">
            {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-teal-500 dark:border-teal-600">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-500 dark:bg-teal-600"></div>
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                      {exp.role}
                    </h3>
                    <p className="text-teal-600 dark:text-teal-400 font-medium">{exp.company}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">{exp.period}</p>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-3">{exp.description}</p>
                  {exp.achievements && (
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <p key={i} className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {achievement}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}

        {/* Educational Background */}
        {activeTab === "education" && (
          <div className="animate-fade-in space-y-8">
            {/* Research Direction */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                Research Direction
              </h3>
              <div className="space-y-4">
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  I plan to pursue a PhD in Artificial Intelligence by 2028, with a focus on building rigorous, 
                  research-driven systems that translate into real-world impact. I'm particularly interested in 
                  machine learning, evaluation, and system design, and in applying AI responsibly to problems that 
                  improve lives, especially in education, employment, and access to opportunity in underrepresented 
                  regions.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  My long-term goal is to contribute original research while building technologies that are 
                  both technically sound and socially meaningful.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-3">{edu.period}</p>
                  <p className="text-neutral-700 dark:text-neutral-300">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {activeTab === "skills" && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="p-6 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
