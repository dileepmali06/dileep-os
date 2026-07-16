import {
  Coffee,
  Code2,
  BookOpen,
  Rocket,
  Moon,
  Brain,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [
  Coffee,
  Code2,
  BookOpen,
  Rocket,
  Moon,
  Brain,
];

interface FunFact {
  _id: string;
  title: string;
  description: string;
}

interface Props {
  data: FunFact[];
}

export function FunFacts({
  data,
}: Props) {
  if (!data?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>

        <SectionHeading
          eyebrow="Fun Facts"
          title="Beyond The Code"
          description="A few random things about me outside of commits and pull requests."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {data.map((fact, index) => {
            const Icon =
              icons[
                index %
                  icons.length
              ];

            return (
              <div
                key={fact._id}
                className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[8px_8px_0px_#000]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border-[3px] border-black">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 font-heading text-2xl font-black">
                  {fact.title}
                </h3>

                <p className="mt-3 leading-relaxed text-neutral-600">
                  {fact.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}