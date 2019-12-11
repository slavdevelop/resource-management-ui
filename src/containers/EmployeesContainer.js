import React, { useEffect, useState } from 'react';

import { getEmpList } from 'services/empApi';
import { empFilter } from 'utils/empFilter';
import {
  GlobalStyle,
  EmployeesContainerWrapper
} from 'styles/employeesContainerStyles';

import EmpList from 'components/empList';
import Pagination from 'components/pagination';

const EmployeesContainer = () => {
  const [empList, setEmpList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [empsPerPage, setEmpsPerPage] = useState(20);

  useEffect(() => {
    setLoading(true);

    getEmpList().then(r => {
      const result = empFilter(r.data);
      setEmpList(result);
    });

    setLoading(false);
  }, []);

  const indexOfLastEmp = currentPage * empsPerPage;
  const indexOfFirstEmp = indexOfLastEmp - empsPerPage;
  const currentEmps = empList.slice(indexOfFirstEmp, indexOfLastEmp);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <GlobalStyle />
      <EmployeesContainerWrapper data-test-id="employees-container">
        <h1>Reward Gateway Employees List</h1>
        {!loading && empList.length > 0 && (
          <EmpList employees={currentEmps} loading={loading} />
        )}
        <Pagination
          empsPerPage={empsPerPage}
          totalEmps={empList.length}
          paginate={paginate}
        />
      </EmployeesContainerWrapper>
    </>
  );
};

export default EmployeesContainer;
