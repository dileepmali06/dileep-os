"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, MessageSquare, Rocket } from "lucide-react";

import { Container } from "../ui/container";

const reasons = [
  { icon: Zap, title: "Fast turnaround", desc: "Clear communication and quick iterations, no long silences." },
  { icon: ShieldCheck, title: "Reliable delivery", desc: "I build things that actually ship and hold up in production." },
  { icon: MessageSquare, title: "Straightforward", desc: "No jargon, no surprises — just honest updates as I work." },
  { icon: Rocket, title: "Full ownership", desc: "From planning to deployment, I treat every project like my own." },
];

export default function HireMe() {
  return (
    <section className="pb-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            Why work with me
          </p>
          <h2 className="mt-1 text-3xl font-black sm:text-4xl">What you can expect</h2>

          <div className="mt-8 overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className={`flex items-start gap-5 px-6 py-5 sm:px-8 ${
                  index !== 0 ? "border-t-[2px] border-dashed border-black/15" : ""
                }`}
              >
                <span className="shrink-0 font-heading text-2xl font-black text-black/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2.5">
                    <reason.icon size={16} className="shrink-0 text-neutral-400" />
                    <h3 className="font-heading text-base font-black">{reason.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}