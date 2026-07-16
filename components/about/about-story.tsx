import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface AboutStoryProps {
  data: {
    fullBio?: PortableTextBlock[];
  };
} 

export function AboutStory({
  data,
}: AboutStoryProps) {
  if (
    !data.fullBio ||
    data.fullBio.length === 0
  ) {
    return null;
  }

  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mx-auto max-w-4xl">

          <SectionHeading
            eyebrow="My Story"
            title="The Journey So Far"
            description="How curiosity turned into a career in software engineering."
            align="center"
          />

          <div className="prose prose-lg mx-auto mt-16 max-w-none prose-headings:font-heading prose-headings:font-black prose-p:text-neutral-700 prose-p:leading-relaxed prose-strong:text-black">
            <PortableText
              value={data.fullBio}
            />
          </div>

        </div>
      </Container>
    </section>
  );
}