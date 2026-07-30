"use client";

import { Coffee, Code2, BookOpen, Rocket, Moon, Brain } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Coffee, Code2, BookOpen, Rocket, Moon, Brain];
const colors = ["var(--yellow)", "var(--blue)", "var(--pink)", "var(--green)"];

const tilts = [-4, 3, -2, 5, -3, 2, -5, 4];

interface FunFact {
  _id: string;
  title: string;
  description: string;
}

interface Props {
  data: FunFact[];
}

export function FunFacts({ data }: Props) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Fun Facts"
          title="Beyond The Code"
          description="A few random things about me outside of commits and pull requests."
          align="center"
        />

        <div
          className="relative mt-16 overflow-hidden rounded-[28px] border-4 border-black p-8 sm:p-12"
          style={{
            background: "#e8dcc8",
            backgroundImage:
              "radial-gradient(rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
            {data.map((fact, index) => {
              const Icon = icons[index % icons.length];
              const color = colors[index % colors.length];
              const tilt = tilts[index % tilts.length];

              return (
                <motion.div
                  key={fact._id}
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, rotate: tilt }}
                  whileHover={{ rotate: 0, y: -4, scale: 1.03 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative w-64 shrink-0 border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_#000]"
                >
                  {/* pin */}
                  <span
                    className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black"
                    style={{ background: color }}
                  />

                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-black"
                    style={{ background: color }}
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-4 font-heading text-base md:text-lg font-black leading-tight text-neutral-900 wrap-break-word">
                    {fact.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 wrap-break-word">
                    {fact.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
