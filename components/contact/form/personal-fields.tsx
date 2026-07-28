"use client";

type PersonalFieldsProps = {
  values: { name: string; email: string; phone: string };
  onChange: (field: "name" | "email" | "phone", value: string) => void;
};

const inputClass =
  "h-12 w-full rounded-xl border-[2px] border-black bg-white px-4 text-sm font-medium outline-none transition-shadow focus:shadow-[3px_3px_0px_#000]";

export default function PersonalFields({ values, onChange }: PersonalFieldsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-bold">Name *</label>
        <input
          required
          value={values.name}
          onChange={(e) => onChange("name", e.target.value)}
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-bold">Email *</label>
        <input
          required
          type="email"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-bold">Phone</label>
        <input
          type="tel"
          value={values.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder="Optional"
          className={inputClass}
        />
      </div>
    </div>
  );
}