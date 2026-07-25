"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Pin, ArrowUpRight } from "lucide-react";

import { Container } from "../ui/container";
import { urlFor } from "@/sanity/lib/image";
import { getEmploymentMeta, formatDateRange } from "./experience-meta";

type FeaturedExperienceItem = {
  _id: string;
  company: string;
  slug: string;
  position: string;
  employmentType?: string;
  workMode?: string;
  companyIndustry?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  currentlyWorking?: boolean;
  technologies?: string[];
  companyLogo?: NonNullable<Parameters<typeof urlFor>[0]>;
};

type FeaturedExperienceProps = {
  experiences: FeaturedExperienceItem[];
};

const tilts = [-3, 2, -2, 3, -1.5, 2.5];

export default function FeaturedExperience({ experiences }: FeaturedExperienceProps) {
  if (!experiences?.length) return null;

  return (
    <section className="pb-20">
      <Container>
        <div className="mb-8 flex items-center gap-2.5">
          <Pin size={15} className="text-black/70" />
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            Pinned to the board
          </p>
        </div>
        <h2 className="-mt-2 mb-7 text-2xl font-black sm:text-3xl">Featured Roles</h2>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 rounded-2xl border-[2px] border-dashed border-black/15 bg-[#f0e6d2] p-8 sm:gap-x-8">
          {experiences.map((experience, index) => {
            const meta = getEmploymentMeta(experience.employmentType);
            const Icon = meta.icon;
            const tilt = tilts[index % tilts.length];

            const logoUrl = experience.companyLogo
              ? urlFor(experience.companyLogo).width(120).height(120).fit("max").url()
              : null;

            return (
              <motion.div
                key={experience._id}
                initial={{ opacity: 0, y: 16, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: tilt }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
                className="group relative w-[190px]"
              >
                {/* pin */}
                <div className="absolute -top-2.5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-[2px] border-black bg-[var(--pink)] shadow-[1px_2px_2px_rgba(0,0,0,0.3)]" />

                <Link
                  href={`/experience/${experience.slug}`}
                  className="flex flex-col overflow-hidden rounded-lg border-[2px] border-black bg-white shadow-[5px_6px_0px_rgba(0,0,0,0.2)] transition-shadow group-hover:shadow-[7px_9px_0px_rgba(0,0,0,0.25)]"
                >
                  <div
                    className="flex items-center justify-between border-b-[2px] border-black px-3.5 py-2"
                    style={{ background: meta.color }}
                  >
                    <Icon size={12} />
                    {experience.currentlyWorking && (
                      <span className="rounded-full border border-black bg-white px-1.5 py-0.5 text-[9px] font-black">
                        Now
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col items-center p-4 text-center">
                    <div className="relative h-12 w-12 overflow-hidden rounded-lg border-[2px] border-black bg-white">
                      {logoUrl ? (
                        <Image
                          src={logoUrl}
                          alt={experience.company}
                          fill
                          sizes="48px"
                          className="object-contain p-1"
                        />
                      ) : (
                        <div
                          className="flex h-full w-full items-center justify-center rounded-md font-heading text-sm font-black"
                          style={{ background: meta.color }}
                        >
                          {experience.company?.[0]?.toUpperCase() ?? "?"}
                        </div>
                      )}
                    </div>

                    <h3 className="mt-2.5 line-clamp-2 font-heading text-xs font-black leading-tight">
                      {experience.position}
                    </h3>
                    <p className="mt-0.5 truncate text-[11px] font-semibold text-neutral-500">
                      {experience.company}
                    </p>

                    <p className="mt-2 font-mono text-[9px] text-neutral-400">
                      {formatDateRange(experience.startDate, experience.endDate, experience.currentlyWorking)}
                    </p>

                    <ArrowUpRight
                      size={12}
                      className="mt-1.5 text-neutral-300 transition-all group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}