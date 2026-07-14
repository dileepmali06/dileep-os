import { Hash } from "lucide-react";

import { Container } from "@/components/ui/container";

interface Props {
  tags: string[];
}

export function BlogTags({ tags }: Props) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <section className="pb-24">
      <Container>
        <div className="mx-auto max-w-3xl border-t-[3px] border-black/10 pt-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-400">
            Tagged with
          </p>
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full border-[2px] border-black bg-white px-3.5 py-1.5 text-sm font-semibold transition-colors hover:bg-neutral-50"
              >
                <Hash size={12} className="text-neutral-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}