"use client";

interface ProjectPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function ProjectPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProjectPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <p className="font-mono text-xs text-neutral-400">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="rounded-xl border-[2px] border-black px-4 py-2 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`h-10 w-10 rounded-xl border-[2px] border-black text-sm font-bold transition-all ${
              currentPage === index + 1
                ? "bg-black text-white shadow-[3px_3px_0px_#000]"
                : "bg-white hover:shadow-[3px_3px_0px_#000]"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="rounded-xl border-[2px] border-black px-4 py-2 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}