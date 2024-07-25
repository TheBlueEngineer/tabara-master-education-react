import { spacing } from '@consts/template.const';
import styled from 'styled-components';

export const Dropdown = styled.select`
  padding: ${spacing['4px']} ${spacing['16px']};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};

  & > option {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Option = styled.option``;
