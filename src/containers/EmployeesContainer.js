import React, { useEffect, useState } from 'react';

import { getEmpList } from 'services/empApi';

import { empFilter } from 'utils/empFilter';

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
    <div>
      <h2>Employees List</h2>
      {!loading && empList.length > 0 && <EmpList employees={empList} />}
    </div>
  );
};

export default EmployeesContainer;
