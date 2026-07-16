"use client";

import Image from "next/image";

import {
  Briefcase,
  Calendar,
  MapPin,
  Trophy,
} from "lucide-react";

import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";

import { urlFor } from "@/sanity/lib/image";

interface Experience {
  _id: string;

  company: string;
  position: string;

  employmentType?: string;

  location?: string;

  startDate?: string;
  endDate?: string;

  currentlyWorking?: boolean;

  description?: PortableTextBlock[];

  achievements?: string[];

  technologies?: string[];

  // Minimal Sanity image type
  companyLogo?: { asset?: { _ref?: string } } | null;
}

interface ExperienceSectionProps {
  data: Experience[];
}

export function ExperienceSection({
  data,
}: ExperienceSectionProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>

        <SectionHeading
          eyebrow="Experience"
          title="Professional Journey"
          description="Projects, companies and experiences that shaped my engineering journey."
          align="center"
        />

        <div className="relative mx-auto mt-20 max-w-5xl">

          <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-black/15" />

          <div className="space-y-10">

            {data.map(
              (
                experience,
                index
              ) => (
                <motion.div
                  key={experience._id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay:
                      index * 0.1,
                  }}
                  className="relative pl-20"
                >

                  {/* Timeline Node */}
                  <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-black bg-[var(--blue)]">
                    <Briefcase
                      size={20}
                    />
                  </div>

                  <div className="rounded-2xl border-[3px] border-black bg-white p-8 shadow-[8px_8px_0px_#000]">

                    {/* Header */}
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">

                      <div className="flex gap-4">

                        {experience.companyLogo && (
                          <div className="relative h-16 w-16 overflow-hidden rounded-xl border-[3px] border-black">
                            <Image
                              src={urlFor(
                                experience.companyLogo
                              ).url()}
                              alt={
                                experience.company
                              }
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}

                        <div>
                          <h3 className="font-heading text-3xl font-black">
                            {
                              experience.position
                            }
                          </h3>

                          <p className="mt-1 text-lg text-neutral-600">
                            {
                              experience.company
                            }
                          </p>

                          <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-500">

                            {experience.location && (
                              <span className="flex items-center gap-1">
                                <MapPin size={15} />
                                {
                                  experience.location
                                }
                              </span>
                            )}

                            <span className="flex items-center gap-1">
                              <Calendar size={15} />
                              {
                                experience.startDate
                              }
                              {" - "}
                              {experience.currentlyWorking
                                ? "Present"
                                : experience.endDate}
                            </span>

                          </div>
                        </div>

                      </div>

                      <Badge variant="outline">
                        {
                          experience.employmentType
                        }
                      </Badge>

                    </div>

                    {/* Description */}
                    {experience.description && (
                      <div className="prose mt-8 max-w-none">
                        <PortableText
                          value={
                            experience.description
                          }
                        />
                      </div>
                    )}

                    {/* Achievements */}
                    {experience.achievements &&
                      experience.achievements.length >
                        0 && (
                        <div className="mt-8">

                          <h4 className="mb-4 flex items-center gap-2 font-bold">
                            <Trophy size={18} />
                            Achievements
                          </h4>

                          <ul className="space-y-3">
                            {experience.achievements.map(
                              (
                                item
                              ) => (
                                <li
                                  key={
                                    item
                                  }
                                  className="flex items-start gap-3 text-neutral-700"
                                >
                                  <span className="mt-2 h-2 w-2 rounded-full bg-black" />
                                  {
                                    item
                                  }
                                </li>
                              )
                            )}
                          </ul>

                        </div>
                      )}

                    {/* Technologies */}
                    {experience.technologies &&
                      experience.technologies.length >
                        0 && (
                        <div className="mt-8 flex flex-wrap gap-2">

                          {experience.technologies.map(
                            (
                              tech
                            ) => (
                              <Badge
                                key={tech}
                              >
                                {tech}
                              </Badge>
                            )
                          )}

                        </div>
                      )}

                  </div>
                </motion.div>
              )
            )}

          </div>
        </div>
      </Container>
    </section>
  );
}