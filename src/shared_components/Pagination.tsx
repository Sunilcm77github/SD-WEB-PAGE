import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        className={`px-4 py-2 mx-1 border rounded ${
          i === currentPage
            ? "bg-light-black text-blue-600 border-blue-500"
            : "bg-light-black text-dark-black"
        }`}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>
    );
  }

  return <div className="flex justify-center mt-8">{pages}</div>;
};

export default Pagination;
