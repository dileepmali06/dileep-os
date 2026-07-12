import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutPreview() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Left Side */}
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About"
              title="Building software and learning in public."
              description="I enjoy building products, solving problems and documenting my journey as I grow from a MERN developer into a software engineer."
            />

            <p className="text-lg leading-relaxed text-neutral-700">
              Currently pursuing MCA while exploring
              Java, DSA, Spring Boot, System Design and
              scalable backend architecture.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge>Java</Badge>
              <Badge variant="secondary">DSA</Badge>
              <Badge variant="success">Spring Boot</Badge>
              <Badge variant="danger">System Design</Badge>
              <Badge variant="outline">Next.js</Badge>
            </div>

            <Link href="/about">
              <Button className="mt-4">
                Read More About Me
              </Button>
            </Link>
          </div>

          {/* Right Side */}
          <Card className="p-8">
            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <p className="text-sm text-neutral-500">
                  Location
                </p>

                <h3 className="font-heading text-2xl">
                  India
                </h3>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Status
                </p>

                <h3 className="font-heading text-2xl">
                  Open To Work
                </h3>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Education
                </p>

                <h3 className="font-heading text-2xl">
                  MCA
                </h3>
              </div>

              <div>
                <p className="text-sm text-neutral-500">
                  Focus
                </p>

                <h3 className="font-heading text-2xl">
                  Backend Engineering
                </h3>
              </div>

            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}