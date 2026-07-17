"use client";

import { motion } from "framer-motion";

import {
  FaGoogle,
  FaGithub,
  FaRobot,
  FaCode,
  FaImage,
  FaPaintBrush,
} from "react-icons/fa";
import { BsClaude, BsOpenai } from "react-icons/bs";
import { BiLogoAdobe } from "react-icons/bi";



import {
  SiCursor,
  SiPerplexity,
} from "react-icons/si";

import type { IconType } from "react-icons";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RiGeminiFill } from "react-icons/ri";


interface AIToolsSectionProps {
  data: string[];
}

type AppIcon = IconType;

const colors = [
  "var(--green)",
  "var(--blue)",
  "var(--pink)",
  "var(--yellow)",
];

const rules: [RegExp, AppIcon, string][] = [
  [/chatgpt|gpt-4|gpt/i, BsOpenai, "AI Assistant"],

  [/claude/i, BsClaude, "Reasoning AI"],

  [/gemini/i, RiGeminiFill, "Google AI"],

  [/cursor/i, SiCursor, "AI IDE"],

  [/copilot/i, FaGithub, "Code Assistant"],

  [/codeium/i, FaCode, "Code Completion"],

  [/perplexity/i, SiPerplexity, "Research AI"],

  [/midjourney/i, FaImage, "Image Generation"],

  [/dall|dall-e/i, FaImage, "Image Generation"],

  [/firefly/i, BiLogoAdobe, "Creative AI"],

  [/leonardo/i, FaImage, "Image Generation"],
];

function getMeta(
  label: string
): {
  icon: AppIcon;
  role: string;
} {
  const match = rules.find(
    ([pattern]) =>
      pattern.test(label)
  );

  return match
    ? {
        icon: match[1],
        role: match[2],
      }
    : {
        icon: FaRobot,
        role: "AI Assistant",
      };
}

const hexClip =
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

export function AIToolsSection({
  data,
}: AIToolsSectionProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section
      id="ai-tools"
      className="section-padding"
    >
      <Container>
        <SectionHeading
          eyebrow="AI Tools"
          title="My AI Co-Pilots"
          description="The AI tools that accelerate my learning, coding and problem solving."
          align="center"
        />

        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap justify-center gap-6">
          {data.map(
            (
              tool,
              index
            ) => {
              const {
                icon: Icon,
                role,
              } =
                getMeta(
                  tool
                );

              const color =
                colors[
                  index %
                    colors.length
                ];

              return (
                <motion.div
                  key={tool}
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay:
                      index *
                      0.07,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.05,
                  }}
                  className="relative h-[170px] w-[150px]"
                >
                  {/* Outer Border */}
                  <div
                    className="absolute inset-0 bg-black"
                    style={{
                      clipPath:
                        hexClip,
                    }}
                  />

                  {/* Card */}
                  <div
                    className="absolute inset-[4px] flex flex-col items-center justify-center gap-3 px-4 text-center"
                    style={{
                      clipPath:
                        hexClip,
                      background:
                        color,
                    }}
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-black bg-white shadow-[2px_2px_0px_#000]">
                      <Icon
                        size={
                          24
                        }
                      />
                    </div>

                    {/* Tool Name */}
                    <span className="font-heading text-sm font-black leading-tight">
                      {tool}
                    </span>

                    {/* Role */}
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-black/60">
                      {role}
                    </span>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </Container>
    </section>
  );
}