import {
  FolderGit2,
  Trophy,
  Award,
  GraduationCap,
  Briefcase,
  Target,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface JourneyStatsProps {
  stats: {
    education: number;
    experience: number;
    certificates: number;
    achievements: number;
    goals: number;
    milestones: number;
  };
}

export function JourneyStats({
  stats,
}: JourneyStatsProps) {
  const items = [
    {
      title: "Education",
      value: stats.education,
      icon: GraduationCap,
      color: "var(--yellow)",
    },
    {
      title: "Experience",
      value: stats.experience,
      icon: Briefcase,
      color: "var(--blue)",
    },
    {
      title: "Certificates",
      value: stats.certificates,
      icon: Award,
      color: "var(--green)",
    },
    {
      title: "Achievements",
      value: stats.achievements,
      icon: Trophy,
      color: "var(--pink)",
    },
    {
      title: "Goals",
      value: stats.goals,
      icon: Target,
      color: "var(--yellow)",
    },
    {
      title: "Timeline Events",
      value: stats.milestones,
      icon: FolderGit2,
      color: "var(--blue)",
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <Container>

        <SectionHeading
          eyebrow="Summary"
          title="Journey In Numbers"
          description="A quick overview of the milestones, learning and growth accumulated so far."
          align="center"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[28px] border-[4px] border-black bg-white p-8 text-center shadow-[10px_10px_0px_#000]"
              >
                <div
                  className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border-[3px] border-black"
                  style={{
                    background:
                      item.color,
                  }}
                >
                  <Icon size={34} />
                </div>

                <h3 className="mt-6 font-heading text-5xl font-black">
                  {item.value}
                </h3>

                <p className="mt-2 text-neutral-500">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}