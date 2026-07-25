import { SearchX } from "lucide-react";

export default function GuestbookEmpty() {
  return (
    <div className="flex flex-col items-center rounded-[24px] border-[3px] border-dashed border-black/30 p-16 text-center">
      <SearchX size={40} className="text-neutral-300" />
      <h3 className="mt-5 text-2xl font-black">No matching messages</h3>
      <p className="mt-3 max-w-md text-neutral-500">
        Try a different search term, country or profession.
      </p>
    </div>
  );
}