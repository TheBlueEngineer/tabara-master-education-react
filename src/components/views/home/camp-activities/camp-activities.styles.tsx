import { spacing, typography } from '@consts/template.const';
import styled from 'styled-components';
import Divider from 'assets/images/home/wavesOpacity.svg?react';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(
    ${({ theme }) => theme.colors.gray50},
    ${({ theme }) => theme.colors.blue50}
  );
`;

export const DivideSVG = styled(Divider)`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  padding: ${spacing['32px']} 10%;
  padding-bottom: ${spacing['96px']};

  & > h1 {
    font-family: 'Roboto Condensed', sans-serif;
    display: flex;
    position: relative;
    ${typography.size.xl4};
    ${typography.weight.black};
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
  }

  & > h2 {
    ${typography.size.xl3};
    ${typography.weight.bold};
    color: ${({ theme }) => theme.colors.blue600};
    margin-bottom: ${spacing['128px']};
  }

  & > ul {
    display: grid;
    grid-template-columns: 1;
    grid-row: auto;
    width: 100%;

    row-gap: ${spacing['128px']};
    column-gap: ${spacing['96px']};
  }
`;
