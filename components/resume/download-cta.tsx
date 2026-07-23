import { Download } from "lucide-react";

type DownloadCtaProps = {
  href?: string;
  label?: string;
  fileSize?: string;
};

export default function DownloadCta({ href, label, fileSize }: DownloadCtaProps) {
  if (!href) return null;

  return (

    <a href={href}
      target="_blank"
      rel="noopener noreferrer"
      download
      className="inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-[var(--yellow)] px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
    >
      <Download className="h-5 w-5" />
      {label || "Download Resume"}
      {fileSize && <span className="font-mono text-xs font-normal opacity-70">({fileSize})</span>}
    </a>
  );
}