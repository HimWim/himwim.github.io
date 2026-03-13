"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/framer";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection(): JSX.Element {
  return (
    <section
      id="hero"
      className="relative overflow-hidden section-padding pt-28 noise-bg"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(79,70,229,0.25),transparent_55%)]" />

      <div className="container-default relative grid gap-12 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="space-y-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-xs text-slate-300 shadow-lg shadow-black/40 backdrop-blur">
            <Sparkles className="h-3 w-3 text-accent" />
            <span>AI &amp; Machine Learning Engineer</span>
            <span className="h-1 w-1 rounded-full bg-emerald-400" />
            <span className="text-emerald-300">Open for freelance work</span>
          </div>

          <div className="space-y-4">
            <h1 className="bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl lg:text-6xl">
              Himanshu Kumar
            </h1>
            <p className="text-lg font-medium text-slate-200 md:text-xl">
              Building intelligent systems using AI, Deep Learning, and
              Generative AI.
            </p>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              I design, build, and deploy production-grade AI solutions &mdash;
              from LLM-powered assistants and generative applications to
              end-to-end machine learning systems that deliver real business
              value.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" variant="accent">
              <a href="#contact" className="flex items-center gap-2">
                Hire Me
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 pt-2 text-xs text-slate-300">
            <div>
              <p className="font-semibold text-slate-100">Core Focus</p>
              <p>LLMs, Generative AI, Deep Learning</p>
            </div>
            <div>
              <p className="font-semibold text-slate-100">Location</p>
              <p>Remote · Open to global clients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative mx-auto h-64 w-64 max-w-xs md:h-72 md:w-72 lg:h-80 lg:w-80"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-secondary via-indigo-500 to-cyan-400 opacity-70 blur-3xl" />
          <div className="relative flex h-full w-full flex-col justify-between rounded-[2rem] border border-slate-700/80 bg-slate-950/90 p-6 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl">
            <div>
              <p className="text-xs text-slate-400">Profile</p>
              <p className="pt-1 text-lg font-semibold text-slate-50">
                AI &amp; ML Engineer
              </p>
            </div>
            <div className="space-y-3 text-xs text-slate-200">
              <div className="flex items-center justify-between">
                <span>Deep Learning</span>
                <span className="text-cyan-300">Expert</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400" />
              </div>
              <div className="flex items-center justify-between">
                <span>LLM Applications</span>
                <span className="text-cyan-300">Advanced</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400" />
              </div>
              <div className="flex items-center justify-between">
                <span>GenAI Products</span>
                <span className="text-cyan-300">Production</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400" />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
              <span>B.Tech AI &amp; Data Science · IIT Patna</span>
              <span>Codeforces Specialist</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

