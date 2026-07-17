"use client";

import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portableTextComponents } from "./about-portable-text-components";

interface AboutStoryProps {
  data: {
    fullBio?: PortableTextBlock[];
  };
}

export function AboutStory({ data }: AboutStoryProps) {
  if (!data.fullBio || data.fullBio.length === 0) {
    return null;
  }

  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="My Story"
            title="The Journey So Far"
            description="How curiosity turned into a career in software engineering."
            align="center"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mt-16 pl-8 sm:pl-10"
          >
            <Quote
              size={64}
              className="absolute -left-[34px] -top-2 -z-10 text-black/[0.06]"
              strokeWidth={1.5}
            />

            <PortableText
              value={data.fullBio}
              components={portableTextComponents}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}