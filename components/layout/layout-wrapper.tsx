"use client";

import { usePathname } from "next/navigation";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({
  children,
}: LayoutWrapperProps) {
  const pathname = usePathname();

  const isStudio =
    pathname.startsWith("/studio");

  return (
    <>
      {!isStudio && <Navbar />}

      {children}

      {!isStudio && <Footer />}
    </>
  );
}