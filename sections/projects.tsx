"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/framer";
import { Card, CardInner } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: "AI Financial Assistant",
    description:
      "GenAI tool that explains financial concepts, analyzes portfolios, and suggests data-driven investment strategies using LLMs and retrieval.",
    tech: ["LLMs", "RAG", "LangChain", "Python", "FastAPI"],
    github: "https://github.com/himanshu-ai-ml/ai-financial-assistant",
    demo: "https://ai-financial-assistant.example.com"
  },
  {
    title: "AI Mental Health Companion",
    description:
      "Conversational AI system providing empathetic dialogue, mood tracking, and mental wellness insights with guardrails and safety layers.",
    tech: ["NLP", "LLMs", "Conversation Design", "React", "Python"],
    github: "https://github.com/himanshu-ai-ml/ai-mental-health-companion",
    demo: "https://ai-mental-health-companion.example.com"
  },
  {
    title: "AI Course Generator",
    description:
      "Generative AI platform that creates structured programming courses with outlines, lessons, quizzes, and video scripts from a single prompt.",
    tech: ["Generative AI", "LLMs", "Next.js", "TypeScript"],
    github: "https://github.com/himanshu-ai-ml/ai-course-generator",
    demo: "https://ai-course-generator.example.com"
  },
  {
    title: "Task Whisperer",
    description:
      "AI-powered task management assistant that prioritizes work, predicts deadlines, and suggests next actions using historical behavior.",
    tech: ["Time Series", "Recommendation", "LLMs", "React"],
    github: "https://github.com/himanshu-ai-ml/task-whisperer",
    demo: "https://task-whisperer.example.com"
  }
];

export function ProjectsSection(): JSX.Element {
  return (
    <section id="projects" className="section-padding bg-slate-950">
      <div className="container-default space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Projects
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Selected AI &amp; ML work.
            </h2>
          </div>
          <p className="max-w-md text-xs text-slate-300 md:text-sm">
            A curated set of projects that highlight end-to-end execution:
            scoping, experimentation, model design, evaluation, and product
            integration.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: 0.06 * index,
                duration: 0.5,
                ease: [0.22, 0.61, 0.36, 1]
              }}
            >
              <Card className="group h-full">
                <CardInner className="flex h-full flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-semibold text-slate-50">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 px-2 py-1 hover:border-accent hover:text-accent"
                        >
                          <Github className="h-3 w-3" />
                          <span>Code</span>
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-1 text-accent hover:bg-accent/20"
                        >
                          <ExternalLink className="h-3 w-3" />
                          <span>Demo</span>
                        </a>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-300 md:text-[13px]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <Badge
                        key={item}
                        className="bg-slate-900/80 text-[11px] group-hover:bg-slate-800"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardInner>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

