import Link from "next/link";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";

import { Container } from "../../ui/container";
import { getCategoryMeta, difficultyStyles } from "../learning-meta";

type RelatedLog = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  summary?: string;
  difficulty?: string;
  favorite?: boolean;
};

type RelatedLearningProps = {
  logs: RelatedLog[];
};

export default function RelatedLearning({ logs }: RelatedLearningProps) {
  if (!logs?.length) return null;

  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2.5">
            <Sparkles size={16} />
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-600">
              Related entries
            </h2>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {logs.map((log) => {
              const meta = getCategoryMeta(log.category);
              const Icon = meta.icon;
              const date = new Date(log.date);
              const day = date.toLocaleDateString("en-US", { day: "2-digit" });
              const month = date.toLocaleDateString("en-US", { month: "short" });

              return (
                <Link
                  key={log._id}
                  href={`/learning/${log.slug}`}
                  className="group flex gap-3.5 rounded-2xl border-[3px] border-black bg-white p-4 shadow-[5px_5px_0px_#000] transition-all hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#000]"
                >
                  <div
                    className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border-[2px] border-black"
                    style={{ background: meta.color }}
                  >
                    <span className="text-[9px] font-bold uppercase">{month}</span>
                    <span className="font-heading text-lg font-black leading-none">{day}</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1 truncate text-[10px] font-bold uppercase tracking-wide text-neutral-500">
                        <Icon size={11} />
                        {meta.label}
                      </span>
                      {log.favorite && <Star size={11} fill="black" className="shrink-0" />}
                    </div>

                    <h3 className="mt-1 line-clamp-2 text-sm font-black leading-snug">
                      {log.title}
                    </h3>

                    <div className="mt-1.5 flex items-center justify-between">
                      {log.difficulty ? (
                        <span
                          className={`rounded-full border border-black px-1.5 py-0.5 text-[9px] font-bold uppercase ${
                            difficultyStyles[log.difficulty] ?? "bg-neutral-200"
                          }`}
                        >
                          {log.difficulty}
                        </span>
                      ) : (
                        <span />
                      )}
                      <ArrowUpRight
                        size={12}
                        className="shrink-0 text-neutral-300 transition-all group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}