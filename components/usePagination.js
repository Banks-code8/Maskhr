import { useState, useMemo } from 'react';

export const usePagination = ({
  totalItems,
  itemsPerPage = 6,
  siblingCount = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = useMemo(() => {
    const range = [];

    const left = Math.max(currentPage - siblingCount, 1);
    const right = Math.min(currentPage + siblingCount, totalPages);

    // first page
    if (left > 1) range.push(1);

    // left dots
    if (left > 2) range.push('...');

    // middle pages
    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    // right dots
    if (right < totalPages - 1) range.push('...');

    // last page
    if (right < totalPages) range.push(totalPages);

    return range;
  }, [currentPage, totalPages, siblingCount]);

  const paginate = (items) => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  };

  const goToPage = (page) => {
    if (page === '...') return;
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return {
    currentPage,
    totalPages,
    pages,
    goToPage,
    paginate,
  };
};
