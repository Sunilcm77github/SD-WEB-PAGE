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
            ? "bg-blue-200 text-white border-blue-500"
            : "bg-white text-black border-gray-300"
        }`}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border border-gray-300 py-2 rounded-md mt-8 space-y-4 md:space-y-0 md:space-x-4">
      <p className="text-center md:ml-5">
        Showing {currentPage} of {totalPages}
      </p>
      <div className="flex items-center justify-center space-x-2">
        <button
          className="px-2 py-1 sm:px-4 sm:py-2 border border-purple-600 text-purple-600 hover:text-white rounded-md hover:bg-purple-700"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex flex-wrap justify-center space-x-1">{pages}</div>
        <button
          className="px-2 py-1 sm:px-4 sm:py-2 border border-purple-600 text-purple-600 hover:text-white rounded-md hover:bg-purple-700"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className="flex items-center justify-center space-x-2 md:ml-auto md:mr-5">
        <button
          className="p-1 sm:p-2 border hover:border-purple-600 text-purple-600 hover:text-white rounded-md"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#5f6368"
            >
              <path d="M576-240 336-480l240-240 51 51-189 189 189 189-51 51Z" />
            </svg>
          </span>
        </button>

        <div className="flex flex-wrap justify-center space-x-1">{pages}</div>

        <button
          className="p-1 sm:p-2 border hover:border-purple-600 text-purple-600 hover:text-white rounded-md"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#5f6368"
            >
              <path d="M522-480 333-669l51-51 240 240-240 240-51-51 189-189Z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
