import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "@/components/ui/card";

const timelineItems = [
  {
    year: "2021",
    title: "Started Coding Journey",
    description:
      "Started exploring programming fundamentals and web development.",
  },
  {
    year: "2023",
    title: "Entered Full Stack Development",
    description:
      "Learned React, Node.js and started building real-world projects.",
  },
  {
    year: "2024",
    title: "Built Production Projects",
    description:
      "Worked on client projects and improved full stack engineering skills.",
  },
  {
    year: "2025",
    title: "Java + DSA + System Design",
    description:
      "Currently focusing on backend engineering and scalable systems.",
  },
  {
    year: "Future",
    title: "Software Engineer",
    description:
      "Building expertise in distributed systems, architecture and backend engineering.",
  },
];

export function Timeline() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Journey"
          title="Timeline"
          description="The journey from curiosity to engineering."
          align="center"
        />

        <div className="relative mx-auto mt-20 max-w-4xl">
          {/* Center Line */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-black md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {timelineItems.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                } items-center`}
              >
                {/* Dot */}
                <div className="absolute left-6 z-10 h-6 w-6 rounded-full border-[3px] border-black bg-[var(--yellow)] md:left-1/2 md:-translate-x-1/2" />

                {/* Card */}
                <div className="ml-16 w-full md:ml-0 md:w-5/12">
                  <Card className="p-6">
                    <span className="font-heading text-sm font-bold uppercase text-neutral-500">
                      {item.year}
                    </span>

                    <h3 className="mt-2 font-heading text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}