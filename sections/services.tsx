"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/framer";
import { Card, CardInner } from "@/components/ui/card";

const services = [
  {
    title: "AI Model Development",
    description:
      "Custom machine learning and deep learning solutions tailored to your data and business KPIs.",
    points: [
      "Problem framing & metric design",
      "Model architecture & experimentation",
      "Evaluation, monitoring, and iteration"
    ]
  },
  {
    title: "LLM / Generative AI Apps",
    description:
      "End-to-end LLM-powered applications: chatbots, copilots, and content generation tools.",
    points: [
      "Prompt & system design",
      "RAG, tools, and workflows",
      "Guardrails & safety"
    ]
  },
  {
    title: "Data Science & Analytics",
    description:
      "Turn raw data into insights with robust analytics, dashboards, and predictive models.",
    points: [
      "Exploratory data analysis",
      "Feature engineering",
      "Dashboards & reporting"
    ]
  },
  {
    title: "AI Integration",
    description:
      "Integrate AI capabilities into existing products, web apps, or internal tools.",
    points: [
      "APIs & microservices",
      "Scalable deployment",
      "Performance & cost optimization"
    ]
  }
];

export function ServicesSection(): JSX.Element {
  return (
    <section id="services" className="section-padding bg-slate-950/80">
      <div className="container-default space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Freelance Services
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            How I can help your team.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-[15px]">
            From early-stage prototypes to production systems, I work with
            startups and teams to design, build, and ship AI solutions that
            create measurable impact.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={index + 1}
            >
              <Card>
                <CardInner className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-300 md:text-[13px]">
                    {service.description}
                  </p>
                  <ul className="mt-1 space-y-1.5 text-[11px] text-slate-300">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardInner>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

