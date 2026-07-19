"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

type CodeBlockProps = {
  language?: string;
  filename?: string;
  code: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CodeBlock({
  language = "Java",
  filename = "Solution.java",
  code,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
    }
  }

  const lines = code.split("\n");
  const lineCount = lines.length;
  const charCount = code.length;

  return (
    <motion.div
      variants={fadeUp}
      className="overflow-hidden rounded-2xl border-[3px] border-black bg-[#1a1a1a] shadow-[8px_8px_0px_#000]"
    >
      {/* titlebar */}
      <div className="flex items-center justify-between gap-4 border-b-[2px] border-white/10 px-5 py-3.5">
        <div className="flex min-w-0 items-center gap-3.5">
          <div className="flex shrink-0 items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[var(--pink)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--yellow)]" />
            <span className="h-3 w-3 rounded-full bg-[var(--green)]" />
          </div>

          <div className="min-w-0 border-l border-white/10 pl-3.5">
            <p className="truncate font-mono text-sm font-bold text-white">{filename}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-neutral-400">
            {language}
          </span>

          <button
            onClick={handleCopy}
            aria-label="Copy code"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-neutral-300 transition-colors hover:border-white/40 hover:text-white"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* code */}
      <div className="overflow-x-auto">
        <pre className="min-w-max px-2 py-4 text-[13px] leading-7">
          <code>
            {lines.map((line, index) => (
              <div
                key={index}
                className={`flex px-4 ${index % 2 === 1 ? "bg-white/[0.02]" : ""}`}
              >
                <span className="mr-5 w-8 select-none text-right text-neutral-600">
                  {index + 1}
                </span>
                <span className="whitespace-pre font-mono text-neutral-100">{line || " "}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* footer stats */}
      <div className="flex items-center justify-between border-t-[2px] border-white/10 px-5 py-2.5 font-mono text-[11px] text-neutral-500">
        <span>
          {lineCount} line{lineCount === 1 ? "" : "s"}
        </span>
        <span>{charCount} chars</span>
      </div>
    </motion.div>
  );
}