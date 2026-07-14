import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "../ui/SectionHeading";

interface AboutData {
  headline?: string;
  shortBio?: string;
  currentFocus?: string[];
  location?: string;
  openToWork?: boolean;
  role?: string;
  yearsOfExperience?: number;
}

interface AboutPreviewProps {
  data: AboutData;
}

const badgeVariants = [
  "default",
  "secondary",
  "success",
  "danger",
] as const;

export function AboutPreview({
  data,
}: AboutPreviewProps) {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About"
              title={
                data?.headline ||
                "Building software and learning in public."
              }
              description={data?.shortBio}
            />

            <p className="text-lg leading-relaxed text-neutral-700">
              {data?.shortBio}
            </p>

            <div className="flex flex-wrap gap-2">
              {data?.currentFocus?.map(
                (
                  skill,
                  index
                ) => (
                  <Badge
                    key={skill}
                    variant={
                      badgeVariants[
                        index %
                          badgeVariants.length
                      ]
                    }
                  >
                    {skill}
                  </Badge>
                )
              )}
            </div>

            <Link href="/about">
              <Button className="mt-4">
                Read More About Me
              </Button>
            </Link>
          </div>

          {/* Right */}
          <Card className="p-8">
            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <p className="text-sm text-neutral-500">
                  Location
                </p>

                <h3 className="font-heading text-2xl">
                  {data?.location || "India"}
                </h3>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Status
                </p>

                <h3 className="font-heading text-2xl">
                  {data?.openToWork
                    ? "Open To Work"
                    : "Unavailable"}
                </h3>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Role
                </p>

                <h3 className="font-heading text-2xl">
                  {data?.role}
                </h3>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Experience
                </p>

                <h3 className="font-heading text-2xl">
                  {data?.yearsOfExperience || 0}+ Years
                </h3>
              </div>

            </div>
          </Card>

        </div>
      </Container>
    </section>
  );
}