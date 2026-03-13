"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/framer";

export function AboutSection(): JSX.Element {
  return (
    <section id="about" className="section-padding bg-slate-950/60">
      <div className="container-default grid gap-10 md:grid-cols-[1.4fr_minmax(0,1.1fr)] items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            About Me
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            AI engineer focused on building real-world intelligent products.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 md:text-[15px]">
            I&apos;m Himanshu Kumar, an AI &amp; Machine Learning Engineer with a{" "}
            <span className="font-medium text-slate-100">
              B.Tech in AI &amp; Data Science from IIT Patna
            </span>
            . I specialize in designing and deploying production-ready AI systems
            that combine{" "}
            <span className="text-sky-300">
              deep learning, large language models, and generative AI
            </span>{" "}
            to solve complex business problems.
          </p>
          <p className="text-sm leading-relaxed text-slate-300 md:text-[15px]">
            My work spans{" "}
            <span className="text-sky-300">
              LLM-powered assistants, GenAI products, recommendation engines,
              and intelligent automation
            </span>
            . With a strong foundation in{" "}
            <span className="font-medium text-slate-100">
              Python, data science, and modern ML tooling
            </span>
            , I deliver solutions that are not just accurate, but also
            maintainable, scalable, and aligned with product goals.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-5 text-xs text-slate-200 shadow-xl shadow-black/40 backdrop-blur"
        >
          <div className="grid gap-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Role</span>
              <span className="font-medium text-slate-100">
                AI &amp; ML Engineer
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Education</span>
              <span className="font-medium text-slate-100">
                B.Tech, AI &amp; Data Science (IIT Patna)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Competitive Programming</span>
              <span className="font-medium text-slate-100">
                Codeforces Specialist
              </span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] text-slate-300">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
              <p className="font-semibold text-slate-100">
                What clients get
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Production-grade ML &amp; LLM systems</li>
                <li>• Clear communication &amp; documentation</li>
                <li>• Fast iterations and prototypes</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3">
              <p className="font-semibold text-slate-100">
                How I work
              </p>
              <ul className="mt-2 space-y-1">
                <li>• Problem-first, not model-first</li>
                <li>• Measurable impact &amp; metrics</li>
                <li>• Close collaboration with teams</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

