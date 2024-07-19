import { spacing, typography } from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: linear-gradient(
    ${({ theme }) => theme.colors.gray100},
    ${({ theme }) => theme.colors.blue50}
  );
  padding: ${spacing['96px']} 7.5%;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  width: 100%;

  row-gap: ${spacing['128px']};
  column-gap: ${spacing['96px']};
`;

export const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  display: flex;
  position: relative;
  ${typography.size.xl4};
  ${typography.weight.bolder};
  color: ${({ theme }) => theme.colors.green800};

  &:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 1px;
    bottom: 0;
    left: 25%;
    border: 1px solid ${({ theme }) => theme.colors.green900};
  }
`;

export const Subtitle = styled.h2`
  ${typography.size.xl3};
  ${typography.weight.bold};
  color: ${({ theme }) => theme.colors.blue600};
  margin-bottom: ${spacing['128px']};
`;
