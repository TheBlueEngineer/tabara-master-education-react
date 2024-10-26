import styled from 'styled-components';

export const Select = styled.div`
  display: block;
  position: relative;
  padding: 5px;
`;

export const Option = styled.button`
  display: block;
  font-size: inherit;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  color: black;
  padding: 0 20px;

  & > li {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }
`;

export const Dropdown = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 100%;
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
`;
