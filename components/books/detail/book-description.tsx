import { Container } from "../../ui/container";

type BookDescriptionProps = {
  description?: string;
};

export default function BookDescription({ description }: BookDescriptionProps) {
  if (!description) return null;

  const firstChar = description.charAt(0);
  const rest = description.slice(1);

  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="relative grid overflow-hidden rounded-2xl border-[3px] border-black shadow-[8px_8px_0px_#000] sm:grid-cols-[0.7fr_1fr]">
            {/* left page — decorative */}
            <div
              className="hidden flex-col items-center justify-center gap-4 border-r-[2px] border-black/10 p-8 sm:flex"
              style={{ background: "#faf6ec" }}
            >
              <span className="font-heading text-8xl font-black leading-none text-black/10">
                &ldquo;
              </span>
              <p className="text-center font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
                From the book
              </p>
            </div>

            {/* right page — description text */}
            <div
              className="relative px-7 py-9 sm:px-10 sm:py-11"
              style={{
                background: "#faf6ec",
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 32px, rgba(0,0,0,0.06) 33px)",
              }}
            >
              {/* spine gutter shadow */}
              <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-6 bg-gradient-to-r from-black/15 to-transparent sm:block" />

              <p className="whitespace-pre-line text-[17px] leading-[33px] text-neutral-700">
                <span className="float-left mr-2 font-heading text-6xl font-black leading-[0.8] text-black">
                  {firstChar}
                </span>
                {rest}
              </p>
            </div>
          </div>

          {/* page edge shadow beneath */}
          <div className="mx-3 h-2 rounded-b-xl bg-black/10 blur-[2px]" />
        </div>
      </Container>
    </section>
  );
}