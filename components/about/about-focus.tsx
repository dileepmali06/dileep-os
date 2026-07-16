import {
  Target,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/badge";

interface AboutFocusProps {
  data: {
    currentFocus?: string[];
  };
}

export function AboutFocus({
  data,
}: AboutFocusProps) {
  if (
    !data.currentFocus ||
    data.currentFocus.length === 0
  ) {
    return null;
  }

  return (
    <section className="section-padding pt-0">
      <Container>

        <SectionHeading
          eyebrow="Current Focus"
          title="What I'm Working On Right Now"
          description="The technologies and skills I'm actively investing in."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-5xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {data.currentFocus.map(
            (item, index) => (
              <div
                key={item}
                className="group rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0px_#000] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000]"
              >
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--yellow)]">
                    <Target size={22} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-neutral-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-5 font-heading text-xl font-black">
                  {item}
                </h3>

                <div className="mt-4">
                  <Badge variant="outline">
                    In Progress
                  </Badge>
                </div>
              </div>
            )
          )}

        </div>

      </Container>
    </section>
  );
}