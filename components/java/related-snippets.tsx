"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coffee } from "lucide-react";

import { Container } from "../ui/container";
import JavaCard from "./java-card";

type JavaSnippet = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  complexity: string;
  tags?: string[];
  featured?: boolean;
};

type RelatedJavaSnippetsProps = {
  snippets: JavaSnippet[];
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

export default function RelatedJavaSnippets({
  snippets,
}: RelatedJavaSnippetsProps) {
  if (!snippets?.length) {
    return null;
  }

  return (
    <section className="pb-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-neutral-500">
                Continue Learning
              </p>

              <h2 className="mt-2 text-4xl font-black">
                Related Java Snippets
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-neutral-600">
                Discover more snippets from the same category to strengthen
                your Java fundamentals and improve your problem-solving skills.
              </p>
            </div>

            <Link
              href="/java"
              className="inline-flex items-center gap-2 rounded-2xl border-[3px] border-black bg-[var(--orange)] px-6 py-4 font-black shadow-[5px_5px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {snippets.map((snippet) => (
              <JavaCard
                key={snippet._id}
                snippet={snippet}
              />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 rounded-[28px] border-[3px] border-black bg-[var(--orange)] p-8 shadow-[8px_8px_0px_#000]"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-white">
                  <Coffee size={28} />
                </div>

                <h3 className="text-3xl font-black">
                  Keep Building with Java
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-neutral-800">
                  Consistent practice is the fastest way to master Java.
                  Explore more snippets, understand different approaches,
                  and build a strong coding foundation.
                </p>
              </div>

              <Link
                href="/java"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-[3px] border-black bg-white px-6 py-4 font-black shadow-[5px_5px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000]"
              >
                Explore Library
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}