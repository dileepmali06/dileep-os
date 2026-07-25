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
              className="relative overflow-hidden rounded-2xl border-[3px] border-black bg-white p-7 shadow-[8px_8px_0px_#000] sm:p-9"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 38px, rgba(0,0,0,0.06) 39px)",
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder="Your name *"
                  className="h-11 rounded-lg border-[2px] border-black bg-white/90 px-3.5 text-sm font-medium outline-none focus:shadow-[3px_3px_0px_#000]"
                />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="Email (not shown publicly)"
                  className="h-11 rounded-lg border-[2px] border-black bg-white/90 px-3.5 text-sm font-medium outline-none focus:shadow-[3px_3px_0px_#000]"
                />
                <input
                  value={form.profession}
                  onChange={(e) => updateField("profession", e.target.value)}
                  placeholder="Profession"
                  className="h-11 rounded-lg border-[2px] border-black bg-white/90 px-3.5 text-sm font-medium outline-none focus:shadow-[3px_3px_0px_#000]"
                />
                <input
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  placeholder="Company"
                  className="h-11 rounded-lg border-[2px] border-black bg-white/90 px-3.5 text-sm font-medium outline-none focus:shadow-[3px_3px_0px_#000]"
                />
                <input
                  value={form.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  placeholder="Country"
                  className="h-11 rounded-lg border-[2px] border-black bg-white/90 px-3.5 text-sm font-medium outline-none focus:shadow-[3px_3px_0px_#000]"
                />
                <input
                  value={form.website}
                  onChange={(e) => updateField("website", e.target.value)}
                  placeholder="Website (optional)"
                  className="h-11 rounded-lg border-[2px] border-black bg-white/90 px-3.5 text-sm font-medium outline-none focus:shadow-[3px_3px_0px_#000]"
                />
              </div>

              {/* rating */}
              <div className="mt-4 flex items-center gap-2">
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

              <textarea
                required
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Leave your message... *"
                rows={4}
                className="mt-4 w-full resize-none rounded-lg border-[2px] border-black bg-white/90 p-3.5 text-sm font-medium leading-[38px] outline-none focus:shadow-[3px_3px_0px_#000]"
              />

              {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 inline-flex items-center gap-2.5 rounded-xl border-[3px] border-black bg-[var(--pink)] px-6 py-3 font-black shadow-[5px_5px_0px_#000] transition-all hover:-translate-y-0.5 disabled:opacity-60"
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
            </motion.form>
          )}
        </div>
      </Container>
    </section>
  );
}