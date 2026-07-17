import {
  Hammer,
  Rocket,
  FolderGit2,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [
  Hammer,
  Rocket,
  FolderGit2,
];

interface CurrentlyBuildingProps {
  data: {
    currentlyBuilding?: string[];
  };
}

export function CurrentlyBuilding({
  data,
}: CurrentlyBuildingProps) {

  if (!data.currentlyBuilding?.length) {
    return null;
  }

  return (
    <section className="section-padding bg-neutral-50">
      <Container>

        <SectionHeading
          eyebrow="Building"
          title="Currently Building"
          description="Projects and systems that are actively under construction."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {data.currentlyBuilding.map(
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
                  className="rounded-[24px] border-[4px] border-black bg-white p-8 shadow-[8px_8px_0px_#000]"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-[var(--blue)]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-black">
                    {item}
                  </h3>

                  <p className="mt-4 leading-relaxed text-neutral-600">
                    Currently being designed, developed or improved as part of my ongoing work.
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-[var(--yellow)] px-3 py-1 text-xs font-bold">
                    <div className="h-2.5 w-2.5 rounded-full bg-black animate-pulse" />
                    ACTIVE DEVELOPMENT
                  </div>

                </div>
              );
            }
          )}

        </div>

      </Container>
    </section>
  );
}