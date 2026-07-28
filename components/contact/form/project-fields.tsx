"use client";

type ProjectFieldsProps = {
  values: { subject: string; service: string; budget: string; timeline: string };
  onChange: (field: "subject" | "service" | "budget" | "timeline", value: string) => void;
};

const inputClass =
  "h-12 w-full rounded-xl border-[2px] border-black bg-white px-4 text-sm font-medium outline-none transition-shadow focus:shadow-[3px_3px_0px_#000]";

// These values must match the `service` field's options.list in
// sanity/schemaTypes/contact.ts exactly — otherwise Studio's dropdown
// can't find a matching label and shows the field as empty.
const serviceOptions = [
  { value: "portfolio", label: "Portfolio Website" },
  { value: "business-website", label: "Business Website" },
  { value: "ecommerce", label: "E-Commerce Website" },
  { value: "web-app", label: "Web Application" },
  { value: "landing-page", label: "Landing Page" },
  { value: "dashboard", label: "Dashboard" },
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "seo", label: "SEO" },
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Other" },
];

// Must match the `budget` field's options.list in the schema exactly.
const budgetOptions = [
  { value: "under-10k", label: "Under ₹10,000" },
  { value: "10k-25k", label: "₹10,000 - ₹25,000" },
  { value: "25k-50k", label: "₹25,000 - ₹50,000" },
  { value: "50k-100k", label: "₹50,000 - ₹1,00,000" },
  { value: "100k-plus", label: "₹1,00,000+" },
  { value: "not-decided", label: "Not Decided" },
];

// Must match the `timeline` field's options.list in the schema exactly.
const timelineOptions = [
  { value: "asap", label: "ASAP" },
  { value: "1-week", label: "Within 1 Week" },
  { value: "1-month", label: "Within 1 Month" },
  { value: "2-3-months", label: "2-3 Months" },
  { value: "flexible", label: "Flexible" },
];

function PillGroup({
  label,
  options,
  value,
  onSelect,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = value === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onSelect(isActive ? "" : option.value)}
              className={`rounded-xl border-[2px] border-black px-3.5 py-2 text-xs font-bold transition-all sm:text-sm ${
                isActive
                  ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                  : "bg-white hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#000]"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ProjectFields({ values, onChange }: ProjectFieldsProps) {
  return (
    <div className="space-y-5">
      <div>
        <label className="mb-1.5 block text-sm font-bold">Subject</label>
        <input
          value={values.subject}
          onChange={(e) => onChange("subject", e.target.value)}
          placeholder="What's this about?"
          className={inputClass}
        />
      </div>

      <PillGroup
        label="Service"
        options={serviceOptions}
        value={values.service}
        onSelect={(v) => onChange("service", v)}
      />

      <PillGroup
        label="Budget"
        options={budgetOptions}
        value={values.budget}
        onSelect={(v) => onChange("budget", v)}
      />

      <PillGroup
        label="Timeline"
        options={timelineOptions}
        value={values.timeline}
        onSelect={(v) => onChange("timeline", v)}
      />
    </div>
  );
}