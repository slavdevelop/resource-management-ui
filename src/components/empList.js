import React from 'react';

import Employee from './employee';

import { EmployeeWrapper } from 'styles/employeeStyles';

const EmpList = ({ employees }) => {
  return (
    <div>
      {employees.map(emp => (
        <EmployeeWrapper key={emp.uuid}>
          <Employee key={emp.uuid} {...emp} />
        </EmployeeWrapper>
      ))}
    </div>
  );
};

export default EmpList;
