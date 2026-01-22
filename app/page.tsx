import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Split Layout */}
      <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight">
                <span className="text-teal-600 dark:text-teal-400">Mutakilu</span>{" "}
                <span className="font-mono">Mukailu</span>{" "}
                <span className="text-base sm:text-lg lg:text-xl font-normal text-neutral-500 dark:text-neutral-500 italic font-mono">
                  (Muta)
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 font-mono">
                AI Engineer, Researcher, and Startup Founder
              </p>
            </div>

            <div className="space-y-4 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed animate-slide-up">
              <p>
                Hi, I'm Muta, an AI engineer and founder based in Ghana. I've spent over five years building 
                machine learning systems, backend services, and scalable architectures that power real-world 
                applications across healthcare, finance, and e-commerce. Previously, I worked as both an AI 
                and backend engineer at Turing, where I contributed to high-impact projects including Apple 
                Intelligence, Amazon Nova, and the development of a custom benchmarking framework for evaluating 
                and improving production AI systems.
              </p>
              <p>
                I have a strong foundation in mathematics, statistics, and system design, and I enjoy working 
                across the full stack of intelligent systems, from data pipelines and model evaluation to APIs, 
                infrastructure, and deployment. I'm particularly interested in building AI that is not only accurate, 
                but robust, scalable, and well-architected.
              </p>
              <p>
                I'm the founder of Fyrstly.io, a product born from my interest in entrepreneurship and problem-first 
                thinking. Fyrstly helps tech job seekers tailor their resumes to roles in minutes by automating 
                relevance with AI. The goal is simple: reduce friction, improve fairness, and help capable people get 
                noticed for the right reasons.
              </p>
              <p>
                Beyond commercial products, I'm deeply motivated by AI for good, especially applications that improve 
                lives and expand opportunity in Africa. This is why I'm working on UniHelpDesk, a centralized platform 
                designed to streamline tertiary education decision-making for high school students in Ghana using AI, 
                data, and behavioral insights.
              </p>
              <p>
                I share what I learn publicly, from AI engineering and backend architecture to product and startup 
                lessons, because I believe progress comes from clarity, iteration, and openness. Outside of work, 
                I'm a husband and father who enjoys nature, bike rides, and the occasional hike. These moments help 
                me reset and think long-term.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 italic">
                This site is a living record of my work, ideas, and growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 dark:bg-teal-400/20 backdrop-blur-sm text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium hover:bg-teal-500/30 dark:hover:bg-teal-400/30 transition-colors border border-teal-400/30 dark:border-teal-500/30"
              >
                View Projects
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/publications"
                className="group inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 dark:bg-teal-400/20 backdrop-blur-sm text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium hover:bg-teal-500/30 dark:hover:bg-teal-400/30 transition-colors border border-teal-400/30 dark:border-teal-500/30"
              >
                View Publications
                <BookOpen className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 dark:bg-teal-400/20 backdrop-blur-sm text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium hover:bg-teal-500/30 dark:hover:bg-teal-400/30 transition-colors border border-teal-400/30 dark:border-teal-500/30"
              >
                Contact
                <Mail className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Side - Photo (1/3) */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-[333px] sm:w-80 sm:h-[416px] lg:w-full lg:max-w-sm lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-teal-600/20 dark:from-teal-500/20 dark:to-teal-700/20 rounded-2xl blur-2xl -z-10"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-teal-200 dark:border-teal-800 shadow-2xl bg-neutral-100 dark:bg-neutral-800">
                <Image
                  src="/prof-pic.JPG"
                  alt="Mutakilu Mukailu - AI Engineer & Researcher"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-300/20 dark:bg-teal-700/20 rounded-full blur-3xl -z-10 animate-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 dark:bg-teal-600/10 rounded-full blur-3xl -z-10"></div>
      </section>
    </div>
  );
}
