"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  ExternalLink,
  ShieldCheck,
  RotateCw,
  Hash,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { urlFor } from "@/sanity/lib/image";

type SanityImageSource = Parameters<typeof urlFor>[0];

interface Certificate {
  _id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  certificateImage?: SanityImageSource;
  skills?: string[];
  featured?: boolean;
}

interface CertificatesSectionProps {
  data: Certificate[];
}

const colors = ["var(--blue)", "var(--pink)", "var(--green)", "var(--yellow)"];

function formatDate(value?: string) {
  if (!value) return undefined;
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function CertificateCard({
  certificate,
  color,
}: {
  certificate: Certificate;
  color: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective-[1500px]">
      <motion.div
        onClick={() => setFlipped((f) => !f)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-90 sm:min-h-95 md:min-h-100 cursor-pointer transform-3d"
      >
        {/* ---------- front ---------- */}
        <div className="absolute inset-0 flex h-full flex-col overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[6px_6px_0px_#000] backface-hidden sm:shadow-[8px_8px_0px_#000]">
          <div className="relative aspect-4/3 shrink-0 border-b-[3px] border-black bg-neutral-100">
            {certificate.certificateImage ? (
              <Image
                src={urlFor(certificate.certificateImage).width(600).url()}
                alt={certificate.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-neutral-400">
                <ShieldCheck className="size-8 sm:size-9" />
              </div>
            )}

            <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full border-2 border-black bg-white px-2.5 py-1 text-[10px] font-bold select-none">
              <RotateCw className="size-3" />
              Flip
            </span>
          </div>

          <div className="flex flex-1 flex-col p-4 sm:p-5">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-500">
              <ShieldCheck className="size-3.5 shrink-0 text-neutral-400" />
              <span className="truncate">{certificate.issuer}</span>
            </div>
            <h3 className="mt-2 font-heading text-base sm:text-lg font-black leading-tight text-neutral-900 wrap-break-word line-clamp-2">
              {certificate.title}
            </h3>
            {certificate.issueDate && (
              <div className="mt-auto flex pt-1 items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-400">
                <Calendar className="size-3.5" />
                Issued {formatDate(certificate.issueDate)}
              </div>
            )}
          </div>
        </div>

        {/* ---------- back ---------- */}
        <div
          className="absolute inset-0 flex h-full flex-col overflow-y-auto rounded-2xl border-[3px] border-black p-4 sm:p-5 shadow-[6px_6px_0px_#000] backface-hidden transform-[rotateY(180deg)] sm:shadow-[8px_8px_0px_#000]"
          style={{ background: color }}
        >
          <div className="flex items-center gap-1.5 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-neutral-900">
            <ShieldCheck className="size-4 text-neutral-900" />
            Verified Credential
          </div>

          <h3 className="mt-3 font-heading text-base sm:text-lg md:text-xl font-black leading-tight text-neutral-900 wrap-break-word">
            {certificate.title}
          </h3>

          <div className="mt-3 space-y-2 text-xs sm:text-sm">
            {certificate.credentialId && (
              <div className="flex items-baseline gap-1.5">
                <Hash className="size-3.5 shrink-0 translate-y-0.5 text-neutral-800" />
                <span className="break-all font-mono text-[11px] sm:text-xs font-bold text-neutral-800">
                  {certificate.credentialId}
                </span>
              </div>
            )}
            {certificate.expirationDate && (
              <div className="flex items-center gap-1.5">
                <Calendar className="size-3.5 shrink-0 text-neutral-800" />
                <span className="text-[11px] sm:text-xs font-bold text-neutral-800">
                  Expires {formatDate(certificate.expirationDate)}
                </span>
              </div>
            )}
          </div>

          {!!certificate.skills?.length && (
            <div className="mt-4 flex flex-1 flex-wrap content-start gap-1.5">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border-2 border-black bg-white/80 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-neutral-800 select-none wrap-break-word"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t-2 border-black/10">
            {certificate.credentialUrl ? (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border-2 border-black bg-white px-3 py-1.5 text-[11px] sm:text-xs font-black shadow-[2px_2px_0px_#000] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_#000] transition-all"
              >
                Verify
                <ExternalLink className="size-3" />
              </a>
            ) : (
              <span />
            )}
            <span className="text-right text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-black/60 select-none">
              tap to flip
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function CertificatesSection({ data }: CertificatesSectionProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Certifications"
          title="Proof of Learning"
          description="Courses, certifications and credentials that contributed to my learning journey. Tap a card to verify."
          align="center"
        />

        {/* Fluid Responsive Grid Columns Layout */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 xl:grid-cols-3 xl:gap-8">
          {data.map((certificate, index) => (
            <CertificateCard
              key={certificate._id}
              certificate={certificate}
              color={colors[index % colors.length]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
