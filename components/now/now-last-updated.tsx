import {
  CalendarDays,
  RefreshCcw,
} from "lucide-react";

import { Container } from "@/components/ui/container";

interface LastUpdatedProps {
  data: {
    updatedAt?: string;
  };
}

export function LastUpdated({
  data,
}: LastUpdatedProps) {

  if (!data.updatedAt) {
    return null;
  }

  const formattedDate =
    new Date(
      data.updatedAt
    ).toLocaleDateString(
      "en-US",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  return (
    <section className="pb-24">
      <Container>

        <div className="mx-auto max-w-3xl rounded-[24px] border-[4px] border-dashed border-black bg-neutral-50 p-8 text-center">

          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-black bg-white">
              <RefreshCcw size={28} />
            </div>
          </div>

          <h3 className="mt-6 font-heading text-3xl font-black">
            This Page Evolves With Me
          </h3>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-neutral-600">
            The priorities, goals and projects shown here change as my career and interests evolve. This page is updated whenever something meaningful changes.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-white px-5 py-3 font-mono text-sm font-semibold shadow-[5px_5px_0px_#000]">
            <CalendarDays size={16} />
            Last Updated: {formattedDate}
          </div>

        </div>

      </Container>
    </section>
  );
}