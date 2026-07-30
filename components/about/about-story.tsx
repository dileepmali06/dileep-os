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
        <div className="mx-auto max-w-2xl lg:max-w-3xl">
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
            className="relative mt-8 pl-5 sm:mt-12 sm:pl-8 md:mt-14 md:pl-10 lg:mt-16"
          >
            <Quote
              size={32}
              className="absolute -left-3 -top-1.5 -z-10 text-black/5 sm:-left-6 sm:size-12 md:-left-8 md:-top-2 md:size-14"
              strokeWidth={1.5}
            />

            <div className="prose-headings:font-heading prose-p:leading-relaxed max-w-none wrap-break-word text-sm sm:text-base lg:text-lg text-neutral-700">
              <PortableText
                value={data.fullBio}
                components={portableTextComponents}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
