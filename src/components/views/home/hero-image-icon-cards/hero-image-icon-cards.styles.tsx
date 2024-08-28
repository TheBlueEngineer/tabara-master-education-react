import { screens } from '@consts/media-queries.const';
import { border, shadows, spacing } from '@consts/template.const';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray50};
  width: 100%;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  row-gap: ${spacing['32px']};
  column-gap: ${spacing['48px']};
  background-color: ${({ theme }) => theme.colors.green800};
  padding: ${spacing['64px']} ${spacing['64px']};
  margin-bottom: ${spacing['64px']};
  z-index: 1;

  @media ${screens.sm} {
    display: grid;
    align-items: flex-start;
    width: 80%;
    border-radius: ${border.radius.md};
    margin-bottom: ${spacing['64px']};
    background: linear-gradient(
      ${({ theme }) => theme.colors.green800},
      ${({ theme }) => theme.colors.green900}
    );
    box-shadow:
      ${shadows.elevation.xl2},
      inset 0px 5px 10px 0px ${({ theme }) => theme.colors.green700};
    padding: ${spacing['32px']} ${spacing['64px']};
  }

  @media ${screens.md} {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    row-gap: ${spacing['32px']};
    column-gap: ${spacing['48px']};
    transform: translateY(-25%);
  }

  @media ${screens.lg} {
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    row-gap: ${spacing['32px']};
    column-gap: ${spacing['48px']};
    transform: translateY(-25%);
  }

  @media ${screens.xl2} {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    row-gap: ${spacing['32px']};
    column-gap: ${spacing['48px']};
    transform: translateY(-50%);
  }
`;
