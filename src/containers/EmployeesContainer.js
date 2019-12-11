import React, { useEffect, useState } from 'react';

import { getEmpList } from 'services/empApi';
import { empFilter } from 'utils/empFilter';
import {
  GlobalStyle,
  EmployeesContainerWrapper
} from 'styles/employeesContainerStyles';

import EmpList from 'components/empList';

const EmployeesContainer = () => {
  const [empList, setEmpList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getEmpList().then(r => {
      const result = empFilter(r.data);
      setEmpList(result);
    });

    setLoading(false);
  }, []);

  return (
    <>
      <GlobalStyle />
      <EmployeesContainerWrapper data-test-id="employees-container">
        <h1>Reward Gateway Employees List</h1>
        {!loading && empList.length > 0 && <EmpList employees={empList} />}
      </EmployeesContainerWrapper>
    </>
  );
};

export default EmployeesContainer;
