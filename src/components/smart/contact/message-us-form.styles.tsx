import { border, shadows, spacing } from '@consts/template.const';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: ${spacing['48px']};
  background-color: ${({ theme }) => theme.colors.green950};
  border-radius: ${border.width.xl};
  box-shadow: ${shadows.elevation.md};

  & > :last-child {
    margin-top: ${spacing['16px']};
  }
`;

export const Cell = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1;
  width: 100%;
  flex-direction: row;
  column-gap: ${spacing['32px']};
`;
