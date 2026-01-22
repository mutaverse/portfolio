import Link from "next/link";
import { Linkedin, Twitter, Youtube, Github, GraduationCap } from "lucide-react";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            © {currentYear} Mutakilu Mukailu. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
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
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
