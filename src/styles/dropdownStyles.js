import styled from 'styled-components';

export const DropdownWrapper = styled.select`
position: relative;
height: 1.5rem  
width: 6rem;

`;

export const Option = styled.option`
  ${props => `background-color: ${props.color}`}
`;
