import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

interface StatsProps {
  data: {
    projectsBuilt?: number;
    yearsLearning?: number;
    leetcodeProblemsSolved?: number;
    coursesCompleted?: number;
  };
}

export function Stats({ data }: StatsProps) {

  // console.log("Data", data)
  const stats = [
    {
      value: `${data.projectsBuilt ?? 0}+`,
      label: "Projects Built",
    },

    {
      value: `${data.yearsLearning ?? 0}+`,
      label: "Years Learning",
    },

    {
      value: `${data.leetcodeProblemsSolved ?? 0}+`,
      label: "DSA Problems Solved",
    },

    {
      value: `${data.coursesCompleted ?? 0}+`,
      label: "Courses & Certifications",
    },
  ];

  return (
    <section className="pb-24">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="
                p-8
                text-center
                transition-all
                duration-200
                hover:-translate-x-1
                hover:-translate-y-1
                hover:shadow-[10px_10px_0px_#000]
              "
            >
              <div className="space-y-3">
                <h2 className="font-heading text-5xl font-black">
                  {stat.value}
                </h2>

                <p className="text-lg font-medium text-neutral-600">
                  {stat.label}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}