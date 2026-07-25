"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type GuestbookPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function GuestbookPagination({
  currentPage,
  totalPages,
  onPageChange,
}: GuestbookPaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | "gap")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "gap") {
      pages.push("gap");
    }
  }

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-9 w-9 items-center justify-center rounded-xl border-[2px] border-black bg-white disabled:opacity-30"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((page, index) =>
        page === "gap" ? (
          <span key={`gap-${index}`} className="px-1 text-sm text-neutral-400">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex h-9 w-9 items-center justify-center rounded-xl border-[2px] border-black text-sm font-bold ${
              page === currentPage ? "bg-[var(--pink)]" : "bg-white hover:bg-neutral-50"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-9 w-9 items-center justify-center rounded-xl border-[2px] border-black bg-white disabled:opacity-30"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}