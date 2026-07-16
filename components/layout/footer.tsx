"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/dileepmali06", label: "GitHub" },
  { icon: TbBrandLinkedinFilled, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "X / Twitter" },
  { icon: Mail, href: "mailto:hello@dileepmali.me", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t-[4px] border-black">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border-[2px] border-black bg-[var(--blue)] font-heading text-sm font-black">
                D
              </span>
              <span className="font-heading text-2xl font-black">
                Dileep OS
              </span>
            </Link>

            <p className="mt-4 leading-relaxed text-neutral-600">
              Building products, learning in public and becoming a better
              software engineer every day.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border-[2px] border-black bg-white px-3.5 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-semibold text-neutral-600">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* nav */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-400">
              Navigate
            </p>
            <div className="flex flex-col gap-3 font-heading font-semibold">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit transition-transform hover:translate-x-1"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* connect */}
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-neutral-400">
              Connect
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border-[2px] border-black bg-white transition-all duration-200 hover:-translate-y-1 hover:bg-[var(--yellow)]"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t-[2px] border-black/10 pt-6 sm:flex-row">
          <p className="text-center text-sm text-neutral-500 sm:text-left">
            © {new Date().getFullYear()} Dileep OS · Built with Next.js,
            Sanity and Tailwind CSS.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-black bg-white transition-transform hover:-translate-y-1"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}