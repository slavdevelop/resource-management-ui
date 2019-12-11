import styled from 'styled-components';

export const EmployeeWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  padding: 10px;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  font-size: 14px;
  font-style: italic;
`;

export const Company = styled.div`
  font-size: 18px;
  width: 22%;
`;

export const Bio = styled.div`
  font-size: 14px;
  font-style: italic;
  width: 22%;
`;

export const Personal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 22%;
`;
