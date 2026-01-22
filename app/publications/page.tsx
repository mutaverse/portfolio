import { FileText } from "lucide-react";

export const metadata = {
  title: "Publications",
  description: "Research publications and papers in AI, machine learning, and related fields.",
};

export default function Publications() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
          Publications
        </h1>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <FileText className="h-6 w-6 text-teal-600 dark:text-teal-400 mt-1 flex-shrink-0" />
          <div className="space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I am currently working on several research-driven projects, and formal publications are forthcoming. 
              My research interests center on <strong className="font-semibold">AI for good</strong>, with a particular focus on how small and efficient 
              language models (SLMs) and applied AI systems can be designed to improve access, decision-making, 
              and opportunity in underrepresented regions, especially across Africa.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              My work explores the intersection of technical rigor and real-world impact, using AI to address 
              practical challenges in education, employment, and information access. Projects such as <strong className="font-semibold">UniHelpDesk </strong> 
               reflect this direction, and this section will be updated as research outputs are released.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
