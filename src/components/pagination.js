import React, { useState } from 'react';

import { PaginationWrapper, PageNumber } from 'styles/paginationStyles';

const Pagination = ({ empsPerPage, totalEmps, paginate }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);

  for (let i = 1; i < Math.ceil(totalEmps / empsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper>
      {pageNumbers.map(number => (
        <PageNumber
          className={currentPage == number ? 'current' : ''}
          key={number}
        >
          <a
            onClick={() => {
              setCurrentPage(number);
              paginate(number);
            }}
            href="!#"
          >
            {number}
          </a>
        </PageNumber>
      ))}
    </PaginationWrapper>
  );
};

export default Pagination;
