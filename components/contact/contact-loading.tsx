import { Loader2 } from "lucide-react";

export default function ContactLoading() {
  return (
    <div className="flex flex-col items-center rounded-2xl border-[3px] border-black bg-white p-10 text-center shadow-[7px_7px_0px_#000]">
      <Loader2 size={32} className="animate-spin text-neutral-400" />
      <p className="mt-4 font-heading text-lg font-black">Sending your message…</p>
      <p className="mt-1 text-sm text-neutral-500">Just a moment.</p>
    </div>
  );
}