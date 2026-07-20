import { Container } from "../../ui/container";

type LearningContentProps = {
  summary?: string;
};

export default function LearningContent({ summary }: LearningContentProps) {
  if (!summary) return null;

  const paragraphs = summary.split(/\n{2,}/).filter(Boolean);
  const [first, ...rest] = paragraphs;

  return (
    <section className="pb-4">
      <Container>
        <div
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border-[3px] border-black bg-white px-7 py-8 shadow-[7px_7px_0px_#000] sm:px-10 sm:py-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent, transparent 33px, rgba(0,0,0,0.06) 34px)",
          }}
        >
          <p className="whitespace-pre-line text-[17px] leading-[34px] text-neutral-700">
            <span className="float-left mr-2 font-heading text-6xl font-black leading-[0.8] text-black">
              {first?.charAt(0)}
            </span>
            {first?.slice(1)}
          </p>

          {rest.map((paragraph, index) => (
            <p key={index} className="mt-1 whitespace-pre-line text-[17px] leading-[34px] text-neutral-700">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}