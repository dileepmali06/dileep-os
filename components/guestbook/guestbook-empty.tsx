import { Mail } from "lucide-react";

export default function GuestbookEmpty() {
  return (
    <div className="flex flex-col items-center rounded-lg border-[2px] border-dashed border-black/30 bg-[#fbf8f0] p-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border-[2px] border-black bg-white">
        <Mail size={22} className="text-neutral-300" />
      </div>
      <h3 className="mt-5 font-heading text-2xl font-black">No matching mail</h3>
      <p className="mt-3 max-w-md text-neutral-500">
        Try a different search term, country or profession.
      </p>
    </div>
  );
}