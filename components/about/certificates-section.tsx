import Image from "next/image";
import Link from "next/link";

import {
  Calendar,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";

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

export function CertificatesSection({
  data,
}: CertificatesSectionProps) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>

        <SectionHeading
          eyebrow="Certificates"
          title="Certifications & Credentials"
          description="Courses, certifications and credentials that contributed to my learning journey."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {data.map((certificate) => (
            <div
              key={certificate._id}
              className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]"
            >

              {/* Image */}
              <div className="relative aspect-[4/3] border-b-[3px] border-black bg-neutral-100">

                {certificate.certificateImage ? (
                  <Image
                    src={urlFor(
                      certificate.certificateImage
                    ).url()}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-neutral-400">
                    No Image
                  </div>
                )}

              </div>

              <div className="p-6">

                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <ShieldCheck size={15} />
                  {certificate.issuer}
                </div>

                <h3 className="mt-3 font-heading text-2xl font-black">
                  {certificate.title}
                </h3>

                {certificate.issueDate && (
                  <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar size={15} />
                    Issued: {certificate.issueDate}
                  </div>
                )}

                {certificate.expirationDate && (
                  <div className="mt-2 text-sm text-neutral-500">
                    Expires: {certificate.expirationDate}
                  </div>
                )}

                {certificate.credentialId && (
                  <div className="mt-2 text-sm text-neutral-500">
                    Credential ID:
                    {" "}
                    {certificate.credentialId}
                  </div>
                )}

                {certificate.skills &&
                  certificate.skills.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {certificate.skills.map(
                        (skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                          >
                            {skill}
                          </Badge>
                        )
                      )}
                    </div>
                  )}

                {certificate.credentialUrl && (
                  <Link
                    href={
                      certificate.credentialUrl
                    }
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 font-semibold hover:underline"
                  >
                    Verify Credential
                    <ExternalLink
                      size={16}
                    />
                  </Link>
                )}

              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}