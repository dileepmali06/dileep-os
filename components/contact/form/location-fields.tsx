"use client";

type LocationFieldsProps = {
  values: { country: string; city: string };
  onChange: (field: "country" | "city", value: string) => void;
};

const inputClass =
  "h-12 w-full rounded-xl border-[2px] border-black bg-white px-4 text-sm font-medium outline-none transition-shadow focus:shadow-[3px_3px_0px_#000]";

export default function LocationFields({ values, onChange }: LocationFieldsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className="mb-1.5 block text-sm font-bold">Country</label>
        <input
          value={values.country}
          onChange={(e) => onChange("country", e.target.value)}
          placeholder="Optional"
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-bold">City</label>
        <input
          value={values.city}
          onChange={(e) => onChange("city", e.target.value)}
          placeholder="Optional"
          className={inputClass}
        />
      </div>
    </div>
  );
}