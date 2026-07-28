"use client";

type CompanyFieldsProps = {
  values: { company: string; jobTitle: string; website: string };
  onChange: (field: "company" | "jobTitle" | "website", value: string) => void;
};

const inputClass =
  "h-12 w-full rounded-xl border-[2px] border-black bg-white px-4 text-sm font-medium outline-none transition-shadow focus:shadow-[3px_3px_0px_#000]";

export default function CompanyFields({ values, onChange }: CompanyFieldsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div>
        <label className="mb-1.5 block text-sm font-bold">Company</label>
        <input
          value={values.company}
          onChange={(e) => onChange("company", e.target.value)}
          placeholder="Company name"
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-bold">Job Title</label>
        <input
          value={values.jobTitle}
          onChange={(e) => onChange("jobTitle", e.target.value)}
          placeholder="Your role"
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-bold">Website</label>
        <input
          type="url"
          value={values.website}
          onChange={(e) => onChange("website", e.target.value)}
          placeholder="https://"
          className={inputClass}
        />
      </div>
    </div>
  );
}