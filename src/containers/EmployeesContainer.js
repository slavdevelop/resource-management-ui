import React, { useEffect, useState } from 'react';

import { getEmpList } from 'services/empApi';

import EmpList from 'components/empList';

const EmployeesContainer = () => {
  const [empList, setEmpList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getEmpList().then(r => {
      setEmpList(r.data);
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
