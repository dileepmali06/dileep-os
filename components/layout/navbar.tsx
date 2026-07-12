"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Learning",
    href: "/learning",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Uses",
    href: "/uses",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 py-4">
      <Container>
        <nav className="flex h-20 items-center justify-between rounded-[28px] border-[3px] border-black bg-white px-6 brutal-shadow-lg">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-2xl font-black"
          >
            Dileep OS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-base font-semibold transition-transform hover:-translate-y-1"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden md:inline-flex"
            >
              Resume
            </Button>

            <button className="flex h-12 w-12 items-center justify-center rounded-2xl border-[3px] border-black bg-white brutal-shadow-sm lg:hidden">
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}