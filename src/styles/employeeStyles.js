import styled from 'styled-components';

export const EmployeeWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: 1rem;
  margin-bottom: 2rem;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  h1 {
    text-align: center;
  }
`;

export const Image = styled.img`
  width: 5rem;
  border-radius: 50%;
  padding: 0.5rem;
  margin-right: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

export const Name = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const Title = styled.div`
  font-size: 0.7rem;
  font-style: italic;
`;

export const Company = styled.div`
  font-size: 0.9rem;
  width: 20%;
`;

export const Bio = styled.div`
  font-size: 0.7rem;
  font-style: italic;
  width: 20%;
`;

export const Personal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 20%;
`;
