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

import useModal from 'hooks/useModal';

import Modal from 'components/modal';

const Employee = ({ avatar, bio, company, name, title, uuid }) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} />
      <Personal>
        <Image src={avatar} onClick={toggle} alt={uuid} />
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
