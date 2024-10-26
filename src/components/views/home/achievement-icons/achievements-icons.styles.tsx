import { border, shadows, spacing, typography } from '@consts/template.const';
import backgroundImage from 'assets/images/home/home_bg.webp';

import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  width: 100%;
  position: relative;
  justify-content: space-evenly;
  flex-wrap: wrap;
  grid-template-columns: 1;
  grid-template-rows: 4;

  padding: ${spacing['64px']} ${spacing['48px']};
  background-image: url(${backgroundImage});
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  row-gap: ${spacing['64px']};
  column-gap: ${spacing['48px']};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.6);
    z-index: 1;
  }
`;

export const IconCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  row-gap: ${spacing['8px']};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${spacing['24px']};
    border-radius: ${border.radius.sm} 0 ${border.radius.sm};
    background: ${({ theme }) =>
      `linear-gradient(135deg,${theme.colors.green700}, ${theme.colors.green800})`};
    color: ${({ theme }) => theme.colors.green50};
  }

  h2 {
    position: relative;
    ${typography.size.xl2};
    ${typography.weight.black};
    color: ${({ theme }) => theme.colors.green50};
    ${shadows.font.medium};

    &::after {
      content: '';
      position: absolute;
      left: 25%;
      bottom: 0;
      width: 50%;
      height: 1px;
      border: 1px solid ${({ theme }) => theme.colors.green400};
    }
  }

  & > p {
    ${typography.size.lg};
    ${typography.weight.extrabold};
    color: ${({ theme }) => theme.colors.green100};
    ${shadows.font.medium};
  }
`;
