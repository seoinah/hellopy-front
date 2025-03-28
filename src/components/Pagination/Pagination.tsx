import React, { useEffect, useState } from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

const PAGE_SIZE = 10;

interface PaginationProps {
  totalCount: number; // 전체 페이지 수
  currentPage: number; // 현재 페이지
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  currentPage,
  onPageChange,
}) => {
  const [totalPages, setTotalPage] = useState<number>(0);

  useEffect(() => {
    setTotalPage(Math.ceil(totalCount / PAGE_SIZE));
  }, [totalCount]);

  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + 4);
    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <button
        className="p-2 text-gray-500 hover:text-black disabled:text-gray-300"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <FaAngleDoubleLeft size={20} />
      </button>

      <button
        className="p-2 text-gray-500 hover:text-black disabled:text-gray-300"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaAngleLeft size={20} />
      </button>

      <div className="flex gap-2">
        {getPageNumbers().map((page) => (
          <button
            key={page}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-xl font-medium transition-all ${page === currentPage ? "font-bold text-purple-500" : "text-gray-500 hover:text-black"} `}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="p-2 text-gray-500 hover:text-black disabled:text-gray-300"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight size={20} />
      </button>

      <button
        className="p-2 text-gray-500 hover:text-black disabled:text-gray-300"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <FaAngleDoubleRight size={20} />
      </button>
    </div>
  );
};
