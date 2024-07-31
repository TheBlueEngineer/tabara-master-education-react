import { spacing, typography } from '@consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${spacing['96px']} 10%;

  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.gray50}, ${theme.colors.gray100})`};

  & > h1 {
    font-family: 'Roboto Condensed', sans-serif;
    position: relative;
    ${typography.size.xl4};
    ${typography.weight.black};
    color: ${({ theme }) => theme.colors.green800};
    word-wrap: break-word;

    &:after {
      content: '';
      position: absolute;
      width: 50%;
      height: 1px;
      bottom: 0;
      left: 25%;
      border: 1px solid ${({ theme }) => theme.colors.green900};
    }
  }

  & > h2 {
    color: ${({ theme }) => theme.colors.blue600};
    ${typography.size.xl2};
    margin-bottom: ${spacing['64px']};
  }

  & > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    row-gap: ${spacing['64px']};
    column-gap: ${spacing['64px']};
  }
`;
