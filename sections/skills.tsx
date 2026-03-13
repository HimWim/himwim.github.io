"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/framer";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    title: "AI & ML",
    items: [
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Generative AI",
      "LLM Applications"
    ]
  },
  {
    title: "Programming",
    items: ["Python", "C++", "JavaScript", "SQL"]
  },
  {
    title: "Frameworks & Tools",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "HuggingFace",
      "LangChain",
      "FastAPI",
      "Docker"
    ]
  },
  {
    title: "Data",
    items: ["Pandas", "NumPy", "Data Visualization"]
  }
];

export function SkillsSection(): JSX.Element {
  return (
    <section id="skills" className="section-padding bg-slate-950/80">
      <div className="container-default space-y-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Skills
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            From research to production-ready AI systems.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-[15px]">
            A focused stack around deep learning, LLMs, and data products. I
            combine strong fundamentals with modern tooling to ship robust,
            maintainable systems.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={index + 1}
              className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-slate-900/80 p-4 shadow-lg shadow-black/40"
            >
              <div className="absolute inset-px rounded-[1.6rem] border border-slate-800/60" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {category.title}
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    {category.items.length} skills
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.items.map((item) => (
                    <Badge key={item} className="bg-slate-900/80 text-[11px]">
                      {item}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-900/80">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500"
                    style={{ width: `${70 + index * 6}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

