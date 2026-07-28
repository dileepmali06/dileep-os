"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileEdit } from "lucide-react";

import { Container } from "../ui/container";
import ContactSuccess from "./contact-success";
import ContactLoading from "./contact-loading";
import AttachmentUpload from "./form/attachment-upload";
import SubmitButton from "./form/submit-button";
import ProjectFields from "./form/project-fields";
import CompanyFields from "./form/company-fields";
import PersonalFields from "./form/personal-fields";
import LocationFields from "./form/location-fields";
import ContactTypeSelect from "./form/contact-type-select";

type FormState = {
  contactType: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  website: string;
  country: string;
  city: string;
  subject: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialState: FormState = {
  contactType: "hire-me",
  name: "",
  email: "",
  phone: "",
  company: "",
  jobTitle: "",
  website: "",
  country: "",
  city: "",
  subject: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const isProjectType = form.contactType === "client" || form.contactType === "freelance";

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      // FormData instead of raw JSON — this is what lets attachments
      // actually travel to the API route alongside the text fields.
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        payload.append(key, value ?? "");
      });
      files.forEach((file) => payload.append("attachments", file));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError("Something went wrong. Please try again or email me directly.");
    }
  };

  const handleReset = () => {
    setForm(initialState);
    setFiles([]);
    setStatus("idle");
  };

  return (
    <section id="contact-form" className="pb-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
              Get in touch
            </p>
            <h2 className="mt-1 text-3xl font-black sm:text-4xl">Send a Message</h2>
          </div>

          {status === "loading" && <ContactLoading />}
          {status === "success" && <ContactSuccess onReset={handleReset} />}

          {(status === "idle" || status === "error") && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-2xl border-[3px] border-black bg-white shadow-[8px_8px_0px_#000]"
            >
              {/* letterhead */}
              <div className="flex items-center justify-between border-b-[2px] border-dashed border-black/15 px-6 py-4 sm:px-8">
                <span className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                  <FileEdit size={13} />
                  Intake form
                </span>
                <span className="font-mono text-[10px] text-neutral-300">Ref. #NEW</span>
              </div>

              <form onSubmit={handleSubmit} className="px-6 py-7 sm:px-8 sm:py-9">
                {/* section 01 — contact type */}
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-heading text-lg font-black text-black/20">01</span>
                    <p className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                      What&apos;s this about
                    </p>
                  </div>
                  <ContactTypeSelect
                    value={form.contactType}
                    onChange={(v) => updateField("contactType", v)}
                  />
                </div>

                {/* section 02 — personal */}
                <div className="mt-8 border-t-[2px] border-dashed border-black/15 pt-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-heading text-lg font-black text-black/20">02</span>
                    <p className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                      Your details
                    </p>
                  </div>
                  <PersonalFields
                    values={{ name: form.name, email: form.email, phone: form.phone }}
                    onChange={(field, value) => updateField(field, value)}
                  />

                  <div className="mt-4">
                    <LocationFields
                      values={{ country: form.country, city: form.city }}
                      onChange={(field, value) => updateField(field, value)}
                    />
                  </div>
                </div>

                {/* section 03 — company + project (conditional) */}
                {isProjectType && (
                  <div className="mt-8 border-t-[2px] border-dashed border-black/15 pt-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-heading text-lg font-black text-black/20">03</span>
                      <p className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                        Project details
                      </p>
                    </div>
                    <div className="space-y-6">
                      <CompanyFields
                        values={{ company: form.company, jobTitle: form.jobTitle, website: form.website }}
                        onChange={(field, value) => updateField(field, value)}
                      />
                      <ProjectFields
                        values={{
                          subject: form.subject,
                          service: form.service,
                          budget: form.budget,
                          timeline: form.timeline,
                        }}
                        onChange={(field, value) => updateField(field, value)}
                      />
                    </div>
                  </div>
                )}

                {/* section — message */}
                <div className="mt-8 border-t-[2px] border-dashed border-black/15 pt-8">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-heading text-lg font-black text-black/20">
                      {isProjectType ? "04" : "03"}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-wide text-neutral-400">
                      The message
                    </p>
                  </div>

                  <label className="mb-1.5 block text-sm font-bold">Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell me a bit about what you need..."
                    className="w-full rounded-xl border-[2px] border-black bg-white px-4 py-3 text-sm font-medium outline-none transition-shadow focus:shadow-[3px_3px_0px_#000]"
                  />

                  <div className="mt-5">
                    <AttachmentUpload files={files} onChange={setFiles} />
                  </div>
                </div>

                {error && <p className="mt-5 text-sm font-semibold text-red-600">{error}</p>}

                <div className="mt-8">
                  <SubmitButton />
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}