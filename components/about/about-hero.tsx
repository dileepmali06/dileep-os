import Image from "next/image";
import {
  MapPin,
  Briefcase,
  CheckCircle,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import { urlFor } from "@/sanity/lib/image";

type SanityImageSource = Parameters<typeof urlFor>[0];

interface AboutHeroProps {
  data: {
    name: string;
    role: string;
    location?: string;
    headline?: string;
    shortBio?: string;
    profileImage?: SanityImageSource;
    openToWork?: boolean;
  };
}

export function AboutHero({
  data,
}: AboutHeroProps) {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:items-center">

          {/* Profile Image */}
          <div className="mx-auto w-full max-w-sm">
            <Card className="overflow-hidden p-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl border-[3px] border-black bg-neutral-100">

                {data.profileImage ? (
                  <Image
                    src={urlFor(data.profileImage).url()}
                    alt={data.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-neutral-400">
                    No Image
                  </div>
                )}

              </div>
            </Card>
          </div>

          {/* Content */}
          <div>

            <div className="flex flex-wrap gap-3">

              {data.openToWork && (
                <Badge variant="success">
                  <CheckCircle
                    size={14}
                    className="mr-1"
                  />
                  Open To Work
                </Badge>
              )}

              {data.location && (
                <Badge variant="outline">
                  <MapPin
                    size={14}
                    className="mr-1"
                  />
                  {data.location}
                </Badge>
              )}

            </div>

            <h1 className="mt-6 font-heading text-5xl font-black leading-tight md:text-7xl">
              {data.name}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-xl text-neutral-600">
              <Briefcase size={20} />
              <span>{data.role}</span>
            </div>

            {data.headline && (
              <h2 className="mt-8 max-w-3xl font-heading text-3xl font-bold leading-tight md:text-4xl">
                {data.headline}
              </h2>
            )}

            {data.shortBio && (
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">
                {data.shortBio}
              </p>
            )}

          </div>
        </div>
      </Container>
    </section>
  );
}