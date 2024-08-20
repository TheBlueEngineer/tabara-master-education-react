import { shadows, spacing, typography } from '@consts/template.const';
import styled from 'styled-components';
import Divider from 'assets/images/home/wavesOpacity32.svg?react';
import bgImage from 'assets/images/home/b_munti1.webp';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: ${spacing['96px']};
  padding-top: ${spacing['160px']};
  background-image: url(${bgImage});
  background-position: 50%;
  background-size: cover;
  background-attachment: fixed;
  row-gap: ${spacing['32px']};
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    background: hsla(0, 0%, 0%, 0.6);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
  }

  h1 {
    ${typography.size.xl3};
    color: ${({ theme }) => theme.colors.white};
    z-index: 3;
  }

  h2 {
    ${typography.size.xl2};
    color: ${({ theme }) => theme.colors.gray50};
    z-index: 3;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 ${spacing['96px']};
  align-items: flex-start;
  z-index: 3;

  li {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: ${spacing['16px']};
    color: ${({ theme }) => theme.colors.white};

    h3 {
      color: ${({ theme }) => theme.colors.green50};
      ${typography.size.xl};
    }
  }
`;

export const InfoList = styled.ul`
  color: ${({ theme }) => theme.colors.green100};
  ${typography.size.base};

  li {
    margin-bottom: ${spacing['12px']};
  }
`;

export const Frame = styled.div`
  display: flex;
  width: 6rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.green700};
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  box-shadow: ${shadows.elevation.md};

  svg {
    color: ${({ theme }) => theme.colors.white};
    ${typography.size.xl3};
  }
`;

export const DivideSVG = styled(Divider)`
  display: flex;
  width: 100%;
  height: 5rem;
  path {
    fill: ${({ theme }) => theme.colors.green950};
  }
`;
