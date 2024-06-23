import styled from 'styled-components';

export const HeroImageIconCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  background-color: ${({ theme }) => theme.colors.green['300']};
  width: 85%;
  row-gap: 2rem;
  column-gap: 2rem;
  padding: 2rem;
  ${({ theme }) => theme.border.radius.sm};
  transform: translateY(-50%);
  ${({ theme }) => theme.shadows.elevation.xl2};
  z-index: 1;
`;
