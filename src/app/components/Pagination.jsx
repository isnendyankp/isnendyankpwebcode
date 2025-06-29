import React from 'react';

const Pagination = ({ projectsPerPage, totalProjects, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) {
    return null; // Don't render pagination if there's only one page or less
  }

  return (
    <nav>
      <ul className='flex justify-center items-center space-x-2 mt-12'>
        {/* Previous Button */}
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className='px-4 py-2 rounded-md bg-[#18191E] text-white border border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-500/50 transition-colors duration-300'
          >
            Prev
          </button>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md border transition-colors duration-300 ${
                currentPage === number
                  ? 'bg-primary-500 text-white border-primary-500'
                  : 'bg-[#18191E] text-white border-slate-600 hover:bg-primary-500/50'
              }`}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className='px-4 py-2 rounded-md bg-[#18191E] text-white border border-slate-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-500/50 transition-colors duration-300'
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
