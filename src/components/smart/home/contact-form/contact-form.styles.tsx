import { border, shadows, spacing } from '@consts/template.const';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: ${spacing['32px']};
  background-color: ${({ theme }) => theme.colors.green950};
  border-radius: ${border.width.xl};
  box-shadow: ${shadows.elevation.md};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  column-gap: ${spacing['32px']};
`;
