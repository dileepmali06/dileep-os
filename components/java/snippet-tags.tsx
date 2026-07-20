"use client";

import { Hash } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "../ui/container";

type JavaTagsProps = {
  tags?: string[];
};

const colors = [
  "var(--orange)",
  "var(--green)",
  "var(--blue)",
  "var(--yellow)",
  "var(--cream)",
];

export default function JavaTags({
  tags = [],
}: JavaTagsProps) {
  if (!tags.length) {
    return null;
  }

  return (
    <section className="pb-16">
      <Container>
        <div className="rounded-[28px] border-[3px] border-black bg-white p-8 shadow-[8px_8px_0px_#000]">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-widest text-neutral-500">
              Keywords
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Related Topics
            </h2>

            <p className="mt-3 max-w-2xl text-neutral-600">
              Explore the important concepts and keywords associated with this
              Java snippet.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {tags.map((tag, index) => (
              <motion.div
                key={tag}
                whileHover={{
                  y: -5,
                  rotate: index % 2 === 0 ? -2 : 2,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <div
                  className="flex items-center gap-2 rounded-2xl border-[3px] border-black px-5 py-3 font-black shadow-[4px_4px_0px_#000]"
                  style={{
                    background:
                      colors[index % colors.length],
                  }}
                >
                  <Hash size={18} />
                  {tag}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border-[2px] border-dashed border-black bg-[var(--cream)] p-5">
            <p className="leading-7 text-neutral-700">
              💡 These tags help you quickly identify the concepts covered in
              this snippet and make it easier to discover similar Java
              solutions throughout the library.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}