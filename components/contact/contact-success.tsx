import { CheckCircle2 } from "lucide-react";

type ContactSuccessProps = {
  onReset: () => void;
};

export default function ContactSuccess({ onReset }: ContactSuccessProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border-[3px] border-black bg-[var(--green)] p-10 text-center shadow-[7px_7px_0px_#000]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-[3px] border-black bg-white">
        <CheckCircle2 size={28} />
      </div>
      <h3 className="mt-5 font-heading text-2xl font-black">Message Sent!</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-black/70">
        Thanks for reaching out. I usually reply within a day or two — I&apos;ll
        get back to you at the email you provided.
      </p>
      <button
        onClick={onReset}
        className="mt-6 rounded-xl border-[2px] border-black bg-white px-5 py-2.5 text-sm font-bold transition hover:-translate-y-0.5"
      >
        Send another message
      </button>
    </div>
  );
}