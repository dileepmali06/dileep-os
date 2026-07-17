import { Code2, Layers } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface NowStackProps {
  data: {
    currentStack?: string[];
  };
}

export function NowStack({
  data,
}: NowStackProps) {
  if (!data.currentStack?.length) {
    return null;
  }

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Stack"
          title="My Current Tech Stack"
          description="The technologies I'm using the most right now."
          align="center"
        />

        <div className="mx-auto mt-16 max-w-5xl rounded-[28px] border-[4px] border-black bg-white p-8 shadow-[10px_10px_0px_#000]">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--green)]">
              <Code2 size={30} />
            </div>

            <div>
              <h3 className="font-heading text-3xl font-black">
                Default Stack
              </h3>

              <p className="text-neutral-500">
                Technologies I reach for first.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {data.currentStack.map(
              (tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-3 rounded-2xl border-[3px] border-black bg-neutral-50 px-5 py-3 shadow-[4px_4px_0px_#000]"
                >
                  <Layers
                    size={18}
                    className="text-neutral-500"
                  />

                  <span className="font-semibold">
                    {tech}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}