import { spacing } from '@consts/template.const';
import styled from 'styled-components';

export const Dropdown = styled.select`
  padding: ${spacing['4px']} ${spacing['2px']};
  background-color: transparent;
  cursor: pointer;
  color: inherit;

  & > option {
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
  }
`;

export const Option = styled.option``;
