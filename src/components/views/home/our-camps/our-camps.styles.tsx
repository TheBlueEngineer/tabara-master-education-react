import { spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${spacing['96px']} 10%;

  & > h1 {
    font-family: 'Roboto Condensed', sans-serif;
    position: relative;
    ${typography.size.xl4};
    ${typography.weight.black};
    color: ${({ theme }) => theme.colors.green800};

    &:after {
      content: '';
      position: absolute;
      width: 10%;
      height: 1px;
      bottom: 0;
      left: 45%;
      border: 1px solid ${({ theme }) => theme.colors.green900};
    }
  }

  & > h2 {
    color: ${({ theme }) => theme.colors.blue600};
    ${typography.size.xl2};
  }
`;

export const Offers = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  column-gap: ${spacing['96px']};
  row-gap: ${spacing['64px']};
  padding-top: ${spacing['64px']};
  padding-bottom: ${spacing['64px']};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: ${spacing['16px']};
`;
