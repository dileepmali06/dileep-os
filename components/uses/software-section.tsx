"use client";

import {
  AppWindow,
  Code2,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Container as ContainerIcon,
  Send,
  FileText,
  MessageSquare,
  PenTool,
  type LucideIcon,
} from "lucide-react";

import {
  FaChrome,
  FaFigma,
  FaGithub,
} from "react-icons/fa";

import type { IconType } from "react-icons";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaBrave } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";


interface SoftwareSectionProps {
  data: string[];
}

type AppIcon = LucideIcon | IconType;

const colors = [
  "var(--blue)",
  "var(--pink)",
  "var(--green)",
  "var(--yellow)",
];

const iconRules: [RegExp, AppIcon][] = [
  [/vs\s?code|code\b/i, Code2],
  [/brave|firefox|safari/i, FaBrave],
  [/chrome|browser/i, FaChrome],
  [/github/i, FaGithub],
  [/git?/i, GitBranch],
  [/terminal|bash|shell|powershell/i, Terminal],
  [/docker|container/i, ContainerIcon],
  [/postman|thunder/i, SiPostman],
  [/notion|docs?/i, FileText],
  [/slack|discord|chat/i, MessageSquare],
  [/figma/i, FaFigma],
  [/design|excalidraw|sketch/i, PenTool],
  [/database|mongo|sql|prisma|sanity/i, Database],
  [/cloud|vercel|render|aws|deploy/i, Cloud],
];

function getIcon(label: string): AppIcon {
  const match = iconRules.find(([pattern]) =>
    pattern.test(label)
  );

  return match ? match[1] : AppWindow;
}

export function SoftwareSection({
  data,
}: SoftwareSectionProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section
      id="software"
      className="section-padding bg-neutral-50"
    >
      <Container>
        <SectionHeading
          eyebrow="Software"
          title="Software I Use Daily"
          description="Applications and tools that are part of my everyday development workflow."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-2xl overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]">
          {data.map(
            (
              item,
              index
            ) => {
              const Icon =
                getIcon(item);

              const color =
                colors[
                index %
                colors.length
                ];

              return (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.3,
                    delay:
                      index *
                      0.05,
                  }}
                  className={`flex items-center gap-4 px-6 py-4 transition-colors duration-200 hover:bg-neutral-50 sm:px-8 ${index !== 0
                    ? "border-t-[2px] border-black/10"
                    : ""
                    }`}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-[2px] border-black"
                    style={{
                      background:
                        color,
                    }}
                  >
                    <Icon
                      size={18}
                    />
                  </div>

                  <span className="font-heading text-lg font-bold sm:text-xl">
                    {item}
                  </span>

                  <span className="ml-auto font-mono text-xs text-neutral-400">
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </motion.div>
              );
            }
          )}
        </div>
      </Container>
    </section>
  );
}