"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-16 flex items-center justify-center gap-3">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0px_#000] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-black font-bold transition-all ${
            currentPage === index + 1
              ? "bg-black text-white shadow-[4px_4px_0px_#000]"
              : "bg-white hover:shadow-[4px_4px_0px_#000]"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0px_#000] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}