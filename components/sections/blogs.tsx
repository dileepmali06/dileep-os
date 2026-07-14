import { ArrowRight, Calendar, Clock3 } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "How I Built Dileep OS Using Next.js and Sanity",
    description:
      "The architecture decisions, CMS setup and design system behind my personal developer operating system.",
    category: "Engineering",
    readTime: "8 min read",
    date: "Jul 2026",
    featured: true,
  },

  {
    title: "My Java + DSA Journey",
    description:
      "Transitioning from MERN development towards software engineering and backend systems.",
    category: "Learning",
    readTime: "5 min read",
    date: "Jul 2026",
  },

  {
    title: "Why I Chose Sanity CMS",
    description:
      "My experience building scalable content architectures using Sanity Studio.",
    category: "Development",
    readTime: "6 min read",
    date: "Jun 2026",
  },
];

export function LatestBlogs() {
  const featured = blogs.find((blog) => blog.featured);
  const others = blogs.filter((blog) => !blog.featured);

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Writing"
          title="Latest Articles"
          description="Thoughts, learnings and engineering notes from my journey."
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Featured Article */}
          {featured && (
            <Card className="overflow-hidden">
              <div className="h-56 border-b-[3px] border-black bg-[var(--yellow)]" />

              <div className="p-8">
                <Badge>{featured.category}</Badge>

                <h3 className="mt-6 font-heading text-4xl font-black leading-tight">
                  {featured.title}
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                  {featured.description}
                </p>

                <div className="mt-6 flex items-center gap-6 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {featured.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {featured.readTime}
                  </div>
                </div>

                <Button className="mt-8">
                  Read Article
                  <ArrowRight size={18} />
                </Button>
              </div>
            </Card>
          )}

          {/* Side Articles */}
          <div className="flex flex-col gap-6">
            {others.map((blog) => (
              <Card
                key={blog.title}
                className="flex-1 p-6 transition-all hover:-translate-y-2"
              >
                <Badge variant="secondary">
                  {blog.category}
                </Badge>

                <h3 className="mt-5 font-heading text-2xl font-bold leading-tight">
                  {blog.title}
                </h3>

                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {blog.description}
                </p>

                <div className="mt-6 flex items-center gap-6 text-sm text-neutral-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={15} />
                    {blog.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={15} />
                    {blog.readTime}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </Container>
    </section>
  );
}