import {
  Heart,
  Rocket,
  Brain,
  Target,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [
  Heart,
  Rocket,
  Brain,
  Target,
];

interface CoreValue {
  _id: string;
  title: string;
  description: string;
}

interface Props {
  data: CoreValue[];
}

export function CoreValuesSection({
  data,
}: Props) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>

        <SectionHeading
          eyebrow="Values"
          title="Principles I Build By"
          description="The ideas and principles that guide my work and learning."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.map(
            (value, index) => {
              const Icon =
                icons[
                  index %
                    icons.length
                ];

              return (
                <div
                  key={value._id}
                  className="rounded-2xl border-[3px] border-black bg-white p-8 text-center shadow-[8px_8px_0px_#000]"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl border-[3px] border-black">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-black">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-neutral-600">
                    {value.description}
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