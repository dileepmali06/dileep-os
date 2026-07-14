"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  UserRound,
  FolderGit2,
  BookOpen,
  Newspaper,
  Wrench,
  Mail,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "About", href: "/about", icon: UserRound },
  { title: "Projects", href: "/projects", icon: FolderGit2 },
  { title: "Learning", href: "/learning", icon: BookOpen },
  { title: "Blog", href: "/blog", icon: Newspaper },
  { title: "Uses", href: "/uses", icon: Wrench },
  { title: "Contact", href: "/contact", icon: Mail },
];

function MenuBarClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const display = time
    ? time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
    : "--:--";

  return (
    <span className="hidden font-mono text-xs text-neutral-500 xl:inline">
      {display}
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-4">
      <Container>
        <nav className="flex h-16 items-center justify-between rounded-2xl border-[3px] border-black bg-white px-4 brutal-shadow-lg sm:px-5">
          {/* logo — app menu */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border-[2px] border-black bg-[var(--blue)] font-heading text-sm font-black">
              D
            </span>
            <span className="hidden font-heading text-lg font-black sm:inline">
              Dileep OS
            </span>
          </Link>

          {/* desktop menu bar items */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname?.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 font-heading text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "border-[2px] border-black bg-[var(--yellow)]"
                      : "border-[2px] border-transparent text-neutral-700 hover:border-black/15"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* right: system tray */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 xl:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-medium text-neutral-500">
                Available
              </span>
            </div>

            <MenuBarClock />

            <Button size="sm" className="hidden md:inline-flex">
              Resume
            </Button>

            <button
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border-[2px] border-black bg-white brutal-shadow-sm lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </Container>

      {/* ---------- mobile: app-launcher overlay ---------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
              className="mx-4 mt-4 rounded-2xl border-[3px] border-black bg-white p-5 brutal-shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-black">
                  Launch
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border-[2px] border-black"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive =
                    pathname === item.href ||
                    pathname?.startsWith(item.href + "/");

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex flex-col items-center gap-2 rounded-2xl border-[2px] border-black p-4 text-center transition-transform active:scale-95 ${
                          isActive ? "bg-[var(--yellow)]" : "bg-neutral-50"
                        }`}
                      >
                        <Icon size={22} />
                        <span className="text-xs font-semibold">
                          {item.title}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <Button className="mt-5 w-full">Resume</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}