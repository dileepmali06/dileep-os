"use client";

type JavaSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function JavaSearch({ value, onChange }: JavaSearchProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search snippets, tags or categories..."
        className="h-14 w-full rounded-2xl border-[3px] border-black bg-white pl-11 pr-4 font-semibold outline-none transition-all focus:shadow-[4px_4px_0px_#000]"
      />
    </div>
  );
}