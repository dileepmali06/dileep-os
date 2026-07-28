import { Trophy, CalendarDays, ExternalLink, Award } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Achievement {
  _id: string;
  title: string;
  slug?: { current: string };
  category?: string;
  description?: string;
  achievementDate?: string;
  metric?: string;
  skills?: string[];
  proofUrl?: string;
  featured?: boolean;
}

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="group relative flex h-full flex-col pt-7">
      {/* certificate frame — double border */}
      <div className="relative flex flex-1 flex-col overflow-visible rounded-2xl border-[3px] border-black bg-white p-1.5 shadow-[8px_8px_0px_#000] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[11px_11px_0px_#000]">
        <div className="relative flex flex-1 flex-col rounded-xl border-[2px] border-dashed border-black/25 px-6 pb-6 pt-10">
          {/* medallion — adaptive pill, sits on top edge, never distorts */}
          <div className="absolute -top-[26px] left-1/2 z-20 -translate-x-1/2">
            <div className="flex h-[38px] min-w-[38px] max-w-[150px] items-center justify-center rounded-full border-[3px] border-black bg-[var(--yellow)] px-3 shadow-[3px_3px_0_0_#000] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg]">
              {achievement.metric ? (
                <span className="truncate font-heading text-xs font-black leading-none sm:text-sm">
                  {achievement.metric}
                </span>
              ) : (
                <Trophy size={18} />
              )}
            </div>
          </div>

          {/* featured wax-seal corner */}
          {achievement.featured && (
            <span className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border-[2px] border-black bg-[var(--pink)] shadow-[2px_2px_0_0_#000]">
              <Award size={15} />
            </span>
          )}

          {achievement.category && (
            <p className="text-center font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              {achievement.category}
            </p>
          )}

          <h3 className="mt-2 text-center font-heading text-xl font-black leading-tight">
            {achievement.title}
          </h3>

          {achievement.description && (
            <p className="mt-3 line-clamp-3 text-center text-sm leading-relaxed text-neutral-600">
              {achievement.description}
            </p>
          )}

          {!!achievement.skills?.length && (
            <div className="mt-5 flex flex-wrap justify-center gap-1.5">
              {achievement.skills.slice(0, 4).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border-[2px] border-black/15 bg-neutral-50 px-2.5 py-0.5 text-xs font-medium text-neutral-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-3 border-t-[2px] border-dashed border-black/15 pt-4">
            {achievement.achievementDate ? (
              <span className="flex items-center gap-1.5 font-mono text-[11px] font-medium text-neutral-500">
                <CalendarDays size={12} />
                {new Date(achievement.achievementDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            ) : (
              <span />
            )}

            {achievement.proofUrl && (
              <Button size="sm" variant="outline">

                <a href={achievement.proofUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  Proof
                  <ExternalLink size={13} />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}