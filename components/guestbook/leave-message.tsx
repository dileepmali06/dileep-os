"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PenLine, Star, Send, Loader2 } from "lucide-react";

import { Container } from "../ui/container";
import GuestbookSuccess from "./guestbook-success";

const initialForm = {
  name: "",
  email: "",
  profession: "",
  company: "",
  country: "",
  website: "",
  github: "",
  linkedin: "",
  message: "",
  rating: 0,
};

function LineField({
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="peer h-9 w-full border-b-[2px] border-black/25 bg-transparent px-0.5 text-sm font-medium outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
      />
    </div>
  );
}

export default function LeaveMessage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateField<K extends keyof typeof initialForm>(key: K, value: (typeof initialForm)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setForm(initialForm);
    setSubmitted(false);
  }

  return (
    <section id="leave-message" className="pb-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <div className="mb-7 flex items-center gap-2.5">
            <PenLine size={16} />
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500">
              Sign the book
            </p>
          </div>

          {submitted ? (
            <GuestbookSuccess onReset={handleReset} />
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-2xl border-[3px] border-black bg-[#fbf8f0] p-7 shadow-[8px_8px_0px_#000] sm:p-9"
            >
              {/* red margin rule */}
              <div className="absolute bottom-8 left-8 top-8 hidden w-[1.5px] bg-[var(--pink)]/40 sm:block" />

              <div className="sm:pl-6">
                <p className="font-heading text-lg font-black text-neutral-800">
                  Leave your name and a note for future visitors.
                </p>

                {/* name + email */}
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <LineField
                    required
                    value={form.name}
                    onChange={(v) => updateField("name", v)}
                    placeholder="Your name *"
                  />
                  <LineField
                    type="email"
                    value={form.email}
                    onChange={(v) => updateField("email", v)}
                    placeholder="Email (not shown publicly)"
                  />
                </div>

                {/* profession + company */}
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <LineField
                    value={form.profession}
                    onChange={(v) => updateField("profession", v)}
                    placeholder="Profession"
                  />
                  <LineField
                    value={form.company}
                    onChange={(v) => updateField("company", v)}
                    placeholder="Company"
                  />
                </div>

                {/* country + website */}
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <LineField
                    value={form.country}
                    onChange={(v) => updateField("country", v)}
                    placeholder="Country"
                  />
                  <LineField
                    value={form.website}
                    onChange={(v) => updateField("website", v)}
                    placeholder="Website (optional)"
                  />
                </div>

                {/* github + linkedin */}
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <LineField
                    value={form.github}
                    onChange={(v) => updateField("github", v)}
                    placeholder="GitHub (optional)"
                  />
                  <LineField
                    value={form.linkedin}
                    onChange={(v) => updateField("linkedin", v)}
                    placeholder="LinkedIn (optional)"
                  />
                </div>

                {/* rating */}
                <div className="mt-6 flex items-center gap-2.5">
                  <span className="text-xs font-semibold text-neutral-500">Rate your visit</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => updateField("rating", i + 1)}
                        aria-label={`${i + 1} star`}
                      >
                        <Star
                          size={18}
                          className={
                            i < form.rating ? "fill-[var(--yellow)] text-black" : "text-neutral-300"
                          }
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* message */}
                <div className="mt-6">
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Leave your message... *"
                    rows={3}
                    className="w-full resize-none border-b-[2px] border-black/25 bg-transparent px-0.5 py-1 text-sm font-medium leading-8 outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
                  />
                </div>

                {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-7 inline-flex items-center gap-2.5 rounded-xl border-[3px] border-black bg-[var(--pink)] px-6 py-3 font-black shadow-[5px_5px_0px_#000] transition-all hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      Sign the guestbook
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </Container>
    </section>
  );
}