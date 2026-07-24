import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

import { Container } from "../../ui/container";
import { getTypeMeta } from "../resume-meta";

type ResumeNavigationProps = {
  type?: string;
};

// no prev/next query exists for resumes (only getResumesByType), so this
// stays honest rather than fabricating a sequence
export default function ResumeNavigation({ type }: ResumeNavigationProps) {
  const meta = type ? getTypeMeta(type) : null;

  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-wrap gap-3 border-t-2 border-dashed border-black/15 pt-8">
          <Link
            href="/resume"
            className="flex items-center gap-2 rounded-xl border-[2px] border-black bg-white px-4 py-2.5 text-sm font-bold transition hover:-translate-x-0.5"
          >
            <ArrowLeft size={15} />
            Back to archive
          </Link>

          {meta && (
            <Link
              href={`/resume?type=${type}`}
              className="flex items-center gap-2 rounded-xl border-[2px] border-black bg-neutral-50 px-4 py-2.5 text-sm font-bold transition hover:bg-neutral-100"
            >
              <FileText size={15} />
              More {meta.label} resumes
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}