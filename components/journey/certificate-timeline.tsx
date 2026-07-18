"use client";

import { Award, CalendarDays, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";

interface Certificate {
  _id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  featured?: boolean;
}

interface CertificateTimelineProps {
  certificates: Certificate[];
}

export function CertificateTimeline({ certificates }: CertificateTimelineProps) {
  if (!certificates.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Certificates"
          title="Certifications & Credentials"
          description="Courses, certifications and credentials earned throughout my learning journey."
          align="center"
        />

        <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-3">
          {certificates.map((certificate, index) => {
            const medalColor = certificate.featured ? "var(--yellow)" : "#d4d4d4";

            return (
              <motion.div
                key={certificate._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative rounded-[24px] border-[4px] border-black bg-white pt-12 shadow-[10px_10px_0px_#000]"
              >
                {/* medal + ribbon */}
                <div className="absolute -top-9 left-1/2 flex -translate-x-1/2 justify-center">
                  <div className="absolute top-6 flex gap-7">
                    <span
                      className="h-9 w-5 -rotate-12 border-[2px] border-black"
                      style={{
                        background: medalColor,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)",
                      }}
                    />
                    <span
                      className="h-9 w-5 rotate-12 border-[2px] border-black"
                      style={{
                        background: medalColor,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)",
                      }}
                    />
                  </div>

                  <div
                    className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border-[4px] border-black shadow-[4px_4px_0px_#000]"
                    style={{ background: medalColor }}
                  >
                    <Award size={30} />
                  </div>
                </div>

                <div className="px-7 pb-8 pt-3 text-center sm:px-8">
                  {certificate.featured && (
                    <span className="mb-2 inline-block rounded-full border-[2px] border-black bg-[var(--green)] px-3 py-0.5 text-[10px] font-bold uppercase">
                      Featured
                    </span>
                  )}

                  <h3 className="font-heading text-xl font-black leading-tight sm:text-2xl">
                    {certificate.title}
                  </h3>
                  <p className="mt-1.5 text-base font-semibold text-neutral-600">
                    {certificate.issuer}
                  </p>

                  {certificate.issueDate && (
                    <div className="mt-2 flex items-center justify-center gap-1.5 text-sm text-neutral-400">
                      <CalendarDays size={14} />
                      Earned{" "}
                      {new Date(certificate.issueDate).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  )}

                  {certificate.credentialId && (
                    <div className="mx-auto mt-5 max-w-xs rounded-lg border-[2px] border-black/15 bg-neutral-50 px-4 py-2 font-mono text-xs text-neutral-500">
                      ID: {certificate.credentialId}
                    </div>
                  )}

                  {certificate.skills && certificate.skills.length > 0 && (
                    <div className="mt-5 flex flex-wrap justify-center gap-2">
                      {certificate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border-[2px] border-black bg-[var(--yellow)] px-3.5 py-1 text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {certificate.credentialUrl && (
                    <div className="mt-6">
                      <Button variant="outline">
                        <a
                          href={certificate.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          Verify Certificate
                          <ExternalLink size={15} className="ml-2" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}