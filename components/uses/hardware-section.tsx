import {
  Laptop,
  Monitor,
  Keyboard,
  Mouse,
  Cpu,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [
  Laptop,
  Monitor,
  Keyboard,
  Mouse,
  Cpu,
];

interface HardwareSectionProps {
  data: string[];
}

export function HardwareSection({
  data,
}: HardwareSectionProps) {

  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>

        <SectionHeading
          eyebrow="Hardware"
          title="The Physical Setup"
          description="The devices and equipment powering my development workflow."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {data.map(
            (
              item,
              index
            ) => {

              const Icon =
                icons[
                  index %
                  icons.length
                ];

              return (
                <div
                  key={item}
                  className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_#000]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--yellow)]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-black">
                    {item}
                  </h3>

                  <p className="mt-3 text-neutral-600">
                    Part of my daily development setup.
                  </p>
                </div>
              );
            }
          )}

        </div>

      </Container>
    </section>
  );
}