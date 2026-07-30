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
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[280px_1fr] lg:items-center lg:gap-12 xl:grid-cols-[320px_1fr] xl:gap-14">

          {/* Profile Image */}
          <div className="mx-auto w-full max-w-60 sm:max-w-xs lg:max-w-none">
            <Card className="overflow-hidden p-3 sm:p-4">
              <div className="relative aspect-square overflow-hidden rounded-xl border-[3px] border-black bg-neutral-100 sm:rounded-2xl">

                {data.profileImage ? (
                  <Image
                    src={urlFor(data.profileImage).url()}
                    alt={data.name}
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 320px"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-2 text-center text-sm text-neutral-400 sm:text-base">
                    No Image
                  </div>
                )}

              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="min-w-0 text-center lg:text-left">

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:justify-start">

              {data.openToWork && (
                <Badge variant="success">
                  <CheckCircle
                    size={13}
                    className="mr-1 shrink-0 sm:size-3.5"
                  />
                  <span className="whitespace-nowrap text-xs md:text-sm">Open To Work</span>
                </Badge>
              )}

              {data.location && (
                <Badge variant="outline">
                  <MapPin
                    size={13}
                    className="mr-1 shrink-0 sm:size-3.5"
                  />
                  <span className="truncate text-xs md:text-sm">{data.location}</span>
                </Badge>
              )}

            </div>

            {/* Name Heading */}
            <h1 className="mt-5 wrap-break-word font-heading text-3xl font-black leading-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-neutral-900">
              {data.name}
            </h1>

            {/* Role Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-black bg-(--yellow) px-3.5 py-1.5 sm:gap-2.5 sm:px-4 sm:py-2">
              <Briefcase size={14} className="shrink-0 sm:size-4" />
              <span className="font-heading text-xs font-bold sm:text-sm md:text-base">{data.role}</span>
            </div>

            {/* Headline Sub-heading */}
            {data.headline && (
              <h2 className="mx-auto mt-6 max-w-2xl wrap-break-word font-heading text-lg font-bold leading-snug sm:mt-8 sm:text-xl md:text-2xl lg:mx-0 lg:max-w-3xl lg:leading-tight xl:text-3xl text-neutral-800">
                {data.headline}
              </h2>
            )}

            {/* Short Bio Paragraph */}
            {data.shortBio && (
              <p className="mx-auto mt-4 max-w-xl text-start text-sm leading-relaxed text-neutral-600 sm:mt-6 sm:text-base lg:mx-0 lg:max-w-3xl">
                {data.shortBio}
              </p>
            )}

          </div>
        </div>
      </Container>
    </section>
  );
}
