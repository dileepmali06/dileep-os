import { ExternalLink, Link2 } from "lucide-react";

import { Container } from "../../ui/container";

type ResourcesProps = {
  resources?: string[];
};

function hostnameFor(url: string) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

export default function Resources({ resources }: ResourcesProps) {
  if (!resources?.length) return null;

  return (
    <section className="pb-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border-[3px] border-black bg-[var(--blue)]">
              <Link2 size={16} />
            </div>
            <h2 className="font-heading text-2xl font-black">Resources</h2>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {resources.map((url) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl border-[2px] border-black bg-white px-4 py-3.5 shadow-[3px_3px_0px_#000] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000]"
              >
                <span className="truncate text-sm font-semibold">
                  {hostnameFor(url)}
                </span>
                <ExternalLink
                  size={15}
                  className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}