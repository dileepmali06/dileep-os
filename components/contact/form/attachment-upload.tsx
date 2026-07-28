"use client";

import { useRef } from "react";
import { Paperclip, X } from "lucide-react";

type AttachmentUploadProps = {
  files: File[];
  onChange: (files: File[]) => void;
};

export default function AttachmentUpload({ files, onChange }: AttachmentUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (fileList: FileList | null) => {
    if (!fileList) return;
    onChange([...files, ...Array.from(fileList)]);
  };

  const handleRemove = (index: number) => {
    onChange(files.filter((_, i) => i !== index));
  };

  return (
    <div>
      <label className="mb-1.5 block text-sm font-bold">Attachments</label>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex w-full items-center justify-center gap-2 rounded-xl border-[2px] border-dashed border-black/30 bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-500 transition hover:border-black/50 hover:bg-neutral-100"
      >
        <Paperclip size={15} />
        Attach a file (brief, portfolio, etc.)
      </button>

      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={(e) => handleAdd(e.target.files)}
      />

      {files.length > 0 && (
        <div className="mt-2.5 space-y-1.5">
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between rounded-lg border-[2px] border-black/15 bg-white px-3 py-2 text-xs"
            >
              <span className="truncate font-medium">{file.name}</span>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                aria-label="Remove file"
                className="shrink-0 text-neutral-400 hover:text-black"
              >
                <X size={13} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}