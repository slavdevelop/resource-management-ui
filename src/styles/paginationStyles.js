import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin: auto;
  padding: 2rem 0 1rem 0;
`;

export const PageNumber = styled.div`
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 20%;
  border: 2px solid #f2f2f2;
  background-color: #8a8a8a;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #1a1a1a;
  }

  &.current {
    background-color: #1a1a1a;
  }

  a {
    text-decoration: none;
    line-height: 2rem;
    color: #f2f2f2;
  }
`;
