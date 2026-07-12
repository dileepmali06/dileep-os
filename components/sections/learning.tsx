import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const learningJourney = [
  {
    year: "2023",
    title: "Frontend Development",
    description:
      "Started journey with HTML, CSS, JavaScript and React.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    year: "2024",
    title: "Full Stack Development",
    description:
      "Learned MERN Stack and started building real-world projects.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    year: "2025",
    title: "Backend Engineering",
    description:
      "Currently focusing on Java, DSA, Spring Boot and System Design.",
    tags: ["Java", "DSA", "Spring Boot", "System Design"],
  },
  {
    year: "Future",
    title: "Scalable Systems",
    description:
      "Goal is to become a strong software engineer capable of building scalable systems.",
    tags: ["Microservices", "Distributed Systems", "Cloud"],
  },
];

export function LearningJourney() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Learning"
          title="My Learning Journey"
          description="A timeline of technologies and concepts I have explored and continue to learn."
          align="center"
        />

        <div className="mt-16 space-y-8">
          {learningJourney.map((item) => (
            <Card
              key={item.title}
              className="p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-3">
                  <span className="font-heading text-lg font-bold text-neutral-500">
                    {item.year}
                  </span>

                  <h3 className="font-heading text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="max-w-3xl text-neutral-600">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}