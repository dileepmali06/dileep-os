import Image from "next/image";
import { FileText } from "lucide-react";

import { Container } from "../../ui/container";

type ResumePreviewProps = {
  thumbnail?: string;
  title: string;
};

export default function ResumePreview({ thumbnail, title }: ResumePreviewProps) {
  return (
    <section className="pb-14">
      <Container>
        <div className="relative mx-auto w-full max-w-sm">
          {/* photo-corner mounts, like a pinned ID photo */}
          {["-left-1.5 -top-1.5 border-l-[3px] border-t-[3px]", "-right-1.5 -top-1.5 border-r-[3px] border-t-[3px]", "-left-1.5 -bottom-1.5 border-l-[3px] border-b-[3px]", "-right-1.5 -bottom-1.5 border-r-[3px] border-b-[3px]"].map(
            (cls) => (
              <span
                key={cls}
                className={`absolute z-10 h-6 w-6 border-black/60 ${cls}`}
              />
            )
          )}

          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md border-[2px] border-black bg-white shadow-[8px_10px_0px_rgba(0,0,0,0.15)]">
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={title}
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center text-neutral-200">
                <FileText size={64} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}