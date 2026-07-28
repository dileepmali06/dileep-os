"use client";

import { motion } from "framer-motion";
import { Rocket, MessageCircle, Handshake, Trophy } from "lucide-react";

import { Container } from "../ui/container";

type ContactStatsProps = {
  stats: {
    hireRequests: number;
    freelanceProjects: number;
    generalInquiries: number;
    wonProjects: number;
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function ContactStats({ stats }: ContactStatsProps) {
  const overview = [
    { title: "Hire requests", value: stats.hireRequests ?? 0, icon: Rocket },
    { title: "Freelance inquiries", value: stats.freelanceProjects ?? 0, icon: Handshake },
    { title: "General inquiries", value: stats.generalInquiries ?? 0, icon: MessageCircle },
    { title: "Projects won", value: stats.wonProjects ?? 0, icon: Trophy },
  ];

  return (
    <section className="pb-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-center font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            Track record so far
          </p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]"
          >
            <div className="grid divide-y-[2px] divide-black/10 sm:grid-cols-4 sm:divide-x-[2px] sm:divide-y-0">
              {overview.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[2px] border-black bg-neutral-50">
                    <item.icon size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading text-3xl font-black leading-none">{item.value}</p>
                    <p className="mt-1 truncate text-xs font-semibold text-neutral-500">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}