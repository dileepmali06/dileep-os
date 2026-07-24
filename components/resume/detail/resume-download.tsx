import { Container } from "../../ui/container";
import DownloadCta from "../download-cta";

type ResumeDownloadProps = {
  resumeFile?: string;
  downloadLabel?: string;
  fileSize?: string;
};

export default function ResumeDownload({ resumeFile, downloadLabel, fileSize }: ResumeDownloadProps) {
  if (!resumeFile) return null;

  return (
    <section className="pb-16">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3">
          <span className="-rotate-3 rounded border-[2px] border-black/70 px-3 py-1 font-mono text-[10px] font-black uppercase tracking-widest text-black/60">
            Approved for release
          </span>
          <DownloadCta href={resumeFile} label={downloadLabel} fileSize={fileSize} />
        </div>
      </Container>
    </section>
  );
}