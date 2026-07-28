import { Send } from "lucide-react";

export default function SubmitButton() {
  return (
    <button
      type="submit"
      className="flex w-full items-center justify-center gap-2.5 rounded-2xl border-[3px] border-black bg-[var(--green)] px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
    >
      <Send className="h-5 w-5" />
      Send Message
    </button>
  );
}