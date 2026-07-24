import { Container } from "../../ui/container";
import ResumeCard from "../resume-card";

type RelatedResume = {
  _id: string;
  title: string;
  slug: string;
  type?: string;
  version?: string;
  targetRole?: string;
  pageCount?: number;
  fileSize?: string;
  isATSFriendly?: boolean;
  thumbnail?: string;
  resumeFile?: string;
};

type RelatedResumesProps = {
  resumes: RelatedResume[];
};

export default function RelatedResumes({ resumes }: RelatedResumesProps) {
  if (!resumes?.length) return null;

  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
            Same file, other cuts
          </p>
          <h2 className="mt-1 font-heading text-2xl font-black">Other Versions</h2>

          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {resumes.map((resume) => (
              <ResumeCard key={resume._id} resume={resume} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}