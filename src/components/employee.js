import React from 'react';

import { tagDestroyer } from 'utils/tagDestroyer';

import {
  Image,
  Name,
  Title,
  Company,
  Bio,
  Personal
} from 'styles/employeeStyles';

const Employee = ({ avatar, bio, company, name, title, uuid }) => {
  return (
    <>
      <Personal>
        <Image src={avatar} alt={uuid} />
        <div>
          <Name>{name}</Name>
          <Title>{title}</Title>
        </div>
      </Personal>
      <Company>{company}</Company>
      <Bio>{tagDestroyer(bio)}</Bio>
    </>
  );
};

export default Employee;
