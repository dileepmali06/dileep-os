import { notFound } from "next/navigation";

import { getResumeBySlug, getResumesByType } from "@/sanity/services/resume";

import ResumeDetailHero from "@/components/resume/detail/resume-detail-hero";
import ResumePreview from "@/components/resume/detail/resume-preview";
import ResumeInformation from "@/components/resume/detail/resume-information";
import ResumeHighlights from "@/components/resume/detail/resume-highlights";
import ResumeSkills from "@/components/resume/detail/resume-skills";
import ResumeChangelog from "@/components/resume/detail/resume-changelog";
import ResumeDownload from "@/components/resume/detail/resume-download";
import RelatedResumes from "@/components/resume/detail/related-resumes";
import ResumeNavigation from "@/components/resume/detail/resume-navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ResumeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resume = await getResumeBySlug(slug);

  if (!resume) {
    notFound();
  }

  const sameType = resume.type ? await getResumesByType(resume.type) : [];
  const related = sameType.filter((r: { slug: string }) => r.slug !== resume.slug);

  return (
    <main>
      <ResumeDetailHero resume={resume} />
      <ResumePreview thumbnail={resume.thumbnail} title={resume.title} />
      <ResumeInformation
        description={resume.description}
        pageCount={resume.pageCount}
        fileSize={resume.fileSize}
      />
      <ResumeHighlights highlights={resume.highlights} />
      <ResumeSkills skills={resume.skills} />
      <ResumeChangelog changeLog={resume.changeLog} version={resume.version} />
      <ResumeDownload
        resumeFile={resume.resumeFile}
        downloadLabel={resume.downloadLabel}
        fileSize={resume.fileSize}
      />
      <RelatedResumes resumes={related} />
      <ResumeNavigation type={resume.type} />
    </main>
  );
}