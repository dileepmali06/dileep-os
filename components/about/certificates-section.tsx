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

function CertificateCard({
  certificate,
  color,
}: {
  certificate: Certificate;
  color: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="[perspective:1500px]">
      <motion.div
        onClick={() => setFlipped((f) => !f)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-[380px] cursor-pointer [transform-style:preserve-3d]"
      >
        {/* ---------- front ---------- */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000] [backface-visibility:hidden]">
          <div className="relative aspect-[4/3] border-b-[3px] border-black bg-neutral-100">
            {certificate.certificateImage ? (
              <Image
                src={urlFor(certificate.certificateImage).width(600).url()}
                alt={certificate.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-neutral-400">
                <ShieldCheck size={40} />
              </div>
            )}

            <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border-[2px] border-black bg-white px-2.5 py-1 text-[10px] font-bold">
              <RotateCw size={11} />
              Flip
            </span>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <ShieldCheck size={13} />
              {certificate.issuer}
            </div>
            <h3 className="mt-2 font-heading text-lg font-black leading-tight">
              {certificate.title}
            </h3>
            {certificate.issueDate && (
              <div className="mt-3 flex items-center gap-2 text-xs text-neutral-400">
                <Calendar size={12} />
                Issued {certificate.issueDate}
              </div>
            )}
          </div>
        </div>

        {/* ---------- back ---------- */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border-[3px] border-black p-6 shadow-[8px_8px_0px_#000] [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ background: color }}
        >
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest">
            <ShieldCheck size={14} />
            Verified Credential
          </div>

          <h3 className="mt-4 font-heading text-xl font-black leading-tight">
            {certificate.title}
          </h3>

          <div className="mt-4 space-y-2 text-sm">
            {certificate.credentialId && (
              <div className="flex items-center gap-2">
                <Hash size={13} />
                <span className="font-mono text-xs">
                  {certificate.credentialId}
                </span>
              </div>
            )}
            {certificate.expirationDate && (
              <div className="flex items-center gap-2">
                <Calendar size={13} />
                <span className="text-xs">
                  Expires {certificate.expirationDate}
                </span>
              </div>
            )}
          </div>

          {certificate.skills && certificate.skills.length > 0 && (
            <div className="mt-4 flex flex-1 flex-wrap content-start gap-1.5">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border-[2px] border-black bg-white/70 px-2.5 py-1 text-[11px] font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto flex items-center justify-between pt-4">
            {certificate.credentialUrl ? (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full border-[2px] border-black bg-white px-3.5 py-1.5 text-xs font-bold"
              >
                Verify
                <ExternalLink size={12} />
              </a>
            ) : (
              <span />
            )}
            <span className="text-[10px] font-semibold opacity-60">
              tap to flip back
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
          eyebrow="Certificates"
          title="Certifications & Credentials"
          description="Courses, certifications and credentials that contributed to my learning journey. Tap a card to verify."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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