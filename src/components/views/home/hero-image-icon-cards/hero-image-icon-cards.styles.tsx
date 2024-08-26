import { border, shadows, spacing } from '@consts/template.const';
import styled from 'styled-components';

const breakpoint = '87.5rem';

export const Wrapper = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray50};
  width: 100%;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  align-items: flex-start;

  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  row-gap: ${spacing['32px']};
  column-gap: ${spacing['48px']};

  background: linear-gradient(
    ${({ theme }) => theme.colors.green800},
    ${({ theme }) => theme.colors.green900}
  );
  width: 80%;

  padding: ${spacing['32px']};
  transform: translateY(-50%);
  ${border.radius.sm};
  box-shadow:
    ${shadows.elevation.xl2},
    inset 0px 5px 10px 0px ${({ theme }) => theme.colors.green700};
  z-index: 1;
  border-radius: ${border.radius.md};

  @media (max-width: ${breakpoint}) {
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
    row-gap: ${spacing['32px']};
    column-gap: ${spacing['48px']};
    transform: translateY(-25%);
  }
`;
