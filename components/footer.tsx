import { Github, Linkedin, Mail, Briefcase } from "lucide-react";

const links = {
  email: "mailto:himanshu.ai.engineer@example.com",
  linkedin: "https://www.linkedin.com/in/himanshu-ai-ml",
  github: "https://github.com/himanshu-ai-ml",
  upwork: "https://www.upwork.com/freelancers/~himanshu-ai-ml"
};

export function Footer(): JSX.Element {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90">
      <div className="container-default flex flex-col gap-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} Himanshu Kumar. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={links.email}
            className="flex items-center gap-1 hover:text-accent"
          >
            <Mail className="h-3 w-3" />
            <span>Email</span>
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-accent"
          >
            <Linkedin className="h-3 w-3" />
            <span>LinkedIn</span>
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-accent"
          >
            <Github className="h-3 w-3" />
            <span>GitHub</span>
          </a>
          <a
            href={links.upwork}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-accent"
          >
            <Briefcase className="h-3 w-3" />
            <span>Upwork</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

