'use client';
import React, { useMemo } from 'react';
import { usePagination } from '@/components/usePagination';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const PaginationWrapper = ({ children, itemsPerPage = 6 }) => {
  // 🔥 Handle BOTH cases:
  // 1. direct children
  // 2. wrapped children (your case)

  const items = useMemo(() => {
    const childArray = React.Children.toArray(children);

    // if only one child and it has children → unwrap it
    if (childArray.length === 1 && childArray[0]?.props?.children) {
      return React.Children.toArray(childArray[0].props.children);
    }

    return childArray;
  }, [children]);

  const { currentPage, totalPages, pages, goToPage, paginate } = usePagination({
    totalItems: items.length,
    itemsPerPage,
  });

  const currentItems = paginate(items);

  return (
    <div>
      {/* 🔥 Preserve your grid wrapper */}
      <div className="grid gap-4 md:grid-cols-3 md:gap-8">{currentItems}</div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {/* Prev */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2 rounded bg-lightGray px-4 py-2 disabled:opacity-50"
        >
          <FaArrowLeftLong size={14} />
          Prev
        </button>

        {/* Numbers */}
        {pages.map((item, i) =>
          item === '...' ? (
            <span key={i}>...</span>
          ) : (
            <button
              key={i}
              onClick={() => goToPage(item)}
              className={`rounded px-3 py-2 ${
                item === currentPage
                  ? 'bg-primary text-white'
                  : 'hover:bg-primary hover:text-white'
              }`}
            >
              {item}
            </button>
          )
        )}

        {/* Next */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 rounded bg-primary px-4 py-2 text-white disabled:opacity-50"
        >
          Next
          <FaArrowRightLong size={14} />
        </button>
      </div>
    </div>
  );
};

export default PaginationWrapper;
