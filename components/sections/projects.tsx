import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smile Care",
    description:
      "Modern dental clinic website built with Next.js and Sanity CMS.",
    tags: ["Next.js", "Sanity", "Tailwind"],
  },
  {
    title: "Dileep OS",
    description:
      "Personal developer operating system and digital garden.",
    tags: ["Next.js", "TypeScript", "Sanity"],
  },
  {
    title: "Explore Bharat",
    description:
      "Travel platform showcasing destinations across India.",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

export function FeaturedProjects() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          description="A collection of products, experiments and ideas I've worked on."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <div className="aspect-video border-b-[3px] border-black bg-[var(--blue)]" />

              <CardHeader>
                <CardTitle className="text-2xl">
                  {project.title}
                </CardTitle>

                <CardDescription>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button size="sm">
                  View Project
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                >
                  Source Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}