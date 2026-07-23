"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, FileText, ShieldCheck, Sparkles, Paperclip, ArrowRight } from "lucide-react";

import { Container } from "../ui/container";

type PrimaryResume = {
    title?: string;
    targetRole?: string;
    version?: string;
    isATSFriendly?: boolean;
    pageCount?: number;
    resumeFile?: string;
} | null;

type ResumeHeroProps = {
    totalResumes: number;
    featuredResumes: number;
    atsFriendlyResumes: number;
    primaryResume?: PrimaryResume;
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function ResumeHero({
    totalResumes,
    featuredResumes,
    atsFriendlyResumes,
    primaryResume,
}: ResumeHeroProps) {
    const stats = [
        { icon: FileText, label: "Versions", value: totalResumes ?? 0, color: "var(--blue)" },
        { icon: Sparkles, label: "Featured", value: featuredResumes ?? 0, color: "var(--yellow)" },
        { icon: ShieldCheck, label: "ATS Friendly", value: atsFriendlyResumes ?? 0, color: "var(--green)" },
    ];

    return (
        <section className="overflow-hidden pb-20 pt-16">
            <Container>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="grid gap-14 lg:grid-cols-2 lg:items-center"
                >
                    {/* LEFT */}
                    <motion.div variants={fadeUp}>
                        <div className="inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-[#e8dcc0] px-4 py-2 text-sm font-black">
                            <Paperclip size={15} />
                            Personnel file
                        </div>

                        <h1 className="mt-7 text-5xl font-black leading-tight md:text-6xl">
                            Every version,
                            <br />
                            tailored to the role.
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
                            Different cuts of my resume for Software Engineering, Backend
                            Development, Full Stack Development, Freelancing and Founder
                            opportunities — pick whichever fits what you&apos;re hiring for.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                href="#all-resumes"
                                className="inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-[var(--orange)] px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                            >
                                Browse resumes
                                <ArrowRight size={18} />
                            </Link>

                            {primaryResume?.resumeFile && (

                                <a href={primaryResume.resumeFile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="inline-flex items-center gap-2.5 rounded-2xl border-[3px] border-black bg-white px-6 py-3.5 font-black shadow-[6px_6px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                                >
                                    <Download size={18} />
                                    Download latest
                                </a>
                            )}
                        </div>

                        {/* dossier-style stat strip */}
                        <div className="mt-10 overflow-hidden rounded-xl border-[2px] border-black">
                            <div className="grid grid-cols-3 divide-x-[2px] divide-black">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col items-center gap-1.5 bg-white px-3 py-3.5">
                                        <div
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border-[1.5px] border-black"
                                            style={{ background: stat.color }}
                                        >
                                            <stat.icon size={14} />
                                        </div>
                                        <span className="font-heading text-lg font-black leading-none">{stat.value}</span>
                                        <span className="text-center text-[10px] font-semibold text-neutral-500">
                                            {stat.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT — kept exactly as-is */}
                    <motion.div variants={fadeUp} className="relative">
                        <motion.div
                            initial={{ rotate: -5, opacity: 0, y: 40 }}
                            animate={{ rotate: -4, opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="mx-auto w-full max-w-sm rounded-[28px] border-[3px] border-black bg-white p-7 shadow-[12px_12px_0px_#000]"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-black uppercase text-neutral-500">
                                        {primaryResume ? "Primary resume" : "No primary resume set"}
                                    </p>
                                    <h3 className="mt-1 text-xl font-black">
                                        {primaryResume?.title ?? primaryResume?.targetRole ?? "—"}
                                    </h3>
                                </div>

                                <div className="rounded-xl border-[3px] border-black bg-[var(--yellow)] p-3">
                                    <FileText size={22} />
                                </div>
                            </div>

                            <div className="mt-8 space-y-3">
                                <div className="h-3 rounded-full bg-neutral-200" />
                                <div className="h-3 w-3/4 rounded-full bg-neutral-200" />
                                <div className="h-3 w-4/5 rounded-full bg-neutral-200" />

                                <div className="mt-6 h-24 rounded-xl border-[2px] border-dashed border-neutral-300" />

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <div className="flex h-14 flex-col items-center justify-center rounded-lg bg-neutral-100">
                                        <span className="text-[10px] font-bold uppercase text-neutral-400">Version</span>
                                        <span className="text-sm font-black">{primaryResume?.version ?? "—"}</span>
                                    </div>
                                    <div className="flex h-14 flex-col items-center justify-center rounded-lg bg-neutral-100">
                                        <span className="text-[10px] font-bold uppercase text-neutral-400">Pages</span>
                                        <span className="text-sm font-black">{primaryResume?.pageCount ?? "—"}</span>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`mt-8 rounded-xl border-[3px] border-black py-3 text-center font-black ${primaryResume?.isATSFriendly ? "bg-[var(--green)]" : "bg-neutral-100 text-neutral-400"
                                    }`}
                            >
                                {primaryResume?.isATSFriendly ? "ATS friendly ✓" : "ATS friendly status unknown"}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Container>
        </section>
    );
}