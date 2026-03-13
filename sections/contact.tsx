"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/framer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Briefcase } from "lucide-react";

const CONTACT = {
  email: "himanshu.ai.engineer@example.com",
  linkedin: "https://www.linkedin.com/in/himanshu-ai-ml",
  github: "https://github.com/himanshu-ai-ml",
  upwork: "https://www.upwork.com/freelancers/~himanshu-ai-ml"
};

export function ContactSection(): JSX.Element {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Placeholder: integrate with email/API later
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-padding bg-slate-950/90">
      <div className="container-default grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Contact
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            Let&apos;s build your next AI product.
          </h2>
          <p className="max-w-md text-sm text-slate-300 md:text-[15px]">
            Share a few details about your project, timelines, and expectations.
            I&apos;ll respond with next steps, potential approaches, and
            availability.
          </p>

          <div className="mt-4 space-y-3 text-sm text-slate-200">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              <span>{CONTACT.email}</span>
            </a>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-accent"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-accent"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={CONTACT.upwork}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-accent"
              >
                <Briefcase className="h-3.5 w-3.5" />
                <span>Upwork</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={1}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 shadow-xl shadow-black/40 backdrop-blur"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1.5 text-xs">
                <label htmlFor="name" className="text-slate-200">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-1.5 text-xs">
                <label htmlFor="email" className="text-slate-200">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <label htmlFor="budget" className="text-slate-200">
                Budget (optional)
              </label>
              <Input
                id="budget"
                name="budget"
                placeholder="e.g. $2k–$5k, $10k+"
              />
            </div>

            <div className="space-y-1.5 text-xs">
              <label htmlFor="project" className="text-slate-200">
                Project description
              </label>
              <Textarea
                id="project"
                name="project"
                placeholder="Briefly describe the problem, target users, and what success looks like."
                required
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="text-[11px] text-slate-400">
                I usually respond within 24–48 hours.
              </p>
              <Button
                type="submit"
                size="sm"
                variant="accent"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send message"}
              </Button>
            </div>

            {submitted && (
              <p className="text-[11px] text-emerald-400">
                Thanks for reaching out! This is a demo form – wire it to your
                email or backend to make it live.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

