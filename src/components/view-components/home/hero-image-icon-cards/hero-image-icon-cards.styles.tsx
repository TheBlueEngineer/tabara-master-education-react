import { border, shadows, spacing } from 'src/consts/template.const';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray50};
  width: 100%;
  justify-content: center;
`;

export const HeroImageIconCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  background: linear-gradient(
    ${({ theme }) => theme.colors.green700},
    ${({ theme }) => theme.colors.green800}
  );
  width: 85%;
  row-gap: 2rem;
  column-gap: 2rem;
  padding: 2rem;
  transform: translateY(-50%);
  ${border.radius.sm};
  box-shadow:
    ${shadows.elevation.xl2},
    inset 0 ${spacing['2px']} 0 ${({ theme }) => theme.colors.green600};
  z-index: 1;
  border-radius: ${border.radius.md};
`;
