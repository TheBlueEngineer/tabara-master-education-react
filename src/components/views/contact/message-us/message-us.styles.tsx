import { spacing, typography } from '@consts/template.const';
import styled from 'styled-components';
import Divider from 'assets/images/home/wavesOpacity32.svg?react';

export const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  padding: ${spacing['96px']} 10%;
  padding-top: ${spacing['128px']};
  column-gap: ${spacing['64px']};
  background-color: ${({ theme }) => theme.colors.gray50};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h1 {
    position: relative;
    margin-bottom: ${spacing['8px']};
    ${typography.size.xl2};
    color: ${({ theme }) => theme.colors.green800};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 75%;
      height: 1px;
      border: 1px solid ${({ theme }) => theme.colors.green900};
    }
  }

  h2 {
    ${typography.size.xl};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: ${spacing['16px']};
  }

  p {
    ${typography.size.base};
    ${typography.weight.default};
    color: ${({ theme }) => theme.colors.gray700};
    margin-bottom: ${spacing['16px']};
  }
`;

export const DivideSVG = styled(Divider)`
  display: flex;
  width: 100%;
  height: 5rem;
  path {
    fill: ${({ theme }) => theme.colors.gray50};
  }
`;
