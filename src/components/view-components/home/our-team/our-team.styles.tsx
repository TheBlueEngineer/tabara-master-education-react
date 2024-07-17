import { spacing, typography } from 'src/consts/template.const';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding: ${spacing['96px']} 7.5%;

  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.gray50}, ${theme.colors.gray100})`};
`;

export const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif;
  position: relative;
  ${typography.size.xl4};
  ${typography.weight.bolder};
  color: ${({ theme }) => theme.colors.green800};
  word-wrap: break-word;

  &:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 1px;
    bottom: 0;
    left: 25%;
    border: 1px solid ${({ theme }) => theme.colors.green800};
  }
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.blue500};
  ${typography.size.xl2};
  margin-bottom: ${spacing['64px']};
`;

export const List = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  row-gap: ${spacing['96px']};
  column-gap: ${spacing['64px']};
`;
