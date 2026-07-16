"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "next-sanity";

import {
  GraduationCap,
  Calendar,
  Award,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";

import { urlFor } from "@/sanity/lib/image";
type SanityImageSource = Parameters<typeof urlFor>[0];


interface Education {
  _id: string;

  institution: string;

  degree: string;

  fieldOfStudy?: string;

  startDate?: string;

  endDate?: string;

  currentlyStudying?: boolean;

  grade?: string;

  description?: PortableTextBlock[];

  skills?: string[];

  featured?: boolean;

  logo?: SanityImageSource;
}

interface EducationSectionProps {
  data: Education[];
}

export function EducationSection({
  data,
}: EducationSectionProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Education"
          title="Academic Journey"
          description="The educational milestones shaping my engineering foundation."
          align="center"
        />

        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* Timeline */}
          <div className="absolute bottom-0 left-5 top-0 w-[3px] rounded-full bg-black/15" />

          <div className="space-y-10">
            {data.map(
              (
                education,
                index
              ) => (
                <motion.div
                  key={education._id}
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
                  className="relative pl-16"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-black bg-[var(--yellow)]">
                    <GraduationCap
                      size={18}
                    />
                  </div>

                  {/* Card */}
                  <div className="rounded-3xl border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_#000]">
                    {/* Top */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      {/* Left */}
                      <div className="flex gap-4">
                        {/* Logo */}
                        {education.logo ? (
                          <div className="relative h-20 w-20 overflow-hidden rounded-2xl border-[3px] border-black bg-white">
                            <Image
                              src={urlFor(
                                education.logo
                              )
                                .width(
                                  150
                                )
                                .height(
                                  150
                                )
                                .url()}
                              alt={
                                education.institution
                              }
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-[3px] border-black bg-neutral-100">
                            <GraduationCap
                              size={
                                30
                              }
                            />
                          </div>
                        )}

                        {/* Info */}
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-heading text-2xl font-black">
                              {
                                education.degree
                              }
                            </h3>

                            {education.featured && (
                              <Badge>
                                Featured
                              </Badge>
                            )}
                          </div>

                          {education.fieldOfStudy && (
                            <p className="text-neutral-500">
                              {
                                education.fieldOfStudy
                              }
                            </p>
                          )}

                          <p className="mt-2 font-semibold">
                            {
                              education.institution
                            }
                          </p>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">
                          {education.currentlyStudying
                            ? "Currently Studying"
                            : "Completed"}
                        </Badge>

                        {education.grade && (
                          <Badge>
                            {
                              education.grade
                            }
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="mt-6 flex flex-wrap gap-5 text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <Calendar
                          size={16}
                        />

                        {education.startDate
                          ? new Date(
                              education.startDate
                            ).getFullYear()
                          : "-"}

                        {" - "}

                        {education.currentlyStudying
                          ? "Present"
                          : education.endDate
                            ? new Date(
                                education.endDate
                              ).getFullYear()
                            : "-"}
                      </span>

                      {education.grade && (
                        <span className="flex items-center gap-2">
                          <Award
                            size={16}
                          />
                          {
                            education.grade
                          }
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    {education.description &&
                      education
                        .description
                        .length >
                        0 && (
                        <div className="prose mt-6 max-w-none text-neutral-600">
                          <PortableText
                            value={
                              education.description
                            }
                          />
                        </div>
                      )}

                    {/* Skills */}
                    {education.skills &&
                      education
                        .skills
                        .length >
                        0 && (
                        <div className="mt-6">
                          <div className="mb-3 flex items-center gap-2">
                            <Star
                              size={
                                16
                              }
                            />
                            <h4 className="font-semibold">
                              Skills Learned
                            </h4>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {education.skills.map(
                              (
                                skill
                              ) => (
                                <Badge
                                  key={
                                    skill
                                  }
                                  variant="secondary"
                                >
                                  {
                                    skill
                                  }
                                </Badge>
                              )
                            )}
                          </div>
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