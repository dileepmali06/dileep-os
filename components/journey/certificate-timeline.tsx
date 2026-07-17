import {
  Award,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

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

export function CertificateTimeline({
  certificates,
}: CertificateTimelineProps) {
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

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {certificates.map(
            (certificate) => (
              <div
                key={certificate._id}
                className="rounded-[28px] border-[4px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]"
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-start gap-5">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--yellow)]">
                      <Award size={30} />
                    </div>

                    <div>

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="font-heading text-2xl font-black">
                          {certificate.title}
                        </h3>

                        {certificate.featured && (
                          <span className="rounded-full border-[2px] border-black bg-[var(--green)] px-3 py-1 text-xs font-bold">
                            Featured
                          </span>
                        )}

                      </div>

                      <p className="mt-2 text-lg font-semibold">
                        {certificate.issuer}
                      </p>

                      {certificate.issueDate && (
                        <div className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
                          <CalendarDays size={15} />
                          Issued in{" "}
                          {new Date(
                            certificate.issueDate
                          ).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </div>
                      )}

                    </div>

                  </div>

                </div>

                {certificate.credentialId && (
                  <div className="mt-6 rounded-xl border-[2px] border-black bg-neutral-50 p-4">
                    <span className="font-semibold">
                      Credential ID:
                    </span>{" "}
                    {certificate.credentialId}
                  </div>
                )}

                {certificate.skills?.length ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {certificate.skills.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-full border-[2px] border-black bg-[var(--yellow)] px-4 py-2 text-sm font-semibold"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                ) : null}

                {certificate.credentialUrl && (
                  <div className="mt-8">
                    <Button
                      variant="outline"
                    >
                      <a
                        href={
                          certificate.credentialUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Verify Certificate
                        <ExternalLink
                          size={16}
                          className="ml-2"
                        />
                      </a>
                    </Button>
                  </div>
                )}

              </div>
            )
          )}

        </div>

      </Container>
    </section>
  );
}