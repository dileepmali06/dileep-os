import Link from "next/link";

import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t-[4px] border-black py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-heading text-3xl font-black">
              Dileep OS
            </h3>

            <p className="mt-3 max-w-md text-neutral-600">
              Building products, learning in public and becoming a better software engineer every day.
            </p>
          </div>

          <div className="flex gap-6 font-heading font-semibold">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-black pt-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} Dileep OS · Built with Next.js, Sanity and Tailwind CSS.
        </div>
      </Container>
    </footer>
  );
}