import { borderRadius, elevation, spacing } from 'src/consts/template.const';
import styled from 'styled-components';

export const HeroImageIconCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  background-color: ${({ theme }) => theme.colors.green['300']};
  width: 85%;
  row-gap: 2rem;
  column-gap: 2rem;
  padding: 2rem;
  border-radius: ${borderRadius['2rem']};
  transform: translateY(-50%);
  box-shadow:
    ${elevation.floating},
    inset 0px ${spacing['0.25rem']} 0px
      ${({ theme }) => theme.colors.green['100']};
  z-index: 1;
`;
