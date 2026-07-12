import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="py-10 lg:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div className="space-y-8">
            <Badge size="lg">
              Available for opportunities
            </Badge>

            <div className="space-y-5">
              <h1 className="font-heading text-6xl font-black leading-none lg:text-8xl">
                 I&apos;m Dileep 👋
              </h1>

              <p className="max-w-2xl text-2xl font-semibold">
                Full Stack Developer building products and learning in public.
              </p>

              <p className="max-w-2xl text-lg text-neutral-600">
                Currently exploring Java, DSA, System Design,
                Spring Boot and scalable backend architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                View Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
              >
                Download Resume
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge>Java</Badge>
              <Badge variant="secondary">DSA</Badge>
              <Badge variant="success">Spring Boot</Badge>
              <Badge variant="danger">System Design</Badge>
            </div>
          </div>

          {/* Right */}
          <Card className="p-8">
            <div className="space-y-6">
              <div className="aspect-square rounded-[24px] border-[3px] border-black bg-[var(--blue)]" />

              <div className="space-y-3">
                <h3 className="font-heading text-3xl font-bold">
                  Dileep OS
                </h3>

                <p className="text-neutral-600">
                  MERN Developer • MCA Student • Builder
                </p>

                <Badge variant="success">
                  Open To Work
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}