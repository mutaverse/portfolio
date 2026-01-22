import Link from "next/link";
import { Mail, Linkedin, Twitter, Youtube, Github, GraduationCap } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mutakilu-mukailu",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/codewithmuta",
    icon: Twitter,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@codewithmuta",
    icon: Youtube,
  },
  {
    name: "GitHub",
    href: "https://github.com/mutaverse",
    icon: Github,
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com",
    icon: GraduationCap,
  },
];

export const metadata = {
  title: "Contact",
  description: "Get in touch via email or connect on social media.",
};

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
          Get In Touch
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
        I’m always open to thoughtful conversations around AI research, meaningful collaborations, and impactful projects. 
        I’m particularly interested in research collaborations in AI/ML, technical consulting or advisory roles, and product-focused problem solving. 
        I also welcome speaking engagements, workshops, and opportunities to contribute to or mentor within open-source and technical communities. 
        Feel free to reach out through any of the channels below.
        </p>
      </div>

      <div className="space-y-12">
        {/* Email */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50 hover:border-teal-500 dark:hover:border-teal-600 transition-all duration-300">
            <Mail className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            <Link
              href="mailto:mutakilumukailu@gmail.com"
              className="text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              mutakilumukailu@gmail.com
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">
            Connect
          </h2>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="h-6 w-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
