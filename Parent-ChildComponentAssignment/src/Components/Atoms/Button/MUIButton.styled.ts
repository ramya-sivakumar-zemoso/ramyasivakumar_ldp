import styled from 'styled-components';

export const ActionButton = styled.button`
  background-color: #6c5dd3;
  &:disabled {
    background-color: rgb(100, 94, 136);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 5%;
  margin-left: 8%;
  margin-right: 10%;
  border-radius: 12px;
  width: 276px;
  height: 59px;
`;
