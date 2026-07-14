"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";

interface Props {
  project: any;
}

const languageColors: Record<string, string> = {
  "Next.js": "#000000",
  React: "#61dafb",
  "React.js": "#61dafb",
  "Node.js": "#3c873a",
  TypeScript: "#3178c6",
  Typescript: "#3178c6",
  JavaScript: "#f1e05a",
  MongoDB: "#4db33d",
  Tailwind: "#38bdf8",
  "Tailwind CSS": "#38bdf8",
  Sanity: "#f03e2f",
  "Sanity CMS": "#f03e2f",
  PostgreSQL: "#336791",
  MySQL: "#00758f",
  Prisma: "#0c344b",
  Docker: "#2496ed",
  Vercel: "#000000",
};

export function ProjectTechStack({ project }: Props) {
  if (!project.techStack?.length) return null;

  return (
    <section className="pb-24">
      <Container>
        <h2 className="font-heading text-4xl font-black">Tech Stack</h2>

        <div className="mt-8 overflow-hidden rounded-2xl border-[3px] border-black shadow-[6px_6px_0px_#000]">
          <div className="flex flex-wrap gap-3 bg-white p-6 sm:p-7">
            {project.techStack.map((tech: string, index: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-2 rounded-full border-[2px] border-black bg-neutral-50 px-4 py-2 text-sm font-semibold"
              >
                <span
                  className="h-2.5 w-2.5 rounded-full border border-black/30"
                  style={{ background: languageColors[tech] ?? "#999" }}
                />
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}