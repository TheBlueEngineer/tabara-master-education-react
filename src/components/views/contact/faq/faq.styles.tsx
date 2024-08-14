import { spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${spacing['96px']} 10%;
  padding-top: ${spacing['96px']};
  background-color: ${({ theme }) => theme.colors.white};
  row-gap: ${spacing['32px']};

  h1 {
    ${typography.size.xl2};
    ${typography.weight.bold};
  }

  h2 {
    ${typography.size.xl2};
    ${typography.weight.bold};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  row-gap: ${spacing['16px']};
  column-gap: ${spacing['16px']};
`;
