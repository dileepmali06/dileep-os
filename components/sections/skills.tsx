import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "../ui/SectionHeading";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "Prisma",
      "Spring Boot",
    ],
  },

  {
    title: "Database",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Sanity CMS",
    ],
  },

  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Vercel",
    ],
  },

  {
    title: "Currently Learning",
    skills: [
      "Java",
      "DSA",
      "System Design",
      "Microservices",
    ],
  },
];

export function Skills() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A growing toolkit of technologies, frameworks and tools that I use to build modern software."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              className="p-6"
            >
              <h3 className="font-heading mb-5 text-2xl font-bold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}