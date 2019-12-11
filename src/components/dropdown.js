import React, { useState } from 'react';
import { DropdownWrapper, Option } from 'styles/dropdownStyles';

const options = [
  { id: 0, value: '#E3C9CEFF', label: 'Pale Lilac' },
  { id: 1, value: '#42EADDFF', label: 'Turquoise' },
  { id: 2, value: '#B1B3B3FF', label: 'Cool Gray' },
  { id: 3, value: '#DD4132FF', label: 'Fiesta' },
  { id: 4, value: '#D6ED17FF', label: 'Lime Punch' },
  { id: 5, value: '#00539CFF', label: 'Royal Blue' }
];

const Dropdown = ({}) => {
  const [color, setColor] = useState();

  return (
    <DropdownWrapper
      value={color}
      onChange={e => {
        const val = e.target.value;
        setColor(val);
      }}
    >
      <span className="square" />
      {options.map(opt => (
        <Option key={opt.id} color={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </DropdownWrapper>
  );
};

export default Dropdown;
