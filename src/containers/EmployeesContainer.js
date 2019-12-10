import React, { useEffect, useState } from 'react';

import { getEmpList } from 'services/empApi';

const EmployeesContainer = () => {
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    getEmpList().then(employees => setEmpList(employees));
  }, []);

  return (
    <div>
      <h2>Employees Container</h2>
      <p>{JSON.stringify(empList)}</p>
    </div>
  );
};

export default EmployeesContainer;
