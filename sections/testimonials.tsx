"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/framer";
import { Card, CardInner } from "@/components/ui/card";

const testimonials = [
  {
    name: "Founder, Fintech Startup",
    role: "Stealth mode",
    quote:
      "Himanshu quickly understood our domain and shipped an LLM-powered assistant that significantly improved how our users understand investment decisions.",
    meta: "Delivered a working MVP in weeks with clear communication."
  },
  {
    name: "Product Lead",
    role: "Health & Wellness Platform",
    quote:
      "The AI mental health companion was designed with empathy and strong technical guardrails. It became one of the most engaged features in the product.",
    meta: "Collaborated closely with product, design, and legal teams."
  },
  {
    name: "CTO",
    role: "EdTech Company",
    quote:
      "Our AI course generator dramatically cut content creation time. Himanshu balanced research and engineering to ship something reliable and scalable.",
    meta: "Helped us move from idea to production with confidence."
  }
];

export function TestimonialsSection(): JSX.Element {
  return (
    <section id="testimonials" className="section-padding bg-slate-950">
      <div className="container-default space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Testimonials
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
            What collaborators say.
          </h2>
          <p className="mt-3 text-sm text-slate-300 md:text-[15px]">
            Placeholder testimonials showcasing how clients and teams experience
            working with me. Replace these with real quotes as projects go live.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={index + 1}
            >
              <Card>
                <CardInner className="flex h-full flex-col justify-between gap-4">
                  <p className="text-xs leading-relaxed text-slate-200 md:text-[13px]">
                    “{item.quote}”
                  </p>
                  <div className="space-y-1 text-xs text-slate-300">
                    <p className="font-semibold text-slate-100">
                      {item.name}
                    </p>
                    <p className="text-slate-400">{item.role}</p>
                    <p className="text-[11px] text-slate-400">{item.meta}</p>
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

