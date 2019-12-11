import React from 'react';

import Employee from './employee';

import { EmployeeWrapper } from 'styles/employeeStyles';

const EmpList = ({ employees, loading }) => {
  if (loading) return <h1>Loading ...</h1>;

  return (
    <div>
      {employees.map(emp => (
        <EmployeeWrapper key={emp.uuid}>
          <Employee {...emp} />
        </EmployeeWrapper>
      ))}
    </div>
  );
};

export default EmpList;
