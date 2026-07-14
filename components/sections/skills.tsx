"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";

interface SkillsData {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  devops?: string[];
  currentlyLearning?: string[];
  languages?: string[];
  tools?: string[];
  interestedIn?: string[];
}

interface SkillsProps {
  data: SkillsData;
}

export function Skills({ data }: SkillsProps) {
  const skillGroups = [
    {
      title: "Frontend",
      file: "frontend.stack",
      command: "ls ./frontend",
      skills: data?.frontend || [],
    },
    {
      title: "Backend",
      file: "backend.stack",
      command: "ls ./backend",
      skills: data?.backend || [],
    },
    {
      title: "Database",
      file: "database.stack",
      command: "ls ./database",
      skills: data?.database || [],
    },
    {
      title: "DevOps",
      file: "devops.config",
      command: "ls ./devops",
      skills: data?.devops || [],
    },
    {
      title: "Languages",
      file: "languages.env",
      command: "ls ./languages",
      skills: data?.languages || [],
    },
    {
      title: "Tools",
      file: "tools.config",
      command: "ls ./tools",
      skills: data?.tools || [],
    },
    {
      title: "Interested In",
      file: "future.tech",
      command: "ls ./future",
      skills: data?.interestedIn || [],
    },
    {
      title: "Currently Learning",
      file: "learning.queue",
      command: "npm install --save-dev",
      skills: data?.currentlyLearning || [],
      learning: true,
    },
  ];

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A growing toolkit of technologies, frameworks and tools that I use to build modern software."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: groupIndex * 0.08,
              }}
              className="overflow-hidden rounded-2xl border-[3px] border-black shadow-[7px_7px_0px_#000] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000]"
            >
              {/* Title Bar */}
              <div className="flex items-center gap-3 border-b-[3px] border-black bg-neutral-100 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full border border-black/40 bg-red-500" />
                  <span className="h-3 w-3 rounded-full border border-black/40 bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full border border-black/40 bg-green-500" />
                </div>

                <span className="font-mono text-xs font-semibold text-neutral-600">
                  {group.file}
                </span>
              </div>

              {/* Terminal */}
              <div className="bg-neutral-900 p-5 font-mono text-sm">
                <div className="text-emerald-400">
                  <span className="text-white/40">$</span>{" "}
                  {group.command}
                </div>

                <div className="mt-3 space-y-1.5">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay:
                          groupIndex * 0.08 +
                          skillIndex * 0.07 +
                          0.15,
                      }}
                      className="flex items-center gap-2 text-white/80"
                    >
                      <span className="text-white/30">
                        {group.learning ? "↓" : "-"}
                      </span>

                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {group.learning && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="mt-[10px] flex items-center gap-2 text-xs text-white/40"
                  >
                    <span>installing</span>

                    <span className="inline-flex gap-0.5">
                      <motion.span
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0,
                        }}
                      >
                        .
                      </motion.span>

                      <motion.span
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0.2,
                        }}
                      >
                        .
                      </motion.span>

                      <motion.span
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      >
                        .
                      </motion.span>
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}